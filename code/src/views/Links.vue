<template>
  <div class="links_root">
    <p>Links</p>
    <div class="links_links">
      <p>
        Bitbucket
        <a href="https://bitbucket.org/Rockhopper-Penguin/"
          >rockhopper-penguin</a
        >
      </p>
      <p>
        connpass
        <a href="https://connpass.com/user/rockhopper-penguin/">瀬戸秀輔</a>
      </p>
      <p>
        Doorkeeper：
        <a href="https://www.doorkeeper.jp/users/penguin">瀬戸秀輔</a>
      </p>
      <p>
        FaceBook：
        <a href="https://www.facebook.com/penguin.s.seto">瀬戸秀輔</a>
      </p>
      <p>
        GitHub：
        <a href="https://github.com/rockhopper-penguin">Rockhopper-Penguin</a>
      </p>
      <p>
        Qiita：
        <a href="https://qiita.com/rockhopper-penguin">@rockhopper-penguin</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Links extends Vue {}
</script>

<style>
.links_root {
  width: 70%;
  margin: auto;
}

.links_links p {
  text-align: left;
}
</style>
