import React, { useState, useEffect } from "react";
import { Stack, Typography, LinearProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const ResumeExample1 = ({ data, id }) => {
  return (
    <>
      <Stack
        id={id}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          margin: "0",
          width:"100%"
        }}
      >
        {/* Left Column */}
        <Stack
          gap={2}
          sx={{
            width: { xs: "100%", md: "100%", lg: "33%" },
            backgroundColor: "#023437",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack gap={0}>
            {/* Profile Image, Name, and Role */}
            <Avatar
              sx={{
                width: "200px",
                height: "200px",
                m: "8px auto",
              }}
              alt="Remy Sharp"
              src={data?.personal?.img}
            />
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "28px",
                fontWeight: "500",

                textAlign: "center",
              }}
            >
              {data?.personal?.firstName} {data?.personal?.lastName}
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "20px",
                fontWeight: "300",

                textAlign: "center",
              }}
            >
              {data?.personal?.jobTitle}
            </Typography>
          </Stack>
          {/* Contact Information */}
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
                fontSize: "26px",
                fontWeight: "500",

                textAlign: "start",
              }}
            >
              Contact Info
            </Typography>
            <Stack
              direction="column"
              justifyContent="space-between"
              sx={{
                color: "#FFF",
                width: "100%",
              }}
            >
              <Stack
                direction="column"
                spacing={2}
                alignItems="flex-start"
                marginBottom={3}
              >
                <Stack direction="row" spacing={2}>
                  <CallIcon />
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    {data?.personal?.phone}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <LocationOnIcon />
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    {data?.personal?.address}
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <AlternateEmailIcon />
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "17px",
                      fontWeight: "500",
                    }}
                  >
                    {data?.personal?.email}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {/* Education Section */}
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
                fontSize: "26px",
                fontWeight: "500",

                textAlign: "start",
              }}
            >
              Education
            </Typography>
            <Stack spacing={4}>
              {/* Education Entry 1 */}
              {data?.education?.map((item) => (
                <EducationEntry
                  key={item.university}
                  startDate={new Date(item.startdate).getFullYear()}
                  endDate={new Date(item.enddate).getFullYear()}
                  degree={item.department}
                  institution={item.university}
                />
              ))}
            </Stack>
          </Stack>

          {/* Language Section */}
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
                fontSize: "26px",
                fontWeight: "500",

                textAlign: "start",
              }}
            >
              LANGUAGES
            </Typography>
            <Stack spacing={4}>
              {data?.languages?.map((item) => (
                <LanguageEntry
                  key={item.languageName}
                  language={item.languageName}
                  proficiency={item.languageLevel}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>

        {/* Right Column */}
        <Stack
          sx={{
            width: "100%", // Adjust width for medium screens
            textAlign: "center",
            backgroundColor: "#ebdbdb",
          }}
        >
          {/* About Me Section */}
          <Stack
            gap={4}
            sx={{
              padding: "24px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#023437",
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#000000db",
              }}
            >
              {data?.personal?.aboutMe}
            </Typography>
          </Stack>

          {/* Experience Section */}
          <Stack
            gap={4}
            sx={{
              padding: "24px",
              backgroundColor: "#ebdbdb",
            }}
          >
            <Typography
              sx={{
                fontSize: "27px",
                fontWeight: "700",

                color: "#023437",
              }}
            >
              EXPERIENCE
            </Typography>
            <Stack spacing={4}>
              {data?.experience?.map((item) => (
                <ExperienceEntry
                  key={item.company}
                  period={`${new Date(
                    item.startdate
                  ).getFullYear()} - ${new Date(item.enddate).getFullYear()}`}
                  companyName={item.company}
                  position={item.jobTitle}
                  description={item.description}
                />
              ))}
            </Stack>
          </Stack>

          {/* Skills Section */}
          <Stack
            gap={2}
            sx={{
              padding: "24px",
              backgroundColor: "#ebdbdb",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",

                color: "#023437",
              }}
            >
              SKILLS
            </Typography>
            <Stack spacing={4}>
              {data?.skills?.map((item) => (
                <SkillEntry
                  key={item.skillName}
                  skill={item.skillName}
                  proficiency={parseFloat(item.skillLevel) / 100}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const EducationEntry = ({ startDate, endDate, degree, institution }) => (
  <Stack>
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: "600",

        color: "#237781",
      }}
    >
      {startDate}-{endDate}
    </Typography>
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: "600",

        color: "#237781",
      }}
    >
      {degree}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "500",
        color: "white",
      }}
    >
      {institution}
    </Typography>
  </Stack>
);

const LanguageEntry = ({ language, proficiency }) => (
  <Stack direction="row">
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",

        color: "#237781",
      }}
    >
      {language}:
    </Typography>

    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",

        color: "white",
      }}
    >
      &nbsp;
      {proficiency}
    </Typography>
  </Stack>
);

const SkillEntry = ({ skill, proficiency }) => (
  <Stack>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",

        color: "#237781",
      }}
    >
      {skill}
    </Typography>
    <LinearProgress
      variant="determinate"
      value={proficiency * 100}
      sx={{
        height: 8,
        borderRadius: 5,
        marginTop: 1,
        backgroundColor: "#c0c0c0",
      }}
    />
  </Stack>
);

const ExperienceEntry = ({ period, companyName, position, description }) => (
  <Stack
    sx={{
      display: "flex",
      flexDirection: "column", // Change to column for medium screens
    }}
  >
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: "600",

        color: "gray",
      }}
    >
      {period}
    </Typography>
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: "600",

        color: "gray",
      }}
    >
      {companyName}
    </Typography>
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: "600",

        color: "#237781",
      }}
    >
      {position}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "500",

        color: "#000000db",
      }}
    >
      {description}
    </Typography>
  </Stack>
);

export default ResumeExample1;
