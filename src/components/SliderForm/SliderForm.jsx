import React from "react";
import * as Components from "./Components";
import useSignupUser from "../../api/login/signup";
import useSigninUser from "../../api/login/signin";
import { Stack } from "@mui/material";
import { useStore } from "../../hooks/useStore";

function SliderForm({ handleClose }) {
  const [signIn, toggle] = React.useState(true);
  const [showValidationComponent, setShowValidationComponent] =
    React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    signUpEmail: "",
    signUpPassword: "",
    signInEmail: "",
    signInPassword: "",
    otp: null,
  });
  const [errors, setErrors] = React.useState({
    name: "",
    signUpEmail: "",
    signUpPassword: "",
    signInEmail: "",
    signInPassword: "",
    signInError: "",
    signUpError: "",
    verifyError: "",
    verifySuccess: "",
  });
  const [submitted, setSubmitted] = React.useState(false);
  const { mutate: signUpMutation } = useSignupUser();
  const { mutate: signInMutation } = useSigninUser();

  const areSignInFieldsFilled = formData.signInEmail && formData.signInPassword;
  const areSignUpFieldsFilled =
    formData.name && formData.signUpEmail && formData.signUpPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (submitted) {
      validate(name, value);
    }
  };

  const validate = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        if (!value) {
          errorMsg = "Name is required.";
        }
        break;
      case "signUpEmail":
      case "signInEmail":
        // eslint-disable-next-line no-case-declarations
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailPattern.test(value)) {
          errorMsg = "Please enter a valid email address.";
        }
        break;
      case "signUpPassword":
      case "signInPassword":
        if (value.length < 6) {
          errorMsg = "Password should be at least 6 characters long.";
        }
        break;
      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [name]: errorMsg,
    }));

    return errorMsg;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const nameError = validate("name", formData.name);
    const emailError = validate("signUpEmail", formData.signUpEmail);
    const passwordError = validate("signUpPassword", formData.signUpPassword);

    if (!nameError && !emailError && !passwordError) {
      console.log("SignUp data:", formData);

      const data = {
        name: formData.name,
        email: formData.signUpEmail,
        password: formData.signUpPassword,
      };

      signUpMutation(data, {
        onError: (error) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            signUpError: "An error occurred during sign up.",
          }));
        },
        onSettled: (res) => {
          console.log("res:", res);
          if (res?.status === 400) {
            console.log("11111HEREEE");

            setErrors((prevErrors) => ({
              ...prevErrors,
              signUpError: "Email Already Exists",
            }));
          } else {
            console.log("HEREEE");
            setShowValidationComponent(true);
          }
        },
      });
    }
  };

  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const data = {
      email: formData.signUpEmail,
      token: formData.otp,
    };

    await fetch(
      `https://moaaz2002-001-site1.atempurl.com/api/Users/Email/VerifyMail?email=${data?.email}&token=${data?.token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.status === 200) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          verifySuccess: "Email Verified Successfully Please Sign in",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          verifyError: "Invalid OTP Number",
        }));
      }
    });
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // First, validate all fields
    const emailError = validate("signInEmail", formData.signInEmail);
    const passwordError = validate("signInPassword", formData.signInPassword);

    // Now, after validation, check if there are any errors
    if (!emailError && !passwordError) {
      console.log("SignIn data:", formData);

      const data = {
        email: formData.signInEmail,
        password: formData.signInPassword,
      };

      const notVerifiedMessage =
        "Email is not Verified ,Verification mail sent!";

      signInMutation(data, {
        onSuccess: (response) => {
          if (response.message === notVerifiedMessage) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              signInError: "Email is not verified",
            }));
          } else {
            console.log("response", response);
            useStore.setState({
              globalState: {
                user: response.user,
                token: response.token,
              },
            });
            handleClose();
          }
        },
        onError: (error) => {
          if (error) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              signInError: "Email does not exist",
            }));
          }
        },
      });
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        {showValidationComponent ? (
          <Components.Form noValidate>
            <Stack spacing={3}>
              <Components.Title>Verify Account</Components.Title>
              <Components.Input
                type="number"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
              />
              {errors.verifyError && (
                <div style={{ color: "red" }}>{errors.verifyError}</div>
              )}
              {errors.verifySuccess && (
                <div style={{ color: "green" }}>{errors.verifySuccess}</div>
              )}

              <Components.Button
                disabled={!areSignUpFieldsFilled} // button is disabled if not both fields have some string value
                onClick={handleVerifyEmail}
              >
                Verify
              </Components.Button>
            </Stack>
          </Components.Form>
        ) : (
          <Components.Form noValidate>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            <Components.Input
              type="email"
              name="signUpEmail"
              placeholder="Email"
              value={formData.signUpEmail}
              onChange={handleChange}
            />
            {errors.signUpEmail && (
              <div style={{ color: "red" }}>{errors.signUpEmail}</div>
            )}
            <Components.Input
              type="password"
              name="signUpPassword"
              placeholder="Password"
              value={formData.signUpPassword}
              onChange={handleChange}
            />
            <Stack spacing={2}>
              {(errors.signUpPassword || errors.signUpError) && (
                <div style={{ color: "red" }}>
                  {errors.signUpPassword || errors.signUpError}
                </div>
              )}
              <Components.Button
                disabled={!areSignUpFieldsFilled} // button is disabled if not both fields have some string value
                onClick={handleSignUp}
              >
                Sign Up
              </Components.Button>
            </Stack>
          </Components.Form>
        )}
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form noValidate>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type="email"
            name="signInEmail"
            placeholder="Email"
            value={formData.signInEmail}
            onChange={handleChange}
          />
          {errors.signInEmail && (
            <div style={{ color: "red" }}>{errors.signInEmail}</div>
          )}
          <Components.Input
            type="password"
            name="signInPassword"
            placeholder="Password"
            value={formData.signInPassword}
            onChange={handleChange}
          />
          {(errors.signInPassword || errors.signInError) && (
            <div style={{ color: "red" }}>
              {errors.signInPassword || errors.signInError}
            </div>
          )}

          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button
            disabled={!areSignInFieldsFilled} // button is disabled if not both fields have some string value
            onClick={handleSignInClick}
          >
            Sign In
          </Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default SliderForm;
