import { apiUrl } from "./apiConfig";

export const GoogleAuth = () => {
  window.location.assign(apiUrl("/api/v1/auth/google"));
};
