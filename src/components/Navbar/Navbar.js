import React from "react";
import "./Navbar.scss";
import Logo from './Logo.png'
import Test from './test.jpg'
import { Link, Navigate } from "react-router-dom";

const Logout = () => {
    Navigate("/login");
};

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="DIGIVENTRI" />
                        </Link>
                    </div>
                    <div className="middle">
                    </div>
                    <div className="user">
                        <div className="user_image">
                            <Link to="/">
                                <img src={Test} alt="" />
                            </Link>
                        </div>
                        <div className="user_details">
                            <div className="user_name">

                                <p>Vihan Gammanpila</p>

                            </div>
                            <div className="Logout">
                                <p onClick={() => Logout()}>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
        </>
    );
}

export default Navbar;