import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { Header, Footer } from './components/organisms';
import Routes from '../../router/allRoutes';
import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <Header/> */}

                <main className="main text-gray-300">
                    <Routes/>
                </main>

                {/* <Footer/> */}
            </BrowserRouter>
        );
    }
    // componentDidMount() {
    //     const elem = document.documentElement;

    //     function openFullscreen() {
    //       if (elem.requestFullscreen) {
    //         elem.requestFullscreen();
    //       } else if (elem.mozRequestFullScreen) { /* Firefox */
    //         elem.mozRequestFullScreen();
    //       } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //         elem.webkitRequestFullscreen();
    //       } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //         elem.msRequestFullscreen();
    //       }
    //     }

    //     openFullscreen();
    // }
}

export default App;
