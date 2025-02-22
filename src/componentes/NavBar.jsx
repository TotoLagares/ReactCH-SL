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
    
    const handleHome = () =>{
        navigate("/")
    }
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    return (
        <>
            <nav className="navbar">
            <div className="nav-left">
                <h1 className="logo" onClick={handleHome}>
                SnowLife
                </h1>
            </div>
        
            <ul className="nav-center">
                <li>
                <button onClick={() => handleCategoryClick("men's clothing")}>
                    Tablas
                </button>
                </li>
                <li>
                <button onClick={() => handleCategoryClick("women's clothing")}>
                    Fijaciones
                </button>
                </li>
                <li>
                <button onClick={() => handleCategoryClick("jewelery")}>
                    Ropa
                </button>
                </li>
                <li>
                <button onClick={() => handleCategoryClick("electronics")}>
                    Accesorios
                </button>
                </li>
            </ul>
        
            <div className="nav-right">
                <CartWidget />
            </div>
            </nav>
        </>
      );       
}   

export default NavBar