import "./CourseCatalog.css"
import { courses } from "../../data/courses";
import { Link } from "react-router-dom";
import { useState } from "react";

function CourseCatalog() {
  const [searchValue, setSearchValue] = useState("");

  const filteredCourses = courses.filter(course => {
    return course.title.toLowerCase().includes(searchValue.toLowerCase())
      || course.description.toLowerCase().includes(searchValue.toLowerCase());
  })

  return (
    <div className="course-catalog">

      {/* catalog showcase */}
      <div className="catalog-showcase">
        <div className="container">
          <div className="showcase-text">
            <h2>Discover new courses on CourseHub</h2>
            <p>Whether you're switching fields, advancing your skills, or just starting out — you can find the latest learning here.</p>
          </div>
          <img src="../../public/images/catalog-course-showcase.png" alt="" />
        </div>
      </div>

      {/* catalog courses */}
      <div className="catalog-courses">
        <div className="container">
          <input type="text" placeholder="Search for anything..." className=" w-3/4 p-3 rounded-md border-none outline-none ring-[#A05525] ring-1 m-auto block focus:ring-2 text-[1rem] font-medium placeholder:text-gray-500 text-gray-500" value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value)
              filterCoursesHandler();
            }} />
          <h4>Trending new courses</h4>
          <div className="courses-grid">
            {filteredCourses.map((course, index) => {
              const { imageLink, instructor, title, type } = course;
              return (
                <div key={index} className="course-card">
                  <Link to={`/course/${course.id}`}>
                    <img src={imageLink} alt="" className="course-image" />
                    <div className="course-card-content">
                      <p className="course-instructor">{instructor}</p>
                      <h5 className="course-title">{title}</h5>
                      <p className="course-type">{type}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCatalog;