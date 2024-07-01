import { useEffect, useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from "joi";
import { Services } from "./apiServices";
import React from "react";

interface CommentFormData {
    title: string;
    comment: string;
}

const CommentComponent = () => {
    useEffect(() => {
    })

    const schema = Joi.object({
        title: Joi.string().required().min(6).messages({
            'string.empty': 'Field is required',
            'string.min': 'Minimum 6 symbols'
        }),
        comment: Joi.string().required()
    })

    const { handleSubmit, register, watch, formState: {errors} } = useForm<CommentFormData>(
        {
            resolver: async (data, context, options) => {
                return joiResolver(schema)(data, context, options)
            }
        }
    );

    const onSubmit: SubmitHandler<CommentFormData> = (data) => {
        Services.handleComment(data)
    }

  return (
    <div style={{backgroundColor: 'lightgoldenrodyellow', padding:'10px'}}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                Title: <input type="text" {...register('title', {required: true})}/>
                {errors.title && <span>{errors.title.message}</span>}
            </div>
            <div>
                Comment: <input type="text" {...register('comment', {required: true})}/>
                {errors.comment && <span>{errors.comment.message}</span>}
            </div>
            <div>
                <input type="submit" value='Post'/>
            </div>
        </form>
    </div>
  )
}

export default CommentComponent

// const CommentComponent = () => {
//     const emailRef = useRef('')
//     const passRef = useRef('')

//     useEffect(() => {
//         console.log('render');
//     })

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3000/api/login', {
//             method: 'POST',
//             body: JSON.stringify({
//                 email: emailRef.current.value,
//                 password: passRef.current.value,
//             })
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" ref={emailRef}/>
//             <input type="password" ref={passRef}/>
//             <input type="submit" value='Login'/>
//         </form>
//     </div>
//   )
// }

// export default CommentComponent