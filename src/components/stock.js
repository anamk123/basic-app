import React, {useState,} from "react";
import axios from 'axios';
import Box from '@material-ui/core/Box';
import { Container } from "@material-ui/core";
import '../css/stocks.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

//es6 arrow key functions and finally 


function Stock(props){
    const apiKey = 'RPTRZ2CVVWM6IQUW';
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [text,  setTextState] = React.useState("");


  
        const handleChange = e => {
                setTextState(e.target.value);
                                        }

        const submitText = e => {
            if(text === ""){
                alert('Please Enter A stock Code')
            }               
            else {axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol='+text+'&apikey='+apiKey)
                .then(response => setData(response.data))
                }
            }
            
            const classes = useStyles();
                                         

    return(
       

    <div>
         <div className={classes.root}>
            <Grid container spacing={1}>
            
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                <Container>
                    <div className="leftSection">
                        <label>Enter Stock Code (eg. NFLX, AMZN)<br/></label>
                        <input type="text" className="inputText" placeholder="IBM" onChange={e => handleChange(e)}></input><br/>
                        <Button onClick={e => submitText(e)} className="submitBtn" variant="contained" color="secondary">Search</Button>
                    </div>
                </Container>
                </Paper>
            </Grid>

            <Grid item xs={6}>
            <Paper className={classes.paper}>    
                <div className="rightSection">

                    <Container>
                        {!data ?  (
                            <div className="loadingContainer">
                            <div className="loadingio-spinner-bean-eater-bumcdu6673v"><div className="ldio-l8ecwtwem9o">
                            <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
                            </div></div>
                            </div>

                            ) : (
                            
                            <div className="holdingContainer">
                                {console.log(data)}
                                            <p>Company Symbol: {data['Global Quote']['01. symbol']} </p>
                                            <p>Opening: {data['Global Quote']['02. open']}</p>
                                            <p>High: {data['Global Quote']['03. high']}</p>
                                            <p>Low: {data['Global Quote']['04. low']}</p>
                                            <p>Current: {data['Global Quote']['05. price']}</p>
                                            <p>Latest Trading Day: {data['Global Quote']['07. latest trading day']}</p>
                                            <p>Previous Close: {data['Global Quote']['08. previous close']}</p>
                                            <p>Change Percentage: {data['Global Quote']['10. change percent']}</p>             
                            </div>
                            )}            
                    </Container>
                </div>
            </Paper>
            </Grid>
            
            </Grid>
      </div>

       

    
  
   </div>       
)}
   



export default Stock;
