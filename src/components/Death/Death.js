import React, { Component } from 'react';
import './Death.scss'

class DEATH extends Component {

    render() {
        return (
            <div className="death-container intro-container text-base container mx-auto animated-border border-solid border-2 border-teal-400 p-12">
                <h2 className="mb-6 text-2xl text-teal-400 font-semibold">The end</h2>
                <div>
                    <p className="text-teal-400">Code by <a href="https://www.linkedin.com/in/yorgoskakavas">Yorgos Kakavas</a>. Source code repository <a href="https://github.com/Falenos/interface">here</a></p><br/>
                </div>
            </div>
        );
    }
}

export default DEATH;
