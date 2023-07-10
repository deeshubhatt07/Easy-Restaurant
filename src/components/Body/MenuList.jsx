import React, { useState } from 'react'
import dishes from '../../data/dishes'
import MenuItem from './MenuItem';
import DisplayItem from './DisplayItem';
import commentData from '../../data/comments'

const MenuList = () => {

    const [item, setItem] = useState(dishes);
    const [selectedDish, setSelectedDish] = useState(dishes[0]);

    const comment2 = commentData.filter((com) => {
        if (0===com.dishId)
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
                <div className="col-6">{menuItems}</div>
                <div className="col-6"><DisplayItem dishItem={selectedDish} comment={comment}/></div>
            </div>
        </div>
    )
}

export default MenuList
