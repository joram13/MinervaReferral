import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "50px",
    },
    routes: {
        display: "flex",

    }
  }));

const Header = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.routes}>
        <Toolbar>
        <Link to="{`/user/${user.id}`}"><Button color="inherit">Profile</Button></Link>
          <Link to="{`/user/${user.id}/userform`}"><Button color="inherit">Update Profile</Button></Link>
          <Link to="{`/user/${user.id}/userform`}"><Button color="inherit">Send Email</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default withRouter(Header)
