<template>
  <div id="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img class="banner" :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    changePage(current) {
      //   console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    },
    async getBanner() {
      try {
        let res = await this.$http.get("/api/banner", { params: "" });
        this.items = res.data;
        console.log("图片资源", items);
      } catch (error) {}
    },
  },

  created() {
    this.getBanner();
  },
};
</script>
<style lang="stylus" scoped>
#index
    a
     .banner
       display block
       width 100%
       height 175px
</style>
