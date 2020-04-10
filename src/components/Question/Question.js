import React, { Component, Fragment } from 'react';
import './Question.scss';

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionId: null,
        };
    }

    handleSelect = (selectionId) => {
        const { questionId, onSelect } = this.props;
        this.setState({
            selectionId: `${questionId}-${selectionId}`,
        })
        setTimeout(() => onSelect(selectionId), 600)

    };

    render() {
        const { options, questionId } = this.props;
        const { selectionId } = this.state;
        return (
            <Fragment>
                {options.map((option, index) => (
                    <Fragment key={index}>
                        <input
                            className="symfony-form-checkbox"
                            id={`${questionId}-${option.id}`}
                            onChange={() => this.handleSelect(option.id)}
                            type="checkbox"
                            checked={selectionId === `${questionId}-${option.id}`}
                            value={option.id}
                        />
                        <label className="control-label__text" htmlFor={`${questionId}-${option.id}`}>{option.label}</label>
                    </Fragment>
                ))}
            </Fragment>
        );
    }
};

const Question = ({data, onSelect}) => (
    <div>
        <h3>{data.question.label}</h3>
        <CheckboxGroup onSelect={onSelect} options={data.options} questionId={data.question.id}/>
    </div>
)

export default Question;