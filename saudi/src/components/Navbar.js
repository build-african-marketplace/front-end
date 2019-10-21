import React from "react";
import { Link } from "react-router-dom";

function signOut(){
    localStorage.clear()
    window.location.href='/'
}

const NavBar= ({user})=>{
    let navLinks;
    if (user.userId){
        navLinks=(
            <div>
                <Link to={`/${user.username}`}>
                    My Profile
                </Link>
                <Link to='myStore'>
                    My Store
                </Link>
            </div>
        )
    }else{
        navLinks=(
            <div>
                <Link to='/logIn'>
                    Log In
                </Link>
                <Link to='/signUp'>
                    Sign Up
                </Link>
                <a onClick={()=> signOut()}>
                    Sign Out
                </a>
            </div>
        )
    }
        return(
            <div className='navContainer'>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/shop'>Shop</Link>
                    {navLinks}
                </nav>
            </div>
        )
}

export default NavBar;