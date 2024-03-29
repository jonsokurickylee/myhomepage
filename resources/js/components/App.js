import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyle from './Style/GlobalStyles';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Router />
                <GlobalStyle />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
