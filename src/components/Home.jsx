import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListYourHome from "./ListYourHome";
import Login from "./Login";
import Signup from "./Signup";
import Help from "./Help";
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";
const Home = () => {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Navbar />
    <main className="grow">
        <Routes>
        <Route path="/" element={<Category/>}></Route>
      <Route path="/list-your-home" element={<ListYourHome/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/help" element={<Help/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </main>
        <Footer/>
    </div>
    </Router>
  );
};

export default Home;