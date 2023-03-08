const React = require('react')
const ReactDOM = require('react-dom/client')

const Title = () =>{
    <h1 id='title' key='h2'>
        Food App
    </h1>
}

const HeaderComponent = () =>{
    return (
        <div className='header'>
            <Title/>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent/>)