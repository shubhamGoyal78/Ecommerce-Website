import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import NavBar from './component/NavBar'; // Adjust the path based on your file structure
import MenCategory from "./component/MenCategory";
import WomenCategory from "./component/WomenCategory";
import KidsCategory from "./component/KidsCategory";
import HomeLivingCategory from "./component/HomeLivingCategory";
import BeautyCategory from "./component/BeautyCategory";
import Contact from "./component/Contact";
import AboutUs from "./component/AboutUs";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter> {/* Wrap your routes with BrowserRouter */}
      <div className="App">
        <NavBar /> {/* NavBar is now outside Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<MenCategory />} />
          <Route exact path="/women" element={<WomenCategory />} />
          <Route exact path="/kids" element={<KidsCategory />} />
          <Route exact path="/home&living" element={<HomeLivingCategory />} />
          <Route exact path="/beauty" element={<BeautyCategory />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
