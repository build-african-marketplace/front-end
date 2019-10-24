import React from 'react';
import { connect } from "react-redux";
import { getItemById } from "../actions/index";
// import EditModal from './modal/EditModal';



class ItemCard extends React.Component {
    
    componentDidMount() {
        console.log('DidMount-log_byId', this.props)
        this.props.getItemById();
    }

    render() {
        console.log('ItemCard-render props', this.props);
        return (
            <div className="seller-item-list">
                {/* {this.props.items.map((item, key) => {
                    return (
                            <div className="item-list-card" key={key}>
                                <img className="item-photo" src={item.photo_url} alt="item" />
                                <h3>{item.name}<span>{item.price}</span></h3>
                                <h4>{item.city}</h4>
                                <p>{item.description}</p>
                                <EditModal item={item} />
                            </div>
                    )
                })} */}
            </div>
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