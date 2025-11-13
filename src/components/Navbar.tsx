import type { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Stack,
} from "@mui/material";

const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("home");
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#3d3672",
      }}
    >
      <Toolbar sx={{ minHeight: { xs: 56, sm: 64 } }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
            <Avatar
              onClick={handleHomeClick}
              src="images/avatar.jpg"
              sx={{ width: { xs: 36, sm: 40 }, height: { xs: 36, sm: 40 }, cursor: "pointer" }}
            />
            <Typography
              variant="h6"
              onClick={handleHomeClick}
              sx={{
                cursor: "pointer",
                color: "#fff",
                fontWeight: 500,
                display: { xs: "none", sm: "block" },
              }}
            >
              Noah Keen
            </Typography>
          </Stack>

          <Stack direction="row" spacing={{ xs: 0.5, sm: 1 }}>
            <Button 
              sx={{ 
                color: "#fff",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                minWidth: { xs: "auto", sm: 64 },
                px: { xs: 1, sm: 2 }
              }} 
              component={Link} 
              to="home"
            >
              Home
            </Button>
            <Button 
              sx={{ 
                color: "#fff",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                minWidth: { xs: "auto", sm: 64 },
                px: { xs: 1, sm: 2 }
              }} 
              component={Link} 
              to="about"
            >
              About
            </Button>
            <Button 
              sx={{ 
                color: "#fff",
                fontSize: { xs: "0.75rem", sm: "0.875rem" },
                minWidth: { xs: "auto", sm: 64 },
                px: { xs: 1, sm: 2 }
              }} 
              component={Link} 
              to="contact"
            >
              Contact
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;