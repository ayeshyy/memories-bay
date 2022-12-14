import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

const heading = {
  color: "rgba(0,183,255, 1)",
  textDecoration: 'none',
}

const image = {
  marginLeft: "15px"
}

const responsiveHeading = {
  fontSize: '1.75rem'
}

const responsiveImg = {
  height: '30px',
  marginLeft: "5px"
}

const hideDisplay = {
  display: "none"
}

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: '10px 50px',
    [theme.breakpoints.down("sm")]: {
      padding: "10px 20px"
    }
  },
  heading: {
    ...heading,
    [theme.breakpoints.down('sm')]: responsiveHeading,   
  },
  signinHeading: {
    ...heading,
    [theme.breakpoints.down('sm')]: responsiveHeading,
    [theme.breakpoints.down(700)]: hideDisplay,
  },
  image: {
    ...image,
    [theme.breakpoints.down('sm')]: responsiveImg,      
  },
  signinImage:{
    ...image,
    [theme.breakpoints.down('sm')]: responsiveImg,
    [theme.breakpoints.down(400)]: hideDisplay
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px', 
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: "250px",
      alignItems: "center"
      }
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  signin: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "25px",
    }
  }
}));
