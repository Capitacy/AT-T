import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'

library.add(fab, faFacebook, faYoutube, faInstagram, faTwitter )
library.add( faEnvelope, faArrowAltCircleDown )


export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-container">
                        <MainNavBar />
                        <SubNavBar />
                    </div>
                </nav>
            </div>
        )
    }
}


function SubNavBar(props) {
    return (
        <div className="nav-sub-content">
            <div className="sub-container">
                {/* dropdown starts */}
                <div className="dropdown">
                    <span><p>About Us &nbsp;<FontAwesomeIcon icon={["far","arrow-alt-circle-down"]} /></p></span>
                    <div className="dropdown-content">
                        <a href="/info"><p>Detail information</p></a>
                        <a href="/awards"><p>Awards</p></a>
                        <a href="/legaldocs"><p>Legal Documents</p></a>
                        <a href="/contact"><p>Contact</p></a>
                    </div>
                </div>
                {/* dropdown stops */}
                {/* no dropdown here */}
                <div className="dropdown">
                    <span><a href="/offers"><p>Special Offers</p></a></span>
                </div>
                {/* no dropdown here */}
                {/* dropdown starts */}
                <div className="dropdown">
                    <span><p>Holiday Packages &nbsp;<FontAwesomeIcon icon={["far","arrow-alt-circle-down"]} /></p></span>
                    <div className="dropdown-content">
                        <a href="/tours/nepal"><p>Nepal Tours</p></a>
                        <a href="/tours/europe"><p>Europe Tours</p></a>
                        <a href="/tours/southasia"><p>South Asia Tours</p></a>
                        <a href="/tours/middleasia"><p>Middle Asia Tours</p></a>
                        <a href="/tours/europe"><p>Africa Tours</p></a>
                    </div>
                </div>
                {/* dropdown stops */}
                {/* dropdown starts */}
                <div className="dropdown">
                    <span><p>Support &nbsp;<FontAwesomeIcon icon={["far","arrow-alt-circle-down"]} /></p></span>
                    <div className="dropdown-content">
                        <a href="/support/locationmap"><p>Location Map</p></a>
                        <a href="/support/emailaddresses"><p>Email Addresses</p></a>
                        <a href="/support/messege"><p>Message Us</p></a>
                    </div>
                </div>
                {/* dropdown stops */}
                {/* dropdown starts */}
                <div className="dropdown">
                    <span><p>Travel &amp; Tour Tips &nbsp;<FontAwesomeIcon icon={["far","arrow-alt-circle-down"]} /></p></span>
                    <div className="dropdown-content">
                        <a href="/tips/basics"><p>Basic Tips</p></a>
                        <a href="/tips/dos&amp;donts"><p>What to do &amp; what not to</p></a>
                        <a href="/tips/tourtypes"><p>Types of tours</p></a>
                        <a href="/tips/support"><p>Ask Us Live</p></a>
                    </div>
                </div>
                {/* dropdown stops */}
                {/* no dropdown here */}
                <div className="dropdown">
                    <span><a href="/career"><p>Career</p></a></span>
                </div>
                {/* no dropdown here */}
            </div>
        </div>
    )
}

function MainNavBar(props) {
    return (
        <div className="nav-content">
            <a href="/" className="brand-logo">
                <img src="static/images/brand-logo.png" alt="brand-logo-transparent"/>
            </a>
            <ul className="small-menu">
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['far', 'envelope']} /></i></a></li>
            </ul>
            <ul className="small-menu">
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['fab', 'youtube']} /></i></a></li>
                <li><a href="#"><i><FontAwesomeIcon icon={['far', 'envelope']} /></i></a></li>
            </ul>
        </div>
    )
}