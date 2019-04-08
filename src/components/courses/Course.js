import React from 'react';

const Course = (props) => {
    console.log(props);

    const { title, desc, img} = props;
    return (
        <div className="course">
            <h4>{title}</h4>
            <div className="course-body">
            
                <img src={img} alt="figure" />
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Course;