import React, { useState } from 'react'
import dishes from '../../data/dishes'
import MenuItem from './MenuItem';
import DisplayItem from './DisplayItem';
import commentData from '../../data/comments'
import { Button,Modal } from 'react-bootstrap';

const MenuList = () => {

    const [item, setItem] = useState(dishes);
    const [selectedDish, setSelectedDish] = useState(dishes[0]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const comment2 = commentData.filter((com) => {
        if (0 === com.dishId)
            return com;
    })

    const [comment, setComment] = useState(comment2);

    const menuItems = item.map((listItem) => {
        return (
            <MenuItem listItem={listItem}
                changedItem={() => selectedDishItem(listItem)}
                key={listItem.id} />
        )
    })

    const selectedDishItem = item => {
        setSelectedDish(item);
        const comment1 = commentData.filter((com) => {
            if (item.id === com.dishId)
                return com;
        })
        setComment(comment1);
    }

    return (
        <div>
            <div className="row">
                <div className="col-6"  onClick={handleShow}>{menuItems}</div>
                <div className="col-6">
                    <Modal size='lg' show={show} onHide={handleClose}>
                        <Modal.Body><DisplayItem dishItem={selectedDish} comment={comment} /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MenuList
