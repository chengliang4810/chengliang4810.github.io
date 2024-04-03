#  MybatisPlus 简介
MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

::: tip
solon 支持所有的Java框架，使用不了大部分是因为依赖了Spring框架。 因此Mybatis-plus-generator可以直接在solon环境使用
:::

## 官方教程与完整配置

> 使用案例 https://baomidou.com/pages/779a6e/

> 代码生成器配置 https://baomidou.com/pages/981406/

## POM依赖

~~~xml
        <!-- 引入对应的数据库依赖 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
        </dependency>

        <!-- 引入对应的模板引擎 -->
        <dependency>
            <groupId>com.ibeetl</groupId>
            <artifactId>beetl</artifactId>
            <version>3.16.0.RELEASE</version>
        </dependency>

        <!-- 注意：引入原始的mybatis-plus依赖即可 -->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus</artifactId>
            <version>3.5.5</version>
        </dependency>
        <!-- 引入mybatis-plus-generator依赖 -->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.5.5</version>
        </dependency>
~~~


## 使用
~~~java
package com.layjava.generator.controller;

import com.baomidou.mybatisplus.generator.FastAutoGenerator;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.engine.BeetlTemplateEngine;

public class GeneratorDemo {

    public static void main(String[] args) {
        // 获取当前项目的路径
        String projectPath = System.getProperty("user.dir");

        FastAutoGenerator.create("jdbc:mysql://localhost:3306/ry-vue?serverTimezone=Asia/Shanghai", "root", "password")
                .globalConfig(builder -> {
                    builder.author("chengliang4810") // 设置作者
                            .dateType(DateType.TIME_PACK) // 设置时间类型对应策略
                            .enableSpringdoc() // SpringDoc配置
                            .outputDir(projectPath); // 指定输出目录
                })
                .strategyConfig(builder -> {
                    builder.addInclude("t_simple") // 设置需要生成的表名
                            .addTablePrefix("t_", "c_"); // 设置过滤表前缀
                })
                .templateEngine(new BeetlTemplateEngine()) // 指定引擎模板，默认的是Velocity引擎模板
                .execute();
    }
    
}
~~~
::: tip
这里的代码是一个简单的示例，实际使用中需要根据自己的项目进行配置
请仔细对比包名，不要导入错误的包
:::
