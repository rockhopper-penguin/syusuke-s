<template>
  <div class="about">
    <Profile></Profile>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "@/components/Profile.vue";

@Component({
  components: {
    Profile
  }
})
export default class About extends Vue {}
</script>
