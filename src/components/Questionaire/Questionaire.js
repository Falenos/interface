import React, { Component, Fragment } from 'react';
import { Question } from '../';
// import './Main.scss';

class Questionaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0
        };
    }

    handleSelect = (selection) => {
        const { data, onSelect, onComplete } = this.props;
        const { questionIndex } = this.state;

        onSelect(data[questionIndex].question.id, selection);

        if(questionIndex === data.length - 1) {
            return onComplete();
        }

        this.setState({
            questionIndex: questionIndex + 1,
        });
    }

    render() {
        const { data } = this.props;
        const { questionIndex } = this.state;
        const questionData = data[questionIndex];
        return (
            <Question data={questionData} onSelect={this.handleSelect}/>
        );
    }
}

export default Questionaire;