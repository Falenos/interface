import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../assets/gifteliko.gif';

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
}

export default App;
