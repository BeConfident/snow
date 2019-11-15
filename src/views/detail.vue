<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card :loading="loading" class="mx-auto my-12">
          <v-img height="250" src="one.jpg" ></v-img>
          <v-card-title>京亚路线</v-card-title>
          <v-card-text>
            <v-row
                    align="center"
                    class="mx-0"
            >
              <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
              ></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1 black--text">
              冰雪，滑雪场，啤酒，冰雕
            </div>
            <div>亚布力滑雪旅游度假区是国家AAAA级景区，位于黑龙江省哈尔滨市尚志市亚布力镇西南20公里，距哈尔滨市240公里，距雪乡88公里，距牡丹江市120公里，301国道支线直达景区。度假区由长白山脉张广才岭的三座山峰组成，即海拔1374.8米的主峰大锅盔山、海拔1258米的二锅盔山、海拔1000米的三锅盔山。</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title> 套餐类型</v-card-title>

          <v-card-text>
            <v-chip-group
                    v-model="selection"
                    active-class="blue accent-4 white--text"
                    column
            >
              <v-chip>哈尔滨-雪乡</v-chip>

              <v-chip>雪乡-二道白河长白山</v-chip>

              <v-chip>二道白河长白山-雾凇岛</v-chip>

              <v-chip>雾凇岛-雪谷</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <v-icon
                    large
                    left
            >
              mdi-twitter
            </v-icon>
            <span class="title font-weight-light">路线</span>
          </v-card-title>
          <v-timeline :reverse="reverse" dense>
            <v-timeline-item
                    v-for="item in items" :key="item.index">
              <v-card class="elevation-2">
                <v-card-title class="headline">{{item.title}}</v-card-title>
                <v-card-text>{{item.text}}</v-card-text>
                <v-img class="white--text align-end"  :src="item.src" max-height="500"></v-img>
              </v-card>
            </v-timeline-item>
          </v-timeline>

        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-toolbar dark color="grey lighten-5">
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="primary" dark>
            <v-icon dark left>mdi-face-woman</v-icon>客服
          </v-btn>

          <v-btn class="ma-2" color="primary" dark>
            <v-icon dark left>mdi-store-24-hour</v-icon>店铺
          </v-btn>

          <v-btn class="ma-2" color="primary" dark>
            <v-icon dark left>mdi-hand-heart</v-icon>收藏
          </v-btn>
          <v-btn class="ma-2" color="primary" dark>
            <v-icon dark left>mdi-cart</v-icon>拼团
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>


</template>


<script>
  export default {
    name: "detail",
    created() {
      console.log(this.$route.query);
    },
    data() {
      return {
        items: [
          {
            title:'哈尔滨-雪乡',
            text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            src:'one.jpg'
          },
          {
            title:'雪乡-二道白河长白山',
            text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            src:'two.jpg'
          },
          {
            title:'二道白河长白山-雾凇岛',
            text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            src:'three.jpg'
          },
          {
            title:'雾凇岛-雪谷',
            text:'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
            src:'four.jpg'
          }
        ]
      }
    }
  }
</script>
