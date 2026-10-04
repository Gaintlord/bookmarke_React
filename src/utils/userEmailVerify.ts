import { apiUrl } from "./apiConfig";

export const UserEmailVerify = async (email: string, otp: string) => {
  if (otp.length == 6) {
    const response = await fetch(
      apiUrl(`/api/v1/email-verify?userEmail=${email}&otp=${otp}`),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    );

    const jsonRes = await response.json();

    if (jsonRes.status) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
