import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx';
import Spaghetti from "../pages/Spaghetti";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/spaghetti',
    element: <Spaghetti/>
  }
]);

export default router;