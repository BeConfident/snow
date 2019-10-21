<template>
  <v-app>
    <v-navigation-drawer app>
      <drawer></drawer>
    </v-navigation-drawer>
    <v-app-bar class="d-block d-sm-block d-md-block d-lg-block d-xl-block" app>
      <appbar></appbar>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
     <app-footer></app-footer>
    </v-footer>

    <!--<v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>梦马</span>
        <span class="font-weight-light">户外</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank">
        <span class="mr-2">图片</span>
      </v-btn>
      <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank">
        <span class="mr-2">视频</span>
      </v-btn>
      <v-btn
              href="https://github.com/vuetifyjs/vuetify/releases/latest"
              target="_blank">
        <span class="mr-2">直播</span>
      </v-btn>
    </v-app-bar>
    <v-content>
      <HelloWorld/>
    </v-content>-->
  </v-app>
</template>

<script>
import Appbar from "./base/appbar.vue";
import AppFooter from "./base/appfooter.vue";
import Drawer from "./base/navigationdrawer.vue";
export default {
  name: 'App',
  components: {
    Appbar,
    AppFooter,
    Drawer
  },
  data: () => ({
    //
  }),
};
</script>

