import React from 'react';
import "./_tagcloud.scss";

const TagCloud = () => {
    const tags = [
        'Technology',
        'Programming',
        'Web Development',
        'JavaScript',
        'React',
        'Python',
        'Data Science',
        'Machine Learning',
        'Artificial Intelligence',
        'Cybersecurity',
        'Blockchain',
        'Cryptocurrency',
        'Mobile Development',
        'iOS Development',
        'Android Development',
        'UI/UX Design',
        'Productivity',
        'Entrepreneurship',
        'Startups',
        'Self Improvement'
    ];
    
    return (
        <div>
            <div className="card custom-card">
                <div className="card-body">
                    <h5 className="card-title">Tag cloud</h5>
                    {/* Map over the tags array and generate anchor tags */}
                    {tags.map((tag, index) => (
                        <a key={index} href="#" className="tag">{tag}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagCloud;
