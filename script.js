// 核心数据
const articles = [
  {
    title: "[文章标题模板] 在这里填入你的标题",
    desc: "[摘要模板] 这篇文章解决了什么问题、为什么值得读。",
    category: "模板A",
    date: "YYYY-MM-DD"
  },
  {
    title: "[项目复盘模板] 一次迭代背后的关键决策",
    desc: "[正文导语模板] 场景、目标、动作、结果，按这个结构快速改。",
    category: "模板B",
    date: "YYYY-MM-DD"
  },
  {
    title: "[方法论模板] 我的产品思考框架",
    desc: "[摘要模板] 适用于策略产品/用户增长/AI 产品相关内容沉淀。",
    category: "模板C",
    date: "YYYY-MM-DD"
  }
];

// 单页锚点导航 + 模块渲染
const views = {
  sectionOrder: ['home', 'about', 'creations', 'home-contact'],

  init() {
    this.renderAll();
    this.bindSinglePageNav();
    this.syncActiveNavByScroll();

    window.addEventListener('scroll', () => this.syncActiveNavByScroll(), { passive: true });
    window.addEventListener('hashchange', () => this.scrollToHash(false));
    this.scrollToHash(false);
  },

  getHeaderOffset() {
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.offsetHeight : 0;
    return headerHeight + 30;
  },

  bindSinglePageNav() {
    document.querySelectorAll('.top-nav a, .mail-btn').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;

      link.addEventListener('click', (event) => {
        event.preventDefault();
        this.scrollToSection(target, true);
        const nextHash = `#${target.id}`;
        if (window.location.hash !== nextHash) {
          history.replaceState(null, '', nextHash);
        }
      });
    });
  },

  scrollToHash(smooth = false) {
    const hash = window.location.hash;
    if (!hash) {
      this.setActiveNav('home');
      return;
    }
    const target = document.querySelector(hash);
    if (!target) return;
    this.scrollToSection(target, smooth);
  },

  scrollToSection(target, smooth = true) {
    const targetY = target.getBoundingClientRect().top + window.scrollY - this.getHeaderOffset();
    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: smooth ? 'smooth' : 'auto'
    });
    this.setActiveNav(target.id);
  },

  renderAll() {
    // 文章模板渲染
    this.renderHomeArticles('homeArticleGrid', articles);
  },

  setActiveNav(id) {
    document.querySelectorAll('.top-nav a').forEach(link => {
      const href = (link.getAttribute('href') || '').replace('#', '');
      const isActive = href === id;
      link.style.opacity = isActive ? '1' : '0.6';
      link.classList.toggle('active', isActive);
    });
  },

  syncActiveNavByScroll() {
    const anchorLine = window.scrollY + this.getHeaderOffset() + 20;
    let currentId = 'home';

    this.sectionOrder.forEach(id => {
      const section = document.getElementById(id);
      if (!section) return;
      if (section.offsetTop <= anchorLine) {
        currentId = id;
      }
    });

    this.setActiveNav(currentId);
  },

  // 首页专属：Articles 模块
  renderHomeArticles(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = data.slice(0, 3).map((item) => `
      <article class="home-article-card home-article-template nb-card default">
        <div class="nb-card-content home-article-body">
          <div class="home-article-meta">
            <span class="badge pale-yellow home-article-category">
              <span class="badge-inner">
                <span class="badge-text">${item.category}</span>
              </span>
            </span>
            <span class="home-article-date">${item.date}</span>
          </div>
          <h3 class="home-article-title" contenteditable="true">${item.title}</h3>
          <p class="home-article-text" contenteditable="true">${item.desc}</p>
          <div class="nb-card-actions">
            <span class="home-article-more">可直接点击文字修改</span>
          </div>
        </div>
      </article>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => views.init());
