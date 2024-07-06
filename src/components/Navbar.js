// src/components/Navbar.js
import React, { useState } from "react";
import { Menu, MenuItem, TextField, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../assets/apollo-logo.png"; // Ensure this path matches your file location

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pincode, setPincode] = useState("");

  const handleAddressClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddressClose = () => {
    setAnchorEl(null);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  return (
    <div>
      <nav className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center ml-16 space-x-4">
          <img src={logo} alt="Apollo Logo" className="h-10" />
          <span className="text-blue-600 text-xl">Apollo 24/7 Clone</span>
        </div>
        <div className="flex items-center space-x-4 mr-8">
          <button
            className="text-blue-600 flex items-center"
            onClick={handleAddressClick}
          >
            <LocationOnIcon className="mr-1" />
            Select Address
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleAddressClose}
          >
            <MenuItem onClick={handleAddressClose}>
              Use Current Location
            </MenuItem>
            <MenuItem>
              <TextField
                label="Enter Pincode"
                variant="outlined"
                value={pincode}
                onChange={handlePincodeChange}
                size="small"
              />
            </MenuItem>
          </Menu>
          <IconButton color="inherit" className="text-blue-600">
            <ShoppingCartIcon />
          </IconButton>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </nav>
      <nav className="bg-white p-4 flex items-center justify-center space-x-24 border-b">
        <Link
          to="/buy-medicines"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg"
        >
          Buy Medicines
        </Link>
        <Link
          to="/find-doctors"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg"
        >
          Find Doctors
        </Link>
        <Link
          to="/lab-tests"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg"
        >
          Lab Tests
        </Link>
        <Link
          to="/ambulance"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg"
        >
          Ambulance
        </Link>
      </nav>
      <nav className="bg-blue-600 p-4 flex items-center justify-center space-x-8">
        <Link
          to="/arogya-products"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Arogya Products
        </Link>
        <Link
          to="/baby-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Baby Care
        </Link>
        <Link
          to="/nutritional-drinks"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Nutritional Drinks & Supplements
        </Link>
        <Link
          to="/women-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Women Care
        </Link>
        <Link
          to="/personal-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Personal Care
        </Link>
        <Link
          to="/ayurveda"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Ayurveda
        </Link>
        <Link
          to="/health-devices"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Health Devices
        </Link>
        <Link
          to="/home-essentials"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Home Essentials
        </Link>
        <Link
          to="/health-condition"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded"
        >
          Health Condition
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
