import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 84,
    marginTop: "30vh",
    height: "40vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="ContactSection">
      <Grid container spacing={3}>
        <Grid 
            xs={4}
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
          <a href="mailto:sydavie@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:"#5c5c5c"}}><EmailIcon style={{ fontSize: 100 }}/></a>
        </Grid>
        <Grid 
            xs={4}
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
          <a href="https://www.linkedin.com/in/daviesy/" target="_blank" rel="noopener noreferrer" style={{color:"#5c5c5c"}}><LinkedInIcon style={{ fontSize: 100 }}/></a>
        </Grid>
        <Grid 
            xs={4}
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
          <a href="https://github.com/davsy17" target="_blank" rel="noopener noreferrer" style={{color:"#5c5c5c"}}><GitHubIcon style={{ fontSize: 100 }} /></a>
        </Grid>
      </Grid>
    </div>
  );
}
