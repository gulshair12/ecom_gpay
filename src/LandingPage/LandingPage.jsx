import { Link } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // const navigate = useNavigate();

  // const handleLoginSuccess = (credentialResponse) => {
  //   const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
  //   console.log(credentialResponseDecoded);

  //   localStorage.setItem("userdata", JSON.stringify(credentialResponseDecoded));
  //   navigate("/welcomePage");
  // };

  // const handleLoginError = () => {
  //   console.log("Login Failed");
  // };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#262F49]">
        <div className="text-center">
          <img
            src="/Frame 7.png"
            alt="Illustration"
            className="mx-auto mb-8 w-1/2"
          />
          <div className="flex justify-center">
            <Link to="/welcomePage">
              <button className="flex items-center justify-center px-4 py-2 bg-white text-black rounded-full shadow-md hover:shadow-lg">
                <img
                  src="/icon_google.svg"
                  alt="Google Logo"
                  className="w-6 h-6 mr-2"
                />
                Sign in with Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
