---
layout: post
title: "这个博客是怎么搭的，又怎么用"
date: 2026-04-25 11:26:14 +0800
categories: blog
---

这是这个博客的第一篇真实博文。既然是第一篇，就来写写它本身——用了什么工具、长什么样、我以后怎么写、你以后怎么读。

<!--more-->

## 它跑在哪里

托管在 GitHub Pages 上，仓库是 [togally/jaspersBlog](https://github.com/togally/jaspersBlog)。我推一个 commit 到 `main` 分支，GitHub Actions 会自动用 Jekyll 把 Markdown 编译成静态 HTML，几分钟后部署到 [togally.github.io/jaspersBlog](https://togally.github.io/jaspersBlog)。

零服务器，零月费。可以一直跑下去。

## 视觉是怎么做的

底层用 Jekyll 的 [minima](https://github.com/jekyll/minima) 主题——它够克制，骨架干净。我在它之上覆盖了 5 个小文件：

- `_includes/head.html` — 复刻 minima 默认 head + 加自己的 stylesheet
- `_includes/header.html` — 极简横排：左品牌，右导航
- `_includes/footer.html` — 只放 Email 和 RSS
- `_layouts/home.html` — 首页换成卡片式列表，每条带摘要
- `assets/css/custom.css` — 一份 CSS 管所有定制：暖米底、墨绿强调、衬线中文、跟随系统的暗色模式

视觉决策的代价我尽量压到最低：不用 Sass，不引第三方 JS，不挂任何 CDN 字体。中文字体走 macOS / iOS / Windows 系统自带的回退链，谁打开都能正常渲染。

设计原则就一句话：**让人能读下去，剩下的不重要**。

## 写一篇博文要做什么

我用 Claude Code（Anthropic 出的命令行 AI 助手）当主力编辑环境，配了两个项目级 skill：

- `/new-post 标题` — 在对话里说一句，自动生成带 front-matter 的 `_posts/YYYY-MM-DD-<slug>.md`。slug 是按标题语义生成的英文短语（不是死翻拼音，URL 会好看一些）。
- `/publish` — 写完之后说一句"发布"，自动 `git add _posts/` → `commit` → `push`，再给我一个 Actions 链接看构建状态。

中间唯一要我做的事是：**写**。这套工具链花了大半天搭，全部目的就是把"想到一句话 → 让它出现在博客上"的摩擦尽量磨掉。

## 你怎么读

- 直接逛：<https://togally.github.io/jaspersBlog>
- 订阅 RSS：[feed.xml](/jaspersBlog/feed.xml) 丢进 Reeder / NetNewsWire / 任何阅读器即可
- 写信：[a550844389@gmail.com](mailto:a550844389@gmail.com)，看到都会回

不打算开评论区。一来 Disqus 那种东西会让博客慢一倍；二来真有想说的，写邮件比留言更耐心。

## 节奏

不追热点。可能一周写一篇，也可能一个月写一篇，看心情和有没有想清楚的事。

**写得少不是问题，写得空才是。**

第一篇就这样。
