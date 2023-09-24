import styles from './styles.module.css';
import Skills from '../Skills';

export default function About() {
  return (
    <div id="about" className={styles.flex}>
      <div className={`flow ${styles.about__flow} `}>
        <h2>About Me</h2>

        <p>
          As a Full Stack Software Engineer, I'm not just a coder – I'm a
          problem solver. I enjoy tackling complex challenges head-on, whether
          it's optimizing application performance, debugging intricate issues,
          or brainstorming innovative solutions.
        </p>
        <p>
          With a solid foundation in both front-end and back-end development, I
          thrive on creating seamless digital experiences that marry creativity
          and functionality.
        </p>
        <p>
          In the fast-paced world of technology, learning is a never-ending
          journey. I'm dedicated to staying updated with the latest trends,
          frameworks, and tools in the software development landscape.
        </p>
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}
