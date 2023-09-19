import styles from './styles.module.css';

interface CardProps {
  project: Project;
}

interface Project {
  id: number;
  name: string;
  desc: string;
  liveLink: string;
  githubLink: string;
  techs: string[];
  smallImg: string;
  largeImg: string;
}

export default function Card({ project }: CardProps) {
  return (
    <div className={styles.card}>
      <picture>
        <source media="(max-width: 799px)" srcSet={project.smallImg} />
        <source media="(min-width: 800px)" srcSet={project.largeImg} />
        <img src={project.largeImg} alt="placeholder" />
      </picture>
      <div className={`flow ${styles.card__flow}`}>
        <h3>{project.name}</h3>
        <div className={`techs`}>
          {project.techs.map((item, i) => (
            <div key={i} className="body2">
              {item}
            </div>
          ))}
        </div>
        <p>{project.desc}</p>
        <button className={`button__primary`}>
          <a href={project.liveLink}>Live</a>
        </button>
        <button className={`button__secondary`}>
          <a href={project.githubLink}>Github</a>
        </button>
      </div>
    </div>
  );
}
