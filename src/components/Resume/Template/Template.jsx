import React from "react";
import { Typography, Stack, Divider, useMediaQuery } from "@mui/material";

const TemplateEntry = ({ title, content, link }) => (
  <Stack sx={{ p: 4 }}>
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
    {link && (
      <a
        href={link}
        style={{
          fontWeight: "600",
          color: "rgb(30 112 167)",
          textDecoration: "none",
        }}
      >
        {link}
      </a>
    )}
  </Stack>
);

const ListItem = ({ item }) => (
  <li style={{ fontWeight: "500", fontSize: "20px", marginBottom: "30px" }}>
    <b>{item.name}</b>
    {item.description && (
      <ul>
        <li style={{ fontWeight: "500" }}>{item.description}</li>
      </ul>
    )}
  </li>
);

const ListStack = ({ items }) => (
  <Stack spacing={3}>
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  </Stack>
);
const References = [
  {
    name: "Harumi Kobayashi",
    position: "Wardiere inc. / CEO",
    phone: "123-456-7890",
    email: "hello@reallygreatsite.com",
  },
];
const Template = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const personalInfo = [
    { title: "Academic Rank", content: "Professor" },
    { title: "Department", content: "Computer Science" },
    { title: "Specialization", content: "Optimization" },
    {
      title: "Google Scholar",
      link: "https://mui.com/material-ui/react-typograph",
    },
    {
      title: "Research Gate",
      link: "https://mui.com/material-ui/react-typograph",
    },
    {
      title: "ORCID Record",
      link: "https://mui.com/material-ui/react-typograph",
    },
    { title: "Scopus ID", content: "------------------------" },
  ];

  const education = [
    {
      degree: "Ph.D.",
      discipline: "On Recent Approach for Solving Multiobjective Optimization",
      institution:
        "Faculty of Engineering, Ain Shames University, Cairo, Egypt",
      year: 2006,
    },
    {
      degree: "M.Sc.",
      discipline:
        "Interactive Approaches in Solving Large Scale Programming Problems",
      institution:
        "Faculty of Engineering, Ain Shames University, Cairo, Egypt",
      year: 2001,
    },
    {
      degree: "B.Sc.",
      discipline: "Electrical Engineering",
      institution:
        "Faculty of Engineering, Ain Shames University, Cairo, Egypt",
      year: 1994,
    },
  ];

  const academicExperience = [
    {
      institution:
        "Higher Technological Institute, th 10 Of Ramadan city, Egypt",
      rank: "Professor",
      date: 2022,
    },
  ];

  const researchInterests = [
    "Mathematical Programming",
    "Multi-Criteria Decision Making",
  ];

  const publications = [
    {
      name: "publication name – 2002",
      description:
        "Higher Technological Institute, Computer Sciences Department, 10th of Ramadan City, Egypt.",
    },
    {
      name: "publication name – 2002",
      description:
        "Higher Technological Institute, Computer Sciences Department, 10th of Ramadan City, Egypt.",
    },
  ];

  const honorsAndAwards = [
    {
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem enim ex praesentium voluptatibus debitis eligendi reiciendis repellendus voluptate nesciunt quaerat laborum, recusandae ea, iure sit aliquid obcaecati nisi maxime.",
    },
    {
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus odio eum in quis itaque. At maxime ea magni repellendus? Molestiae, ratione optio! Quibusdam illum voluptate dicta officia, blanditiis doloremque voluptatum.",
    },
  ];

  const teachingExperience = [
    {
      period: "09/16 – present",
      role: "ASSISTANT PROFESSOR",
      institution:
        "Higher Technological Institute, Computer Sciences Department, 10th of Ramadan City, Egypt.",
    },
    {
      period: "01/08 - 09/16",
      role: "GRADUATE TEACHING / RESEARCH ASSISTANT",
      institution:
        "Higher Technological Institute, Computer Sciences Department, 10th of Ramadan City, Egypt.",
    },
  ];

  const coursesTaught = [
    "Operation Research",
    "Decision Support Systems",
    "Data Structure",
  ];

  return (
    <Stack
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
          <img
            src="/images/template3-personalimg.avif"
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
            Martin Hardy Smith
          </Typography>
          <Typography
            sx={{ color: "#868484", fontWeight: 600 }}
            variant="h6"
            gutterBottom
          >
            Email: MartinHardySmith@yahoo.com
          </Typography>
          <Typography
            sx={{ color: "#868484", fontWeight: 600 }}
            variant="h6"
            gutterBottom
          >
            Phone: +20111155550
          </Typography>
          <Typography
            sx={{ color: "#868484", fontWeight: 600 }}
            variant="h6"
            gutterBottom
          >
            Address: Road 10, Madent-Nasr
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ borderBottom: "2px solid gray" }} />

      {/* Personal Information */}
      <TemplateEntry
        title="Personal Information"
        content={<ListStack items={personalInfo} />}
      />

      {/* Education */}
      <TemplateEntry
        title="Education"
        content={
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "2px solid black",
                    textAlign: "left",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    fontSize: isSmallScreen ? "16px" : "20px",
                  }}
                >
                  Degree
                </th>
                <th
                  style={{
                    border: "2px solid black",
                    textAlign: "left",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    fontSize: isSmallScreen ? "16px" : "20px",
                  }}
                >
                  Discipline
                </th>
                <th
                  style={{
                    border: "2px solid black",
                    textAlign: "left",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    fontSize: isSmallScreen ? "16px" : "20px",
                  }}
                >
                  Institution
                </th>
                <th
                  style={{
                    border: "2px solid black",
                    textAlign: "left",
                    padding: "8px",
                    backgroundColor: "#f2f2f2",
                    fontSize: isSmallScreen ? "16px" : "20px",
                  }}
                >
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {education.map((item, index) => (
                <tr key={index}>
                  <td
                    style={{
                      border: "1px solid black",
                      textAlign: "left",
                      padding: "8px",
                      fontWeight: "500",
                      fontSize: isSmallScreen ? "18px" : "21px",
                    }}
                  >
                    {item.degree}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      textAlign: "left",
                      padding: "8px",
                      maxWidth: "320px",
                      fontWeight: "500",
                      fontSize: isSmallScreen ? "14px" : "18px",
                    }}
                  >
                    {item.discipline}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      textAlign: "left",
                      padding: "8px",
                      fontWeight: "500",
                      fontSize: isSmallScreen ? "14px" : "18px",
                      maxWidth: "320px",
                    }}
                  >
                    {item.institution}
                  </td>
                  <td
                    style={{
                      border: "1px solid black",
                      textAlign: "left",
                      padding: "8px",
                      fontWeight: "500",
                      fontSize: isSmallScreen ? "14px" : "18px",
                    }}
                  >
                    {item.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      />

      {/* Academic Experience */}
      <TemplateEntry
        title="Academic Experience"
        content={
          <Stack spacing={4}>
            {academicExperience.map((item, index) => (
              <Stack key={index}>
                <Typography variant="h6" gutterBottom>
                  <b>Institution:</b> {item.institution}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <b>Rank:</b> {item.rank}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <b>Date:</b> {item.date}
                </Typography>
              </Stack>
            ))}
          </Stack>
        }
      />

      {/* Research Interests */}
      <TemplateEntry
        title="Research Interests"
        content={<ListStack items={researchInterests} />}
      />

      {/* Publications */}
      <TemplateEntry
        title="Publications"
        content={<ListStack items={publications} />}
      />

      {/* Certifications or Professional Registrations */}
      <TemplateEntry
        title="Certifications or Professional Registrations"
        content={
          <Stack sx={{ backgroundColor: "black", marginTop: "20px" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: 600,
                textAlign: "center",
                margin: "2px auto",
              }}
              variant="h5"
              gutterBottom
            >
              Honors and Awards
            </Typography>
          </Stack>
        }
      />

      <ul style={{ fontSize: "20px", color: "black", marginTop: "30px" }}>
        <Stack spacing={4}>
          {honorsAndAwards.map((item, index) => (
            <li key={index}>
              <span style={{ fontWeight: "500", color: "black" }}>
                {item.description}
              </span>
            </li>
          ))}
        </Stack>
      </ul>

      {/* Teaching Experience */}
      <TemplateEntry
        title="Teaching Experience"
        content={
          <Stack spacing={3}>
            <ul>
              {teachingExperience.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: "500",
                    fontSize: "20px",
                    marginBottom: "30px",
                  }}
                >
                  {item.period}: {item.role}
                  <ul>
                    <li style={{ fontWeight: "400" }}>{item.institution}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </Stack>
        }
      />

      {/* Courses Taught */}
      <TemplateEntry
        title="Courses Taught"
        content={<ListStack items={coursesTaught} />}
      />

      {/* REFERENCES */}
      <TemplateEntry
        title="References"
        content={<ListStack items={References} />}
      />
    </Stack>
  );
};

export default Template;
