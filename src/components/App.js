import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData, throwError} from 'actions';

import Header from 'components/Header';
import Main from 'components/Main';
import Loader from "components/Loader";


class App extends Component {

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                const lon = position.coords.longitude;
                const lat = position.coords.latitude;
                this.props.weatherData.fetchData(lon,lat);
                console.log(this.props);
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
                <div>
                    <Header/>
                    <Main/>
                </div>
            );
        }
        else if(this.props.weatherData && this.props.weatherData.errorMessage){
            message = this.props.weatherData.errorMessage
        }
        return (
            <Loader message={message}/>

        )
    }

};

const mapStateToProps = (state) => {
    return {weatherData : state.weatherData}
};


export default connect(mapStateToProps,{fetchData, throwError})(App)