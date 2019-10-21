import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions";


class InventoryList extends React.Component {
    render() {
        return(
            <div className="inventory-list">
                <h3>Items List</h3>
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