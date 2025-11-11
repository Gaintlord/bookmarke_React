import { setAccessToken } from "./accessTokenStore";

export const UserEmailVerify = async (email: string, otp: string) => {
  if (otp.length == 6) {
    const query = new URLSearchParams({
      userEmail: email,
      otp: otp,
    });

    console.log("  ## ");
    const response = await fetch(
      `http://localhost:8081/api/v1/email-verify?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const jsonRes = await response.json();

    console.log(jsonRes);
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
