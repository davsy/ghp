import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        color: "#fca311",
    },
    grow: {
        flexGrow: 1,
    },
}));


export default function Navbar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Tabs aria-label="menu" centered>
                    <AnchorLink offset='100' href="#AboutSection"><Tab label="About" style={{color:"#FFF"}}/></AnchorLink>
                    <AnchorLink offset='0' href="#ExpSection"><Tab label="Experience" style={{color:"#FFF"}}/></AnchorLink>
                    <AnchorLink offset='100' href="#ContactSection"><Tab label="Contact" style={{color:"#FFF"}}/></AnchorLink>
                </Tabs>
            </AppBar>
        </React.Fragment>
    );
}
