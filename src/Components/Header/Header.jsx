import React, { useState } from 'react'
import { Link } from "react-router-dom"; 
// ==== site logo import =====
import Logo from "../../Assets/Img/logo.png";
import Search from "../../Assets//Img/search.png";
// style
import './Header.scss';

function Header({setSearch, setPrev}) {

    const [ btn, setBtn ] = useState(true);

    // active function
    const handleActive = (e) =>{
        const removeClass = document.querySelector(".active");
        removeClass.classList.remove("active");

        e.currentTarget.classList.add("active");

        setBtn(true);
        menuFilter(e.target.innerHTML);
    }

    const menuFilter = (text) => {
        if(text === "all"){
            setPrev(0);
        }else if(text === "Design Theory"){
            setPrev(20);
        }else if(text === "ux"){
            setPrev(35);
        }else if(text === "ui"){
            setPrev(50);
        }else if(text === "Typography"){
            setPrev(75);
        }
    }

    // button
    const handleButton = () => {
        setBtn(!btn);
    }

    // input change
    const handleInput = (e) => {
        setSearch(e.target.value);
    }

  return (
    <header className='header'>
        <div className="container header__block">
            {/* ==== site logo start ==== */}
            <Link to={"/"}>
                <img className='header__logo' src={Logo} alt="site logo" />
            </Link>
            {/* ==== site logo end */}
            
            {/* ===== humburger button ==== */}
            <button className='header__humburger' 
                onClick={handleButton}
            >
            {btn ? <i className='bx bx-menu'></i> : <i className='bx bx-x'></i>}
            </button>

            {/* ==== nav start ==== */}
            <nav className={btn ? "header__nav" : "header__nav nav"}>
                <ul className="header__nav-list">
                    <li className="header__nav-item active" onClick={handleActive}>
                        all
                    </li>
                    <li className="header__nav-item" onClick={handleActive}>
                        Design Theory
                    </li>
                    <li className="header__nav-item" onClick={handleActive}>
                        ux
                    </li>
                    <li className="header__nav-item" onClick={handleActive}>
                        ui
                    </li>
                    <li className="header__nav-item" onClick={handleActive}>
                        Typography
                    </li>
                </ul>
            </nav>
            {/* ==== nav end ==== */}

            {/* ==== form input start ==== */}
            <form className="header__form" onSubmit={(e) => e.preventDefault()}>
                <input className='header__form-input' placeholder='Search' onChange={handleInput} type="text" />
                <div className="header__form-icon">
                    <img src={Search} alt="search" />
                </div>
            </form>
            {/* ==== form input end ==== */}

        </div>
    </header>
  )
}

export default Header