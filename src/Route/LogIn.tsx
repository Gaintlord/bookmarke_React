import { GradiantButton } from "../components/GradiantBorder/gradiantButton";
import { ModernInput } from "../components/modernInput";
import { useRef, useState } from "react";
import { userLogin } from "../utils/userLogin";
import EmailIcon from "../accets/svgs/emailIcon";
import PasswordIcon from "../accets/svgs/passwordIcon";
import { HomeLogoAncher } from "../components/homeLogoAncher";
import { SignInOptions } from "../components/signInOptions";
import GoogleIcon from "../accets/svgs/googleIcon";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { GoogleAuth } from "../utils/googleAuth";

const googleStatusMessages: Record<
  string,
  { message: string; className: string }
> = {
  google_denied: {
    message: "Google sign-in was cancelled.",
    className: "border-amber-200 bg-amber-50 text-amber-800",
  },
  google_failed: {
    message: "We couldn't complete Google sign-in. Please try again.",
    className: "border-red-200 bg-red-50 text-red-700",
  },
  google_unverified: {
    message: "Your Google email isn't verified, so we can't sign you in.",
    className: "border-red-200 bg-red-50 text-red-700",
  },
};

export default function Login() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const googleError = googleStatusMessages[searchParams.get("status") ?? ""];

  const dismissGoogleError = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete("status");
    setSearchParams(nextParams, { replace: true });
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [emailNull, setEmailIsNull] = useState(false);
  const [emailError, setEmailIsError] = useState(false);
  const [userEmailError, setUserEmailError] = useState("");

  const [passNull, setPassIsNull] = useState(false);
  const [passError, setPassIsError] = useState(false);
  const [userPassError, setUserPassError] = useState("");

  const userLoginController = async (email: string, password: string) => {
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
    const response = await userLogin(email, password);
    if (response?.status) {
      setPassIsError(false);
      setEmailIsError(false);
      navigate("/dashboard", { replace: true });
    } else {
      if (response.type == "email") {
        setEmailIsError(true);
        setUserEmailError(response.err);
      }
      if (response.type == "password") {
        setPassIsError(true);
        setUserPassError(response.err);
      } else {
        setEmailIsError(true);
        setPassIsError(true);
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
              <a>Sign up</a>
            </div>
            <div>
              <a>Download</a>
            </div>

            <div></div>
          </div>
          <div className="flex-1 flex z-0 items-center justify-end  mr-[8%] flex-row">
            <Link to="/signup" replace={true}>
              <GradiantButton>Signup</GradiantButton>
            </Link>
          </div>
        </div>
        {/* ################### */}
        {/* rest of the downbar */}
        <div className="h-[92vh] bg-black/0 flex flex-col">
          {/* the text */}
          <div className="flex-1  flex justify-center items-end text-5xl font-bold font-mono text-blue-950">
            Log In to Bokmarke{" "}
          </div>
          {/* sign Up form */}
          <div className="flex-1 flex flex-col items-center justify-center py-3  ">
            {googleError && (
              <div
                className={`w-[25%] mb-3 flex items-center justify-between gap-3 rounded-md border px-3 py-2 font-mono text-sm ${googleError.className}`}
              >
                <span>{googleError.message}</span>
                <button
                  className="cursor-pointer text-lg leading-none"
                  type="button"
                  aria-label="Dismiss Google sign-in error"
                  onClick={dismissGoogleError}
                >
                  ×
                </button>
              </div>
            )}
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
                forPassword={true}
                type="password"
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
                await userLoginController(
                  emailRef.current?.value ?? "s",
                  passwordRef.current?.value ?? "s",
                );
              }}
            >
              Login
            </div>
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
