// import PropTypes from 'prop-types';
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
      ]
    },
  ]);
  
 
  
  export default router;