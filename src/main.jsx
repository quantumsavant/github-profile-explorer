import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";

import './index.css'
import App from './App.jsx'
import RepoList from "./components/RepoList.jsx";


const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
},

{
  path: '/repositories',
  element: <RepoList />,
}

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
