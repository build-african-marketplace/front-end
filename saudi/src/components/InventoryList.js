import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions";


class InventoryList extends React.Component {

    componentDidMount(){
        this.props.getItems();
    }

    render() {
        return(
            <div className="inventory-list">
                {this.props.items.map(item => {
                    return(
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
    { getItems }
)(InventoryList);