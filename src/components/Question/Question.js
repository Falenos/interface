import React, { Component, Fragment } from 'react';
import './Question.scss';

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionId: null,
        };
    }

    handleSelect = (selection) => {
        const { questionId, onSelect } = this.props;
        this.setState({
            selectionId: `${questionId}-${selection.id}`,
        })
        setTimeout(() => onSelect(selection), 800)

    };

    render() {
        const { options, questionId } = this.props;
        const { selectionId } = this.state;
        return (
            <Fragment>
                {options.map((option, index) => (
                    <div className="mb-4" key={index}>
                        <input
                            className="checkbox"
                            id={`${questionId}-${option.id}`}
                            onChange={() => this.handleSelect(option)}
                            type="checkbox"
                            checked={selectionId === `${questionId}-${option.id}`}
                            value={option.id}
                        />
                        <label className="control-label__text" htmlFor={`${questionId}-${option.id}`}>{option.label}</label>
                    </div>
                ))}
            </Fragment>
        );
    }
};

const Question = ({data, onSelect}) => (
    <div className="text-base text-left text-teal-200 mx-auto md:my-6 max-w-screen-md w-full md:w-6/12 animated-border border-solid border-2 border-teal-400 p-12">
        <h3 className="mb-6 min-h-full">{data.question.label}</h3>
        <CheckboxGroup onSelect={onSelect} options={data.options} questionId={data.question.id}/>
    </div>
)

export default Question;