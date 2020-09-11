import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Hidden } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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


const Logo = () => {
    const classes = useStyles();
    return (
      <div>
      <IconButton></IconButton>
      </div>

  );
}

export default Logo;
