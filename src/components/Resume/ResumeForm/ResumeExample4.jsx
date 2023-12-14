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
          gap={2}
          sx={{
            width: "27%",
            backgroundColor: "#023437",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack gap={0}>
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                m: "8px auto",
              }}
              alt="Remy Sharp"
              src="/images/temp-photo.jpg"
            />
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "30px",
                fontWeight: "500",
                fontStyle: "normal",
                textAlign: "center",
              }}
            >
              Ahmed Safwat
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "300",
                fontStyle: "normal",
                textAlign: "center",
              }}
            >
              Web Developer
            </Typography>
          </Stack>
          <Stack
            sx={{
              width: "83%",
              height: "0.5px",
              backgroundColor: "#FFF",
              margin: "0px auto",
            }}
          ></Stack>

          <Stack
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "25px",
                fontWeight: "500",
                fontStyle: "normal",
                textAlign: "start",
              }}
            >
              Contact Info
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Stack
                spacing={3.2}
                sx={{
                  color: "#FFF",
                }}
              >
                <CallIcon />
                <LocationOnIcon />
                <AlternateEmailIcon />
                <LinkedInIcon />
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
                  +123-456-7890
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "17px",
                    fontWeight: "400",
                    fontStyle: "normal",
                  }}
                >
                  123 Anywhere St., Any City
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "17px",
                    fontWeight: "400",
                    fontStyle: "normal",
                  }}
                >
                  hello@reallygreatcompany.com
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "17px",
                    fontWeight: "400",
                    fontStyle: "normal",
                  }}
                >
                  www.reallygreatsite.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "25px",
                fontWeight: "500",
                fontStyle: "normal",
                textAlign: "start",
              }}
            >
              Education
            </Typography>
            {/* *********** */}
            <Stack spacing={4}>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "#34a0c9",
                  }}
                >
                  2010-2013
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "white",
                  }}
                >
                  Master Degree in Computer Science
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    fontStyle: "normal",
                    color: "#cfc5c5",
                  }}
                >
                  Misr International University
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "#34a0c9",
                  }}
                >
                  2010-2013
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "white",
                  }}
                >
                  Master Degree in Computer Science
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    fontStyle: "normal",
                    color: "#cfc5c5",
                  }}
                >
                  Badr University In Cairo
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "400",
                    fontStyle: "normal",
                    color: "#34a0c9",
                  }}
                >
                  2010-2013
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "white",
                  }}
                >
                  Master Degree in Computer Science
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    fontStyle: "normal",
                    color: "#cfc5c5",
                  }}
                >
                  American University In Cairo
                </Typography>
              </Stack>
            </Stack>
            {/* *********** */}
          </Stack>
          <Stack
            gap={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "95%",
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "25px",
                fontWeight: "500",
                fontStyle: "normal",
                textAlign: "start",
              }}
            >
              LANGUAGES
            </Typography>
            <Stack spacing={4}>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    Arabic
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "90%",
                    height: "8px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "100%",
                      height: "8px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    English
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "90%",
                    height: "8px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "90%",
                      height: "8px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    Spanish
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "90%",
                    height: "8px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "65%",
                      height: "8px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "75%",
            textAlign: "center",
            backgroundColor: "#ebdbdb",
          }}
        >
          <Stack>
            <Stack
              gap={2.3}
              sx={{
                padding: "32px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "27px",
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: "#023437",
                }}
              >
                ABOUT ME
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#000000db",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus itaque enim cupiditate illo explicabo incidunt fugiat,
                delectus dolor laborum nam aperiam nulla quae neque autem atque
                praesentium in porro eum. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ducimus itaque enim cupiditate
                illo explicabo incidunt fugiat, delectus dolor laborum nam
                aperiam nulla quae neque autem atque praesentium in porro eum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus itaque enim cupiditate illo explicabo incidunt fugiat,
                delectus dolor laborum nam aperiam nulla quae neque autem atque
                praesentium in porro eum. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ducimus itaque enim cupiditate
                illo explicabo incidunt fugiat, delectus dolor laborum nam
                aperiam nulla quae neque autem atque praesentium in porro eum.
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#000000db",
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ducimus itaque enim cupiditate illo explicabo incidunt fugiat,
                delectus dolor laborum nam aperiam nulla quae neque autem atque
                praesentium in porro eum.
              </Typography>
            </Stack>
            <Stack
              gap={4}
              sx={{
                padding: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "27px",
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: "#023437",
                }}
              >
                EXPERIENCE
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  sx={{
                    width: "17%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    2020 - Present
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    Company Name
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#237781",
                    }}
                  >
                    Senior UX Designer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      fontStyle: "normal",
                      color: "#000000db",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, suscipit eos. Aperiam, ab soluta. Accusantium placeat
                    maiores cum mollitia, explicabo iure similique eius,
                    necessitatibus accusamus eos, saepe deleniti debitis sed?
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  sx={{
                    width: "17%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    2017 - 2020
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    Company Name
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#237781",
                    }}
                  >
                    UI/UX Designer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      fontStyle: "normal",
                      color: "#000000db",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, suscipit eos. Aperiam, ab soluta. Accusantium placeat
                    maiores cum mollitia, explicabo iure similique eius,
                    necessitatibus accusamus eos, saepe deleniti debitis sed?
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Stack
                  sx={{
                    width: "17%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    2013 - 2017
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    Company Name
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "80%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#237781",
                    }}
                  >
                    Junior UI/UX Designer
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      fontStyle: "normal",
                      color: "#000000db",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, suscipit eos. Aperiam, ab soluta. Accusantium placeat
                    maiores cum mollitia, explicabo iure similique eius,
                    necessitatibus accusamus eos, saepe deleniti debitis sed?
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              gap={5}
              sx={{
                padding: "24px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "27px",
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: "#023437",
                }}
              >
                PROFESSIONAL SKILLS
              </Typography>

              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    HTML
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "85%",
                    height: "18px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "80%",
                      height: "18px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    CSS
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "85%",
                    height: "18px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "50%",
                      height: "18px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    JAVASCRIPT
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "85%",
                    height: "18px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "70%",
                      height: "18px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    PHOTOSHOP
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "85%",
                    height: "18px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "100%",
                      height: "18px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    ILLUSTRATOR
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "85%",
                    height: "18px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "85%",
                      height: "18px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Stack>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "gray",
                    }}
                  >
                    ILLUSTRATOR
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    width: "85%",
                    height: "18px",
                    backgroundColor: "#80808059",
                    borderRadius: "4px",
                  }}
                >
                  <Stack
                    sx={{
                      width: "65%",
                      height: "18px",
                      borderRadius: "4px",

                      backgroundColor: "#17c0fa",
                    }}
                  ></Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* ********************************************************************************************** */}
      <Stack
        sx={{
          width: "100%",
          height: "16px",
          backgroundColor: "Black",
          borderRadius: "4px",
        }}
      ></Stack>
      {/* ********************************************************************************************** */}
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
