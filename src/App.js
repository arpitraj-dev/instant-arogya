// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";

const BuyMedicines = () => (
  <div>
    <h2>Buy Medicines Page</h2>
  </div>
);
const FindDoctors = () => (
  <div>
    <h2>Find Doctors Page</h2>
  </div>
);
const LabTests = () => (
  <div>
    <h2>Lab Tests Page</h2>
  </div>
);
const Ambulance = () => (
  <div>
    <h2>Ambulance Page</h2>
  </div>
);

const ArogyaProducts = () => (
  <div>
    <h2>Arogya Products Page</h2>
  </div>
);
const BabyCare = () => (
  <div>
    <h2>Baby Care Page</h2>
  </div>
);
const NutritionalDrinks = () => (
  <div>
    <h2>Nutritional Drinks & Supplements Page</h2>
  </div>
);
const WomenCare = () => (
  <div>
    <h2>Women Care Page</h2>
  </div>
);
const PersonalCare = () => (
  <div>
    <h2>Personal Care Page</h2>
  </div>
);
const Ayurveda = () => (
  <div>
    <h2>Ayurveda Page</h2>
  </div>
);
const HealthDevices = () => (
  <div>
    <h2>Health Devices Page</h2>
  </div>
);
const HomeEssentials = () => (
  <div>
    <h2>Home Essentials Page</h2>
  </div>
);
const HealthCondition = () => (
  <div>
    <h2>Health Condition Page</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/buy-medicines" element={<BuyMedicines />} />
            <Route path="/find-doctors" element={<FindDoctors />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/arogya-products" element={<ArogyaProducts />} />
            <Route path="/baby-care" element={<BabyCare />} />
            <Route path="/nutritional-drinks" element={<NutritionalDrinks />} />
            <Route path="/women-care" element={<WomenCare />} />
            <Route path="/personal-care" element={<PersonalCare />} />
            <Route path="/ayurveda" element={<Ayurveda />} />
            <Route path="/health-devices" element={<HealthDevices />} />
            <Route path="/home-essentials" element={<HomeEssentials />} />
            <Route path="/health-condition" element={<HealthCondition />} />
          </Routes>
          <Slideshow />
        </main>
      </div>
    </Router>
  );
}

export default App;
