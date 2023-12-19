import React from "react";
import { Stack, Typography, Divider, Avatar, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactInfo = () => {
  const contactInfoData = [
    { icon: <CallIcon />, text: "+123-456-7890" },
    { icon: <LocationOnIcon />, text: "123 Anywhere St., Any City" },
    { icon: <AlternateEmailIcon />, text: "hello@reallygreatcompany.com" },
    { icon: <LinkedInIcon />, text: "www.reallygreatsite.com" },
  ];

  return (
    <Stack
      sx={{
        margin: "16px auto",
        width: "80%",
        gap: 2,
      }}
    >
      {contactInfoData.map((info, index) => (
        <Stack
          key={index}
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ color: "#43443f" }}
        >
          {info.icon}
          <Typography
            sx={{
              color: "#43443f",
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
  );
};

const SectionHeader = ({ title }) => (
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
      {title}
    </Typography>
  </Stack>
);

const EducationItem = ({ degree, university, date }) => (
  <Stack>
    <Typography
      sx={{
        color: "#43443f",
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "normal",
      }}
    >
      {degree}
    </Typography>
    <Typography
      sx={{
        color: "#43443f",
        fontSize: "18px",
        fontWeight: "400",
        fontStyle: "normal",
      }}
    >
      {university}
    </Typography>
    <Typography
      sx={{
        color: "#626161",
        fontSize: "17px",
        fontWeight: "500",
        fontStyle: "normal",
      }}
    >
      {date}
    </Typography>
  </Stack>
);

const SkillsList = () => (
  <Stack
    spacing={3}
    sx={{
      margin: "16px auto",
      width: "80%",
    }}
  >
    {[
      "UI/UX",
      "Visual Design",
      "WireFrames",
      "StoryBoards",
      "User Flows",
      "Process Flows",
    ].map((skill, index) => (
      <Typography
        key={index}
        sx={{
          color: "#43443f",
          fontSize: "17px",
          fontWeight: "600",
          fontStyle: "normal",
        }}
      >
        {skill}
      </Typography>
    ))}
  </Stack>
);

const WorkExperienceItem = ({ position, company, date, description }) => (
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
        {position}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          fontStyle: "normal",
          color: "#5d5d5d",
        }}
      >
        {date}
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
        {company}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "500",
          fontStyle: "normal",
          color: "#5d5d5d",
        }}
      >
        {description}
      </Typography>
    </Stack>
  </Stack>
);

const ReferenceItem = ({ name, position, phone, email }) => (
  <Stack spacing={1} sx={{ mt: 8, width: "50%" }}>
    <Typography
      sx={{
        fontSize: "26px",
        fontWeight: "800",
        fontStyle: "normal",
        color: "#43443f",
      }}
    >
      {name}
    </Typography>
    <Typography
      sx={{
        fontSize: "22px",
        fontWeight: "500",
        fontStyle: "normal",
        color: "#43443f",
      }}
    >
      {position}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "#43443f",
      }}
    >
      Phone :<span style={{ color: "gray" }}>{phone}</span>
    </Typography>
    <Typography
      sx={{
        fontSize: "16px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "#43443f",
      }}
    >
      Email :<span style={{ color: "gray" }}>{email}</span>
    </Typography>
  </Stack>
);

const ResumeExample2 = () => {
  return (
    <Grid
      container
      sx={{
        width: "80%",
        backgroundColor: "blue",
        margin: "50px auto",
        flexDirection: "column",
      }}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#d0d0d0",
        }}
      >
        <Grid item xs={12} sm={4}>
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

          <ContactInfo />

          <SectionHeader title="Education" />

          <Stack
            spacing={4}
            sx={{
              margin: "16px auto",
              width: "80%",
            }}
          >
            <EducationItem
              degree="Master Degree in Computer Science"
              university="Misr International University"
              date="2017 - Present"
            />
            <EducationItem
              degree="Master Degree in Computer Science"
              university="Misr International University"
              date="2013 - 2017"
            />
            <EducationItem
              degree="Master Degree in Computer Science"
              university="Misr International University"
              date="2010 - 2013"
            />
          </Stack>

          <SectionHeader title="Skills" />
          <SkillsList />
        </Grid>

        <Grid item xs={12} sm={8} sx={{ padding: "32px" }}>
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

          <Stack
            spacing={10}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 4,
            }}
          >
            <WorkExperienceItem
              position="Job Position here"
              company="Company Name Location"
              date="2019-2022"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorum, rem recusandae temporibus assumenda illo perspiciatis modi optio at praesentium quidem. Animi eligendi natus ullam quasi facilis porro sit culpa."
            />
            <WorkExperienceItem
              position="Job Position here"
              company="Company Name Location"
              date="2016-2019"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorum, rem recusandae temporibus assumenda illo perspiciatis modi optio at praesentium quidem. Animi eligendi natus ullam quasi facilis porro sit culpa."
            />
            <WorkExperienceItem
              position="Job Position here"
              company="Company Name Location"
              date="2013-2016"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dolorum, rem recusandae temporibus assumenda illo perspiciatis modi optio at praesentium quidem. Animi eligendi natus ullam quasi facilis porro sit culpa."
            />
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

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ReferenceItem
              name="Harumi Kobayashi"
              position="Wardiere inc. / CEO"
              phone="123-456-7890"
              email="hello@reallygreatsite.com"
            />
            <ReferenceItem
              name="Bailey Dupont"
              position="Wardiere inc. / CEO"
              phone="123-456-7890"
              email="hello@reallygreatsite.com"
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeExample2;
