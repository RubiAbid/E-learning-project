// import { useNavigate, useParams } from "react-router-dom";
// import { courses } from "../data/courses";
// import { enrollments } from "../data/enrollments";
// import { useAuth } from "../utils/AuthContext";
// import { useEffect, useState } from "react";

// const Dashboard = () => {
//   const { user } = useAuth();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [enrolledCourses, setEnrolledCourses] = useState([]);

//   useEffect(() => getUserEnrollments(id), [])

//   function getUserEnrollments(userId) {
//     const userEnrollments = enrollments.filter(enrollmentObj => {
//       return enrollmentObj.userId == userId
//     });

//     const enrolledCourses = userEnrollments.map(obj => {
//       return courses.find(courseObj => courseObj.id == obj.courseId)
//     })

//     setEnrolledCourses(enrolledCourses);
//   }

//   return (
//     <div className="bg-[#FFEDE1]">
//       {/* header */}
//       <div className="header container flex justify-between items-center gap-4 py-2">
//         <h2 className="text-xl sm:text-3xl font-bold text-[#1B5241]">
//           Welcome Instructor, {user.name}
//         </h2>
//         <p className="text-[#004F35] font-medium sm:text-lg lg:text-xl">{user.email}</p>
//       </div>

//       <hr className="my-4 text-[#2452414e]" />

//       {/* learning */}
//       <div className="cover container">
//         <h3 className="text-[#245241] text-2xl font-medium py-4">Create your course here...</h3>
//         <form className="w-full">
//           <input type="text" placeholder="Enter title" className="px-2 py-1 rounded-md outline-none border border-gray-500 w-full mb-2" />
//           <input type="text" placeholder="Enter description" className="px-2 py-1 rounded-md outline-none border border-gray-500 w-full mb-2" />
//           <input type="text" placeholder="Enter image link" className="px-2 py-1 rounded-md outline-none border border-gray-500 w-full mb-2" />
//           <input type="submit" value="Create" className="border bg-[#A05525] rounded-lg px-4 py-2 text-white font-semibold hover:bg-[#a05425e5] hover:text-white transition cursor-pointer mt-2" />
//         </form>
//       </div>

//       <hr className="my-4 text-[#2452414e]" />

//       <div className="container user-courses pb-4">
//         <h4 className="text-[#245241] text-xl font-medium py-4">My Courses</h4>
//         {enrolledCourses.length ? (
//           <div className="courses-grid">
//             {enrolledCourses.map((course, index) => {
//               const { imageLink, instructor, title, type } = course;
//               return (
//                 <div key={index} className="course-card">
//                   <img src={imageLink} alt="" className="course-image" />
//                   <div className="course-card-content">
//                     <p className="course-instructor">{instructor}</p>
//                     <h5 className="course-title">{title}</h5>
//                     <p className="course-type">{type}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         ) : (
//           <div className="min-h-[calc(100vh-320px)] flex flex-col gap-4 justify-center items-center">
//             <h5 className="text-xl font-medium">You have not enrolled any courses yet!</h5>
//             <button className="border bg-[#A05525] rounded-lg px-4 py-2 text-white font-semibold hover:bg-[#a05425e5] hover:text-white transition cursor-pointer mb-[60px]" onClick={() => navigate("/courses")}>Browse Courses</button>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Dashboard;
