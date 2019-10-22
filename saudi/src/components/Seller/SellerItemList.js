import React from 'react';
import { connect } from "react-redux";
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
                        <div className="item-card">
                            <img className="item-photo" src={item.photo_url} alt="item" />
                            <h3>{item.name}<span>{item.price}</span></h3>
                            <p>{item.description}</p>
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

export default connect(
    mapStateToProps,
    { getItemsUserId }
)(SellerItemList);