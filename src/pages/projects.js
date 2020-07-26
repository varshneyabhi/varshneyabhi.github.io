import React from "react"
import NavBar from '../components/nav'


const projectsStyle = {
    minHeight: "100vh",
    backgroundColor: "#3c3836",
}


const DrawProjects = () => {
	return (
		<div>
            Working a lot...
		</div>
	)
}


export default () =>
    <div>
        <div style={projectsStyle}>
    		<div className="topline"></div>
            <NavBar></NavBar>
            <DrawProjects />
        </div>
    </div>
