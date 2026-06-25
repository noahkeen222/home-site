import type { FC } from "react";
import * as React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Container, Typography, Box, Stack } from "@mui/material";
import Modal from '@mui/material/Modal';

const Projects: FC = () => {
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
          Projects
        </Typography>
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

        {/* Melodynamic */}
        <Accordion
          expanded={expanded === 'panel7'}
          onChange={handleChange('panel7')}
          sx={{
            bgcolor: "#5d52b1"
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel7-content"
            id="panel7-header"
          >
            <Typography 
              component="span"
              sx={{
                color: "#FFF",
                fontSize: "1.2rem"
              }}
            >
              Melodynamic
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
                Melodynamic
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
                  Idea im floating around and desiging for to pull data from Last.fm and track my listeing
                  trends to my current mood and other survey results that I think up. I notice a lot that
                  my mood really effects how I listen to music, and well, I listen to music most of the time 
                  so it kind of interests me to see this constant stream waver with different things happening
                  in my life.
                  <br />
                  <br />
                  I feel like when times are tough my music discovery halts, I listen to the the same few
                  albums, artists, and songs, even having songs on repeat for longer than I care to admit. I really want
                  to see what affects this, mood, illness, or other factors and even make predictions or mindfullness
                  routines to stop this loop or gain further insights into what is effecting what.
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
                  and persional persuits. So far I have done a Pokemon data set but am currently looking to do a 'Historical Figure Popularity'
                  data set.
                </Typography>
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Container>
  );
};

export default Projects;
