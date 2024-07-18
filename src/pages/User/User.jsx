import React from "react";

import Account from "../../components/Account/Account";


import "./user.css";

export default function User() {
    return (
        <React.Fragment>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account card="8349" title="Argent Bank Checking" founds="$2,082.79" />
                <Account card="6712" title="Argent Bank Savings" founds="$10,928.42" />
                <Account card="8349" title="Argent Bank Credit Card" founds="$184.30" />
            </main>
        </React.Fragment>
    );
}