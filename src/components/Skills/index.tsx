import styles from './styles.module.css';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiFigma,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';

const skills = [
  { id: 1, name: 'Javascript', icon: <SiJavascript /> },
  { id: 2, name: 'HTML', icon: <SiHtml5 /> },
  { id: 3, name: 'CSS', icon: <SiCss3 /> },
  { id: 4, name: 'React', icon: <SiReact /> },
  { id: 5, name: 'Node JS', icon: <SiNodedotjs /> },
  { id: 6, name: 'Mongo DB', icon: <SiMongodb /> },
  { id: 7, name: 'Firebase', icon: <SiFirebase /> },
  { id: 8, name: 'Typescript', icon: <SiTypescript /> },
  { id: 9, name: 'Next JS', icon: <SiNextdotjs /> },
];

export default function Skills() {
  return (
    <div>
      <h2>My Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.skill}>
            <div className={styles.icon}>{skill.icon}</div>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
}
