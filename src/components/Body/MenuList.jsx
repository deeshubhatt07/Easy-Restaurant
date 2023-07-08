import React, { useState } from 'react'
import dishes from '../../data/dishes'
import MenuItem from './MenuItem';

const MenuList = () => {

    const [item, setItem] = useState(dishes);

    const menuItems = item.map((listItem) => {
        return (
            <MenuItem listItem={listItem}
                key={listItem.id} />
        )
    })

    return (
        <div>
            <div className="row">
                <div className="col-6">{menuItems}</div>
                <div className="col-6">Right 6</div>
            </div>
        </div>
    )
}

export default MenuList
