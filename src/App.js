import React from "react";

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Seller from "./pages/Seller";
import Admin from "./pages/Admin";
import Login from "./pages/Login"
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"

import  "./App.css";
import ThemeProvider from "./context/ThemeContext";

const App = () => {
  return (
    <BrowserRouter><ThemeProvider>
       <Navbar/>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        
        
        <Route
            path="/product/:id"
            element={<ProductDetails />}
          />
             <Route
          path="/products"
          element={<Products />} />

        <Route
          path="/seller"
          element={<Seller />}
        /><Route
          path="/admin"
          element={<Admin />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
         <Route
          path="/cart"
          element={<Cart />}/>
       
    </Routes>
  
       <Footer/>
      </ThemeProvider></BrowserRouter>
  
    
  );
};

export default App;