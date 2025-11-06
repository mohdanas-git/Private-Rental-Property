import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ListYourHome from "./ListYourHome";
import Login from "./Login";
import Signup from "./Signup";
import Help from "./Help";
import Navbar from "./Navbar";
import Category from "./Category";
import Footer from "./Footer";


function Layout() {
  const location = useLocation();
  const categoryPaths = ["/", "/house", "/room", "/farm-house", "/pool", "/tent"];
  const showCategory = categoryPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen 2xl:max-w-fit mx-auto border">
      <Navbar />
      {showCategory && <Category />}
      <main className="grow">
        <Routes>
          <Route path="/list-your-home" element={<ListYourHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


const Home = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default Home;
