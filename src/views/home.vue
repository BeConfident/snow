<template>
  <v-container fluid>
    <v-row justify="space-around" v-for="(item,index) in items" :key="index">
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-img class="white--text align-end"  :src="item.src" max-height="500">
            <v-card-title>{{item.title}}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{item.subtitle}}</v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{item.text}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text @click="snackbar=true">
              分享
            </v-btn>
            <v-btn color="orange" text @click="toDetail(item.index)">
              了解更多
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'home',

    data() {
      return {

        items: [
          {
            index:1,
            src: 'one.jpg',
            title:'Top 10 Australian beaches',
            subtitle:'Number 10',
            text:'Whitsunday Island, Whitsunday Islands',
          },
          {
            index:2,
            src: 'two.jpg',
            title:'Top 10 Australian beaches',
            subtitle:'Number 10',
            text:'Whitsunday Island, Whitsunday Islands',
          },
          {
            index:3,
            src: 'three.jpg',
            title:'Top 10 Australian beaches',
            subtitle:'Number 10',
            text:'Whitsunday Island, Whitsunday Islands',
          },
          {
            index:4,
            src: 'four.jpg',
            title:'Top 10 Australian beaches',
            subtitle:'Number 10',
            text:'Whitsunday Island, Whitsunday Islands',
          },
        ]
      }
    },
    methods: {
      toDetail(index) {
        this.$router.push({
          name: "detail",
          query:{
            id:index
          }
        });
      },
    }
  };
</script>
