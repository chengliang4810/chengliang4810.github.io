#  doc-docket 简介
doc-docket是一个 docs模块的帮助工具，根据配置文件自动注入DocDocket对象.

::: danger 请注意
solon 官方在 2.9.0版本开始支持根据配置自动构建接口文档配置。 
请使用官方配置，该插件现已停止维护。
:::

::: tip 
solon docs为了不同模块支持无缝切换仅提供了DocDocket对象注入的方式，该项目为了让用户无需手动注入DocDocket对象，提供了自动注入的功能
:::

## 查询插件最新版本

> https://central.sonatype.com/artifact/com.layjava.solon.docs/doc-docket

## POM依赖

~~~xml
        <!-- 引入插件 -->
        <dependency>
            <groupId>com.layjava.solon.docs</groupId>
            <artifactId>doc-docket</artifactId>
            <version>{doc-docket.version}</version>
        </dependency>

        <!-- 引入你需要的文档插件,版本到官网获取最新的: https://solon.noear.org/article/524 -->
        <dependency>
            <groupId>org.noear</groupId>
            <artifactId>solon-docs-openapi2-javadoc</artifactId>
            <version>2.7.6-M2</version>
        </dependency>
~~~


## 配置文件案例
~~~yaml
# 通用属性配置案例， common的配置可以被下方的具体配置覆盖
# 注意: 请勿将groupName与packageName配置到common,因为就算你配置了也不会加载 🤣
solon.docs.common:
  # 默认是否启用
  enabled: true
  # 全局响应体是否在数据中 默认为 true
  globalResponseInData: true
  # 全局响应体类型 默认为 org.noear.solon.core.handle.Result
  globalResult: org.noear.solon.core.handle.Result
  # 标题
  title: '管理系统_接口文档'
  # 描述
  description: '描述：用于管理公司的人员信息,具体包括XXX,XXX模块...'
  # 版本
  version: '版本号: 1.0.0'
  # 作者信息
  contact:
    name: chengliang4810
    email: chengliang4810@163.com
    url: https://gitee.com/chengliang4810

solon:
  docs:
    - # 分组名 默认为 default
      groupName: 1.测试模块
      # 包路径 必填
      packageName: com.layjava.test
    # 是否开启接口文档 默认为 true
    - groupName: 2.通用模块
      # 包路径
      packageName: com.layjava.web


# 单分组示例
#solon:
#  docs:
#    # 是否开启接口文档 默认为 true
#    enabled: true
#    # 分组名 默认为 default
#    groupName: 1.测试模块
#    # 包路径 必填
#    packageName: com.layjava.test
#    # 全局响应体是否在数据中 默认为 true
#    globalResponseInData: true
#    # 全局响应体类型 默认为 org.noear.solon.core.handle.Result
#    globalResult: org.noear.solon.core.handle.Result
#    # 标题
#    title: '管理系统_接口文档'
#    # 描述
#    description: '描述：用于管理公司的人员信息,具体包括XXX,XXX模块...'
#    # 版本
#    version: '版本号: 1.0.0'
#    # 作者信息
#    contact:
#      name: chengliang4810
#      email: chengliang4810@163.com
#      url: https://gitee.com/chengliang4810

##多分组示例
#solon:
#  docs:
#    # 是否开启接口文档 默认为 true
#    - enabled: true
#      # 分组名 默认为 default
#      groupName: 1.测试模块
#      # 包路径 必填
#      packageName: com.layjava.test
#      # 全局响应体是否在数据中 默认为 true
#      globalResponseInData: true
#      # 全局响应体类型 默认为 org.noear.solon.core.handle.Result
#      globalResult: org.noear.solon.core.handle.Result
#      # 标题
#      title: '管理系统_接口文档'
#      # 描述
#      description: '描述：用于管理公司的人员信息,具体包括XXX,XXX模块...'
#      # 版本
#      version: '版本号: 1.0.0'
#      # 作者信息
#      contact:
#        name: chengliang4810
#        email: chengliang4810@163.com
#        url: https://gitee.com/chengliang4810
#
#    # 是否开启接口文档 默认为 true
#    - enabled: true
#      # 分组名
#      groupName: 2.通用模块
#      # 包路径
#      packageName: com.layjava.web
#      # 标题
#      title: '管理系统_接口文档'
#      # 描述
#      description: '描述：用于管理公司的人员信息,具体包括XXX,XXX模块...'
#      # 版本
#      version: '版本号: 1.0.0'
#      # 作者信息
#      contact:
#        name: chengliang4810
#        email: chengliang4810@163.com
#        url: https://gitee.com/chengliang4810
~~~
