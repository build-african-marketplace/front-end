import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const navContainer= styled.div`
display:flex;
padding:20px;
`

const navLinksContainer= styled.div`
display:flex;
`

const navLinks= styled(Link)`
font-family: 'Open Sans', sans-serif;
font-size:35px;
margin:20px;
&:hover{
    text-decoration:underline
}
`

const signOutA= styled.a`
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

const NavBar= ({user})=>{
    console.log('user',user)
    let navLinks;
    if (user.user_id){
        navLinks=(
            <navLinksContainer>
                <navLinks to={`/${user.user_id}`}>
                    My Profile
                </navLinks>
                <navLinks to='myStore'>
                    My Store
                </navLinks>
            </navLinksContainer>
        )
    }else{
        navLinks=(
            <navLinksContainer>
                <navLinks to='/logIn'>
                    Log In
                </navLinks>
                <navLinks to='/signUp'>
                    Sign Up
                </navLinks>
                <signOutA onClick={()=> signOut()}>
                    Sign Out
                </signOutA>
            </navLinksContainer>
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