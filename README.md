# 项目页面与需要的API
* ## 登录界面
    提供用户登录的界面，要求有要检查用户名与密码是否符合要求，
    
    * ### **API:** /login

        登录的API,将sendData要求的数据传输到后台，获取登录信息

        **methed:** POST

        **sendData:**
        ```json
        {
            "username":"",
            "password":"",
            ....
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":{
                "username":"",
                "password":"",
                ....
            }
        }
        ```
* ## 注册页面
    提供用户注册账户，要求注册之前要检查用户名与密码是否符合规范，并且检查用户名是否已经存在。

    * ### **API:** /register
        注册的API，将sendData要求的数据传输到后台，获取注册信息

         **methed:** POST    

         **sendData:**
        ```json
        {
            "username":"",
            "password":"",
            ....
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":{
                "username":"",
                "password":"",
                ....
            }
        }
        ```
    * ### **API:** /checkUsername/{username}
        检查用户名是否存在的API，将用户名放入路径中，获取一个boolean信息

         **methed:** GET    

         **sendData:**
        
        无


        **resultData:**

        Boolean值
* ## 完善个人资料页面
    当用户刚刚注册，需要完善其他资料，比如所属学校，因为排课需要，还要录入学校的校区信息以及教学楼信息等等

     * ### **API:** /updateUserSchool
        修改或新建用户所属的学校，将sendData要求的数据传输到后台，获取修改后的信息

         **methed:** POST    

         **sendData:**
        ```json
        {
            "schoolname":"",
            ....
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":{
                "username":"",
                "password":"",
                ....
            }
        }
        ```
     * ### **API:** /searchSchool
        根据用户的输入搜索相关的学校，将sendData要求的数据传输到后台，获取相关的学校信息

         **methed:** POST    

         **sendData:**
        ```json
        {
            "schoolname":""
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                "schoolname",
                "schoolname",
                ....
            ]
        }
        ```
* ## 完善学校资料页面

     * ### **API:** /addArea
        添加当前用户所属学校的校区，将sendData要求的数据传输到后台，获取操作结果信息

         **methed:** POST    

         **sendData:**
        ```json
        {
            "areaList":[
                "areaname",
                "areaname",
                "areaname",
                ....
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /readArea
        读取当前用户所属学校的校区列表，将sendData要求的数据传输到后台，获取校区列表

         **methed:** GET

         **sendData:**
        ```json
        {

        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /deleteArea
        删除当前用户所属学校的一个或多个校区，将sendData要求的数据传输到后台，获取删除后的校区列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "areaList":[
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                ....
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /updateArea
        修改当前用户所属学校的一个或多个校区，将sendData要求的数据传输到后台，获取修改后的校区列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "areaList":[
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                ....
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                {
                    "areaid":"",
                    "areaname":"",
                    "schoolid":""
                },
                ....
            ]
        }
        ```

* ## 完善校区资料页面
     * ### **API:** /addBuilding
        添加一栋或多栋教学楼，将sendData要求的数据传输到后台，获取操作结果信息

         **methed:** POST    

         **sendData:**
        ```json
        {
            "BuildingList":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":"",

                }
                ....
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /readBuilding/{areaid}
        读取某个校区的教学楼，将校区id放到路径里面，获取教学楼列表

         **methed:** GET

         **sendData:**
        ```json
        {

        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /deleteBuilding
        删除一个或多个教学楼，将sendData要求的数据传输到后台，获取删除后的教学楼列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "BuildingList":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /updateBuilding
        修改一个或多个教学楼，将sendData要求的数据传输到后台，获取修改后的教学楼列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "BuildingList":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```
     * ### **API:** /extendBuilding
        从excel表格导入教学楼信息

         **methed:** POST

         **sendData:**
         
        excel文件

        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                {
                    "buildingid":"",
                    "buildingname":"",
                    "areaid":""
                },
                ....
            ]
        }
        ```