import { apiIcon,newspaperIcon,diceIcon,adviceIcon,todoIcon } from '../assets/imagesImport';
export const HeaderContent = {
    LeftSection:{
        name:"Samiuddin Khan",
        role:"Front-end"
    },
    RightSection:{
        projects:"Projects",
        skills:"Skills",
        career:"Career"
    }
};
export const CardsContent = [
    {
        id:1,
        cardTitle:"Newspaper landing page",
        cardDescription:"Crafted user-centric newspaper landing page.",
        icon:newspaperIcon
        
    },
    {
        id:2,
        cardTitle:"Dice game",
        cardDescription:"Engineered an immersive React dice game",
        icon:diceIcon

    },
    {
        id:3,
        cardTitle:"Advice Generator",
        cardDescription:"Crafted a responsive advice generator with HTML, CSS, and JavaScript",
        icon:adviceIcon,

    },
    {
        id:4,
        cardTitle:"REST API",
        cardDescription:"Architected a resilient RESTful API in Node.js",
        icon:apiIcon,

    },
    {
        id:5,
        cardTitle:"GraphQL",
        cardDescription:"Designed and implemented a GraphQL API",
        icon:apiIcon

    },
    {
        id:6,
        cardTitle:"Todo App",
        cardDescription:"",
        icon:todoIcon,

    },
];