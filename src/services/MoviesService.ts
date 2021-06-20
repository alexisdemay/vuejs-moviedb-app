import { MOVIE_DB_API_KEY, MOVIE_DB_API_SEARCH_MOVIES } from "@/constants";
import { Local } from "@/models/Local";
import { AxiosInstance, AxiosPromise } from "axios";
import axiosInstance from "@/config/axios";
import { ISearchResult } from "@/models/search/ISearchResult";
import { IMovieResult } from "@/models/search/IMovieResult";

export default class MoviesService {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axiosInstance;
  }

  public searchMovies(language: Local, page: number, includeAdult: boolean, query: string): AxiosPromise<ISearchResult<IMovieResult>> {
    const params = {
      params: {
        api_key: MOVIE_DB_API_KEY,
        language: language,
        page: page,
        include_adult: includeAdult,
        query: query
      }
    };
    return this.axios.get(MOVIE_DB_API_SEARCH_MOVIES, params);
  }
}
