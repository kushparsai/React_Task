
import React from 'react';
import profilePic from './assets/profile.jpeg';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Hello world</h2>
            <p className="card-text">This is the card components</p>
        </div>
    );
}
export default Card;