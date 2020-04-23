import Claudia from '../assets/ClaudiaPho.jpg';
import JoshuaBitter from '../assets/JoshuaBitter.jpg';
import BabaVirgin from '../assets/BabaVirgin.jpg';
import LeeBenu from '../assets/LeeBenu.jpg';
import BarmasaiFeodorovGroup from '../assets/BarmasaiFeodorovGroup.jpg';
import AngelZufel from '../assets/AngelZufel.jpg';
import CoralSmith from '../assets/CoralSmith.jpg';
import NataanaRastogi from '../assets/NataanaRastogi.jpg';
import ReoCertain from '../assets/ReoCertain.jpg';
import AoiStar from '../assets/AoiStar.jpg';
import AlexArmstrong from '../assets/AlexArmstrong.jpg';
import HarryPegeant from '../assets/HarryPegeant.jpg';
import KathyGonner from '../assets/KathyGonner.jpg';
import LouiseIrving from '../assets/LouiseIrving.jpg';
import FelippeAnastasakes from '../assets/FelipeAnastasakes.jpg';
import BugYork from '../assets/BugYork.jpg';
import LebooRossiGroup from '../assets/LebooRossiGroup.jpg';
// import LoryFutsuki from '../assets/LoryFutsuki.jpg';

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

// const appearancesArray = Object.keys(appearances);


export const FACILITATOR_POP = [
    {
        content: {
            title: 'Claudia Pho',
            subtitle: 'Do you want to discover how to communicate your experiences and information in less than 1 minute?',
            description: 'Claudia will help novice and highly experienced facilitators get authenticity and heart into their message with loads of free advice, services and products.',
            image: Claudia,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Joshua Bitter',
            subtitle: 'Eclectic exchange',
            description: 'Discover easy to implement experiences that will increase your social rating.',
            image: JoshuaBitter,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Baba Virgin',
            subtitle: 'From part time hustle to full time loving life',
            description: 'Get one on one experience exchange from Baba to exhilarate your rate of change.',
            image: BabaVirgin,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Lee Benu',
            subtitle: 'Get guidance by one of the tribe’s best facilitators',
            description: 'Lee will help you transform the quality of your experience exchanges. The best for the best.',
            image: LeeBenu,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },

];

export const INVENTOR_POP = [
    {
        content: {
            title: 'Barmasai Feodorov’s Group',
            subtitle: 'Effective Inventors progress techniques',
            description: '“Be brave. Take risks. Nothing can substitute experience”',
            image: BarmasaiFeodorovGroup,
            rating: 4,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Angel Zufel',
            subtitle: 'Angel will show you the way to a successful Invertor’s career',
            description: '“The role of an Inventor is not to come up with all the great ideas. The role of an Inventor is to create an environment in which great ideas can happen”',
            image: AngelZufel,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Coral Smith',
            subtitle: 'Learn, Contribute, Inspire',
            description: '“Great Inventors don’t set out to be Inventors. They set out to make a difference”',
            image: CoralSmith,
            rating: 2,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Nataana Rastogi',
            subtitle: 'Motivation, Results, Charisma ',
            description: 'Nataana will show you how to become, quickly and efficiently, a Great Inventor with fourteen simple strategies.',
            image: NataanaRastogi,
            rating: 4,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];

export const CONSERVATOR_POP = [
    {
        content: {
            title: 'Reo Certain ',
            subtitle: 'Effective Conservators progress techniques',
            description: 'Reo will show you how to avoid time management and stresses with delegation and self-discipline.',
            image: ReoCertain,
            rating: 4,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Aoi Star',
            subtitle: 'Reach your goals successfully',
            description: 'Aoi will give you the best tips that will skyrocket your Conservator career.',
            image: AoiStar,
            rating: 5,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        content: {
            title: 'Alex Armstrongo',
            subtitle: '“Let me show you the basics to become a Great Conservator”',
            description: 'Great guidance will help you gain greater clarity, take action and enter a whole new level of discovery.',
            image: AlexArmstrong,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },

];

export const GENERAL_POP = [
    {
        questionId: 1,
        content: {
            title: 'SYSTEM NOTIFICATION',
            description: 'This step is crucial for you initial experience in the Tribe. Choose with honesty to help us provide you with the best onboarding experience possible',
        },
        settings: {
            appearance: appearances.error,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 1,
        content: {
            title: 'Harry Peggs',
            subtitle: 'The secret is the secret',
            description: 'Get initiated to the hidden knowledge of our most elevated conciousness',
            image: HarryPegeant,
            rating: 5,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 2,
        content: {
            title: 'Kathy Gonner',
            subtitle: 'The new way to succeed',
            description: '“The world has changed. The path to success is different. The route though challenging, is ours to have if we have the guts to pursue it” ',
            image: KathyGonner,
            rating: 4,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 4,
        content: {
            title: 'Louise Irving',
            subtitle: 'Inspiration, Wisdom, Self belief',
            description: 'Do you want to start this journey with ease? Here is your chance! Louise will show you the crucial first steps in acquiring information and experiences effectively.',
            image: LouiseIrving,
            rating: 5,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 5,
        content: {
            title: 'SYSTEM NOTIFICATION',
            description: 'Our experts will be with you always. Even after you become one.',
        },
        settings: {
            appearance: appearances.error,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 6,
        content: {
            title: 'Felipe Anastasakes',
            subtitle: 'Choose Felipe as your guide in this journey',
            description: '“The first step towards getting somewhere, is to decide that you are not going to stay where you are”',
            image: FelippeAnastasakes,
            rating: 4,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 8,
        content: {
            title: 'Bug York',
            subtitle: 'How to find your path to success',
            description: '“Don’t fear change. You may lose something good, but you may also gain something great”',
            image: BugYork,
            rating: 3,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 8,
        content: {
            title: 'SYSTEM NOTIFICATION',
            subtitle: 'You earned 500 Credits',
            description: 'We appreciate your honesty. Keep it up.',
        },
        settings: {
            appearance: appearances.error,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 9,
        content: {
            title: 'SYSTEM NOTIFICATION',
            description: 'Your initial credibility is not affected by the outcome of the orientation process.',
        },
        settings: {
            appearance: appearances.error,
            autoDismiss: false,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    {
        questionId: 10,
        content: {
            title: 'Leboo Rossi’s Group',
            subtitle: 'Leboo’s Group will help you handle transition when changing your life',
            description: '“Your current situation is not your final destination”',
            image: LebooRossiGroup,
            rating: 4,
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: true,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
    // {
    //     questionId: 14,
    //     content: {
    //         title: 'Lory Futsuki is following you',
    //         subtitle: 'Hey there :) Lets chat',
    //         description: "Dating can be tough in the first crazy days, but no worries, me and my friends are here to help",
    //         image: LoryFutsuki,
    //     },
    //     settings: {
    //         appearance: appearances.info,
    //         autoDismiss: true,
    //         autoDismissTimeout: getRandom(dismissTimeoutArray)
    //     },
    // },
    {
        questionId: 16,
        content: {
            title: "Let's find your nest",
            subtitle: 'Nests for all credibility investments',
            description: "Discovering the perfect house is a life investement. We take your life seriously. Safe and comfy is our moto.",
        },
        settings: {
            appearance: appearances.info,
            autoDismiss: true,
            autoDismissTimeout: getRandom(dismissTimeoutArray)
        },
    },
];
