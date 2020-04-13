import React from 'react';
import { Link } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications'
import { DEATH } from '../../router/namespaces';
import { ToastList } from '../';
import Dude from '../../assets/dude.jpeg';
// import './Main.scss';


const dismissTimeoutArray = [
    4000,
    6000,
    10000
]

const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

const appearancesArray = [
    'success',
    'error',
    'warning',
    'info',
];

const toastData = [
    {
        content: {
            title: 'Ela re titlo',
            subtitle: 'the secret is the secret',
            description: 'Amet soufflé carrot cake tootsie roll jelly-o chocolate cake.',
            image: Dude,
            rating: 3,
        },
        settings: {
            appearance: getRandom(appearancesArray) || 'info',
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];

const DeathResults = () => {
    return (
        <ToastProvider>
            <div className="intro-container text-teal-200 container mx-auto animated-border border-solid border-2 border-teal-400 p-12">
                <h2 className="mb-4">You are one with the GodHEAD</h2>
                <p className="mb-4">dkas;ldksald dnfjkdhfhd jdfhjkdhfs dkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsjdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs</p>
                <Link to={{ pathname: DEATH }}>
                    <button className="text-teal-600 border-solid border-2 border-teal-600 rounded px-12">Proceed</button>
                </Link>
            </div>
            <ToastList data={toastData}/>
        </ToastProvider>
    );
};

export default DeathResults;