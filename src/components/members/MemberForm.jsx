import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {get} from "lodash";

function MemberForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')

    const handleSave = () => {
        props.onFinish({name, email});
        props.onClose();
    }

    const handleCancel = () => {
        props.onClose();
    }

    useEffect(() => {

        const memberName = get(props, 'initialValues.memberName', '');
        const memberEmail = get(props, 'initialValues.email', '');
        setName(memberName);
        setEmail(memberEmail);

    }, [props.initialValues])

    return (

        <form noValidate autoComplete="off">
            {/*<TextField*/}
            {/*    error*/}
            {/*    id="outlined-error-helper-text"*/}
            {/*    label="Error"*/}
            {/*    defaultValue="Hello World"*/}
            {/*    helperText="Incorrect entry."*/}
            {/*    variant="outlined"*/}
            {/*/>*/}

            <div className="col-auto">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name"
                       placeholder="Name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-auto">
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" id="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col-auto mt-2 float-right">

                <Button variant="primary" className="mr-2" onClick={handleSave}>{props.submitButtonText}</Button>
                <Button variant="secondary"  onClick={handleCancel}>Cancel</Button>

            </div>
        </form>

    );
}

export default MemberForm;
