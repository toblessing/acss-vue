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
            "schoolname":""
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
    
        [
            {},
            {},
            {}
        ]
    
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
        读取一个或多个实体，并返回其对应的列表，`{entity}` 表示要读取的实体类名称，传回一个对象，对象内每个属性是查找条件，实体对应的属性满足其正则表达式的条件，才会被包含在返回列表里面。

         **methed:** GET

         **sendData:**
        ```json
        {
            "id":"",
            "name":""
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
    
        [
            {},
            {},
            {}
        ]
    
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
        [
            {},
            {},
            {}
        ]
        
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


* ## 完善校区资料页面
    对校区的进行增删查改，并且可以从excel表格导入数据，并且可以对导入的数据进行二次修改
    

* ## 完善院系资料页面
    对院系进行增删查改的操作，并且可以从excel 表格导入数据并对导入的数据进行二次修改
    
* ## 班级管理页面
    对学校所有班级进行管理，可以按照院系分类管理，并且有增删改查的操作，可以导入excel表格，并对导入的数据进行二次修改
     
