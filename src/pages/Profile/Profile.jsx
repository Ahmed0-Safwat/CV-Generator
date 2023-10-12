import React from "react";
import { Typography, Stack, Divider, Box } from "@mui/material";

const Profile = () => {
  return (
    <Stack
      direction="row"
      sx={{
        transform: "translateY(90px)",
        mb: 16,
        mt: 4,
        ml: 4,
        mr: 4,
      }}
    >
      <Stack
        width="30%"
        height="100%"
        sx={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img style={{ width: "50%" }} src="/images/profile.jpg" alt="" />

        <Typography
          align="center"
          fontSize="30px"
          lineHeight="52px"
          fontWeight={600}
          className="how-it-works-title"
        >
          Salma Rashad
        </Typography>

        <Typography
          align="center"
          fontSize="24px"
          lineHeight="52px"
          fontWeight={400}
          className="how-it-works-title"
        >
          SalmaRashad61@yahoo.com
        </Typography>
      </Stack>

      <Stack
        width="100%"
        spacing={4}
        sx={{
          padding: "16px",
        }}
      >
        <Typography
          align="center"
          fontSize="50px"
          lineHeight="52px"
          fontWeight={600}
          className="how-it-works-title"
          sx={{
            fontFamily: "Pacifico",
            textDecorationLine: "underline",
          }}
        >
          Profile
        </Typography>

        <a style={{color:"#36C"}} href="">Http/https://wave.video/convert/youtube-to-mp4-260</a>
        <a style={{color:"#36C"}} href="">Http/https://wave.video/convert/youtube-to-mp4-260</a>
        <a style={{color:"#36C"}} href="">Http/https://wave.video/convert/youtube-to-mp4-260</a>
        <a style={{color:"#36C"}} href="">Http/https://wave.video/convert/youtube-to-mp4-260</a>
        <a style={{color:"#36C"}} href="">Http/https://wave.video/convert/youtube-to-mp4-260</a>


      </Stack>
    </Stack>
  );
};

export default Profile;
