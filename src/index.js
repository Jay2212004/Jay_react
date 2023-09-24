import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Review from './components/Review';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Album from './components/Album';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Booking from './components/Booking';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar/>
    <Hero/>
    <Album/>
    <Review/>
    <Footer/>  */}
    {/* <Login/> */}
    <Booking/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
