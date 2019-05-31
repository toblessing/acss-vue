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

<template>
  <Layout>
    <Sider hide-trigger :style="{background: '#fff',minHeight: '990px'}">
      <Menu theme="light" width="auto" :open-names="['1']">
        <!-- 固定菜单院系 -->
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>院系
          </template>

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

          <template v-for="(area,index) in treeData.areas">
            <Submenu :key="[area,index]" :name="'2-'+index">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                {{area.areaname}}
              </template>

              <template v-for="(buiding,index2) in area.buidings">
                <Submenu :key="[buiding,index2]" :name="'2-'+index+'-'+index2">
                  <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    {{buiding.buidingname}}
                  </template>

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
        {{ getTreeData}}
        <router-view/>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      users: "",
      treeData: {
        departments: [
          {
            departmentname: "软件工程系",
            departmentid: "1",
            clazzs: [
              {
                clazzname: "java"
              }
            ],
            courses: [
              {
                courseid: "jj",
                coursename: "jkjl"
              }
            ],
            teaches: [
              {
                teachename: "jlkj",
                teacheid: "234"
              }
            ]
          }
        ],
        areas: [
          {
            areaname: "集美校区",
            areaid: "1",
            buidings: [
              {
                buidingname: "1号楼",
                buidingid: "1",
                rooms: [
                  {
                    roomid: "23",
                    romnumber: "202"
                  }
                ]
              }
            ]
          }
        ]
      }
    };
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
    },
    getTreeData() {
      var rr = {
        username:"aaa"
      };
      var readData=JSON.stringify(rr)
      Axios({
        method: "get",
        url: "/api/InitRead",
        headers: {"Content-Type": "application/json;charset=utf-8"},
        responseType: "json"
      })
        .then(response => (this.treeData = response.data))
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    }
  }
};
</script>