<template>
  <div class="music-container">
    <div class="row">
      <div class="col-6">
        <SearchBar />
        <VideoPlayer :video-url="initialVideo" />
      </div>
      <div class="col-6">
        <SuggestVideoList />
      </div>
    </div>
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
export default class Music extends Vue {
  private initialVideo = "https://www.youtube-nocookie.com/embed/uidGwfo-yE8";
}
</script>

<style lang="scss" scoped>
.music {
  &-container {
    padding: 24px;
  }
}
</style>
