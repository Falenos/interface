import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { DEATH } from '../../router/namespaces';
// import './Main.scss';

const Results = () => {
    return (
        <Fragment>
            <div className="intro-container text-yellow-400 container mx-auto animated-border border-solid border-2 border-yellow-400 rounded p-12">
                <h2 className="mb-4">You are an idiot</h2>
                <p className="mb-4">dkas;ldksald dnfjkdhfhd jdfhjkdhfs dkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsjdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs</p>
                <Link to={{ pathname: DEATH }}>
                    <button className="text-yellow-600 border-solid border-2 border-yellow-600 rounded px-12">Proceed</button>
                </Link>
            </div>
        </Fragment>
    );
};

export default Results;