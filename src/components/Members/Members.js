import React, { useEffect, useState } from 'react';
import AddedMembers from '../AddedMembers/AddedMembers';
import Member from '../Member/Member';
import './Members.css';
//all members data show here
const Members = () => {
    const [members, setMembers] = useState([]);
    const [addedMember, setAddedMember] = useState([]);

    useEffect(() => {
        fetch('./tourist-club.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, []);
    //create event-listener-for add member and display it.
    const handleMember = member => {
        const search = addedMember.map(members => members.name)
        //add condition for skip multiple add one member;
        if (!search.includes(member.name)) {
            const newCart = [...addedMember, member];
            setAddedMember(newCart);
        }
    }
    return (
        <div className="tourist-member-container m-3">
            <div className="row row-cols-1 row-cols-md-3 g-4 me-3">
                {
                    members.map(member => <Member
                        key={member._id}
                        handleMember={handleMember}
                        member={member}></Member>)
                }
            </div>
            {/* add-members-component area */}
            <div className="added-members-container">
                <AddedMembers addedMember={addedMember}></AddedMembers>
            </div>
        </div>
    );
};
export default Members;