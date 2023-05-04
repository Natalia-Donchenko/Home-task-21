import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/photos/" element={<Photos />} />
    </Routes>
  );
};

export default App;