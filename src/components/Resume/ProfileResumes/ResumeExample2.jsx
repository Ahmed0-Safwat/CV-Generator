import React, { useEffect, useState } from "react";
import { Stack, Typography, Divider, Avatar, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useFormContext } from "react-hook-form";

const ResumeExample2 = ({ data }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (data?.personal?.img && data.personal.img.length > 0) {
      const file = data.personal.img[0];
      if (file instanceof File) {
        const newImageUrl = URL.createObjectURL(file);
        setImageURL(newImageUrl);

        // Clean up the object URL on unmount
        return () => URL.revokeObjectURL(newImageUrl);
      }
    }
  }, [data?.personal?.img]);

  return (
    <Grid
      id="resume"
      container
      sx={{
        width: "90%",
        backgroundColor: "black",
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
                width: "250px",
                height: "250px",
                m: "10px auto",
                objectFit: "contain",
              }}
              alt="Remy Sharp"
              src={imageURL}
            />
          </Stack>

          <ContactInfo data={data} />

          <SectionHeader title="Education" />

          <Stack
            spacing={4}
            sx={{
              margin: "16px auto",
              width: "80%",
            }}
          >
            {data?.education?.map((education, index) => (
              <EducationItem
                key={index}
                startDate={new Date(education.startdate).getFullYear()}
                endDate={new Date(education.enddate).getFullYear()}
                degree={education.department}
                university={education.university}
              />
            ))}
          </Stack>

          <SectionHeader title="Skills" />
          <SkillsList data={data} />

          {/* Language Section */}
          <Stack>
            <SectionHeader title="Languages" />

            <Stack
              spacing={4}
              sx={{
                margin: "16px auto",
                width: "80%",
              }}
            >
              {data?.languages?.map((item) => (
                <LanguageEntry
                  key={item.languageName}
                  language={item.languageName}
                  proficiency={item.languageLevel}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          sx={{ padding: "32px", backgroundColor: "white" }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "35px", md: "50px", lg: "50px" },
                fontWeight: "800",
                fontStyle: "normal",
                color: "#43443f",
                display: { xs: "none", sm: "block", md: "block", lg: "block" }, // Display on sm, md, lg
              }}
            >
              {data?.personal?.firstName} {data?.personal?.lastName}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "25px", md: "30px", lg: "30px" },
                fontWeight: "500",
                letterSpacing: { xs: "4px", sm: "2px", md: "6px", lg: "6px" },
                fontStyle: "normal",
                color: "#5d5d5d",
                display: { xs: "none", sm: "block", md: "block", lg: "block" }, // Display on sm, md, lg
              }}
            >
              {data?.personal?.jobTitle}
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
            About Me
          </Divider>
          <WorkExperienceItem description={data?.personal?.aboutMe} />
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
            {data?.experience?.map((item) => (
              <WorkExperienceItem
                key={item.company}
                date={`${new Date(item.startdate).getFullYear()} - ${new Date(
                  item.enddate
                ).getFullYear()}`}
                company={item.company}
                position={item.jobTitle}
                description={item.description}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContactInfo = ({ data }) => {
  return (
    <Stack
      sx={{
        margin: "16px auto",
        width: "100%",
        gap: 2,
      }}
    >
      {/* need this appear when the size is XS */}
      <Stack>
        <Typography
          sx={{
            fontSize: { xs: "35px", sm: "35px", md: "32px", lg: "35px" },
            fontWeight: "800",
            fontStyle: "normal",
            color: "#43443f",
            textAlign: "center",
            display: { xs: "block", sm: "none", md: "none", lg: "none" }, // Display on xs, hide on sm, md, lg
          }}
        >
          {data?.personal?.firstName} {data?.personal?.lastName}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "20px", md: "25px", lg: "20px" },
            fontWeight: "500",
            letterSpacing: { xs: "3px", sm: "2px", md: "6px", lg: "6px" },
            fontStyle: "normal",
            color: "#5d5d5d",
            textAlign: "center",
            display: { xs: "block", sm: "none", md: "none", lg: "none" }, // Display on xs, hide on sm, md, lg
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
        }}
      >
        <SectionHeader title="Contact Info" />

        <Stack direction="column" justifyContent="space-between">
          <Stack
            direction="column"
            spacing={2}
            alignItems="flex-start"
            marginBottom={3}
            sx={{
              margin: "16px auto",
              width: "80%",
            }}
          >
            <Stack direction="row" spacing={2}>
              <CallIcon sx={{ color: "#43443f" }} />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#43443f",
                }}
              >
                {data?.personal?.phone}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <LocationOnIcon sx={{ color: "#43443f" }} />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#43443f",
                }}
              >
                {data?.personal?.address}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <AlternateEmailIcon sx={{ color: "#43443f" }} />
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#43443f",
                }}
              >
                {data?.personal?.email}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const SectionHeader = ({ title }) => (
  <Stack
    sx={{
      margin: "16px auto",
      backgroundColor: "#43443f",
      width: "90%",
      borderRadius: "50px",
    }}
  >
    <Typography
      sx={{
        fontSize: "30px",
        fontWeight: "600",
        fontStyle: "normal",
        color: "white",
        whiteSpace: "nowrap",
        textAlign: "center",
        padding: "8px",
      }}
    >
      {title}
    </Typography>
  </Stack>
);

const EducationItem = ({ degree, university, startDate, endDate }) => (
  <Stack sx={{ width: "70%" }}>
    <Typography
      sx={{
        color: "#08474f",
        fontSize: "17px",
        fontWeight: "500",
        fontStyle: "normal",
      }}
    >
      <b>
        {" "}
        {startDate}-{endDate}
      </b>
    </Typography>
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
        fontWeight: "500",
        fontStyle: "normal",
      }}
    >
      {university}
    </Typography>
  </Stack>
);

const SkillsList = ({ data }) => {
  return (
    <Stack
      spacing={3}
      sx={{
        margin: "16px auto",
        width: "80%",
      }}
    >
      {data?.skills?.map((item) => (
        <Typography
          key={item.skillName}
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#43443f",
            fontStyle: "normal",
          }}
        >
          {item.skillName}
        </Typography>
      ))}
    </Stack>
  );
};

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
          fontSize: "22px",
          fontWeight: "600",
          fontStyle: "normal",
          color: "#08474f",
        }}
      >
        {position}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          fontStyle: "normal",
          color: "#08474f",
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
          fontSize: "22px",
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

const LanguageEntry = ({ language, proficiency }) => (
  <Stack direction="row" sx={{}}>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",

        color: "#08474f",
      }}
    >
      {language}:
    </Typography>

    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
      }}
    >
      &nbsp;
      {proficiency}
    </Typography>
  </Stack>
);

export default ResumeExample2;
