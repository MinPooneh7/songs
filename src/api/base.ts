import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // cookiearo ham mifreste
});

export default axiosInstance;
