import React, {Component} from 'react';

export default function Header(props){
    console.log(props)
    const Link  = props.link
    console.log(props)
    return(
        <nav className="transition--fade transition--active" style = {{padding:'.5em'}}>
                <div className="row">
                    <div className = "col-sm-1"></div>
                    <div className="col-sm-1 text-left pl-2">
                        <a href="/">
                            <h2 className = "text-center" >
                                   JDSB
                            </h2>
                        </a>
                    </div>
                    <div className="col-sm-10">
                        <div className="nav-bar" data-fixed-at="600">
                            <div className="nav-module menu-module left">
                                <ul className="menu">
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/resources">
                                            Resources
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Upcoming Events
                                        </a>
                                        <ul>
                                            <li className="dropdown">
                                                <a href="#">COMING SOON</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--end nav module--> */}
                        </div>
                        {/* <!--end nav bar--> */}
                        <div className="nav-mobile-toggle visible-sm visible-xs">
                            <i className="icon-Align-Right icon icon--sm"></i>
                        </div>
                    </div>
                </div>
        </nav>
    )
}