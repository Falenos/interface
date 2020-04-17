import React, { Component, PureComponent, Fragment } from 'react';
import { ToastProvider } from 'react-toast-notifications'
import { entryData, TYPE_COMPONENTS } from '../../js/data';
import { ToastList } from '../';
import { GENERAL_POP } from '../../js/popups';
import {Questionaire, Results} from '../';
// import './Main.scss';

const changeBackground = (resultedType) => {
    const html = document.querySelector('html');
    html.classList.add(`is-${resultedType}`)
}
class Orientation extends PureComponent {
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
            popData: [],
        }
    }

    getPopUps = (qId) => {
        const popData = GENERAL_POP.filter(pop => pop.questionId === qId);
        if (popData && popData.length > 0) {
            return popData
        }
        return [];
    }

    handleSelect = (qId, selection) => {
        const popData = this.getPopUps(qId);

        const results = selection.answers.reduce((acc, type) => {
            acc[type] = this.state.results[type] + 1
            return acc;
        }, {});
        this.setState({
            answers: [...this.state.answers, {
                question: qId,
                answer: selection.answers,
            }],
            results: {
                ...this.state.results,
                ...results,
            },
            popData: popData,
        });
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
        const { complete, resultedType, popData } = this.state;
        if (resultedType) {
            changeBackground(resultedType);
        }
        return (
            <Fragment>
                {!complete && (
                    <ToastProvider>
                        <Questionaire data={entryData} onSelect={this.handleSelect} onComplete={this.handleComplete}/>
                        <ToastList data={popData}/>
                    </ToastProvider>
                )}
                {!!complete && <Results result={resultedType}/>}

            </Fragment>
        );
    }
}

export default Orientation;
