import axios from "axios";

export const apiProjects = axios.create({
  baseURL: "http://localhost:3000",
});
