import React from "react";
import { Typography, Grid, Container, Box } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }} justifyContent={'space-between'}>
        <Grid size={12}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
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
        <Grid display="flex" size={12} justifyContent="center" alignItems="center">
          <Box
            component="img"
            sx={{
              height: { xs: 'auto', md: 'auto', lg: '22vw' },
              width: { xs: '70vw', md: '50vw', lg: 'auto' },
              border: 5,
              borderRadius: '16px',
              borderColor: '#3d3672'
            }}
            alt="Shoggoth the African Dwarf Frog looking wistfully in the cornner"
            src="images/shoggoth.jpg"
          >
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
