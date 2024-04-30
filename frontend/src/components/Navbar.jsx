import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import profile icon
import "../styles/Navbar.css"; // Import your custom CSS file

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" className="navbar"> {/* Add the navbar class */}
      <Toolbar className="toolbar">
        <div className="left-corner">
          {/* Title "My App" on the left */}
          <Typography variant="h6" component="div" className="logo">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>MY PORTFOLIO</Link>
          </Typography>
        </div>

        {/* Buttons in the center */}
        <div className="navbar-buttons">
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
          <Button component={Link} to="/resume" color="inherit">Resume</Button>
          <Button component={Link} to="/projects" color="inherit">Projects</Button>
          <Button component={Link} to="/tools" color="inherit">Tools</Button>
        </div>

        {/* Profile icon on the right */}
        <div className="right-corner">
          <IconButton
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            component={Link} // Link to the profile page
            to="/profile"
          >
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
