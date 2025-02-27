import ResumeItem from './ResumeItem';

const Resumepage = () => {
    const ResumeItems = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'Google',
            description: 'Lorem ipsum dolor sit amet.',
            durationDate: '2019 - Present',
        },
        {
            id: 2,
            title: 'Backend Developer',
            company: 'Facebook',
            description: 'Lorem ipsum dolor sit amet.',
            durationDate: '2016 - 2019',
        },
        {
            id: 3,
            title: 'Fullstack Developer',
            company: 'Amazon',
            description: 'Lorem ipsum dolor sit amet.',
            durationDate: '2014 - 2016',
        }
    ];

    return (
        <section className="resume-page">
            <h1>Professional Experience</h1>
            <div className="resume-list">
            {ResumeItems.map((item) => (
                <ResumeItem
                    key={item.id}
                    title={item.title}
                    company={item.company}
                    description={item.description}
                    durationDate={item.durationDate}
                />
            ))}
            </div>
        </section>
    );
};

export default Resumepage;