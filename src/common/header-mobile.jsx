import React, {useState} from "react"
import { X } from "react-feather"

import "./header-mobile.css"


function HeaderMobile ({toogle, setToogle}) {

    const handleClick = (event) => {
        event.preventDefault();
        setToogle(prevState => !prevState)
    }
    // render
    return (
        <nav className={`mobile-nav ${toogle ? 'toogle-nav':''}`}>
            <a href="" className="close" onClick={handleClick}>
                <X size={35}/>
            </a>
            <div className="mobile_nav_container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderMobile