import React from 'react';
import InventoryList from './InventoryList';
import Login from './Login';

const HomePage = () => {
    return(
        <div className="home-page">
            <Login />
            <InventoryList />
        </div>
    )
}

export default HomePage;