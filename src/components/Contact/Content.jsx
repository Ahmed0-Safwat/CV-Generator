import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Height } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Content = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#34a8ff4f",
      }}
    >
      <Stack>
        <img
          style={{
            width: "15%",
            margin: "30px auto",
          }}
          src="/assets/Contact.gif"
          alt=""
        />
      </Stack>

      <Stack
        sx={{
          backgroundColor: "white",
          width: "60%",
          margin: "0px auto",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "80ch" },
            display: "flex",
            flexDirection: "column",
            margin: "0px auto",
            padding: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <Typography style={{}} variant="subtitle1" gutterBottom>
            Contact Us
          </Typography>

          <Typography
            style={{
              marginBottom: "10px",
              width: "98%",
              color: "gray",
            }}
            variant="subtitle2"
            gutterBottom
          >
            If you have a questions or need help, please contact us. We are
            happy to answer any questions as soon as possible. Feel free to use
            the contact form below, or to contact us through either phone or
            livechat during business hours. For all further business information
            queries, you can visit the page About Us.
          </Typography>

          <Typography style={{}} variant="subtitle1" gutterBottom>
            Note:
          </Typography>

          <Typography
            style={{
              marginBottom: "10px",
              width: "98%",
              color: "gray",
            }}
            variant="subtitle2"
            gutterBottom
          >
            If you do not receive an email within 5 days confirmation after
            submitting the contact form, please fill in the form again!
          </Typography>

          <TextField
            style={{
              marginBottom: "10px",
              width: "98%",
            }}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />

          <TextField
            style={{
              marginBottom: "10px",
              width: "98%",
            }}
            id="outlined-multiline-static"
            label="Issue"
            multiline
            rows={4}
            defaultValue=""
          />
        </Box>
      </Stack>
      <br />
    </Stack>
  );
};

export default Content;
