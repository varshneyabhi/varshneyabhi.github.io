import React from "react"
import NavBar from '../components/nav'


const aboutStyle = {
    minHeight: "100vh",
    backgroundColor: "#3c3836"
}

const skillborder = {borderLeft: "thick solid green", paddingLeft:"10px", marginTop: "10px"}

const DrawSkillSet = () => {
    return (
        <div>
            <h4 style={skillborder}>Skillset:</h4>
            <div style={skillborder}>
                <div>Python, C, C++</div>
                <div>Flask, ReactJS</div>
                <div>Operating System Concepts (Memory Management, Process Management).</div>
                <div>Good working knowledge on Linux and Scripting</div>
            </div>
            <div style={skillborder}>
                <div><strong>Telecom:</strong> PCU, LTE and good understanding of related protocols.</div>
                <div><strong>Networking:</strong> IP, TCP, UDP and other related concepts.</div>
            </div>
        </div>
    )
}

const DrawAbout = () => {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col col-12 col-sm-7 about_background" style={{"borderLeft": "thick solid #ff0000"}}>
                    <h2>About</h2>
                    <div style={{ "marginTop": "30px" }}>
                        My professional journey started in 2007 when I started working on core Telecom 2G, LTE as Software Developer and worked for around 10 years.
                        Later on, I moved to follow my passion and joined PNM to work on Network Monitoring in NOKIA.
                    </div>
                    <div style={{ "marginTop": "30px" }}>
                        PNM is service which monitors Network Elements' Health and KPIs near real time.
                        I leanred many things here and became proficient in Python, Microservices (Using flask), Data Analysis, Bash and DevOps concepts
                        which includes managing multiple openstack instances created for customer use. This includes automating Microservices management using
                        'systemd', monitoring performance and other related tasks.
                    </div>
                    <div style={{ "marginTop": "30px" }}>
                        I wrote many exciting features which you can read at <a href="#/projects">Projects</a>.
                    </div>
                    <div style={{ "marginTop": "30px" }}>
                        So you see I have amazing mixture of experience which includes good understanding of Network and
                        Telecom domain and advanced understanding and uses of DevOps, backend development and Data Analysis using Python.
                    </div>
                    <div style={{ "marginTop": "30px" }}>
                        I work with Python, C, C++, Bash. My most of the work experience is wih 'C' followed by 'Python'. A great combination of lower level OS concepts
                        with High level Application programming.
                        I have working knowledge of ReactJS which makes me a full stack developer also.
                        If you notice, this site is made with Gatsby which is a static site generator using ReactJS.
                    </div>
                    <div style={{ "marginTop": "30px" }}></div>
                </div>
                <div className="col col-12 col-sm-5 text-white"><DrawSkillSet /></div>
            </div>
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
