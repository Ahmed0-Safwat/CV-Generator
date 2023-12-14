import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ResumeExample4 = () => {
  return (
    <>
      <Stack
        sx={{
          width: "60%",
          backgroundColor: "blue",
          display: "flex",
          margin: "50px auto",
          flexDirection: "row",
          mb: 9,
        }}
      >
        <Stack
          sx={{
            width: "27%",
            backgroundColor: "#d0d0d0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack>
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                m: "32px auto",
              }}
              alt="Remy Sharp"
              src="/images/temp-photo.jpg"
            />
          </Stack>

          <Stack
            sx={{
              margin: "0px auto",
              backgroundColor: "#43443f",
              width: "80%",
              borderRadius: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                fontStyle: "normal",
                color: "white",
                textAlign: "center",
                padding: "8px",
              }}
            >
              Contact Me
            </Typography>
          </Stack>
          <Stack
            gap={2}
            sx={{
              margin: "16px auto",
              width: "80%",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                justifyContent: "space-between",
              }}
            >
              <Stack
                spacing={3.2}
                sx={{
                  color: "#43443f",
                }}
              >
                <CallIcon />
                <LocationOnIcon />
                <AlternateEmailIcon />
                <LinkedInIcon />
              </Stack>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    color: "#43443f",
                    fontSize: "17px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  +123-456-7890
                </Typography>
                <Typography
                  sx={{
                    color: "#43443f",
                    fontSize: "17px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  123 Anywhere St., Any City
                </Typography>
                <Typography
                  sx={{
                    color: "#43443f",
                    fontSize: "17px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  hello@reallygreatcompany.com
                </Typography>
                <Typography
                  sx={{
                    color: "#43443f",
                    fontSize: "17px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  www.reallygreatsite.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{
              margin: "16px auto",
              backgroundColor: "#43443f",
              width: "80%",
              borderRadius: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                fontStyle: "normal",
                color: "white",
                textAlign: "center",
                padding: "8px",
              }}
            >
              Education
            </Typography>
          </Stack>
          <Stack
            spacing={4}
            sx={{
              margin: "16px auto",
              width: "80%",
            }}
          >
            <Stack>
              <Typography
                sx={{
                  color: "#43443f",
                  fontSize: "18px",
                  fontWeight: "600",
                  fontStyle: "normal",
                }}
              >
                Master Degree in Computer Science
              </Typography>
              <Typography
                sx={{
                  color: "#43443f",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                Misr International University
              </Typography>
              <Typography
                sx={{
                  color: "#626161",
                  fontSize: "17px",
                  fontWeight: "500",
                  fontStyle: "normal",
                }}
              >
                2017 - Present
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  color: "#43443f",
                  fontSize: "18px",
                  fontWeight: "600",
                  fontStyle: "normal",
                }}
              >
                Master Degree in Computer Science
              </Typography>
              <Typography
                sx={{
                  color: "#43443f",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                Misr International University
              </Typography>
              <Typography
                sx={{
                  color: "#626161",
                  fontSize: "17px",
                  fontWeight: "500",
                  fontStyle: "normal",
                }}
              >
                2013 - 2017
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  color: "#43443f",
                  fontSize: "18px",
                  fontWeight: "600",
                  fontStyle: "normal",
                }}
              >
                Master Degree in Computer Science
              </Typography>
              <Typography
                sx={{
                  color: "#43443f",
                  fontSize: "18px",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                Misr International University
              </Typography>
              <Typography
                sx={{
                  color: "#626161",
                  fontSize: "17px",
                  fontWeight: "500",
                  fontStyle: "normal",
                }}
              >
                2010 - 2013
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              margin: "16px auto",
              backgroundColor: "#43443f",
              width: "80%",
              borderRadius: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "600",
                fontStyle: "normal",
                color: "white",
                textAlign: "center",
                padding: "8px",
              }}
            >
              Skills
            </Typography>
          </Stack>
          <Stack
            spacing={3}
            sx={{
              margin: "16px auto",
              width: "80%",
            }}
          >
            <li
              style={{
                color: "#43443f",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              UI/UX
            </li>
            <li
              style={{
                color: "#43443f",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              Visual Design
            </li>
            <li
              style={{
                color: "#43443f",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              WireFrames
            </li>
            <li
              style={{
                color: "#43443f",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              StoryBoards
            </li>
            <li
              style={{
                color: "#43443f",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              User Flows
            </li>
            <li
              style={{
                color: "#43443f",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
              }}
            >
              Process Flows
            </li>
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: "75%",
            backgroundColor: "#e6e4e4",
            padding: "32px",
          }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "50px",
                fontWeight: "800",
                fontStyle: "normal",
                color: "#43443f",
              }}
            >
              Ahmed Safwat
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "400",
                letterSpacing: "6px",
                fontStyle: "normal",
                color: "#5d5d5d",
              }}
            >
              Software Engineer
            </Typography>
          </Stack>
          <Divider
            sx={{
              fontSize: "30px",
              fontWeight: "800",
              fontStyle: "normal",
              color: "#43443f",
              mt: 10,
            }}
            textAlign="left"
          >
            WORK EXPERIENCE
          </Divider>

          {/* ******************************************* */}
          <Stack
            spacing={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 4,
            }}
          >
            <Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  Job Position here
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  2019-2022
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontStyle: "normal",
                    color: "#43443f",
                  }}
                >
                  Company Name Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, dolorum, rem recusandae temporibus assumenda illo
                  perspiciatis modi optio at praesentium quidem. Animi eligendi
                  natus ullam quasi facilis porro sit culpa.
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  Job Position here
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  2016-2019
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontStyle: "normal",
                    color: "#43443f",
                  }}
                >
                  Company Name Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, dolorum, rem recusandae temporibus assumenda illo
                  perspiciatis modi optio at praesentium quidem. Animi eligendi
                  natus ullam quasi facilis porro sit culpa.
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  Job Position here
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  2013-2016
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "700",
                    fontStyle: "normal",
                    color: "#43443f",
                  }}
                >
                  Company Name Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "#5d5d5d",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, dolorum, rem recusandae temporibus assumenda illo
                  perspiciatis modi optio at praesentium quidem. Animi eligendi
                  natus ullam quasi facilis porro sit culpa.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider
            sx={{
              fontSize: "30px",
              fontWeight: "800",
              fontStyle: "normal",
              color: "#43443f",
              mt: 10,
            }}
            textAlign="left"
          >
            REFERENCES
          </Divider>
          {/* ******************************************* */}
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Stack spacing={1} sx={{ mt: 8, width: "50%" }}>
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "800",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Harumi Kobayashi
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Wardiere inc. / CEO
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Phone :<span style={{ color: "gray" }}> 123-456-7890</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Email :
                <span style={{ color: "gray" }}>
                  {" "}
                  hello@reallygreatsite.com
                </span>
              </Typography>
            </Stack>
            {/* ******************* */}

            <Stack spacing={1} sx={{ mt: 8, width: "50%" }}>
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "800",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Bailey Dupont
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Wardiere inc. / CEO
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Phone :<span style={{ color: "gray" }}> 123-456-7890</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  fontStyle: "normal",
                  color: "#43443f",
                }}
              >
                Email :
                <span style={{ color: "gray" }}>
                  {" "}
                  hello@reallygreatsite.com
                </span>
              </Typography>
            </Stack>
          </Stack>
          {/* ******************************************* */}
        </Stack>
      </Stack>
    </>
  );
};

export default ResumeExample4;
