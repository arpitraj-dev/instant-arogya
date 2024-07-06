// src/components/Navbar.js
import React, { useState } from "react";
import { Menu, MenuItem, TextField, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Apollo Logo" className="h-10 mr-4" />
        <span className="text-white text-xl">Instant Arogya</span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="text-white flex items-center"
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
          <MenuItem onClick={handleAddressClose}>Use Current Location</MenuItem>
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
        <IconButton color="inherit" className="text-white">
          <ShoppingCartIcon />
        </IconButton>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
