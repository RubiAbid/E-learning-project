import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { useState } from "react";

const CourseVideo = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id == id);

  const [review, setReview] = useState("");

  if (!course) {
    return <p className="text-center font-bold text-xl mt-10">Course not found</p>;
  }

  return (
    <div className="min-h-screen bg-[#FFEDE1] p-6">
      <h2 className="text-3xl font-bold mb-4 text-[#1B5241]">{course.title}</h2>
      <p className="text-gray-700 mb-6">{course.description}</p>

      {/* Video Section */}
      <div className="mb-6">
        <iframe
          width="100%"
          height="500"
          src={course.videoLink}
          title={course.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow"
        ></iframe>
      </div>

      {/* Review Section */}
      {/* <div className="max-w-xl">
        <h3 className="text-2xl font-semibold mb-2">Leave a Review</h3>
        <textarea
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A05525]"
        />
        <button
          className="mt-3 bg-[#A05525] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#005035]"
          onClick={() => alert("✅ Review submitted!")}
        >
          Submit Review
        </button>
      </div> */}
    </div>
  );
};

export default CourseVideo
