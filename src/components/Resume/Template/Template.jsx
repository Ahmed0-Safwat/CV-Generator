import React from "react";
import { Typography, Stack, Divider, useMediaQuery } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

const mappedValues = {
  academicrank: "Academic Rank",
  department: "Department",
  specialization: "Specialization",
  googlescholar: "Google Scholar",
  researchgate: "Research Gate",
  orcidrecord: "Orcid Record",
  googleScholar: "Google Scholar",
  scopusid: "Scopus ID",
  researchinterest: "Research Interest",
  publicationname: "Publication Name",
  year: "Year",
  description: "Description",
  honor: "Honor",
  title: "Title",
  startdate: "Start Date",
  enddate: "End Date",
  courses: "Courses",
  reference: "Reference",
  institution: "Institution",
  rank: "Rank",
  jobTitle: "Job Title",
  aboutMe: "About Me",
};

const Template = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
    <Stack
      id="resume"
      spacing={4}
      sx={{
        width: "90%",
        border: "1px solid black",
        backgroundColor: "#e8e8e8",
        margin: "auto",
        padding: "10px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Column */}
        <Stack
          sx={{
            width: { xs: "100%", md: "25%" },
            alignItems: "center",
          }}
        >
          {/* Personal Image */}
          <img
            src={imageURL}
            alt={`${data()?.personal.firstName} ${data()?.personal.lastName}`}
            style={{
              borderRadius: "20px",
              width: "240px",
              height: "225px",
              marginTop: { xs: "24px", md: "0" },
            }}
          />
        </Stack>

        {/* Right Column */}
        <Stack
          sx={{ width: { xs: "100%", md: "75%" }, p: 6, textAlign: "center" }}
        >
          <Typography
            sx={{ color: "#312b2b", fontWeight: 500 }}
            variant="h4"
            gutterBottom
          >
            {data()?.personal.firstName} {data()?.personal.lastName}
          </Typography>
          <Typography
            sx={{ color: "#868484", fontWeight: 600 }}
            variant="h6"
            gutterBottom
          >
            Email: {data()?.personal.email}
          </Typography>
          <Typography
            sx={{ color: "#868484", fontWeight: 600 }}
            variant="h6"
            gutterBottom
          >
            Phone: {data()?.personal.phone}
          </Typography>
          <Typography
            sx={{ color: "#868484", fontWeight: 600 }}
            variant="h6"
            gutterBottom
          >
            Address: {data()?.personal.address}
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderBottom: "2px solid gray" }} />

      {/* Personal Information */}
      <TemplateEntry
        title="Personal Information"
        content={<ListStack items={data()?.personalInfo} />}
      />

      {/* Education */}
      <TemplateEntry
        title="Education"
        content={
          <EducationTable
            items={data()?.education}
            isSmallScreen={isSmallScreen}
          />
        }
      />

      {/* Academic Experience */}
      <TemplateEntry
        title="Academic Experience"
        content={
          <ListStack items={data()?.experience} title="Academic Experience" />
        }
      />

      {/* Research Interests */}
      <TemplateEntry
        title="Research Interests"
        content={
          <ListStack
            items={data()?.researchInterests}
            title="Research Interests"
          />
        }
      />

      {/* Publications */}
      <TemplateEntry
        title="Publications"
        content={
          <ListStack items={data()?.publications} title="Publications" />
        }
      />

      {/* Certifications or Professional Registrations */}
      <Stack sx={{ paddingX: 4, m: 0 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Certifications or Professional Registrations
        </Typography>

        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <ul>
          {data()?.certificates.map((item, index) => (
            <Stack key={index} direction="row" paddingY="4px">
              <li>
                <b>
                  {new Date(item.startdate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(item.enddate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  :&nbsp;
                </b>
                {item.honor}
              </li>
            </Stack>
          ))}
        </ul>
      </Stack>

      {/* Teaching Experience */}

      <Stack sx={{ paddingX: 4, m: 0 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Teaching experience
        </Typography>

        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <ul>
          {data()?.teachingExp.map((item, index) => (
            <Stack key={index} direction="row" paddingY="4px">
              <li>
                <>
                  <b>
                    {new Date(item.startdate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {new Date(item.enddate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    :
                  </b>
                  &nbsp;{item.title}
                </>

                {/* Nested list for item.description */}
                <ul>
                  <li>{item.description}</li>
                </ul>
              </li>
            </Stack>
          ))}
        </ul>
      </Stack>

      {/* Courses Taught */}
      <TemplateEntry
        title="Courses Taught"
        content={<ListStack items={data()?.courses} title="Courses Taught" />}
      />

      {/* REFERENCES */}

      <Stack sx={{ paddingX: 4, m: 0 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          References
        </Typography>

        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        {data()?.references?.map((item) => (
          <ReferenceItem
            key={item.company}
            name={`${item.name}`}
            position={item.jobTitle}
            phone={item.phone}
            email={item.email}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const TemplateEntry = ({ title, content }) => (
  <Stack sx={{ paddingX: 4, m: 0 }}>
    <Typography
      sx={{
        color: "#312b2b",
        fontWeight: 600,
      }}
      variant="h5"
      gutterBottom
    >
      {title}
    </Typography>

    <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
    {content}
  </Stack>
);
const ListItem = ({ item, title }) => (
  <>
    {Object.entries(item).map(([key, value]) => {
      if (title === "Academic Experience") {
        return (
          <>
            <Stack key={value} direction="row" paddingY="4px">
              <Typography>
                <b>{mappedValues[key]}</b>
              </Typography>
              <Typography>{`: ${value}`}</Typography>
            </Stack>

            {mappedValues[key] === "Year" && (
              <Divider sx={{ marginY: "12px" }} />
            )}
          </>
        );
      }
      if (
        title === "Publications" ||
        title === "Courses Taught" ||
        title === "Research Interests"
      ) {
        return (
          <li
            style={{
              marginTop: "24px",
              marginBottom: "24px",
              fontSize: "18px",
            }}
            key={key}
          >
            {value}
          </li>
        );
      }

      return (
        <li style={{ marginTop: "24px", marginBottom: "24px" }} key={key}>
          <Stack direction="row">
            <Typography sx={{ textUnderlineOffset: "2px" }}>
              <b>
                <u>{mappedValues[key]}</u>{" "}
              </b>
            </Typography>

            {`: ${value}`}
          </Stack>
        </li>
      );
    })}
  </>
);
const ListStack = ({ items, title = null }) => (
  <Stack spacing={3}>
    <ul>
      {title === "Academic Experience" ? (
        <Stack spacing={0}>
          {items.map((item, index) => (
            <ListItem key={index} item={item} title={title} />
          ))}
        </Stack>
      ) : (
        items.map((item, index) => (
          <ListItem key={index} item={item} title={title} />
        ))
      )}
    </ul>
  </Stack>
);
const EducationTable = ({ items, isSmallScreen }) => (
  <table
    style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
  >
    <thead>
      <tr>
        <th style={tableHeaderStyle(isSmallScreen)}>Degree</th>
        <th style={tableHeaderStyle(isSmallScreen)}>Discipline</th>
        <th style={tableHeaderStyle(isSmallScreen)}>Institution</th>
        <th style={tableHeaderStyle(isSmallScreen)}>Year</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td style={tableCellStyle(isSmallScreen, "500", "21px")}>
            {item.degree}
          </td>
          <td style={tableCellStyle(isSmallScreen, "500", "18px")}>
            {item.discipline}
          </td>
          <td style={tableCellStyle(isSmallScreen, "500", "18px", "320px")}>
            {item.institution}
          </td>
          <td style={tableCellStyle(isSmallScreen, "500", "18px")}>
            {item.year}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
const tableHeaderStyle = (isSmallScreen) => ({
  border: "2px solid black",
  textAlign: "left",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  fontSize: isSmallScreen ? "16px" : "20px",
});

const tableCellStyle = (
  isSmallScreen,
  fontWeight,
  fontSize,
  maxWidth = "auto"
) => ({
  border: "1px solid black",
  textAlign: "left",
  padding: "8px",
  fontWeight,
  fontSize: isSmallScreen ? "14px" : fontSize,
  maxWidth,
});

const ReferenceItem = ({ name, position, phone, email }) => (
  <Stack spacing={1} sx={{ py: 3, width: "50%" }}>
    <Typography
      sx={{
        fontSize: "26px",
        fontWeight: "500",
        fontStyle: "normal",
        color: "#43443f",
      }}
    >
      {name}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "500",
        fontStyle: "normal",
        color: "gray",
      }}
    >
      {position}
    </Typography>
    <Typography
      sx={{
        fontSize: "18px",
        fontWeight: "600",
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

export default Template;
