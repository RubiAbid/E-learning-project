import "./CourseDetails.css"
import { useParams } from "react-router-dom"
import { courses } from "../../data/courses";

function CourseDetails() {
    const { id } = useParams();
    const course = courses.find(course => course.id == id);
    const { title, description, instructor, imageLink } = course;

    return (
        <div className="course-details">
            <div className="details-hero-section bg-[#16161D] text-white">
                <div className="container flex justify-between items-center py-12">
                    <div className="w-[47%]">
                        <h2 className="text-4xl font-medium mb-6">{title}</h2>
                        <p className="mb-4 max-w-xl">{description}</p>
                        <p className="text-[14px] mb-10">Created by {instructor}</p>
                        <button className="bg-[#2649B0] px-8 py-2 font-bold cursor-pointer hover:bg-[#2648b0e8]">Enroll Now</button>
                    </div>
                    <img src={imageLink} alt="" className="course-details-img w-[48%] max-h-[35z0px]" />
                </div>

            </div>
        </div>
    )
}

export default CourseDetails