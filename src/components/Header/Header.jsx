import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { useWindowSize } from "../../hooks/useWindowSize";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import SignModal from "../SignModal/SignModal";

const pages = ["Home", "Company", "Services", "Projects", "Blog", "FAQs"];

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isTabletView } = useWindowSize();
  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   if (pathname === "/") {
  //     setCurrentRoute("HOME");
  //   } else {
  //     setCurrentRoute(pathname.toUpperCase().replace("/", ""));
  //   }

  //   return () => {
  //     setCurrentRoute("");
  //   };
  // }, [pathname]);

  const handleDrawerToggle = (e) => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleRouting = (page) => {
    const route = page.toUpperCase();

    // switch (route) {
    //   case "HOME":
    //     push(`/`);
    //     break;
    //   case "COMPANY":
    //     push("/company");
    //     break;
    //   case "SERVICES":
    //     push("/services");
    //     break;
    //   case "PROJECTS":
    //     push("/projects");
    //     break;
    //   case "BLOG":
    //     push("/blog");
    //     break;
    //   case "FAQS":
    //     push("/faq");
    //     break;
    //   default:
    //     break;
    // }
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

  // const handleLetsTalk = () => {
  //   if (isTabletView) {
  //     // push(`/contact-us`);
  //   } else {
  //     scrollToTargetById("footer");
  //   }
  // };

  const drawer = (
    <Box paddingTop={1} sx={{ backgroundColor: "black" }}>
      <img
        src={"/images/wexcute-logo-text-1.svg"}
        width={168}
        height={40}
        alt="Wexcute Logo"
      />
      <Divider />

      <List
        sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {pages.map((page) => {
          return (
            <ListItemButton
              key={page}
              onClick={() => handleRouting(page)}
              sx={{
                color:
                  currentRoute === page.toUpperCase()
                    ? "primary.main"
                    : "secondary.contrastText",
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    currentRoute === page.toUpperCase()
                      ? "primary.main"
                      : "secondary.contrastText",
                }}
              >
                {page}
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="relative"
      component="nav"
      sx={{
        top: "16px",
        background: "transparent",
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
            src={"/images/wexcute-logo-icon.svg"}
            width={56}
            height={56}
            alt="Wexcute Logo"
          />
        ) : (
          <img
            src={"/images/wexcute-logo-text-1.svg"}
            width={220}
            height={56}
            alt="Wexcute Logo"
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
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                color: "white",
                px: "20px",
                borderBottom:
                  currentRoute === page.toUpperCase()
                    ? "2px solid #E41469"
                    : "none",
                fontSize: "16px",
                fontWeight: 400,
              }}
              onClick={() => {
                handleRouting(page);
              }}
            >
              {page}
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
            "& .MuiDrawer-paper": { width: "240px" },
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
