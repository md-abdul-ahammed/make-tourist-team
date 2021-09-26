import React from 'react';
import './AddedMembers.css'

const AddedMembers = (props) => {
    const { addedMember } = props;
    let total = 0;
    for (const x of addedMember) {
        total = total + x.balance;
    }
    return (
        <div className="text-center border shadow-lg p-3">
            <h3 className='fw-bold'>Member Added: {addedMember.length}</h3>
            {addedMember.map(member => <div className="d-flex align-items-center added-border mb-3">
                <img className="img-handle" alt="img" src={member.picture} />

                <p className='fs-5 mt-2 ms-2 fw-bold'>{member.name}: </p>
                <p className='fs-5 mt-2 ms-2 fw-bold'>${member.balance}</p>

            </div>)}
            <h3 className='fw-bold'>Total Balance: ${total}</h3>
            <div className="text-center">
                <button className="btn btn-outline-primary text-center fw-bold"><i className="fas fa-fighter-jet"></i> Let's Go</button>
            </div>

        </div>
    );
};

export default AddedMembers;