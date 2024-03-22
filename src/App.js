import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'


const RestaurantCard = () =>{
    return (
        <div className='card'>
            <img src='https://th.bing.com/th/id/OIP.hucFmNcpLJG4iN9hgSBc9gHaEq?pid=ImgDet&rs=1'></img>
            {/* <h2>Burger King</h2>
            <h3>Burgers, American</h3>
            <h4>4.2 stars</h4> */}
            <h2>{name}</h2>
            <h3>{cuisines.joins(", ")}</h3>
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    )
} 



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