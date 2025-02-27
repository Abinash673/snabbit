import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import icon from "../assets/snabbit-icon.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setVisible(false); 
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { itemId: 1, label: "Services" },
    { itemId: 2, label: "How it works" },
    { itemId: 3, label: <img src={icon} alt="icon" style={{ width: "100px", height: "50px" }} /> },
    { itemId: 4, label: "Why us?" },
    { itemId: 5, label: "Contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed" 
        sx={{
          top: visible ? 0 : "-100px", 
          transition: "top 0.3s ease-in-out",
          maxWidth: "50%",
          margin: "30px auto",
          left: "50%", 
          transform: "translateX(-50%)",
          justifyContent: "space-between",
          backgroundColor: "#FFFFFF",
          borderRadius: "35px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          color: "#5E1138",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu */}
          <Box sx={{ display: "flex", gap: "15px" }}>
            {navItems.map((item) => (
              <Button
                key={item.itemId}
                sx={{
                  color: "#5E1138",
                  fontSize: "1.2rem",
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Sidebar (Drawer) */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.itemId} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <ListItemText primary={typeof item.label === "string" ? item.label : "Icon"} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
