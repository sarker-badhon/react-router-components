import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/contacts",
//     element: <Contacts></Contacts>,
//   },
//   {
//     path: "/About",
//     element: <About></About> ,
//   },

// ]);


const router = createBrowserRouter([


  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "contacts",
        element: <Contacts></Contacts>,
      },
      {
        path:"Friends",
        element:<Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'Friend/:FriendId',
        element:<FriendDetails></FriendDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
      },
      {
        path:'posts',
        element:<Posts></Posts>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts')
      }
    ],
  },


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
