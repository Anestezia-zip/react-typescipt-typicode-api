import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { Component } from 'react';
import { Comment } from '../interfaces/interfaces';

interface CommentsProps {
    comments: Comment[]
}

class Comments extends Component {
    state: CommentsProps = { comments: [] };

    componentDidMount() {
        axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
        .then((res: AxiosResponse<Comment[]>) => {
            this.setState({comments: res.data})
        })
    }
    
  render () {
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {this.state.comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.email}</h3>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

}

export default Comments