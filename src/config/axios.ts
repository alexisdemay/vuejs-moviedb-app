import axios, { AxiosInstance } from "axios";
import { MOVIE_DB_API_URL } from "@/constants";

const instance: AxiosInstance = axios.create();

instance.defaults.baseURL = `${MOVIE_DB_API_URL}`;

export default instance;
