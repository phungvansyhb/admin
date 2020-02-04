import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav
                    className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">

                    <form className="formSearch">
                        <input type="text" defaultValue="" className="searchInfo" placeholder="Tìm kiếm ..."/>              
                        <button type="button" name="" id="" className="btn btn-success" >tim kiem</button>
                    </form>
                   
                    <ul className="navbar-nav ml-auto">
                        
                        <div className="topbar-divider d-none d-sm-block"/>
                        
                        <li className="nav-item dropdown no-arrow">
                            <a
                                className="nav-link dropdown-toggle"
                                href="-"
                                id="userDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <img
                                    className="img-profile rounded-circle"
                                    alt="anh"
                                    src="img/boy.png"
                                    style={{
                                        maxWidth: '60px'
                                    }}/>
                                <span className="ml-2 d-none d-lg-inline text-white small">Maman Ketoprak</span>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a className="dropdown-item" href="-">
                                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"/>
                                    Profile
                                </a>
                                <a className="dropdown-item" href="-">
                                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"/>
                                    Settings
                                </a>
                                <a className="dropdown-item" href="-">
                                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"/>
                                    Activity Log
                                </a>
                                <div className="dropdown-divider"/>
                                <a className="dropdown-item" href="login.html">
                                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"/>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
