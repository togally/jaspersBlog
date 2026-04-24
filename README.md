# Jasper's Blog

基于 Jekyll + GitHub Pages 的个人博客脚手架。推送到 `main` 分支后，GitHub Actions 自动构建并发布，无需手动操作。

---

## 一、首次部署（一次性，3 步）

### ① 替换占位符

`_config.yml` 已配置如下（project pages 设置，无需再改）：

```yaml
url: "https://togally.github.io"
baseurl: "/jaspersBlog"
```

`about.md` 中的 `@togally` 已填充，无需手动替换。

### ② 开启 GitHub Pages

仓库 → Settings → Pages → **Source** → 选择 **GitHub Actions**。

### ③ 推送到 main

```bash
git add .
git commit -m "init: jekyll scaffold"
git push origin main
```

等待 Actions 绿灯（约 3~5 分钟），访问 `https://togally.github.io/jaspersBlog` 即可看到博客上线。

---

## 二、快速发文（日常流程）

1. 在 `_posts/` 目录新建文件，命名格式：`YYYY-MM-DD-slug.md`
2. 填写 front-matter（参考 `_posts/2026-04-24-hello-world.md`）：
   ```yaml
   ---
   layout: post
   title: "文章标题"
   date: 2026-04-24 09:00:00 +0800
   categories: blog
   ---
   ```
3. 正文用 Markdown 写作。
4. 推送：
   ```bash
   git add .
   git commit -m "post: 文章标题"
   git push
   ```
5. 等 Actions 绿灯（3~5 分钟）→ 访问 `https://togally.github.io/jaspersBlog` 刷新即可看到新文章。

---

## 三、本地预览（可选）

前置条件：安装 Ruby 3.2+（macOS 推荐 `brew install rbenv` 或 `brew install ruby`）和 Bundler。

```bash
bundle install
bundle exec jekyll serve
```

浏览器访问 `http://127.0.0.1:4000` 即可实时预览，修改文件后自动刷新。

---

## 四、目录说明

| 路径 | 说明 |
|------|------|
| `_posts/` | 博文目录，每篇以 `YYYY-MM-DD-slug.md` 命名 |
| `about.md` | 关于页，访问路径 `/about/` |
| `_config.yml` | 站点全局配置（标题、作者、插件等） |
| `.github/workflows/pages.yml` | GitHub Actions 自动构建 + 部署流水线 |
