import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './Share/Footer/Footer';
import Navbar from './Share/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <><Navbar /> <Home /> <Footer /></>,	
		},
		{
			path: 'user/login',
			element: <><Navbar /> <Login/> <Footer /></>,	
		},
		{
			path: 'user/register',
			element: <><Navbar /> <Register/> <Footer /></>,	
		}
	])
	return (
		<div className='App'>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
