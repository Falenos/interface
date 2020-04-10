import React, { Component, Fragment } from 'react';
import { entryData } from '../../js/data';
import {Questionaire, Results} from '../';
// import './Main.scss';

class Q1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: null,
            results: [],
        }
    }

    handleSelect = () => {
        return null;
    }

    handleComplete = () => {
        return null;
    }

    render() {
        const { complete } = this.state;
        return (
            <Fragment>
                {!complete && <Questionaire data={entryData} onSelect={this.handleSelect} onComplete={this.handleComplete}/>}
                {complete && <Results/>}
            </Fragment>
        );
    }
}

export default Q1;
