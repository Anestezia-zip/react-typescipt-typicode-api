import axios, {AxiosResponse} from 'axios';
import React from 'react';
import { Component } from 'react';
import { Post } from '../interfaces/interfaces';

interface PostProps {
    posts: Post[]
}

class Posts extends Component {
    state: PostProps = { posts: [] };

    componentDidMount() {
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then((res: AxiosResponse<Post[]>) => {
            this.setState({posts: res.data})
        })
    }
    
  render () {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

}

export default Posts