import type { FC } from "react";
import { Typography, Container, Box, Stack } from "@mui/material";

const Home: FC = () => {
  return (
    <Container>
      <Stack spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
        >
          Welcome Home
        </Typography>
        
        <Typography variant="body1"
              gutterBottom
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          Hello 👋 welcome to my webpage!
          <br />
          There isnt much here yet but check
          back later for more cool updates and fun stuff.
          <br />
          <br />
          Thank you for visiting!
        </Typography>
        
        <Stack alignItems="center" justifyContent="center">
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
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;