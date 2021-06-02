import React, {useState} from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import '../css/weather.css';



function Weather(props){
    const [data, setData] = useState(null);
    const [text, setText] = useState("");
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+text+'&units=metric&appid='+apiKey;
    
    const userSearch = e  => (
        setText(e.target.value)
    );

    const submitWeather = e => (
           axios.get(url)
          .then(response => setData(response.data))
          .catch(response => setData(response.error)) 
          );


    return(
           <div>             
            <div className="searchBar">
                
                    <input type='text' onChange={e => userSearch(e)}></input>

                    <Button onClick={e => submitWeather(e)} className="submitBtn" variant="contained" color="secondary">Search</Button>
                
                <div>{console.log(data)}</div>
            </div>

        <div>
            <Container>
                {!data ? (
                    <p></p>
                ) : (

                    <>
                    <div className="holdingCard">
                    <div className="city"> {data['name']} {data['sys']['country']} </div>
                    <div className="weather">{data['weather'][0]['main']}</div> 
                    <div className="weatherDesc">{data['weather'][0]['description']} </div> 
                    <div className="temperature">{data['main']['temp'].toFixed(1)} ºC</div> 
                    </div>
                     </>
                )}


            </Container>
        </div>
</div>
    )           
}

export default Weather;