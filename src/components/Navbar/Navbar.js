import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";
import memories from "../../images/memories.png";
import useStyles from "./styles.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes.js";
import decode from "jwt-decode";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  // console.log(user);
  // console.log(user?.token);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={user?.result ? classes.signinHeading: classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className={user?.result ? classes.signinImage: classes.image} src={memories} alt="icon" height={60} />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.picture}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
            className={classes.signin}
          >
            Signin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
