import React from 'react'
import {Card,Button} from 'react-bootstrap'

const MenuItem = props => {
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={props.listItem.image} />
                <Card.Body>
                    <Card.Title style={{cursor:"pointer"}} onClick={props.changedItem}>{props.listItem.name}</Card.Title>
                    <Card.Text>
                        {props.listItem.description}
                    </Card.Text>
                    <p>price - {props.listItem.price}$</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuItem
