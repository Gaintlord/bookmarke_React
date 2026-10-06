import { GradiantButton } from "../components/GradiantBorder/gradiantButton";
import { ModernInput } from "../components/modernInput";

import EmailIcon from "../accets/svgs/emailIcon";
import PasswordIcon from "../accets/svgs/passwordIcon";
import { HomeLogoAncher } from "../components/homeLogoAncher";
import { SignInOptions } from "../components/signInOptions";
import GoogleIcon from "../accets/svgs/googleIcon";
import { GoogleAuth } from "../utils/googleAuth";

import { useRef, useState } from "react";
import { userSignup } from "../utils/userSignup";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailNull, setEmailIsNull] = useState(false);
  const [emailError, setEmailIsError] = useState(false);
  const [userEmailError, setUserEmailError] = useState("");

  const [passNull, setPassIsNull] = useState(false);
  const [passError, setPassIsError] = useState(false);
  const [userPassError, setUserPassError] = useState("");

  const userSignupController = async (email: string, password: string) => {
    if (email == "") {
      setEmailIsNull(true);
    } else {
      setEmailIsNull(false);
    }
    if (password == "") {
      setPassIsNull(true);
    } else {
      setPassIsNull(false);
    }
    const response = await userSignup(email, password);
    console.log(response);
    if (response?.status) {
      setPassIsError(false);
      setEmailIsError(false);
      navigate("/verifyemail", { state: { email } });
    } else {
      if (response.type == "email") {
        setEmailIsError(true);
        setUserEmailError(response.err);
      }
      if (response.type == "password") {
        setPassIsError(true);
        setUserPassError(response.err);
      }
    }
  };

  return (
    <>
      <div className="min-h-dvh  flex flex-col bg-white lg:h-screen overflow-x-hidden">
        {/* TopBar */}
        <div className="h-[8vh] flex flex-row border-b-2">
          <div className="flex-2 w-full flex justify-start items-center mr-3 sm:mr-[5%] lg:justify-end">
            <HomeLogoAncher className="w-[40%] "></HomeLogoAncher>
          </div>
          <div className="hidden flex-3 items-center justify-end flex-row font-mono text-blue-950 lg:flex">
            <div className="mx-[5%]">
              <a>login</a>
            </div>
            <div>
              <a>Download</a>
            </div>

            <div></div>
          </div>
          <div className="flex-1 flex z-0 items-center justify-end mr-3 sm:mr-[8%] flex-row">
            <Link to="/Login" replace={true}>
              <GradiantButton>Login</GradiantButton>
            </Link>
          </div>
        </div>
        {/* ################### */}
        {/* rest of the downbar */}
        <div className="flex-1 min-h-0 overflow-y-auto bg-black/0 flex flex-col lg:h-[92vh] lg:flex-none lg:overflow-visible">
          {/* the text */}
          <div className="flex-none px-4 pt-6 pb-3 text-center text-2xl sm:text-3xl md:text-4xl flex justify-center items-end font-bold font-mono text-blue-950 lg:flex-1 lg:px-0 lg:pt-0 lg:pb-0 lg:text-5xl">
            Sign up to Bokmarke{" "}
          </div>
          {/* sign Up form */}
          <div className="flex-none w-full px-4 sm:px-6 flex flex-col items-center justify-center py-4 lg:flex-1 lg:px-0 lg:py-3  ">
            <div className="w-full max-w-md lg:w-[25%] lg:max-w-none">
              <ModernInput
                propRef={emailRef}
                placeholder="smith@gmail.com"
                forType="Email"
                type="email"
                toolTipMsg="Enter your Valid Email"
                typeIcon={<EmailIcon />}
                className="text-base lg:text-xl"
                isError={emailError}
                isNull={emailNull}
                userError={userEmailError}
              ></ModernInput>
            </div>
            <div className="w-full max-w-md lg:w-[25%] lg:max-w-none">
              <ModernInput
                propRef={passwordRef}
                placeholder="password123"
                forType="Password"
                type="password"
                forPassword
                toolTipMsg="Enter a alpha-numaric password"
                typeIcon={<PasswordIcon />}
                className="text-base lg:text-xl"
                isError={passError}
                isNull={passNull}
                userError={userPassError}
              ></ModernInput>
            </div>
            <div
              className="w-full max-w-md mt-4 rounded-md bg-[rgb(213,231,235)] text-base text-center text-blue-950 p-1 inset-shadow-2xs cursor-pointer shadow-2xl ring-1 active:translate-y-1 duration-200 lg:mt-6 lg:w-[25%] lg:max-w-none lg:text-xl"
              onClick={async () => {
                await userSignupController(
                  emailRef.current?.value ?? "s",
                  passwordRef.current?.value ?? "s",
                );
              }}
            >
              sign up
            </div>
            <p className="w-full max-w-md mt-3 text-center font-mono text-xs leading-5 text-gray-500 lg:w-[25%] lg:max-w-none">
              By signing up, you agree to our{" "}
              <Link
                className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
                to="/terms"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          {/*other Signup function  */}
          <div className="flex-none w-full mt-4 flex justify-start items-center flex-col lg:flex-2 lg:mt-0 ">
            <div className="flex items-center justify-center w-full max-w-md my-2 lg:w-[25%] lg:max-w-none">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="flex w-full max-w-md lg:w-[25%] lg:max-w-none mx-auto  justify-center overflow-x-hidden">
              <SignInOptions
                className=" text-black/75 border-1 border-black/50 cursor-pointer"
                type="Google"
                typeIcon={<GoogleIcon />}
                onClick={GoogleAuth}
              ></SignInOptions>
            </div>
          </div>
          <div className="hidden lg:block lg:flex-1"></div>
        </div>
      </div>
    </>
  );
}

// export default function SignUp() {
//   return (
//     <>
//       <div>sheeeeeeeeeerrrrrrrrrrr</div>
//     </>
//   );
// }
