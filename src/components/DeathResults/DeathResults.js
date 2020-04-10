import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { DEATH } from '../../router/namespaces';
// import './Main.scss';

let COUNTER = 0;

const ToastContent = ({children}) => (
    <div>
        {children}
    </div>
);

const paragraphArray = [
    'Amet soufflé carrot cake tootsie roll jelly-o chocolate cake.',
    'Chocolate bar gummies sweet roll macaroon powder sweet tart croissant.',
    'Pastry ice cream bear claw cupcake topping caramels jelly beans chocolate cheesecake.',
    'Candy canes pastry cake tart powder.',
    'Tootsie roll bear claw sesame snaps candy cheesecake caramels cookie.',
    'Lemon drops donut marzipan gummi bears cotton candy cotton candy jelly-o carrot cake.',
    'Lemon drops pastry apple pie biscuit tart tootsie roll.',
    'Brownie icing chupa chups cake cookie halvah gummi bears halvah.',
    'Sesame snaps donut gingerbread marshmallow topping powder.',
    'Biscuit chocolate cheesecake pudding candy canes tart halvah sweet.',
    'Sugar plum cake candy carrot cake.',
    'Ice cream marzipan liquorice candy canes sesame snaps danish soufflé lollipop candy canes.',
    'Lemon drops cotton candy pudding.',
    'Pie cake soufflé cupcake jujubes sugar plum.',
    'Liquorice lollipop oat cake.',
];

const timeoutArray = [
    200,
    500,
    1000,
    1500,
    2000,
    600
];

const dismissTimeoutArray = [
    4000,
    6000,
    10000
]

const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// Toast Buttons
// ------------------------------

const appearancesArray = [
    'success',
    'error',
    'warning',
    'info',
];

// const MyCustomToast = ({ appearance, children }) => (
//     <div style={{ background: appearance === 'error' ? 'red' : 'green' }}>
//         {children}
//     </div>
// );

const DeathToasts = () => {
    const { addToast } = useToasts();
    // const [count, setCount] = useState(0);
    // const add = () => {
    //     addToast(getRandom(paragraphArray), { appearance: 'info', autoDismiss: true});
    //     setCount(count + 1);
    // };
    // if (count <= 2) {
    //     setTimeout(add, getRandom(timeoutArray));
    // }
    const add = () => {
        addToast(
            (<ToastContent>
                {getRandom(paragraphArray)}
            </ToastContent>),
            {
                appearance: getRandom(appearancesArray),
                autoDismiss: true,
                autoDismissTimeout: getRandom(dismissTimeoutArray)
            }
        );
        COUNTER = COUNTER + 1;
    };
    if (COUNTER <= 20) {
        setTimeout(add, getRandom(timeoutArray));
    }
    return <Fragment/>;
};

const DeathResults = () => {
    return (
        <ToastProvider>
            <div className="intro-container text-yellow-400 container mx-auto animated-border border-solid border-2 border-yellow-400 rounded p-12">
                <h2 className="mb-4">You are one with the GodHEAD</h2>
                <p className="mb-4">dkas;ldksald dnfjkdhfhd jdfhjkdhfs dkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsjdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfsdkas;ldksald dnfjkdhfhd jdfhjkdhfs</p>
                <Link to={{ pathname: DEATH }}>
                    <button className="text-yellow-600 border-solid border-2 border-yellow-600 rounded px-12">Proceed</button>
                </Link>
            </div>
            <DeathToasts/>
        </ToastProvider>
    );
};

export default DeathResults;