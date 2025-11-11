export let accessToken: string = "";

export const setAccessToken = (recievedToken: string) => {
  accessToken = recievedToken;
};
export const getAccessToken = () => {
  return accessToken;
};
export const clearAccessToken = () => {
  accessToken = "";
};
