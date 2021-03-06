import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import video from '../../assets/bg-video.mp4';
import placeholder from '../../assets/background.jpg';
import Routes from '../../router/allRoutes';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Fragment>
                <video className="video" autoPlay buffered="true" muted loop poster={placeholder}>
                    <source src={video} type="video/mp4"/>
                </video>
                <BrowserRouter>
                    <main className="main text-gray-300">
                        <Routes />
                    </main>
                </BrowserRouter>
            </Fragment>
        );
    }
}

export default App;
