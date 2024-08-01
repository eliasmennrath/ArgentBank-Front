import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import store from "../store/store";
import { logout } from "../store/user";

export default function Navigation() {

    const user = useSelector(state => state.user);
    let isConnected = false;
    if(user.token != '') {
        isConnected = true;
    }

    function closeConnection(e) {
        e.preventDefault();
        store.dispatch(logout());
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {isConnected ? 
            <div>
                <NavLink className="main-nav-item" to="/user">
                    <i className="fa fa-user-circle"></i>
                    {user.firstName}
                </NavLink>
                <NavLink className="main-nav-item" to="/" onClick={closeConnection}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
            :<div>
                <NavLink className="main-nav-item" to="/sign-in">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
            }
            
        </nav>
    );
}