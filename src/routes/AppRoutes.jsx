import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx';
import Recipe from "../pages/Recipe.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/recipe/:name',
    element: <Recipe/>
  }
]);

export default router;