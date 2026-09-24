export let accessToken: string = "";

export const setAccessToken = (recievedToken: string) => {
  accessToken = recievedToken;
  localStorage.setItem("accessToken", recievedToken);
};
export const getAccessToken = () => {
  if (accessToken) return accessToken;
  return localStorage.getItem("accessToken") ?? "";
};
export const clearAccessToken = () => {
  accessToken = "";
  localStorage.removeItem("accessToken");
};
