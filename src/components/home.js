import React from "react";
import '../css/home.css'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tick from "./runningClock";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Home(props) {
  const classes = useStyles(); 
  const [nameText,  setNameTextState] = React.useState("");
  const [passText,  setPassTextState] = React.useState("");
  const history = useHistory();


  const handleChange = e => {
    setNameTextState(e.target.value);
  }

  const handleChangePass = e =>{
    setPassTextState(e.target.value);
  }

  const  submitForm = e => {
                               
     const newUser ={
        user_name : nameText,
        user_password: passText
      }
  
      axios.post('http://localhost:4000/user/add', newUser)
      .then(res => console.log(res.data))
      .then(history.push("/users"));
    }

    return(
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <form onSubmit={e => submitForm(e)}>
            <input type="text" placeholder="name" value={nameText} onChange={e => handleChange(e)} />
            <input type="password" placeholder="password" value={passText} onChange={e => handleChangePass(e)}/>
            <button type='submit'>Submit</button>
          </form>

          <div className={classes.paper}>
            <Tick/>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5"> Just A Page</Typography>
            <Container>
                <Typography component="h6" variant="subtitle1">
                  Just A Page
                </Typography>
            </Container>  
          
            <Button
              variant="contained"
              color="primary"
              type="button"
            >
            <Link to="/stocks">View Some Stock Info</Link>
            </Button>

            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
              
              </Grid>
            </Grid>
              <Box mt={5}> </Box>
          </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
     
        
      </Grid>
    </Grid>
    )
}
    


export default Home;