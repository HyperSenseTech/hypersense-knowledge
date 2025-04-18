氦闪智能管理系统

## 前言

🌟基于hypersense-template 为模板制作的AI智能助手系统 🌟内部集成了AI对话聊天、AI Agent 模式，可使用AI助手使用系统接口



## 前端UI （hypersense-agent-vue）

### 技术栈

![image-20250419003510842](.\氦闪智能管理系统.assets\image-20250419003510842.png)

### 项目结构

🌟基于TypeScript、Vue3、ElementPlus的AI智能助手系统前端页面

```txt
├─.husky
├─.vscode
├─mock
├─public
└─src
    ├─api
    │  ├─auth
    │  ├─chat
    │  ├─codegen
    │  ├─file
    │  └─system
    ├─assets
    │  ├─icons
    │  ├─images
    │  └─subscribe
    ├─components
    │  ├─AppLink
    │  ├─Breadcrumb
    │  ├─ChatEntrance
    │  ├─CopyButton
    │  ├─CURD
    │  ├─Dict
    │  ├─ECharts
    │  ├─Fullscreen
    │  ├─GithubCorner
    │  ├─Hamburger
    │  ├─IconSelect
    │  ├─LangSelect
    │  ├─MenuSearch
    │  ├─NoticeDropdown
    │  ├─Pagination
    │  ├─SizeSelect
    │  ├─TableSelect
    │  ├─Upload
    │  └─WangEditor
    ├─directive
    │  └─permission
    ├─enums
    ├─hooks
    ├─lang
    │  └─package
    ├─layout
    │  └─components
    │      ├─AppMain
    │      ├─ChatRoom
    │      │  └─components
    │      ├─NavBar
    │      │  └─components
    │      ├─Settings
    │      │  └─components
    │      ├─Sidebar
    │      │  └─components
    │      └─TagsView
    ├─plugins
    ├─router
    ├─store
    │  └─modules
    ├─styles
    │  └─dark
    ├─types
    ├─utils
    └─views
        ├─chat
        │  ├─chat-message
        │  └─chat-session
        ├─codegen
        ├─dashboard
        ├─demo
        │  ├─api
        │  ├─curd
        │  │  └─config
        │  ├─multi-level
        │  │  └─children
        │  │      └─children
        │  └─table-select
        │      └─config
        ├─error
        ├─login
        ├─profile
        ├─redirect
        └─system
            ├─config
            ├─dept
            ├─dict
            ├─log
            ├─menu
            ├─model
            ├─notice
            │  └─components
            ├─role
            ├─user
            │  └─components
            └─usermodel

```



### 明暗主题切换

![登录页](.\氦闪智能管理系统.assets\登录页.png)

![登录页-dark](.\氦闪智能管理系统.assets\登录页-dark.png)

![聊天助手](.\氦闪智能管理系统.assets\聊天助手.png)

![聊天助手-dark](.\氦闪智能管理系统.assets\聊天助手-dark.png)

### 主题色彩灵活选择

<img src=".\氦闪智能管理系统.assets\主题-1744987207863.png" alt="主题" style="zoom:50%;" />

## 功能模块

### 系统管理

- 用户管理

![用户管理](.\氦闪智能管理系统.assets\用户管理.png)

- 角色管理

![角色管理](.\氦闪智能管理系统.assets\角色管理-1744987520956.png)

- 模型管理

![模型管理](.\氦闪智能管理系统.assets\模型管理.png)

等其他系统基础功能；

### 会话管理

- 会话记录

![会话记录管理](.\氦闪智能管理系统.assets\会话记录管理.png)

- 聊天记录

![聊天记录表](.\氦闪智能管理系统.assets\聊天记录表.png)

### 代码生成

![代码生成功能](.\氦闪智能管理系统.assets\代码生成功能.png)

### 个人中心

- 个人信息

![个人中心账号信息](.\氦闪智能管理系统.assets\个人中心账号信息.png)

- 个人模型配置

![个人模型配置](.\氦闪智能管理系统.assets\个人模型配置.png)

- 安全设置

![安全设置](.\氦闪智能管理系统.assets\安全设置-1744988021815.png)

## 后台服务 (hypersense-agent)

### 技术栈

![bs](.\氦闪智能管理系统.assets\bs-1744994718205.png)

### 项目结构

```txt
├─deploy
│  ├─docker	部署文件
│  └─sql	系统初始化SQL
├─hypersense-access   授权入口
├─hypersense-common
│  ├─hypersense-common-bom      公共服务物料库
│  ├─hypersense-common-core		核心模块
│  ├─hypersense-common-doc		文档模块
│  ├─hypersense-common-llm      大语言模型模块
│  ├─hypersense-common-log      日志模块
│  ├─hypersense-common-mybatis		mybatis模块
│  ├─hypersense-common-security		安全服务模块
│  ├─hypersense-common-web			web服务模块
│  └─hypersense-common-websocket	websocket服务模块
├─hypersense-modules
│  ├─hypersense-chat	聊天助手服务模块
│  ├─hypersense-knowledge	知识库服务模块
│  └─hypersense-system	系统服务模块
└─hypersense-shared
    ├─hypersense-shared-bom	 外接服务物料库
    ├─hypersense-shared-hsauth  认证鉴权中心模块
    ├─hypersense-shared-mail 邮箱服务模块
    ├─hypersense-shared-oss	对象存储服务模块
    ├─hypersense-shared-redis	redis存储服务模块
    ├─hypersense-shared-sms 	短信服务模块
    ├─hypersense-shared-vectorstore	向量数据库服务模块
    ├─hypersense-shared-wechat	微信模块
    └─hypersense-shared-xxljob	任务模块
```

## 系统特性

集成SpringAI 进行可以选择多模型进行聊天使用，模型配置化，用户可以根据自己的需求配置模型进行聊天对话，系统接入嵌入模型可以根据向量库进行增强检索。