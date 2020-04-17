import React, { Component, Fragment, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import star from '../../assets/star.png';
import starFilled from '../../assets/star-filled.png';
import './ToastList.scss';

const timeoutArray = [
    500,
    1000,
    1500,
    2000,
    2300,
    5000,
    6000
];

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

const Toast = ({ title, subtitle, description, image, rating }) => (
    <div className="toast-wrapper">
        {image && (
            <div className="toast-image h-10 w-10 rounded-full">
                <img className="w-10" src={image} alt={`${title}-image`} title={title}/>
            </div>
        )}
        <h3 className="text-xl mb-2">{title}</h3>
        {subtitle && <p className='toast-rating mb-1'><em>"{subtitle}"</em></p>}
        {description && <p className='toast-rating mb-1'>{description}</p>}
        {rating && (
            <div className={`toast-rating rate-${rating}`}>
                {[0,1,2,3,4].map((i) => <img key={i} className="h-4 w-4 mr-1 inline-block" src={rating <= i ? star : starFilled}/>)}
            </div>
        )}
    </div>
);

const ToastHandler = ({data}) => {
    const [added, setAdded] = useState(false);
    const { addToast } = useToasts();
    const toastIt = (data) => {
        setTimeout(() => addToast(<Toast {...data.content}/>, data.settings), getRandom(timeoutArray));
    };
    if (!added) {
        setAdded(true);
        toastIt(data);
    }
    return <Fragment/>;
};

class ToastList extends Component {
    shouldComponentUpdate(nextProps) {
        const now = JSON.stringify(this.props);
        const next = JSON.stringify(nextProps);
        return now !== next;
    }
    render() {
        return (
            <Fragment>
                {this.props.data.map((d, index) => <ToastHandler key={index} data={d} />)}
            </Fragment>
        );
    }
}

export default ToastList;