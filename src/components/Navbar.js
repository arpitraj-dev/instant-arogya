// src/components/Navbar.js
import React, { useState } from "react";
import { Menu, MenuItem, TextField, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from "../assets/apollo-logo.png"; // Ensure this path matches your file location

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [pincode, setPincode] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleAddressClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAddressClose = () => {
    setAnchorEl(null);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      {/* First fixed navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white p-4 flex items-center justify-between border-b z-10">
        <div className="flex items-center">
          <img src={logo} alt="Apollo Logo" className="h-10 mr-4 ml-8" />
          <div>
            <span className="text-blue-600 font-bold">Instant</span>
            <span className="text-blue-600 font-bold ml-2">Arogya</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
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
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      </nav>

      {/* Second fixed navbar */}
      <nav className="fixed top-16 left-0 right-0 bg-white p-4 flex items-center justify-center border-b z-10">
        <Link
          to="/buy-medicines"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Buy Medicines
        </Link>
        <Link
          to="/find-doctors"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Find Doctors
        </Link>
        <Link
          to="/lab-tests"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Lab Tests
        </Link>
        <Link
          to="/ambulance"
          className="text-gray-800 hover:underline hover:text-blue-600 font-bold text-lg mx-6"
        >
          Ambulance
        </Link>
      </nav>

      {/* Third fixed navbar */}
      <nav className="fixed top-32 left-0 right-0 bg-blue-600 p-4 flex items-center justify-center z-10">
        <Link
          to="/arogya-products"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Arogya Products
        </Link>
        <Link
          to="/baby-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Baby Care
        </Link>
        <Link
          to="/nutritional-drinks"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Nutritional Drinks & Supplements
        </Link>
        <Link
          to="/women-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Women Care
        </Link>
        <Link
          to="/personal-care"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Personal Care
        </Link>
        <Link
          to="/ayurveda"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Ayurveda
        </Link>
        <Link
          to="/health-devices"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Health Devices
        </Link>
        <Link
          to="/home-essentials"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Home Essentials
        </Link>
        <Link
          to="/health-condition"
          className="text-white hover:bg-blue-800 hover:text-white px-2 py-1 rounded mx-2 font-bold"
        >
          Health Condition
        </Link>
      </nav>

      {/* Content box below fixed navbars */}
      <div className="mt-48 bg-gray-100 w-screen">
        <div className="bg-blue-100 rounded-lg shadow-lg p-6 text-center w-screen">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Buy Medicines and Essentials
          </h2>
          <div className="flex items-center justify-center">
            <div
              className="flex items-center bg-white rounded-lg px-4 py-2"
              style={{ width: "50%" }}
            >
              <input
                type="text"
                placeholder="Search Medicines"
                className="outline-none w-full"
                value={searchText}
                onChange={handleSearchChange}
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
