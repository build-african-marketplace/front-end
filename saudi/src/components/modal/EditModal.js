// import React from 'react'
// import { Modal, Button, Row, Col, Form, ButtonToolbar } from 'react-bootstrap';

// class EditModal extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     render(){
//         return (
//             <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           This is the Edit Modal
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//        <div className="modal-container">
//            Add Form Field
//        </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="danger" onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//         )
//     }
    
// }

// import {Button, ButtonToolbar} from 'react-bootstrap'
// import { EditModal } from './modal';

// addModalShow: false
// //inside render()
// let EditModalClose= () => this.ListeningStateChangedEvent({ EditModalClose: false })

// <ButtonToolbar>
//     <Button variant='primary' onClick={() => this.setState({addModalShow})}>Edit Item</Button>

//     <EditModal
//         show={this.StaticRange.addModalShow}
//         onHide={EditModalClose}    
//     />
// </ButtonToolbar>

import React from 'react';
import ModalActionTypes from '../../actions'

export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({ 
        type: ModalActionTypes.SHOW_MODAL,
        modalProps,
        modalType
    })
}

export const hideModal = () => dispatch => {
    dispatch({
        type: ActionTYpe.HIDE_MODAL
    })
}