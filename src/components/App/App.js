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

                <main className="main">
                    <Routes/>
                </main>

                {/* <Footer/> */}
            </BrowserRouter>
        );
    }
}

export default App;
