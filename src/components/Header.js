import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './nav.css'



class Header extends Component
{

    render()
    {
        return(
            <>
                <nav className="navbar navbar-expand-lg bg-l justify-content-end " >
                    
                    <div className="container" >
                        <div className="row">

                            <div className="col-lg-6" >
                                <h3 className="text-black my-2 py-3" style={{lineHeight:"auto", fontSize:"32px"}} > KASULA KAVYA SRI </h3>
                            </div>

                            <div className="col-lg-6">
                                <ul className="navbar-nav p-1 m-1 ">
                                    <li className="nav-item">
                                        <Link to="/home" className="nav-link active text-white"> Home </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/profile" className="nav-link active"> Profile </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link active "> About </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active "> Contact </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </nav>


            </>
        )

    }
}
















export default Header;