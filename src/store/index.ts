import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "@/models/state/RootState";
import ApplicationModule from "@/store/module/application";
import MoviesModule from "@/store/module/movies";
import TvShowsModule from "@/store/module/series";

Vue.use(Vuex);

const store = new Vuex.Store<RootState>({
  modules: {
    application: ApplicationModule,
    movies: MoviesModule,
    tvShows: TvShowsModule
  }
});

export default store;
