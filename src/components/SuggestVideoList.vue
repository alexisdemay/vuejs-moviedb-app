<template>
  <div class="video-list-wrapper">
    <p>Nombre de résultat : {{ hasResult() ? moviesResult.total_results : 0 }}</p>
    <div v-if="hasResult()">
      <ul>
        <li v-for="(element, index) in moviesResult.results" :key="index">
          <suggest-video :title="element.title" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State } from "vuex-class";
import { RootState } from "@/models/state/RootState";
import { ISearchResult } from "@/models/search/ISearchResult";
import { IMovieResult } from "@/models/search/IMovieResult";
import SuggestVideo from "@/components/SuggestVideo.vue";

@Component({
  components: {
    "suggest-video": SuggestVideo
  }
})
export default class SuggestVideosList extends Vue {
  @State((state: RootState) => state.movies.moviesResult)
  private moviesResult!: ISearchResult<IMovieResult>;

  public hasResult(): boolean {
    return this.moviesResult && this.moviesResult.total_results !== undefined && this.moviesResult.total_results > 0;
  }
}
</script>

<style lang="scss" scoped>
.video-list-wrapper {
  padding: 6px;
}
</style>
