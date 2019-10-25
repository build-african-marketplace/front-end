import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavLink= styled(Link)`
font-family: 'Open Sans', sans-serif;
color: grey;
font-size:20px;
margin:20px;
&:hover{
    text-decoration:none;
    color: mediumvioletred;
}
`

function signOut(){
    localStorage.clear()
    window.location.href='/'
}
//useeffect
const NavBar= ({user})=>{
    let navLinks;
    if (localStorage.getItem('token')){
        navLinks=(
            <>
                <NavLink to='/myStore'>
                    My Store
                </NavLink>
                <NavLink onClick={()=> signOut()}>
                    Sign Out
                </NavLink>
            </>
        )
    }else{
        navLinks=(
            <>
                <NavLink to='/logIn'>
                    Log In
                </NavLink>
                <NavLink to='/sign-up'>
                    Sign Up
                </NavLink>
            </>
        )
    }
        return(
            <div className='nav-container'>
                <>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    {navLinks}
                </>
            </div>
        )
}

export default NavBar;