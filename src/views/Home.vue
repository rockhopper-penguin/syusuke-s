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
    <div>
      <p>
        FaceBook：<a
          href="https://www.facebook.com/penguin.s.seto"
          target="_blank"
          >瀬戸 秀輔(penguin.s.seto)</a
        >
      </p>
      <p>
        GitHub：<a href="https://github.com/rockhopper-penguin" target="_blank"
          >Rockhopper-Penguin</a
        >
      </p>
      <p>
        Qiita：<a href="https://qiita.com/rockhopper-penguin" target="_blank"
          >@rockhopper-penguin
        </a>
      </p>
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
.home {
  width: 100%;
}

.home div {
  display: inline-block;
}

.home div:nth-of-type(2) {
  margin: 10px;
}

.penguin_icon_images {
  margin: 10px;
}
.penguin_icon_images img {
  width: 500px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 0px 20px gray;
}

@media screen and (max-width: 600px) {
  .penguin_icon_images img {
    width: 70%;
    height: auto;
  }
}
</style>
