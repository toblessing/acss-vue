<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.title{
  margin: 20xp 20xp;

}
</style>

<template>

      <Layout>
        <Sider hide-trigger :style="{background: '#fff',minHeight: '990px'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
         <h1 :style="{margin:'20px 20px'}">{{currentTitle}}</h1>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {
    currentTitle(){
      return this.$route.meta.title
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
};</script>