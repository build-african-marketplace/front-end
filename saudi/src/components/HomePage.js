import React from 'react';
import InventoryList from './InventoryList';
import Login from './Login';
import HomeSplash from '../images/HomeSplash.jpg'
import styled from 'styled-components'

const HomeContainer = styled.div`
    background-image: url(${HomeSplash});
    background-size: 100%;
  width: auto;
  height: 100%;
  
`;



const HomePage = () => {
    return(
        <HomeContainer>
            <Login />
            <InventoryList />
        </HomeContainer>
    )
}

export default HomePage;