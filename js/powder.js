/* Hexo Theme Powder — 由 theme-build.js 生成，请勿直接编辑 */
'use strict';
/* ===== runtime.js ===== */
/* ===== runtime.js ===== */
/* 交互运行时：模块注册 + 统一初始化
   各 ViewModel 以 IIFE 注册到 window.Powder.modules，
   runtime 在 DOMContentLoaded 后按注册顺序初始化。
   动效关闭（body[data-powder-animations="off"]）时不初始化交互模块。 */

(function () {
  'use strict';

  var modules = {};
  var initialized = false;

  var Powder = (window.Powder = window.Powder || {});
  Powder.modules = modules;

  Powder.register = function (name, definition) {
    if (!name || typeof definition !== 'object' || typeof definition.init !== 'function') {
      if (window.console) console.warn('[powder] 无效模块注册:', name);
      return;
    }
    modules[name] = definition;
  };

  Powder.prefersReducedMotion = function () {
    return (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  };

  Powder.animationsEnabled = function () {
    return document.body && document.body.getAttribute('data-powder-animations') !== 'off';
  };

  function initAll() {
    if (initialized) return;
    initialized = true;
    Object.keys(modules).forEach(function (name) {
      try {
        modules[name].init({
          reducedMotion: Powder.prefersReducedMotion(),
          animations: Powder.animationsEnabled(),
        });
      } catch (err) {
        if (window.console) console.error('[powder] 模块初始化失败:', name, err);
      }
    });
    document.documentElement.classList.add('powder-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();

/* ===== reveal.js ===== */
/* ===== reveal.js ===== */
/* 进入视口显现：IntersectionObserver + CSS 过渡
   同一父级下的多个元素按 80ms 阶梯延迟，只触发一次。 */

(function () {
  'use strict';

  var STAGGER = 80;

  function applyStagger(elements) {
    var groups = new Map();
    elements.forEach(function (el) {
      var parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, 0);
      var idx = groups.get(parent);
      el.style.setProperty('--reveal-delay', idx * STAGGER + 'ms');
      groups.set(parent, idx + 1);
    });
  }

  function init(ctx) {
    var elements = Array.prototype.slice.call(
      document.querySelectorAll('[data-powder-reveal]')
    );
    if (!elements.length) return;

    if (!ctx.animations || ctx.reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    applyStagger(elements);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.Powder.register('reveal', { init: init });
})();

/* ===== navbar.js ===== */
/* ===== navbar.js ===== */
/* 导航交互：滚动毛玻璃状态 + 移动端全屏菜单 */

(function () {
  'use strict';

  function init() {
    var nav = document.querySelector('[data-powder-nav]');
    var toggle = document.querySelector('[data-powder-nav-toggle]');
    var menu = document.getElementById('powder-mobile-menu');
    if (!nav) return;

    // 滚动状态（rAF 节流）
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        nav.classList.toggle('is-scrolled', window.scrollY > 24);
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (!toggle || !menu) return;

    function setMenu(open) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      document.body.classList.toggle('powder-nav-open', open);
      if (open) {
        var first = menu.querySelector('a, button');
        if (first) first.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // 点击链接后关闭
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    // Esc 关闭
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });

    // 视口变回桌面时关闭
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
      }
    });
  }

  window.Powder.register('navbar', { init: init });
})();

/* ===== scroll-highlight.js ===== */
/* ===== scroll-highlight.js ===== */
/* 滚动文字高亮（对照 Powder 原站手机端实测语义）
   实测数据（原站 390×844，目标线 = 0.42 × vh = 354）：
     第 1 段顶边距线 +110 / +60 → 0.25 / 1  ⇒ 未进入窄带前保持灰色
     距线 −40 / −90            → 1 / 0.25  ⇒ 滚出窄带后同样熄灭
   结论：
     - 段落只有在顶边进入「目标线 ± 10% 视口高」的窄带内才点亮
     - **未滚到位置前全部保持灰色**，滚过之后也熄灭（不是累积高亮）
     - 同一时刻至多一段点亮（窄带内取最接近线者），都不在带内则全部熄灭
     - 两态：未激活 opacity 0.25 / 激活 1；阈值触发的时间过渡 350ms ease-out
   实现：只切换 class，过渡交给 CSS；多实例独立；遵循 prefers-reduced-motion。 */

(function () {
  'use strict';

  function createInstance(container) {
    var paragraphs = Array.prototype.slice.call(
      container.querySelectorAll('[data-powder-highlight-text]')
    );
    if (!paragraphs.length) return null;

    var targetLine = parseFloat(container.getAttribute('data-target-line'));
    if (isNaN(targetLine)) targetLine = 0.42;

    // 触发带宽（相对视口高的一半宽度）：0.1 → 目标线 ±10% vh
    var band = parseFloat(container.getAttribute('data-highlight-band'));
    if (isNaN(band)) band = 0.1;

    // -2 表示尚未初始化（区别于 -1 = 当前无激活段）
    var current = -2;

    function computeActive(vh) {
      var line = vh * targetLine;
      var half = vh * band;
      var best = -1;
      var bestDist = Infinity;
      for (var i = 0; i < paragraphs.length; i += 1) {
        // 只比较顶边到目标线的距离：进入窄带才参与点亮
        var dist = Math.abs(paragraphs[i].getBoundingClientRect().top - line);
        if (dist <= half && dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      return best;
    }

    container.classList.add('is-highlight-ready');

    function update() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var active = computeActive(vh);
      if (active === current) return;
      paragraphs.forEach(function (p, i) {
        p.classList.toggle('is-active', i === active);
      });
      current = active;
    }

    return { update: update };
  }

  function init(ctx) {
    var containers = document.querySelectorAll('[data-powder-scroll-highlight]');
    if (!containers.length) return;

    if (!ctx.animations || ctx.reducedMotion) {
      // 动效关闭或用户偏好减少动画：保持文字全亮（模板原文）
      return;
    }

    var instances = Array.prototype.slice
      .call(containers)
      .map(createInstance)
      .filter(Boolean);
    if (!instances.length) return;

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        instances.forEach(function (inst) {
          inst.update();
        });
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
  }

  window.Powder.register('scroll-highlight', { init: init });
})();

/* ===== features-tabs.js ===== */
/* ===== features-tabs.js ===== */
/* Core Features 步骤标签：点击切换 + 自动轮播，切换同一图片舞台
   对照原站：4 个步骤标签，同一时刻只显示当前步骤描述与其配图
   无 JS 时保持首屏（第 1 步）不变 */

(function () {
  'use strict';

  function createInstance(root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[data-powder-tab-index]'));
    var descs = Array.prototype.slice.call(root.querySelectorAll('[data-powder-tab-desc]'));
    var imgs = Array.prototype.slice.call(root.querySelectorAll('[data-powder-tab-img]'));
    if (!tabs.length) return null;

    var interval = parseInt(root.getAttribute('data-interval'), 10);
    if (isNaN(interval) || interval < 1500) interval = 6000;
    var allowAutoplay = root.getAttribute('data-autoplay') !== 'false';

    var current = 0;
    var timer = null;

    function apply(index) {
      tabs.forEach(function (el, i) {
        var on = i === index;
        el.classList.toggle('is-active', on);
        el.setAttribute('aria-selected', on ? 'true' : 'false');
        el.setAttribute('tabindex', on ? '0' : '-1');
      });
      descs.forEach(function (el, i) {
        el.classList.toggle('is-active', i === index);
      });
      imgs.forEach(function (el, i) {
        el.classList.toggle('is-active', i === index);
      });
      current = index;
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      if (!allowAutoplay || timer || tabs.length < 2) return;
      timer = window.setInterval(function () {
        apply((current + 1) % tabs.length);
      }, interval);
    }

    tabs.forEach(function (el, i) {
      el.addEventListener('click', function () {
        stop();
        apply(i);
      });
      el.addEventListener('keydown', function (ev) {
        if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
        ev.preventDefault();
        stop();
        var next = ev.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        apply(next);
        tabs[next].focus();
      });
    });

    apply(0);
    return { start: start, stop: stop };
  }

  function init(ctx) {
    var roots = document.querySelectorAll('[data-powder-tabs]');
    if (!roots.length) return;

    var instances = Array.prototype.slice
      .call(roots)
      .map(createInstance)
      .filter(Boolean);
    if (!instances.length) return;

    // 动效关闭或用户偏好减少动画时：保留点击切换，不自动轮播
    if (ctx.animations && !ctx.reducedMotion) {
      instances.forEach(function (inst) {
        inst.start();
      });
      document.addEventListener('visibilitychange', function () {
        instances.forEach(function (inst) {
          if (document.hidden) inst.stop();
          else inst.start();
        });
      });
    }
  }

  window.Powder.register('features-tabs', { init: init });
})();

/* ===== carousel.js ===== */
/* ===== carousel.js ===== */
/* 产品/评价轮播：位移 transform + 圆点指示 + 可选自动播放 */

(function () {
  'use strict';

  function init(ctx) {
    if (!ctx.animations) return;

    document.querySelectorAll('[data-powder-carousel]').forEach(function (root) {
      var track = root.querySelector('.powder-carousel__track');
      var slides = Array.prototype.slice.call(
        root.querySelectorAll('.powder-carousel__track > li')
      );
      var dotsBox = root.querySelector('[data-powder-carousel-dots]');
      var prevBtn = root.querySelector('[data-powder-carousel-prev]');
      var nextBtn = root.querySelector('[data-powder-carousel-next]');
      if (!track || slides.length < 2) return;

      var index = 0;
      var autoplay = root.getAttribute('data-autoplay') === 'true';
      var interval = parseInt(root.getAttribute('data-interval'), 10) || 5000;
      var timer = null;

      var dots = slides.map(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'powder-carousel__dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function () {
          go(i);
          restart();
        });
        if (dotsBox) dotsBox.appendChild(dot);
        return dot;
      });

      function go(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + index * 100 + '%)';
        dots.forEach(function (dot, di) {
          dot.classList.toggle('is-active', di === index);
        });
      }

      function next() {
        go(index + 1);
      }

      function prev() {
        go(index - 1);
      }

      function restart() {
        if (!autoplay) return;
        clearInterval(timer);
        timer = setInterval(next, interval);
      }

      if (nextBtn) nextBtn.addEventListener('click', function () { next(); restart(); });
      if (prevBtn) prevBtn.addEventListener('click', function () { prev(); restart(); });

      root.addEventListener('mouseenter', function () {
        clearInterval(timer);
      });
      root.addEventListener('mouseleave', restart);

      // 键盘操作
      root.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { next(); restart(); }
        if (e.key === 'ArrowLeft') { prev(); restart(); }
      });

      go(0);
      restart();
    });
  }

  window.Powder.register('carousel', { init: init });
})();

/* ===== modal.js ===== */
/* ===== modal.js ===== */
/* 全局弹窗：Hero 播放按钮等触发；遮罩/Esc/关闭按钮关闭；焦点管理 */

(function () {
  'use strict';

  function init(ctx) {
    var modal = document.getElementById('powder-modal');
    if (!modal) return;
    var panel = modal.querySelector('.powder-modal__panel');
    var titleEl = modal.querySelector('.powder-modal__title');
    var bodyEl = modal.querySelector('.powder-modal__body');
    var closeBtn = modal.querySelector('[data-powder-modal-close]');
    var lastFocus = null;

    function open(config) {
      lastFocus = document.activeElement;
      titleEl.textContent = (config && config.title) || '';
      bodyEl.innerHTML = '';
      if (config && config.image) {
        var img = document.createElement('img');
        img.src = config.image;
        img.alt = config.title || '';
        bodyEl.appendChild(img);
      }
      if (config && config.html) {
        bodyEl.innerHTML = config.html;
      }
      modal.hidden = false;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus();
    }

    function close() {
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      bodyEl.innerHTML = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    document.querySelectorAll('[data-powder-modal-open]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        open({
          title: trigger.getAttribute('data-modal-title'),
          image: trigger.getAttribute('data-modal-image'),
          html: trigger.getAttribute('data-modal-html'),
        });
      });
    });

    modal.querySelectorAll('[data-powder-modal-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) close();
    });

    // 简易焦点循环
    modal.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusables = panel.querySelectorAll('button, [href], input, select, textarea, iframe');
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    window.Powder.openModal = open;
    window.Powder.closeModal = close;
  }

  window.Powder.register('modal', { init: init });
})();

/* ===== faq.js ===== */
/* ===== faq.js ===== */
/* FAQ：分类切换 + 单开模式（原生 details 的渐进增强） */

(function () {
  'use strict';

  function init(ctx) {
    var tabsBox = document.querySelector('[data-powder-faq-tabs]');
    var list = document.querySelector('[data-powder-faq-list]');
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll('details'));
    var allowMultiple = list.getAttribute('data-allow-multiple') === 'true';

    // 单开模式
    items.forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (item.open && !allowMultiple) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });

    if (!tabsBox) return;
    var tabs = Array.prototype.slice.call(tabsBox.querySelectorAll('button'));

    function activate(category) {
      tabs.forEach(function (tab) {
        var active = tab.getAttribute('data-category') === category;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      items.forEach(function (item) {
        var match = category === 'all' || item.getAttribute('data-category') === category;
        item.hidden = !match;
        if (!match) item.open = false;
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activate(tab.getAttribute('data-category'));
      });
    });
  }

  window.Powder.register('faq', { init: init });
})();

/* ===== pricing-toggle.js ===== */
/* ===== pricing-toggle.js ===== */
/* 定价周期切换：月付 / 年付价格互换 */

(function () {
  'use strict';

  function init() {
    var toggle = document.querySelector('[data-powder-pricing-toggle]');
    if (!toggle) return;

    var buttons = Array.prototype.slice.call(toggle.querySelectorAll('button'));
    var amounts = Array.prototype.slice.call(
      document.querySelectorAll('[data-powder-price]')
    );

    function apply(cycle) {
      buttons.forEach(function (btn) {
        var active = btn.getAttribute('data-cycle') === cycle;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
      amounts.forEach(function (el) {
        var price = el.getAttribute('data-' + cycle) || '';
        el.textContent = price;
        var period = el.parentElement.querySelector('.powder-plan__period');
        if (period) {
          period.style.visibility = price === 'Free' ? 'hidden' : 'visible';
        }
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-cycle'));
      });
    });

    apply(toggle.getAttribute('data-default-cycle') || 'yearly');
  }

  window.Powder.register('pricing-toggle', { init: init });
})();

/* ===== blog-filter.js ===== */
/* ===== blog-filter.js ===== */
/* Blog 列表页分类筛选 */

(function () {
  'use strict';

  function init() {
    var filters = document.querySelector('[data-powder-blog-filters]');
    var list = document.querySelector('[data-powder-blog-list]');
    if (!filters || !list) return;

    var buttons = Array.prototype.slice.call(filters.querySelectorAll('button'));
    var cards = Array.prototype.slice.call(list.querySelectorAll('[data-category]'));

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-category');
        buttons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });
        cards.forEach(function (card) {
          var match =
            category === 'all' ||
            card.getAttribute('data-category') === category;
          card.hidden = !match;
        });
      });
    });
  }

  window.Powder.register('blog-filter', { init: init });
})();
