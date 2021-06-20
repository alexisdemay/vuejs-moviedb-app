import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { MoviesState } from "@/models/state/MoviesState";
import { ISearchResult, SearchResult } from "@/models/search/ISearchResult";
import { IMovieResult } from "@/models/search/IMovieResult";

@Module
export default class MoviesModule extends VuexModule implements MoviesState {
  public moviesResult: ISearchResult<IMovieResult> = new SearchResult<IMovieResult>();

  @Mutation
  public updateMoviesResult(moviesResult: ISearchResult<IMovieResult>) {
    this.moviesResult = moviesResult;
  }
}
