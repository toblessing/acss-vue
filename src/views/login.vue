<style scoped>
#card {
  width: 900px;
  height: 600px;
  justify-content: center;
}
.item-center-vh {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: -webkit-fill-available;
}
.item-row {
  margin: 40px 0px;
}
.title {
  font-size: 42px;
  margin: 40px 0px;
}
.but {
  width: 130px;
  margin: 0px 20px;
}
</style>

<script>
import Axios from "axios";
import { truncate } from "fs";
import { isIP } from "net";

export default {
  data() {
    return {
      username: "",
      password: "",
      repassword: "",
      isRegister: false,
      title: "自动排课系统登录",
      spinShow: false,
      school: ""
    };
  },
  methods: {
    login() {
      if (this.isRegister) {
        this.title = "自动排课系统登录";
        this.isRegister = false;
      } else {
        this.spinShow = true;
        Axios({
          method: "post",
          url: "/api/login",
          data: JSON.stringify({
            username: this.username,
            password: this.password
          }),
          headers: { "Content-Type": "application/json;charset=utf-8" },
          responseType: "json"
        })
          .then(result => this.loginSuccess(result.data))
          .catch(function(error) {
            // 请求失败处理
            console.log(error);
          });
      }
    },
    register() {
      if (this.isRegister) {
        if (this.school == "") {
          this.error("学校不能为空");
        } else if (this.password != this.repassword) {
          this.error("两次输入的密码不一样！");
        } else if (!/([a-zA-Z0-9]){3,32}/.test(this.username)) {
          this.error("用户名只能是不超过32位的字母数字！");
        } else if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,18}$/.test(
            this.password
          )
        ) {
          this.error("密码必须有大写字母、小写字母、数字，并且不小于6位！");
        } else {
          this.spinShow = true;
          Axios({
            method: "post",
            url: "/api/register",
            data: JSON.stringify({
              username: this.username,
              password: this.password,
              school:this.school
            }),
            headers: { "Content-Type": "application/json;charset=utf-8" },
            responseType: "json"
          })
            .then(response => this.registerSucess(response.data))
            .catch(error => this.error(errpr));
        }
      } else {
        this.title = "自动排课系统注册";
        this.isRegister = true;
      }
    },
    registerSucess(data) {
      this.spinShow = false;
      if (data.success) {
        this.isRegister = false;
        this.success(data.msg);
      } else {
        this.error(data.msg);
      }
    },
    loginSuccess(data) {
      this.spinShow = false;
      if (data.success) {
        this.$router.push("/home");
      }
    },
    success(msg) {
      this.$Message.success(msg);
    },
    warning(msg) {
      this.$Message.warning(msg);
    },
    error(msg) {
      this.$Message.error(msg);
    }
  },
  computed: {
    currentTitle() {
      return this.$route.meta.title;
    }
  }
};
</script>
<template>
  <div class="item-center-h" style="height:1000px">
    <Spin size="large" fix v-if="spinShow"></Spin>
    <div class="item-center-vh" style="height:1000px">
      <Card shadow="true" id="card">
        <div class="item-center-vh">
          <h1 class="title">{{title}}</h1>
        </div>
        <div class="item-center-vh item-row" style="margin-top:30px">
          <Input
            prefix="ios-contact"
            size="large"
            v-model="username"
            placeholder="用户名"
            style="width:300px"
          />
        </div>
        <div class="item-center-vh item-row">
          <Input
            type="password"
            v-model="password"
            prefix="ios-lock-outline"
            size="large"
            placeholder="密码"
            style="width:300px"
          />
        </div>
        <div class="item-center-vh item-row" v-if="isRegister">
          <Input
            type="password"
            v-model="repassword"
            prefix="ios-lock-outline"
            size="large"
            placeholder="再次输入密码"
            style="width:300px"
          />
        </div>
        <div class="item-center-vh item-row" v-if="isRegister">
          <AutoComplete
            v-model="school"
            :data="data1"
            @on-search="handleSearch1"
            placeholder="学校名称"
            style="width:300px"
          ></AutoComplete>
        </div>
        <div class="item-center-vh item-row">
          <Button class="but" size="large" @click="login" type="success">登录</Button>

          <Button class="but" size="large" @click="register" type="info">注册</Button>
        </div>
      </Card>
    </div>
  </div>
</template>
