<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 700px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header :style="{width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1" to="/home">
              <Icon type="ios-navigate"></Icon>教学资源管理
            </MenuItem>
            <MenuItem name="2" to="/arranging">
              <Icon type="ios-keypad"></Icon>手动排课
            </MenuItem>
            <MenuItem name="3" to="/autoArranging">
              <Icon type="ios-analytics"></Icon>自动排课
            </MenuItem>
            <MenuItem name="4" to="/show">
              <Icon type="ios-paper"></Icon>查看课表
            </MenuItem>
            <MenuItem name="5" to="/self">
              <Icon type="ios-paper"></Icon>我的资料
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <router-view/>
    </Layout>
  
  </div>
</template>
<script>
import Cookie from "js-cookie";

export default {
  data() {
    return { school: "", reShowM: false };
  },
  methods: {

  },
  computed: {

    currentTitle() {
      return this.$route.meta.title;
    },
    BreadcrumbItemList() {
      var pathList = this.$route.path.split("/");
      var result = [];
      pathList.forEach(element => {
        if (element && element.length != 0) {
          result.push(element);
        }
      });
      return result;
    }
  }
};
</script>
