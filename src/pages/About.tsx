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
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
            >
              Hey 👋 I'm Noah. I'm a budding software developer and network engineer who just graduated and am excited to start on some interesting projects that make
              a positive impact. I am very proactive and diligent when it comes to my work and enjoy expanding my knowledge into new areas more than anything.
              I take pride in my mindset of continuous growth and development in my life and believe strongly in a skillset that is as wide as it is
              tall. You can read further below on my story, or check out my{' '}
              <MUILink component={Link} to="/projects" color="inherit" underline="none">
                projects
              </MUILink>
              {' '}and{' '}
              <MUILink component={Link} to="/hobbies" color="inherit" underline="none">
                hobbies
              </MUILink>
              {' '}pages. Thank you again for visiting! and please
              don't hesitate to reach out with any of the links on my{' '}
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
                height: { xs: '60vw', sm: '60vw', md: '15rem', lg: '15rem' },
                width: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
                border: 5,
                borderRadius: '16px',
                borderColor: '#3d3672'
              }}
              alt="Noah Keen headshot"
              src="images/avatar.jpg"
            >
            </Box>
          </Stack>
        </Stack>
        <Box>
            <Typography
              variant="h4"
              sx={{ 
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, 
                paddingBottom: 2
              }}
            >
              My Story
            </Typography>
        </Box>
        <Stack
          direction={{xs: "column", md:"row"}}
          >
           <Box> 
            <Typography>
              I was born and raised for the early part of my life in northern Illinois until about 6th grade. 
              I consider it my home and pine for the day I can move back. The food, culture, and air are like 
              nothing I've experienced elsewhere and I miss it with everything. I have always been told the phrase 
              'where you go is where you are' but have always hoped a part of me is still there.
              <br />
              <br />
              After Illinois, I moved to Ohio and have been going through the motions, more stumbling than shrewd. 
              In Highschool I lived back and forth between Ohio and Nashville TN, moving down for a stint to attend 
              Middle Tennessee State University to pursue a degree in computer science.
              <br />
              <br />
              Nashville is an interesting place. While living there and attending college, I had to use a charter bus to get to and from school every day. 
              At the time I did not have a driver's license, and even worse, I had completely lost my identity, on many different levels. My Mom was moving 
              and had all of our identification documents stolen out of the van she was using, including birth certificates, SSN card, and many other personal 
              items. Needless to say, the weight of this plus my physical and emotional weight did not make things easy for me to pursue my degree. 
              Coming out of high school, I weighed over 300lbs and was not taking care of myself through my deep depression. This really affected my 
              commute as I would have to pass through Broadway with parades of partying drunks and gangs of bachelorettes jeering at me and my appearance. 
              One time in particular, someone jeered at me for wearing 'skinny jeans', THEY WERE NORMAL JEANS I WAS JUST BIG 😭. At first I was switching 
              my degree around and away from computer science, the thing I orignially wanted to do, because of a lack of confidence in my ability to 
              complete the degree. With all of this, it got to a point where I felt so incapable and trapped that I would just take the bus to school, 
              go into the bathroom, and cry. After COVID hit and I had to move back to Ohio, I really couldnt keep up with my courses with them and the 
              necessary textbooks being hundreds of miles away. Because of this, I decided to move back permanently to attend Miami University.
              <br />
              <br />
              Miami University was a challenge for me in the best of ways. This was where I dug down and got myself out of the pit I found myself in. While attending, 
              I was challenged academically, physically, and emotionally; I knew the way I thought of and treated myself was not sustainable and decided to redefine my approach to life. 
              I learned about the Theory of Mulitple Intelligences which redefined the way I thought of myself and others and gave me a strong base of points of improvement. 
              Since discovering this, I have intentionally done things to improve each and every area of my intelligence, opting to have a well rounded and liberal approach rather than 
              the savant approach to learning and working. I look at great thinkers and see this thinking as well, with rennasance thinkers being centuries ahead of their time with theorizing 
              helicopters in a time where flying was not a thought possible by most. I am in no way trying to measure myself or say I am in any way close to this level of thinking but am just saying, 
              it works. I also made a significant effort to lose the emotional and physical weight compressing and depressing me all of these years and was somewhat successful in doing so. 
              I remember barely being able to move around from class to class without being out of breath to crying after my first marathon. In school, I slowly started to move back to computer science. 
              I still had to commute an hour to school every day but this time I at least had a liscence and borrowed car to do so. I started to fly through my degree, 
              taking sprint courses in the summer and winter to get through, as I knew this was the only way out. Despite all of this, my reputation as the black sheep still loomed over me and 
              cut into me harder than any pendulum would. I like to believe that the emotional trials I faced were hard and unwarranted but the jury is still out for this. A lot of turbulance arose 
              with my family and I during my last year at Miami and had cut me down back into a deeper pit than I was in before. I was alone, completely. I barely came out of that semester alive 
              from both an academic and mortal perspective, but still had to take linear algebra for my winter sprint course haha. And I did it, I got through.
              <br />
              I am happy. 
            </Typography>
            <br />
            <br />
            <Typography>
              If you have taken the time to read this far, thank you so much. I want this story to show a couple of things of myself: Adaptability, intelligence, and intention. 
              I believe these three things are what make me a great candidate for any and every cause that I apply myself to and would love to be given an opportunity to prove this. 
              Whatever I seem to lack in knowledge, I more than make up for in intelligence and diligence. Thank you again.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
