import PropTypes from 'prop-types'
import React from 'react';
import {connect} from 'react-redux';
import {getTimeOfDay, kelvinToCelsius} from "helpers/helperFunctions";

import "components/Main.scss";

const Main = ({weatherData}) => {

    const temp = kelvinToCelsius(weatherData.main.temp);
    let funnyMessage;

    if(temp < 0) funnyMessage = "Stay inside. It really really isn't worth it today!";
    if(temp >= 0 && temp < 10) funnyMessage = "Put on a lot of layers and you might be okay... Might!";
    if(temp >= 10 && temp < 20) funnyMessage = "Shouldn't you be outside and doing stuff right now?";
    if(temp >= 20) funnyMessage = "It's gettin' hot in here... Burn burn burn... and so on";

    const sunrise = weatherData.sys.sunrise;
    const sunset = weatherData.sys.sunset;

    return (
        <div className={`main-content-wrapper ${getTimeOfDay(sunrise,sunset)}`}>
            <span className="main-day-container" data-test="main-day-container">today</span>
            <div className="main-message-wrapper" data-test="main-message-container">
                <div>
                    {funnyMessage}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {

    return {
        weatherData : state.weatherData
    };
};

export default connect(mapStateToProps)(Main);

Main.propTypes = {
    weatherData: PropTypes.shape({
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired
        }),
        sys : PropTypes.shape({
            sunrise : PropTypes.number.isRequired,
            sunset  : PropTypes.number.isRequired
        })
    })
};