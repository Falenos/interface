import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../../assets/gifteliko.gif';

// import { Header, Footer } from './components/organisms';
import Routes from '../../router/allRoutes';
import './App.scss';

class App extends Component {

    handleLazy() {
        const callback2 = () => {
            let bgElement;

            if ("IntersectionObserver" in window) {
                bgElement = document.querySelector('.lazy');
                var imageObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            var image = entry.target;
                            image.classList.remove("lazy");
                            imageObserver.unobserve(image);
                        }
                    });
                });


                imageObserver.observe(bgElement);

            } else {
                let lazyloadThrottleTimeout;
                bgElement = document.querySelector('.lazy');

                const lazyload = () => {
                    if (lazyloadThrottleTimeout) {
                        clearTimeout(lazyloadThrottleTimeout);
                    }

                    lazyloadThrottleTimeout = setTimeout(() => {
                        const scrollTop = window.pageYOffset;
                        if (bgElement.offsetTop < (window.innerHeight + scrollTop)) {
                            bgElement.src = bgElement.dataset.src;
                            bgElement.classList.remove('lazy');
                        }
                    }, 20);
                }

                lazyload();
            }
        }
        const callback = () => {
            const bgContainer = document.querySelector('.lazy');
            if (bgContainer) {
                bgContainer.classList.remove('lazy');
            }
        }
        document.addEventListener('DOMContentLoaded', callback2);
    }


    render() {
        this.handleLazy()
        return (
            <BrowserRouter>
                {/* <Header/> */}

                <main className="main text-gray-300">
                    <Routes />
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
