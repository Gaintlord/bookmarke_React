import { inputValidation } from "./inputValidation";
import { setAccessToken } from "../utils/accessTokenStore";
export const userLogin = async (
  email: string,
  password: string
): Promise<{
  status?: boolean;
  type: string;
  err: string;
}> => {
  const response = inputValidation(email, password);
  if (!response.status) {
    console.log("### inavliddddddddd #####");
    return {
      type: response.type,
      err: response.err,
    };
  } else {
    const response = await fetch("http://localhost:8081/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
      credentials: "include",
    });

    const resJson = await response.json();

    if (resJson.status) {
      console.log("## user logined in  ##");
      setAccessToken(resJson.accessToken);
      return {
        status: true,
        type: "loged in successfull",
        err: "none",
      };
    } else {
      return {
        type: "Login error",
        err: "Invalid Request",
      };
    }
  }
};
