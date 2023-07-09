import React, { useState } from 'react'
import dishes from '../../data/dishes'
import MenuItem from './MenuItem';
import DisplayItem from './DisplayItem';

const MenuList = () => {

    const [item, setItem] = useState(dishes);
    const [selectedDish, setSelectedDish] = useState(dishes[0]);

    const menuItems = item.map((listItem) => {
        return (
            <MenuItem listItem={listItem}
                changedItem={() => selectedDishItem(listItem)}
                key={listItem.id} />
        )
    })

    const selectedDishItem = item => {
        setSelectedDish(item);
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">{menuItems}</div>
                <div className="col-6"><DisplayItem dishItem={selectedDish}/></div>
            </div>
        </div>
    )
}

export default MenuList
