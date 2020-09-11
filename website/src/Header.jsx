import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Button from './components/Buttons/Button';
import ButtonPrimary from './components/Buttons/ButtonPrimary';


const useStyles = makeStyles(() => ({
  toolBar: {
    backgroundColor: "#ffffff",
    color: "#000000",
    boxShadow: 0,
    border: 0,
  },
  logo: {
    flex: 1,
  },
  btn_Cadastrar: {
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "20px, 15px",
    border_radius: "8px",
    size: "14px"
  }
}));


const Header = () => {
    const classes = useStyles();
    return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolBar}>
          <Hidden lgUp>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" className={classes.logo} >
            LOGO
          </Typography>
          <Button>Descobrir</Button>
          <Button>Ajuda</Button>
          <ButtonPrimary>Cadastrar-se</ButtonPrimary>

        </Toolbar>
      </AppBar>

    </>
  );
}

export default Header;
