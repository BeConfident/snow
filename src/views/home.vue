<template>
  <div class="sn-home">
    <sn-header></sn-header>
    <div class="sn-main">
      <sn-content></sn-content>
      <sn-footer></sn-footer>
    </div>
  </div>
</template>

<script>
import snHeader from './base/snheader.vue';

import snContent from './base/sncontent.vue';

import snFooter from './base/snfooter.vue';

export default {
  name: 'home',
  components: {
    snHeader,
    snContent,
    snFooter,
  },
};
</script>
<style lang="less" scoped>
.sn-home {
  width: 100%;
  height: 100%;
  .sn-main {
    height: calc(~"100% - 50px");
    overflow-y: auto;
  }
}
</style>
