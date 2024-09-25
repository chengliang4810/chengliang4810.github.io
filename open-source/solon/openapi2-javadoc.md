# 基于Java注释生成OpenAPI文档

传统方式需要大量的注解，而且不易维护。而通过Java注释生成OpenAPI文档，可以让开发者专注于业务逻辑，而不是文档的编写。

## 核心原理

通过该技术 https://github.com/dnault/therapi-runtime-javadoc 解析Java注释，按照OpenAPI2的标准构建对象并响应。


## Controller示例

```java
/**
 * 用户信息表 控制器
 *
 * @author chengliang4810
 * @since 2024-04-08
 */
@Controller
@Mapping("/user")
public class UserController extends BaseController {

    @Inject
    private UserService userService;
    @Inject
    private BeanSearcher beanSearcher;

    /**
     * 查询用户列表
     *
     * @param userBo 用户信息查询条件
     * @return 用户信息列表数据
     */
    @Get
    @Mapping("/list")
    public List<UserVo> list(UserBo userBo) {
        List<User> searchAll = beanSearcher.searchAll(User.class);
        return MapstructUtils.convert(searchAll, UserVo.class);
    }

    /**
     * 分页查询用户列表
     *
     * @param pageQuery 分页查询条件
     * @return 用户信息分页列表数据
     */
    @Get
    @Mapping("/list/{pageNum}/{pageSize}")
    public PageResult<UserVo> pageList(PageQuery pageQuery) {
        SearchResult<User> search = beanSearcher.search(User.class);
        return PageResult.build(search, UserVo.class);
    }

    /**
     * 根据Id查询用户信息
     *
     * @param id Id主键
     * @return 用户信息
     */
    @Get
    @Mapping("/{id}")
    public UserVo get(@NotNull Long id) {
        return userService.getUserVoById(id);
    }

    /**
     * 新增用户信息
     *
     * @param userBo 用户信息
     */
    @Post
    @Mapping
    public void save(@Validated(Addition.class) UserBo userBo) {
        boolean result = userService.saveUser(userBo);
        Assert.isTrue(result, "新增失败");
    }

    /**
     * 根据Id更新用户信息
     *
     * @param userBo 用户信息
     */
    @Put
    @Mapping
    public void update(UserBo userBo) {
        boolean result = userService.updateUserById(userBo);
        Assert.isTrue(result, "更新失败");
    }

    /**
     * 批量删除用户信息
     *
     * @param ids id列表
     */
    @Delete
    @Mapping("/{ids}")
    public void delete(@NotBlank(message = "ID不允许为空") String ids) {
        List<Long> idList = StringUtils.splitTo(ids, Convert::toLong);
        int result = userService.deleteUserById(idList);
        Assert.isTrue(result > 0, "删除失败");
    }

}
```

## 实体对象实例
    
```java
/**
 * 用户信息表
 *
 * @author chengliang4810
 * @since 2024-04-08
 */
@Data
@Accessors(chain = true)
@TableName("sys_user")
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    /**
     * 用户ID
     */
    @TableId("user_id")
    private Long userId;

    /**
     * 租户编号
     */
    private String tenantId;

    /**
     * 部门ID
     */
    private Long deptId;

    /**
     * 用户账号
     */
    private String userName;

    /**
     * 用户昵称
     */
    private String nickName;

    /**
     * 执法证号
     */
    private String certificateNumber;

    /**
     * 用户类型（sys_user系统用户）
     */
    private String userType;

    /**
     * 用户邮箱
     */
    private String email;

    /**
     * 手机号码
     */
    private String phonenumber;

    /**
     * 用户性别（0男 1女 2未知）
     */
    private String sex;

    /**
     * 头像地址
     */
    private Long avatar;

    /**
     * 密码
     */
    private String password;

    /**
     * 帐号状态（0正常 1停用）
     */
    private String status;

    /**
     * 删除标志（0代表存在 2代表删除）
     */
    private String delFlag;

    /**
     * 最后登录IP
     */
    private String loginIp;

    /**
     * 最后登录时间
     */
    private LocalDateTime loginDate;

    /**
     * 备注
     */
    private String remark;
}
```

::: tip
可以发现上述的案例中完全没有任何OpenAPI的注解，只是写了一些Java注释。
:::

## 引入插件依赖

```xml
    <!-- 引入依赖 -->
    <dependency>
        <groupId>org.noear</groupId>
        <artifactId>solon-docs-openapi2-javadoc</artifactId>
        <version>2.7.6-M3</version>
    </dependency>
```   

## maven插件配置

::: warning
主要关注这部分内容: therapi-runtime-javadoc-scribe , 不配置该插件可能无法获取到Java的注释内容
:::
    
```xml
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>${maven-compiler-plugin.verison}</version>
                <configuration>
                    <source>${java.version}</source>
                    <target>${java.version}</target>
                    <encoding>${project.build.sourceEncoding}</encoding>
                    <annotationProcessorPaths>
                        <path>
                            <groupId>com.github.therapi</groupId>
                            <artifactId>therapi-runtime-javadoc-scribe</artifactId>
                            <version>0.13.0</version>
                        </path>
                    </annotationProcessorPaths>
                    <compilerArgs>
                        <arg>
                            -Amapstruct.defaultComponentModel=solon
                        </arg>
                    </compilerArgs>
                </configuration>
            </plugin>
```

## API文档配置

```java
@Configuration
public class DocConfig {
    /**
     * 简单点的
     */
    @Bean("appApi")
    public DocDocket appApi() {
        //根据情况增加 "knife4j.setting" （可选）
        return new DocDocket()
                .groupName("app端接口")
                .schemes(Scheme.HTTP)
                .apis("com.swagger.demo.controller.app");

    }

    /**
     * 丰富点的
     */
    @Bean("adminApi")
    public DocDocket adminApi() {
        //根据情况增加 "knife4j.setting" （可选）
        return new DocDocket()
                .groupName("admin端接口")
                .info(new ApiInfo().title("在线文档")
                        .description("在线API文档")
                        .termsOfService("https://gitee.com/noear/solon")
                        .contact(new ApiContact().name("demo")
                                .url("https://gitee.com/noear/solon")
                                .email("demo@foxmail.com"))
                        .version("1.0"))
                .schemes(Scheme.HTTP, Scheme.HTTPS)
                .globalResponseInData(true)
                .globalResult(Result.class)
                .apis("com.swagger.demo.controller.admin"); //可以加多条，以包名为单位

    }
}
```

## 文档接口

http://localhost:8080/swagger/v2

> 替换为自己的项目地址与端口

## 接口管理

> 接口管理使用apifox\apipost等工具进行导入使用。

