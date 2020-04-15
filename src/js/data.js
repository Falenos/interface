const TYPES = {
    I: "Inventor",
    C: "Conservator",
    F: "Facilitator",
};

const { I, C, F } = TYPES;


export const entryData = [
    {
        question: {
            label: "Being around a group of people gives me energy:",
            id: 1,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [F],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [I],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "The more people I speak with, the better I feel:",
            id: 2,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [F],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [I],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "I prefer one to one conversations and relationships as opposed to awide variety and change in people and relationships:",
            id: 3,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [F],
            },
        ],
    },
    {
        question: {
            label: "I am reserved and distant with my communication",
            id: 4,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [C],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [I],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [F],
            },
        ],
    },
    {
        question: {
            label: "I worry more about current issues more than my future plans",
            id: 5,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [C],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [I,F],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [I,F],
            },
        ],
    },
    {
        question: {
            label: "I rely on my experience rather than on the theoretical alternatives:",
            id: 6,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [C],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [I,F],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [I,F],
            },
        ],
    },
    {
        question: {
            label: "I have a vivid imagination:",
            id: 7,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [F,I],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "I like to work around targets, deadlines and routines for managing my life:",
            id: 8,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [I],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [F],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "I am more interested in the big picture of an idea as opposed to the specific ideas",
            id: 9,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [I,F],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [F,I],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "I consider deadlines relative and flexible rather than absolute and rigid:",
            id: 10,
        },
        options: [
            {
                label: "Agree",
                id: 1,
                answers: [I],
            },
            {
                label: "Neither agree or disagree",
                id: 2,
                answers: [F,I,C],
            },
            {
                label: "Disagree",
                id: 3,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "In social media I mainly publish:",
            id: 11,
        },
        options: [
            {
                label: "Personal moments",
                id: 1,
                answers: [C],
            },
            {
                label: "Thoughts and opinions",
                id: 2,
                answers: [],
            },
            {
                label: "Reposting / Sharing interesting stuff",
                id: 3,
                answers: [],
            },
            {
                label: "Direct public dialog",
                id: 4,
                answers: [],
            },
        ],
    },
    {
        question: {
            label: "What is your field of expertise / employment?",
            id: 12,
        },
        options: [
            {
                label: "science, technology, engineering",
                id: 1,
                answers: [I],
            },
            {
                label: "arts, communications, education, media",
                id: 2,
                answers: [F],
            },
            {
                label: "manufacturing, transportation, argiculture",
                id: 3,
                answers: [C],
            },
            {
                label: "tourism, finance, marketing",
                id: 4,
                answers: [F],
            },
            {
                label: "none of the above",
                id: 5,
                answers: [],
            },
        ],
    },
    {
        question: {
            label: "Which of these activities do you think helps you most at work:",
            id: 13,
        },
        options: [
            {
                label: "Talking",
                id: 1,
                answers: [F],
            },
            {
                label: "Talking and listeling",
                id: 2,
                answers: [F],
            },
            {
                label: "Working in silence",
                id: 3,
                answers: [C,F],
            },
            {
                label: "Listening",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "What class in school gave you most pleasure::",
            id: 14,
        },
        options: [
            {
                label: "Art and languages",
                id: 1,
                answers: [F],
            },
            {
                label: "Science / Social science",
                id: 2,
                answers: [I],
            },
            {
                label: "Physical education",
                id: 3,
                answers: [C],
            },
            {
                label: "None of the above",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "If a particular tool or other aid to your work was broken, what would you do:",
            id: 15,
        },
        options: [
            {
                label: "Call the manufacturer",
                id: 1,
                answers: [F,C],
            },
            {
                label: "Buy a new one",
                id: 2,
                answers: [C],
            },
            {
                label: "Mend it myself",
                id: 3,
                answers: [I,F],
            },
            {
                label: "Design something better to take its place",
                id: 4,
                answers: [I],
            },
        ],
    },
    {
        question: {
            label: "Which of these virtues would you say you have most of:",
            id: 16,
        },
        options: [
            {
                label: "Leadership",
                id: 1,
                answers: [F],
            },
            {
                label: "Strength",
                id: 2,
                answers: [],
            },
            {
                label: "Flair",
                id: 3,
                answers: [I],
            },
            {
                label: "None of the above",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "If you had to nominate a hero, would s/he most likely be:",
            id: 17,
        },
        options: [
            {
                label: "A sportsperson",
                id: 1,
                answers: [C],
            },
            {
                label: "A scientist",
                id: 2,
                answers: [I],
            },
            {
                label: "An artist",
                id: 3,
                answers: [F],
            },
            {
                label: "None of the above",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "In what way would you say your work carries over into your private/home life?",
            id: 18,
        },
        options: [
            {
                label: "I have the same enquiring attitude at work and home",
                id: 1,
                answers: [F],
            },
            {
                label: "I always take work home",
                id: 2,
                answers: [C],
            },
            {
                label: "It doesn’t, they’re completely separate",
                id: 3,
                answers: [I],
            },
            {
                label: "I like to think my home face and my work face are the same ",
                id: 4,
                answers: [I],
            },
        ],
    },
    {
        question: {
            label: "If someone asked you what made you most proud of your work, what would you answer:",
            id: 19,
        },
        options: [
            {
                label: "Seeing things that are better for my ideas",
                id: 1,
                answers: [I],
            },
            {
                label: "Seeing the people that I have helped",
                id: 2,
                answers: [F],
            },
            {
                label: "Seeing people admiring my creations ",
                id: 3,
                answers: [I],
            },
            {
                label: "Seeing the things I have helped to build",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "How much part does improvisation play in the work you enjoy:",
            id: 20,
        },
        options: [
            {
                label: "Not at all",
                id: 1,
                answers: [C],
            },
            {
                label: "It is very important",
                id: 2,
                answers: [I],
            },
            {
                label: "Some",
                id: 3,
                answers: [F],
            },
            {
                label: "Not much",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "If a task / project has gone badly wrong, what would you do to fix it:",
            id: 21,
        },
        options: [
            {
                label: "Adapt what you’ve got, incorporating what went wrong – it could lead in interesting directions",
                id: 1,
                answers: [I],
            },
            {
                label: "Strip it back to basics and start afresh",
                id: 2,
                answers: [],
            },
            {
                label: "Keep going, these things tend to fix themselves",
                id: 3,
                answers: [],
            },
            {
                label: "Call a meeting to establish a precise point where things awry",
                id: 4,
                answers: [],
            },
        ],
    },
    {
        question: {
            label: "How long would you like to work, ideally, at a single task:",
            id: 22,
        },
        options: [
            {
                label: "I like to change over every hour or so",
                id: 1,
                answers: [F,I],
            },
            {
                label: "I don’t have set times, all my tasks run simultaneously",
                id: 2,
                answers: [I],
            },
            {
                label: "I like a long-term workplan",
                id: 3,
                answers: [],
            },
            {
                label: "A job per day suits me",
                id: 4,
                answers: [C],
            },
        ],
    },
    {
        question: {
            label: "Which of these best describes the ideal commitment you are prepared to give to your work:",
            id: 23,
        },
        options: [
            {
                label: "I work hard but I switch off as soon as the work is over",
                id: 1,
                answers: [],
            },
            {
                label: "I never stop thinking about it ",
                id: 2,
                answers: [I],
            },
            {
                label: "I am prepared to work until the task is done ",
                id: 3,
                answers: [F,I],
            },
            {
                label: "Not much",
                id: 4,
                answers: [C],
            },
        ],
    },
];

export const deathData = [];
