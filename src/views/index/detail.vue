<template>
  <div class="sn-detail">
    <div class="sn-detail-payBtn">
      <Button type="primary">拼团</Button>
    </div>
    <div class="sn-detail-main">
      <Steps :current="currentStep" direction="vertical">
        <Step :title="item.title" v-for="(item, index) in contentList" :key="index">
          <template slot="content">
            <div class="sn-detail-content">
              {{item.content}}
            </div>
          </template>
        </Step>
      </Steps>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      currentStep: 0,
      contentList: [
        {
          title: "01day",
          content: "路线行程"
        },
        {
          title: "09:30集合",
          content: "集合特点：苏丽式长途汽车站"
        },
        {
          title: "景点：率塞恩老城",
          content: "我们我们嘿哈"
        },
        {
          title: "景点：皮拉图死盯",
          content: "唉呀妈呀唉呀妈呀"
        }
      ]
    }
  },
  methods: {

  }
}
</script>
