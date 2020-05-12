import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopularCourses = () => {
    const [courses,setCourses]= useState([]);

    const fetchCourses=()=>{
        fetch('https://5ea5cbca2d86f00016b46276.mockapi.io/api/courses')
        .then(course=>course.json())
        .then(data=>{
            setCourses(data);
        })
        .catch(error=>console.log(error))
    }

    useEffect(() => {
        fetchCourses();
    })
    // console.log(courses)
    
    return (
        <section id="popular-course">
        <div className="fb-container">
            <div className="slider">
                <div className="courses-wrapper">
                {
                    courses.map((course,index)=>(
                        <div className="courses-grid" key={index}>
                            <div className="card">
                                <img src={course.image} alt="course image"/>
                                <span className="author_avatar">
                                    <img src={course.author_avatar} alt="author-image" />
                                </span>
                                <div className="card-body">
                                    <h2 className="title">{course.title}</h2>
                                    <h4>{course.author}</h4>
                                    <div className="price-rating">
                                        <span>${course.price}</span>
                                        <span>{course.rating}</span>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="fb-row">
                                        <div className="fb-col-3">
                                            <FontAwesomeIcon icon="user-friends"/>
                                            <span>{course.users}</span>
                                        </div>
                                        <div className="fb-col-3">
                                            <FontAwesomeIcon icon="user-friends"/>
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="fb-col-3">
                                            <FontAwesomeIcon className="rating" icon="star"/>
                                            <FontAwesomeIcon className="rating" icon="star"/>
                                            <FontAwesomeIcon className="rating" icon="star"/>
                                            <FontAwesomeIcon className="rating" icon="star"/>
                                            <FontAwesomeIcon className="rating" icon="star-half-alt"/>
                                            <span>{course.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
      </section>
    )
}

export default PopularCourses
