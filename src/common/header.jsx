import React, {useState} from "react"

import {
    Facebook, 
    Twitter, 
    Instagram, 
    Menu,
    Search
} from "react-feather"

import HeaderMobile from "./header-mobile"

import "./header.css"

function Header() {


     //Toogle state
    const [toogle, setToogle] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setToogle(prevState => !prevState)
    }

    return (
        <nav className="header">
            <div className="container h-100">
                <div className="header__container h-100">
                    <div className="row h-100">
                        <div className="col-md-3 text-start header__form">
                            <form action="" className="header__seach_form">
                                <input type="seach" className="form-control-sm" placeholder="Search..."/>
                                <span> <Search  size={13}/> </span>
                            </form>
                        </div>
                        <div className="col-md-6 header__logo">
                            <div className="text-center w-100">
                                <a href="#">My history</a>
                            </div>
                        </div>
                        <div className="col-md-3 text-end header__menu__social">
                            <div className="header__social__links">
                                <a href="#"> <Facebook size={15}/></a>
                                <a href="#"> <Instagram size={15}/> </a>
                                <a href="#"> <Twitter size={15}/></a>
                            </div>
                            <div className="header__menu__toogle">
                                <a href="" onClick={handleClick}> <Menu  size={30}/> </a>
                                <HeaderMobile 
                                    toogle={toogle}
                                    setToogle={setToogle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header