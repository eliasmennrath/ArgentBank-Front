import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store/store.js';

import './index.css'

// Pages
import Home from './pages/Home/Home.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import User from './pages/User/User.jsx'

// Layout
import Layout from './layout/Layout.jsx';


const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
        path: '/',
        element: <Home />,
	},
	{
        path: '/sign-in',
        element: <SignIn />,
	},
	{
        path: '/user',
        element: <User />,
	}
		]
	}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
);
