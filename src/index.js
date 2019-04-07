import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import 'index.scss';
import Root from 'Root';
import App from 'components/App';


ReactDOM.render(
        <Root>
            <App/>
        </Root>,
    document.querySelector("#root")
);