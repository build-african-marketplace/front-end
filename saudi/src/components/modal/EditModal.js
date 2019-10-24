import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import {axiosWithAuth} from '../../utils/axiosWithAuth'

const initialItem = {
    name: "",
    description: "",
    photo_url: "",
    zip_code: "",
    price: 0,

}

function EditModal({item}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [item, setItem] = useState(initialItem)

    console.log(item.name)
  
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //       .put("/items/:id", item)
    //       .then(res => {
    //         props.updateItems(res.data);
    //         props.history.push("/item-list");
    //         setItem(initialItem);
    //       })
    //       .catch(err => console.log(err));
    //   };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {/* saveEdit */}
            <form onSubmit={undefined}> 
                <label>
                    Item Name:
                    <input
                    type='text'
                    placeholder={`${item.name}`}
                    />
                </label>    

                <label>
                    Item Price:
                    <input
                    type='text'
                    placeholder={`${item.price}`}
                    />
                </label>

                <label>
                    Description
                    <textarea
                    type='text'
                    placeholder={`${item.description}`}
                    />
                </label>

                <label>
                    Zip Code
                    <input
                    type='text'
                    placeholder={`${item.zip_code}`}
                    />
                </label>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default EditModal;