# LeapIn - AI人才智能平台

基于 Figma 设计稿还原的现代化网站，使用 Astro 框架和纯 CSS 实现。

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.astro    # 导航栏
│   ├── Hero.astro      # 首屏区域
│   ├── Partners.astro  # 合作伙伴展示
│   ├── Features.astro  # 功能特性
│   ├── ProductShowcase.astro  # 产品展示
│   ├── Stats.astro     # 数据统计
│   ├── CTA.astro       # 行动号召
│   └── Footer.astro    # 页脚
├── layouts/
│   └── Layout.astro    # 基础布局
└── pages/
    ├── index.astro     # 中文首页
    └── en.astro        # 英文首页
```

## 🎨 设计特点

- ✅ 完全基于 Figma 设计稿还原
- ✅ 使用纯 CSS，无 Tailwind CSS
- ✅ 响应式设计，支持移动端和桌面端
- ✅ 中英文双语支持
- ✅ 现代化渐变和动画效果
- ✅ 组件化架构，易于维护

## 🌐 访问页面

- 中文版：http://localhost:4321/
- 英文版：http://localhost:4321/en

## 🎯 主要功能模块

1. **Hero 区域** - 带渐变背景和网格图案的首屏展示
2. **合作伙伴** - 展示合作企业 Logo
3. **功能特性** - 6 个核心功能卡片展示
4. **产品展示** - 深浅背景交替的产品功能介绍
5. **数据统计** - 深色背景的关键数据展示
6. **CTA 区域** - 带渐变背景的行动号召
7. **页脚** - 完整的链接和版权信息

## 🎨 设计系统

### 颜色变量
- `--color-primary`: #0066ff
- `--color-secondary`: #00d4ff
- `--color-text`: #1a1a1a
- `--color-text-light`: #666666

### 渐变效果
- 主渐变：`linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)`
- 背景渐变：`linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)`

## 📱 响应式断点

- 移动端：< 768px
- 桌面端：≥ 768px

## 🛠️ 技术栈

- Astro 5.17.3
- 纯 CSS（无框架）
- 现代 JavaScript
