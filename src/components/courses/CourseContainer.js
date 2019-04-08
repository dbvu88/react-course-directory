import Course from './Course';
import React from 'react';
import { HTMLCourses } from '../../data/courses';

const CourseContainer = (props) => {

    let courses = props.data.map((course) => {
        return <Course title={course.title} 
                        desc={course.description}
                        img={course.img_src}
                        key={course.title} />
    });
    

    return (
        <div>
            {courses}
        </div>
    )
}

export default CourseContainer;