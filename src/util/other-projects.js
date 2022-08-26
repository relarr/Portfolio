import trackerImg from '../assets/expenses-tracker.png';
import githubIcon from '../assets/github.svg';
import externalIcon from '../assets/external-link.svg';
import codeIcon from '../assets/code.svg';

const otherProjects = [
  {
    id: 1,
    title: 'Expenses Tracker',
    website: 'https://expenses-tracker-one.herokuapp.com/',
    image: trackerImg,
    image_alt: 'tracker',
    description:
      'A simple application for tracking and saving expenses. An animated visual chart shows, in real-time, how much was spent monthly.',
    technologies: 'Javascript | MongoDB | Express | React | Redux | Node',
    links: [
      {
        id: 1,
        link: 'https://github.com/relarr/Expenses-Tracker',
        img: githubIcon,
        img_alt: 'githubIcon',
      },
      {
        id: 2,
        link: 'https://expenses-tracker-one.herokuapp.com/',
        img: externalIcon,
        img_alt: 'externalIcon',
      },
    ],
  },
  {
    id: 2,
    title: 'Inventory Tracking System',
    website: 'https://github.com/relarr/Movie-Inventory-Tracking-System',
    image: codeIcon,
    image_alt: 'codeIcon',
    description:
      'Built a program that initializes the contents of an inventory, customers list, and commands from external files. It tracks customers’ borrows and returns.',
    technologies: 'C++ | Python',
    links: [
      {
        id: 1,
        link: 'https://github.com/relarr/Movie-Inventory-Tracking-System',
        img: githubIcon,
        img_alt: 'githubIcon',
      },
    ],
  },
  {
    id: 3,
    title: '68K Disassembler',
    website: 'https://github.com/relarr/68K-Disassembler',
    image: codeIcon,
    image_alt: 'codeIcon',
    description:
      'A disassembler for the Motorola 68000 processor. It converts machine code of instructions into 68000 assembly language opcodes and effective addresses.',
    technologies: '68K Assembly',
    links: [
      {
        id: 1,
        link: 'https://github.com/relarr/68K-Disassembler',
        img: githubIcon,
        img_alt: 'githubIcon',
      },
    ],
  },
];

export default otherProjects;
