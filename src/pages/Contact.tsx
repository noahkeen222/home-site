import React from "react";
import { Container, Typography, Grid, Link } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Grid size={12}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
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
            Lets get in touch!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Email:{' '}
            <Link 
              href="mailto:noahkeen22@gmail.com"
              target="_blank"
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
            >
            noahkeen
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
