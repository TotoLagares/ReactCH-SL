import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"
import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";


function NavBar(){
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setCategory(category);
        navigate(`/category/${category}`);
      };


    return (
        <>
            <nav className="navbar">
                <div className="nav-item">
                    <ul className="menu">
                        <button  onClick={() =>{handleCategoryClick("men's clothing")}}>tablas</button>
                        <button onClick={() =>{handleCategoryClick("women's clothing")}}>Fijaciones</button>
                        <button onClick={() =>{handleCategoryClick("jewelery")}}>Ropa</button>
                        <button onClick={() =>{handleCategoryClick("electronics")}}>tablas</button>
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