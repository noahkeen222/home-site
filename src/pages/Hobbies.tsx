import type { FC } from "react";
import { Container, Typography, Box, Stack, Divider } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const cookingImages = [
  { img: 'images/IMG_6692.jpg', title: 'Cookies from afar', rows: 2, cols: 2 },
  { img: 'images/IMG_6631.jpg', title: 'Honestly the best cookie I made' },
  { img: 'images/IMG_6625.jpg', title: 'A bunch of the best cookies I made' },
  { img: 'images/IMG_6537.jpg', title: 'Cross section of chocolate chip cookie', cols: 2 },
  { img: 'images/IMG_6172.JPG', title: 'Pepperoni pizza', rows:2, cols: 2 },
  { img: 'images/IMG_6438.jpg', title: 'Ingredients', cols: 2 },
  { img: 'images/IMG_6227.jpg', title: 'Calzone', rows:2 },
  { img: 'images/IMG_6243.jpg', title: 'Burger with homemade bun', rows: 2},
  { img: 'images/IMG_6262.jpg', title: 'Homemade taco', cols: 2 },
  { img: 'images/IMG_6225.jpg', title: 'Attempt at calzone or pizza', rows: 2, cols: 2 },
  { img: 'images/3E92D99B-D3A7-4CDD-B316-2B160A11B6E2.jpg', title: 'Poppy seed bagel', rows: 2},
  { img: 'images/IMG_6192.JPG', title: 'Massive Stromboli', rows: 2 },
  { img: 'images/IMG_6191.jpg', title: 'Rosemary salt bagel', rows: 2, cols: 2 },
  { img: 'images/IMG_6104.jpg', title: 'Bunch of calzones', rows: 2 },
  { img: 'images/IMG_6107.jpg', title: 'Good calzone I made in a hotel room', rows: 2 },
];

// const tankImages = [
//   { img: 'images/IMG_6692.jpg', title: 'Cookies from afar', rows: 2, cols: 2 },
  
// ];

const Hobbies: FC = () => {
  return (
    <Container maxWidth="lg">
      <Stack spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ py: { xs: 4, sm: 6, md: 8 }, px: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" } }}
        >
          Hobbies
        </Typography>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" } }}
          >
            Cooking / Baking
          </Typography>
          <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            I love cooking and think I am the best at it lol, I am pretty good. I make all of my favorite foods
            chicken, pizza, cookie, only the peak of nutrition enters my body. 
            <br />
            <br />
            Here are a few of my dishes:
          </Typography>
          <ImageList
            variant="quilted"
            cols={4}
            rowHeight={160}
            gap={8}
            sx={{
              width: '100%',
              m: 0,
              mt: 2,
              borderRadius: '8px',
            }}
          >
            {cookingImages.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols ?? 1}
                rows={item.rows ?? 1}
                sx={{
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Divider></Divider>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" } }}
          >
            Running
          </Typography>
          <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            My main hobby is running, in fact my current project, that I have fast tracked, is my own personal run tracker! I have made such
            strides with this hobby and feel very free with it. Of the races I have done I have placed very well so I have hope for the 
            future of this endevor. 
            <br />
            (...well at least when I can afford to have a good diet to run with..............)
            <br />
            <br />
            <a href="https://rtrt.me/ulink/TLMRA/TLMR-STMALACHI-2026/tracker/RES57LXF/focus">
              St. Patricks Day Run Results (World Record for Most Kilted Runners)
            </a>
            <br />
            <a href="https://runsignup.com/Race/Results/45754/IndividualResult/RXdSt?resultSetId=652538#U123879607">
              Blossom Time Run Results
            </a>
          </Typography>
        </Box>
        <Divider></Divider>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" } }}
          >
            Aqua Scaping
          </Typography>
          <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            I also love aquascaping / fishkeeping, I have been doing this hobby for a couple of years
            eversince I worked at PetSmart I really wanted to understand taking care of a tank not only for
            my job but also as a personal project. Aquascaping has taught me so much and brings me so much
            serenity, I look at how the plants grow and apply this to my own life, out of everything alive, plants
            really know how to do it, despite everything.  
          </Typography>
          
          
          {/* will upload images for this soon */}
          {/* <ImageList
            variant="quilted"
            cols={4}
            rowHeight={160}
            gap={8}
            sx={{
              width: '100%',
              m: 0,
              mt: 2,
              borderRadius: '8px',
            }}
          >
            {tankImages.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols ?? 1}
                rows={item.rows ?? 1}
                sx={{
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList> */}
        </Box>
        <Divider></Divider>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem", md: "1.75rem" } }}
          >
            Music??
          </Typography>
          <Typography
          variant="body1"
          gutterBottom
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            Ill add more about this soon
          </Typography>
          <img
            src= "public/images/cold.jpg"
            alt= "cold visions album cover"
            loading="lazy"
            style={{
              width: '22rem',
              height: '22rem',
            }}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Hobbies;
