<template>
  <ul class="sn-content">
    <li class="sn-content-list" v-for="(item, index) in contentList">
      <p class="sn-content-header">{{item.title}}</p>
      <div class="sn-content-msg">{{item.content}}</div>
      <Button type="primary" size="large" @click="goToDetail(item)">了解更多</Button>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'sncontent',
  data() {
    return {
      contentList: [
        {
          id: 1,
          title: "我是标题1",
          content: "我是内容1内容1内容1内容1内容1内容1内容1内容1"
        },
        {
          id: 2,
          title: "我是标题2",
          content: "我是内容2内容2内容2内容1内容1内容1内容1内容1"
        },
        {
          id: 3,
          title: "我是标题3",
          content: "我是内容3内容3内容3内容1内容1内容1内容1内容1"
        },
        {
          id: 4,
          title: "我是标题4",
          content: "我是内容4内容4内容4内容1内容1内容1内容1内容1"
        }
      ]
    }
  },
  methods: {
    goToDetail(item){
      console.log(item);
      this.$router.push({
        name: "detail"
      });
    }
  }
};
</script>
