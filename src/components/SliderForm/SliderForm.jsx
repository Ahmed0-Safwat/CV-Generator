import React, { useState } from "react";
import * as Components from "./Components";
import useSignupUser from "../../api/login/signup";
import useSigninUser from "../../api/login/signin";
import { Stack } from "@mui/material";
import { useStore } from "../../hooks/useStore";
import { set } from "date-fns";

function SliderForm({ handleClose }) {
  const [signIn, toggle] = React.useState(true);
  const [isInResetPassword, setIsInResetPassword] = useState(false);
  const [isInOTPPassword, setIsInOTPPassword] = useState(false);
  const [showValidationComponent, setShowValidationComponent] =
    React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    signUpEmail: "",
    signUpPassword: "",
    signInEmail: "",
    signInPassword: "",
    otp: null,
    resetEmail: "", // Added resetEmail
    resetEmailPassword: "", // Added resetEmailPassword
  });

  // Updated state with resetEmailError
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
    resetEmail: "",
    resetEmailOtp: "",
    resetEmailPassword: "",
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
    // ... existing validation logic ...

    setErrors((prevState) => ({
      ...prevState,
      [name]: errorMsg,
    }));

    switch (name) {
      case "name":
        if (!value) {
          errorMsg = "Name is required.";
        }
        break;
      case "signUpEmail":
      case "signInEmail":
      case "resetEmail":
        // eslint-disable-next-line no-case-declarations
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!emailPattern.test(value)) {
          errorMsg = "Please enter a valid email address.";
        }
        break;
      case "signUpPassword":
      case "signInPassword":
      case "resetEmailPassword":
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
          if (res?.status === 400) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              signUpError: "Email Already Exists",
            }));
          } else {
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
      `https://moaaaz2002-001-site1.btempurl.com/api/Users/Email/VerifyMail?email=${data?.email}&token=${data?.token}`,
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
      const data = {
        email: formData.signInEmail,
        password: formData.signInPassword,
      };

      const notVerifiedMessage =
        "Email is not Verified ,Verification mail sent!";

      signInMutation(data, {
        onSuccess: (response) => {
          console.log("response", response);
          if (response.message === notVerifiedMessage) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              signInError: "Email is not verified",
            }));
          } else {
            useStore.setState({
              globalState: {
                user: { ...response.user, image: response.imageBase64 },
                token: response.token,
                image: response.imageBase64,
              },
            });
            sessionStorage.setItem(
              "user",
              JSON.stringify({ ...response.user, image: response.imageBase64 })
            );
            sessionStorage.setItem("token", JSON.stringify(response.token));

            // clear data & errors
            setFormData({
              name: "",
              signUpEmail: "",
              signUpPassword: "",
              signInEmail: "",
              signInPassword: "",
              otp: null,
              resetEmail: "", // Added resetEmail
              resetEmailPassword: "", // Added resetEmailPassword
            });
            setErrors({
              name: "",
              signUpEmail: "",
              signUpPassword: "",
              signInEmail: "",
              signInPassword: "",
              signInError: "",
              signUpError: "",
              verifyError: "",
              verifySuccess: "",
              resetEmail: "",
              resetEmailOtp: "",
              resetEmailPassword: "",
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

  const handleResetClick = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const resetError = validate("resetEmail", formData.resetEmail);

    if (!resetError) {
      console.log("Reset email to be sent:", formData.resetEmail);

      // Construct the URL with the email as a query parameter
      const url = new URL(
        `https://moaaaz2002-001-site1.btempurl.com/api/Users/Email/ResetPassword`
      );
      url.searchParams.append("email", formData.resetEmail);

      await fetch(url.toString(), {
        method: "POST",
      }).then((res) => {
        if (res.status === 200) {
          setIsInOTPPassword(true);
        } else {
          console.error("Error Response:", res); // Debug log for error response
          setErrors((prevErrors) => ({
            ...prevErrors,
            verifyError: "No user registered with that email.",
          }));
        }
      });
    }
  };

  const handleResetWithOTPClick = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const resetError = validate("resetEmail", formData.resetEmail);
    const otpError = validate("otp", formData.otp);
    const newPassword = validate(
      "resetEmailPassword",
      formData.resetEmailPassword
    );

    if (!resetError && !otpError && !newPassword) {
      // Construct the URL with the email, otp, and newPassword as query parameters
      const url = new URL(
        `https://moaaaz2002-001-site1.btempurl.com/api/Users/Email/VerifyResetCode`
      );
      url.searchParams.append("email", formData.resetEmail);
      url.searchParams.append("token", formData.otp);
      url.searchParams.append("newPassword", formData.resetEmailPassword);

      await fetch(url.toString(), {
        method: "PUT",
      }).then((res) => {
        if (res.status === 200) {
          setIsInResetPassword(false);
          setIsInOTPPassword(false);
          // clear data & errors
          setFormData({
            name: "",
            signUpEmail: "",
            signUpPassword: "",
            signInEmail: "",
            signInPassword: "",
            otp: null,
            resetEmail: "", // Added resetEmail
            resetEmailPassword: "", // Added resetEmailPassword
          });
          setErrors({
            name: "",
            signUpEmail: "",
            signUpPassword: "",
            signInEmail: "",
            signInPassword: "",
            signInError: "",
            signUpError: "",
            verifyError: "",
            verifySuccess: "",
            resetEmail: "",
            resetEmailOtp: "",
            resetEmailPassword: "",
          });
        } else {
          console.error("Error Response:", res); // Debug log for error response
          setErrors((prevErrors) => ({
            ...prevErrors,
            resetEmailOtp: "Invalid OTP Number",
          }));
        }
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
                <div style={{ color: "#03adb5" }}>{errors.verifySuccess}</div>
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

      {isInResetPassword ? (
        isInOTPPassword ? (
          <Components.SignInContainer signinIn={signIn}>
            <Components.Form noValidate>
              <Components.Title>Reset with OTP</Components.Title>
              <Components.Input
                type="email"
                name="resetEmail"
                placeholder="Email"
                value={formData.resetEmail}
                onChange={handleChange}
              />
              {errors.resetEmail && (
                <div style={{ color: "red" }}>{errors.resetEmail}</div>
              )}

              <Components.Input
                type="number"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
              />
              {errors.resetEmailOtp && (
                <div style={{ color: "red" }}>{errors.resetEmailOtp}</div>
              )}

              <Components.Input
                type="password"
                name="resetEmailPassword"
                placeholder="Password"
                value={formData.resetEmailPassword}
                onChange={handleChange}
              />
              {errors.resetEmailPassword && (
                <div style={{ color: "red" }}>{errors.resetEmailPassword}</div>
              )}

              <Components.Anchor
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsInResetPassword((prev) => !prev);
                  setIsInOTPPassword((prev) => !prev);
                }}
              >
                Back to Sign in?
              </Components.Anchor>

              <Components.Button
                disabled={!formData.resetEmail} // button is disabled if email is empty
                onClick={handleResetWithOTPClick}
              >
                Reset Password with OTP
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>
        ) : (
          <Components.SignInContainer signinIn={signIn}>
            <Components.Form noValidate>
              <Components.Title>Reset Password</Components.Title>
              <Components.Input
                type="email"
                name="resetEmail"
                placeholder="Email"
                value={formData.resetEmail}
                onChange={handleChange}
              />
              {errors.resetEmail && (
                <div style={{ color: "red" }}>{errors.resetEmail}</div>
              )}
              {errors.verifyError && (
                <div style={{ color: "red" }}>{errors.verifyError}</div>
              )}
              {errors.verifySuccess && (
                <div style={{ color: "#03adb5" }}>{errors.verifySuccess}</div>
              )}
              <Components.Anchor
                style={{ cursor: "pointer" }}
                onClick={() => setIsInResetPassword((prev) => !prev)}
              >
                Back to Sign in?
              </Components.Anchor>
              <Components.Button
                disabled={!formData.resetEmail} // button is disabled if email is empty
                onClick={handleResetClick}
              >
                Send OTP
              </Components.Button>
            </Components.Form>
          </Components.SignInContainer>
        )
      ) : (
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

            <Components.Anchor
              style={{ cursor: "pointer" }}
              onClick={() => setIsInResetPassword((prev) => !prev)}
            >
              Forgot your password?
            </Components.Anchor>
            <Components.Button
              disabled={!areSignInFieldsFilled} // button is disabled if not both fields have some string value
              onClick={handleSignInClick}
            >
              Sign In
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>
      )}

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
