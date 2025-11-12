import React from "react";
import { Container, Typography, Grid } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }} >
        <Grid size={12}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
          >
            About Me
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Hey 👋 Im Noah. 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
