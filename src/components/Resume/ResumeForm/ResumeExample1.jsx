import React from "react";
import { Stack, Typography, LinearProgress } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactInfoData = [
  { icon: <CallIcon />, text: "+123-456-7890" },
  { icon: <LocationOnIcon />, text: "123 Anywhere St., Any City" },
  { icon: <AlternateEmailIcon />, text: "hello@reallygreatcompany.com" },
  { icon: <LinkedInIcon />, text: "www.reallygreatsite.com" },
];

const ResumeExample1 = () => {
  return (
    <>
      <Stack
        sx={{
          width: "90%",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: { xs: "column", md: "column", lg: "row" },
          margin: "50px auto",
          mb: 9,
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
              src="/images/temp-photo.jpg"
            />
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "28px",
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
                fontSize: "20px",
                fontWeight: "300",
                fontStyle: "normal",
                textAlign: "center",
              }}
            >
              Web Developer
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
                fontStyle: "normal",
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
              {contactInfoData.map((info, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  marginBottom={3}
                >
                  {info.icon}
                  <Typography
                    sx={{
                      color: "#FFF",
                      fontSize: "17px",
                      fontWeight: "500",
                      fontStyle: "normal",
                    }}
                  >
                    {info.text}
                  </Typography>
                </Stack>
              ))}
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
                fontStyle: "normal",
                textAlign: "start",
              }}
            >
              Education
            </Typography>
            <Stack spacing={4}>
              {/* Education Entry 1 */}
              <EducationEntry
                period="2010-2013"
                degree="Master Degree in Computer Science"
                institution="Misr International University"
              />
              {/* Education Entry 2 */}
              <EducationEntry
                period="2010-2013"
                degree="Master Degree in Computer Science"
                institution="Badr University In Cairo"
              />
              {/* Education Entry 3 */}
              <EducationEntry
                period="2010-2013"
                degree="Master Degree in Computer Science"
                institution="American University In Cairo"
              />
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
                fontStyle: "normal",
                textAlign: "start",
              }}
            >
              LANGUAGES
            </Typography>
            <Stack spacing={4}>
              {/* Language Entry 1 */}
              <LanguageEntry language="Arabic" proficiency={0.8} />
              {/* Language Entry 2 */}
              <LanguageEntry language="English" proficiency={0.5} />
              {/* Language Entry 3 */}
              <LanguageEntry language="Spanish" proficiency={0.65} />
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
                fontStyle: "normal",
                color: "#023437",
              }}
            >
              ABOUT ME
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                fontStyle: "normal",
                color: "#000000db",
              }}
            >
              Experienced Web Developer with a demonstrated history of working
              in the information technology and services industry. Skilled in
              React, JavaScript, and HTML/CSS. Strong engineering professional
              with a Master's degree focused on Computer Science.Experienced Web
              Developer with a demonstrated history of working in the
              information technology and services industry. Skilled in React,
              JavaScript, and HTML/CSS. Strong engineering professional with a
              Master's degree focused on Computer Science.Developer with a
              demonstrated history of working in the information technology and
              services industry. Skilled in React, JavaScript, and HTML/CSS.
              Strong engineering professional with a Master's degree focused on
              Computer Science.
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
                fontStyle: "normal",
                color: "#023437",
              }}
            >
              EXPERIENCE
            </Typography>
            <Stack spacing={4}>
              {/* Experience Entry 1 */}
              <ExperienceEntry
                period="2019 - Present"
                companyName="XYZ Corporation"
                position="Senior Frontend Developer"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, suscipit eos. Aperiam, ab soluta. Accusantium placeat maiores cum mollitia, explicabo iure similique eius, necessitatibus accusamus eos, saepe deleniti debitis sed?"
              />
              {/* Experience Entry 2 */}
              <ExperienceEntry
                period="2017 - 2019"
                companyName="ABC Tech"
                position="Software Engineer"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, suscipit eos. Aperiam, ab soluta. Accusantium placeat maiores cum mollitia, explicabo iure similique eius, necessitatibus accusamus eos, saepe deleniti debitis sed?"
              />
              {/* Experience Entry 3 */}
              <ExperienceEntry
                period="2013 - 2017"
                companyName="Company Name"
                position="Junior UI/UX Designer"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, suscipit eos. Aperiam, ab soluta. Accusantium placeat maiores cum mollitia, explicabo iure similique eius, necessitatibus accusamus eos, saepe deleniti debitis sed?"
              />
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
                fontStyle: "normal",
                color: "#023437",
              }}
            >
              SKILLS
            </Typography>
            <Stack spacing={4}>
              {/* Skill Entry 1 */}
              <SkillEntry skill="React" proficiency={0.9} />
              {/* Skill Entry 2 */}
              <SkillEntry skill="JavaScript" proficiency={0.85} />
              {/* Skill Entry 3 */}
              <SkillEntry skill="HTML/CSS" proficiency={0.95} />
              {/* Skill Entry 4 */}
              <SkillEntry skill="CSS" proficiency={0.65} />
              {/* Skill Entry 5 */}
              <SkillEntry skill="TypeScript" proficiency={0.75} />
              {/* Skill Entry 6 */}
              <SkillEntry skill="C Language" proficiency={1} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

const EducationEntry = ({ period, degree, institution }) => (
  <Stack>
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "#237781",
      }}
    >
      {period}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "#237781",
      }}
    >
      {degree}
    </Typography>
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: "500",
        fontStyle: "normal",
        color: "#000000db",
      }}
    >
      {institution}
    </Typography>
  </Stack>
);

const LanguageEntry = ({ language, proficiency }) => (
  <Stack>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "#237781",
      }}
    >
      {language}
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

const SkillEntry = ({ skill, proficiency }) => (
  <Stack>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "normal",
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
        fontSize: "12px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "gray",
      }}
    >
      {period}
    </Typography>
    <Typography
      sx={{
        fontSize: "12px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "gray",
      }}
    >
      {companyName}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "#237781",
      }}
    >
      {position}
    </Typography>
    <Typography
      sx={{
        fontSize: "14px",
        fontWeight: "500",
        fontStyle: "normal",
        color: "#000000db",
      }}
    >
      {description}
    </Typography>
  </Stack>
);

export default ResumeExample1;
