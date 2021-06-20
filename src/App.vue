<template>
  <div id="app">
    <NavBar />
    <div class="app-container">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
import "@/styles/base.scss";

import Vue from "vue";
import { Component } from "vue-property-decorator";
import NavBar from "@/components/navigation/NavBar.vue";

@Component({
  components: { NavBar }
})
export default class Application extends Vue {}
</script>
