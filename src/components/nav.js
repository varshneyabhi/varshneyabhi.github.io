import React from 'react'
import { Link } from "gatsby"

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src="https://varshneyabhi.github.io/public/img/logo.png" width="30" height="30" alt="" />
                &nbsp;ABHISHEK</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName="active" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName="active" to="/about/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeClassName="active" to="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
