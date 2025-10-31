import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to My Website</h1>
        <p>This is your homepage content.</p>
      </main>
    </div>
  );
};

export default Home;