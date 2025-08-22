import profile_img from "../../assets/images/profile.png";

const Header = () => {
  return (
    <>
  <div className="header flex items-center justify-between p-2.5 border-b-2 border-b-gray-600 w-full max-w-screen-xl">
        <div className="h_right flex items-start">
          <div className="text-4xl font-bold">Knowledge Cafe</div>
        </div>
        <div className="l_left flex items-end">
          <img className="h-10 w-10" src={profile_img} alt="profile_img" />
        </div>
      </div>
    </>
  );
};

export default Header;
