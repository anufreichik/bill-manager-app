import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import {get} from "lodash";

function MemberForm(props) {
    const [name, setName]=useState("");

    const handleSave=()=>{
        props.onFinish({name});
        props.onClose();
    }

    const handleCancel=()=>{
        props.onClose();
    }

    useEffect(()=>{
        const memberName = get(props, 'initialValues.memberName', '');
        setName(memberName)
    },[props.initialValues])

    return (

        <form  noValidate autoComplete="off">
            <TextField
                error
                id="outlined-error-helper-text"
                label="Error"
                defaultValue="Hello World"
                helperText="Incorrect entry."
                variant="outlined"
            />

                        <div className="col-auto">
                            <label htmlFor="name" >Name</label>
                            <input type="text" className="form-control" id="name"
                                   placeholder="Name"
                                   value={name}
                                   onChange={(e)=>setName(e.target.value)}/>
                        </div>

                        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                        <Button variant="primary" onClick={handleSave}>{props.submitButtonText}</Button>


        </form>

    );
}

export default MemberForm;
