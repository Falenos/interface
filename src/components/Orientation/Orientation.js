import React, { Component, Fragment } from 'react';
import { entryData, TYPE_COMPONENTS } from '../../js/data';
import {Questionaire, Results} from '../';
// import './Main.scss';

class Orientation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: [],
            results: {
                I: 0,
                C: 0,
                F: 0,
            },
            complete: null,
            resultedType: null,
        }
    }

    handleSelect = (qId, selection) => {
        this.setState({
            answers: [...this.state.answers, {
                question: qId,
                answer: selection.answers,
            }],
        }, selection.answers.forEach(type => {
            this.setState({
                results: {
                    ...this.state.results,
                    [type]: this.state.results[type] + 1
                }
            });
        }));
    }

    calculateResults = () => {
        const { results } = this.state;
        return Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);
    }

    handleComplete = () => {
        this.setState({
            complete: true,
            resultedType: TYPE_COMPONENTS[this.calculateResults()],
        });
    }

    render() {
        const { complete, resultedType } = this.state;
        return (
            <Fragment>
                {!complete && <Questionaire data={entryData} onSelect={this.handleSelect} onComplete={this.handleComplete}/>}
                {!!complete && <Results result={resultedType}/>}
            </Fragment>
        );
    }
}

export default Orientation;
