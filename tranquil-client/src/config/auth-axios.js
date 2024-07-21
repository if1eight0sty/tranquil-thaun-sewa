import { BASE_URL, _axios } from "./config";

export function authAxios() {
  _axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token") || "";
      config.baseURL = BASE_URL;
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  _axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        const token = _axios.get("/auth/refresh-token");
        localStorage.setItem("token", token);
      }
      return Promise.reject(error);
    }
  );

  return _axios;
}
