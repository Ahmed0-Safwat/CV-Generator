import React, { useState } from "react";
import "./style.scss";
import {
  Stack,
  TextField,
  Button,
  Typography,
  TextareaAutosize,
  Box,
  FormControl,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import emailjs from "emailjs-com";

const ContactUsForm = () => {
  // const { asPath } = useRouter();
  const asPath = "/contact-us2";
  const isContactUsPage = asPath === "/contact-us";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const validateFields = () => {
    let errors = {};
    errors.name = formValues.name ? "" : "Name is required";
    errors.email = formValues.email ? "" : "Email is required";
    errors.phone = formValues.phone ? "" : "Phone is required";
    errors.text = formValues.text ? "" : "Text is required";
    setFormErrors(errors);
    return !Object.values(errors).some((x) => x !== "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateFields()) {
      console.log(formValues);
      sendEmail(formValues);
    }
  };

  const sendEmail = (templateParams) => {
    emailjs
      .send(
        "service_ibjw9ha", // Replace with your service ID
        "template_ify6tqv", // Replace with your template ID
        templateParams,
        "dsE_EFZFMuVJdPC9k" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          setFormValues({ name: "", email: "", phone: "", text: "" }); // Clear form
          setEmailSent(true); // Set emailSent state to true

          setTimeout(() => {
            setEmailSent(false);
          }, 10000);
        },
        (error) => {
          console.error("Email failed to send.", error);
        }
      );
  };

  return (
    <Stack
      spacing={5}
      sx={{
        maxWidth: "1200px",
        width: "100%",
        margin: "auto",
        paddingBottom: { xs: "40px", sm: isContactUsPage ? "0" : "80px" },
        paddingX: "24px",
      }}
    >
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="center"
        display={{ xs: isContactUsPage ? "flex" : "none", lg: "flex" }}
      >
        <Typography
          variant="h4"
          color={isContactUsPage ? "white" : "secondary.contrastText"}
          fontWeight={500}
          align="center"
        >
          Connect with WeXcute
        </Typography>
        <Typography
          className="content-subTitle"
          color={isContactUsPage ? "white" : "#8C8C8C"}
          variant="h6"
          textAlign="center"
        >
          Ready to elevate your business? Reach out in the way that’s most
          convenient.
          <br /> We're excited to hear from you!
        </Typography>
      </Stack>

      <Stack spacing={5} direction={isContactUsPage ? "column" : "row"}>
        <Stack spacing={5}>
          <Stack spacing={1}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <EmailIcon sx={{ color: "primary.main", fontSize: "36px" }} />

              <Typography variant="h6" color="primary.main" fontWeight={500}>
                Email
              </Typography>
            </Stack>
            <Typography
              variant="body1"
              color={isContactUsPage ? "white" : "secondary.contrastText"}
              fontWeight={700}
            >
              <a href="mailto:info@wexcute.com">info@wexcute.com</a>
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <img src={"/images/eg.svg"} width={27} height={20} alt="image" />

              <Typography variant="h6" color="primary.main" fontWeight={500}>
                Egypt
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon
                  sx={{ color: "primary.main", fontSize: "24px" }}
                />

                <Typography
                  variant="body1"
                  color={isContactUsPage ? "white" : "secondary.contrastText"}
                  fontWeight={500}
                >
                  Road 18, Sarayat El Maadi, 5th Floor,Building # 55, Cairo.
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <PhoneIcon sx={{ color: "primary.main", fontSize: "24px" }} />

                <Typography
                  variant="body1"
                  color={isContactUsPage ? "white" : "secondary.contrastText"}
                  fontWeight={500}
                >
                  +20 1000 20 9911
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <img src={"/images/de.svg"} width={27} height={20} alt="image" />

              <Typography variant="h6" color="primary.main" fontWeight={500}>
                Germany
              </Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocationOnIcon
                  sx={{ color: "primary.main", fontSize: "24px" }}
                />

                <Typography
                  variant="body1"
                  color={isContactUsPage ? "white" : "secondary.contrastText"}
                  fontWeight={500}
                >
                  Lindenstraße 1, 20099 Hamburg.
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <PhoneIcon sx={{ color: "primary.main", fontSize: "24px" }} />

                <Typography
                  variant="body1"
                  color={isContactUsPage ? "white" : "secondary.contrastText"}
                  fontWeight={500}
                >
                  +49 1573 2897307
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <FormControl
          sx={{
            width: "100%",
            display: { xs: isContactUsPage ? "block" : "none", lg: "block" },
          }}
        >
          <Stack spacing={1}>
            {emailSent && (
              <Typography color="primary.main" variant="h6" textAlign="center">
                Email has been sent successfully!
              </Typography>
            )}

            <Stack spacing={2}>
              <TextField
                required
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                type="text"
                variant="outlined"
                placeholder="Name"
                sx={{ borderRadius: "8px", backgroundColor: "#FFFFFF" }}
                error={!!formErrors.name}
                helperText={formErrors.name}
              />
              <TextField
                required
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                type="email"
                variant="outlined"
                placeholder="Email"
                sx={{ borderRadius: "8px", backgroundColor: "#FFFFFF" }}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField
                required
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                type="tel"
                variant="outlined"
                placeholder="Phone"
                sx={{ borderRadius: "8px", backgroundColor: "#FFFFFF" }}
                error={!!formErrors.phone}
                helperText={formErrors.phone}
              />
              <TextField
                required
                name="text"
                value={formValues.text}
                onChange={handleInputChange}
                type="text"
                variant="outlined"
                multiline
                minRows={4}
                placeholder="Enter your text"
                sx={{ borderRadius: "8px", backgroundColor: "#FFFFFF" }}
                error={!!formErrors.text}
                helperText={formErrors.text}
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                size="large"
                type="submit"
                sx={{ fontWeight: 700 }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default ContactUsForm;
