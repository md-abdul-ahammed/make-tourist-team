import React from 'react';
import './Member.css'

const Member = (props) => {
    const { name, balance, email, gender, phone, picture } = props.member;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={picture} className="card-img-top img-circle" alt="..." />
                <div className="card-body">
                    <table className="table fw-bold fs-5">
                        <tbody className='font-size'>
                            <tr>
                                <td>Name:</td>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <td>Balance:</td>
                                <td>${balance}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>{gender}</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{phone}</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="text-center">
                        <button onClick={() => props.handleMember(props.member)} className="btn btn-outline-primary text-center fw-bold"><i className="fas fa-user-plus"></i> Add Member</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Member;