import React from 'react';
import ReactDOM from 'react-dom';


import reducers from 'reducers';
import Root from 'Root';
import App from 'components/App';


ReactDOM.render(
        <Root>
            <App/>
        </Root>,
    document.querySelector("#root")
);