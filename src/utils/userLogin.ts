import { inputValidation } from "./inputValidation";
import { setAccessToken } from "../utils/accessTokenStore";
import { apiUrl } from "./apiConfig";
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
    return {
      type: response.type,
      err: response.err,
    };
  } else {
    const response = await fetch(apiUrl("/api/v1/login"), {
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
      setAccessToken(resJson.accessToken);
      console.log("!!!!! message sent!!!!!");

      window.postMessage(
        {
          type: "set_tags",
          ac_tag: resJson.accessToken,
          dr_tag: resJson.dr_tag,
        },
        window.location.origin
      );

      return {
        status: true,
        type: "logged in",
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
