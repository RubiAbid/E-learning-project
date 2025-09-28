import { NavLink, useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate=useNavigate()
    



  return (
    <div className=" flex flex-col justify-center items-center">
        <div>
            <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="errorPage" 
            className="w-[700px] h-full"
            />
        </div>
        <div className="flex flex-row gap-3">
        <NavLink to="/" className="text-[#A05525] font-bold border-2 border-[#A05525] rounded-lg p-2 m-2 bg-[#FFF7F2] hover:text-[#FFF7F2] hover:bg-[#A05525]">Go to HomePage</NavLink>
        <NavLink to="/" 
                 onClick={() => navigate(-1)}

        className="text-[#A05525] font-bold border-2 border-[#A05525] rounded-lg p-2 m-2 bg-[#FFF7F2] hover:text-[#FFF7F2] hover:bg-[#A05525]">Go Back</NavLink>

        </div>

    </div>
  )
}

export default ErrorPage