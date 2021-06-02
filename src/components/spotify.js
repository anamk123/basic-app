import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import '../css/spotify.css';

require('dotenv').config();




function Spotify(){
    
    const [token, setToken] = useState('');  
    const [data, setData] = useState('');
    const spotifyId = process.env.REACT_APP_SPOTIFY_ID;
    const spotifySecret = process.env.REACT_APP_SPOTIFY_SECRET;
    const [click, setClick] = useState('');
    const [imgText,  setImageTextState] = React.useState("");
    const [imgName,  setImageNameState] = React.useState("");



    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + btoa(spotifyId + ':' + spotifySecret)      
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
          })
          .then(tokenResponse => {     
            setToken(tokenResponse.data.access_token);
      
            axios('https://api.spotify.com/v1/browse/categories?locale=NZ', {
              method: 'GET',
              headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
            })
            .then(response => setData(response.data));
            
          });
      
        }, [spotifyId, spotifySecret]); 

        const setText = e => {
            setImageTextState(e.target.src);           
        }

        const setName = e => {
            setImageNameState(e.target.id);

        }

        const  submitForm = e => {
                               
          const newPlaylist ={
             playlist_name : imgText,
             playlist_images: imgText
           }
       
           axios.post('http://localhost:4000/user/add', newPlaylist)
           .then(res => console.log(res.data))
         }

        return(

            <div>

                    <form onSubmit={e => submitForm(e)}>
                    <input type="text" className="inputText" value={imgText} placeholder="IBM"></input><br/>
                    <input type="text" className="inputText" value={imgName} placeholder="IBM"></input><br/>

                    <button type='submit'>Submit</button>

                    </form>
           {!data ? (
               <p>loading</p>
           ): (
            <div>
                                <div className="flex" onClick={e => setName(e)} >

            {data['categories']['items'].map((data, categories)=>(
                <>
                <img  src={data['icons'][0]['url']} alt="" onClick={e => setText(e)}/>
                <div id={data['name']} src={data['icons'][0]['url']} > {data['name']}</div>
                </>
            ))}
            </div>
            {console.log(data['categories']['items'])}
            <div>{setText}</div>
        </div>
           )
            }
        
        
        </div>
        )

}
export default Spotify;
     