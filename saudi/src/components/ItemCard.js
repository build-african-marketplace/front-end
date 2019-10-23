import React from 'react';
import { connect } from "react-redux";
import { getItemById } from "../actions";


class ItemCard extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            selectCountry: ''
        };
    }

    componentDidMount() {
        this.props.getItemById();
    }

    render() {
        return (
            <>
                <h1>hi</h1>
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