import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions";


class InventoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };

    }

    componentDidMount(){
        this.props.getItems();
    }
    
    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    render() {
        let filteredItems = this.props.items.filter(
            (item) => {
                return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return(
            <>
            <div className='search-bar'>
                 <label>Search</label>
                <input 
                    type="text" 
                    value={this.state.search} 
                    onChange={(e) => this.updateSearch(e)}   
                />
            </div>

            <div className="inventory-list">
                {filteredItems.map(item => {
                    return(
                        <div className="item-card">
                            <img className="item-photo" src={item.photo_url} alt="item" />
                            <h3>{item.name}<span>{item.price}</span></h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
            </>
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