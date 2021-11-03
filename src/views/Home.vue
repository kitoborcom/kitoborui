<template>
  <div class="home">
    <div class="container col-12 col-sm-6 col-lg-4">
      <bot-list />
    </div>
    <hr />
    <!-- <img alt="Kitobor logo" src="../assets/kitobor-logo.png" width="450px" class="my-5" /> -->
    <div alt="Kitobor logo" class="logo-svg my-5 mx-auto" />
    <div>
      <h1>Welcome to the Kitobor UI</h1>
    </div>
    <div>This page allows you to control your trading bot.</div>
    <br />

    <p>Have fun - <i>wishes you the Kitobor team</i></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BotList from '@/components/BotList.vue';

@Component({
  components: { BotList },
})
export default class Home extends Vue {}
</script>

<style scoped>
.home {
  margin-top: 1.5em;
}
.logo-svg {
  -webkit-mask: url(../assets/kitobor-logo-mask.png) no-repeat center;
  mask: url(../assets/kitobor-logo-mask.png) no-repeat center;
  mask-size: contain;
  width: 250px;
  height: 250px;
}
</style>
