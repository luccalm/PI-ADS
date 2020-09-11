import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import { ListItem } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(() => ({
  list: {
    fontSize: "15px",
    "& img": {
      width: "20px",
      marginRight: "5px",
    },
    '&::before': {
            content: `url(${props => props.image})`,
            display: 'block',
            height: 60,
          },
  },
}));


const MenuListItem = ({children, ...props}) => {
    const classes = useStyles();
    return (
      <ListItem className={classes.list}><img src={props.image} />{children}</ListItem>

  );
}

export default MenuListItem;
