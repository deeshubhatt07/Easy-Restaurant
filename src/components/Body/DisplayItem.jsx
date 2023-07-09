import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Comments from './Comments'

const DisplayItem = props => {
  return (
    <div>
        <Card style={{ width: '35rem' }}>
                <Card.Img variant="top" src={props.dishItem.image} />
                <Card.Body>
                    <Card.Title style={{cursor:"pointer"}}>{props.dishItem.name}</Card.Title>
                    <Card.Text>
                        {props.dishItem.description}
                    </Card.Text>
                    <p>price - {props.dishItem.price}$</p>
                </Card.Body>
            </Card>
            <Comments id={props.dishItem.id}/>
    </div>
  )
}

export default DisplayItem