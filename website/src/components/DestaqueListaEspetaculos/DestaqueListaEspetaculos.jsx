import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import CardEspetaculo from './CardEspetaculo';


const useStyles = makeStyles(() => ({
  titulo: {
    fontFamily: "SFProText",
    fontSize: "22px",
  },
  gid: {
    display: 'flex',
flexDirection: 'row',
padding: 0,
  },
}));


const DestaqueListaEspetaculos = ({children, ...props}) => {
    const classes = useStyles();
    return (
    <>
      <h2 className={classes.titulo}>Destaques da Semana</h2>

      <Grid container className={classes.grid} spacing={1}>
        <Grid container item xs={3} spacing={1}>
          <CardEspetaculo />
        </Grid>
        <Grid container item xs={3} spacing={1}>
        <CardEspetaculo />
        </Grid>
        <Grid container item xs={3} spacing={1}>
        <CardEspetaculo />

        </Grid>
        <Grid container item xs={3} spacing={1}>
        <CardEspetaculo />

        </Grid>
      </Grid>

    </>
  );
}

export default DestaqueListaEspetaculos;
