import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from 'actions';

import Header from 'components/Header';
import Main from 'components/Main';
import Loader from "components/Loader";


const App = ({weatherData}) => {

    let loadingMessage = "For accurate weather forecast, we need access to your location";
    if(!weatherData) {
        return (
            <Loader message={loadingMessage}/>
        );
    }
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {weatherData : state.weatherData}
};


export default connect(mapStateToProps,{fetchData})(App)