import React from 'react'
import comments from '../../data/comments'
import { Table } from 'react-bootstrap';

const Comments = props => {
    console.log(props);
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
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Tuesday</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Comments
