import React from 'react'
import google from './google.svg'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import auth from '../Firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const navigate = useNavigate()
    const socialLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                fetch(`https://mt-portfolio2.herokuapp.com/users/${user.email}`, {
                    method: "put",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: user.displayName, email: user.email,
                        photoURL: user.photoURL
                    })

                }).then(res => res.json())
                    .then(json => {
                        localStorage.setItem('Token', json.token)
                        navigate('/')
                    })
            }).catch((error) => {
                const errorCode = error.code;
                toast.error(errorCode)
            });
    }
    return (
        <div className='border mt-5'>
            <button onClick={socialLogin} className='btn btn-ghost text-neutral  w-full btn-md'>
                <img className='w-7 mr-5' src={google} alt="" />
                Continue With Google
            </button>
        </div>
    )
}

export default Social