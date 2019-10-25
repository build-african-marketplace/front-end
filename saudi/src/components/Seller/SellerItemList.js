import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom"
import { getItemsUserId } from "../../actions";
import AddModal from '../modal/AddModal';
import styled from 'styled-components';

const ModalContainer = styled.div`
    margin: 20px;
`;

const CardContainer = styled.div`
    border: 2px solid #83E38D;
    max-width: 250px;
    padding: 10px;
    margin: 20px;
    background: white;
`;

const ItemPhoto= styled.img`
    max-width: 250px;
`


class SellerItemList extends React.Component {

    componentDidMount() {
        this.props.getItemsUserId();
    }

    render() {
        const item = this.props.item;
        console.log("s_ItemList", this.props.items)
        return (
            <div className="seller-item-list">
                <ModalContainer >
                     <AddModal item={item} />
                </ModalContainer>
                {this.props.items.map((item, key) => {
                    return (             
                            <CardContainer key={key}>
                                <Link to={`/item/${item.id}`}>
                                    <ItemPhoto className="item-photo" src={item.photo_url} alt="item" />
                                    <h3>{item.name}</h3>
                                </Link>
                                <span>${item.price}</span>
                                <p>{item.description}</p>
                            </CardContainer>                    
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default withRouter(connect(
    mapStateToProps,
    { getItemsUserId }
)(SellerItemList));