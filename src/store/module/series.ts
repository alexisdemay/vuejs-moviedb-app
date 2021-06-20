import { Module, VuexModule } from "vuex-module-decorators";
import { TvShowsState } from "@/models/state/TvShowsState";

@Module
export default class TvShowsModule extends VuexModule implements TvShowsState {}
