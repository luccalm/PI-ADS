import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import EspetaculoPlaceHolder from '../../images/espetaculoPlaceHolder.png';
import { InputAdornment } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

const useStyles = makeStyles(() => ({
  div: {
    padding: "10px",
    "& *": {
      fontFamily: "SFProText",
    },
    "& .MuiListItem-gutters" : {
      padding: "0",
    },
    "& .MuiListItemText-root" : {
      fontSize: "12px",
    }
  },
  image: {
    width: "90%",
    margin: "0 auto",
    marginTop: "10px",
  },
  icon: {
    marginRight: "10px",
  },
}));


const CardEspetaculo = ({children, ...props}) => {
    const classes = useStyles();
    return (
    <>
      <div className={classes.div}>
      <Card className={classes.root}>
        <CardActionArea>
           <CardMedia
             component="img"
             alt="Contemplative Reptile"
             image={EspetaculoPlaceHolder}
             title="Contemplative Reptile"
             className={classes.image}
           />
           <CardContent>
             <Typography gutterBottom variant="h6" component="h2">
               Montreal Winter Sports
             </Typography>
             <List className={classes.root}>
                   <ListItem>
                     <LocationOnIcon style={{ color: "#f44336" }} className={classes.icon} />
                     <ListItemText primary="Teatro Augusta"/>
                   </ListItem>
                   <ListItem>
                     <CalendarTodayIcon style={{ color: "#f44336" }} className={classes.icon} />
                     <ListItemText primary="De 19/01 até 23/02" />
                   </ListItem>
                   <ListItem>
                     <WatchLaterIcon style={{ color: "#f44336" }} className={classes.icon} />
                     <ListItemText primary="18hrs"  />
                   </ListItem>
                 </List>
           </CardContent>
         </CardActionArea>
       </Card>
       </div>
    </>
  );
}

export default CardEspetaculo;
