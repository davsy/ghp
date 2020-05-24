import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import roadImg from '../static/img/road.JPG';
import avatarImg from '../static/img/avatar.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  media: {
    height: "80vh",
  },
  intro: {
    position: "absolute",
    bottom: 23,
    left: 17,
  },
  avatarSize: {
    top: "20vh",
    width: theme.spacing(35),
    height: theme.spacing(36),
    margin: 'auto',
  },
  typo: {
    color: "#FFF",
    outlineColor: "#000"
  }
}));

export default function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root} id="AboutSection">
        <CardMedia
          className={classes.media}
          image={roadImg}
          title="Road"
        >
            <Avatar alt="Davie Sy" 
                src={avatarImg}
                className={classes.avatarSize}
            />

            <div className={classes.intro}>
            <Typography 
                variant="h4"
                color="secondary"
                className={classes.typo}
            > Davie Sy </Typography>
            <Typography
                variant="body1"
                className={classes.typo}
            > I am a software engineer, currently working at Boingo. </Typography>
            <Typography
                variant="body1"
                className={classes.typo}
            > I have an interest for working with data and building supporting infastructure </Typography>
            </div>
        </CardMedia>
    </Card>
  );
}
