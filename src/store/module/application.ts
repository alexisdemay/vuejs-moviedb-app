import { Module, Mutation, VuexModule } from "vuex-module-decorators";
import { ApplicationState } from "@/models/state/ApplicationState";
import { Tab } from "@/models/Tab";

@Module
export default class ApplicationModule extends VuexModule implements ApplicationState {
  public selectedTab: Tab = Tab.MOVIES;

  @Mutation
  public updateSelectedTab(newSelectedTab: Tab) {
    this.selectedTab = newSelectedTab;
  }
}
