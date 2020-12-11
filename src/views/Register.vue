<template>
  <div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
    账号 {{model.username}} 密码{{model.password}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "账号",
            props: {
              placeholder: "请输入账号"
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              type:'password',
              placeholder: "请输入密码"
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: "blur"
          },
          {
            type: "submit",
            label: "注册"
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard" // classic fresh
      }
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      // console.log("submit", this.model);
      this.$http.get("/api/register", { params: this.model }).then(res => {
        console.log(res);
        if (res.data.success) {
          console.log("注册页面传值", this.model);
          this.$router.push({
            name: "login",
            params: this.model
          });
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped></style>
