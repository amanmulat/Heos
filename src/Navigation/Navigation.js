import React, { useState }from 'react'
import "./Navigation.css" 
function Navigation() {
    const [navi, setnavi] = useState(false)
    const [logo, setLogo] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setnavi(true)
        } else {
            setnavi(false)
        } 
    }
    const logoApear = () => {
        if (window.scrollY >= 300) {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }
    window.addEventListener('scroll' ,  logoApear )
    window.addEventListener('scroll' ,  changeBackground )
    return (
        <div className={ navi ? 'navigation active' : 'navigation '}>
                <header className="container">
                <nav>
                    {logo ? <h1>Heos</h1> : <h1></h1> }
                        
                        <ul className="nav__links">
                            <li><a href="#">Why Heos</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#"><button>Contact</button></a></li>
                        </ul>
                    </nav>
               </header>
               
        </div>
    )
}

export default Navigation
