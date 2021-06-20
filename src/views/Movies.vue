<template>
  <div class="movies-containers">
    <h1>Movies</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Movies extends Vue {}
</script>

<style lang="scss" scoped>
.movies-containers {
  padding: 24px;
}
</style>
