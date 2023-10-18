import TextField from "@mui/material/TextField";
import Hero from "../../components/Home/Hero/Hero";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Stack, Typography, Divider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "20%",
    label: "Poor",
  },
  {
    value: "40%",
    label: "Fair",
  },
  {
    value: "60%",
    label: "Good",
  },
  {
    value: "80%",
    label: "Very Good",
  },
  {
    value: "100%",
    label: "Excellent",
  },
];
function Services() {
  return (
    <>
      <Hero />

      <Stack
        spacing={4}
        sx={{
          mb: 4,
          mt: 4,
        }}
      >
        <Stack sx={{ textAlign: "center" }}>
          <PersonIcon
            sx={{
              width: "42px",
              height: "42px",
              margin: "0px auto",
            }}
          />
          personal info
        </Stack>
        <Stack gap={4}>
          <Stack
            sx={{
              width: "85%",
              backgroundColor: "#1e2532",
              color: "white",
              margin: "5px auto",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              ABOUT SECTION
            </Typography>
          </Stack>
          <Stack
            gap={8}
            sx={{
              width: "85%",
              margin: "0px auto",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                type="upload"
                label="First Name"
                defaultValue="e.g.John"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Middle Name"
                defaultValue="e.g.Herbert "
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Last Name"
                defaultValue="e.g.Doe"
              />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Your Image"
                defaultValue="Upload Your Image "
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Designation"
                defaultValue="e.g. Sr.Accountants "
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Address"
                defaultValue="e.g. Lake Street-23"
              />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Email"
                defaultValue="e.g.johndoe@gmail.com"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Phone Nom:"
                defaultValue="e.g. 456-768-798 "
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Summary"
                defaultValue="e.g.Doe"
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Button
            sx={{
              margin: "0px auto",
              width: { xs: "20%", sm: "12%", md: "13%", lg: "10%" },
              fontSize: { xs: "17px", sm: "18px", md: "21px", lg: "24px" },
            }}
            variant="contained"
          >
            Next
            <NavigateNextIcon />
          </Button>
        </Stack>
        {/* *************************************************************************************** */}
        <Stack gap={4}>
          <Stack
            sx={{
              width: "85%",
              backgroundColor: "#1e2532",
              color: "white",
              margin: "5px auto",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              ACHIEVEMENTS
            </Typography>
          </Stack>
          <Stack
            gap={8}
            sx={{
              width: "85%",
              margin: "0px auto",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "49%",
                }}
                required
                id="outlined-required"
                label="Title"
                defaultValue="e.g.johndoe@gmail.com"
              />
              <TextField
                style={{
                  width: "49%",
                }}
                required
                id="outlined-required"
                label="Description"
                defaultValue="e.g.johndoe@gmail.com"
              />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "49%",
                }}
                required
                id="outlined-required"
                label="Title"
                defaultValue="e.g.johndoe@gmail.com"
              />
              <TextField
                style={{
                  width: "49%",
                }}
                required
                id="component-outlined"
                label="Description"
                defaultValue="e.g.johndoe@gmail.com"
              />
            </Stack>
          </Stack>
        </Stack>
        {/* *************************************************************************************** */}

        <Stack gap={4}>
          <Stack
            sx={{
              width: "85%",
              backgroundColor: "#1e2532",
              color: "white",
              margin: "5px auto",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              EXPERIENCE
            </Typography>
          </Stack>
          <Stack
            gap={8}
            sx={{
              width: "85%",
              margin: "0px auto",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Title"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Company / Organization"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Location"
              />
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Start Date"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="End Date"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Description
              "
              />
            </Stack>
          </Stack>
        </Stack>
        {/* *************************************************************************************** */}

        <Stack gap={4}>
          <Stack
            sx={{
              width: "85%",
              backgroundColor: "#1e2532",
              color: "white",
              margin: "5px auto",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              PROJECTS
            </Typography>
          </Stack>
          <Stack
            gap={8}
            sx={{
              width: "85%",
              margin: "0px auto",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Project Name"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Project Link"
              />
              <TextField
                style={{
                  width: "32%",
                }}
                required
                id="outlined-required"
                label="Description"
              />
            </Stack>
          </Stack>
        </Stack>
        {/* *************************************************************************************** */}

        <Stack gap={4}>
          <Stack
            sx={{
              width: "85%",
              backgroundColor: "#1e2532",
              color: "white",
              margin: "5px auto",
              p: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              SKILLS
            </Typography>
          </Stack>
          <Stack
            gap={8}
            sx={{
              width: "85%",
              margin: "0px auto",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                style={{
                  width: "49%",
                }}
                required
                id="outlined-required"
                label="Skill"
              />
              <TextField
                style={{
                  width: "49%",
                }}
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please Select Your Skill Level"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Stack>
        </Stack>
        {/* *************************************************************************************** */}

        <Stack>
          <Button
            sx={{
              margin: "0px auto",
              width: { xs: "30%", sm: "17%", md: "15%", lg: "13%" },
              fontSize: { xs: "17px", sm: "20px", md: "21px", lg: "25px" },
            }}
            variant="contained"
          >
            Generate
            <NavigateNextIcon />
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default Services;
