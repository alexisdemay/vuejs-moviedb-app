<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :active-class="'active'" :to="{ path: '/music' }" @click.native="updateSelectedTab(Tab.MOVIES)">
            {{ $t("navBar.titleMusicMenu") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :active-class="'active'" :to="{ path: '/movies' }" @click.native="updateSelectedTab(Tab.MOVIES)">
            {{ $t("navBar.titleMoviesMenu") }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :active-class="'active'"
            :to="{ path: '/tv-shows' }"
            @click.native="updateSelectedTab(Tab.TV_SHOWS)"
          >
            {{ $t("navBar.titleTvShowsMenu") }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import { RootState } from "@/models/state/RootState";
import { Tab } from "@/models/Tab";

@Component({})
export default class NavBar extends Vue {
  @State((state: RootState) => state.application.selectedTab)
  private selectedTab!: Tab;

  @Mutation("updateSelectedTab")
  private updateSelectedTab!: (newSelectedTab: Tab) => void;

  public get Tab() {
    return Tab;
  }
}
</script>

<style scoped></style>
