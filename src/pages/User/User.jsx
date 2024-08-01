import React from "react";
import { useSelector } from "react-redux";

import Account from "../../components/Account/Account";

import { Navigate } from "react-router-dom";

import store from "../../store/store";
import { profile } from "../../store/user";

import { editProfile } from "../../utils/api";

import "./user.css";

export default function User() {


    const user = useSelector(state => state.user);
    if(user.token == '') {
        return (<Navigate to="/sign-in"/>);
    }

    function toggleVisibility() {
        document.querySelector('.overlay').classList.toggle('active');
    }
    function edit(e) {
        e.preventDefault();
        let valid = false;

        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;

        if(firstName != '' || lastName != '') {
            valid = true;
        }

        if(valid) {
            editProfile(user.token, firstName, lastName);
            store.dispatch(profile({ firstName, lastName }));
            toggleVisibility();
            // Clear inputs
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = ''; 
        } else {
            document.querySelector('.errorMsg').classList.add('visible');
        }
    }

    return (
        <React.Fragment>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                    <button className="edit-button" onClick={toggleVisibility}>Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account card="8349" title="Argent Bank Checking" founds="$2,082.79" />
                <Account card="6712" title="Argent Bank Savings" founds="$10,928.42" />
                <Account card="8349" title="Argent Bank Credit Card" founds="$184.30" />
            </main>

            <div className="overlay">
                <form onSubmit={edit}>
                    <h2>Edit Name</h2>
                    <div className="close" onClick={toggleVisibility}>&times;</div>
                    <p className="error-Msg">Please fill in all fields</p>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <button type="submit">Save</button>
                </form>
            </div>
        </React.Fragment>
    );
}