import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import logo from "../images/logo.png";

function Navbar(){

    // eslint-disable-next-line no-unused-vars
    const {state , dispatch} = useContext(UserContext);

    const RenderMenu = () => {
        if(state){
            return(
                <>
                  <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            );
        }else{
            return(
                <>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                </>
            );
        };
    };

    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand"><img src={logo} alt="logo"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ml-auto">

                    <RenderMenu/>

                </ul>

            </div>
         </nav>
        </>
    );
};

export default Navbar;