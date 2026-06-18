import type { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  IconButton,
  Stack,
} from "@mui/material";
import { Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const navigationLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
] as const;

const socialLinks = [
  {
    label: "Twitter",
    href: "https://twitter.com/noahkeen22",
    icon: <Twitter />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noah-keen-1110a6195/",
    icon: <LinkedIn />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/noahkeen/",
    icon: <Instagram />,
  },
] as const;

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#443c82",
        color: "#fff",
        py: 4,
        marginTop: "auto",
        width: "100%",
        position: "relative",
        bottom: 0,
      }}
    >
      <Container>
        <Stack direction="row" spacing={4}>
          <Box sx={{ flex: '1 1 50%' }}>
            <Typography variant="h6" gutterBottom>
              Navigation
            </Typography>
            <Stack spacing={1}>
              {navigationLinks.map(({ label, to }) => (
                <MuiLink
                  key={to}
                  component={Link}
                  to={to}
                  color="inherit"
                  underline="none"
                >
                  {label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: '1 1 50%' }}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map(({ label, href, icon }) => (
                <IconButton
                  key={href}
                  aria-label={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "#fff" }}
                >
                  {icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ marginTop: 4, textAlign: "center" }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Noah Keen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
