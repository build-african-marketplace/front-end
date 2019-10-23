import React from 'react';
import InventoryList from './InventoryList';
import Login from './Login';
import styled from 'styled-components'





const HomePage = () => {
    return(
       <>
            <Login />
            <InventoryList />
        </>
    )
}

export default HomePage;