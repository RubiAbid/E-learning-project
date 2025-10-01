import "./CourseDetails.css"
import { useNavigate, useParams } from "react-router-dom"
import { courses } from "../../data/courses";
import { useAuth } from "../../utils/AuthContext";
import { enrollCourse } from "../../services/CourseServices";


function CourseDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const course = courses.find(course => course.id == id);
  const { title, description, instructor, imageLink } = course;


  const handleEnroll = async () => {
    if (!user) {
      alert("Please login first!");
      navigate("/login")
      return;
    }

    try {
      await enrollCourse(user.$id, id);  // save enrollment in Appwrite
      alert("✅ Course enrolled successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to enroll. Check console.");
    }
  };
  return (
    <div className="course-details">
      <div className="details-hero-section bg-[#A05525] text-white">
        <div className="container flex justify-between items-center py-12">
          <div className="w-[47%]">
            <h2 className="text-4xl font-medium mb-6">{title}</h2>
            <p className="mb-4 max-w-xl">{description}</p>
            <p className="text-[14px] mb-10">Created by {instructor}</p>
            <button className="bg-[#005035] text-[#FFF7F2] px-8 py-2 font-bold cursor-pointer hover:bg-[#A05525] border-[#005135] border-2 hover:border-[#005135] rounded-lg"
              onClick={handleEnroll}

            >Enroll Now</button>
          </div>
          <img src={imageLink} alt="" className="course-details-img w-[48%] max-h-[35z0px]" />
        </div>

      </div>
    </div>
  )
}

export default CourseDetails