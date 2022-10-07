import React from "react"

import {
    Facebook, 
    Twitter, 
    Instagram, 
    Menu,
    Search
} from "react-feather"

import "./header.css"

function Header() {
    return (
        <nav className="header">
            <div className="container h-100">
                <div className="header__container h-100">
                    <div className="row h-100">
                        <div className="col-lg-3 col-md-3 text-start header__form">
                            <form action="" className="header__seach_form">
                                <input type="seach" className="form-control-sm" placeholder="Search..."/>
                                <span> <Search  size={13}/> </span>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6 header__logo">
                            <div className="text-center w-100">
                                <a href="#">My history</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 text-end header__menu__social">
                            <div className="header__social__links">
                                <a href="#"> <Facebook /></a>
                                <a href="#"> <Instagram/> </a>
                                <a href="#"> <Twitter /></a>
                            </div>
                            <div className="header__menu__toogle">
                                <a href=""> <Menu  size={30}/> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header