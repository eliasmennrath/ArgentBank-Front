import { Outlet } from 'react-router-dom';
import Nav from './Navigation.jsx'
import Footer from './Footer.jsx'


export default function Layout() {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}