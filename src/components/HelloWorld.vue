<template>
  <div class="main">
        <v-parallax
                height="600"
                dark
                :src="require('../assets/pic3.jpeg')"
        >
        </v-parallax>
    <v-bottom-sheet v-model="sheet" :fullscreen="true">
      <template v-slot:activator="{ on }">
        <div class="sheet-bottom">
          <div class="logo">
            MengMa<span class="logo-mini">outside</span>
          </div>
          <ul class="bottom-left">
            <li>联系方式：13000000000</li>
            <li>地址：北京市</li>
            <li>微信号：test</li>
          </ul>
        </div>

      </template>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: true
  }),
};
</script>
<style>
  .sheet-bottom{
    padding: 30px 10px;
    background: #292c2f;
    color:#fff;
    font-size: 18px;
  }
  .bottom-left{
    list-style: none;
  }
  .logo{
    font-size: 45px;
    color:#fff;
  }
  .logo-mini {
    margin-left:15px;
    font-size: 22px;
    color:#fff;
  }
</style>

