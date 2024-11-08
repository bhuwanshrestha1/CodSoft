import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Aboutme from './pages/Aboutme.jsx';

import "@fontsource/outfit";
import "@fontsource/roboto";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";

const router = createBrowserRouter([
{
  path:"/",
  element:<App/>,
},
{
  path:"/aboutme",
  element: <Aboutme/>
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
