import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ButtonMaterial from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  btn: {
    fontFamily: "SFProText",
    fontWeight: "medium",
    textTransform: "none",
    fontSize: "14px",
    fontColor: "black",
    marginLeft: "15px",
    marginRight: "15px",
  },
}));


const Button = ({children, ...props}) => {
    const {btn} = useStyles();
    return (
    <>
      <ButtonMaterial className={btn}>
      {children}
      </ButtonMaterial>

    </>
  );
}

export default Button;
