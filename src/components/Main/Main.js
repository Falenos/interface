import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ORIENTATION, MAIN } from '../../router/namespaces';
import './Main.scss';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            enabled: false,
        }
    }

    render() {
        const { enabled } = this.state;
        return (
            <div className="intro-container text-base container mx-auto animated-border border-solid border-2 border-teal-400 p-12">
                <h2 className="mb-8 text-2xl font-semibold">Welcome, fellow citizen of the Techno-Tribalism!</h2>
                <p className="mb-6">Congratulations on becoming a permanent resident of the Techno – Tribalism ! On behalf of the council of the
                Techno - Tribalism members, we welcome you and wish you every success here. As a permanent resident you
                have made a decision to call this galaxy your home. It is now both your right and your responsibility to shape the
                future of the Techno – Tribalism and to ensure its continued success. Exciting opportunities await you as you begin
                your life as a permanent resident of this great galaxy.</p>
                <p className="mb-6">Our aim as Techno – Tribalism members is to contribute in the data – flux and our value translates to that. We are
                all part of this generation that streams towards an integrated human-AI hive society, functioning towards
                prosperity for all the tribe.</p>
                <p className="mb-12">There is one more step in order to choose your cluster in this journey. You will have to fill the following
                questionnaire, regarding your system registration and your Techno – Tribalism (T -T) citizenship issuing.</p>
                <div className={enabled ? 'mb-8' : 'disabled mb-8'}>
                    <Link to={{ pathname: ORIENTATION }}>
                        <button className={`${enabled ? 'border-teal-600 text-teal-400' : 'border-gray-600 text-gray-600'} mb-4 border-solid border-2 rounded px-12`}>Next</button>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <input
                        className="checkbox-main"
                        id='welcome-link'
                        onChange={() => this.setState({enabled: !enabled})}
                        type="checkbox"
                        checked={enabled}
                        value={enabled}
                    />
                    <label className="control-label__text" htmlFor='welcome-link'>
                        <small>I certify that the information supplied is accurate to the best of my knowledge and I accept the conditions and give the undertakings requested in the T-T Citizenship questionnaire.</small>
                    </label>
                </div>
            </div>
        );
    }
}

export default Main;
