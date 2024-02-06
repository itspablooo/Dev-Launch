
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App.jsx'
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

// Preliminarty set up for react-router to work
const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <Homepage /> 
      },
      { 
        path: 'login', 
        element: <Login /> 
      },
      { 
        path: 'about', 
        element: <AboutPage /> 
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
