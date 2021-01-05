import React, {useState} from 'react';
import {FaPlus} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";

function MemberForm(props) {
    const[showModal, setShowModal]=useState(false);
    const [name, setName]=useState('')
    const toggle = () => setShowModal(!showModal);
    const handleSave=()=>{
        props.addMember({name});
        setShowModal(false);
    }
    return (

            <div>
                <button type="button" className="btn btn-outline-primary rounded-pill p-2" onClick={toggle}><FaPlus/><span className="p-2">New Member</span></button>
                <Modal show={showModal} onHide={toggle} >
                    <Modal.Header closeButton>
                        <Modal.Title>Member</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div className="col-auto">
                            <label htmlFor="name" >Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
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

export default MemberForm;