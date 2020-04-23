import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MAIN } from '../../router/namespaces';
import './Death.scss'

class DEATH extends Component {

    render() {
        return (
            <div className="death-container intro-container text-base container mx-auto animated-border border-solid border-2 border-teal-400 p-12">
                <h2 className="mb-6 text-2xl text-teal-400 font-semibold">The end</h2>
                <div>
                    <p className="text-teal-400 mb-4">Code by <a target="_blank" href="https://www.linkedin.com/in/yorgoskakavas">Yorgos Kakavas</a>. Source code repository <a target="_blank" href="https://github.com/Falenos/interface">here</a></p><br/>
                </div>
                <Link to={{ pathname: MAIN }}>
                    <button className="text-teal-400 border-solid border-2 border-teal-600 rounded px-12">Go Home</button>
                </Link>
            </div>
        );
    }
}

export default DEATH;
