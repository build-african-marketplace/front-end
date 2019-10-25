import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavContainer= styled.div`
display:flex;
padding:20px;
`

const NavLinksContainer= styled.div`
display:flex;
`

const NavLinks= styled(Link)`
font-family: 'Open Sans', sans-serif;
font-size:35px;
margin:20px;
&:hover{
    text-decoration:underline
}
`

const SignOutA= styled.a`
font-family: 'Open Sans', sans-serif;
font-size:35px;
margin:20px;
&:hover{
    text-decoration:underline
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
            <NavLinksContainer>
                <NavLinks to='/myStore'>
                    My Store
                </NavLinks>
                <SignOutA onClick={()=> signOut()}>
                    Sign Out
                </SignOutA>
                <NavLinks to='/seller-page'>
                    Seller Page
                </NavLinks>
            </NavLinksContainer>
        )
    }else{
        navLinks=(
            <NavLinksContainer>
                <NavLinks to='/'>
                    Log In
                </NavLinks>
                <NavLinks to='/sign-up'>
                    Sign Up
                </NavLinks>
            </NavLinksContainer>
        )
    }
        return(
            <div className='navContainer'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/inventory-list'>Shop</Link>
                    {navLinks}
                </nav>
            </div>
        )
}

export default NavBar;