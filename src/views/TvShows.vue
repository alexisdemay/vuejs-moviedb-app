<template>
  <div class="tv-shows-container">
    <h1>Tv Shows</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class TvShows extends Vue {}
</script>

<style lang="scss" scoped>
.tv-shows {
  &-container {
    padding: 24px;
  }
}
</style>
