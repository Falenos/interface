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

    handleSelect = (selectionId) => {
        const { data, onSelect } = this.props;
        const { questionIndex } = this.state;

        onSelect(data[questionIndex].question.id, selectionId);

        this.setState({
            questionIndex: questionIndex + 1,
        });
    }

    render() {
        const { data } = this.props;
        const { questionIndex } = this.state;
        const questionData = data[questionIndex];
        return (
            <Fragment>
                {questionData ? <Question data={questionData} onSelect={this.handleSelect}/> : null}
            </Fragment>
        );
    }
}

export default Questionaire;