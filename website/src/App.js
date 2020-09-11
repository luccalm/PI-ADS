import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, MenuIcon, AppBar, Toolbar, Container, Hidden, Input, TextField, List, ListItem, Grid, IconButton, Button, Typography } from '@material-ui/core';
import Header from './Header.jsx';
//import Hero from './images/super-banner-comedy-nigh-19.jpg';
import Hero from './images/hero_big.png';

// import Banner from './images/super-banner-comedy-nigh-19.png';

import IconTeatro from './images/teatroadulto_branco.png';
import IconStandUp from './images/icone_standUp.png';
import IconInfantil from './images/infantil_branco.png';
import IconShow from './images/icon_shows.png';
import IconPasseios from './images/passeios_branco.png';
import IconVoucher from './images/voucher_branco.png';
import IconLocal from './images/teatro_branco.png';


import SearchIcon from '@material-ui/icons/Search';

import DestaqueListaEspetaculos from './components/DestaqueListaEspetaculos/DestaqueListaEspetaculos';

import MenuListItem from './components/MenuListItem/MenuListItem';

const useStyles = makeStyles((theme) => ({

  mediumContainer : {
    marginTop: "25px",
  },
  imageContainer: {
    padding: 0,
    position: "relative",
    margin: "0 auto",
    maxWidth: "1400px",
    height: "350px",
  },

  busca: {
    position: "absolute",
    width: "85%",
    bottom: "-30px",
    left: "7.5%",
    fontSize: "20px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      fontSize: "18px",
      "& ::placeholder": {
        color: "black",
      }
    },
  },

  titulo: {
    position: "absolute",
    color: "white",
    fontSize: "50px",
    width: "400px",
    left: "7.5%",
    top: "30%",
  },

  picture: {
    width: "inherit",
    backgroundImage: `url(${Hero})`,
    backgroundRepeat: "no-repeat",
    minHeight: "100%",
  },

  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: "0",
  },

  menuIcons: {
    display: "flex",
    marginTop: "50px",
    width: "100%",
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
    <Container maxWidth="lg">
      <Header />

    </Container>

    <Container maxWidth="lg" className={classes.imageContainer}>
      <img className={classes.picture}/>
      <span className={classes.titulo}>As melhores experiências aqui</span>
      <TextField
        className={classes.busca}
        placeholder="O que você busca?"
        variant="outlined"
        InputProps={{
         startAdornment: (
           <InputAdornment position="start">
             <SearchIcon style={{ color: "#f44336" }} />
           </InputAdornment>
         ),
        }}
      />
    </Container>

    <Container maxWidth="lg">
    <List className={classes.menuIcons}>
      <MenuListItem image={IconTeatro}>Teatro Adulto</MenuListItem>
      <MenuListItem image={IconStandUp}>Stand Up</MenuListItem>
      <MenuListItem image={IconInfantil}>Infantil</MenuListItem>
      <MenuListItem image={IconShow}>Shows</MenuListItem>
      <MenuListItem image={IconPasseios}>Passeios</MenuListItem>
      <MenuListItem image={IconLocal}>Locais</MenuListItem>
      <MenuListItem image={IconVoucher}>Meu Voucher</MenuListItem>
    </List>
    </Container>
    <Container maxWidth="lg" className={classes.mediumContainer}>

      <Grid container xs={12} spacing={1} style={{"margin": "0 0 25px 0"}}>
        <DestaqueListaEspetaculos />
      </Grid>

      <Grid container xs={12} spacing={1} style={{"margin": "0 0 25px 0"}}>
        <DestaqueListaEspetaculos />
      </Grid>

      <Grid container xs={12} spacing={1} style={{"margin": "0 0 25px 0"}}>
        <DestaqueListaEspetaculos />
      </Grid>

      <Grid container xs={12} spacing={1} style={{"margin": "0 0 25px 0"}}>
        <DestaqueListaEspetaculos />
      </Grid>

    </Container>

    </>
  );
}
