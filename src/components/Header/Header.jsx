import React, { useState } from "react";
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
    name: "Resume",
    link: "/resume",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];
const Header = () => {
  const [currentRoute, setCurrentRoute] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isTabletView } = useWindowSize();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDrawerToggle = (e) => {
    setMobileOpen((prevState) => !prevState);
  };

  const location = useLocation();
  const isHome = location.pathname === "/";

  const navigate = useNavigate();

  const handleRouting = (route) => {
    navigate(route);
  };

  const scrollToTargetById = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 76;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
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
        backgroundColor: isHome ? "transparent" : "#14181c",
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
            width={180}
            height={40}
            alt="Cv-Creator Logo"
          />
        ) : (
          <img
            src={"/images/cvcreator-logo.png"}
            width={220}
            height={48}
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
                  location === page.link ? "2px solid #E41469" : "none",
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

        <Button
          variant="contained"
          sx={{
            display: { xs: "none", lg: "block" },
            padding: "0px",
            borderRadius: "100px",
            minWidth: "120px",
            height: "46px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          onClick={handleOpenModal}
        >
          Login
        </Button>
        <IconButton
          size="large"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          color="inherit"
          sx={{ display: { md: "block", lg: "none" } }}
        >
          <MenuIcon />
        </IconButton>
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
