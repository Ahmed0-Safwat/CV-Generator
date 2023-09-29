import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import SignInModal from "../SignInModal/SignInModal";

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleRouting = (route) => {
    navigate(route);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: 2 }}>
        <img src="/assets/logo.png" alt="" />
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                ":hover": {
                  color: "#fbbe3e",
                },
              }}
              onClick={() => handleRouting(item.link)}
            >
              {item.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Button variant="contained" onClick={handleOpenModal}>
        Sign In
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: "64px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack sx={{ height: "64px", justifyContent: "center" }}>
            <img src="/assets/logo.png" alt="" />
          </Stack>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: "black",

                  "& > a": {
                    color: "black",
                    textDecoration: "none",

                    ":hover": {
                      color: "#fbbe3e",
                      backgroundColor: "transparent",
                    },
                  },
                }}
              >
                <Link to={item.link}>{item.name}</Link>
              </Button>
            ))}

            <Button variant="contained" onClick={handleOpenModal}>
              Sign In
            </Button>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              backgroundColor: "#2284d0",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}></Box>

      {modalOpen && <SignInModal open={modalOpen} onClose={handleCloseModal} />}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
