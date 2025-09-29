import { useAuth } from "../utils/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFEDE1] px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B5241] mb-4">
        Welcome{user?.name ? `, ${user.name}` : "!"}
      </h1>
      
      {user?.email && (
        <p className="text-[#004F35] text-base sm:text-lg lg:text-xl">
          Email :  {user.email}
        </p>
      )}
    </div>
  );
};

export default Profile;
