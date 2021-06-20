<template>
  <div>
    {{ title }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { EMPTY_STRING } from "@/constants";

@Component({})
export default class SuggestVideo extends Vue {
  @Prop({ default: EMPTY_STRING })
  private title!: string;
}
</script>

<style lang="scss" scoped></style>
