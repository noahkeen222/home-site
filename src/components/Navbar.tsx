import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Grid,
} from "@mui/material";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('home')
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        width: "100%",
        bgcolor: "#3d3672",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Grid container alignItems="center" size="auto" gap={2}>
            <Avatar
              onClick={handleHomeClick}
              src="images/avatar.jpg"
              sx={{ width: 40, height: 40, cursor: 'pointer' }}
            />
            <Typography
              variant="h6"
              onClick={handleHomeClick}
              sx={{
                cursor: "pointer",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              Noah Keen
            </Typography>
          </Grid>

          <Grid container size="auto" gap={1}>
            <Button sx={{ color: "#fff" }} component={Link} to="home">
              Home
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="about">
              About
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="contact">
              Contact
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
