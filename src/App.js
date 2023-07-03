// const React = require('react')
import React from 'react'
import ReactDOM  from 'react-dom/client'
// const ReactDOM = require('react-dom/client')
// const Header  = require('./components/Header')
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// const Body  = require('./components/Body')
// const Footer  = require('./components/Footer')





const AppLayout = () =>{
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)