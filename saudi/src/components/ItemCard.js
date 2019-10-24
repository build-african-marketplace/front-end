import React from 'react';
import { connect } from "react-redux";
import { getItemById } from "../actions";
//import EditModal from './modal/EditModal';


class ItemCard extends React.Component {

    componentDidMount() {
        this.props.getItemById();
    }

    render() {
        console.log('props', this.props);
        return (
            <>
                <h1>hi</h1>
                {/* <EditModal item={item} /> */}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items
})

export default connect(
    mapStateToProps,
    { getItemById }
)(ItemCard);