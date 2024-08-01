import "./signIn.css"

import store from "../../store/store";
// import { useSelector } from "react-redux";
import { useState } from "react";

import { login, profile } from "../../store/user";


import { connect, getProfile } from "../../utils/api";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        document.querySelector('.errorMsg').classList.remove('visible');

        connect(email, password)
        .then(res => {
            if(res) {
                store.dispatch(login(res))
                // Nouveau fetch pour recupérer profile
                getProfile(res)
                .then(userInfos => {
                    if (userInfos) {
                        let firstName = userInfos.firstName
                        let lastName = userInfos.lastName
                        let email = userInfos.email
                        store.dispatch(profile({ firstName, lastName, email }))
                    }
                })
                // Navigate('/user');
                navigate('/user');
            } else {
                // Display error 
                document.querySelector('.errorMsg').classList.add('visible');
            }
        });
    }

    return (
        <>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" onClick={submit}>Sign In</button>
                    </form>

                    <div className="errorMsg">
                        <p>Invalid credentials</p>
                    </div>
                </section>
            </main>
        </>
    )
}