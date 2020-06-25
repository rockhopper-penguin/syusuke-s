<template>
  <div>
    <p>{{ getJson }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Profile extends Vue {
  private getJson: any[] = [];

  created() {
    this.getDatas();
  }

  private async getDatas() {
    const res = await axios.get("json/introduction.json").then((response) => {
      this.getJson = response.data;
    });
    console.log("getData ->", this.getJson);
  }
}
</script>

<style></style>
