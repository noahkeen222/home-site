import type { FC } from "react";
import * as React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography, Box, Link as MUILink, Stack } from "@mui/material";
import Modal from '@mui/material/Modal'
import { Link } from "react-router-dom";

const cookingImages = [
  { img: 'images/IMG_6692.jpg', title: 'Cookies from afar', rows: 2, cols: 2 },
  { img: 'images/IMG_6631.jpg', title: 'Honestly the best cookie I made' },
  { img: 'images/IMG_6625.jpg', title: 'A bunch of the best cookies I made' },
  { img: 'images/IMG_6537.jpg', title: 'Cross section of chocolate chip cookie', cols: 2 },
  { img: 'images/IMG_6442.jpg', title: 'Pepperoni pizza', rows:2, cols: 2 },
  { img: 'images/IMG_6438.jpg', title: 'Homemade dish', cols: 2 },
  { img: 'images/IMG_6227.jpg', title: 'Homemade dish', rows:2 },
  { img: 'images/IMG_6243.jpg', title: 'Homemade dish', rows: 2},
  { img: 'images/IMG_6262.jpg', title: 'Homemade dish', cols: 2 },
  { img: 'images/IMG_6225.jpg', title: 'Homemade dish', rows: 2, cols: 2 },
  { img: 'images/IMG_6191.jpg', title: 'Homemade dish', rows: 2},
  { img: 'images/IMG_6172.JPG', title: 'Homemade dish', rows: 2 },
  { img: 'images/3E92D99B-D3A7-4CDD-B316-2B160A11B6E2.jpg', title: 'Homemade dish', rows: 2, cols: 2 },
  { img: 'images/IMG_6104.jpg', title: 'Homemade dish', rows: 2 },
  { img: 'images/IMG_6107.jpg', title: 'Homemade dish', rows: 2 },
];

const About: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
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
              tall. You can read further below on my story, projects, and hobbies that I fill my time and mind with. Thank you again for visiting! and please
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
        <Stack direction="column">
          <Box>
            <Typography
              variant="h4"
              sx={{ 
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, 
                paddingBottom: 2
              }}
            >
              Projects
            </Typography>
          </Box>

          {/* SIMS */}
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#FFF",
                  fontSize: "1.2rem"
                }}
              >
                State Incentive Management System
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  State Incentive Management System (SIMS)
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems={{ xs: 'center', lg: 'flex-start' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#FFF"
                    }}
                  >
                    The State Incentive Management System (SIMS) is a content management system used by state-led departments of health and 
                    individual clinics to manage their contingency management programs provided to patients with opiate and stimulant use disorder.
                    Contingency management is an approach used by clinicians to provide patients with an incentive-based approach to help manage 
                    substance use and other related disorders. CM is a highly effective treatment protocol for use disorders, with ~15% higher efficacy
                    rate of patient retention when compared to standard protocols. With today's environment in the US, new protocols and platforms to support them 
                    are vital to community and national health. SIMS allows patients to upload drug screenings to be approved by clinicians for 
                    incentives such as gift cards, and clinicians the ability to monitor and manage screenings and approve incentives. 
                    <br />
                    <br />
                    My role in the project was at the intern level due to my experience in professional-level programming. I mainly debugged and configured components
                    to match the provided Figma model and requirements document for the desktop platform, ensuring responsiveness and best practices. With this 
                    I gained experience working through a remote-only agile development lifecycle, sitting in on the various conducted ceremonies, React, and Atlassian 
                    software such as Confluence and Jira. I take a lot of pride in contributing to a project with such a positive mission and impact on my community, 
                    living in one of the states that suffers the worst from opiate use disorder made me very impassioned with this.
                  </Typography>
                </Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    component="img"
                    sx={{
                      height: { xs: 'auto', sm: 'auto', md: '15rem', lg: '15rem' },
                      width: { xs: '70vw', sm: '20rem', md: 'auto', lg: 'auto' },
                      border: 5,
                      borderRadius: '16px',
                      borderColor: '#3d3672'
                    }}
                    alt="SIMS Logo"
                    src="images/sims.jpg"
                  >
                  </Box>
                  <br />
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* JANUS */}
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#FFF",
                  fontSize: "1.2rem"
                }}
              >
                Janus
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  Janus
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems="center"
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ 
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#FFF"
                    }}
                  >
                    Janus is another content management system, used by clinics to manage their contingency management programs provided to patients with opiate and stimulant use disorders.
                    Janus gives patients the ability to upload drug screenings remotely to be approved by clinicians for  
                    incentives such as gift cards, and clinicians the ability to monitor and manage screenings and approve incentives. 
                    <br />
                    <br />
                    My role in the project was at the intern level due to my experience in professional-level programming. I mainly debugged and configured components
                    to match the provided Figma model and requirements document for the Android platform, ensuring responsiveness and best practices. With this 
                    I gained experience working through a remote-only agile development lifecycle, sitting in on the various conducted ceremonies, React, and Atlassian 
                    software such as Confluence and Jira.
                  </Typography>
                </Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    component="img"
                    sx={{
                      height: { xs: 'auto', sm: 'auto', md: '15rem', lg: '15rem' },
                      width: { xs: '70vw', sm: '20rem', md: 'auto', lg: 'auto' },
                      border: 5,
                      borderRadius: '16px',
                      borderColor: '#3d3672'
                    }}
                    alt="Janus Logo"
                    src="images/janus.jpg"
                  >
                  </Box>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* MIAMI AI TUTOR */}
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#fff",
                  fontSize: "1.2rem"
                }}
              >Miami AI Tutor</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  Miami AI Tutor
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', lg: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems={{ xs: 'center', lg: 'flex-start' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ 
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#fff"
                    }}
                  >
                    The Miami AI Tutor was a capstone project I worked on during my senior year for my degree. This project aimed to provide
                    students with an academic frendly AI tutor that gave students advice on topics covered by a class as well as adhering to
                    academic policies outlined for AI usage and general study. The project would process the syllabi, uploaded by administrators or
                    other faculty, and adjust prompts to align with that course, students could then go in and use AI tutors provided for their class.
                    Originally, this project started as three separate teams of five for different subject tutors, but then combined into a general AI 
                    tutor quickly after the project began.
                    <br />
                    <br />
                    My role in the project was a backend engineer and initial researcher for the tech stack that we would end up using, React frontend
                    with Bootstrap, Flask for the API, and MySQL for database management. This stack was primarily chosen because of previous experience
                    of different group members as well as the easier setup and learning curve required to create a simple project. I built out the API routes
                    for the chat logging to be stored in the database as well as routes for admin accesss. I also built the GitLab CI/CD pipeline to streamline
                    the process for testing, building, and deploying to the remote server provided by the school. Overall, the main difficulty of the project arose
                    from both the saturation of team size from overlap and mismanagement of roles and responsibilites. Navigating through this reinforced for me
                    the importance of project planning and organization, proving the adage of 'most projects fail in planning'. Despite this, we ended up receiving
                    third for the CSE department's outsanding project award from both final product quality and the teams tenacity.
                  </Typography>
                </Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    onClick={handleOpen}
                    component="img"
                    sx={{
                      cursor: 'pointer',
                      height: { xs: 'auto', sm: 'auto', md: 'auto', lg: '15rem' },
                      width: { xs: '80vw', sm: '25rem', md: '25rem', lg: 'auto' },
                      border: 5,
                      borderRadius: '16px',
                      borderColor: '#3d3672'
                    }}
                    alt="Miami AI Tutor screenshot"
                    src="images/ai-tutor.png"
                  >
                  </Box>
                  <Modal
                    open={open}
                    onClose={handleClose}
                  >
                    <Box
                    component="img"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
                      width: { xs: '90vw', sm: '90vw', md: '70vw', lg: '60vw' },
                      border: 5,
                      borderRadius: '16px',
                      borderColor: '#3d3672'
                    }}
                    alt="Miami AI Tutor screenshot"
                    src="images/ai-tutor.png"
                  />
                  </Modal>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* AQUALAD */}
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#fff",
                  fontSize: "1.2rem"
                }}
              >
                Aqua CMS
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  Aqualad
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', lg: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems={{ xs: 'center', lg: 'flex-start' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    sx={{ 
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#fff"
                  }}
                  >
                    Aqualad is the current big project that I'm working on, it is a content management system for intelligent aquascaping planning and upkeep. The final product
                    will include an interface for users to manage different tanks, their stock, schedules such as feeding, circadian, water changes, etc, and it will
                    calculate bioload depending on the biomass and plant volume of the tank and give reccomendations for the fishkeeper to adjust schedules, stock, etc.
                    <br />
                    <br />
                    I started this project to create a system to use myself beacuse, as you will see below, I am very passionate about keeping fish and caring for them. I love 
                    aquascaping and want the hobby to be more beginner friendly when it comes to setting up a new tank and caring for it. While working at PetSmart I saw firsthand
                    many customers wanting to start fish tanks for themselves or their children and not having any idea of what it takes to run and upkeep a tank successfully. Many of these 
                    instances would vary from just minor fixes, such as the ammonia being too high or they did not add conditioner before adding fish to care advice like stocking a tank
                    properly, the schedules that came with it, and how to conduct water changes. Much of this information online is disaggregated and something you need to really want to put
                    a decent amount of time and effort into in order to do well, having a platform that not only aggregated this advice to one place but also gave live feedback based on the 
                    user's current tank parameters is something the hobby really needs.
                  </Typography>
                </Box>
                <Stack justifyContent="center" alignItems="center">
                  <Box
                    component="img"
                    sx={{
                      height: { xs: 'auto', sm: 'auto', md: '15rem', lg: '15rem' },
                      width: { xs: '70vw', sm: '20rem', md: 'auto', lg: 'auto' },
                      border: 5,
                      borderRadius: '16px',
                      borderColor: '#3d3672'
                    }}
                    alt="Mumu the african dwarf frog"
                    src="images/mumu.jpg"
                  >
                  </Box>
                </Stack>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Runappi */}
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#FFF",
                  fontSize: "1.2rem"
                }}
              >
                Runappi
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  Runappi
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems={{ xs: 'center', lg: 'flex-start' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#FFF"
                    }}
                  >
                    Currently a large part of my life is persuing long distance running goals and when I say long distance I mean the longest of distances, 
                    at a competive level no less. As you may have read in my story, I used to be extremely overweight during my pivitol developmental years. 
                    The more and more research and work I put into running, the more I realize I need something that my peers do not have to close the gap. 
                    This gap is something I feel heavily, I understand it is not about running the same speed, I need to run faster in order to close this, much faster.
                    After modifying and optimizing my diet and routine to carry my volume I realize there are many other compounding factors 
                    that also impact my running capability. This is where Runappi comes into play.
                    <br />
                    <br />
                    Runappi is a tool that I will use to build visualiztions, analytics, and centralized logging of my running endeavors. I have built this
                    to run and deploy to Google Cloud Platform, utilizing their always free e2 micro and peristant disc to house my application and data. The 
                    data is uploaded from my IPhone via shortcut that sends out a JSON of my updated biometrics and workouts upon manual or scheduled activation.
                    Further iterations of this app will be implemented with machine learning to make predictive insights into my running trends and provide weights
                    and considerations on the different variables affecting my running performance. After the inital data collection period I will implement a small
                    nerual network to give suggestions of regemine, track trends, and give predictive timelines to ensure I am fit to accomplish my goals.
                    As of right now I know that this will most likely not be scaleable with the always free tier and plan on re-arcitecturing into a serverless upload via
                    cloud functions and a data silo, once budget permits.
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Databricks Projects */}
          <Accordion
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#FFF",
                  fontSize: "1.2rem"
                }}
              >
                Databricks Projects
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  Runappi
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems={{ xs: 'center', lg: 'flex-start' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#FFF"
                    }}
                  >
                    Currently Im trying to pivot into data engineering and have been praciticing creating ELT pipelines and visualizations
                    via Databricks. I have so much fun with this genuienly, during my degree I loved normalizing databases during my coursework
                    and persional persuits. 
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* NPES */}
          {/*
          <Accordion
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
            sx={{
              bgcolor: "#5d52b1"
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography 
                component="span"
                sx={{
                  color: "#FFF",
                  fontSize: "1.2rem"
                }}
              >
                NPES: Noah Picture Expert Service
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ 
                    paddingBottom: 2,
                    fontSize: '1.5rem', 
                    color: "#FFF"
                  }}
                >
                  Noah Picture Expert Service (NPES)
                </Typography>
              </Box>
              <Stack 
                direction={{ xs: 'column', md: 'row' }} 
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems={{ xs: 'center', lg: 'flex-start' }}
              >
                <Box sx={{ flex: { lg: '1 1 auto' }, maxWidth: { lg: '75%' } }}>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      paddingLeft: { lg: 2 },
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#FFF"
                    }}
                  >
                    So much do I find myself trying to convert media from one encoding to another, or download from a website, or do whatever with it and have to search for and open a 
                    website that is defenitly stealing my data if not injecting data unbeknownst to me. Not only that, it just eats up my resources because I always forget to close the tab 
                    in the end.. This application will be my all in one place to do just that! Currently the MVP of this project is a serverless azure fuction application that will take in 
                    a link to youtube or twitter and convert the sent media to a dowloadable form with encoding specified by the user, where applicable. 
                    This is just a quality of life and peace of mind project.
                  </Typography>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
          */}
        </Stack>
        <Stack direction="column">
          <Box>
            <Typography
              variant="h4"
              sx={{ 
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, 
                paddingBottom: 2
              }}
            >
              Hobbies
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "0.75rem", sm: "1.25rem", md: "1.75rem" } }}
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
              <a href="https://rtrt.me/ulink/TLMRA/TLMR-STMALACHI-2026/tracker/RES57LXF/focus">
                St. Patricks Day Run Results (World Record for Most Kilted Runners)
              </a>
              <br />
              <a href="https://runsignup.com/Race/Results/45754/IndividualResult/RXdSt?resultSetId=652538#U123879607">
                Blossom Time Run Results
              </a>
              <br />
              <br />
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ fontSize: { xs: "0.75rem", sm: "1.25rem", md: "1.75rem" } }}
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
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
