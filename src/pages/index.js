import React from "react"
import Header from '../components/header'
import DrawIntro from '../components/drawintro'
import NavBar from '../components/nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const indexStyle = {
    minHeight: "100vh",
    backgroundColor: "#f2f2f2",
}

const DrawContactBar = () => {
    return (
        <div align="center" style={{paddingBottom: "20px"}}>
            <ul id="menu" align="center">
                <li>
                    <a href="mailto:varshneyabhi@gmail.com">
                        <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" color="black" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/varshneyabhi">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/varshneyabhi/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="black" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default () =>
    <div>
        <div style={indexStyle}>
    		<div className="topline"></div>
            <NavBar></NavBar>
            <Header> </Header>
            <DrawIntro />
            <DrawContactBar></DrawContactBar>
        </div>
    </div>
//background-image: url("/img/rocky-wall.png");
