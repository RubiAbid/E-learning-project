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
    <div className="min-h-screen bg-[#FFEDE1]">
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

      <div className="container my-8">
        <h4 className="text-[#245241] mb-4 text-xl font-semibold">Enrolled Courses</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course, index) => {
              if (!course) return null;
              const { imageLink, title, instructor, id } = course;
              return (
                <Link
                  key={index}
                  to={`/course-video/${id}`} // link to video page
                  className="block border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img src={imageLink} alt={title} className="w-full h-48 object-cover" />
                  <div className="p-4 bg-white">
                    <h5 className="font-bold text-lg">{title}</h5>
                    <p className="text-gray-600">{instructor}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="text-center font-bold text-xl mt-10">No courses enrolled yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
