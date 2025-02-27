import PropTypes from 'prop-types';

const GoalChart = ({ goals }) => {
    // Calculate total goals and number of completed goals
    const totalGoals = goals.length;
    const completedGoals = goals.filter((goals) => goals.completed).length;
    const progress = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

    return (
        <div>
            <h3>Goal Progress Chart</h3>
            <p>
                {completedGoals} out of {totalGoals} goals completed ({progress}%)
            </p>
        </div>
    );
};

GoalChart.propTypes = {
    goals: PropTypes.array.isRequired,
};

export default GoalChart;