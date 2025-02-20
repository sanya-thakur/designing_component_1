// write the component code here
import React from 'react';
import './usercard.css';

const Usercard=()=>{
    const profile_photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54-LmnFNM7QAKVY9lSAydd7jaixIZiQSnnA&s";
    const name="Noah Centineo";
    const email="noah@gmail.com";
    const phone= "+4 5278 9461";
    const address="123 Main St, Springfield, USA";

    return(
        <div className='user-card'>
            <img src={profile_photo} alt="Profile" className='profile-photo'></img>
        <h2 className='user-name'>{name}</h2>
        <p className='user-email'>{email}</p>
        <p className='user-phone'>{phone}</p>
        <p className='user-address'>{address}</p>
        </div>
    );
};
export default Usercard;