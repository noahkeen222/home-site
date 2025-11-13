import React from "react";
import { Container, Typography, Grid, Box, Link as MUILink } from "@mui/material";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }} >
        <Grid display="flex" size={12} justifyContent="center" alignItems="center" >
          <Box
            component="img"
            sx={{
              height: '22vw',
              width: 'auto',
              border: 5,
              borderRadius: '16px',
              borderColor: '#3d3672'
            }}
            alt="Shoggoth the African Dwarf Frog looking wistfully in the cornner"
            src="images/shoggoth.jpg"
          >
          </Box>
        </Grid>
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
        <Grid size={10}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Hey 👋 I'm Noah. I'm a budding software developer and network engineer who just graduated and am excited to start on some interesting projects that make 
            a positive impact. I am very proactive and diligent when it comes to my work and enjoy expanding my knowledge into new areas more than anything. 
            I take pride in my mindset of continuous growth and development in my life and believe strongly in a skillset that is as wide as it is
            tall. You can read further below on my philosophy, story, and hobbies that I fill my time and mind with. Thank you again for visiting! <br/> and please
            dont hesitate to reach out with any of the links on my {' '}
            <MUILink component={Link} to="/contact">
              Contact 
            </MUILink>
            {' '}page.
          </Typography>
        </Grid>
        <Grid size={2}>
          <Box
            component="img"
            sx={{
              height: '10vw',
              width: 'auto',
              border: 5,
              borderRadius: '16px',
              borderColor: '#3d3672'
            }}
            alt="Noah Keen head"
            src="images/avatar.jpg"
          >
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
