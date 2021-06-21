import { Local } from "@/models/Local";
import { AxiosInstance, AxiosPromise } from "axios";
import { ISearchResult } from "@/models/search/ISearchResult";
import { IMovieResult } from "@/models/search/IMovieResult";
import BaseService from "@/services/BaseService";
import { movieDbApiInstance } from "@/config/axios";

export default class MoviesService extends BaseService {
  private static readonly ENDPOINT_SEARCH_MOVIES = "/search/movie";
  private static readonly ENDPOINT_TOP_RATED = "/movie/top_rated";

  private client: AxiosInstance;

  constructor() {
    super();
    this.client = movieDbApiInstance;
  }

  public getTopRated(page = 1, language: Local = Local.FR, region = "FR"): AxiosPromise<ISearchResult<IMovieResult>> {
    const params = {
      params: {
        language,
        page,
        region
      }
    };
    return this.client.get(MoviesService.ENDPOINT_TOP_RATED, params);
  }

  public searchByQuery(
    language: Local = Local.FR,
    page: number,
    includeAdult: boolean,
    query: string
  ): AxiosPromise<ISearchResult<IMovieResult>> {
    const params = {
      params: {
        language,
        page,
        include_adult: includeAdult,
        query
      }
    };
    return this.client.get(MoviesService.ENDPOINT_SEARCH_MOVIES, params);
  }
}
