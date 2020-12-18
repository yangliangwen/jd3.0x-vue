<template>
  <div> 
    
    <!-- <transition :name="transtionName"> -->
        <router-view class="Router"></router-view>
    <!-- </transition> -->
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
      class="botnav"
    ></cube-tab-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transtionName: "slider-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类页",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label);
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      switch (label) {
        case "首页":
          this.$router.push({
            path: "/bottomNav/index"
          });
          break;
        case "分类页":
          this.$router.push({
            path: "/bottomNav/list"
          });
          break;
        case "搜索":
          this.$router.push({
            path: "/bottomNav/search"
          });
          break;
        case "购物车":
          this.$router.push({
            path: "/bottomNav/car"
          });
          break;
        case "我的":
          this.$router.push({
            path: "/bottomNav/mine"
          });
          break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.cube-tab-bar.botnav {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background: #ffffff;

  .cube-tab div {
    font-size: 16px;
    pading-top: 3px;
  }

  i {
    font-size: 20px;
  }
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.slider-left-enter, .slider-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slider-left-leave-active, .slider-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>
