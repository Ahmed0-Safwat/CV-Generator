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
import useHelpForm from "../../../api/helpForm/helpForm";
import { useSnackbar } from "notistack";

const NewContactUs = () => {
  const { mutate: helpMutation } = useHelpForm();

  const { enqueueSnackbar } = useSnackbar();

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateFields = () => {
    let errors = {};
    errors.firstName = formValues.firstName ? "" : "First Name is required";
    errors.lastName = formValues.lastName ? "" : "Last Name is required";
    errors.email = formValues.email ? "" : "Email is required";
    errors.text = formValues.text ? "" : "Message is required"; // New validation
    setFormErrors(errors);
    return !Object.values(errors).some((x) => x !== "");
  };

  const resetForm = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      text: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateFields()) {
      sendEmail(formValues);
      enqueueSnackbar("Message Sent Successfully!", { variant: "success" });
      resetForm();
    }
  };

  const sendEmail = (templateParams) => {
    helpMutation({
      firstName: templateParams.firstName,
      lastName: templateParams.lastName,
      email: templateParams.email,
      message: templateParams.text,
    });
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
                    Road 8, Ahmed-Orabi, 1th Floor,Building # 2, Cairo.
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
                    +20 1114277227
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
                <a href="">info@CV-Creator.com</a>
              </Typography>

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
          </Stack>

          <Stack direction="row" spacing={2}>
            <FacebookIcon sx={{ fontSize: "36px", color: "white" }} />
            <LinkedInIcon sx={{ fontSize: "36px", color: "white" }} />
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
