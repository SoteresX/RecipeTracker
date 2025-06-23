import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes/AppRoutes';
import './styles/Global.css';

function App() {
  
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
