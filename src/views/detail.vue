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


          <v-btn  outlined fab small class="ma-2" color="primary" dark>
            <v-icon dark top>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn fab small class="ma-2" color="primary" dark>
            <v-icon dark top>mdi-face-woman</v-icon>
          </v-btn>

          <v-btn fab small class="ma-2" color="primary" dark>
            <v-icon dark top>mdi-store-24-hour</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn  rounded outlined min-width="200px" class="ma-2" color="deep-orange darken-3" dark>
            <v-icon dark top>mdi-hand-heart</v-icon>收藏
          </v-btn>
          <v-btn rounded min-width="200px" class="ma-2" color="deep-orange darken-3" dark @click="doPay">
            <v-icon dark top>mdi-cart</v-icon>拼团
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>


</template>


<script>
  export default {
    name: "detail",
    methods:{
      doPay(){
        this.$router.push({
          name: "pay"
        });
      }
    },
    data() {
      return {
        selection: 1,
        reverse: false,
        loading:false,
        items: [
          {
            title:'暗影冲刺',
            text:'裂魂人盯紧一个敌方单位，开始无视一切物体的冲刺。途中经过的所有敌方单位和目标单位都将受到巨力重击。如果目标单位在到达前死亡了，裂魂人将他的目标改为原路径上最近的一个敌方单位。',
            src:'one.jpg'
          },
          {
            title:'威吓',
            text:'裂魂人获得移动速度和状态抗性加成，在敌人之间横冲直撞。可以在冲刺期间使用。',
            src:'two.jpg'
          },
          {
            title:'巨力重击',
            text:'攻击时有一定概率眩晕并击退敌方单位。重击的伤害值为移动速度的一定百分比。',
            src:'three.jpg'
          },
          {
            title:'幽冥一击',
            text:'裂魂人遁入幽冥领域，从不幸的目标身旁再次出现，发动当前等级的巨力重击并造成额外伤害。击退距离为平常的两倍。',
            src:'four.jpg'
          }
        ]
      }
    }
  }
</script>
