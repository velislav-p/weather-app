import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div className="inner-header">
                <div className="location-container" data-test='header-location-container'></div>
                <div className="weather-display-wrapper">
                    <img src="" alt="weather forecast" data-test="header-image-container"/>;
                    <div className="temperature-container" data-test='header-temperature-container'></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        weatherData : state.weatherData
    };
};


export default connect(mapStateToProps)(Header);