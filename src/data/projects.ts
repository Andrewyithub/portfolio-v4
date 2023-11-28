import spruceSm from '../assets/projects/spruce-street-sm.webp';
import spruceLg from '../assets/projects/spruce-street-lg.webp';
import takashiSm from '../assets/projects/takashi-sm.webp';
import takashiLg from '../assets/projects/takashi-lg.webp';
import cutAboveSm from '../assets/projects/cut-above-sm.webp';
import cutAboveLg from '../assets/projects/cut-above-lg.webp';

export const projects = [
  {
    id: 1,
    name: 'Cut Above Barbershop',
    desc: 'Barbershop web page. Features booking of appointments, user account registration, appointment modification, and email services. Authentication secured by JWT. Material UI components. Redux for state management and data fetching.',
    liveLink: 'http://cutaboveshop.fly.dev',
    githubLink: 'https://github.com/Andrewy-gh//cut-above-barbershop',
    techs: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Material UI',
      'Vite',
      'JSON Web Token',
      'Node Mailer',
    ],
    smallImg: cutAboveSm,
    largeImg: cutAboveLg,
  },
  {
    id: 2,
    name: 'Takashi Photography',
    desc: 'A Portfolio site for an international photographer. Drag and drop images for organization. Images optimized via Cloudinary CDN. Authentication secured by JWT.',
    liveLink: 'https://takashi-photos.fly.dev',
    githubLink: 'https://github.com/Andrewy-gh//takashi-portfolio-full-stack',
    techs: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Vite',
      'Material UI',
      'Cloudinary',
      'React Beautiful DND',
      'JSON Web Token',
    ],
    smallImg: takashiSm,
    largeImg: takashiLg,
  },
  {
    id: 3,
    name: 'Spruce Street',
    desc: 'Web page for a local plant store.',
    liveLink: 'https://spruce-street.netlify.app',
    githubLink: 'https://github.com/Andrewy-gh/spruce-street',
    techs: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
    smallImg: spruceSm,
    largeImg: spruceLg,
  },
];
