import React from 'react'
import { Table } from 'react-bootstrap';

const Comments = props => {
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>rating</th>
                        <th>comment</th>
                        <th>Author</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.comment.dishId}</td>
                        <td>{props.comment.rating}</td>
                        <td>{props.comment.comment}</td>
                        <td>{props.comment.author}</td>
                        <td>{props.comment.date}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Comments
