<template>
  <div class="mineStyle">
    <ul class="topInfo">
      <li>
        <img src alt />
        <span>姓名：</span>
        <span>{{name}}</span>
      </li>
      <li>头像:</li>
    </ul>
    <ul class="bottomInfo">
      <li v-for="item in mineArray" :key="item.label" @click="itemClick(item)">
        <span>{{item.label}}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "客户名称",
      mineArray: [
        { label: "商品收藏" },
        { label: "我的足记" },
        { label: "店铺收藏" },
        { label: "我的订单" },
        { label: "退出", type: "exit" }
      ]
    };
  },
  methods: {
    itemClick(item) {
      console.log(item.label);
      if ((item.type = "exit")) {
        this.$store.commit("setToken", "");
        localStorage.removeItem("token");
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.mineStyle {
  width: 95%;
  padding: 0 2.5%;
}

.topInfo {
  margin-bottom: 20px;
}

.bottomInfo li {
  margin-bottom: 10px;
  padding: 5px 0px;
  background-color: #efefef;
  position: relative;

  >i {
    position: absolute;
    right: 0px;
  }
}
</style>