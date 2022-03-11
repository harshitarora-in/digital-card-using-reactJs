import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <div className="footer">
            <FontAwesomeIcon size="2x" icon={faFacebook} />
            <FontAwesomeIcon size="2x" icon={faDiscord} />
            <FontAwesomeIcon size="2x" icon={faGithub} />
            <FontAwesomeIcon size="2x" icon={faTwitter} />
        </div>
    )
}