import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { changePass } from "./ChangePassStyles";
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
import jwt from 'jwt-decode'
import CheckPassword from './CheckPassword'
import UpdateUserHelper from "./UpdateUserHelper";
import ChangePassword from "./ChangePassword";
class ChangePass extends Component {
  state = {
    oldpassword: "",
    newpassword:"",
    newpasswordc: "",
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

  passwordMatch = () => this.state.newpassword === this.state.newpasswordc;

  showPassword = () => {
    this.setState(prevState => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.oldpassword === "" || this.state.newpassword === "" || this.state.newpasswordc === "") {
      return false;
    }
    return true;
  };
  submitChangePass = e => {
    e.preventDefault();

    const newUserCredentials = {
      Email: jwt(localStorage.getItem("accessToken")).Email,
      Password: this.state.oldpassword,
      NewPassword: this.state.newpassword
    };
    console.log(newUserCredentials)

   CheckPassword(newUserCredentials)
    
   
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
            onSubmit={() => this.submitChangePass}
          >


            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="oldpassword" className={classes.labels}>
               old password
              </InputLabel>
              <Input
                name="oldpassword"
                autoComplete="oldpassword"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("oldpassword")}
                type={this.state.hidePassword ? "oldpassword" : "input"}
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

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="newpassword" className={classes.labels}>
               new password
              </InputLabel>
              <Input
                name="newpassword"
                autoComplete="newpassword"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("newpassword")}
                type={this.state.hidePassword ? "newpassword" : "input"}
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

            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="newpasswordc" className={classes.labels}>
               new password
              </InputLabel>
              <Input
                name="newpasswordc"
                autoComplete="newpasswordc"
                className={classes.inputs}
                disableUnderline={true}
                onChange={this.handleChange("newpasswordc")}
                type={this.state.hidePassword ? "newpasswordc" : "input"}
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
              onClick={this.submitChangePass}
            >
             Change Password
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

export default withStyles(changePass)(ChangePass);
