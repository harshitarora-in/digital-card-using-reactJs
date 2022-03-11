import React from "react";
import Profile from "../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Main(){
    return (
        <div className="mainContent">
            <img className="avatar" alt="Harshit Arora " src={Profile}></img>
            <div className="textContent">
            <h1 className="name">Harshit Arora</h1>
            <h2 className="designation">Software Developer</h2>
            <h4 className="website">Harshitarora.com</h4>
            <div className="cta-btn">
            <button href="#" className="email-btn"><FontAwesomeIcon className="email-icon" icon={faEnvelope} />Email</button>
            <button href="#" className="linkedin-btn"><FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />LinkedIn</button>
            </div>
            <h2 className="title">About</h2>
            <p className="titleContent">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className="title">Interests</h2>
            <p className="titleContent">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}