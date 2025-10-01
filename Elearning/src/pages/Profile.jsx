import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { enrollments } from "../data/enrollments";
import { useAuth } from "../utils/AuthContext";
import { useEffect, useState } from "react";

const Profile = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => getUserEnrollments(id), [])

  function getUserEnrollments(userId) {
    const userEnrollments = enrollments.filter(enrollmentObj => {
      return enrollmentObj.userId == userId
    });

    const enrolledCourses = userEnrollments.map(obj => {
      return courses.find(courseObj => courseObj.id == obj.courseId)
    })

    setEnrolledCourses(enrolledCourses);
  }

  return (
    <div className="min-h-screen bg-[#FFEDE1]">
      {/* header */}
      <div className="header container flex justify-between items-center gap-4 py-2">
        <h2 className="text-xl sm:text-3xl font-bold text-[#1B5241]">
          Welcome back, {user.name}
        </h2>
        <p className="text-[#004F35] font-medium sm:text-lg lg:text-xl">{user.email}</p>
      </div>

      {/* learning */}
      <div className="cover bg-[#A05525] text-white min-h-32 flex items-center">
        <div className="container">
          <h3 className="text-2xl font-bold">My Learning</h3>
        </div>
      </div>

      <div className="container">
        <h4 className="text-[#245241]">Enrolled Courses</h4>
        <div className="courses-grid">
          {enrolledCourses.map((course, index) => {
            const { imageLink, instructor, title, type } = course;
            return (
              <div key={index} className="course-card">
                <img src={imageLink} alt="" className="course-image" />
                <div className="course-card-content">
                  <p className="course-instructor">{instructor}</p>
                  <h5 className="course-title">{title}</h5>
                  <p className="course-type">{type}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
};

export default Profile;
