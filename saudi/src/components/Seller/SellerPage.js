import React from "react";
import SellerItemList from "./SellerItemList";
import { connect } from 'react-redux';
import { getItemsUserId } from '../../actions';
import styled from 'styled-components';
import SellerPageHeader from '../../images/SellerPage.jpg'

const Header = styled.div`
    background-image: url(${SellerPageHeader});
    background-size: 100%;
    width: auto;
    height: 100%;

`;

const Title = styled.h1`
    height: 254px;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    text-align: center;
`;

//componentDidMount set user_id in local storage for the user_id endpoint
class SellerPage extends React.Component {

    componentDidMount = () => {
        const id = localStorage.getItem("user_id");
        this.props.getItemsUserId(id);
    }
    render() {
        return (
            <div className="seller-page">
                <Header>
                    <Title>Seller Page</Title>
                </Header>
                <SellerItemList />
            </div>
        )
    }
}

export default connect(
    null,
    { getItemsUserId }
)(SellerPage);