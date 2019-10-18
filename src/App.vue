<template>
  <v-app>
    <v-app-bar app>
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
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>

