import React from 'react';
import {connect} from 'react-redux';

const Main = ({weatherData}) => {
    return (
        <div className='main-content-wrapper'>
            <span data-test="main-day-container">Today</span>
            <div data-test="main-message-container">Some funny message</div>
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
      weatherData : state.weatherData
  }
};

export default connect(mapStateToProps)(Main);