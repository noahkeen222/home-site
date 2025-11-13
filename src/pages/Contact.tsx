import React from "react";
import { Container, Typography, Grid, Link, Box } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container
         spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }} justifyContent={'space-around'}
      >
        <Grid size={12}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
          >
            Contact
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Lets get in touch! Feel free to reach me at any of the below and I will try to get in contact as soon as possible.
            <br />
            (in order of typical usage)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 5, lg: 5 }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Email:{' '}
            <Link
              href="mailto:noahkeen22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              noahkeen22@gmail.com
            </Link>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Twitter:{' '}
            <Link
              href="https://twitter.com/noahkeen22"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              @noahkeen22
            </Link>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            LinkedIn:{' '}
            <Link
              href="https://www.linkedin.com/in/noah-keen-1110a6195/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              Noah Keen
            </Link>
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Instagram:{' '}
            <Link
              href="https://www.instagram.com/noahkeen/"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              noahkeen
            </Link>
          </Typography>
        </Grid>
        <Grid display={'flex'} size={{ xs: 12, md:6, lg: 6 }} justifyContent={'center'} alignContent={'center'} >
          <Box
            component="img"
            sx={{
              height: { xs: 'auto', md: '30vw', lg: '15vw' },
              width: { xs: '80vw', md:'auto', lg: 'auto' },
              border: 5,
              borderRadius: '16px',
              borderColor: '#3d3672',
            }}
            alt="Shoggoth the African Dwarf Frog clicking heels together"
            src="images/shoggoth_heel_click.jpg"
          >
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
