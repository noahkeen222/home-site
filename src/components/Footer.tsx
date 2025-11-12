import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#3d3672",
        color: "#fff",
        py: 4,
        marginTop: "auto",
        width: "100%",
        position: "relative",
        bottom: 0,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid size={6}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <MuiLink
                component={Link}
                to="home"
                color="inherit"
                underline="hover"
              >
                Home
              </MuiLink>
              <MuiLink
                component={Link}
                to="about"
                color="inherit"
                underline="hover"
              >
                About
              </MuiLink>
              <MuiLink
                component={Link}
                to="contact"
                color="inherit"
                underline="hover"
              >
                Contact
              </MuiLink>
            </Box>
          </Grid>

          <Grid size={6}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                component="a"
                href="https://twitter.com/noahkeen22"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/noah-keen-1110a6195/"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/noahkeen/"
                target="_blank"
                sx={{ color: "#fff" }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4, textAlign: "center" }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Noah Keen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
