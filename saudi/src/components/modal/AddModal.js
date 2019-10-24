import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { addItem } from '../../actions/index'


function AddModal({ addItem }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({ name: '', price: '', city: '', country: '', description: '', user_id: localStorage.getItem('user_id')})

    const changeHandler = e => {
        let value = e.target.value;
        setProduct({
            ...product,
            [e.target.name]: value
        })
    }

  const handleSubmit = () => {
    //e.preventDefault();
    addItem(product);
    setProduct({
        name: '',
        price: '',
        city: '',
        country: '',
        description: ''
    })
    //props.history.push('/items');
  }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Add Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}> 
                <label>
                    Name:
                    <input type='text' name='name' value={product.name} onChange={changeHandler} />
                </label>
                <label>    
                    City:
                    <input type='text' name='city' value={product.city} onChange={changeHandler} />
                </label>
                <label>
                    Country:
                    <input type='text' name='country' value={product.country} onChange={changeHandler} />
                </label>
                <label> 
                    Price:   
                    <input type='text' name='price' value={product.price} onChange={changeHandler} />
                </label>
              <label>
                Description:
                    <input type='text' name='description' value={product.description} onChange={changeHandler} />
              </label>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={ (e) => handleSubmit(e)}>
              Add Item
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


export default withRouter(connect(
    null,
    { addItem }
)(AddModal));