import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import SignModal from "../SignModal/SignModal";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProfileSection from "../ProfileSection/ProfileSection";
import { useStore } from "../../hooks/useStore";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Company",
    link: "/company",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "AI Chat",
    link: "/aichat",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Resume",
    link: "/resume",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];
const Header = () => {
  const [currentRoute, setCurrentRoute] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isTabletView } = useWindowSize();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDrawerToggle = (e) => {
    setMobileOpen((prevState) => !prevState);
  };

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname, navigate]);

  const handleRouting = (route) => {
    useStore.setState({
      globalState: {
        ...useStore.getState().globalState,
        activeStep: 0,
        shouldShowStepper: false,
      },
    });

    const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

    if (route === "/aichat" && !sessionStorageUser) {
      return setModalOpen(true);
    }

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
        <img
          style={{ width: "100%" }}
          src="/images/cvcreator-logo.png"
          alt=""
        />
      </Box>

      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                ":hover": {
                  color: "#41819e",
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

  return (
    <AppBar
      position="relative"
      component="nav"
      sx={{
        top: "0",
        backgroundColor: "transparent",
        height: "90px",
        width: "100%",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        boxShadow: "none",
        zIndex: 1000,
      }}
    >
      <Stack
        className="section-content"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        {isTabletView ? (
          <img
            src={"/images/cvcreator-logo.png"}
            width={200}
            height={40}
            alt="Cv-Creator Logo"
          />
        ) : (
          <img
            src={"/images/cvcreator-logo.png"}
            width={260}
            height={50}
            alt="Cv-Creator Logo"
          />
        )}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {navItems.map((page) => (
            <Button
              key={page.name}
              sx={{
                color: "white",
                px: "20px",
                borderBottom:
                  currentRoute === page.link ? "2px solid #E41469" : "none",
                fontSize: "16px",
                fontWeight: 400,
              }}
              onClick={() => {
                handleRouting(page.link);
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <Stack direction="row" spacing={0}>
          <IconButton
            size="large"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            color="inherit"
            sx={{ display: { md: "block", lg: "none" }, padding: 0 }}
          >
            <MenuIcon />
          </IconButton>

          <ProfileSection handleOpenModal={handleOpenModal} />
        </Stack>
      </Stack>
      <Box id="drawer-wrapper" component="nav">
        <Drawer
          disableScrollLock={true}
          container={undefined}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: "240px",
              backgroundColor: "#000000e8",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {modalOpen && <SignModal open={modalOpen} onClose={handleCloseModal} />}
    </AppBar>
  );
};

export default Header;
