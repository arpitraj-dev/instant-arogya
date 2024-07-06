// src/App.js
import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Main content of the app */}
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Apollo 24/7 Clone</h1>
        {/* Add more components and content as needed */}
      </main>
    </div>
  );
}

export default App;
