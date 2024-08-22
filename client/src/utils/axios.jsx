import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8888/", // api url
  baseURL: "https://prodigy-fs-01-1.onrender.com", // api url

  withCredentials: true,
});

export default instance;
