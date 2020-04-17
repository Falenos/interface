const dismissTimeoutArray = [
    4000,
    6000,
    10000
]

const getRandom = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

const appearances = {
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
};

const appearancesArray = Object.keys(appearances);


export const FACILITATOR_POP = [
    {
        content: {
            title: 'Ela re titlo',
            subtitle: 'the secret is the secret',
            description: 'Amet soufflé carrot cake tootsie roll jelly-o chocolate cake.',
            image: '../assets/lalaalaalalalala.jpg',
            rating: 3,
        },
        settings: {
            appearance: getRandom(appearancesArray) || appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];

export const INVENTOR_POP = [
    {
        content: {
            title: 'Ela re titlo',
            subtitle: 'the secret is the secret',
            description: 'Amet soufflé carrot cake tootsie roll jelly-o chocolate cake.',
            image: '../assets/lalaalaalalalala.jpg',
            rating: 3,
        },
        settings: {
            appearance: getRandom(appearancesArray) || appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];

export const CONSERVATOR_POP = [
    {
        content: {
            title: 'Ela re titlo',
            subtitle: 'the secret is the secret',
            description: 'Amet soufflé carrot cake tootsie roll jelly-o chocolate cake.',
            image: '../assets/lalaalaalalalala.jpg',
            rating: 3,
        },
        settings: {
            appearance: getRandom(appearancesArray) || appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];

export const GENERAL_POP = [
    {
        questionId: 1,
        content: {
            title: 'Ela re titlo',
            subtitle: 'the secret is the secret',
            description: 'Amet soufflé carrot cake tootsie roll jelly-o chocolate cake.',
            image: '../assets/lalaalaalalalala.jpg',
            rating: 3,
        },
        settings: {
            appearance: getRandom(appearancesArray) || appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];
