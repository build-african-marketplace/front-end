import React from 'react';
import InventoryList from './InventoryList';
import Login from './Login';


const HomePage = () => {
    return(
        <>
            <Login />
            <InventoryList />
        </>
    )
}

export default HomePage;