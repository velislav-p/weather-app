import PropTypes from 'prop-types'
import React from 'react';
import {connect} from 'react-redux';
import {getTimeOfDay} from "helpers/helperFunctions";
import "components/Header.scss";

const Header = ({weatherData}) =>{

    //The temperature coming from the API is in Kelvins
    const kelvinToCelsius = (kelvin) => {
        return (Math.trunc(kelvin - 273.15));
    };

    const location = weatherData.name;
    const degrees = kelvinToCelsius(weatherData.main.temp);
    const forecast = weatherData.weather[0].main; //Clouds, Clear, Snow;
    const sunrise = weatherData.sys.sunrise;
    const sunset = weatherData.sys.sunset;
    let imageSource;

    switch(forecast){
        case("Clear") :
            imageSource = "far fa-sun ";
            if(getTimeOfDay(sunrise,sunset) === "night") imageSource = "far fa-moon";
            break;
        case ("Clouds") : //cloudy
            imageSource = "fas fa-cloud-sun";
            if(getTimeOfDay(sunrise,sunset) === "night") imageSource = "fas fa-cloud-moon";
            break;
        case ("Rain") : //rain
            imageSource = "fas fa-cloud-showers-heavy";
            break;
        case ("Snow") : //snowy
            imageSource = "far fa-snowflake";
            break;
        default : //always cloudy in Denmark;
            imageSource = "fas fa-cloud fa-7";
    }



    return (
        <div className={`header-wrapper ${getTimeOfDay(sunrise,sunset)}`}>
            <div className="location-container" data-test='header-location-container'>
                <span>{location}</span>
            </div>
            <div className="weather-display-wrapper">
                <i className={`${imageSource} fa-3x`} data-test="header-image-container"/>
                <div className="temperature-container" data-test='header-temperature-container'>{degrees}&#176;</div>
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
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired
        }),
        sys : PropTypes.shape({
            sunrise : PropTypes.number,
            sunset  : PropTypes.number
        })
    })
};