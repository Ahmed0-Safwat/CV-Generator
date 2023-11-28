import React from "react";
import { Typography, Stack, Box, colors } from "@mui/material";
import Divider from "@mui/material/Divider";

const Template = () => {
  return (
    <Stack
      spacing={4}
      sx={{
        width: "100%",
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
            src="/images/temp-photo.jpg"
            style={{
              borderRadius: "16px",
              width: "200px",
              height: "200px",
              marginTop: "24px",
            }}
          />
        </Stack>
        <Stack sx={{ width: "75%", p: 5, textAlign: "center" }}>
          <Typography
            sx={{
              color: "#312b2b",
              fontWeight: 500,
            }}
            variant="h4"
            gutterBottom
          >
            Yousria Abo elnaga abd Elhameed
          </Typography>
          <Typography
            sx={{
              color: "#868484",
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            Address: Yousriaaoelnaga@yahoo.com
          </Typography>
          <Typography
            sx={{
              color: "#868484",
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            Phone: +2011484477999
          </Typography>
          <Typography
            sx={{
              color: "#868484",
              fontWeight: 600,
            }}
            variant="h6"
            gutterBottom
          >
            Email: Yousriaaoelnaga@yahoo.com
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
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                https://mui.com/material-ui/react-typograph
              </span>
            </li>
            <li>
              <b>
                <u>Research Gate:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                https://mui.com/material-ui/react-typograph{" "}
              </span>
            </li>
            <li>
              <b>
                <u>ORCID Record:</u>{" "}
              </b>
              <span style={{ fontWeight: "600", color: "#5e5e5e" }}>
                https://mui.com/material-ui/react-typograph{" "}
              </span>
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
      <Stack spacing={4} sx={{ p: 4 }}>
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
        <Stack>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Institution:</b> Higher Technological Institute, th 10 Of Ramadan
            city, Egypt.
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Rank:</b> Professor
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Date:</b> 2022
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Institution:</b> Higher Technological Institute, th 10 Of Ramadan
            city, Egypt.
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Rank:</b> Associate Professor
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Date:</b> 2017
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Institution:</b> Higher Technological Institute, th 10 Of Ramadan
            city, Egypt.
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Rank:</b> Assistant Professor
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Date:</b> 2008
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Institution:</b> Higher Technological Institute, th 10 Of Ramadan
            city, Egypt.
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Rank:</b> Research Assistant (PhD student)
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Date:</b> 2001
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Institution:</b> Higher Technological Institute, th 10 Of Ramadan
            city, Egypt.
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Rank:</b> Teaching Assistant
          </Typography>
          <Typography sx={{ p: 1 }} variant="h6" gutterBottom>
            <b>Date:</b> 1994
          </Typography>
        </Stack>
      </Stack>
      {/****************************************************** */}
    </Stack>
  );
};

export default Template;
