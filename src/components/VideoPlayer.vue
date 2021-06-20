<template>
  <div class="video-player-wrapper">
    <div class="iframe-wrapper res-16by9">
      <iframe
        width="560"
        height="315"
        :src="videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class VideoPlayer extends Vue {
  @Prop({ required: true })
  private videoUrl!: string;
}
</script>

<style lang="scss" scoped>
.video-player-wrapper {
  margin: 16px 4px;
}
.iframe-wrapper {
  width: 100%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.res-16by9 {
  padding-bottom: 56.25%;
}
</style>
