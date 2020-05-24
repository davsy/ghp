import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
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
    background: "#000",
    opacity: 0.8,
    borderRadius: "25px",
    padding: 12,
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
          image="https://images.unsplash.com/photo-1497564885540-b12eee8b5ecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          // image={roadImg}
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
            > I am a software engineer, currently working at 
              <a href="https://www.boingo.com/" target="_blank" rel="noopener noreferrer"> Boingo</a>. </Typography>
            <Typography
                variant="body1"
                className={classes.typo}
            > I have an interest in working with big data and building supporting infastructure </Typography>
            </div>
        </CardMedia>
    </Card>
  );
}
