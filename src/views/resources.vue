<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.title {
  margin: 20xp 20xp;
}
</style>

<script>
import Axios from "axios";
var vue = {
  data() {
    return {
      users: "",
      treeData: {},
      isInitData: false
    };
  },
  methods: {
    addDepartment() {},
    addClazz() {},
    addCourse() {},
    addTeache() {},
    addArea() {},
    addBuiding() {},
    addRoom() {},
    initReadSuccess(data) {
      if (data.success) {
        this.treeData = data.data;
        this.isInitData = false;
      } else {
        if (data.msg == "请登录") {
          this.$router.push("/login");
        }
      }
    }
  },
  computed: {
    currentTitle() {
      return this.$route.meta.title;
    }
  },
  created: function() {
    this.isInitData = true;
    Axios({
      method: "get",
      url: "/api/InitRead"
      // headers: { "Content-Type": "application/json;charset=utf-8" }
    }).then(response => this.initReadSuccess(response.data));
  }
};

export default vue;
</script>
<template>
  <Layout>
    
    <Sider hide-trigger :style="{background: '#fff',minHeight: '990px',minWidth:'300px'}">
      <Menu theme="light" width="auto" >
        <Spin size="large" fix v-if="isInitData"></Spin>

        <!-- 固定菜单院系 -->
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>院系
          </template>

          <MenuItem :name="'1--1'">
            <Button :style="{width: '100%'}" @click.stop="addDepartment" type="dashed">+</Button>
          </MenuItem>

          <template v-for="(depa,index) in treeData.departments">
            <Submenu :key="[depa,index]" :name="'1-'+index">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{depa.departmentname}}
              </template>

              <!-- 固定菜单班级 -->
              <Submenu :key="[depa,index]" :name="'1-'+index+'-1'">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>班级
                </template>

                <MenuItem :name="'1-'+index+'-1--1'">
                  <Button :style="{width: '100%'}" @click.stop="addClazz" type="dashed">+</Button>
                </MenuItem>
                <template v-for="(clazz,index1) in depa.clazzs">
                  <MenuItem
                    :key="[clazz,index1]"
                    :name="'1-'+index+'-1-'+index1"
                  >{{clazz.clazzname}}</MenuItem>
                </template>
              </Submenu>

              <!-- 固定菜单课程 -->
              <Submenu :key="[depa,index]" :name="'1-'+index+'-2'">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>课程
                </template>

                <MenuItem :name="'1-'+index+'-2--1'">
                  <Button :style="{width: '100%'}" @click.stop="addCourse" type="dashed">+</Button>
                </MenuItem>
                <template v-for="(course,index2) in depa.courses">
                  <MenuItem
                    :key="[course,index2]"
                    :name="'1-'+index+'-2-'+index2"
                  >{{course.coursename}}</MenuItem>
                </template>
              </Submenu>

              <!-- 固定菜单教师 -->
              <Submenu :key="[depa,index]" :name="'1-'+index+'-3'">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>教师
                </template>

                <MenuItem :name="'1-'+index+'-3--1'">
                  <Button :style="{width: '100%'}" @click.stop="addTeache" type="dashed">+</Button>
                </MenuItem>
                <template v-for="(teache,index3) in depa.teaches">
                  <MenuItem
                    :key="[teache,index3]"
                    :name="'1-'+index+'-3-'+index3"
                  >{{teache.teachename}}</MenuItem>
                </template>
              </Submenu>
            </Submenu>
          </template>
        </Submenu>

        <!-- 固定菜单校区 -->
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>校区
          </template>

          <MenuItem :name="'2--1'">
            <Button :style="{width: '100%'}" @click.stop="addArea" type="dashed">+</Button>
          </MenuItem>
          <template v-for="(area,index) in treeData.areas">
            <Submenu :key="[area,index]" :name="'2-'+index">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                {{area.areaname}}
              </template>

              <MenuItem :name="'2-'+index+'--1'">
                <Button :style="{width: '100%'}" @click.stop="addBuiding" type="dashed">+</Button>
              </MenuItem>

              <template v-for="(buiding,index2) in area.buidings">
                <Submenu :key="[buiding,index2]" :name="'2-'+index+'-'+index2">
                  <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    {{buiding.buidingname}}
                  </template>

                  <MenuItem :name="'2-'+index+'-'+index2+'--1'">
                    <Button :style="{width: '100%'}" @click.stop="addRoom" type="dashed">+</Button>
                  </MenuItem>

                  <template v-for="(room,index3) in buiding.rooms">
                    <MenuItem
                      :key="[room,index3]"
                      :name="'2-'+index+'-'+index2+'-'+index3"
                    >{{room.romnumber}}</MenuItem>
                  </template>
                </Submenu>
              </template>
            </Submenu>
          </template>
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
