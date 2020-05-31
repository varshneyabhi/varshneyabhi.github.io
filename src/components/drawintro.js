import React from 'react'

const introStyle = {
    marginTop : "-280px",
    paddingTop : "40px",
    paddingBottom : "40px",
    backgroundColor : "#3c3836",
    border : "1px solid #fb4934",
}

function PrintPythonTag() {
    return (
        <h5 align="center" className="orange">
            <span className="grey"> print (" </span> Technical Lead In  <strong style={{color:"#4169E1"}}> NOKIA </strong> 
            <span className="grey">   ")</span>
        </h5>
    )
}

function DrawPic() {
    return  (
        <div align="center">
            <div className="d-none d-sm-block"> <img src="/img/abhishek.jpg" className="rounded-circle" alt="Abhishek" height="200px" /> </div>
            <div className="d-block d-sm-none"> <img src="/img/abhishek.jpg" className="rounded-circle" alt="Abhishek" height="100px" /> </div>
        </div>
    )
}

export default () => 
    <div className="container" style={introStyle}>
        <DrawPic />
        <h1 align="center" className="fg1" style={{marginTop : "10px"}}> Hi, I am Abhishek Varshney.</h1>
        <h4 align="center" className="yellow"> (A Programmer By Hobby And Profession) </h4>
        <br/>
        <h5 align="center" className="orange"> 
            <span className="grey"> cout &lt;&lt; </span> Software Engineer / Devops Engineer <span className="grey"> &lt;&lt; endl;</span>
        </h5>
        <PrintPythonTag />
    </div>