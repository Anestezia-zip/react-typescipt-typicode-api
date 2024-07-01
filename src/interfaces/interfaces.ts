export interface InitialState {
    posts: Post[] | [],
    todos: Todo[] | [],
    albums: Album[] | [],
    comments: Comment[] | [],
}
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
// export interface Todo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }
export interface Todo {
    userId: number,
    id: number,
    todo: string,
    completed: boolean
}
export interface Album {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnaiUrl: string
}
export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    password?: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

