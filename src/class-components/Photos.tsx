import axios, {AxiosResponse} from 'axios';
import React from 'react';
import { Component } from 'react';
import { Album } from '../interfaces/interfaces';

interface PhotosProps {
    photos: Album[]
}

class Photos extends Component {
    state: PhotosProps = { photos: [] };

    componentDidMount() {
        axios.get<Album[]>('https://jsonplaceholder.typicode.com/photos')
        .then((res: AxiosResponse<Album[]>) => {
            this.setState({photos: res.data})
        })
    }
    
  render () {
    return (
        <div>
            <h2>Photos</h2>
            <ul>
                {this.state.photos.map(photo => (
                    <li key={photo.id}>
                        <h3>{photo.title}</h3>
                        <img width={150} src={photo.url} />
                    </li>
                ))}
            </ul>
        </div>
    )
  }

}

export default Photos