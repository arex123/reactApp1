* create file index.html, index.css, index.js, npm init, git init
* download parcel 
* download react, reactdom,
* start app by : npx parcel index.html
* or start app by adding : "start":"parcel index.html", in package.json script 


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




react jsx can only have one parent so , enclose every thing in method under div or use fragment(which is like a
empty tag)
react fragment: 
<> </>
<React.Fragment> </React.Fragment>


* inline css in react: write css inside an object like and add it in tag with style attribute

const styleObj={
    backgroundColor:"red",
}

const jsx=(
    <div style={styleObj}>
    </div>
)

OR

const jsx=(
    <div style={{  backgroundColor:"red"}}>
    </div>
)



* named import
import { Title } from './Component'

* Default import
import Header from './Component'