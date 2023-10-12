import "./style.scss";
import {
  Stack,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

const NewContactUs = () => {
  const asPath = "s";
  const isContactUsPage = asPath === "/contact-us";

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateFields = () => {
    let errors = {};
    errors.name = formValues.firstName ? "" : "Name is required";
    errors.name = formValues.lastName ? "" : "Name is required";
    errors.email = formValues.email ? "" : "Email is required";
    setFormErrors(errors);
    return !Object.values(errors).some((x) => x !== "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateFields()) {
      sendEmail(formValues);
    }
  };

  const sendEmail = (templateParams) => {
    // emailjs
    //   .send(
    //     "service_ibjw9ha",
    //     "template_ify6tqv",
    //     templateParams,
    //     "dsE_EFZFMuVJdPC9k"
    //   )
    //   .then(
    //     (response) => {
    //       console.log(
    //         "Email successfully sent!",
    //         response.status,
    //         response.text
    //       );
    //       setFormValues({ firstName: "", lastName: "", email: "", text: "" });
    //       setEmailSent(true);
    //       setTimeout(() => {
    //         setEmailSent(false);
    //       }, 10000);
    //     },
    //     (error) => {
    //       console.error("Email failed to send.", error);
    //     }
    //   );
  };

  return (
    <Stack
      className="section-container"
      direction={{ xs: "column", md: "row" }}
      pt="56px"
    >
      <Stack
        id="contact-us-container"
        className="section-content"
        direction={{ xs: "column", md: "row" }}
        spacing={1}
      >
        <Stack spacing={5} maxWidth={"700px"} width="100%">
          <Stack>
            <Typography
              fontSize="40px"
              fontWeight={700}
              mb={2}
              className="lets-talk-header"
              
            >
              Let's Begin
            </Typography>
            <Typography
              fontSize="20px"
              fontWeight={400}
              lineHeight="32px"
              color="white"
            >
              Reach out to us today in the way that's most convenient for you.
              We're excited to hear from you and assist you in creating a
              standout CV!
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            maxWidth={"700px"}
            width="100%"
          >
            <Stack spacing={3} maxWidth={"300px"}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <img
                  src={"/images/eg.svg"}
                  width={27}
                  height={20}
                  alt="image"
                />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  Egypt
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnOutlinedIcon
                    sx={{ color: "white", width: "24px", height: "24px" }}
                  />

                  <Typography
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="24px"
                    color="white"
                  >
                    Road 18, Sarayat El Maadi, 5th Floor,Building # 55, Cairo.
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocalPhoneOutlinedIcon
                    sx={{ color: "white", width: "24px", height: "24px" }}
                  />

                  <Typography
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="24px"
                    color="white"
                  >
                    +20 1000 20 9911
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack spacing={3} maxWidth={"300px"}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <img
                  src={"/images/de.svg"}
                  width={27}
                  height={20}
                  alt="image"
                />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  Germany
                </Typography>
              </Stack>

              <Stack spacing={1} justifyContent={"center"}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocationOnOutlinedIcon
                    sx={{ color: "white", width: "24px", height: "24px" }}
                  />

                  <Typography
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="24px"
                    color="white"
                  >
                    Lindenstraße 1, 20099 Hamburg.
                  </Typography>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2}>
                  <LocalPhoneOutlinedIcon
                    sx={{ color: "white", width: "24px", height: "24px" }}
                  />

                  <Typography
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="24px"
                    color="white"
                  >
                    +49 1573 2897307
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            maxWidth={"700px"}
            width="100%"
          >
            <Stack spacing={3} maxWidth="300px" width={"100%"}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailOutlinedIcon
                  sx={{ color: "white", width: "24px", height: "24px" }}
                />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  Email
                </Typography>
              </Stack>
              <Typography
                fontSize="16px"
                fontWeight={600}
                lineHeight="24px"
                color="white"
              >
                <a href="mailto:info@wexcute.com">info@CV-Creator.com</a>
              </Typography>
            </Stack>

            <Stack spacing={3} maxWidth="300px" width="100%">
              <Stack direction="row" alignItems="center" spacing={1}>
                <AccessTimeOutlinedIcon
                  sx={{ color: "white", width: "24px", height: "24px" }}
                />

                <Typography color="white" fontWeight={500} fontSize="20px">
                  Working Hours
                </Typography>
              </Stack>
              <Typography
                fontSize="16px"
                fontWeight={400}
                lineHeight="24px"
                color="white"
              >
                Sun - Thurs: 9 am — 6 pm
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2}>
            <a
              href="https://www.facebook.com/wexcute"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon sx={{ fontSize: "36px", color: "white" }} />
            </a>

            <a
              href="https://www.linkedin.com/company/wexcute/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon sx={{ fontSize: "36px", color: "white" }} />
            </a>
          </Stack>
        </Stack>

        <Stack
          alignSelf={{ sm: "center" }}
          width="100%"
          spacing={3}
          maxWidth="485px"
          justifyContent="center"
          padding={{ xs: "20px", md: "48px" }}
          sx={{
            backgroundColor: "white",
            borderRadius: "16px",
          }}
        >
          <Stack justifyContent="center" alignItems="left">
            <Typography fontSize="20px" fontWeight={600} lineHeight="32px">
              Ready To Get Started
            </Typography>
          </Stack>

          <Stack>
            <FormControl sx={{ width: "100%" }}>
              <Stack spacing={1}>
                {emailSent && (
                  <Typography
                    color="primary.main"
                    variant="h1"
                    textAlign="center"
                  >
                    Email has been sent successfully!
                  </Typography>
                )}

                <Stack spacing={2}>
                  <Stack direction="row" width="100%" spacing={3}>
                    <TextField
                      required
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      type="text"
                      variant="outlined"
                      label="First Name"
                      sx={{
                        borderRadius: "8px",
                        width: "100%",
                      }}
                      error={!!formErrors.firstName}
                      helperText={formErrors.firstName}
                    />

                    <TextField
                      required
                      name="lastName"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      type="text"
                      variant="outlined"
                      label="Last Name"
                      sx={{
                        borderRadius: "8px",
                        width: "100%",
                      }}
                      error={!!formErrors.lastName}
                      helperText={formErrors.lastName}
                    />
                  </Stack>
                  <TextField
                    required
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    type="email"
                    variant="outlined"
                    label="Email"
                    sx={{ borderRadius: "8px" }}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />

                  <TextField
                    name="text"
                    value={formValues.text}
                    onChange={handleInputChange}
                    type="text"
                    variant="outlined"
                    multiline
                    minRows={6}
                    label="Enter Your Message"
                    sx={{ borderRadius: "8px" }}
                    error={!!formErrors.text}
                    helperText={formErrors.text}
                  />
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ fontWeight: 700, boxShadow: "none" }}
                  >
                    Send Request
                  </Button>
                </Stack>
              </Stack>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewContactUs;
