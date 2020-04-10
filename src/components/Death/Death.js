import React, { Component, Fragment } from 'react';
import { deathData } from '../../js/data';
import {Questionaire, DeathResults} from '..';
// import './Main.scss';

class DEATH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: null,
            results: [],
        }
    }

    handleSelect = (qId, aId) => {
        this.setState({
            results: [...this.state.results, {
                question: qId,
                answer: aId,
            }],
        });
    }

    handleComplete = () => {
        this.setState({
            complete: true,
        });
    }

    render() {
        const { complete } = this.state;
        return (
            <Fragment>
                {!complete && <Questionaire data={deathData} onSelect={this.handleSelect} onComplete={this.handleComplete}/>}
                {!!complete && <DeathResults/>}
            </Fragment>
        );
    }
}

export default DEATH;
