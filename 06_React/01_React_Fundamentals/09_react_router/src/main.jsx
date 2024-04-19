import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Navigate } from 'react-router-dom'
import { AboutUs, BlogDetails, Blogs, Contact, Home, FourNotFour, Seach, Dashboard, Login, Logout } from './pages'


let LoggedIn = true;
const LoginStateData = {
  "message": "Login First To Access The Dashboard"
};
const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blog-detail/:slug' element={<BlogDetails />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/seach' element={<Seach />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={LoggedIn ? <Dashboard /> : <Navigate to={'/login'} replace state={LoginStateData} />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='*' element={<FourNotFour />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
)