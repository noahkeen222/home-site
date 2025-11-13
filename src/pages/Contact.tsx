import type { FC } from "react";
import { Container, Typography, Link, Box, Stack } from "@mui/material";

const Contact: FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
        >
          Contact
        </Typography>
        
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Lets get in touch! Feel free to reach me at any of the below and I will try to get in contact as soon as possible.
          <br />
          (in order of typical usage)
        </Typography>
        
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 2, sm: 3, md: 10 }}
          justifyContent="space-around"
          alignItems={{ xs: 'flex-start', md: 'flex-start' }}
        >
          <Stack spacing={1} sx={{ flex: { md: '1 1 45%' } }}>
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
          </Stack>
          
          <Stack justifyContent="center" alignItems={'center'} sx={{ flex: { md: '1 1 50%' } }}>
            <Box
              component="img"
              sx={{
                height: { xs: 'auto', md: '30vw', lg: '15vw' },
                width: { xs: '70vw', md: 'auto', lg: 'auto' },
                border: 5,
                borderRadius: '16px',
                borderColor: '#3d3672',
              }}
              alt="Shoggoth the African Dwarf Frog clicking heels together"
              src="images/shoggoth_heel_click.jpg"
            >
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;