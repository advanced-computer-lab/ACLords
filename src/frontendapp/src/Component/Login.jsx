import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { login } from "./LoginStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline"; 
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import SignUp from "./SignUp";
import LoginHelper from "./LoginHelper";
import { useHistory } from 'react-router-dom';
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
import jwt from 'jwt-decode'


const accessToken = localStorage.getItem("accessToken");


class Login extends Component {
  state = {
    firstName: "",
    lastName: "",
    homeAddress: "",
    countryCode: "",
    telephoneNumber: "",
    passportNumber: "",
    email: "",
    password: "",
    passwordConfrim: "",
    hidePassword: true,
    error: null,
    errorOpen: false
  };

  errorClose = e => {
    this.setState({
      errorOpen: false
    });
  };

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  passwordMatch = () => this.state.password === this.state.passwordConfrim;

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };
  submitLogin = e => {
    e.preventDefault();

    const newUserCredentials = {
      Email: this.state.email,
      Password: this.state.password,
    };
    LoginHelper(newUserCredentials)
   
    //dispath to userActions
  };

  forgotpass = e => {
    e.preventDefault();


    var UserId = jwt(accessToken)._id
    var name = jwt(accessToken).FirstName
    var email = jwt(accessToken).Email

    emailjs.send("service_v0sodfb","template_u9smrqo",{to_name: name, pass: "hdsgdah", send_to: JSON.stringify(email),});
    //dispath to userActions
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <CssBaseline />

        <Paper className={classes.paper}>
       
          <form
            className={classes.form}
            onSubmit={() => this.submitLogin}
          >
          <h2>Please Login</h2>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="email" className={classes.labels}>
                e-mail
              </InputLabel>
              <Input
                name="email"
                type="email"
                autoComplete="email"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("email")}
              />
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="password" className={classes.labels}>
                password
              </InputLabel>
              <Input
                name="password"
                autoComplete="password"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("password")}
                type={this.state.hidePassword ? "password" : "input"}
                endAdornment={
                  this.state.hidePassword ? (
                    <InputAdornment position="end">
                      <VisibilityOffTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      />
                    </InputAdornment>
                  ) : (
                    <InputAdornment position="end">
                      <VisibilityTwoToneIcon
                        fontSize="default"
                        className={classes.passwordEye}
                        onClick={this.showPassword}
                      />
                    </InputAdornment>
                  )
                }
              />
            </FormControl>

            <Button
              disabled={!this.isValid()}
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.submitLogin}
            >
             Login
            </Button>

            <Button
              disabled={!this.isValid()}
              disableRipple
              variant="outlined"
              className={classes.button}
              type="submit"
              onClick={this.forgotPass}
            >
             Forgot Password?
            </Button>
          </form>

          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
    );
  }
}

export default withStyles(login)(Login);
