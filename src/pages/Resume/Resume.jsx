import Hero from "../../components/Home/Hero/Hero";
import React from "react";
import { Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
function Resume() {
  return (
    <>
      <Hero />

      <Stack
        sx={{
          width: "80%",
          backgroundColor: "blue",
          display: "flex",
          margin: "5px auto",
          flexDirection: "row",
        }}
      >
        <Stack></Stack>
        <Stack
          gap={2}
          sx={{
            width: "30%",
            backgroundColor: "#1f395a",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              width: "200px",
              height: "200px",
              m: "10px auto",
            }}
            alt="Remy Sharp"
            src="/images/temp-photo.jpg"
          />
          <Stack
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#FFF",
            }}
          ></Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Stack
              spacing={3}
              sx={{
                color: "#FFF",
              }}
            >
              <CallIcon />
              <LocationOnIcon />
              <EmailIcon />
              <LanguageIcon />
            </Stack>
            <Stack
              spacing={3}
              sx={{
                color: "#FFF",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "17px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                +01114277227
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "17px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                hello@reallygreatcompany.com{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "17px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                123 Anywhere St., Any City{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "17px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                www.reallygreatsite.com{" "}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#FFF",
            }}
          ></Stack>
          <Stack spacing={2}>
            <Stack>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "25px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  ml: 5,
                }}
              >
                About me.
              </Typography>
            </Stack>
            <Stack>
              <Stack
                sx={{
                  width: "90px",
                  height: "2px",
                  backgroundColor: "#FFF",
                  ml: 28,
                }}
              ></Stack>
            </Stack>
            <Stack
              sx={{
                width: "90%",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "16px",
                  fontWeight: "300",
                  lineHeight: "28px",
                  fontStyle: "normal",
                  ml: 5,
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis quae provident sapiente eaque dolorem nesciunt porro!
                Aspernatur architecto exercitationem placeat minus modi,
                similique eos possimus quis, eligendi, assumenda accusantium
                ipsa?
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: 0,
              height: 0,
              borderRightWidth: 200,
              borderLeftWidth: 200,
              borderTopWidth: 150,
              borderStyle: "solid",
              backgroundColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderTopColor: "orange",
            }}
          ></Stack>
        </Stack>

        <Stack
          sx={{
            width: "70%",
            backgroundColor: "white",
            textAlign: "center",
            backgroundColor: "aqua",
          }}
        >
          Ahmed Safwat
        </Stack>
      </Stack>
    </>
  );
}

export default Resume;
