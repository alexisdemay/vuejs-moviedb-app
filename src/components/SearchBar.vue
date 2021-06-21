<template>
  <div class="input-group input-group">
    <input
      type="text"
      class="form-control"
      :placeholder="$t('searchBar.searchPlaceholder')"
      @keyup.enter.prevent="launchSearch()"
      v-model="searchText"
    />
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" @click.prevent="launchSearch()">
        <b-icon-search />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Inject } from "vue-property-decorator";
import MoviesService from "@/services/MoviesService";
import { Local } from "@/models/Local";
import { EMPTY_STRING } from "@/constants";
import { IMovieResult } from "@/models/search/IMovieResult";
import { ISearchResult } from "@/models/search/ISearchResult";
import { Mutation } from "vuex-class";

@Component({})
export default class SearchBar extends Vue {
  @Inject("moviesService")
  private moviesService!: () => MoviesService;

  @Mutation("updateMoviesResult")
  private updateMoviesResult!: (moviesResult: ISearchResult<IMovieResult>) => void;

  private searchText: string = EMPTY_STRING;

  private async launchSearch(): Promise<void> {
    if (!this.searchText) return;
    try {
      const response = await this.moviesService().searchByQuery(Local.FR, 1, true, this.searchText);
      this.updateMoviesResult(response.data);
    } catch (error) {
      console.error(error);
    }
    this.searchText = EMPTY_STRING;
  }
}
</script>

<style lang="scss" scoped></style>
