import { ApplicationState } from "@/models/state/ApplicationState";
import { MoviesState } from "@/models/state/MoviesState";
import { TvShowsState } from "@/models/state/TvShowsState";

export interface RootState {
  application: ApplicationState;
  movies: MoviesState;
  tvShows: TvShowsState;
}
