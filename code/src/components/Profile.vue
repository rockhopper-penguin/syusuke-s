<template>
  <div>
    <div>
      <strong>You can get the json data at cURL!</strong>
      <p id="json_url">
        curl
        <a href="https://us-central1-syusuke-s.cloudfunctions.net/api/data"
          >https://us-central1-syusuke-s.cloudfunctions.net/api</a
        >
      </p>
    </div>
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
    try {
      const res = await axios
        .get("./json/introduction.json")
        .then((response) => {
          this.getJson = response.data;
        });
    } catch (e) {
      this.getJson = ["データ取得エラー！", e];
    }
  }
}
</script>

<style>
#json_url {
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin: 10px auto 10px;
  box-shadow: 0px 0px 10px gray;
}
#json_url a {
  color: white;
}
</style>
