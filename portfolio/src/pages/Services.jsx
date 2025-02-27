import BlogPost from "../features/blog/BlogPost";
import GoalTracker from "../features/goalManager/GoalTracker";
import ProjectCaseStudy from "../features/projects/ProjectCaseStudy";

const Projects = () => {

    return (
        <main>
            <h1>Our Services </h1>
            <p>Here are some of the projects I have worked on</p>
            <p>Explore our projects and case studies</p>
            
            <GoalTracker />
            <ProjectCaseStudy />
            <BlogPost />
        </main>
    );
};

export default Projects;