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
                <NavLinks to={`/${user.username}`}>
                    My Profile
                </NavLinks>
                <NavLinks to='/myStore'>
                    My Store
                </NavLinks>
                <SignOutA onClick={()=> signOut()}>
                    Sign Out
                </SignOutA>
            </NavLinksContainer>
        )
    }else{
        navLinks=(
            <NavLinksContainer>
                <NavLinks to='/logIn'>
                    Log In
                </NavLinks>
                <NavLinks to='/signUp'>
                    Sign Up
                </NavLinks>
            </NavLinksContainer>
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