<template>
  <div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
    {{ model.username }}{{ model.password }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "账号",
            props: {
              placeholder: "请输入账号",
            },
            rules: {
              required: true,
            },
            // validating when blur
            trigger: "blur",
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
            },
            rules: {
              required: true,
            },
            // validating when blur
            trigger: "blur",
          },
          {
            type: "submit",
            label: "登录",
          },
        ],
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard", // classic fresh
      },
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try {
        let res = await this.$http.get("/api/login", { params: this.model });
        console.log(res);
        if (res.code == 0) {
          this.$store.commit("setToken", res.token);
          window.localStorage.setItem("token", res.token);
          this.$router.replace({
            path: "/bottomNav",
          });
        }
      } catch {}
    },
  },
  created() {
    if (this.$route.params) {
      this.model = this.$route.params;
    }
  },
};
</script>
<style lang="stylus" scoped></style>
