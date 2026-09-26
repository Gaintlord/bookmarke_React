import { inputValidation } from "./inputValidation";
import { apiUrl } from "./apiConfig";

export const userSignup = async (
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
    const response = await fetch(apiUrl("/api/v1/signup"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        userPassword: password,
      }),
    });

    const resJson = await response.json();
    // console.log(resJson.status);
    if (resJson.status) {
      return {
        status: true,
        type: "signup successfull",
        err: resJson.message,
      };
    } else {
      return {
        type: "email",
        err: "user exist",
      };
    }
  }
};
