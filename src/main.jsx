import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Root from './Root/root.jsx'
import Home from './Home/home.jsx'
import Donation from './Donation/donation.jsx'
import Statistics from './Statistics/statistics.jsx'
import Dondetail from './donationdetails/dondetail.jsx'
  import Errorpage from './Errorelement/errorpage.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:< Errorpage></Errorpage>,
  
    children:[
      
        {
          path:'/',
       element:<Home></Home>
         }, 
       
       
      
        {
          path:'/dondetail/:id',
          loader:()=>fetch('data.json'),
          element:<Dondetail></Dondetail>
        },
      
        {
          path:'/donation',
          loader:()=>fetch('data.json'),
          element:<Donation></Donation>
        },
      
        {
          path:'/statistics',
          loader:()=>fetch('data.json'),
          element:<Statistics></Statistics>
        },
      

    ]
  }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

  
  

