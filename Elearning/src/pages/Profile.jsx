import { useAuth } from "../utils/AuthContext";
import { useEffect, useState } from "react";
import { getUserEnrollments } from "../services/CourseServices";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    if (user) {
      loadEnrollments(user.$id);
    }
  }, [user]);

  async function loadEnrollments(userId) {
    try {
      const enrollments = await getUserEnrollments(userId);
      const courseList = enrollments.map(enrollment =>
        courses.find(course => course.id == enrollment.courseId)
      );
      setEnrolledCourses(courseList);
    } catch (err) {
      console.error("❌ Error fetching enrollments:", err);
    }
  }

  return (
    <div className="bg-[#FFEDE1]">
      {/* header */}
      <div className="header container flex justify-between items-center gap-4 py-2">
        <h2 className="text-xl sm:text-3xl font-bold text-[#1B5241]">
          Welcome back, {user?.name}
        </h2>
        <p className="text-[#004F35] font-medium sm:text-lg lg:text-xl">{user?.email}</p>
      </div>

      {/* learning */}
      <div className="cover bg-[#A05525] text-white min-h-32 flex items-center">
        <div className="container">
          <h3 className="text-2xl font-bold">My Learning</h3>
        </div>
      </div>

      <div className="container user-courses pb-4">
        <h4 className="text-[#245241] text-xl font-medium py-4">Enrolled Courses</h4>
        {enrolledCourses.length ? (
          <div className="courses-grid">
            {enrolledCourses.map((course, index) => {
              const { id, imageLink, instructor, title, type } = course;
              return (
                <div key={index} className="course-card">
                  <Link to={`/course-video/${id}`}>
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
        ) : (
          <div className="min-h-[calc(100vh-320px)] flex flex-col gap-4 justify-center items-center">
            <h5 className="text-xl font-medium">You have not enrolled any courses yet!</h5>
            <button className="border bg-[#A05525] rounded-lg px-4 py-2 text-white font-semibold hover:bg-[#a05425e5] hover:text-white transition cursor-pointer mb-[60px]" onClick={() => navigate("/courses")}>Browse Courses</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
