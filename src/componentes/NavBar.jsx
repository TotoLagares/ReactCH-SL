import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"

function NavBar(){
    return (
        <>
            <nav className="navbar">
                <div className="nav-item">
                    <ul className="menu">
                        <button>Tablas</button>
                        <button>Fijaciones</button>
                        <button>Ropa</button>
                        <button>Accesorios</button>
                    </ul>
                </div>
                <div className="nav-item">
                    <div className="logo">
                        <h1>SnowLife</h1>
                    </div>
                </div>
                <div className="nav-item">
                    <CartWidget/>
                </div>
            </nav>
        </>        
    )
}   

export default NavBar