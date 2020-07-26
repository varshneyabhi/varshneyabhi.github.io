import React from 'react'

const introStyle = {
    marginTop : "-210px",
    paddingTop : "40px",
    paddingBottom : "40px",
    backgroundColor : "#3c3836",
    //background:"linear-gradient(160deg, rgb(60, 56, 54, 0.4), rgb(60, 56, 54, 0.4) 20%, #3c3836 20%, #3c3836, #3c3836 80%, #ffe066 80%, #ffe066)",
    //background:"linear-gradient(160deg, #ffe066, #ffe066 20%, #3c3836 20%, #3c3836, #3c3836 80%, #ffe066 80%, #ffe066)",
    //background:"linear-gradient(160deg, #ffb84d, #ffb84d 20%, #3c3836 20%, #3c3836, #3c3836 80%, #ffb84d 80%, #ffb84d)",
    //border : "1px solid #fb4934",
    borderRadius: "15px",
    boxShadow: " 4px 4px 15px 0px rgba(0,0,0,0.87)",
}

function PrintPythonTag() {
    return (
        <div>
            <h5 align="center" className="orange">
                <span className="grey"> print (" </span> Senior Engineer In  <strong style={{color:"#4169E1"}}> NOKIA </strong> <span className="grey">   ")</span>
            </h5>
            <div align="center">
                <a href="" class="badge badge-primary">#python</a>&nbsp;
                <a href="" class="badge badge-success">#microservice</a>&nbsp;
                <a href="" class="badge badge-danger">#backenddeveloper</a>&nbsp;
                <a href="" class="badge badge-warning">#scripting</a>&nbsp;
                <a href="" class="badge badge-info">#devops</a>
            </div>
        </div>
    )
}

function DrawPic() {
    return  (
        <div align="center">
            <div className="d-none d-sm-block"> <img src="./img/abhishek.jpg" className="rounded-circle" alt="Abhishek" height="200px" /> </div>
            <div className="d-block d-sm-none"> <img src="./img/abhishek.jpg" className="rounded-circle" alt="Abhishek" height="100px" /> </div>
        </div>
    )
}

export default () => 
    <div className="container" style={introStyle}>
        <DrawPic />
        <h1 align="center" className="fg1" style={{marginTop : "10px"}}> Hi, I am Abhishek Varshney.</h1>
        <h4 align="center" className="yellow"> (A Programmer By Choice And Profession) </h4>
        <br/>
        <PrintPythonTag />
    </div>
