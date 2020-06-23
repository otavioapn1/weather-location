import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Load from './components/Loading';
import CartaoClima from './components/CartaoClima';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
function App() {

  const [weather, setWeather] = useState(null);

  let getWeather = async (lat, long) => {
    axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    }).then((resp) => {
      setWeather(resp.data)
    })

  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
  }, []);

  return (

    !weather ? <Load /> :

      <>

        <Typography variant="h3" color="textSecondary" align="center">
          Clima nas suas Coordenadas
        </Typography>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              <Grid item xs={4}>
                <CartaoClima titulo="Temperatura Mínima" informacao={weather.main.temp_min + "°"} />
              </Grid>
              <Grid item xs={4}>
                <CartaoClima titulo="Sua localidade" informacao={weather.name} />
              </Grid>
              <Grid item xs={4}>
                <CartaoClima titulo="Temperatura Máxima" informacao={weather.main.temp_max + "°"} />
              </Grid>
            </React.Fragment>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              <Grid item xs={4}>
                <CartaoClima titulo="Pressão" informacao={weather.main.pressure + "hpa"} />
              </Grid>
              <Grid item xs={4}>
                <CartaoClima titulo="Temperatura Atual" informacao={weather.main.temp + "°"} />
              </Grid>
              <Grid item xs={4}>
                <CartaoClima titulo="Umidade" informacao={weather.main.humidity + "%"} />
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>


      </>
  );
}


export default App;
