# 项目页面与需要的API
* ## 登录界面
    提供用户登录的界面，要求有要检查用户名与密码是否符合要求，
    
    * ### **API:** /login

        登录的API,将sendData要求的数据传输到后台，获取登录信息

        **methed:** POST

        **sendData:**
        ```json
        {
            "id":"",
            "username":"",
            "password":"",
            "permission":"",
            "schoolid":""
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":{
                "id":"",
                "username":"",
                "password":"",
                "permission":"",
                "schoolid":""
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
            "id":"",
            "username":"",
            "password":"",
            "permission":"",
            "schoolid":""
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":{
                "id":"",
                "username":"",
                "password":"",
                "permission":"",
                "schoolid":""
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
                "id":"",
                "username":"",
                "password":"",
                "permission":"",
                "schoolid":""
            }
        }
        ```
     * ### **API:** /searchSchool
        搜索学校，根据用户的输入搜索相关的学校，将sendData要求的数据传输到后台，获取相关的学校信息列表

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
                "schoolname"
            ]
        }
        ```

* ## 全局API

    * ### **API** /add/{entity}
        添加一个或多个实体，将要添加的实体放入`entityList`中，并未返回添加后的对应实体列表，`{entity}` 表示要添加的实体类名称
         **methed:** POST    

         **sendData:**
        ```json
        {
            "entityList":[
                {},
                {},
                {}
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {},
                {},
                {}
            ]
        }
        ```
        
     * ### **API:** /read/{entity}/{regex}
        读取一个或多个实体，并返回其对应的列表，`{entity}` 表示要读取的实体类名称，`{regex}` 是一个正则表达式，读取的列表是根据这个正则表达式进行匹配，若是匹配这个表达式，才被包含在返回列表里面。

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
                {},
                {},
                {}
            ]
        }
        ```
     * ### **API:** /delete/{entity}
        删除一个或多个实体，将要删除的实体放入`entityList`中，并且返回其删除后的列表，`{entity}` 表示要删除的实体类名称。

         **methed:** POST

         **sendData:**
        ```json
        {
            "entityList":[
                {},
                {},
                {}
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {},
                {},
                {}
            ]
        }
        ```
     * ### **API:** /update/{entity}
        修改一个或多个实体，将要添加的实体放入`entityList`中，并且返回其修改后的列表，`{entity}` 表示要修改的实体类名称。

         **methed:** POST

         **sendData:**
        ```json
        {
            "areaList":[
                {},
                {},
                {}
            ]
        }
        ```
        **resultData:**
        ```json
        {
            "success":"",
            "msg":"",
            "data":[
                {},
                {},
                {}
            ]
        }
        ```

-----
**以下页面的API可以被全局API代替**

* ## 完善学校资料页面
    管理学校的校区，对校区进行增删查改，可以导入excel表格，并且可以对导入的数据进行二次修改

     * ### **API:** /addArea
        添加当前用户所属学校的校区,可以一次添加一个或多个，将sendData要求的数据传输到后台，获取校区列表
         **methed:** POST    

         **sendData:**
        ```json
        {
            "areaList":[
                "areaname",
                "areaname",
                "areaname"
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
                }
            ]
        }
        ```
     * ### **API:** /readArea
        读取当前用户所属学校的校区列表，获取校区列表

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
                }
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
                }
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
                }
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
                }
            ]
        }
        ```

* ## 完善校区资料页面
    对校区的进行增删查改，并且可以从excel表格导入数据，并且可以对导入的数据进行二次修改
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
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
                }
            ]
        }
        ```

* ## 完善院系资料页面
    对院系进行增删查改的操作，并且可以从excel 表格导入数据并对导入的数据进行二次修改
     * ### **API:** /addDepartment
        添加一个或多个院系，将sendData要求的数据传输到后台，获取添加后的院系列表

         **methed:** POST    

         **sendData:**
        ```json
        {
            "DepartmentList":[
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":"",
                }
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
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
            ]
        }
        ```
     * ### **API:** /readDepartment/{schoolid}
        读取某个学校的院系，将学校id放到路径里面，获取院系列表

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
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
            ]
        }
        ```
     * ### **API:** /deleteDepartment
        删除一个或多个院系，将sendData要求的数据传输到后台，获取删除后的院系列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "departmentList":[
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
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
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
            ]
        }
        ```
     * ### **API:** /updateDepartment
        修改一个或多个院系，将sendData要求的数据传输到后台，获取修改后的院系列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "dedepartmentList":[
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
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
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
            ]
        }
        ```
     * ### **API:** /extendDepartment
        从excel表格导入院系信息，获取导入后的院系列表

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
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                },
                {
                    "departmentid":"",
                    "departmentname":"",
                    "schoolid":""
                }
            ]
        }
        ```

* ## 班级管理页面
    对学校所有班级进行管理，可以按照院系分类管理，并且有增删改查的操作，可以导入excel表格，并对导入的数据进行二次修改
     * ### **API:** /addClazz
        添加一个或多个班级，将sendData要求的数据传输到后台，获取添加后的班级列表

         **methed:** POST    

         **sendData:**
        ```json
        {
            "DepartmentList":[
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
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
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
            ]
        }
        ```
     * ### **API:** /readClazz/{schoolid}
        读取某个学校的班级，将学校id放到路径里面，获取班级列表

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
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
            ]
        }
        ```
     * ### **API:** /deleteClazz
        删除一个或多个班级，将sendData要求的数据传输到后台，获取删除后的班级列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "departmentList":[
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
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
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
            ]
        }
        ```
     * ### **API:** /updateClazz
        修改一个或多个班级，将sendData要求的数据传输到后台，获取修改后的班级列表

         **methed:** POST

         **sendData:**
        ```json
        {
            "dedepartmentList":[
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
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
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
            ]
        }
        ```
     * ### **API:** /extendClazz
        从excel表格导入班级信息，获取导入后的班级列表

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
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                },
                {
                    "clazzid":"",
                    "clazzname":"",
                    "clazasize":"",
                    "departmentid":""
                }
            ]
        }
        ```
