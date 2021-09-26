import React from 'react';
import './AddedMembers.css'
//add member area start from here
const AddedMembers = (props) => {
    const { addedMember } = props;
    let total = 0;
    //total balance count here
    for (const member of addedMember) {
        total = total + member.balance;
    }
    return (
        <div className="text-center border shadow-lg p-3 primary-bg-color rounded-3">
            {/* showing added member */}
            <h3 className='fw-bold'>Members Added: <span className='text-warning'>{addedMember.length}</span></h3>
            {addedMember.map(member =>
                <div key={member._id} className="d-flex align-items-center added-border mb-3">
                    <img className="img-handle" alt="img" src={member.picture} />
                    <p className='fs-5 mt-2 ms-2 fw-bold'>{member.name}: </p>
                    <p className='fs-5 mt-2 ms-2 fw-bold text-warning'>${member.balance}</p>
                </div>)}
            <h3 className='fw-bold'>Total Balance: <span className='text-warning'>${total}</span></h3>
            <div className="text-center">
                <button className="btn btn-primary text-center fw-bold"><i className="fas fa-fighter-jet"></i> Let's Go</button>
            </div>
        </div>
    );
};

export default AddedMembers;