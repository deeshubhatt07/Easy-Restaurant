import React from 'react'
import {Card,Button} from 'react-bootstrap'
import Comments from './Comments'
import commentData from '../../data/comments'
import { useEffect,useState } from 'react'

const DisplayItem = props => {

  const [comment, setComment] = useState([]);

  useEffect(() => {
    const comment = commentData.filter((com) => {
      if(props.dishItem.id===com.id)
        return com;
    })
    setComment(comment)
  }, [])
  

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
            <Comments id={comment}/>
    </div>
  )
}

export default DisplayItem
