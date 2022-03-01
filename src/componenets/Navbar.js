import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        let {deta} = this.props;
        let {title, link1, link2} = deta;        
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">{title}</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-NavLink" aria-current="page" to="/">{link1}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-NavLink" to="/top_headlines">{link2}</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
