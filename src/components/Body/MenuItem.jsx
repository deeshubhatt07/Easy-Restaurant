import React from 'react'
import {Card,Button} from 'react-bootstrap'

const MenuItem = props => {
    console.log(props);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.listItem.image} />
                <Card.Body>
                    <Card.Title>props.listItem.name</Card.Title>
                    <Card.Text>
                        {props.listItem.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MenuItem
