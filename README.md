# Personal Website Template

本模板可直接双击 `index.html` 本地打开使用。

## 已包含模块
- 首页 Hero（标题、简介、CTA）
- 关于我（简介 + 数据卡）
- Recent Updates + 主线/支线时间线
- 文章区（前端搜索）
- 视频区（卡片展示）
- 产品区（搜索 + 分类筛选 + 弹窗）
- 联系方式 + 页脚

## 你要改的地方（最少改动路径）
1. 打开 `index.html`，替换姓名、简介、联系方式。
2. 打开 `script.js`，替换 `articles/videos/products` 三组数据。
3. 打开 `styles.css`，按需改颜色变量（`:root` 部分）。

## 启动方式
- 直接打开：双击 `index.html`
- 或本地服务：
  ```bash
  cd /Users/sunflower/Desktop/personal-website-template
  python3 -m http.server 8080
  ```
  然后访问 `http://localhost:8080`
