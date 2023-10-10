import "./style.scss";
import { Box, Stack } from "@mui/material";
import NewContactUs from "../Company/NewContactUs/NewContactUs";

const Footer = () => {
  const asPath = "s";

  const isContactUsPage = asPath === "/contact-us";
  const isBlogPage = asPath === "/blog";
  const isBlogPostPage = asPath === "/blog-post";
  const backgroundImageUrl = "./images/hero-image.png";

  let currentYear = new Date().getFullYear();

  return (
    <Box
      id="footer"
      sx={{
        alignItems: "center",
        paddingTop: { xs: "40px", sm: isContactUsPage ? "0" : "80px" },
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: {
          xs: "40px 40px 0px 0px",
          sm: "80px 80px 0px 0px",
          lg: "100px 100px 0px 0px",
        },
      }}
    >
      {!isContactUsPage && !isBlogPage && !isBlogPostPage && <NewContactUs />}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          color: isContactUsPage ? "black" : "neutral.main",
          paddingTop: "40px",
          paddingBottom: "40px",
          textAlign: "center",
          paddingX: "24px",
        }}
      >
        <Stack>©{currentYear}. All rights reserved by wexcute OÜ.</Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
