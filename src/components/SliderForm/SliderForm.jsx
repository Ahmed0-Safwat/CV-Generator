import React from "react";
import * as Components from "./Components";
import useSignupUser from "../../api/login/signup";
import useSigninUser from "../../api/login/signup";

function SliderForm() {
  const [signIn, toggle] = React.useState(true);
  const [formData, setFormData] = React.useState({
    name: "",
    signUpEmail: "",
    signUpPassword: "",
    signInEmail: "",
    signInPassword: "",
  });
  const [errors, setErrors] = React.useState({});
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
        onSuccess: (response) => {
          window.location.href = response.redirect_url;
        },
        onError: (error) => {
          console.log("Error:", error);
        },
      });
    }
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

      signInMutation(data, {
        onSuccess: (response) => {
          window.location.href = response.redirect_url;
        },
        onError: (error) => {
          console.log("Error:", error);
        },
      });
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
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
          {errors.signUpPassword && (
            <div style={{ color: "red" }}>{errors.signUpPassword}</div>
          )}
          <Components.Button
            disabled={!areSignUpFieldsFilled} // button is disabled if not both fields have some string value
            onClick={handleSignUp}
          >
            Sign Up
          </Components.Button>
        </Components.Form>
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
          {errors.signInPassword && (
            <div style={{ color: "red" }}>{errors.signInPassword}</div>
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
