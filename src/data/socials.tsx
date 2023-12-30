import { ReactNode } from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

interface Social {
  id: string;
  link: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: 'social-github',
    link: 'https://github.com/Andrewy-gh',
    icon: <FiGithub />,
  },
  {
    id: 'social-twitter',
    link: 'https://twitter.com/a_ydev',
    icon: <FiTwitter />,
  },
  {
    id: 'social-linkedin',
    link: 'https://www.linkedin.com/in/andrewydev/',
    icon: <FiLinkedin />,
  },
];

export default socials;
