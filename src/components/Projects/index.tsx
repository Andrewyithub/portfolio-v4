import Card from '../Card';
import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <div id="work">
      <h2>Recent Work</h2>

      <div className={`flow`}>
        {projects.map((project) => (
          <div key={project.id}>
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
