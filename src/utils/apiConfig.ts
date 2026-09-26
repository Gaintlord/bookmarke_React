export const API_BASE_URL = (import.meta.env.VITE_BACKEND_DOMAIN ?? "").replace(
  /\/+$/,
  "",
);

export const apiUrl = (path: string) => `${API_BASE_URL}${path}`;
