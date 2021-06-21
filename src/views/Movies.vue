<template>
  <div class="movies-containers">
    <h1>Movies</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import SuggestVideoList from "@/components/SuggestVideoList.vue";
@Component({
  components: { SuggestVideoList, VideoPlayer, SearchBar }
})
export default class Movies extends Vue {}
</script>

<style lang="scss" scoped>
.movies-containers {
  padding: 24px;
}
</style>
