import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom"
import { getItemsUserId } from "../../actions";
import AddModal from '../modal/AddModal';


class SellerItemList extends React.Component {

    componentDidMount() {
        this.props.getItemsUserId();
    }

    render() {
        console.log("s_ItemList", this.props.items)
        return (
            <div className="seller-item-list">
                {this.props.items.map((item, key) => {
                    return (
                        <>
                        <AddModal />
                            <div className="item-list-card" key={key}>
                        <Link to={`/item/${item.id}`}>
                                <img className="item-photo" src={item.photo_url} alt="item" />
                                <h3>{item.name}</h3>
                        </Link>
                                <span>{item.price}</span>
                                <p>{item.description}</p>
                                <button>Delete</button>
                            </div>
                        </>
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