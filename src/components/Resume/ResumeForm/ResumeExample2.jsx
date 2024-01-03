import React, { useEffect, useState } from "react";
import { Stack, Typography, Divider, Avatar, Grid } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { useFormContext } from "react-hook-form";

const ResumeExample2 = () => {
  const { getValues: data } = useFormContext();
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (data()?.personal?.img && data().personal.img.length > 0) {
      const file = data().personal.img[0];
      if (file instanceof File) {
        const newImageUrl = URL.createObjectURL(file);
        setImageURL(newImageUrl);

        // Clean up the object URL on unmount
        return () => URL.revokeObjectURL(newImageUrl);
      }
    }
  }, [data()?.personal?.img]);

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
                m: "32px auto",
              }}
              alt="Remy Sharp"
              src={imageURL}
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
            {data()?.education?.map((education, index) => (
              <EducationItem
                key={index}
                degree={education.department}
                university={education.university}
                startDate={new Date(education.startdate).getFullYear()}
                endDate={new Date(education.enddate).getFullYear()}
              />
            ))}
          </Stack>

          <SectionHeader title="Skills" />
          <SkillsList />

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
            <SectionHeader title="Languages" />

            <Stack spacing={4}>
              {data()?.languages?.map((item) => (
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
              {data()?.personal?.firstName} {data()?.personal?.lastName}
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
              {data()?.personal?.jobTitle}
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
          <WorkExperienceItem description={data()?.personal?.aboutMe} />
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
            {data()?.experience?.map((item) => (
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

          {/* <Divider
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
            direction={{ xs: "column", sm: "row" }}
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
          </Stack> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContactInfo = () => {
  const { getValues: data } = useFormContext();

  return (
    <Stack
      sx={{
        margin: "16px auto",
        width: "80%",
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
          {data()?.personal?.firstName} {data()?.personal?.lastName}
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
          {data()?.personal?.jobTitle}
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

        <Stack
          direction="column"
          justifyContent="space-between"
          sx={{
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
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                {data()?.personal?.phone}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <LocationOnIcon />
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                {data()?.personal?.address}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <AlternateEmailIcon />
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "500",
                }}
              >
                {data()?.personal?.email}
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
      {startDate}-{endDate}
    </Typography>
  </Stack>
);

const SkillsList = () => {
  const { getValues: data } = useFormContext();

  return (
    <Stack
      spacing={3}
      sx={{
        margin: "16px auto",
        width: "80%",
      }}
    >
      {data()?.skills?.map((item) => (
        <Typography
          key={item.skillName}
          sx={{
            color: "#43443f",
            fontSize: "17px",
            fontWeight: "600",
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
      }}
    >
      &nbsp;
      {proficiency}
    </Typography>
  </Stack>
);

export default ResumeExample2;
