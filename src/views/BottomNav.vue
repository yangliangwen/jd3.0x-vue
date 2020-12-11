<template>
  <div>
    <router-view />
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="botnav"
    >
    </cube-tab-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: "Vip",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home",
        },
        {
          label: "分类页",
          icon: "cubeic-tag",
        },
        {
          label: "搜索",
          icon: "cubeic-search",
        },
        {
          label: "购物车",
          icon: "cubeic-mall",
        },
        {
          label: "我的",
          icon: "cubeic-person",
        },
      ],
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
    },
  },
};
</script>
<style lang="stylus" scoped>
.cube-tab-bar.botnav
        position fixed
        bottom 0
        left 0
        z-index 1000
        width 100%
        background #ffffff
        .cube-tab div
           font-size 16px
           pading-top 3px
        i
           font-size 20px
</style>
