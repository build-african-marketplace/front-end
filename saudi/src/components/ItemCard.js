import React from 'react';
import { connect } from "react-redux";
import { getItemById, deleteItem } from "../actions";
import EditModal from '../components/modal/EditModal'



class ItemCard extends React.Component {
    
    componentDidMount() {
        this.props.getItemById(this.props.match.params.id);
    }

    render() {
        console.log('id', this.props.match.params.id);
        console.log('props', this.props.item);
        const item = this.props.item;
        return (
            <div className="item-list-card">
                <h1>{item.name}</h1>
                <img className="item-photo" src={item.photo_url} alt="item" />
                <p>Price: {item.price}</p>
                <p>City: {item.city}</p>
                <p>Country: {item.country}</p>
                <p>Description: {item.description}</p>
                <EditModal item={item}/>
                <button onClick={() => deleteItem(this.props.match.params.id)} className="delete-btn">Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(
    mapStateToProps,
    { getItemById, deleteItem }
)(ItemCard);