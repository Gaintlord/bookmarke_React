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
      <div className="h-screen w-full flex flex-col bg-white">
        {/* TopBar */}
        <div className="h-[8vh] flex flex-row border-b-2">
          <div className="flex-2 w-full flex justify-end items-center mr-[5%]">
            <HomeLogoAncher className="w-[40%] "></HomeLogoAncher>
          </div>
          <div className="flex-3 flex items-center justify-end flex-row font-mono text-blue-950">
            <div className="mx-[5%]">
              <a>login</a>
            </div>
            <div>
              <a>Download</a>
            </div>

            <div></div>
          </div>
          <div className="flex-1 flex z-0 items-center justify-end  mr-[8%] flex-row">
            <Link to="/Login" replace={true}>
              <GradiantButton>Login</GradiantButton>
            </Link>
          </div>
        </div>
        {/* ################### */}
        {/* rest of the downbar */}
        <div className="h-[92vh] bg-black/0 flex flex-col">
          {/* the text */}
          <div className="flex-1  flex justify-center items-end text-5xl font-bold font-mono text-blue-950">
            Sign up to Bokmarke{" "}
          </div>
          {/* sign Up form */}
          <div className="flex-1 flex flex-col items-center justify-center py-3  ">
            <div className="w-[25%]">
              <ModernInput
                propRef={emailRef}
                placeholder="smith@gmail.com"
                forType="Email"
                type="email"
                toolTipMsg="Enter your Valid Email"
                typeIcon={<EmailIcon />}
                className="text-xl"
                isError={emailError}
                isNull={emailNull}
                userError={userEmailError}
              ></ModernInput>
            </div>
            <div className="w-[25%]">
              <ModernInput
                propRef={passwordRef}
                placeholder="password123"
                forType="Password"
                type="password"
                forPassword
                toolTipMsg="Enter a alpha-numaric password"
                typeIcon={<PasswordIcon />}
                className="text-xl"
                isError={passError}
                isNull={passNull}
                userError={userPassError}
              ></ModernInput>
            </div>
            <div
              className="w-[25%] mt-6 rounded-md bg-[rgb(213,231,235)] text-xl text-center text-blue-950 p-1 inset-shadow-2xs cursor-pointer shadow-2xl ring-1
            active:translate-y-1 duration-200"
              onClick={async () => {
                await userSignupController(
                  emailRef.current?.value ?? "s",
                  passwordRef.current?.value ?? "s"
                );
              }}
            >
              sign up
            </div>
            <p className="w-[25%] mt-3 text-center font-mono text-xs leading-5 text-gray-500">
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
          <div className="flex-2 flex justify-start items-center flex-col ">
            <div className="flex items-center justify-center w-[25%] my-2">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>
            <div className="flex w-[25%]">
              <SignInOptions
                className=" text-black/75 border-1 border-black/50 cursor-pointer"
                type="Google"
                typeIcon={<GoogleIcon />}
                onClick={GoogleAuth}
              ></SignInOptions>
            </div>
          </div>
          <div className="flex-1 "></div>
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
