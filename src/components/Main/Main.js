import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ORIENTATION } from '../../router/namespaces';
import './Main.scss';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="mb-8">Ela na faswthoume darling</h1>

                <div className="intro-container container mx-auto animated-border border-solid border-2 border-teal-400 p-12">
                    <h2 className="mb-4">Welcome Citizen</h2>
                    <p className="mb-4">dkas;ldksald dnfjkdhfhd jdfhjkdhfs dkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsjdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs</p>
                    <Link to={{ pathname: ORIENTATION }}>
                        <button className="text-teal-400 border-solid border-2 border-teal-600 rounded px-12">Proceed</button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default Main;
