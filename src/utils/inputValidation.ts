export const inputValidation = (
  email: string,
  password: string
): {
  status: boolean;
  type: string;
  err: string;
} => {
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
  const smRegex = /[a-z]/;
  const cpRegex = /[A-Z]/;
  const numRegex = /[0-9]/;
  const charRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/;

  switch (true) {
    case !emailRegex.test(email):
      return {
        status: false,
        type: "email",
        err: "invalid Email",
      };

    case password.length < 9:
      return {
        status: false,
        type: "password",
        err: "Password should be 9 character",
      };

    case !smRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain small letter ",
      };
    case !cpRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain capital letter ",
      };
    case !numRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain a number",
      };
    case !charRegex.test(password):
      return {
        status: false,
        type: "password",
        err: "password must contain a special character ",
      };

    default:
      return {
        status: true,
        type: "none",
        err: "none",
      };
  }
};
