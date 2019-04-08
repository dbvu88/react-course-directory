import React from 'react';

const Course = (props) => {
    console.log(props);

    const { title, desc, img} = props;
    return (
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
            <img src={img} alt="figure" />
        </div>
    )
}

export default Course;