import React from "react";

import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SellerDashboard from "./pages/seller/SellerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Login from "./pages/Login"
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products"
import Footer from "./components/Footer"
import Cart from "./pages/Cart"
import ManageProducts from "./pages/seller/ManageProducts";
import SellerOrders from "./pages/seller/SellerOrders";

import  "./App.css";
import ThemeProvider from "./context/ThemeContext";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageOrders from "./pages/admin/ManageOrders";


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
          element={<SellerDashboard />}
        
        />

        <Route
          path="/seller/products"
          element={<ManageProducts />}
        />

        <Route
          path="/seller/orders"
          element={<SellerOrders />}
        />



        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/users"
          element={<ManageUsers />}
       />

        <Route
          path="/admin/orders"
          element={<ManageOrders />}
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