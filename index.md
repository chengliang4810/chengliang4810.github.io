---
  # https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "JiMuQu Admin"
  text: "管理系统脚手架"
  image:
    src: /Bug Fixing 2.svg
    alt: 积木区 Banner
    width: 320
    height: 320
  tagline: 新一代Java企业级通用管理系统脚手架 🚩为中国国产化匠心打造❗
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 演示系统
      link: https://admin.layjava.com

features:
  - title: 简
    icon: 🛠️
    details: 下载代码即可运行，无需配置，开箱即用。
  - title: 快
    icon: 💪
    details: 并发高 700%；启动快 10 倍。
  - title: 轻
    icon: 🛬
    details: 内存省 50%；打包小 90%。
  - title: 稳
    icon: 📈
    details: 基于Solon 新一代国产Java企业级应用开发框架。  
  - title: 新
    icon: 🌍
    details: 不在守旧，仅支持java17及以上的环境。
  - title: 安全
    icon: 🔒
    details: 使用行业认证的Sa-Token开源、免费、轻量级的java 权限认证框架。
  - title: 开源
    icon: 💯
    details: 基于MIT协议代码完全开源免费，永久免费使用。

  - title: 友情链接
    icon: 🧲
    details: 优秀的开源希望与您一起分享。

---

## Solon 国产Java应用开发框架

对标 Broadcom Spring 生态。并发高 700%；内存省 50%；启动快 10 倍；打包小 90%；同时支持 java8 ~ java23, native 运行时。

## Sa-Token 开源、免费、轻量级的java 权限认证框架

Sa-Token 是一个轻量级 java 权限认证框架，主要解决登录认证、权限认证、分布式会话、单点登录、OAuth2.0 等一系列权限相关问题。
Sa-Token 可用于独立应用、微服务、分布式系统等各种java后端项目。

## xbatis 新一代ORM框架
基于 mybatis 扩展的ORM框架，超方便、学习成本低、优雅的API、方便扩展、功能强大。

## AutoTable 自动生成数据库表结构
根据 Java 实体，自动映射成数据库的表结构。表结构自动维护，这让我们可以专注于业务逻辑和实体，而不需要关心数据库的表、列的配置，尤其是对于开发阶段需要频繁的新增表及变更表结构，节省了大量手动工作。

## 代码生成器
只需设计好表结构 一键生成所有crud代码与页面
降低80%的开发量 把精力都投入到业务设计上。同时支持  在线管理代码生成模板，按照自己的需求生成代码，提高开发效率。

## 基于注释自动生成API文档
使用注释生成API文档，让开发人员可以快速了解API的功能和使用方法，提高开发效率。
基于therapi-runtime-javadoc识别注释，生成API文档。

## 运行环境依赖最小化
仅需要 jdk17 即可运行。默认采用内置数据库、本地缓存，无需其他配置，开箱即用。<br/>


<script setup>
  import ParticlesBg from '.vitepress/components/ParticlesBg.vue'
  import { ref } from 'vue'
import confetti from "canvas-confetti";
setInterval(() => {
  showConfetti();
}, 5000)
// Function to trigger the confetti side cannons
function showConfetti() {
  const end = Date.now() + 3 * 1000; // 3 seconds
  const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

  // Frame function to trigger confetti cannons
  function frame() {
    if (Date.now() > end) return;

    // Left side confetti cannon
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      startVelocity: 60,
      origin: { x: 0, y: 0.5 },
      colors: colors,
    });

    // Right side confetti cannon
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      startVelocity: 60,
      origin: { x: 1, y: 0.5 },
      colors: colors,
    });

    requestAnimationFrame(frame); // Keep calling the frame function
  }

  frame();
}


</script>


<ParticlesBg color="black" :quantity="800"/>
