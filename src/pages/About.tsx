import type { FC } from "react";
import { Container, Typography, Box, Link as MUILink, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const About: FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
        >
          About Me
        </Typography>
        
        <Stack 
          direction={{ xs: 'column', lg: 'row' }} 
          spacing={{ xs: 2, sm: 3, md: 4 }}
          alignItems={{ xs: 'center', lg: 'flex-start' }}
        >
          <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              Hey 👋 I'm Noah. I'm a budding software developer and network engineer who just graduated and am excited to start on some interesting projects that make
              a positive impact. I am very proactive and diligent when it comes to my work and enjoy expanding my knowledge into new areas more than anything.
              I take pride in my mindset of continuous growth and development in my life and believe strongly in a skillset that is as wide as it is
              tall. You can read further below on my philosophy, story, and hobbies that I fill my time and mind with. Thank you again for visiting! and please
              dont hesitate to reach out with any of the links on my {' '}
              <MUILink component={Link} to="/contact" color="inherit" underline="none">
                contact
              </MUILink>
              {' '}page.
            </Typography>
          </Box>
          
          <Stack justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: { xs: 'auto', md: '50vw', lg: '15vw' },
                width: { xs: '70vw', md: 'auto', lg: 'auto' },
                border: 5,
                borderRadius: '16px',
                borderColor: '#3d3672'
              }}
              alt="Noah Keen head"
              src="images/avatar.jpg"
            >
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;