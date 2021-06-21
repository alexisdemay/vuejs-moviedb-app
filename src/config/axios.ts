import axios, { AxiosInstance } from "axios";
import { MOVIE_DB_API_KEY, MOVIE_DB_API_URL } from "@/constants";

export const movieDbApiInstance: AxiosInstance = axios.create({
  baseURL: `${MOVIE_DB_API_URL}`,
  headers: {
    Authorization: `Bearer ${MOVIE_DB_API_KEY}`,
    "Content-Type": "application/json;charset=utf-8"
  }
});
