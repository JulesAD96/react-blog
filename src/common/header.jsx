import React from "react"

import "./header.css"

function Header() {
    return (
        <nav className="header">
            <div className="container h-100">
                <div className="header__container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 text-start header__container__form">
                            <form action="" className="header__container__seach_form">
                                <input type="seach" className="form-control-sm"/>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6 text-center">
                            <strong>Logo</strong>
                        </div>
                        <div className="col-lg-3 col-md-3 text-end">
                            <strong>Social and menu</strong>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header