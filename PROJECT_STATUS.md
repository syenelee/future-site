# PROJECT_STATUS.md

## 项目名称

Future Site（个人博客 / 思考站）

------

## 项目定位

一个具有未来感风格的个人网站，用于：

- 博客写作
- AI / 技术 / 思考类文章发布
- 项目展示
- 联系页面
- 长期作为个人品牌站点

风格目标：

- 深色
- 极简
- 未来感
- 可读性强
- 不要花哨但要有科技感

------

## 技术栈

### 核心

- Astro（静态网站）
- Markdown（文章）
- Vercel（部署）
- GitHub（仓库）

### 辅助功能

- Giscus（评论系统）
- RSS
- favicon
- Archive（归档页）

------

## 开发环境

- Windows
- PowerShell
- Node.js
- npm

Git 工作方式：

- 本地开发为主
- GitHub 为远程仓库
- 偶尔会直接在 GitHub 网页修改（导致本地落后，需要同步）

------

## Git 仓库

GitHub：

- 仓库名：future-site
- 用户名：syenelee

常用命令：

```powershell
git status
git add .
git commit -m "update site"
git pull origin main --rebase
git push origin main
```

如果 pull 出现：

```text
cannot pull with rebase: You have unstaged changes
```

处理方式：

先：

```powershell
git add .
git commit -m "local update"
```

再：

```powershell
git pull origin main --rebase
```

------

## 部署

平台：

- Vercel

部署方式：

- GitHub 自动部署 main 分支

常见问题：

### RSS 报错

错误：

```text
Invalid input: expected string, received undefined (site)
```

修复：

在：

```text
astro.config.mjs
```

加入：

```javascript
site: 'https://你的域名'
```

例如：

```javascript
export default defineConfig({
  site: 'https://future-site.vercel.app'
});
```

------

## 网站结构（已知）

页面：

- 首页
- About
- Projects
- Contact
- Archive
- Posts

内容路径：

```text
src/pages/
src/pages/posts/
```

布局：

可能有：

```text
src/layouts/Layout.astro
```

全局 head 修改通常在 Layout 中。

------

## 已完成功能

### UI / 视觉

- 首页美化
- 深色未来感风格
- 文本颜色优化
- 背景优化
- 可读性增强

### 内容

- 博客文章页面
- Markdown 文章

### 功能

- 归档页面
- RSS
- favicon
- 评论系统（Giscus）

### 评论系统

使用：

- Giscus
- GitHub Discussions

注意：

如果 giscus.app 没显示：

- repo
- repo-id
- category
- category-id

说明仓库 / discussion 分类未配置完成。

------

## favicon

推荐位置：

```text
public/favicon.ico
```

或：

```text
public/favicon.png
```

在：

```html
<head>
```

加入：

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
<link rel="apple-touch-icon" href="/favicon.png" />
<meta name="theme-color" content="#0b1220" />
```

注意：

浏览器 favicon 有缓存，需：

```text
Ctrl + F5
```

------

## 域名

当前：

- Vercel 默认域名（可能较长）

未来建议：

### 免费

- xxx.vercel.app

### 更短（推荐）

购买自定义域名：

例如：

- future.site
- weilai.blog
- futurethinking.com

然后在：

```text
Vercel → Domains
```

绑定。

------

## 网站风格偏好（非常重要）

希望：

- 不教程式废话
- 直接告诉改哪个文件
- 直接给步骤
- PowerShell 命令单独给
- 出错先定位问题
- 不泛泛而谈

代码修改要求：

- 明确文件路径
- 明确替换位置
- 不要只讲原理

------

## 用户当前能力水平（给 ChatGPT 参考）

不是纯新手。

已能：

- Git commit / push
- Vercel 部署
- Astro 基础修改
- GitHub 仓库管理
- 评论系统配置
- RSS 配置

但仍希望：

- 快速定位问题
- 明确操作步骤
- 避免抽象说明

------

## 下一阶段建议（可能继续做）

可考虑增加：

### 内容体验

- 文章标签（tags）
- 搜索功能
- 相关文章推荐
- 阅读时间显示
- 目录 TOC

### 用户体验

- 暗色 / 亮色切换
- 返回顶部按钮
- 页面加载动画
- 阅读进度条

### 品牌化

- 自定义域名
- Open Graph 社交卡片
- SEO 优化
- sitemap 优化

### 统计

- Umami / Plausible
- 页面访问统计

### 内容订阅

- RSS 已有
- 邮件订阅（可选）

------

## 新聊天时使用方式

复制本文件，然后加一句：

“这是一个已经上线的 Astro + Vercel 博客项目，请按维护现有项目方式指导，不要从零教程式讲解。”

再写：

“当前问题：……”

即可。