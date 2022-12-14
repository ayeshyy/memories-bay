import React, { useState } from "react";
import useStyles from "./styles.js";
import {
  Avatar,
  Button,
  Typography,
  Paper,
  Container,
  Grid,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Input from "./Input/Input.js";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth.js";
import { AUTH } from "../../constants/actionTypes.js";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  showPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
    setShowPassword(false);
  };

  const googleSuccess = async (response) => {
    const result = await jwt_decode(response.credential);
    const token = response.credential;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  autoFocus
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              type="email"
              label="Email Address"
              handleChange={handleChange}
            />
            <Input
              name="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="showPassword"
                type="password"
                label="Repeat Password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          {/* new goole login lethod more on docs */}
          <GoogleLogin
            onSuccess={googleSuccess}
            onError={googleError}
            type="standard"
            theme="filled_blue"
            size="large"
          />
          <Grid container justifyContent="center">
            <Grid item>
              <Button className={classes.switchBtn} onClick={switchMode}>
                {isSignUp
                  ? "Already have an account?Sign In instead!"
                  : "Don't have an account?Sign Up instead!"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
