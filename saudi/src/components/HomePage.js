import React from 'react';
import InventoryList from './InventoryList';
import Login from './Login';
import HomeSplash from '../../public/images/HomeSplash.jpg'
import styled from 'styled-components'

const HomeContainer= styled.div`
background-img: url(${HomeSplash});
`
const HomePage = () => {
    return(
        <HomeContainer>
            <Login />
            <InventoryList />
        </HomeContainer>
    )
}

export default HomePage;