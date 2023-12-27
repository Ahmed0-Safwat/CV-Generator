import React from "react";
import { Typography, Stack, Box, colors } from "@mui/material";
import Divider from "@mui/material/Divider";

const Template = () => {
  return (
    <Stack
      spacing={4}
      sx={{
        width: "90%",
        border: "1px solid black",
        backgroundColor: "#e8e8e8",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Stack
          sx={{
            width: "25%",
            alignItems: "center",
          }}
        >
          <img
            src="/images/template3-personalimg.avif"
            style={{
              borderRadius: "20px",
              width: "240px",
              height: "225px",
              marginTop: "24px",
            }}
          />
        </Stack>
        <Stack sx={{ width: "75%", p: 6, textAlign: "center" }}>
          <Typography
            sx={{
              color: "#312b2b",
              fontWeight: 500,
            }}
            variant="h4"
            gutterBottom
          >
            Martin Hardy Smith
          </Typography>
          <Typography
            sx={{
              color: "#868484",
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            Email: MartinHardySmith@yahoo.com
          </Typography>
          <Typography
            sx={{
              color: "#868484",
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            Phone: +20111155550
          </Typography>

          <Typography
            sx={{
              color: "#868484",
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            Address: Road 10, Madent-Nasr
          </Typography>
        </Stack>
      </Stack>
      {/*  *****************************************************  */}
      <Divider
        style={{
          borderBottom: "2px solid gray",
        }}
      ></Divider>
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Personal Information
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <ul style={{ fontSize: "20px" }}>
          <Stack spacing={8}>
            <li>
              <b>
                <u>Academic Rank:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                Professor
              </span>
            </li>
            <li>
              <b>
                <u>Department:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                Computer Science
              </span>
            </li>
            <li>
              <b>
                <u>Specialization:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                Optimization
              </span>
            </li>
            <li>
              <b>
                <u>Google Scholar:</u>{" "}
              </b>
              <a
                href=""
                style={{ fontWeight: "600", color: "rgb(30 112 167)" }}
              >
                https://mui.com/material-ui/react-typograph
              </a>
            </li>
            <li>
              <b>
                <u>Research Gate:</u>{" "}
              </b>
              <a
                href=""
                style={{ fontWeight: "600", color: "rgb(30 112 167)" }}
              >
                https://mui.com/material-ui/react-typograph
              </a>
            </li>
            <li>
              <b>
                <u>ORCID Record:</u>{" "}
              </b>
              <a
                href=""
                style={{ fontWeight: "600", color: "rgb(30 112 167)" }}
              >
                https://mui.com/material-ui/react-typograph
              </a>
            </li>
            <li>
              <b>
                <u>Scopus ID:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                ------------------------
              </span>
            </li>
          </Stack>
        </ul>
      </Stack>
      {/* ***************************** ************** */}
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Education
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
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
                  fontSize: "20px",
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
                  fontSize: "20px",
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
                  fontSize: "20px",
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
                  fontSize: "20px",
                }}
              >
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "21px",
                }}
              >
                Ph.D.
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  maxWidth: "320px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                On Recent Approach for Solving Multiobjective Optimization
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "18px",
                  maxWidth: "320px",
                }}
              >
                Faculty of Engineering, Ain Shames University, Cairo, Egypt
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                2006
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "21px",
                  maxWidth: "50px",
                }}
              >
                M.Sc.
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  whiteSpace: "normal",
                  maxWidth: "320px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Interactive Approaches in Solving Large Scale Programming
                Problems
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "18px",
                  maxWidth: "200px",
                }}
              >
                Faculty of Engineering, Ain Shames University, Cairo, Egypt{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                2001
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "21px",
                }}
              >
                B.Sc.
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  whiteSpace: "normal",
                  maxWidth: "320px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                Electrical Engineering
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "18px",
                  maxWidth: "200px",
                }}
              >
                Faculty of Engineering, Ain Shames University, Cairo, Egypt{" "}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "left",
                  padding: "8px",
                  fontWeight: "500",
                  fontSize: "18px",
                }}
              >
                1994
              </td>
            </tr>
          </tbody>
        </table>
      </Stack>
      {/****************************************************** */}
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Academic Experience
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>

        <Stack spacing={4} sx={{ p: 4 }}>
          <Stack>
            <Typography variant="h6" gutterBottom>
              <b>Institution:</b> Higher Technological Institute, th 10 Of
              Ramadan city, Egypt.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Rank:</b> Professor
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Date:</b> 2022
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" gutterBottom>
              <b>Institution:</b> Higher Technological Institute, th 10 Of
              Ramadan city, Egypt.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Rank:</b> Associate Professor
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Date:</b> 2017
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" gutterBottom>
              <b>Institution:</b> Higher Technological Institute, th 10 Of
              Ramadan city, Egypt.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Rank:</b> Assistant Professor
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Date:</b> 2008
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" gutterBottom>
              <b>Institution:</b> Higher Technological Institute, th 10 Of
              Ramadan city, Egypt.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Rank:</b> Research Assistant (PhD student)
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Date:</b> 2001
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" gutterBottom>
              <b>Institution:</b> Higher Technological Institute, th 10 Of
              Ramadan city, Egypt.
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Rank:</b> Teaching Assistant
            </Typography>
            <Typography variant="h6" gutterBottom>
              <b>Date:</b> 1994
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {/****************************************************** */}
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Research interests:{" "}
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Stack>
            <ul style={{ fontSize: "20px" }}>
              <Stack spacing={6}>
                <li>
                  <b> Mathematical Programming</b>
                </li>
                <li>
                  <b>Multi-Criteria Decision Making</b>
                </li>
                <li>
                  <b>Interactive Approaches</b>
                </li>
                <li>
                  <b>Numerical Optimization</b>
                </li>
              </Stack>
            </ul>
          </Stack>
          <Stack>
            <ul style={{ fontSize: "20px" }}>
              <Stack spacing={6}>
                <li>
                  <b>Fuzzy Mathematical Programming</b>
                </li>
                <li>
                  <b>Trust Region</b>
                </li>
                <li>
                  <b>Game Programming</b>
                </li>
                <li>
                  <b>Artificial Intelligent Approaches</b>
                </li>
              </Stack>
            </ul>
          </Stack>
        </Stack>
      </Stack>
      {/* **************************************** */}
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Publications{" "}
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <ol style={{ fontSize: "20px", color: "black" }}>
          <Stack spacing={4}>
            <li>
              <b>
                <u>Academic Rank:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "rgb(72 71 71)" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                dolorem enim ex praesentium voluptatibus debitis eligendi
                reiciendis repellendus voluptate nesciunt quaerat laborum,
                recusandae ea, iure sit aliquid obcaecati nisi maxime.
              </span>
            </li>
            <li>
              <b>
                <u>Department:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "rgb(72 71 71)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus odio eum in quis itaque. At maxime ea magni
                repellendus? Molestiae, ratione optio! Quibusdam illum voluptate
                dicta officia, blanditiis doloremque voluptatum.
              </span>
            </li>
            <li>
              <b>
                <u>Specialization:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "rgb(72 71 71)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores modi dolore veritatis autem libero quibusdam natus
                accusamus quia velit, suscipit qui magni soluta, sit ipsum nisi
                deserunt harum totam quasi.
              </span>
            </li>
            <li>
              <b>
                <u>Google Scholar:</u>{" "}
              </b>
              <span
                href=""
                style={{ fontWeight: "600", color: "rgb(72 71 71)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis autem velit natus illo optio? Et nisi laboriosam
                inventore autem commodi. Cumque, non. Ex fuga, accusantium eius
                placeat repellat velit voluptate!
              </span>
            </li>
            <li>
              <b>
                <u>Research Gate:</u>{" "}
              </b>
              <span
                href=""
                style={{ fontWeight: "600", color: "rgb(72 71 71)" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                distinctio minus deserunt libero totam suscipit eos! Inventore
                voluptas magni, reprehenderit expedita similique totam iste odit
                ea, aliquam quam fuga ut.
              </span>
            </li>
            <li>
              <b>
                <u>ORCID Record:</u>{" "}
              </b>
              <span
                href=""
                style={{ fontWeight: "600", color: "rgb(72 71 71)" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                provident sequi, repellendus magni voluptas quo error, officiis
                obcaecati nisi unde ratione dolorum! Error voluptates ipsa
                voluptas quas iste maiores harum?
              </span>
            </li>
          </Stack>
        </ol>
      </Stack>
      {/* **************************************** */}
      <Stack sx={{ p: 4 }}>
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
        <ul style={{ fontSize: "20px", color: "black", marginTop: "30px" }}>
          <Stack spacing={4}>
            <li>
              <span style={{ fontWeight: "500", color: "black" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                dolorem enim ex praesentium voluptatibus debitis eligendi
                reiciendis repellendus voluptate nesciunt quaerat laborum,
                recusandae ea, iure sit aliquid obcaecati nisi maxime.
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "500", color: "black" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus odio eum in quis itaque. At maxime ea magni
                repellendus? Molestiae, ratione optio! Quibusdam illum voluptate
                dicta officia, blanditiis doloremque voluptatum.
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "500", color: "black" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores modi dolore veritatis autem libero quibusdam natus
                accusamus quia velit, suscipit qui magni soluta, sit ipsum nisi
                deserunt harum totam quasi.
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "500", color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis autem velit natus illo optio? Et nisi laboriosam
                inventore autem commodi. Cumque, non. Ex fuga, accusantium eius
                placeat repellat velit voluptate!
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "500", color: "black" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis autem velit natus illo optio? Et nisi laboriosam
                inventore autem commodi. Cumque, non. Ex fuga, accusantium eius
                placeat repellat velit voluptate!
              </span>
            </li>
          </Stack>
        </ul>
      </Stack>
      {/* **************************************** */}
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Teaching Experience
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <Stack spacing={3}>
          <ul>
            <li
              style={{
                fontWeight: "500",
                fontSize: "20px",
                marginBottom: "30px",
                marginTop: "40px",
              }}
            >
              09/16 – present: ASSISTANT PROFESSOR
              <ul>
                <li style={{ fontWeight: "400" }}>
                  Higher Technological Institute, Computer Sciences Department,
                  10th of Ramadan City, Egypt.
                </li>
              </ul>
            </li>
            <li
              style={{
                fontWeight: "500",
                fontSize: "20px",
                marginBottom: "30px",
              }}
            >
              01/08 - 09/16: GRADUATE TEACHING / RESEARCH ASSISTANT
              <ul>
                <li style={{ fontWeight: "400", fontSize: "20px" }}>
                  Higher Technological Institute, Computer Sciences Department,
                  10th of Ramadan City, Egypt.
                </li>
              </ul>
            </li>
            <li
              style={{
                fontWeight: "500",
                fontSize: "20px",
                marginBottom: "30px",
              }}
            >
              09/03 - 01/08: TEACHING ASSISTANT / INSTRUCTOR
              <ul>
                <li style={{ fontWeight: "400", fontSize: "20px" }}>
                  Higher Technological Institute, Computer Sciences Department,
                  10th of Ramadan City, Egypt.
                </li>
              </ul>
            </li>
          </ul>
        </Stack>
      </Stack>
      {/* **************************************** */}
      <Stack sx={{ p: 4 }}>
        <Typography
          sx={{
            color: "#312b2b",
            fontWeight: 600,
          }}
          variant="h5"
          gutterBottom
        >
          Education
        </Typography>
        <Divider sx={{ borderBottom: "2px solid black" }}></Divider>
        <ul style={{ fontSize: "20px" }}>
          <Stack spacing={3}>
            <li>
              <b>Operation Research</b>
            </li>
            <li>
              <b>Decision Support Systems</b>
            </li>
            <li>
              <b>Data Structure</b>
            </li>
            <li>
              <b>Introduction to Computers</b>
            </li>
            <li>
              <b>Introduction to Information Systems</b>
            </li>
            <li>
              <b>Systems Analysis</b>
            </li>
            <li>
              <b>Artificial Intelligence</b>
            </li>
            <li>
              <b>Expert Systems</b>
            </li>
            <li>
              <b>Logic Programming</b>
            </li>
            <li>
              <b>Structure Programming</b>
            </li>
            <li>
              <b>Object Oriented Programming</b>
            </li>
          </Stack>
        </ul>
      </Stack>
      {/* **************************************** */}
    </Stack>
  );
};

export default Template;
