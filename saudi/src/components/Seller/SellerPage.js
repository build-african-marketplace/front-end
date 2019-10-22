import React from "react";
import SellerItemList from "./SellerItemList";


//componentDidMount set user_id in local storage for the user_id endpoint
const SellerPage = () => {
    return(
        <div className="seller-page">
            <h1>Seller Page</h1>
            <SellerItemList />
        </div>
    )
}

export default SellerPage;