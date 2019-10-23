import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom"
import { getItemsUserId } from "../../actions";
import EditModal from '../modal/EditModal';


class SellerItemList extends React.Component {


    componentDidMount() {
        this.props.getItemsUserId();
    }

    render() {
        return (
            <div className="seller-item-list">
                {this.props.items.map(item => {
                    return (
                            <div className="item-list-card">
                                <img className="item-photo" src={item.photo_url} alt="item" />
                                <Link to={`/item/${item.id}`}>
                                    <h3>{item.name}<span>{item.price}</span></h3>
                                </Link>
                                <p>{item.description}</p>
                                <EditModal />
                            </div>
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