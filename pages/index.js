import React from 'react'
import ReactDOM from 'react-dom'
import HEAD from 'next/head'

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'


export default class extends React.Component {
    render() {
        return (
            <div>
                <HEAD>
                    <title>AT&amp;T</title>
                    <link href="https://fonts.googleapis.com/css?family=Roboto|Lato|Montserrat|Muli" rel="stylesheet" />
                    <link rel="stylesheet" href="static/css/styles.css"/>
                    <link rel="stylesheet" href="static/css/owl.theme.default.css"/>
                    <link rel="stylesheet" href="static/css/owl.carousel.css"/>
                    <link rel="stylesheet" href="static/css/main.css"/>
                </HEAD>
                <Navbar />
                <main>
                    <Banner />
                </main>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </div>
        )
    }
}