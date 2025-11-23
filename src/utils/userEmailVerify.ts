import { setAccessToken } from "./accessTokenStore";

export const UserEmailVerify = async (email: string, otp: string) => {
  if (otp.length == 6) {
 

    console.log("  ## ");
    const response = await fetch(
      `http://localhost:8081/api/v1/email-verify?userEmail=${email}&otp=${otp}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const jsonRes = await response.json();

    if (jsonRes.status == true) {
      setAccessToken(jsonRes.accessToken);
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
