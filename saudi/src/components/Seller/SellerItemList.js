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
                {this.props.items.map((item, key) => {
                    return (
                        <div key={key} className="item-card">
                            <img className="item-photo" src={item.photo_url} alt="item" />
                            <h3>{item.name}<span>{item.price}</span></h3>
                            <h4>{item.zip_code}</h4>
                            <p>{item.description}</p>
                            <EditModal item={item}/>
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