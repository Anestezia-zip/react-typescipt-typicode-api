import axios from "axios";
import { AppRoutes } from "../../Routing/AppRoutes";
import { RefObject } from "react";
import { NavigateFunction } from "react-router-dom";
import { IUser, Comment } from "../../interfaces/interfaces";

export const Services = {
    handleComment: (data) => {
        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((resData) => console.log(resData))

        console.log('Comment was sended', data);
    },

    handleUser: async (
        emailRef: RefObject<HTMLInputElement>, 
        passRef:RefObject<HTMLInputElement>, 
        navigate: NavigateFunction
    ) => {
        try {
            const user: IUser = {
                id: 0,
                email: emailRef.current?.value ?? '',
                password: passRef.current?.value ?? '',
                name: "",
                username: "",
                address: {
                    street: "",
                    suite: "",
                    city: "",
                    zipcode: "",
                    geo: {
                        lat: "",
                        lng: ""
                    }
                },
                phone: "",
                website: "",
                company: {
                    name: "",
                    catchPhrase: "",
                    bs: ""
                }
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
            navigate(AppRoutes.USERS)
            localStorage.setItem('authUser', JSON.stringify({...user, id:53536473}))

        } catch (error) {
            console.error(error)
        }


        console.log('User was successfully created');
    }
}