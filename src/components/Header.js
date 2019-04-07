import PropTypes from 'prop-types'
import React from 'react';
import {connect} from 'react-redux';
import sunny from 'images/icon_weather_sun.svg';
import cloudy from 'images/icon_weather_clouds.svg';
import rainy from 'images/icon_weather_rain.svg';
import snowy from 'images/icon_weather_snow.svg';
import defaultWeather from 'images/icon_weather_default.svg';

const Header = ({weatherData}) =>{

    //The temperature coming from the API is in Kelvins
    const kelvinToCelsius = (kelvin) => {
        return (Math.trunc(kelvin - 273.15));
    };

    const location = weatherData.name;
    const degrees = kelvinToCelsius(weatherData.main.temp);
    const forecast = weatherData.weather[0].main; //Clouds, Clear, Snow;

    let imageSource;

    switch(forecast){
        case("Clear") :
            imageSource = sunny;
            break;
        case ("Clouds") : //cloudy
            imageSource = cloudy;
            break;
        case ("Rain") : //rain
            imageSource = rainy;
            break;
        case ("Snow") : //snowy
            imageSource = snowy;
            break;
        default : //always cloudy in Denmark;
            imageSource = defaultWeather;
    }

    return (
        <div className="inner-header">
            <div className="location-container" data-test='header-location-container'>{location}</div>
            <div className="weather-display-wrapper">
                <img src={imageSource} alt="weather forecast" data-test="header-image-container"/>
                <div className="temperature-container" data-test='header-temperature-container'>{degrees}</div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        weatherData : state.weatherData
    };
};

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  weatherData: PropTypes.object.isRequired
};