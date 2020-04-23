import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import video from '../../assets/bg-video.mp4';
// import video from '../../assets/file_example_MP4_1920_18MG.mp4';
import placeholder from '../../assets/background.jpg';
import Routes from '../../router/allRoutes';
import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <video className="video" autoPlay buffered="true" loop>
                    <source src={video} type="video/mp4"/>
                </video>
                <main className="main text-gray-300">
                    <Routes />
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
