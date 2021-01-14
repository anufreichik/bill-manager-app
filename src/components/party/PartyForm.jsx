import React, {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from 'moment';

import {
    Button,
    Modal,
} from "react-bootstrap";

import {FaPlus} from "react-icons/all";


function PartyForm(props) {
    const [partyDate, setPartyDate] = useState(new Date());
    const[showModal, setShowModal]=useState(false);
    const [name, setName]=useState('')
    const [description, setDescription]=useState('')
    const toggle = () => setShowModal(!showModal);

    const handleSave=()=>{
        const startDate = moment(partyDate.toLocaleDateString()).format('MM/DD/YY');
        props.addParty({name,startDate,description});
        setShowModal(false);
    }
    return (
        <div>
            <button type="button" className="btn btn-outline-primary rounded-pill p-3" onClick={toggle}><FaPlus/><span className="p-2">Add New Party</span></button>
            <Modal show={showModal} onHide={toggle} >
                <Modal.Header closeButton>
                    <Modal.Title>Party</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="col-auto">
                        <label htmlFor="name" >Party Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Party Name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="name" >Notes</label>
                        <input type="text" className="form-control" id="notes" placeholder="Party Notes" onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <label  className="mt-2">Party Date</label>
                    </div>
                    <div className="col-auto">
                        <DatePicker  selected={partyDate} onChange={date => setPartyDate(date)}  dateFormat="MM/dd/yyyy" />
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>

            </Modal>



        </div>
    );
}

export default PartyForm;