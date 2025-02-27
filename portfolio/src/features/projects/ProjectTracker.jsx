import { useState } from "react"
import PropTypes from 'prop-types';
//import { Button } from "../../components/ui/Button";

const ProjectTracker = ({ project }) => {
    const [progress, setProgress] = useState(project.initialProgress || 0);

    const handleProgressChange = (e) => {
        setProgress(Number(e.target.value));
    };

    const increaseProgress = () => {
        setProgress(prev => Math.min(prev + 10, 100));
    };

    const decreaseProgress = () => {
        setProgress(prev => Math.min(prev - 10, 100));
    };

    return (
        <div>
            <h3>Project tracker: {project.name}</h3>
            <p>Progress: {progress}%</p>
            <input 
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange} 
            />
            <span>{progress}% Complete</span>
            <button onClick={increaseProgress}>Increase</button>
            <button onClick={decreaseProgress}>Decrease</button>
        </div>
    );
};

ProjectTracker.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        initialProgress: PropTypes.number
    }).isRequired
};

export default ProjectTracker;