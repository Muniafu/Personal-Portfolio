import { useState } from 'react';
import GoalChart from './GoalChart';

const GoalTracker = () => {
    const [goals, setGoals] = useState([]);
    const [error, setError] = useState('');
    const [goalInput, setGoalInput] = useState('');
    const [showCompleted, setShowCompleted] = useState(false);


    // Function to add a new goal
    const handleAddGoal = () =>{
        if (goalInput.trim() !== '') {
            setError('Goal cannot be empty');
            return;
        }
            const newGoal = {
                id: Date.now(), // Unique ID
                description: goalInput,
                completed: false,
            };
            setGoals([...goals, newGoal]);
            setGoalInput('');
        setError('');
    }

    // Function to mark a goal as completed
    const handleCompleteGoal = (id) => {
        const updatedGoals = goals.map((goal) =>
            goal.id === id ? { ...goal, completed: !goal.completed } : goal
        );
        setGoals(updatedGoals);
    };

    // Function to delete a goal
    const handleDeleteGoal = (id) => {
        const updatedGoals = goals.filter((goal) => goal.id !== id);
        setGoals(updatedGoals);
    };


    return (
        <div>
            <h2>Goal Manager</h2>
            <input 
                type="text"
                value={goalInput}
                onChange={(e) => {
                    setGoalInput(e.target.value);
                }}
                placeholder="Enter your goal"
            />
            <button onClick={handleAddGoal}>Add Goal</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                {goals.map((goal) => (
                    <div key={goal.id} className="goal-item">
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => handleCompleteGoal(goal.id)}
                        />
                        {/*<p style={{ textDecoration: goal.completed ? 'line-through' : 'none' }}>{goal.description}</p>*/}
                        <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
                    </div>
                ))}
            </div>
            <button onClick={() => setShowCompleted(!showCompleted)}>
                {showCompleted ? 'Hide Completed Goals' : 'Show Completed Goals'}
            </button>

            <GoalChart goals={goals} />
        </div>
    );
};

export default GoalTracker;