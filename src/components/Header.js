import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <div className="inner-header">
                <div className="location-container" data-test='header-location-container'></div>
                <div className="weather-display-wrapper">
                    <img alt="weather icon" src="https://image.flaticon.com/icons/png/512/35/35824.png" data-test='header-image-container'/>
                    <div className="temperature-container" data-test='header-temperature-container'>23</div>
                </div>
            </div>
        )
    }
}

export default Header;