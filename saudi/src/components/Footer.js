import React from 'react';
import Logo from '../images/Logo_white.png'
import styled from 'styled-components';

const FooterLogo = styled.img`
    width: 15%;
    height: 15%;
`;

const FooterContainer = styled.div`
    background: #1D2C3C;
    color: white;
    display: flex;
`;

const Info = styled.div`
    width: 20%;
    justify-content: flex-end;
`;


const Footer = () => {
    return (
        <>
        <FooterContainer>
        <FooterLogo src={Logo} />
        <Info>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <label>Follow Us</label>
        </Info>
        </FooterContainer>
        </>
    )
}
export default Footer;

