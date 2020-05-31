import React from "react"
import Header from '../components/header'
import DrawIntro from '../components/drawintro'
import NavBar from '../components/nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const aboutStyle = {
    minHeight: "100vh",
    backgroundColor: "#f2f2f2",
}


const DrawAbout = () => {
	return (
		<div>
		Under construction.
		</div>
	)
}


export default () =>
    <div>
        <div style={aboutStyle}>
    		<div className="topline"></div>
            <NavBar></NavBar>
            <DrawAbout />
        </div>
    </div>
//background-image: url("/img/rocky-wall.png");
