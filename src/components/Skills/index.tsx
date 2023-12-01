import styles from './styles.module.css';
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';
import { FaFly } from 'react-icons/fa';

const skills = [
  { id: 1, name: 'Javascript', icon: <SiJavascript /> },
  { id: 2, name: 'Python', icon: <SiPython /> },
  { id: 3, name: 'HTML', icon: <SiHtml5 /> },
  { id: 4, name: 'CSS', icon: <SiCss3 /> },
  { id: 5, name: 'React', icon: <SiReact /> },
  { id: 6, name: 'Tailwind', icon: <SiTailwindcss /> },
  { id: 7, name: 'Mui', icon: <SiMui /> },
  { id: 8, name: 'Node JS', icon: <SiNodedotjs /> },
  { id: 9, name: 'Express', icon: <SiExpress /> },
  { id: 10, name: 'Mongo', icon: <SiMongodb /> },
  { id: 11, name: 'Postgres', icon: <SiPostgresql /> },
  { id: 12, name: 'Firebase', icon: <SiFirebase /> },
  { id: 13, name: 'Fly.io', icon: <FaFly /> },
  { id: 14, name: 'Typescript', icon: <SiTypescript /> },
  { id: 15, name: 'Next JS', icon: <SiNextdotjs /> },
];

export default function Skills() {
  return (
    <>
      <h2>My Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skill}>
            <div className={styles.icon}>{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </div>
    </>
  );
}
