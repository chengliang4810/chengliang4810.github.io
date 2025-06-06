# LayJava Admin

## 演示系统

> [https://admin.jimuqu.com](https://admin.jimuqu.com)

> 2核2G小服务器，前后端、数据库等都在该服务器，速度慢是正常的

## 特点

更高的吞吐量：

* 吞吐：每秒并发高 2～ 3 倍

更少的内存
* 内存节省 1/3 ~ 1/2。

更小的体积

* 工件：打包缩小 50% ~ 90%；

更快的速度

* 启动快 5 ～ 10 倍。

更自由的运行时兼容选择：

* 同时支持 java8 ～  java22 的运行时

## 功能列表

::: warning 注意
不支持多租户， 有需要自行添加
:::

| 业务     | 功能说明                                                                 |
|--------|----------------------------------------------------------------------|
| 客户端管理  | 系统内对接的所有客户端管理 如: pc端、小程序端等<br>支持动态授权登录方式 如: 短信登录、密码登录等 支持动态控制token时效 |
| 用户管理   | 用户的管理配置 如:新增用户、分配用户所属部门、角色、岗位等                                       |
| 部门管理   | 配置系统组织机构（公司、部门、小组） 树结构展现支持数据权限                                       |
| 岗位管理   | 配置系统用户所属担任职务                                                         |
| 菜单管理   | 配置系统菜单、操作权限、按钮权限标识等                                                  |
| 角色管理   | 角色菜单权限分配、设置角色按机构进行数据范围权限划分                                           |
| 字典管理   | 对系统中经常使用的一些较为固定的数据进行维护                                               |
| 参数管理   | 对系统动态配置常用参数                                                          |
| 通知公告   | 系统通知公告信息发布维护                                                         |
| 操作日志   | 系统正常操作日志记录和查询 系统异常信息日志记录和查询                                          |
| 登录日志   | 系统登录日志记录查询包含登录异常                                                     |
| 文件管理   | 系统文件展示、上传、下载、删除等管理                                                   |
| 文件配置管理 | 系统文件上传、下载所需要的配置信息动态添加、修改、删除等管理                                       |
| 在线用户管理 | 已登录系统的在线用户信息监控与强制踢出操作                                                |
| 代码生成   | 多数据源前后端代码的生成（java、html、xml、sql）支持CRUD下载                              |
| 接口文档   | 根据业务代码自动生成相关的api接口文档      

## Sql 审计功能
SQL 审计是一项非常重要的工作，是企业数据安全体系的重要组成部分，通过 SQL 审计功能为数据库请求进行全程记录，为事后追溯溯源提供了一手的信息，同时可以通过可以对恶意访问及时警告管理员，为防护策略优化提供数据支撑。

同时、提供 SQL 访问日志长期存储，满足等保合规要求。

![img.png](images/img.png)