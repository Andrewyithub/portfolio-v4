import styles from './styles.module.css';
import { skills } from '../../data/skills';

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
