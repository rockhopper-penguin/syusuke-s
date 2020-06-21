<template>
  <div class="home">
    <div class="penguin_icon_images">
      <img
        :src="homePenguinImage"
        v-on:mouseover="homePenguinImageOver"
        v-on:mouseleave="homePenguinImageRemove"
        alt="ペンギン"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private homePenguinImage = "img/king_and_rockhopper.jpg";

  private homePenguinImageOver() {
    this.homePenguinImage = "img/king.jpg";
  }
  private homePenguinImageRemove() {
    this.homePenguinImage = "img/king_and_rockhopper.jpg";
  }
}
</script>

<style>
.penguin_icon_images {
  margin: 10px;
}
.penguin_icon_images img {
  width: 500px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 0px 20px gray;
}
</style>
