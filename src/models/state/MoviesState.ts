import { ISearchResult } from "@/models/search/ISearchResult";
import { IMovieResult } from "@/models/search/IMovieResult";

export interface MoviesState {
  moviesResult: ISearchResult<IMovieResult>
}
