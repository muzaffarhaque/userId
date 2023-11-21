import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from './pages';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
function App() {
    const router = createBrowserRouter([
        {
            path: "/react-vite-app",
            element: <Home/>
        }
    ]);
    return (
    <> 
     <RouterProvider router={router}/>
     <ToastContainer /> 
    </>)
}

export default App
