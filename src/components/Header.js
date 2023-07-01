
export  const Title = () =>( //note '('  vs '{'
    <h1 id='title'>
        Food App
    </h1>
)


const Header = () =>{
    return (
        <div className='header'>
            <Title />
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

export default Header