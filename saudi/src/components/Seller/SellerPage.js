import React from "react";
import SellerItemList from "./SellerItemList";
import { connect } from 'react-redux';
import { getItemsUserId } from '../../actions';


//componentDidMount set user_id in local storage for the user_id endpoint
class SellerPage extends React.Component {

    componentDidMount = () => {
        const id = localStorage.getItem("user_id");
        this.props.getItemsUserId(id);
    }
    render() {
        return (
            <div className="seller-page">
                <h1>Seller Page</h1>
                <SellerItemList />
            </div>
        )
    }
}

export default connect(
    null,
    { getItemsUserId }
)(SellerPage);