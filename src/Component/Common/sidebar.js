import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
export default class Sidebar extends Component {

    render() {
        return (
            <ul
                className="navbar-nav sidebar sidebar-light accordion"
                id="accordionSidebar">
                <NavLink
                    to="/"
                    className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon">
                        <img src="img/logo/logo2.png" alt="anh"/>
                    </div>
                    <div className="sidebar-brand-text mx-3">BLogIotAdmin</div>
                </NavLink>
                <hr className="sidebar-divider my-0"/>
                <hr className="sidebar-divider"/>
                <li className="nav-item">
                    <NavLink to="/khoa-hoc" className="nav-link">
                        <i className="fab fa-fw fa-wpforms"/>
                        <span>Khóa học</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/bai-viet" className="nav-link">
                        <i className="fab fa-fw fa-wpforms"/>
                        <span>Bài viết</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/project" className="nav-link">
                        <i className="fab fa-fw fa-wpforms"/>
                        <span>Project</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/video" className="nav-link">
                        <i className="fab fa-fw fa-wpforms"/>
                        <span>Video</span>
                    </NavLink>
                </li>
                <hr className="sidebar-divider"/>
            </ul>
        )
    }
}
