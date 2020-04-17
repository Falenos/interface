import React, { createElement, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { DEATH } from '../../router/namespaces';
import { ToastProvider } from 'react-toast-notifications'
import { ToastList } from '../';
import { FACILITATOR_POP, INVENTOR_POP, CONSERVATOR_POP } from '../../js/popups';
import Dude from '../../assets/dude.jpeg';
// import './Main.scss';


const Facilitator = () => (
    <Fragment>
        <h2 className="mb-6 text-2xl font-semibold">Your Role as a Facilitator</h2>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Responsibilities</h3>
        <p className="mb-2">In general, your role as a facilitator is to help the citizens and the groups to accomplish the objectives and tasks in the training plan and to ensure that the session runs smoothly. You will accomplish this by:</p>
        <ul className="mb-4 list-disc list-inside">
            <li className="mb-1">Identifying the learning and communication needs of citizens.</li>
            <li className="mb-1">Presenting key points of information - experiences and clarifying misinterpretations.</li>
            <li className="mb-1">Encouraging participation.</li>
            <li className="mb-1">Leading activities.</li>
        </ul>
        <p className="mb-4">An effective facilitator is exactly what it sounds like – a person who facilitates the session and helps the citizens to learn the content and apply it to their personal circumstances. Effective facilitation involves a combination of presenting experiences, and supporting active participation by leading discussions, q&a and activities. Good facilitation skills will get citizens involved by encouraging them to comment and ask questions. Facilitation skills help you obtain feedback from the group and more appropriately respond to their needs. A facilitator must be able to guide the session to meet learning objectives, and create a helpful and non-threatening atmosphere.</p>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Active Learning</h4>
        <p className="mb-4">Citizens learn better when they are active participants in the learning process. This can be accomplished with simulations. Maximize ‘learning by doing’.</p>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Immediate Application</h4>
        <p className="mb-4">Citizens engage in learning largely in response to current problems, pressures and needs. Therefore, the activities should be planned around the citizens’ issues and needs.</p>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Self-Motivation</h4>
        <p className="mb-4">Citizens are self-motivated, they want to know how the skill and experience will help them.</p>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Reinforcement</h4>
        <p className="mb-2">Although citizens are self-directed, they do benefit from reinforcement from the facilitator. Therefore, the following approaches are recommended:</p>
        <ul className="mb-4 list-disc list-inside">
            <li className="mb-1">Respond to verbal and non-verbal cues that citizen experiences.</li>
            <li className="mb-1">Provide meaningful and positive reinforcements.</li>
            <li className="mb-1">Provide opportunities for feedback.</li>
        </ul>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Physical and Sensory Changes</h4>
        <p className="mb-2">Citizens can experience a decline in their physical and sensory abilities due to program glitches, and this sometimes affects the learning process. In order to minimize the effect these changes have on the process:</p>
        <ul className="mb-4 list-disc list-inside">
            <li className="mb-1">Provide decent portals</li>
            <li className="mb-1">Provide conditions that minimize fatigue and anxiety.</li>
            <li className="mb-1">Allow for regular breaks from experiences.</li>
            <li className="mb-1">Use memory aids to help citizens retain experiences.</li>
            <li className="mb-1">Provide backup plans in collaboration with trusted service providers.</li>
        </ul>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Emotional Characteristics</h4>
        <p className="mb-2">Citizens see themselves as responsible, self-directed, independent and they want others to see them in the same way. Citizens tend to resist placement in situations where they are not treated like experienced citizens. Follow these strategies to respond to their needs for independence:</p>
        <ul className="mb-4 list-disc list-inside">
            <li className="mb-1">Assume the role of ‘experience resource’ rather than the more traditional role of a teacher.</li>
            <li className="mb-1">Allow experienced citizens to direct their own experiences as much as possible.</li>
            <li className="mb-1">Avoid putting them in stressful situations.</li>
        </ul>
        <h4 className="mb-3 mt-6 text-lg font-semibold">Accumulate Experience</h4>
        <p className="mb-2">Citizens will come to your session with a wealth of previous experiences. This can be both an asset and a liability. Previous experiences can be beneficial because of the linkage of new experiences and skills that they already know. This decreases anxiety about the new learning experience. However, it can be negative if the new knowledge and skills contradict what is already learned. Help to build bridges between existing and new experiences by:</p>
        <ul className="mb-4 list-disc list-inside">
            <li className="mb-1">Using common and recognizable experiences.</li>
            <li className="mb-1">Allowing citizens to explore what they know about a topic before providing new experiences.</li>
        </ul>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Personal development</h3>
        <p className="mb-4">By accumulating service value, your credibility increases with it. Service-related investments ensure exponential credibility growth. You can always seek guidance from growth specialists of your field. Many citizens started like you and have reached wonderful life quality as a reward for their services and ethos.</p>
        <p className="mb-4">People of your path are the pioneers, the manifestation of our hived culture. As focal points of knowledge and experiences you can expect a life full of thrilling experiences and connections. This first step towards complete integration, which is the culture hive, is the backbone of this wonderful process.</p>
    </Fragment>
);

const Inventor = () => (
    <Fragment>
        <h2 className="mb-6 text-2xl font-semibold">Your role as an Inventor</h2>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Responsibilities</h3>
        <p className="mb-4">The essential role played by the inventor is to create and develop knowledge and technology, determined to be sufficiently <strong>novel</strong>, <strong>non-obvious</strong>, and <strong>useful</strong>. Full cooperation in disclosing all research products in the according field’s information stream is expected. Collaboration and communication among all members (human & AI) of each research branch are of paramount importance.</p>
        <p className="mb-4">You are expected to collaborate and give information to the information transfer AI manager before coming up with a great invention. For many reasons, the information transfer manager AI needs to learn earlier, rather than later, about the invention. You must be fully conscious of the importance of making timely disclosure of an invention to the Information stream.</p>
        <p className="mb-4">The procedures developed for information delivery must be constantly optimised and updated, since it is critical that the Information Repositories receive not just timely, but full disclosure of the invention.</p>
        <p className="mb-4">Further responsibilities are determined by your field of expertise and its relevant research branch.  Regarding secondary responsibilities of common utilities, you might be deemed responsible depending on the circumstances.</p>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Personal development</h3>
        <p className="mb-4">By accumulating service value, your credibility increases with it. Service-related investments ensure exponential credibility growth. You can always seek guidance from growth specialists of you field. Many citizens started like you and have reached wonderful life quality as a reward for their services and ethos.</p>
        <p className="mb-4">Your path is the most entangled one with our stream towards an integrated human-AI hive society, functioning with harmony towards prosperity for all the tribe.</p>
    </Fragment>
);

const Conservator = () => (
    <Fragment>
        <h2 className="mb-6 text-2xl font-semibold">Your role as a Conservator</h2>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Responsibilities</h3>
        <p className="mb-2">A conservator may have a broad range of responsibilities. Usually the main requirement is to host in your living quarters equipment and infrastructure supporting the work of the organisation or framework you assist. Exceptions are field specialists and social engineers among others. Other responsibilities may include a wide variety of tasks, always relevant to the type of organisation / framework. Some common ones are:</p>
        <ul className="mb-4 list-disc list-inside">
            <li className="mb-1">Assume the role of ‘experience resource’ rather than the more traditional role of a teacher.</li>
            <li className="mb-1">Allow experienced citizens to direct their own experiences as much as possible.</li>
            <li className="mb-1">Avoid putting them in stressful situations.</li>
        </ul>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Emergency preparedness</h3>
        <p className="mb-4">Mitigating and preparing for emergencies is an especially important task for conservators. You are responsible for the equipment you host and all damages from hazards of any type will be credited to you. Regarding secondary responsibilities on common utilities, you might be deemed responsible depending on the circumstances. For the above expectations and the harmony of our social processes it is of paramount importance to establish robust emergency plans for all types of social technical environmental and biohazards. Minimizing needs for conservation treatment is the key to smooth recovery of the system in emergencies.</p>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Knowledge and skills</h3>
        <p className="mb-4">The knowledge and skills a conservator must have, are as varied as their responsibilities. Constant information and experiences updates and upgrades are mandatory to sustain compatibility with infrastructure functions.</p>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Education and training</h3>
        <p className="mb-4">Depending on the nature of the organization/framework you will choose to support, suitable options of entry level positions will be provided to choose from, always according to you credibility (chosen credits investment he/she wises to partake at this step). After that and the selection of the starter equipment / infrastructure package, training packages will be provided for the said selections. Careful credits allocation planning is necessary for successful conduct of services. You can seek consultants from trusted service providers.</p>

        <h3 className="mb-4 mt-8 text-xl font-semibold">Personal development</h3>
        <p className="mb-4">Conservators, as all paths, are sponsored with an initial credibility fund, to be used as you see fit for your purposes. This path is considered the most stable in a sense, since by accumulating service value, your credibility increases with it. Services related investments ensure exponential credibility growth. However, you will need to balance personal utilitarian investments with services investments constantly.</p>
        <p className="mb-4">Of course, we expect considerable amounts of profits to be invested in your personal utilities and this agrees with service improvements as well.</p>
        <p className="mb-4">For example, by investing in larger living quarters with split space for infrastructure and personal space can prove beneficial. Its proven that overall happiness, motivation and focus are improved with split work and living quarters.</p>
        <p className="mb-4">Furthermore, noise and radiation insulation will improve your life quality in terms of bio-maintenance needs, sleep quality and stress levels.</p>
        <p className="mb-4">You can always seek guidance from growth specialists of you field. Many citizens started like you and have reached wonderful life quality as a reward for their services and ethos.</p>
    </Fragment>
);

const options = {
    Facilitator: <Facilitator/>,
    Inventor: <Inventor/>,
    Conservator: <Conservator/>,
};

const toastData = {
    Facilitator: FACILITATOR_POP,
    Inventor: INVENTOR_POP,
    Conservator: CONSERVATOR_POP,
};

const Results = ({result}) => {
    return (
        <ToastProvider>
            <div className="intro-container text-base text-left text-teal-200 mx-auto my-6 max-w-screen-md animated-border border-solid border-2 border-teal-400 p-12">
                {options[result]}
                {/* <Link to={{ pathname: DEATH }}>
                    <button className="text-teal-600 border-solid border-2 border-teal-600 rounded px-12">Proceed</button>
                </Link> */}
            </div>
            <ToastList data={toastData[result]}/>
        </ToastProvider>
    );
};

export default Results;