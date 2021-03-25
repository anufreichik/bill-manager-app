import React, {useEffect, useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {get} from "lodash";
import {Button} from "react-bootstrap";

function PartyForm(props) {
    const [partyDate, setPartyDate] = useState(new Date());
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSave = () => {
        const startDate = partyDate;// moment(partyDate.toLocaleDateString()).format('MM/DD/YY');
        props.onFinish({name, startDate, description});
        props.onClose();

    }
    const handleCancel = () => {
        props.onClose();
    }

    useEffect(() => {
        const partyName = get(props, 'initialValues.partyName', '');
        const partyDescription = get(props, 'initialValues.description', '');
        const partyCreateDate = get(props, 'initialValues.partyDate', new Date());

        setName(partyName);
        setDescription(partyDescription);
        setPartyDate(new Date(partyCreateDate));

    }, [props.initialValues])

    return (
        <div>

            <div className="col-auto">
                <label htmlFor="name">Party Name</label>
                <input type="text" className="form-control" id="name" placeholder="Party Name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col-auto">
                <label htmlFor="name">Notes</label>
                <input type="text" className="form-control" id="notes" placeholder="Party Notes" value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <div className="col-auto">
                <label className="mt-2">Party Date</label>
            </div>
            <div className="col-auto">
                <DatePicker selected={partyDate} onChange={date => setPartyDate(date)} dateFormat="MM/dd/yyyy"/>
            </div>

            <div className="col-auto mt-2 float-right">
                <Button variant="primary" className="mr-2"  onClick={handleSave}>{props.submitButtonText}</Button>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>

            </div>
        </div>
    );
}

export default PartyForm;
