import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData, throwError} from 'actions';
import "components/App.scss";

import Header from 'components/Header';
import Main from 'components/Main';
import Loader from "components/Loader";


export class RawApp extends Component {

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const lon = position.coords.longitude;
                const lat = position.coords.latitude;
                this.props.fetchData(lat,lon);
            },
            (err) => {
                this.props.throwError(err.message);
            }
        );
    }

    render(){

        let message = "For accurate weather forecast, we need access to your location";

        if(this.props.weatherData && !this.props.weatherData.errorMessage) {
            return (
                <div className="app-wrapper">
                    <Header/>
                    <Main/>
                </div>
            );
        }
        else if(this.props.weatherData && this.props.weatherData.errorMessage){
            message = this.props.weatherData.errorMessage +" :("
        }
        return (
            <div className="app-wrapper">
                <Loader message={message}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {weatherData : state.weatherData}
};


export default connect(mapStateToProps,{fetchData, throwError})(RawApp)

RawApp.propTypes = {
  fetchData: PropTypes.func.isRequired,
  throwError: PropTypes.func,
  weatherData: PropTypes.object
};