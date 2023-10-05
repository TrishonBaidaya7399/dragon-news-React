// import PropTypes from 'prop-types';
import {
  createBrowserRouter,
} from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader: ()=>fetch('/data/news.json'),
        },
        {
          path: "/news/:id",
          element: <PrivateRoute><News/></PrivateRoute>,
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