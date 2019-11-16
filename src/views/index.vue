<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center animated delay-1s bounceInLeft font-weight-black">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/logo.png" transition="scale-transition" width="40"/>
        梦马户外
      </div>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-icon>mdi-youtube</v-icon>
        <span class="mr-1">直播</span>
      </v-btn>
      <v-btn text @click="toLogin">
        <v-icon>mdi-glassdoor</v-icon>
        <span class="mr-1">登陆</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="primary" class="font-weight justify-center">
      <div class="white--text font-weight-light">
        <p class="text-center" style="margin-bottom: 0">Copyright © 2019 Mengma Inc. 保留所有权利。</p>
        <p class="text-center" style="margin-bottom: 0">京ICP备17061198号-3</p>
      </div>
    </v-footer>
  </v-app>

</template>
<script>
  export default {
    methods:{
      toLogin(){
        this.$router.push({
          name: "login",
        });
      }
    }
  }
</script>
