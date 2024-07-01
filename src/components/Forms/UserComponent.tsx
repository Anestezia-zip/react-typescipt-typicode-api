import { FC, FormEvent, useEffect, useRef, useState } from "react"
import { Services } from "./apiServices"
import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"


const UserComponent: FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const navigate: NavigateFunction = useNavigate()

    useEffect(() => {
        if (emailRef.current && passRef.current) {
            console.log('User Component render');
        }
    },[])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailRef.current && passRef.current) {
            Services.handleUser(emailRef, passRef, navigate)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} style={{backgroundColor: 'lightblue', padding:'10px'}}>
            <div>
                Email: <input type="text" ref={emailRef} required/>
            </div>
            <div>
                Password: <input type="password" ref={passRef} required/>
            </div>
            <div>
                <input type="submit" value='Login'/>
            </div>
        </form>
    </div>
  )
}



// const [email, setEmail] = useState('123');
// const [pass, setPass] = useState('124');
    
//     const [formValue, setFormValue] = useState({
//         email: 'qqq',
//         pass: 'qqq',
//     });
//     const handleFormChange = (key, value) => {
//         setFormValue((prevState) => ({
//             ...prevState,
//             [key]: value
//         }))
//     }

//     useEffect(() => {
//         // console.log('render', email, pass);
//         console.log(formValue);
//     }, [formValue])

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formValue);
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" onChange={(event) => handleFormChange('email', event.target.value)}/>
//             <input type="password" onChange={(event) => handleFormChange('pass', event.target.value)}/>
//             <input type="submit" value='Login'/>
//         </form>
//     </div>
//   )


export default UserComponent
