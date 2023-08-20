import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Height } from "@mui/icons-material";
const Content = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#80808021",
      }}
    >
      <Stack>
        <img
          style={{
            width: "400px",
            height: "150px",
            margin: "30px auto",
          }}
          src="/assets/Contact.jpg"
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
            Contact Form
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
              color: "white",
            }}
            required
            id="outlined-required"
            label="User-Name"
            type="Email"
            defaultValue=""
          />

          <TextField
            style={{
              marginBottom: "10px",
            }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <TextField
            style={{
              marginBottom: "10px",
            }}
            id="outlined-multiline-static"
            label="Issue"
            multiline
            rows={4}
            defaultValue=""
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Content;
