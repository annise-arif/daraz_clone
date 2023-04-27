import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './Share/Footer/Footer';
import Navbar from './Share/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NavMenuCategory from './Share/NavMenuCategory/NavMenuCategory';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,	
		},
		{
			path: '/login',
			element: <><NavMenuCategory /><Login/></>,				
		},
		{
			path: '/register',
			element: <><NavMenuCategory /> <Register/></>,	
		},
		{
			path: '/product-details',
			element: <><NavMenuCategory /> <ProductDetails/></>,	
		}
		
	])
	return (
		<div className='App'>
			<Navbar />
			<RouterProvider router={router}></RouterProvider>
			<Footer />
		</div>
	);
}

export default App;
