import React from 'react';

const Main = () => {
    return (
        <div className='main-content-wrapper'>
            <span data-test="main-day-container">Today</span>
            <div data-test="main-message-container">Some funny message</div>
        </div>
    )
};

export default Main;