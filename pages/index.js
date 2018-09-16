import React from 'react'
import ReactDOM from 'react-dom'
import HEAD from 'next/head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


library.add(fab, faFacebook, faYoutube, faInstagram, faTwitter )
library.add( faEnvelope )

export default class extends React.Component {
    render() {
        return (
            <div>
                <HEAD>
                    <title>AT&amp;T</title>
                    <link rel="stylesheet" href="static/main.css"/>
                </HEAD>
                <nav>
                    <div className="nav-container">
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
                        <div className="nav-sub-content"></div>
                    </div>
                </nav>
                <main>
                    <h2>Hello, world!</h2>
                </main>
            </div>
        )
    }
}