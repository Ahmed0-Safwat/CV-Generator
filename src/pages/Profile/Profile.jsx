import React from "react";
import { Typography, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

const Profile = () => {
  return (
    <Stack
      sx={{
        transform: "translateY(90px)",
        mb: 16,
      }}
    >
      <Stack
        style={{
          backgroundImage: "url(/images/hero-image.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          borderRadius: "0 0 30px 30px",
        }}
      >
        <Stack
          sx={{
            ml: { xs: 0, md: 0, lg: 4 },
            alignItems: {
              xs: "center",
              md: "center",
              lg: "flex-start",
            },
            textAlign: {
              xs: "center",
              lg: "left",
            },
          }}
        >
          <Stack
            width="30%"
            height="100%"
            sx={{
              alignItems: { xs: "center", lg: "center " },
              textAlign: "center",
              mt: 2,
              mb: 2,
              ml: 2,
            }}
          >
            <img
              style={{ width: "50%", borderRadius: "50%" }}
              src="/images/profile.jpg"
              alt=""
            />

            <Typography
              align="center"
              fontWeight={600}
              className="how-it-works-title"
              sx={{
                color: "white",
                fontSize: { xs: "14px", md: "24px", lg: "32px" },
                lineHeight:{ xs: "30px", md: "45px", lg: "50px" },

              }}
            >
              Ahmed Safwat
            </Typography>

            <Typography
              align="center"
              fontWeight={200}
              className="how-it-works-title"
              sx={{
                color: "white",
                fontSize: { xs: "10px", md: "24px", lg: "30px" },
              }}
            >
              ahmedsafwat11@yahoo.com
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        width="100%"
        spacing={4}
        sx={{
          padding: "16px",
        }}
      >
        <Typography
          lineHeight="52px"
          fontWeight={600}
          className="how-it-works-title"
          
          sx={{
            fontSize: { xs: "10px", md: "30px", lg: "40px" },
            textAlign:{ xs: "center", md: "center", lg: "start" },
            p:3,
          }}
        >
          Your Curriculum vitaes
        </Typography>
        <Stack
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <img
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "20px",
            }}
            src=" /images/hero-image.png"
          />
          <img
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "20px",
            }}
            src=" /images/hero-image.png"
          />
          <img
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "20px",
            }}
            src=" /images/hero-image.png"
          />
          <img
            style={{
              width: "400px",

              height: "400px",
              borderRadius: "20px",
            }}
            src=" /images/hero-image.png"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
