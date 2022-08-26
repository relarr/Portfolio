import storeImg from '../assets/store.png';
import moviesImg from '../assets/moviesreviewer.png';
import algorithmsImg from '../assets/algorithms.png';
import githubIcon from '../assets/github.svg';
import externalIcon from '../assets/external-link.svg';

const projects = [
  {
    id: 1,
    image: storeImg,
    website: 'https://shopmartone.web.app/',
    extra: 'Featured Project',
    title: 'ShopMart Ecommerce Store',
    description:
      'Developed an Ecommerce store utilizing MongoDB, Express.js, React.js, Node.js. It has a centralized application state and logic built with Redux.js. No pre-built platform or plugin was used. The application includes a shopping cart, the option for users to leave product reviews, the option to pay with PayPal, administrators have an area where they can manage users, products, and orders.',
    technologies: 'Javascript MongoDB Express React Redux Node',
    linkIcons: [githubIcon, externalIcon],
    links: [
      'https://github.com/relarr/eCommerce-Store-Platform',
      'https://shopmartone.web.app/',
    ],
  },
  {
    id: 2,
    image: algorithmsImg,
    website: 'https://algorithmsanimations.web.app/',
    extra: 'Featured Project',
    title: 'Algorithms Animations',
    description:
      'Built a React.js single-page application that animates different Searching and Sorting algorithms. Implemented Searching(Depth-First Search, Breadth-First Search) and Sorting(Selection, Insertion, Bubble, Quick, Merge Sort) algorithms.',
    technologies: 'Javascript React Git',
    linkIcons: [githubIcon, externalIcon],
    links: [
      'https://github.com/relarr/Algorithms-Animations',
      'https://algorithmsanimations.web.app/',
    ],
  },
  {
    id: 3,
    image: moviesImg,
    website: 'https://moviesreviewer.web.app/',
    extra: 'Featured Project',
    title: 'Movies Reviewer',
    description:
      'Built a full stack single-page application with MongoDB, Express.js, React.js, Node.js (MERN), where users can rate and write reviews for movies. It fetches data from a movies information API(OMDb). Implemented Create, Read, Update, Delete operations(CRUD), multiple data models for database relationships, and user authentication and authorization.',
    technologies: 'Javascript MongoDB Express React CreateContext Node',
    linkIcons: [githubIcon, externalIcon],
    links: [
      'https://github.com/relarr/Movies-Reviewer',
      'https://moviesreviewer.web.app/',
    ],
  },
];

export default projects;
