//import { Button } from "../../components/ui/Button";
import ProjectTracker from "./ProjectTracker";
import PropTypes from 'prop-types';

const ProjectCaseStudy = ({ project }) => {
    if (!project) {
        return <div>Loading project data...</div>;
    }
    return (
        <article>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div>
                <h3>Case Study</h3>
                <p>{project.caseStudy}</p>
            </div>
            <div>
                <h4>Technologies Used</h4>
                <ul>
                    {project.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <button>View Details <ProjectTracker /></button>
        </article>
    );
};


<ProjectCaseStudy
  project={{
    title: "My Project",
    description: "This is a sample project.",
    caseStudy: "Detailed case study content...",
    techStack: ["React", "Node.js", "CSS"]
  }}
/>

ProjectCaseStudy.defaultProps = {
    project: {
      title: "Default Title",
      description: "Default description",
      caseStudy: "Default case study content.",
      techStack: []
    }
};
  

ProjectCaseStudy.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        caseStudy: PropTypes.string,
        techStack: PropTypes.arrayOf(PropTypes.string)
    })
};

export default ProjectCaseStudy;