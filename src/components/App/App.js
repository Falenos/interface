import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../assets/gifteliko.gif';

// import { Header, Footer } from './components/organisms';
import Routes from '../../router/allRoutes';
import './App.scss';

class App extends Component {

    handleLazy() {
        const callback = () => {
            const bgContainer = document.querySelector('html');
            if (bgContainer) {
                bgContainer.classList.add('lazy');
            }
        }
        document.addEventListener('DOMContentLoaded', callback);
    }

    render() {
        this.handleLazy()
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

    componentDidMount() {
        this.handleLazy();
    }
}

export default App;
