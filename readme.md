* create file index.html, index.css, index.js, npm init, git init
* download parcel 
* download react, reactdom


boiler plate code: 

HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food App</title>
</head>
<body>
    <div id="root"></div>
</body>
<script type="module" src="./index.js"></script>
</html>


JS

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
