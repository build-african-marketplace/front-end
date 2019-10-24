import React from 'react';
import { connect } from "react-redux";
import { getItems } from "../actions";
import styled from 'styled-components'

const InventoryListContainer= styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 30px 0;
`
const ItemPhoto= styled.img`
    max-width: 250px;
`

class InventoryList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            selectCountry: ''
        };
    }

    componentDidMount(){
        this.props.getItems();
    }
    
    updateSearch(event) {
        this.setState({search: event.target.value})
    }

    updateFilter(event){
        this.setState({selectCountry: event.target.value})
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
            <div>
               
            </div>
            <InventoryListContainer>
                {filteredItems.map(item => {
                    return(
                        <div className="item-list-card">
                            <ItemPhoto src={item.photo_url} alt="item" />
                            <h3>{item.name}<span>{item.price}</span></h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </InventoryListContainer>
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