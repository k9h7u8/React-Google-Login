import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';
import axios from 'axios';

const SignIn = () => {
    return (
        <div id="signInButton">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    // console.log(credentialResponse.credential);
                    axios({
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        url: "http://localhost:4040/user/googlelogin",
                        data: { tokenId: credentialResponse.credential },
                        withCredentials: true
                    }).then(response => {
                        console.log("Google login success", response);
                    })
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </div>
    )
};

export default SignIn;