import React, {Component} from 'react';
import "../css/bootstrap.css"
import "../css/socicon.css"
import "../css/iconsmind.css"
import "../css/interface-icons.css"
import "../css/lightbox.min.css"
import "../css/theme.css"
import "../css/custom.css"
import homeImage from "../img/juniorDevHome.jpg"
import aboutImage from "../img/aboutSection.jpg"
import meetupLogo from "../img/meetupLogo.svg"

class Home extends Component{
    render(){
    return(
        <React.Fragment>
            <nav class="transition--fade transition--active" style = {{padding:'.5em'}}>
                {/* <!--end of row--> */}
                <div class="row">
                    <div className = "col-sm-1"></div>
                    <div class="col-sm-1 text-left pl-2">
                        <a href="index.html">
                            <h2 className = "text-center" >
                                   JDSB
                            </h2>
                        </a>
                    </div>
                    <div class="col-sm-10">
                        <div class="nav-bar" data-fixed-at="600">
                            <div class="nav-module menu-module left">
                                <ul class="menu">
                                    <li>
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Resources
                                        </a>
                                        <ul>
                                            <li class="dropdown">
                                                <a href="#">COMING SOON</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Upcoming Events
                                        </a>
                                        <ul class="multi-column">
                                            <li>
                                                <ul>
                                                    <li>
                                                        <span class="multi-column__title">
                                                            COMING SOON
                                                        </span>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--end nav module--> */}
                        </div>
                        {/* <!--end nav bar--> */}
                        <div class="nav-mobile-toggle visible-sm visible-xs">
                            <i class="icon-Align-Right icon icon--sm"></i>
                        </div>
                    </div>
                </div>
        </nav>

        <section className="imageblock bg--dark">
        <div className="imageblock__content col-md-6 col-sm-4 pos-left">
            <div className ="" style={{display:'flex',alignItems:'center',justifyContent:'center', opacity: 1, height:"100%"}}>
                <img alt="image" src={homeImage}/>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-5 col-md-push-7 col-sm-8 col-sm-push-4">
                    <div style={{paddingBottom:'3em'}}>
                        <h2>Junior Dev Struggle Bus</h2>
                        <h4>Seattle Meetup Group and Development Community</h4>
                    </div>
                    <div className = "meetupLink row">
                    <a target="_blank" href = "https://www.meetup.com/The-Junior-Dev-Struggle-Bus/">
                        <div className = "col-sm-8">
                            <span>
                                <h4>
                                    Check the Meetup Group
                                </h4>
                            </span>
                        </div>
                        <div className = "col-sm-4">
                            <img src={meetupLogo} className="img-fluid"/>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            {/* <!--end of row--> */}
        </div>
        {/* <!--end of container--> */}
    </section>
    <section class="imageblock about-1 bg--secondary">
                <div class="imageblock__content col-md-6 col-sm-4 pos-right">
                    <div class="" style={{opacity: 1, display:'flex',alignItems:'center',justifyContent:'center', height:'100%'}}>
                        <img alt="image" src={aboutImage}/>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-8">
                            <h3>
                              About the Community
                            </h3>
                            <p>
                            The Junior Dev Struggle Bus is a little tribe of aspiring programmers supporting each other in trying to land that coveted first dev job. The road is long and the struggle is hard when breaking into the tech industry. What we can't accomplish alone, we can accomplish together. Come with your woes and laptops, sip on some joe, get advice on planning your job hunt, make new friends, hangout, pair program, show off your projects, etc. We are laid back and friendly and were here to foster an open minded and caring environment thats focused on helping each other, so please: no douchebags, high school popularity contests, and superiority complexes.
                            </p>
                            <a class="btn btn--square" href="https://www.meetup.com/The-Junior-Dev-Struggle-Bus/" target="_blank">
                                <span class="btn__text">
                                    Join the Meetup
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* <!--end of row--> */}
                </div>
                {/* <!--end of container--> */}
            </section>
    <p>
     
    </p>
        </React.Fragment>
)
    }}


    export default Home