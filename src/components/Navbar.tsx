import type { FC } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  ButtonBase,
  Stack,
} from "@mui/material";

const navigationLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
] as const;

const navButtonSx = {
  color: "#fff",
  fontSize: { xs: "0.75rem", sm: "0.875rem" },
  minWidth: { xs: "auto", sm: 64 },
  px: { xs: 1, sm: 2 },
};

const Navbar: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#443c82",
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <ButtonBase
            component={Link}
            to="home"
            aria-label="Go to home page"
            sx={{ borderRadius: 1 }}
          >
            <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
              <Avatar
                src="images/avatar.jpg"
                alt="Noah Keen"
                sx={{ width: { xs: 36, sm: 40 }, height: { xs: 36, sm: 40 } }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: 500,
                  display: { xs: "none", sm: "block" },
                }}
              >
                Noah Keen
              </Typography>
            </Stack>
          </ButtonBase>

          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }}>
            {navigationLinks.map(({ label, to }) => (
              <Button key={to} sx={navButtonSx} component={Link} to={to}>
                {label}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
