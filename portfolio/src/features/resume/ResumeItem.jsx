import PropTypes from 'prop-types';

const ResumeItem = ({ title, company, description, durationDate }) => {

    return (
        <div className="resume-item">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{description}</p>
            <span className="duration">{durationDate}</span>
        </div>
    );
};

ResumeItem.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    durationDate: PropTypes.string.isRequired,
};

export default ResumeItem;