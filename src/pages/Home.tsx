import React from "react";
import { Typography, Grid, Container } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={4} sx={{ py: 8, px: 3 }}>
        <Grid size={12}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontSize: "3.5rem" }}
          >
            Welcome Home
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            Hello 👋 welcome to my webpage!
            <br />
            There isnt much here yet but check
            back later for more cool updates and fun stuff.
            <br />
            <br />
            Thank you for visiting!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
