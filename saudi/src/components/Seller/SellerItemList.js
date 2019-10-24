import React from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom"
import { getItemsUserId } from "../../actions";


class SellerItemList extends React.Component {


    componentDidMount() {
        this.props.getItemsUserId();
    }

    render() {
        return (
            <div className="seller-item-list">
                {this.props.items.map(item => {
                    return (
                        <Link to={`/item/${item.id}`}>
                            <div className="item-list-card">
                                <img className="item-photo" src={item.photo_url} alt="item" />
                                    <h3>{item.name}<span>{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        </Link>
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