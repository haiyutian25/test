import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as n,
  C as r,
  D as i,
  E as a,
  F as o,
  L as s,
  M as c,
  P as l,
  T as u,
  V as d,
  _ as f,
  a as p,
  b as m,
  c as h,
  d as g,
  h as _,
  i as v,
  j as y,
  k as ee,
  l as b,
  m as x,
  n as S,
  o as C,
  p as w,
  r as T,
  s as E,
  t as te,
  v as D,
  w as ne,
  x as O,
  z as k,
} from "./react.CbTQkvGa.mjs";
import { M as A, i as re, o as ie, t as ae } from "./motion.DqePFWeo.mjs";
import {
  $ as oe,
  A as j,
  At as se,
  Bt as ce,
  D as M,
  Dt as le,
  E as ue,
  Et as de,
  Ft as fe,
  G as N,
  H as P,
  I as pe,
  It as me,
  J as he,
  Lt as ge,
  Mt as _e,
  Nt as ve,
  O as ye,
  Ot as be,
  P as F,
  S as I,
  Vt as xe,
  W as L,
  X as R,
  Y as Se,
  Z as z,
  _ as B,
  _t as Ce,
  a as V,
  b as we,
  bt as Te,
  c as Ee,
  d as De,
  f as Oe,
  ft as ke,
  g as Ae,
  gt as je,
  h as Me,
  ht as Ne,
  it as Pe,
  j as H,
  jt as U,
  lt as Fe,
  mt as Ie,
  o as W,
  ot as Le,
  p as Re,
  rt as ze,
  s as G,
  st as Be,
  tt as Ve,
  ut as He,
  w as Ue,
  y as We,
} from "./framer.CFgihyWK.mjs";
import {
  a as Ge,
  c as Ke,
  d as qe,
  f as Je,
  i as Ye,
  l as Xe,
  o as Ze,
  r as Qe,
  s as $e,
  u as et,
} from "./shared-lib.t8-xaOwk.mjs";
import {
  _ as tt,
  a as nt,
  c as rt,
  d as it,
  f as at,
  g as ot,
  h as st,
  i as ct,
  l as lt,
  m as ut,
  n as dt,
  o as ft,
  p as pt,
  r as mt,
  s as ht,
  t as gt,
  u as _t,
  v as vt,
} from "./sphFUGhj9.BWeZJkL5.mjs";
import { n as yt, t as bt } from "./Gradient_ease.D_kA1M0X.mjs";
import { i as xt, n as St, r as Ct, t as wt } from "./Bh7brll6H.qtsmKJJV.mjs";
import { n as Tt, t as K } from "./LgNu28hAv.T-w2QUq1.mjs";
import { i as Et, n as Dt, r as Ot, t as kt } from "./dvE5DE7ca.DiQM6HA0.mjs";
import { i as At, n as jt, r as Mt, t as Nt } from "./gk3iglzUb.DiXJMYUN.mjs";
import { i as Pt, n as Ft, r as It, t as Lt } from "./nZtZfLTSW.DMk9jra7.mjs";
function Rt(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function zt(e, t, n) {
  return (1 - n) * e + n * t;
}
function Bt(e, t, n, r) {
  return zt(e, t, 1 - Math.exp(-n * r));
}
function Vt(e, t) {
  return ((e % t) + t) % t;
}
function Ht(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function Ut(e, t) {
  return e === 1 ? Jt : e === 2 ? t : 1;
}
var Wt,
  Gt,
  Kt,
  qt,
  Jt,
  q,
  Yt,
  Xt,
  Zt,
  Qt = t(() => {
    (k(),
      (Wt = `1.3.19`),
      (Gt = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = Rt(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = Bt(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          e,
          t,
          { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o },
        ) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (Kt = class {
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = Ht(this.resize, r)),
              this.wrapper instanceof Window
                ? d.addEventListener(`resize`, this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === d &&
              this.debouncedResize &&
              d.removeEventListener(`resize`, this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = d.innerWidth), (this.height = d.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      }),
      (qt = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (Jt = 100 / 6),
      (q = { passive: !1 }),
      (Yt = class {
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            d.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, q),
            this.element.addEventListener(`touchstart`, this.onTouchStart, q),
            this.element.addEventListener(`touchmove`, this.onTouchMove, q),
            this.element.addEventListener(`touchend`, this.onTouchEnd, q));
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new qt();
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            d.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, q),
            this.element.removeEventListener(
              `touchstart`,
              this.onTouchStart,
              q,
            ),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, q),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, q));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = Ut(r, this.window.width),
            a = Ut(r, this.window.height);
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: d.innerWidth, height: d.innerHeight };
        };
      }),
      (Xt = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (Zt = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new Gt();
        emitter = new qt();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = d,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: o = 1.7,
          duration: s,
          easing: c,
          lerp: l = 0.1,
          infinite: u = !1,
          orientation: f = `vertical`,
          gestureOrientation: p = f === `horizontal` ? `both` : `vertical`,
          touchMultiplier: m = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _,
          virtualScroll: v,
          overscroll: y = !0,
          autoRaf: ee = !1,
          anchors: b = !1,
          autoToggle: x = !1,
          allowNestedScroll: S = !1,
          __experimental__naiveDimensions: C = !1,
          naiveDimensions: w = C,
          stopInertiaOnNavigate: T = !1,
        } = {}) {
          ((d.lenisVersion = Wt),
            (d.lenis ||= {}),
            (d.lenis.version = Wt),
            f === `horizontal` && (d.lenis.horizontal = !0),
            i === !0 && (d.lenis.touch = !0),
            (!e || e === document.documentElement) && (e = d),
            typeof s == `number` && typeof c != `function`
              ? (c = Xt)
              : typeof c == `function` && typeof s != `number` && (s = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaExponent: o,
              duration: s,
              easing: c,
              lerp: l,
              infinite: u,
              gestureOrientation: p,
              orientation: f,
              touchMultiplier: m,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              virtualScroll: v,
              overscroll: y,
              autoRaf: ee,
              anchors: b,
              autoToggle: x,
              allowNestedScroll: S,
              naiveDimensions: w,
              stopInertiaOnNavigate: T,
            }),
            (this.dimensions = new Kt(e, t, { autoResize: g })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              `scroll`,
              this.onNativeScroll,
            ),
            this.options.wrapper.addEventListener(
              `scrollend`,
              this.onScrollEnd,
              { capture: !0 },
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(
              `pointerdown`,
              this.onPointerDown,
            ),
            (this.virtualScroll = new Yt(n, {
              touchMultiplier: m,
              wheelMultiplier: h,
            })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(
                `transitionend`,
                this.onTransitionEnd,
              )),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              `scroll`,
              this.onNativeScroll,
            ),
            this.options.wrapper.removeEventListener(
              `scrollend`,
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              `pointerdown`,
              this.onPointerDown,
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) &&
              e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === d,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow)
            ? this.internalStop()
            : this.internalStart();
        }
        onTransitionEnd = (e) => {
          e.propertyName.includes(`overflow`) && this.checkOverflow();
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
              .composedPath()
              .filter((e) => e instanceof HTMLAnchorElement && e.href)
              .map((e) => new URL(e.href)),
            n = new URL(d.location.href);
          if (this.options.anchors) {
            let e = t.find(
              (e) => n.host === e.host && n.pathname === e.pathname && e.hash,
            );
            if (e) {
              let t =
                  typeof this.options.anchors == `object` &&
                  this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = `#${e.hash.split(`#`)[1]}`;
              this.scrollTo(n, t);
              return;
            }
          }
          if (
            this.options.stopInertiaOnNavigate &&
            t.some((e) => n.host === e.host && n.pathname !== e.pathname)
          ) {
            this.reset();
            return;
          }
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, {
              deltaX: t,
              deltaY: n,
              event: r,
            }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`);
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
          let o = t === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (o || s) return;
          let c = r.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          let l = this.options.prevent,
            u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
          if (
            c.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof l == `function` && l?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (u === `vertical` &&
                    e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                  (u === `horizontal` &&
                    e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(e, { deltaX: t, deltaY: n }))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault();
            return;
          }
          if (!(
            (this.options.syncTouch && i) ||
            (this.options.smoothWheel && a)
          )) {
            ((this.isScrolling = `native`),
              this.animate.stop(),
              (r.lenisStopPropagation = !0));
            return;
          }
          let f = n;
          (this.options.gestureOrientation === `both`
            ? (f = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (f = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== d &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault());
          let p = i && this.options.syncTouch,
            m = i && r.type === `touchend`;
          (m &&
            (f =
              Math.sign(this.velocity) *
              Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + f, {
              programmatic: !1,
              ...(p
                ? { lerp: m ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            programmatic: i = !0,
            lerp: a = i ? this.options.lerp : void 0,
            duration: o = i ? this.options.duration : void 0,
            easing: s = i ? this.options.easing : void 0,
            onStart: c,
            onComplete: l,
            force: u = !1,
            userData: f,
          } = {},
        ) {
          if ((this.isStopped || this.isLocked) && !u) return;
          let p = e,
            m = t;
          if (typeof p == `string` && [`top`, `left`, `start`, `#`].includes(p))
            p = 0;
          else if (
            typeof p == `string` &&
            [`bottom`, `right`, `end`].includes(p)
          )
            p = this.limit;
          else {
            let e = null;
            if (
              (typeof p == `string`
                ? ((e = document.querySelector(p)),
                  e ||
                    (p === `#top`
                      ? (p = 0)
                      : console.warn(`Lenis: Target not found`, p)))
                : p instanceof HTMLElement && p?.nodeType && (e = p),
              e)
            ) {
              if (this.options.wrapper !== d) {
                let e = this.rootElement.getBoundingClientRect();
                m -= this.isHorizontal ? e.left : e.top;
              }
              let t = e.getBoundingClientRect();
              p = (this.isHorizontal ? t.left : t.top) + this.animatedScroll;
            }
          }
          if (typeof p == `number`) {
            if (((p += m), (p = Math.round(p)), this.options.infinite)) {
              if (i) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let e = p - this.animatedScroll;
                e > this.limit / 2
                  ? (p -= this.limit)
                  : e < -this.limit / 2 && (p += this.limit);
              }
            } else p = Rt(0, p, this.limit);
            if (p === this.targetScroll) {
              (c?.(this), l?.(this));
              return;
            }
            if (((this.userData = f ?? {}), n)) {
              ((this.animatedScroll = this.targetScroll = p),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (i || (this.targetScroll = p),
              typeof o == `number` && typeof s != `function`
                ? (s = Xt)
                : typeof s == `function` && typeof o != `number` && (o = 1),
              this.animate.fromTo(this.animatedScroll, p, {
                duration: o,
                easing: s,
                lerp: a,
                onStart: () => {
                  (r && (this.isLocked = !0),
                    (this.isScrolling = `smooth`),
                    c?.(this));
                },
                onUpdate: (e, t) => {
                  ((this.isScrolling = `smooth`),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    i && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      l?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now();
          e._lenis ||= {};
          let i = e._lenis,
            a,
            o,
            s,
            c,
            l,
            u,
            f,
            p,
            m,
            h;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = d.getComputedStyle(e);
            if (
              ((i.computedStyle = t),
              (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
              (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
              (l = [`auto`].includes(t.overscrollBehaviorX)),
              (u = [`auto`].includes(t.overscrollBehaviorY)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              !(a || o))
            )
              return !1;
            ((f = e.scrollWidth),
              (p = e.scrollHeight),
              (m = e.clientWidth),
              (h = e.clientHeight),
              (s = f > m),
              (c = p > h),
              (i.isScrollableX = s),
              (i.isScrollableY = c),
              (i.scrollWidth = f),
              (i.scrollHeight = p),
              (i.clientWidth = m),
              (i.clientHeight = h),
              (i.hasOverscrollBehaviorX = l),
              (i.hasOverscrollBehaviorY = u));
          } else
            ((s = i.isScrollableX),
              (c = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (f = i.scrollWidth),
              (p = i.scrollHeight),
              (m = i.clientWidth),
              (h = i.clientHeight),
              (l = i.hasOverscrollBehaviorX),
              (u = i.hasOverscrollBehaviorY));
          if (!((a && s) || (o && c))) return !1;
          let g = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
            _,
            v,
            y,
            ee,
            b,
            x;
          if (g === `horizontal`)
            ((_ = Math.round(e.scrollLeft)),
              (v = f - m),
              (y = t),
              (ee = a),
              (b = s),
              (x = l));
          else if (g === `vertical`)
            ((_ = Math.round(e.scrollTop)),
              (v = p - h),
              (y = n),
              (ee = o),
              (b = c),
              (x = u));
          else return !1;
          return (
            (!x && (_ >= v || _ <= 0)) || ((y > 0 ? _ < v : _ > 0) && ee && b)
          );
        }
        get rootElement() {
          return this.options.wrapper === d
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal
            ? (e.scrollX ?? e.scrollLeft)
            : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite
            ? Vt(this.animatedScroll, this.limit)
            : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e &&
            ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e &&
            ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e &&
            ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, ``)
            .trim();
        }
      }));
  });
function $t(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function en(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && en(e.offsetParent));
}
function tn(e) {
  (e?.dataset?.sticky === `true` &&
    (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && tn(e.offsetParent));
}
function nn(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? nn(e.offsetParent, n) : n;
}
function rn(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? rn(e.offsetParent, n) : n;
}
function an(e, t = 0) {
  let n = t + e.scrollTop;
  return e.offsetParent ? an(e.offsetParent, n) : n + d.scrollY;
}
function on(e, t = 0) {
  let n = t + e.scrollLeft;
  return e.offsetParent ? on(e.offsetParent, n) : n + d.scrollX;
}
function sn() {
  return ln++;
}
var cn,
  ln,
  un,
  dn = t(() => {
    (k(),
      (cn = class {
        element;
        options;
        align;
        rect = {};
        wrapperResizeObserver;
        resizeObserver;
        debouncedWrapperResize;
        constructor(
          e,
          {
            align: t = [`start`],
            ignoreSticky: n = !0,
            ignoreTransform: r = !1,
          } = {},
        ) {
          ((this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = $t(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedWrapperResize,
            )),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({
              width: this.element.offsetWidth,
              height: this.element.offsetHeight,
            }));
        }
        destroy() {
          (this.wrapperResizeObserver.disconnect(),
            this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        onWrapperResize = () => {
          let e, t;
          if (
            (this.options.ignoreSticky && en(this.element),
            this.options.ignoreTransform)
          )
            ((e = nn(this.element)), (t = rn(this.element)));
          else {
            let n = this.element.getBoundingClientRect();
            ((e = n.top + an(this.element)), (t = n.left + on(this.element)));
          }
          (this.options.ignoreSticky && tn(this.element),
            this.setRect({ top: e, left: t }));
        };
        onResize = ([e]) => {
          if (!e?.borderBoxSize[0]) return;
          let t = e.borderBoxSize[0].inlineSize,
            n = e.borderBoxSize[0].blockSize;
          this.setRect({ width: t, height: n });
        };
      }),
      (ln = 0),
      (un = class {
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: n,
            easing: r,
            duration: i,
            distanceThreshold: a = `50%`,
            debounce: o = 500,
            onSnapStart: s,
            onSnapComplete: c,
          } = {},
        ) {
          ((this.lenis = e),
            (d.lenis ||= {}),
            (d.lenis.snap = !0),
            (this.options = {
              type: t,
              lerp: n,
              easing: r,
              duration: i,
              distanceThreshold: a,
              debounce: o,
              onSnapStart: s,
              onSnapComplete: c,
            }),
            this.onWindowResize(),
            d.addEventListener(`resize`, this.onWindowResize),
            (this.onSnapDebounced = $t(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
        options;
        elements = new Map();
        snaps = new Map();
        viewport = { width: d.innerWidth, height: d.innerHeight };
        isStopped = !1;
        onSnapDebounced;
        currentSnapIndex;
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            d.removeEventListener(`resize`, this.onWindowResize),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = sn();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = sn();
          return (
            this.elements.set(n, new cn(e, t)),
            () => this.elements.delete(n)
          );
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        onWindowResize = () => {
          ((this.viewport.width = d.innerWidth),
            (this.viewport.height = d.innerHeight));
        };
        computeSnaps = () => {
          let { isHorizontal: e } = this.lenis,
            t = [...this.snaps.values()];
          return (
            this.elements.forEach(({ rect: n, align: r }) => {
              let i;
              r.forEach((r) => {
                (r === `start`
                  ? (i = n.top)
                  : r === `center`
                    ? (i = e
                        ? n.left + n.width / 2 - this.viewport.width / 2
                        : n.top + n.height / 2 - this.viewport.height / 2)
                    : r === `end` &&
                      (i = e
                        ? n.left + n.width - this.viewport.width
                        : n.top + n.height - this.viewport.height),
                  typeof i == `number` && t.push({ value: Math.ceil(i) }));
              });
            }),
            (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
            t
          );
        };
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({
                  index: this.currentSnapIndex,
                  ...n,
                });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({
                  index: this.currentSnapIndex,
                  ...n,
                });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) /
                    100) *
                  this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        onSnap = (e) => {
          if (
            this.isStopped ||
            e.event.type === `touchmove` ||
            (this.options.type === `lock` &&
              this.lenis.userData?.initiator === `snap`)
          )
            return;
          let { scroll: t, isHorizontal: n } = this.lenis,
            r = n ? e.deltaX : e.deltaY;
          t = Math.ceil(this.lenis.scroll + r);
          let i = this.computeSnaps();
          if (i.length === 0) return;
          let a,
            o = i.findLastIndex(({ value: e }) => e < t),
            s = i.findIndex(({ value: e }) => e > t);
          if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
          else {
            let e = i[o],
              n = e ? Math.abs(t - e.value) : 1 / 0,
              r = i[s];
            a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
          }
          if (a === void 0 || a === -1) return;
          a = Math.max(0, Math.min(a, i.length - 1));
          let c = i[a];
          Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
        };
        resize() {
          this.elements.forEach((e) => {
            e.onWrapperResize();
          });
        }
      }));
  });
function fn({
  smooth: e,
  infinite: t,
  orientation: n,
  intensity: r,
  children: i,
  snap: o,
}) {
  let c = O(),
    l = O(),
    u = O();
  return (
    m(() => {
      if (i && (!c.current || !l.current)) return;
      c.current &&
        l.current &&
        (n === `horizontal`
          ? c.current.style.setProperty(`overflowX`, `auto`)
          : c.current.style.setProperty(`overflowY`, `auto`));
      let r = new Zt({
        smoothWheel: e,
        infinite: t,
        orientation: n,
        gestureOrientation: n === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: c.current,
        content: l.current,
        syncTouch: !!t || n === `horizontal`,
        stopInertiaOnNavigate: !0,
      });
      u.current = r;
      let a;
      return (
        o &&
          o.snaps.length > 0 &&
          ((a = new un(r, {
            type: o.type,
            distanceThreshold: o.threshold + `%`,
          })),
          o.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let t = e.target.current.id;
            document.querySelectorAll(`#${t}`).forEach((t) => {
              a.addElement(t, { align: e.align });
            });
          })),
        (d.lenis = r),
        (d.lenisSnap = o),
        () => {
          (r && r.destroy(), a && a.destroy());
        }
      );
    }, [e, t, n, r, i, o]),
    b(h, {
      children: [
        C(`link`, {
          href: `/test/framer/other/unpkg.com/lenis@1.3.19/dist/lenis.css`,
          rel: `stylesheet`,
        }),
        i &&
          C(h, {
            children: C(`div`, {
              ref: c,
              style:
                n === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: C(`div`, {
                ref: l,
                style: { width: `100%` },
                children: a.map(i, (e) =>
                  x(e)
                    ? s(e, { style: { ...e.props.style, width: `100%` } })
                    : e,
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var pn = t(() => {
    (k(),
      E(),
      R(),
      Qt(),
      dn(),
      u(),
      (fn.displayName = `Lenis`),
      H(fn, {
        smooth: { type: G.Boolean, title: `Smooth`, defaultValue: !0 },
        intensity: {
          type: G.Number,
          title: `Intensity`,
          defaultValue: 12,
          step: 1,
          min: 1,
          max: 100,
          hidden(e) {
            return e.smooth === !1;
          },
          description: `This will be ignored on mobile.`,
        },
        infinite: {
          type: G.Boolean,
          title: `Infinite`,
          defaultValue: !1,
          hidden(e) {
            return e.smooth === !1;
          },
        },
        orientation: {
          type: G.Enum,
          defaultValue: `Vertical`,
          displaySegmentedControl: !0,
          options: [`vertical`, `horizontal`],
          optionTitles: [`Vertical`, `Horizontal`],
          hidden(e) {
            return e.smooth === !1;
          },
        },
        children: { type: G.ComponentInstance, title: `Content` },
        snap: {
          type: G.Object,
          optional: !0,
          description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
          controls: {
            type: {
              type: G.Enum,
              defaultValue: `proximity`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              options: [`proximity`, `mandatory`, `lock`],
              optionTitles: [`Proximity`, `Mandatory`, `Lock`],
            },
            threshold: {
              type: G.Number,
              defaultValue: 50,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => e.snap.type === `mandatory`,
            },
            snaps: {
              type: G.Array,
              control: {
                type: G.Object,
                controls: {
                  target: { title: `Target`, type: G.ScrollSectionRef },
                  align: {
                    type: G.Enum,
                    defaultValue: `center`,
                    displaySegmentedControl: !0,
                    segmentedControlDirection: `horizontal`,
                    options: [`start`, `center`, `end`],
                    optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                  },
                },
              },
            },
          },
        },
      }));
  }),
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn = t(() => {
    (E(),
      R(),
      u(),
      (mn = `var(--framer-icon-mask)`),
      (hn = w(function (e, t) {
        return C(`svg`, { ...e, ref: t, children: e.children });
      })),
      (gn = A.create(hn)),
      (_n = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? C(gn, { ...a, layoutId: r, ref: t, children: i })
          : C(`svg`, { ...a, ref: t, children: i });
      })),
      (vn = `<svg display="block" role="presentation" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><defs ><clipPath id="KrdCUi4Lo-2001325784-stroke"><use href="#KrdCUi4Lo-2001325784"/></clipPath>
<path d="M 0 15 C 0 6.716 6.716 0 15 0 L 15 0 C 23.284 0 30 6.716 30 15 L 30 15 C 30 23.284 23.284 30 15 30 L 15 30 C 6.716 30 0 23.284 0 15 Z" id="KrdCUi4Lo-2001325784"/></defs>
<use fill="var(--y471m3, rgba(255, 255, 255, 0.8))" height="30px" href="#KrdCUi4Lo-2001325784" id="KrdCUi4Lo" width="30px"/>
<use clip-path="url(#KrdCUi4Lo-2001325784-stroke)" fill="transparent" href="#KrdCUi4Lo-2001325784" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="round" stroke-width="calc(var(--e82k50, 0.5) * 2px)" stroke="var(--a48utx, rgb(232, 232, 232))"/><g d="M 10.66 0 L 0 0 L 5.33 5.33 L 10.66 5.33 Z M 0 10.67 L 5.33 16 L 5.33 10.67 L 10.66 10.67 L 5.33 5.33 L 0 5.33 Z" fill="transparent" height="16px" id="fwFE49BV8" transform="translate(9.67 7)" width="10.659999999999997px"><path d="M 10.66 0 L 0 0 L 5.33 5.33 L 10.66 5.33 Z" fill="var(--q09v0x, rgb(50, 50, 50))" height="5.329999999999998px" id="OS5kzShVJ" width="10.659999999999997px"/><path d="M 0 5.34 L 5.33 10.67 L 5.33 5.34 L 10.66 5.34 L 5.33 0 L 0 0 Z" fill="var(--q09v0x, rgb(50, 50, 50))" height="10.670000076293945px" id="lcuCw7ZQP" transform="translate(0 5.33)" width="10.659999999999997px"/></g></svg>`),
      (yn = ({
        backgroundColor: e,
        height: t,
        iconColor1: n,
        iconColor2: r,
        id: i,
        strokeColor: a,
        strokeWidth: o,
        width: s,
        ...c
      }) => ({
        ...c,
        eWoH2wHg9: r ?? c.eWoH2wHg9 ?? `rgba(212, 212, 212, 0.5)`,
        fPwh2F_zm: a ?? c.fPwh2F_zm ?? `rgb(232, 232, 232)`,
        IIUmeJa2R: o ?? c.IIUmeJa2R ?? 0.5,
        kUahFe0ln: n ?? c.kUahFe0ln ?? `rgb(50, 50, 50)`,
        UgsisMkEm: e ?? c.UgsisMkEm ?? `rgba(255, 255, 255, 0.8)`,
      })),
      (bn = U(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              kUahFe0ln: o,
              eWoH2wHg9: s,
              UgsisMkEm: c,
              fPwh2F_zm: l,
              IIUmeJa2R: u,
              ...d
            } = yn(e),
            f = le(`2001325784`, vn);
          return C(_n, {
            ...d,
            className: F(`framer-1xloe`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
              "--a48utx": l,
              "--e82k50": u,
              "--q09v0x": o,
              "--y471m3": c,
              ...n,
            },
            viewBox: `0 0 30 30`,
            children: C(`use`, { href: f }),
          });
        }),
        [
          `.framer-1xloe { -webkit-mask: ${mn}; aspect-ratio: 1; display: block; mask: ${mn}; width: 30px; }`,
        ],
        `framer-1xloe`,
      )),
      (bn.displayName = `Framer`),
      H(bn, {
        kUahFe0ln: {
          defaultValue: `rgb(50, 50, 50)`,
          hidden: !1,
          title: `Icon color 1`,
          type: G.Color,
        },
        eWoH2wHg9: {
          defaultValue: `rgba(212, 212, 212, 0.5)`,
          hidden: !0,
          title: `Icon color 2`,
          type: G.Color,
        },
        UgsisMkEm: {
          defaultValue: `rgba(255, 255, 255, 0.8)`,
          hidden: !1,
          title: `Background color`,
          type: G.Color,
        },
        fPwh2F_zm: {
          defaultValue: `rgb(232, 232, 232)`,
          hidden: !1,
          title: `Stroke color`,
          type: G.Color,
        },
        IIUmeJa2R: {
          defaultValue: 0.5,
          hidden: !1,
          min: 0,
          title: `Stroke width`,
          type: G.Number,
        },
      }));
  }),
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn = t(() => {
    (E(),
      R(),
      u(),
      (Sn = `var(--framer-icon-mask)`),
      (Cn = w(function (e, t) {
        return C(`svg`, { ...e, ref: t, children: e.children });
      })),
      (wn = A.create(Cn)),
      (Tn = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? C(wn, { ...a, layoutId: r, ref: t, children: i })
          : C(`svg`, { ...a, ref: t, children: i });
      })),
      (En = `<svg display="block" role="presentation" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><defs ><clipPath id="uWuFEcK1x-3123121490-stroke"><use href="#uWuFEcK1x-3123121490"/></clipPath>
<path d="M 0 4 C 0 1.791 1.791 0 4 0 L 26 0 C 28.209 0 30 1.791 30 4 L 30 26 C 30 28.209 28.209 30 26 30 L 4 30 C 1.791 30 0 28.209 0 26 Z" id="uWuFEcK1x-3123121490"/></defs>
<use fill="var(--y471m3, rgba(255, 255, 255, 0.8))" height="30px" href="#uWuFEcK1x-3123121490" id="uWuFEcK1x" width="30px"/>
<use clip-path="url(#uWuFEcK1x-3123121490-stroke)" fill="transparent" href="#uWuFEcK1x-3123121490" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="round" stroke-width="calc(var(--e82k50, 0.5) * 2px)" stroke="var(--a48utx, rgb(232, 232, 232))"/><path d="M 1.69 16 L 4.91 16 L 4.91 7.93 L 7.16 7.93 L 7.4 5.23 L 4.91 5.23 L 4.91 3.69 C 4.91 3.05 5.04 2.8 5.65 2.8 L 7.39 2.8 L 7.39 0 L 5.16 0 C 2.76 0 1.68 1.06 1.68 3.08 L 1.68 5.23 L 0 5.23 L 0 7.97 L 1.68 7.97 L 1.68 16 Z" fill="var(--q09v0x, rgb(50, 50, 50))" height="16px" id="qXurIcMPC" transform="translate(11.29 7)" width="7.400000000000006px"/></svg>`),
      (Dn = ({
        backgroundColor: e,
        height: t,
        iconColor1: n,
        iconColor2: r,
        id: i,
        strokeColor: a,
        strokeWidth: o,
        width: s,
        ...c
      }) => ({
        ...c,
        eWoH2wHg9: r ?? c.eWoH2wHg9 ?? `rgba(212, 212, 212, 0.5)`,
        fPwh2F_zm: a ?? c.fPwh2F_zm ?? `rgb(232, 232, 232)`,
        IIUmeJa2R: o ?? c.IIUmeJa2R ?? 0.5,
        kUahFe0ln: n ?? c.kUahFe0ln ?? `rgb(50, 50, 50)`,
        UgsisMkEm: e ?? c.UgsisMkEm ?? `rgba(255, 255, 255, 0.8)`,
      })),
      (On = U(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              kUahFe0ln: o,
              eWoH2wHg9: s,
              UgsisMkEm: c,
              fPwh2F_zm: l,
              IIUmeJa2R: u,
              ...d
            } = Dn(e),
            f = le(`3123121490`, En);
          return C(Tn, {
            ...d,
            className: F(`framer-Obkm1`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
              "--a48utx": l,
              "--e82k50": u,
              "--q09v0x": o,
              "--y471m3": c,
              ...n,
            },
            viewBox: `0 0 30 30`,
            children: C(`use`, { href: f }),
          });
        }),
        [
          `.framer-Obkm1 { -webkit-mask: ${Sn}; aspect-ratio: 1; display: block; mask: ${Sn}; width: 30px; }`,
        ],
        `framer-Obkm1`,
      )),
      (On.displayName = `Facebook`),
      H(On, {
        kUahFe0ln: {
          defaultValue: `rgb(50, 50, 50)`,
          hidden: !1,
          title: `Icon color 1`,
          type: G.Color,
        },
        eWoH2wHg9: {
          defaultValue: `rgba(212, 212, 212, 0.5)`,
          hidden: !0,
          title: `Icon color 2`,
          type: G.Color,
        },
        UgsisMkEm: {
          defaultValue: `rgba(255, 255, 255, 0.8)`,
          hidden: !1,
          title: `Background color`,
          type: G.Color,
        },
        fPwh2F_zm: {
          defaultValue: `rgb(232, 232, 232)`,
          hidden: !1,
          title: `Stroke color`,
          type: G.Color,
        },
        IIUmeJa2R: {
          defaultValue: 0.5,
          hidden: !1,
          min: 0,
          title: `Stroke width`,
          type: G.Number,
        },
      }));
  }),
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln = t(() => {
    (E(),
      R(),
      u(),
      (An = `var(--framer-icon-mask)`),
      (jn = w(function (e, t) {
        return C(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Mn = A.create(jn)),
      (Nn = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? C(Mn, { ...a, layoutId: r, ref: t, children: i })
          : C(`svg`, { ...a, ref: t, children: i });
      })),
      (Pn = `<svg display="block" role="presentation" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><defs ><clipPath id="iPIeLr7aS-1810172212-stroke"><use href="#iPIeLr7aS-1810172212"/></clipPath>
<path d="M 0 4 C 0 1.791 1.791 0 4 0 L 26 0 C 28.209 0 30 1.791 30 4 L 30 26 C 30 28.209 28.209 30 26 30 L 4 30 C 1.791 30 0 28.209 0 26 Z" id="iPIeLr7aS-1810172212"/></defs>
<use fill="var(--y471m3, rgba(255, 255, 255, 0.8))" height="30px" href="#iPIeLr7aS-1810172212" id="iPIeLr7aS" width="30px"/>
<use clip-path="url(#iPIeLr7aS-1810172212-stroke)" fill="transparent" href="#iPIeLr7aS-1810172212" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="round" stroke-width="calc(var(--e82k50, 0.5) * 2px)" stroke="var(--a48utx, rgb(232, 232, 232))"/><path d="M 0.26 5.3 L 3.58 5.3 L 3.58 15.96 L 0.26 15.96 Z M 1.92 0 C 2.98 0 3.84 0.86 3.84 1.92 C 3.84 2.98 2.98 3.84 1.92 3.84 C 0.86 3.84 0 2.98 0 1.92 C 0 0.86 0.86 0 1.92 0 Z M 5.66 15.96 L 8.97 15.96 L 8.97 10.69 C 8.97 9.3 9.23 7.95 10.96 7.95 C 12.69 7.95 12.68 9.54 12.68 10.78 L 12.68 15.97 L 15.99 15.97 L 15.99 10.12 C 15.99 7.25 15.37 5.04 12.01 5.04 C 10.4 5.04 9.32 5.92 8.87 6.76 L 8.82 6.76 L 8.82 5.3 L 5.64 5.3 L 5.64 15.96 Z" fill="var(--q09v0x, rgb(50, 50, 50))" height="15.969999961853029px" id="KxiscfzYi" transform="translate(7 7.02)" width="15.989999866485597px"/></svg>`),
      (Fn = ({
        backgroundColor: e,
        height: t,
        iconColor1: n,
        iconColor2: r,
        id: i,
        strokeColor: a,
        strokeWidth: o,
        width: s,
        ...c
      }) => ({
        ...c,
        eWoH2wHg9: r ?? c.eWoH2wHg9 ?? `rgba(212, 212, 212, 0.5)`,
        fPwh2F_zm: a ?? c.fPwh2F_zm ?? `rgb(232, 232, 232)`,
        IIUmeJa2R: o ?? c.IIUmeJa2R ?? 0.5,
        kUahFe0ln: n ?? c.kUahFe0ln ?? `rgb(50, 50, 50)`,
        UgsisMkEm: e ?? c.UgsisMkEm ?? `rgba(255, 255, 255, 0.8)`,
      })),
      (In = U(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              kUahFe0ln: o,
              eWoH2wHg9: s,
              UgsisMkEm: c,
              fPwh2F_zm: l,
              IIUmeJa2R: u,
              ...d
            } = Fn(e),
            f = le(`1810172212`, Pn);
          return C(Nn, {
            ...d,
            className: F(`framer-DWBhY`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
              "--a48utx": l,
              "--e82k50": u,
              "--q09v0x": o,
              "--y471m3": c,
              ...n,
            },
            viewBox: `0 0 30 30`,
            children: C(`use`, { href: f }),
          });
        }),
        [
          `.framer-DWBhY { -webkit-mask: ${An}; aspect-ratio: 1; display: block; mask: ${An}; width: 30px; }`,
        ],
        `framer-DWBhY`,
      )),
      (In.displayName = `LinkedIn`),
      H(In, {
        kUahFe0ln: {
          defaultValue: `rgb(50, 50, 50)`,
          hidden: !1,
          title: `Icon color 1`,
          type: G.Color,
        },
        eWoH2wHg9: {
          defaultValue: `rgba(212, 212, 212, 0.5)`,
          hidden: !0,
          title: `Icon color 2`,
          type: G.Color,
        },
        UgsisMkEm: {
          defaultValue: `rgba(255, 255, 255, 0.8)`,
          hidden: !1,
          title: `Background color`,
          type: G.Color,
        },
        fPwh2F_zm: {
          defaultValue: `rgb(232, 232, 232)`,
          hidden: !1,
          title: `Stroke color`,
          type: G.Color,
        },
        IIUmeJa2R: {
          defaultValue: 0.5,
          hidden: !1,
          min: 0,
          title: `Stroke width`,
          type: G.Number,
        },
      }));
  }),
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn = t(() => {
    (E(),
      R(),
      u(),
      (Rn = `var(--framer-icon-mask)`),
      (zn = w(function (e, t) {
        return C(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Bn = A.create(zn)),
      (Vn = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? C(Bn, { ...a, layoutId: r, ref: t, children: i })
          : C(`svg`, { ...a, ref: t, children: i });
      })),
      (Hn = `<svg display="block" role="presentation" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><defs ><clipPath id="tbr3ig6Nv-4004843660-stroke"><use href="#tbr3ig6Nv-4004843660"/></clipPath>
<path d="M 0 4 C 0 1.791 1.791 0 4 0 L 26 0 C 28.209 0 30 1.791 30 4 L 30 26 C 30 28.209 28.209 30 26 30 L 4 30 C 1.791 30 0 28.209 0 26 Z" id="tbr3ig6Nv-4004843660"/></defs>
<use fill="var(--y471m3, rgba(255, 255, 255, 0.8))" height="30px" href="#tbr3ig6Nv-4004843660" id="tbr3ig6Nv" width="30px"/>
<use clip-path="url(#tbr3ig6Nv-4004843660-stroke)" fill="transparent" href="#tbr3ig6Nv-4004843660" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="round" stroke-width="calc(var(--e82k50, 0.5) * 2px)" stroke="var(--a48utx, rgb(232, 232, 232))"/><path d="M 5.33 8 C 5.33 6.53 6.52 5.33 8 5.33 C 9.48 5.33 10.67 6.52 10.67 8 C 10.67 9.48 9.48 10.67 8 10.67 C 6.52 10.67 5.33 9.48 5.33 8 Z M 3.89 8 C 3.89 10.27 5.73 12.11 8 12.11 C 10.27 12.11 12.11 10.27 12.11 8 C 12.11 5.73 10.27 3.89 8 3.89 C 5.73 3.89 3.89 5.73 3.89 8 Z M 11.31 3.73 C 11.31 4.26 11.74 4.69 12.27 4.69 C 12.8 4.69 13.23 4.26 13.23 3.73 C 13.23 3.2 12.8 2.77 12.27 2.77 C 11.74 2.77 11.31 3.2 11.31 3.73 Z M 4.77 14.51 C 3.99 14.47 3.57 14.34 3.28 14.23 C 2.91 14.08 2.64 13.91 2.36 13.63 C 2.08 13.35 1.91 13.08 1.76 12.71 C 1.65 12.43 1.52 12 1.48 11.23 C 1.44 10.39 1.43 10.13 1.43 8 C 1.43 5.87 1.43 5.61 1.48 4.77 C 1.52 3.99 1.65 3.57 1.76 3.29 C 1.91 2.92 2.08 2.65 2.36 2.37 C 2.64 2.09 2.91 1.92 3.28 1.77 C 3.56 1.66 3.99 1.53 4.77 1.49 C 5.61 1.45 5.87 1.44 8 1.44 C 10.13 1.44 10.39 1.44 11.23 1.49 C 12.01 1.53 12.43 1.66 12.72 1.77 C 13.09 1.92 13.36 2.09 13.64 2.37 C 13.92 2.65 14.09 2.92 14.24 3.29 C 14.35 3.57 14.48 4 14.52 4.77 C 14.56 5.61 14.57 5.87 14.57 8 C 14.57 10.13 14.57 10.39 14.52 11.23 C 14.48 12.01 14.35 12.43 14.24 12.71 C 14.09 13.08 13.92 13.35 13.64 13.63 C 13.36 13.91 13.09 14.08 12.72 14.23 C 12.44 14.34 12.01 14.47 11.23 14.51 C 10.39 14.55 10.13 14.56 8 14.56 C 5.87 14.56 5.61 14.56 4.77 14.51 Z M 4.7 0.05 C 3.85 0.09 3.27 0.22 2.76 0.42 C 2.23 0.62 1.79 0.9 1.34 1.34 C 0.9 1.78 0.62 2.23 0.42 2.76 C 0.22 3.27 0.09 3.85 0.05 4.7 C 0.01 5.55 0 5.83 0 8 C 0 10.17 0 10.44 0.05 11.3 C 0.09 12.15 0.22 12.73 0.42 13.24 C 0.62 13.77 0.9 14.21 1.34 14.66 C 1.78 15.1 2.23 15.38 2.76 15.58 C 3.27 15.78 3.85 15.91 4.7 15.95 C 5.55 15.99 5.83 16 8 16 C 10.17 16 10.45 16 11.3 15.95 C 12.15 15.91 12.73 15.78 13.24 15.58 C 13.77 15.38 14.21 15.1 14.66 14.66 C 15.1 14.22 15.38 13.77 15.58 13.24 C 15.78 12.73 15.91 12.15 15.95 11.3 C 15.99 10.45 16 10.17 16 8 C 16 5.83 16 5.56 15.95 4.7 C 15.91 3.85 15.78 3.27 15.58 2.76 C 15.38 2.23 15.1 1.79 14.66 1.34 C 14.22 0.9 13.77 0.62 13.24 0.42 C 12.73 0.22 12.15 0.09 11.3 0.05 C 10.45 0.01 10.17 0 8 0 C 5.83 0 5.56 0 4.7 0.05 Z" fill="var(--q09v0x, rgb(50, 50, 50))" height="16px" id="OjZWMg796" transform="translate(7 7)" width="16px"/></svg>`),
      (Un = ({
        backgroundColor: e,
        height: t,
        iconColor1: n,
        iconColor2: r,
        id: i,
        strokeColor: a,
        strokeWidth: o,
        width: s,
        ...c
      }) => ({
        ...c,
        eWoH2wHg9: r ?? c.eWoH2wHg9 ?? `rgba(212, 212, 212, 0.5)`,
        fPwh2F_zm: a ?? c.fPwh2F_zm ?? `rgb(232, 232, 232)`,
        IIUmeJa2R: o ?? c.IIUmeJa2R ?? 0.5,
        kUahFe0ln: n ?? c.kUahFe0ln ?? `rgb(50, 50, 50)`,
        UgsisMkEm: e ?? c.UgsisMkEm ?? `rgba(255, 255, 255, 0.8)`,
      })),
      (Wn = U(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              kUahFe0ln: o,
              eWoH2wHg9: s,
              UgsisMkEm: c,
              fPwh2F_zm: l,
              IIUmeJa2R: u,
              ...d
            } = Un(e),
            f = le(`4004843660`, Hn);
          return C(Vn, {
            ...d,
            className: F(`framer-UDHDx`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
              "--a48utx": l,
              "--e82k50": u,
              "--q09v0x": o,
              "--y471m3": c,
              ...n,
            },
            viewBox: `0 0 30 30`,
            children: C(`use`, { href: f }),
          });
        }),
        [
          `.framer-UDHDx { -webkit-mask: ${Rn}; aspect-ratio: 1; display: block; mask: ${Rn}; width: 30px; }`,
        ],
        `framer-UDHDx`,
      )),
      (Wn.displayName = `Instagram`),
      H(Wn, {
        kUahFe0ln: {
          defaultValue: `rgb(50, 50, 50)`,
          hidden: !1,
          title: `Icon color 1`,
          type: G.Color,
        },
        eWoH2wHg9: {
          defaultValue: `rgba(212, 212, 212, 0.5)`,
          hidden: !0,
          title: `Icon color 2`,
          type: G.Color,
        },
        UgsisMkEm: {
          defaultValue: `rgba(255, 255, 255, 0.8)`,
          hidden: !1,
          title: `Background color`,
          type: G.Color,
        },
        fPwh2F_zm: {
          defaultValue: `rgb(232, 232, 232)`,
          hidden: !1,
          title: `Stroke color`,
          type: G.Color,
        },
        IIUmeJa2R: {
          defaultValue: 0.5,
          hidden: !1,
          min: 0,
          title: `Stroke width`,
          type: G.Number,
        },
      }));
  }),
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n = t(() => {
    (E(),
      R(),
      u(),
      (Kn = `var(--framer-icon-mask)`),
      (qn = w(function (e, t) {
        return C(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Jn = A.create(qn)),
      (Yn = w((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? C(Jn, { ...a, layoutId: r, ref: t, children: i })
          : C(`svg`, { ...a, ref: t, children: i });
      })),
      (Xn = `<svg display="block" role="presentation" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><defs ><clipPath id="JeFgndB_9-2091705297-stroke"><use href="#JeFgndB_9-2091705297"/></clipPath>
<path d="M 0 4 C 0 1.791 1.791 0 4 0 L 26 0 C 28.209 0 30 1.791 30 4 L 30 26 C 30 28.209 28.209 30 26 30 L 4 30 C 1.791 30 0 28.209 0 26 Z" id="JeFgndB_9-2091705297"/></defs>
<use fill="var(--y471m3, rgba(255, 255, 255, 0.8))" height="30px" href="#JeFgndB_9-2091705297" id="JeFgndB_9" width="30px"/>
<use clip-path="url(#JeFgndB_9-2091705297-stroke)" fill="transparent" href="#JeFgndB_9-2091705297" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="round" stroke-width="calc(var(--e82k50, 0.5) * 2px)" stroke="var(--a48utx, rgb(232, 232, 232))"/><path d="M 0.12 16.01 L 1.68 16.01 L 6.9 9.93 L 11.1 15.97 L 11.13 16.01 L 16.01 16.01 L 9.6 6.79 L 15.42 0.01 L 13.86 0.01 L 8.9 5.78 L 4.91 0.04 L 4.88 0 L 0 0 L 6.2 8.92 L 0.12 16 Z M 7.74 8.94 L 8.74 7.78 L 13.63 14.82 L 11.83 14.82 Z M 2.37 1.2 L 4.17 1.2 L 8.04 6.77 L 7.04 7.93 L 2.36 1.2 Z" fill="var(--q09v0x, rgb(50, 50, 50))" height="16.01px" id="eUCysipLn" transform="translate(7 6.99)" width="16.009999999999998px"/></svg>`),
      (Zn = ({
        backgroundColor: e,
        height: t,
        iconColor1: n,
        iconColor2: r,
        id: i,
        strokeColor: a,
        strokeWidth: o,
        width: s,
        ...c
      }) => ({
        ...c,
        eWoH2wHg9: r ?? c.eWoH2wHg9 ?? `rgba(212, 212, 212, 0.5)`,
        fPwh2F_zm: a ?? c.fPwh2F_zm ?? `rgb(232, 232, 232)`,
        IIUmeJa2R: o ?? c.IIUmeJa2R ?? 0.5,
        kUahFe0ln: n ?? c.kUahFe0ln ?? `rgb(50, 50, 50)`,
        UgsisMkEm: e ?? c.UgsisMkEm ?? `rgba(255, 255, 255, 0.8)`,
      })),
      (Qn = U(
        w(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              kUahFe0ln: o,
              eWoH2wHg9: s,
              UgsisMkEm: c,
              fPwh2F_zm: l,
              IIUmeJa2R: u,
              ...d
            } = Zn(e),
            f = le(`2091705297`, Xn);
          return C(Yn, {
            ...d,
            className: F(`framer-xlxhw`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: {
              "--a48utx": l,
              "--e82k50": u,
              "--q09v0x": o,
              "--y471m3": c,
              ...n,
            },
            viewBox: `0 0 30 30`,
            children: C(`use`, { href: f }),
          });
        }),
        [
          `.framer-xlxhw { -webkit-mask: ${Kn}; aspect-ratio: 1; display: block; mask: ${Kn}; width: 30px; }`,
        ],
        `framer-xlxhw`,
      )),
      (Qn.displayName = `X (Twitter)`),
      H(Qn, {
        kUahFe0ln: {
          defaultValue: `rgb(50, 50, 50)`,
          hidden: !1,
          title: `Icon color 1`,
          type: G.Color,
        },
        eWoH2wHg9: {
          defaultValue: `rgba(212, 212, 212, 0.5)`,
          hidden: !0,
          title: `Icon color 2`,
          type: G.Color,
        },
        UgsisMkEm: {
          defaultValue: `rgba(255, 255, 255, 0.8)`,
          hidden: !1,
          title: `Background color`,
          type: G.Color,
        },
        fPwh2F_zm: {
          defaultValue: `rgb(232, 232, 232)`,
          hidden: !1,
          title: `Stroke color`,
          type: G.Color,
        },
        IIUmeJa2R: {
          defaultValue: 0.5,
          hidden: !1,
          min: 0,
          title: `Stroke width`,
          type: G.Number,
        },
      }));
  });
function er(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  J,
  ur = t(() => {
    (E(),
      R(),
      ae(),
      u(),
      (tr = [`I_MIiUcBI`, `md_2EGScz`]),
      (nr = `framer-oG402`),
      (rr = { I_MIiUcBI: `framer-v-1qd1548`, md_2EGScz: `framer-v-2rnmh5` }),
      (ir = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ar = ({ value: e, children: t }) => {
        let n = y(ie),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(ie.Provider, { value: i, children: t });
      }),
      (or = { "Variant 1": `I_MIiUcBI`, "Variant 2": `md_2EGScz` }),
      (sr = A.create(o)),
      (cr = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nYqegR9A1: e ?? i.nYqegR9A1,
        variant: or[i.variant] ?? i.variant ?? `I_MIiUcBI`,
      })),
      (lr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = U(
        w(function (e, t) {
          let n = O(null),
            r = t ?? n,
            i = ne(),
            { activeLocale: a, setLocale: o } = Te();
          ke();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              nYqegR9A1: d,
              ...f
            } = cr(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: _,
              isLoading: v,
              setGestureState: y,
              setVariant: ee,
              variants: x,
            } = se({
              cycleOrder: tr,
              defaultVariant: `I_MIiUcBI`,
              ref: r,
              variant: u,
              variantClassNames: rr,
            }),
            S = lr(e, x),
            { activeVariantCallback: w, delay: T } = He(p),
            E = w(async (...e) => {
              if ((y({ isPressed: !1 }), d && (await d(...e)) === !1))
                return !1;
            }),
            te = F(nr);
          return C(re, {
            id: l ?? i,
            children: C(sr, {
              animate: x,
              initial: !1,
              children: C(ar, {
                value: ir,
                children: b(A.div, {
                  ...f,
                  ...g,
                  className: F(te, `framer-1qd1548`, c, m),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: S,
                  layoutId: `I_MIiUcBI`,
                  onTap: E,
                  ref: r,
                  style: { ...s },
                  ...er(
                    { md_2EGScz: { "data-framer-name": `Variant 2` } },
                    p,
                    _,
                  ),
                  children: [
                    C(A.div, {
                      className: `framer-xwg8km`,
                      layoutDependency: S,
                      layoutId: `GcEwhzjDm`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        rotate: 0,
                      },
                      variants: { md_2EGScz: { rotate: 45 } },
                    }),
                    C(A.div, {
                      className: `framer-1e0yqhx`,
                      layoutDependency: S,
                      layoutId: `gV_qkgklo`,
                      style: {
                        backgroundColor: `rgb(255, 255, 255)`,
                        rotate: 0,
                      },
                      variants: { md_2EGScz: { rotate: -45 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-oG402.framer-6cjl10, .framer-oG402 .framer-6cjl10 { display: block; }`,
          `.framer-oG402.framer-1qd1548 { cursor: pointer; height: 36px; overflow: visible; position: relative; width: 36px; }`,
          `.framer-oG402 .framer-xwg8km { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: visible; position: absolute; top: calc(33.33333333333336% - 2px / 2); width: 20px; }`,
          `.framer-oG402 .framer-1e0yqhx { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: visible; position: absolute; top: calc(66.66666666666669% - 2px / 2); width: 20px; }`,
          `.framer-oG402.framer-v-2rnmh5 .framer-xwg8km, .framer-oG402.framer-v-2rnmh5 .framer-1e0yqhx { top: calc(50.00000000000002% - 2px / 2); }`,
        ],
        `framer-oG402`,
      )),
      (J.displayName = `menu icon`),
      (J.defaultProps = { height: 36, width: 36 }),
      H(J, {
        variant: {
          options: [`I_MIiUcBI`, `md_2EGScz`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: G.Enum,
        },
        nYqegR9A1: { title: `Click`, type: G.EventHandler },
      }),
      j(J, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function dr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Y,
  Dr = t(() => {
    (E(),
      R(),
      ae(),
      u(),
      Je(),
      yt(),
      xt(),
      et(),
      Ze(),
      ct(),
      Tt(),
      ur(),
      (fr = P(bt)),
      (pr = P(mt)),
      (mr = P(K)),
      (hr = P(J)),
      (gr = [
        `XH9ums2tQ`,
        `eMi5Og3Sd`,
        `Vcc3AvD1S`,
        `u2b8PUbT8`,
        `z0mNJzuYk`,
        `f8sOYzyhl`,
      ]),
      (_r = `framer-hmqps`),
      (vr = {
        eMi5Og3Sd: `framer-v-m1g0je`,
        f8sOYzyhl: `framer-v-c2dsud`,
        u2b8PUbT8: `framer-v-1h3d53s`,
        Vcc3AvD1S: `framer-v-1yeeya9`,
        XH9ums2tQ: `framer-v-wz7sin`,
        z0mNJzuYk: `framer-v-xqjeaw`,
      }),
      (yr = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (br = { bounce: 0.1, delay: 0, duration: 0.6, type: `spring` }),
      (xr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Sr = ({ value: e, children: t }) => {
        let n = y(ie),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(ie.Provider, { value: i, children: t });
      }),
      (Cr = {
        "desktop-scroll": `Vcc3AvD1S`,
        "desktop-top": `eMi5Og3Sd`,
        "mobile open": `z0mNJzuYk`,
        "mobile-scroll": `u2b8PUbT8`,
        "mobile-top": `f8sOYzyhl`,
        default: `XH9ums2tQ`,
      }),
      (wr = A.create(o)),
      (Tr = ({ gap: e, height: t, id: n, padding: r, width: i, ...a }) => ({
        ...a,
        ipjLzscUZ: e ?? a.ipjLzscUZ ?? 48,
        variant: Cr[a.variant] ?? a.variant ?? `XH9ums2tQ`,
        Y2WP5Cm7U: r ?? a.Y2WP5Cm7U ?? `0px 80px 0px 80px`,
      })),
      (Er = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Y = U(
        w(function (e, t) {
          let n = O(null),
            r = t ?? n,
            i = ne(),
            { activeLocale: a, setLocale: s } = Te();
          ke();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              Y2WP5Cm7U: f,
              ipjLzscUZ: p,
              ...m
            } = Tr(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: ee,
              setGestureState: x,
              setVariant: S,
              variants: w,
            } = se({
              cycleOrder: gr,
              defaultVariant: `XH9ums2tQ`,
              ref: r,
              variant: d,
              variantClassNames: vr,
            }),
            T = Er(e, w),
            { activeVariantCallback: E, delay: te } = He(h),
            D = E(async (...e) => {
              S(`u2b8PUbT8`);
            }),
            k = E(async (...e) => {
              S(`z0mNJzuYk`);
            }),
            ie = E(async (...e) => {
              S(`u2b8PUbT8`);
            }),
            ae = E(async (...e) => {
              S(`u2b8PUbT8`);
            }),
            oe = F(_r, $e, wt, Qe),
            j = () => ![`u2b8PUbT8`, `z0mNJzuYk`, `f8sOYzyhl`].includes(h);
          de();
          let ce = () => ![`eMi5Og3Sd`, `Vcc3AvD1S`].includes(h);
          return C(re, {
            id: u ?? i,
            children: C(wr, {
              animate: w,
              initial: !1,
              children: C(Sr, {
                value: br,
                children: b(A.nav, {
                  ...m,
                  ...v,
                  className: F(oe, `framer-wz7sin`, l, g),
                  "data-framer-name": `default`,
                  layoutDependency: T,
                  layoutId: `XH9ums2tQ`,
                  ref: r,
                  style: {
                    "--1gxu5kl": yr(f),
                    "--border-bottom-width": `0px`,
                    "--border-color": `rgba(0, 0, 0, 0)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backdropFilter: `none`,
                    backgroundColor: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(6, 5, 3, 0.75))`,
                    WebkitBackdropFilter: `none`,
                    ...c,
                  },
                  variants: {
                    eMi5Og3Sd: { backgroundColor: `rgba(0, 7, 13, 0)` },
                    f8sOYzyhl: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-47679c26-af3f-4cd0-91b2-530be918763e, rgba(255, 255, 255, 0))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-1ec80be1-93dc-4b5e-a38f-5b1f087c77a5, rgba(0, 0, 0, 0))`,
                      WebkitBackdropFilter: `none`,
                    },
                    u2b8PUbT8: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backdropFilter: `blur(8px)`,
                      WebkitBackdropFilter: `blur(8px)`,
                    },
                    Vcc3AvD1S: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    z0mNJzuYk: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backdropFilter: `blur(8px)`,
                      WebkitBackdropFilter: `blur(8px)`,
                    },
                  },
                  ...dr(
                    {
                      eMi5Og3Sd: { "data-framer-name": `desktop-top` },
                      f8sOYzyhl: {
                        "data-border": !0,
                        "data-framer-name": `mobile-top`,
                      },
                      u2b8PUbT8: {
                        "data-border": !0,
                        "data-framer-name": `mobile-scroll`,
                      },
                      Vcc3AvD1S: { "data-framer-name": `desktop-scroll` },
                      z0mNJzuYk: {
                        "data-border": !0,
                        "data-framer-name": `mobile open`,
                      },
                    },
                    h,
                    y,
                  ),
                  children: [
                    j() &&
                      C(V, {
                        children: C(ye, {
                          className: `framer-6fjk0p-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: T,
                          layoutId: `nNkdtyVGu-container`,
                          nodeId: `nNkdtyVGu`,
                          rendersWithMotion: !0,
                          scopeId: `CZBjtvBZA`,
                          style: { opacity: 1 },
                          variants: {
                            eMi5Og3Sd: { opacity: 0 },
                            Vcc3AvD1S: { opacity: 1 },
                          },
                          children: C(bt, {
                            cornerRadius: 0,
                            easing: `easeInOut`,
                            gradientDirection: `to bottom`,
                            height: `100%`,
                            id: `nNkdtyVGu`,
                            layoutId: `nNkdtyVGu`,
                            startColor: `rgb(0, 0, 0)`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    b(A.div, {
                      className: `framer-tk7xlw`,
                      layoutDependency: T,
                      layoutId: `fjII48VTJ`,
                      children: [
                        b(A.div, {
                          className: `framer-16k0bb6`,
                          layoutDependency: T,
                          layoutId: `doK1EzuEY`,
                          children: [
                            C(A.div, {
                              className: `framer-1bg5h3h`,
                              layoutDependency: T,
                              layoutId: `Ndu_VSnLU`,
                              children: C(B, {
                                href: {
                                  hash: `:e7Tjt_QG9`,
                                  webPageId: `jOgyCWBcf`,
                                },
                                motionChild: !0,
                                nodeId: `h0zW39P5z`,
                                openInNewTab: !1,
                                scopeId: `CZBjtvBZA`,
                                smoothScroll: !0,
                                children: C(A.a, {
                                  className: `framer-3ttqtb framer-cpft6o`,
                                  layoutDependency: T,
                                  layoutId: `h0zW39P5z`,
                                  ...dr(
                                    {
                                      z0mNJzuYk: {
                                        "data-highlight": !0,
                                        onTap: D,
                                      },
                                    },
                                    h,
                                    y,
                                  ),
                                  children: C(mt, {
                                    animated: !0,
                                    className: `framer-1vzrwxu`,
                                    layoutDependency: T,
                                    layoutId: `F03YHQ78Y`,
                                    style: {
                                      "--o4jego": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(250, 230, 225))`,
                                    },
                                  }),
                                }),
                              }),
                            }),
                            j() &&
                              b(A.div, {
                                className: `framer-13utme7`,
                                layoutDependency: T,
                                layoutId: `DvOBAAgo_`,
                                style: { "--9q2k08": yr(p) },
                                children: [
                                  C(M, {
                                    __fromCanvasComponent: !0,
                                    children: C(o, {
                                      children: C(A.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                        },
                                        children: C(B, {
                                          href: { webPageId: `dpEtnX2Cb` },
                                          motionChild: !0,
                                          nodeId: `HjmaFE_lO`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `CZBjtvBZA`,
                                          smoothScroll: !1,
                                          children: C(A.a, {
                                            className: `framer-styles-preset-v2iiak`,
                                            "data-styles-preset": `Bh7brll6H`,
                                            children: `About`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-n64igo`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `HjmaFE_lO`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  C(M, {
                                    __fromCanvasComponent: !0,
                                    children: C(o, {
                                      children: C(A.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                        },
                                        children: C(B, {
                                          href: { webPageId: `bXKgIgpkp` },
                                          motionChild: !0,
                                          nodeId: `CPiql8Jh3`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `CZBjtvBZA`,
                                          smoothScroll: !1,
                                          children: C(A.a, {
                                            className: `framer-styles-preset-v2iiak`,
                                            "data-styles-preset": `Bh7brll6H`,
                                            children: `Changelog`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-14r64j8`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `CPiql8Jh3`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  C(M, {
                                    __fromCanvasComponent: !0,
                                    children: C(o, {
                                      children: C(A.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                        },
                                        children: C(B, {
                                          href: { webPageId: `WBQiMtek1` },
                                          motionChild: !0,
                                          nodeId: `gBadw2o3v`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `CZBjtvBZA`,
                                          smoothScroll: !1,
                                          children: C(A.a, {
                                            className: `framer-styles-preset-v2iiak`,
                                            "data-styles-preset": `Bh7brll6H`,
                                            children: `Pricing`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-uq3nsd`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `gBadw2o3v`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  C(M, {
                                    __fromCanvasComponent: !0,
                                    children: C(o, {
                                      children: C(A.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                        },
                                        children: C(B, {
                                          href: { webPageId: `JHJfURpkN` },
                                          motionChild: !0,
                                          nodeId: `U_yK6z8f7`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `CZBjtvBZA`,
                                          smoothScroll: !1,
                                          children: C(A.a, {
                                            className: `framer-styles-preset-v2iiak`,
                                            "data-styles-preset": `Bh7brll6H`,
                                            children: `Blog`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-2tenf9`,
                                    fonts: [`Inter`],
                                    layoutDependency: T,
                                    layoutId: `U_yK6z8f7`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            b(A.div, {
                              className: `framer-1gy7y3o`,
                              layoutDependency: T,
                              layoutId: `mK3G0IvX5`,
                              children: [
                                j() &&
                                  C(V, {
                                    height: 32,
                                    width: `96px`,
                                    children: C(ye, {
                                      className: `framer-13whxli-container`,
                                      layoutDependency: T,
                                      layoutId: `zDXC0OFiR-container`,
                                      nodeId: `zDXC0OFiR`,
                                      rendersWithMotion: !0,
                                      scopeId: `CZBjtvBZA`,
                                      style: { opacity: 0 },
                                      children: C(K, {
                                        BANE331ww: !1,
                                        FWKDMXbN2: `https://app.endgame.io/login`,
                                        height: `100%`,
                                        id: `zDXC0OFiR`,
                                        layoutId: `zDXC0OFiR`,
                                        mYjHZJ6Gn: `Go to app`,
                                        p8v7WNQPZ: qe,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        variant: xr(`cNdVluHs7`),
                                        width: `100%`,
                                        YkfrxUoaP: !1,
                                      }),
                                    }),
                                  }),
                                j() &&
                                  C(ue, {
                                    links: [
                                      {
                                        href: { webPageId: `QEHd0IWPx` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `QEHd0IWPx` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `QEHd0IWPx` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      C(V, {
                                        height: 36,
                                        width: `109px`,
                                        children: C(ye, {
                                          className: `framer-vsguht-container`,
                                          layoutDependency: T,
                                          layoutId: `qpbToOpOy-container`,
                                          nodeId: `qpbToOpOy`,
                                          rendersWithMotion: !0,
                                          scopeId: `CZBjtvBZA`,
                                          children: C(K, {
                                            BANE331ww: !1,
                                            FWKDMXbN2: e[0],
                                            height: `100%`,
                                            id: `qpbToOpOy`,
                                            layoutId: `qpbToOpOy`,
                                            mYjHZJ6Gn: `Get started`,
                                            p8v7WNQPZ: qe,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            variant: xr(`cNdVluHs7`),
                                            width: `100%`,
                                            YkfrxUoaP: !1,
                                            ...dr(
                                              {
                                                eMi5Og3Sd: { FWKDMXbN2: e[1] },
                                                Vcc3AvD1S: { FWKDMXbN2: e[2] },
                                              },
                                              h,
                                              y,
                                            ),
                                          }),
                                        }),
                                      }),
                                  }),
                                ce() &&
                                  C(V, {
                                    height: 36,
                                    width: `36px`,
                                    children: C(ye, {
                                      className: `framer-1arlgxd-container`,
                                      layoutDependency: T,
                                      layoutId: `ljpblnATi-container`,
                                      nodeId: `ljpblnATi`,
                                      rendersWithMotion: !0,
                                      scopeId: `CZBjtvBZA`,
                                      children: C(J, {
                                        height: `100%`,
                                        id: `ljpblnATi`,
                                        layoutId: `ljpblnATi`,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        variant: xr(`I_MIiUcBI`),
                                        width: `100%`,
                                        ...dr(
                                          {
                                            f8sOYzyhl: { nYqegR9A1: k },
                                            u2b8PUbT8: { nYqegR9A1: k },
                                            z0mNJzuYk: {
                                              nYqegR9A1: ie,
                                              variant: xr(`md_2EGScz`),
                                            },
                                          },
                                          h,
                                          y,
                                        ),
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        ce() &&
                          b(A.div, {
                            className: `framer-9t1ray`,
                            layoutDependency: T,
                            layoutId: `LMxyDRINY`,
                            style: { opacity: 1 },
                            variants: {
                              f8sOYzyhl: { opacity: 0 },
                              u2b8PUbT8: { opacity: 0 },
                              z0mNJzuYk: { opacity: 1 },
                            },
                            children: [
                              C(M, {
                                __fromCanvasComponent: !0,
                                children: C(o, {
                                  children: C(A.p, {
                                    className: `framer-styles-preset-prenqk`,
                                    "data-styles-preset": `POYKcChXw`,
                                    dir: `auto`,
                                    children: C(B, {
                                      href: { webPageId: `dpEtnX2Cb` },
                                      motionChild: !0,
                                      nodeId: `YXLWcXh2u`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CZBjtvBZA`,
                                      smoothScroll: !1,
                                      children: C(A.a, {
                                        className: `framer-styles-preset-v2iiak`,
                                        "data-styles-preset": `Bh7brll6H`,
                                        children: `About`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-s3kwg5`,
                                "data-highlight": !0,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `YXLWcXh2u`,
                                onTap: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              C(M, {
                                __fromCanvasComponent: !0,
                                children: C(o, {
                                  children: C(A.p, {
                                    className: `framer-styles-preset-prenqk`,
                                    "data-styles-preset": `POYKcChXw`,
                                    dir: `auto`,
                                    children: C(B, {
                                      href: { webPageId: `bXKgIgpkp` },
                                      motionChild: !0,
                                      nodeId: `cpwGwRCMq`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CZBjtvBZA`,
                                      smoothScroll: !1,
                                      children: C(A.a, {
                                        className: `framer-styles-preset-v2iiak`,
                                        "data-styles-preset": `Bh7brll6H`,
                                        children: `Changelog`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-19vvauf`,
                                "data-highlight": !0,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `cpwGwRCMq`,
                                onTap: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              C(M, {
                                __fromCanvasComponent: !0,
                                children: C(o, {
                                  children: C(A.p, {
                                    className: `framer-styles-preset-prenqk`,
                                    "data-styles-preset": `POYKcChXw`,
                                    dir: `auto`,
                                    children: C(B, {
                                      href: { webPageId: `WBQiMtek1` },
                                      motionChild: !0,
                                      nodeId: `ksOocRXFX`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CZBjtvBZA`,
                                      smoothScroll: !1,
                                      children: C(A.a, {
                                        className: `framer-styles-preset-v2iiak`,
                                        "data-styles-preset": `Bh7brll6H`,
                                        children: `Pricing`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1b71f1s`,
                                "data-highlight": !0,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `ksOocRXFX`,
                                onTap: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              C(M, {
                                __fromCanvasComponent: !0,
                                children: C(o, {
                                  children: C(A.p, {
                                    className: `framer-styles-preset-prenqk`,
                                    "data-styles-preset": `POYKcChXw`,
                                    dir: `auto`,
                                    children: C(B, {
                                      href: { webPageId: `JHJfURpkN` },
                                      motionChild: !0,
                                      nodeId: `NCpHFk3gq`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `CZBjtvBZA`,
                                      smoothScroll: !1,
                                      children: C(A.a, {
                                        className: `framer-styles-preset-v2iiak`,
                                        "data-styles-preset": `Bh7brll6H`,
                                        children: `Blog`,
                                      }),
                                    }),
                                  }),
                                }),
                                className: `framer-1vzos0e`,
                                "data-highlight": !0,
                                fonts: [`Inter`],
                                layoutDependency: T,
                                layoutId: `NCpHFk3gq`,
                                onTap: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              C(A.div, {
                                className: `framer-z1s5bh`,
                                "data-border": !0,
                                "data-framer-name": `CTA`,
                                layoutDependency: T,
                                layoutId: `RKTM8Ayjk`,
                                style: {
                                  "--border-bottom-width": `0px`,
                                  "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `0px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `1px`,
                                },
                                children: C(ue, {
                                  links: [
                                    {
                                      href: { webPageId: `QEHd0IWPx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `QEHd0IWPx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `QEHd0IWPx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `QEHd0IWPx` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    C(V, {
                                      height: 36,
                                      children: C(ye, {
                                        className: `framer-5w4ti-container`,
                                        layoutDependency: T,
                                        layoutId: `BzKELhPyE-container`,
                                        nodeId: `BzKELhPyE`,
                                        rendersWithMotion: !0,
                                        scopeId: `CZBjtvBZA`,
                                        children: C(K, {
                                          AMCchnpNw: ae,
                                          BANE331ww: !1,
                                          FWKDMXbN2: e[0],
                                          height: `100%`,
                                          id: `BzKELhPyE`,
                                          layoutId: `BzKELhPyE`,
                                          mYjHZJ6Gn: `Get started`,
                                          p8v7WNQPZ: qe,
                                          style: { height: `100%` },
                                          variant: xr(`cNdVluHs7`),
                                          width: `100%`,
                                          YkfrxUoaP: !1,
                                          ...dr(
                                            {
                                              f8sOYzyhl: { FWKDMXbN2: e[3] },
                                              u2b8PUbT8: { FWKDMXbN2: e[1] },
                                              z0mNJzuYk: { FWKDMXbN2: e[2] },
                                            },
                                            h,
                                            y,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hmqps.framer-cpft6o, .framer-hmqps .framer-cpft6o { display: block; }`,
          `.framer-hmqps.framer-wz7sin { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: var(--1gxu5kl); position: relative; width: 1440px; }`,
          `.framer-hmqps .framer-6fjk0p-container { bottom: -114px; flex: none; left: calc(50.00000000000002% - 100% / 2); pointer-events: none; position: absolute; top: -42px; width: 100%; z-index: 0; }`,
          `.framer-hmqps .framer-tk7xlw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 1080px; overflow: var(--overflow-clip-fallback, clip); padding: 12px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-hmqps .framer-16k0bb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-hmqps .framer-1bg5h3h { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 244px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-hmqps .framer-3ttqtb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-hmqps .framer-1vzrwxu { flex: none; height: 32px; position: relative; width: var(--framer-aspect-ratio-supported, 32px); }`,
          `.framer-hmqps .framer-13utme7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: var(--9q2k08); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-hmqps .framer-n64igo, .framer-hmqps .framer-14r64j8, .framer-hmqps .framer-uq3nsd, .framer-hmqps .framer-2tenf9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-hmqps .framer-1gy7y3o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 244px; }`,
          `.framer-hmqps .framer-13whxli-container { flex: none; height: 32px; position: relative; width: 96px; }`,
          `.framer-hmqps .framer-vsguht-container { flex: none; height: 36px; position: relative; width: 109px; }`,
          `.framer-hmqps .framer-1arlgxd-container { flex: none; height: 36px; position: relative; width: 36px; }`,
          `.framer-hmqps .framer-9t1ray { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 36px 24px 36px 24px; position: relative; width: 100%; }`,
          `.framer-hmqps .framer-s3kwg5, .framer-hmqps .framer-19vvauf, .framer-hmqps .framer-1b71f1s, .framer-hmqps .framer-1vzos0e { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-hmqps .framer-z1s5bh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 400px; overflow: visible; padding: 24px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-hmqps .framer-5w4ti-container { flex: none; height: 36px; position: relative; width: auto; }`,
          `.framer-hmqps.framer-v-1h3d53s .framer-tk7xlw, .framer-hmqps.framer-v-xqjeaw .framer-tk7xlw, .framer-hmqps.framer-v-c2dsud .framer-tk7xlw { gap: 0px; max-width: 720px; padding: 16px 0px 16px 0px; }`,
          `.framer-hmqps.framer-v-1h3d53s .framer-1vzrwxu, .framer-hmqps.framer-v-xqjeaw .framer-1vzrwxu, .framer-hmqps.framer-v-c2dsud .framer-1vzrwxu { width: var(--framer-aspect-ratio-supported, 200px); }`,
          `.framer-hmqps.framer-v-1h3d53s .framer-1gy7y3o, .framer-hmqps.framer-v-xqjeaw .framer-1gy7y3o, .framer-hmqps.framer-v-c2dsud .framer-1gy7y3o { flex: 1 0 0px; width: 1px; }`,
          `.framer-hmqps.framer-v-1h3d53s .framer-9t1ray, .framer-hmqps.framer-v-c2dsud .framer-9t1ray { gap: 0px; height: 1px; padding: 0px; }`,
          `.framer-hmqps.framer-v-xqjeaw .framer-3ttqtb { cursor: pointer; }`,
          `.framer-hmqps.framer-v-xqjeaw .framer-9t1ray { padding: 24px; }`,
          ...Ke,
          ...St,
          ...Ye,
          `.framer-hmqps[data-border="true"]::after, .framer-hmqps [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-hmqps`,
      )),
      (Y.displayName = `navbar`),
      (Y.defaultProps = { height: 444, width: 1440 }),
      H(Y, {
        variant: {
          options: [
            `XH9ums2tQ`,
            `eMi5Og3Sd`,
            `Vcc3AvD1S`,
            `u2b8PUbT8`,
            `z0mNJzuYk`,
            `f8sOYzyhl`,
          ],
          optionTitles: [
            `default`,
            `desktop-top`,
            `desktop-scroll`,
            `mobile-scroll`,
            `mobile open`,
            `mobile-top`,
          ],
          title: `Variant`,
          type: G.Enum,
        },
        Y2WP5Cm7U: {
          defaultValue: `0px 80px 0px 80px`,
          title: `Padding`,
          type: G.Padding,
        },
        ipjLzscUZ: { defaultValue: 48, min: 0, title: `Gap`, type: G.Number },
        onipjLzscUZChange: { changes: `ipjLzscUZ`, type: G.ChangeHandler },
      }),
      j(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/test/framer/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/test/framer/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/test/framer/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/test/framer/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/test/framer/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/test/framer/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/test/framer/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...fr,
          ...pr,
          ...mr,
          ...hr,
          ...L(Xe),
          ...L(Ct),
          ...L(Ge),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Y.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([pe(K, {}, t), pe(J, {}, t)])
        ),
      }));
  }),
  Or = e({ __FramerMetadata__: () => Ir, default: () => X });
function kr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  X,
  Z,
  Ir,
  Lr = t(() => {
    (E(),
      R(),
      ae(),
      u(),
      (Ar = { X14OHkEZf: { hover: !0 } }),
      (jr = `framer-8Kffo`),
      (Mr = { X14OHkEZf: `framer-v-6z0m75` }),
      (Nr = A.create(o)),
      (Pr = ({
        border: e,
        click: t,
        fill: n,
        height: r,
        id: i,
        link: a,
        shadow: o,
        width: s,
        ...c
      }) => ({
        ...c,
        E4hO1mC86:
          o ??
          c.E4hO1mC86 ??
          `0px 0.48174984141951427px 1.252549587690737px -1.25px rgba(0, 0, 0, 0.29), 0px 1.8308266425947657px 4.760149270746391px -2.5px rgba(0, 0, 0, 0.25), 0px 8px 20.8px -3.75px rgba(0, 0, 0, 0.1)`,
        fRshTFsLS: a ?? c.fRshTFsLS,
        GhTPLFC8V: n ?? c.GhTPLFC8V ?? `rgba(207, 207, 207, 0.28)`,
        tC7vwg7dl: t ?? c.tC7vwg7dl,
        WXgYL__f6: e ??
          c.WXgYL__f6 ?? {
            borderColor: `rgba(255, 255, 255, 0.07)`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
      })),
      (Fr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (X = U(
        w(function (e, t) {
          let n = O(null),
            r = t ?? n,
            i = ne(),
            { activeLocale: a, setLocale: s } = Te();
          ke();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              tC7vwg7dl: f,
              GhTPLFC8V: p,
              WXgYL__f6: m,
              E4hO1mC86: h,
              fRshTFsLS: g,
              ..._
            } = Pr(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = se({
              defaultVariant: `X14OHkEZf`,
              enabledGestures: Ar,
              ref: r,
              variant: d,
              variantClassNames: Mr,
            }),
            te = Fr(e, E),
            D = [],
            { activeVariantCallback: k, delay: ie } = He(v),
            ae = k(async (...e) => {
              if ((w({ isPressed: !1 }), f && (await f(...e)) === !1))
                return !1;
            }),
            oe = F(jr, ...D);
          return C(re, {
            id: u ?? i,
            children: C(Nr, {
              animate: E,
              initial: !1,
              children: C(A.div, {
                ..._,
                ...b,
                className: F(oe, `framer-6z0m75`, l, y),
                "data-border": !0,
                "data-framer-name": `Variant 1`,
                "data-highlight": !0,
                layoutDependency: te,
                layoutId: `X14OHkEZf`,
                onTap: ae,
                ref: r,
                style: {
                  "--border-bottom-width":
                    (m?.borderBottomWidth ?? m?.borderWidth) + `px`,
                  "--border-color": m?.borderColor,
                  "--border-left-width":
                    (m?.borderLeftWidth ?? m?.borderWidth) + `px`,
                  "--border-right-width":
                    (m?.borderRightWidth ?? m?.borderWidth) + `px`,
                  "--border-style": m?.borderStyle,
                  "--border-top-width":
                    (m?.borderTopWidth ?? m?.borderWidth) + `px`,
                  backdropFilter: `blur(8px)`,
                  backgroundColor: p,
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  WebkitBackdropFilter: `blur(8px)`,
                  ...c,
                },
                ...kr(
                  { "X14OHkEZf-hover": { "data-framer-name": void 0 } },
                  v,
                  x,
                ),
                children: C(B, {
                  href: g,
                  motionChild: !0,
                  nodeId: `aTR6DeKwc`,
                  openInNewTab: !1,
                  scopeId: `OLB3CVc5R`,
                  children: C(A.a, {
                    className: `framer-1cgbhyd framer-xnh5gt`,
                    layoutDependency: te,
                    layoutId: `aTR6DeKwc`,
                    style: {
                      "--1odq2vf": h,
                      backgroundColor: `rgb(0, 155, 254)`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `var(--1odq2vf)`,
                    },
                    variants: {
                      "X14OHkEZf-hover": {
                        backgroundColor: `rgb(38, 172, 255)`,
                      },
                    },
                    children: C(M, {
                      __fromCanvasComponent: !0,
                      children: C(o, {
                        children: C(A.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOalF3`,
                            "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                            "--framer-font-open-type-features": `'salt' on`,
                            "--framer-font-size": `13px`,
                            "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 14, "wght" 640)`,
                            "--framer-letter-spacing": `-0.01em`,
                            "--framer-line-height": `1.75em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(254, 255, 255))`,
                          },
                          children: `Remix for free`,
                        }),
                      }),
                      className: `framer-1sgyhiw`,
                      fonts: [`Inter-Variable`],
                      layoutDependency: te,
                      layoutId: `mfjNvvSV7`,
                      style: {
                        "--extracted-2gg91v": `"opsz" 14, "wght" 640`,
                        "--extracted-r6o4lv": `rgb(254, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-8Kffo.framer-xnh5gt, .framer-8Kffo .framer-xnh5gt { display: block; }`,
          `.framer-8Kffo.framer-6z0m75 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 8px 8px 52px 8px; position: relative; width: 154px; }`,
          `.framer-8Kffo .framer-1cgbhyd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 12px 7px 12px; position: relative; text-decoration: none; width: 138px; will-change: var(--framer-will-change-override, transform); z-index: 4; }`,
          `.framer-8Kffo .framer-1sgyhiw { -webkit-user-select: none; flex: none; height: 23px; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-8Kffo[data-border="true"]::after, .framer-8Kffo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-8Kffo`,
      )),
      (X.displayName = `Checkout Button`),
      (X.defaultProps = { height: 96, width: 154 }),
      H(X, {
        tC7vwg7dl: { title: `Click`, type: G.EventHandler },
        GhTPLFC8V: {
          defaultValue: `rgba(207, 207, 207, 0.28)`,
          title: `Fill`,
          type: G.Color,
        },
        WXgYL__f6: {
          defaultValue: {
            borderColor: `rgba(255, 255, 255, 0.07)`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: G.Border,
        },
        E4hO1mC86: {
          defaultValue: [
            {
              blur: 2,
              color: `rgba(0, 0, 0, 0.4)`,
              diffusion: 0.25,
              focus: 0.3,
              inset: !1,
              spread: 0,
              type: `realistic`,
              x: 0,
              y: 8,
            },
          ],
          title: `Shadow`,
          type: G.BoxShadow,
        },
        fRshTFsLS: { title: `Link`, type: G.Link },
      }),
      (Z = [
        {
          defaultValue: 14,
          maxValue: 32,
          minValue: 14,
          name: `Optical size`,
          tag: `opsz`,
        },
        {
          defaultValue: 400,
          maxValue: 900,
          minValue: 100,
          name: `Weight`,
          tag: `wght`,
        },
      ]),
      j(
        X,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/test/framer/assets/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/test/framer/assets/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/test/framer/assets/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/test/framer/assets/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/test/framer/assets/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/test/framer/assets/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                openType: !0,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/test/framer/assets/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: Z,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (Ir = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerOLB3CVc5R`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `96`,
              framerIntrinsicWidth: `154`,
              framerColorSyntax: `true`,
              framerVariables: `{"tC7vwg7dl":"click","GhTPLFC8V":"fill","WXgYL__f6":"border","E4hO1mC86":"shadow","fRshTFsLS":"link"}`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"G_SBNMoku":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
            },
          },
          Props: {
            type: `tsType`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Rr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  Q,
  qr = t(() => {
    (E(),
      R(),
      ae(),
      u(),
      xn(),
      (zr = { Yq1rDSX9V: { hover: !0 } }),
      (Br = `framer-W04tY`),
      (Vr = { Yq1rDSX9V: `framer-v-1jg6gu5` }),
      (Hr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ur = ({ value: e, children: t }) => {
        let n = y(ie),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(ie.Provider, { value: i, children: t });
      }),
      (Wr = A.create(o)),
      (Gr = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        NVdv7NMuV: t ?? a.NVdv7NMuV ?? bn,
        vAJxbkBBk: r ?? a.vAJxbkBBk,
      })),
      (Kr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Q = U(
        w(function (e, t) {
          let n = O(null),
            r = t ?? n,
            i = ne(),
            { activeLocale: a, setLocale: o } = Te();
          ke();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              NVdv7NMuV: d,
              vAJxbkBBk: f,
              ...p
            } = Gr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: ee,
              setVariant: b,
              variants: x,
            } = se({
              defaultVariant: `Yq1rDSX9V`,
              enabledGestures: zr,
              ref: r,
              variant: u,
              variantClassNames: Vr,
            }),
            S = Kr(e, x),
            w = F(Br);
          return C(re, {
            id: l ?? i,
            children: C(Wr, {
              animate: x,
              initial: !1,
              children: C(Ur, {
                value: Hr,
                children: C(B, {
                  href: f,
                  motionChild: !0,
                  nodeId: `Yq1rDSX9V`,
                  openInNewTab: !0,
                  scopeId: `rFodDNxoN`,
                  children: C(A.a, {
                    ...p,
                    ..._,
                    className: `${F(w, `framer-1jg6gu5`, c, h)} framer-iwydtk`,
                    "data-framer-name": `Icon`,
                    layoutDependency: S,
                    layoutId: `Yq1rDSX9V`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-47679c26-af3f-4cd0-91b2-530be918763e, rgba(255, 255, 255, 0))`,
                      borderBottomLeftRadius: 254,
                      borderBottomRightRadius: 254,
                      borderTopLeftRadius: 254,
                      borderTopRightRadius: 254,
                      ...s,
                    },
                    variants: {
                      "Yq1rDSX9V-hover": {
                        backgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                      },
                    },
                    ...Rr(
                      { "Yq1rDSX9V-hover": { "data-framer-name": void 0 } },
                      m,
                      v,
                    ),
                    children: C(Me, {
                      animated: !0,
                      className: `framer-kx6nnf`,
                      Component: d,
                      "data-framer-name": `Icon`,
                      layoutDependency: S,
                      layoutId: `hLlWlbVKH`,
                      style: {
                        "--a48utx": `var(--token-47679c26-af3f-4cd0-91b2-530be918763e, rgba(255, 255, 255, 0))`,
                        "--e82k50": 0,
                        "--lbnyjq": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                        "--q09v0x": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                        "--y471m3": `var(--token-47679c26-af3f-4cd0-91b2-530be918763e, rgba(255, 255, 255, 0))`,
                        opacity: 0.5,
                      },
                      variants: { "Yq1rDSX9V-hover": { opacity: 1 } },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-W04tY.framer-iwydtk, .framer-W04tY .framer-iwydtk { display: block; }`,
          `.framer-W04tY.framer-1jg6gu5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 2px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-W04tY .framer-kx6nnf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }`,
        ],
        `framer-W04tY`,
      )),
      (Q.displayName = `Social Link`),
      (Q.defaultProps = { height: 36, width: 36 }),
      H(Q, {
        NVdv7NMuV: {
          defaultValue: {
            identifier: `module:iD14RsAgDBerQre3Ple5/QG8erexiQq0Lo7vPQpb1/GVKdBazOD.js:default`,
            moduleId: `iD14RsAgDBerQre3Ple5`,
          },
          setModuleId: `JIPqlEHzV4eAeaj5I07k`,
          title: `Icon`,
          type: G.VectorSetItem,
        },
        vAJxbkBBk: { title: `Link`, type: G.Link },
      }),
      j(Q, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Jr(e) {
  return (t) => {
    let [n, r] = D(!1),
      i = Ue.current() === Ue.canvas;
    return (
      m(() => {
        if (!i)
          try {
            d.self !== d.top && r(!0);
          } catch {
            r(!0);
          }
      }, [i]),
      !i && n ? null : C(e, { ...t })
    );
  };
}
var Yr = t(() => {
    (k(), E(), u(), R());
  }),
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi = t(() => {
    (E(),
      R(),
      ae(),
      u(),
      Je(),
      pn(),
      vt(),
      ot(),
      ut(),
      xn(),
      at(),
      _t(),
      rt(),
      kn(),
      Ln(),
      Gn(),
      ft(),
      $n(),
      Dr(),
      Tt(),
      Lr(),
      qr(),
      dt(),
      Yr(),
      xt(),
      Et(),
      At(),
      Pt(),
      et(),
      Ze(),
      ct(),
      (Xr = P(X)),
      (Zr = fe(
        _e(X, { nodeId: `FuJKiCxBE`, override: Jr, scopeId: `Ihsypfxzf` }),
        Or,
      )),
      (Qr = P(fn)),
      ($r = P(Y)),
      (ei = ce(Y)),
      (ti = me(W)),
      (ni = ve(M)),
      (ri = P(K)),
      (ii = ve(W)),
      (ai = P(mt)),
      (oi = P(st)),
      (si = P(tt)),
      (ci = P(nt)),
      (li = P(ht)),
      (ui = P(lt)),
      (di = P(pt)),
      (fi = P(it)),
      (pi = P(gt)),
      (mi = ve(A.div)),
      (hi = ve(Re)),
      (gi = P(Q)),
      (_i = {
        oVtsut5ij: `(min-width: 810px) and (max-width: 1279.98px)`,
        Tp3NbtZ_b: `(max-width: 809.98px)`,
        VpTEA5Un0: `(min-width: 1280px)`,
      }),
      (vi = () => typeof document < `u`),
      (yi = `framer-CaVRT`),
      (bi = {
        oVtsut5ij: `framer-v-65kzqc`,
        Tp3NbtZ_b: `framer-v-k7b1cf`,
        VpTEA5Un0: `framer-v-1t24cya`,
      }),
      (xi = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: {
          delay: 0,
          duration: 1,
          ease: [0.44, 0, 0.56, 1],
          type: `tween`,
        },
        x: 0,
        y: 0,
      }),
      (Si = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -36,
      }),
      (Ci = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (wi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 24,
      }),
      (Ti = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
      (Ei = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
      (Di = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
      (Oi = (e, t) => `translate(-50%, -50%) ${t}`),
      (ki = {
        oVtsut5ij: [
          `.framer-CaVRT .framer-1j2eboq { max-width: 720px; padding: 120px 0px 0px 0px; }`,
          `.framer-CaVRT .framer-i9bx2u { flex: 1 0 0px; height: 612px; }`,
          `.framer-CaVRT .framer-zz81tn { max-width: 720px; padding: 64px 0px 48px 0px; }`,
        ],
        Tp3NbtZ_b: [
          `.framer-CaVRT .framer-1j2eboq { max-width: 729px; padding: 80px 0px 80px 0px; }`,
          `.framer-CaVRT .framer-1sap953 { flex-direction: column; gap: 60px; }`,
          `.framer-CaVRT .framer-ososf { align-self: unset; flex: none; gap: 48px; height: min-content; justify-content: center; padding: 0px; width: 100%; }`,
          `.framer-CaVRT .framer-122k8zd { gap: 36px; }`,
          `.framer-CaVRT .framer-1rx3f4p { align-content: flex-start; align-items: flex-start; gap: 16px; }`,
          `.framer-CaVRT .framer-i9bx2u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; width: 100%; }`,
          `.framer-CaVRT .framer-jirneu { aspect-ratio: unset; border-bottom-right-radius: 24px; border-top-right-radius: 24px; height: min-content; left: unset; padding: 24px; position: relative; right: unset; top: unset; width: 100%; }`,
          `.framer-CaVRT .framer-5b1dk7 { gap: 24px; max-width: 100%; }`,
          `.framer-CaVRT .framer-zz81tn { gap: 36px; max-width: 729px; padding: 48px 0px 48px 0px; }`,
          `.framer-CaVRT .framer-123zn8e { flex-direction: column; }`,
          `.framer-CaVRT .framer-yk6mz3 { flex: none; justify-content: center; width: 100%; }`,
          `.framer-CaVRT .framer-2gawpk { align-content: center; align-items: center; flex-direction: column; gap: 48px; width: 100%; }`,
          `.framer-CaVRT .framer-zbagcq, .framer-CaVRT .framer-1btnc83, .framer-CaVRT .framer-1rraqux { align-content: center; align-items: center; width: 100%; }`,
          `.framer-CaVRT .framer-3gkhif, .framer-CaVRT .framer-1v0ps5u, .framer-CaVRT .framer-5lc3vm, .framer-CaVRT .framer-k0yq1n, .framer-CaVRT .framer-1va48o1, .framer-CaVRT .framer-1h3pve3, .framer-CaVRT .framer-50vlls, .framer-CaVRT .framer-8x5t1n, .framer-CaVRT .framer-1rw9m3z, .framer-CaVRT .framer-48hbrp, .framer-CaVRT .framer-1l1t6ji, .framer-CaVRT .framer-1yrbxnb, .framer-CaVRT .framer-1d891sv { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-CaVRT .framer-1evr4bd, .framer-CaVRT .framer-xqdypl, .framer-CaVRT .framer-1k9b3rk { width: 100%; }`,
          `.framer-CaVRT .framer-dtf6w2 { flex-direction: column; gap: 24px; justify-content: center; }`,
          `.framer-CaVRT .framer-lt1zyc { order: 1; }`,
          `.framer-CaVRT .framer-gaqks3 { order: 0; }`,
        ],
      }),
      (Ai = Object.keys(ki)),
      (ji = {
        oVtsut5ij: `.framer-65kzqc-override`,
        Tp3NbtZ_b: `.framer-k7b1cf-override`,
      }),
      (Mi = [
        `.framer-CaVRT.framer-7vyxvc, .framer-CaVRT .framer-7vyxvc { display: block; }`,
        `.framer-CaVRT.framer-1t24cya { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-1px5wmp-container { bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 12px); flex: none; height: auto; order: -1000; position: var(--framer-canvas-fixed-position, fixed); right: 14px; width: auto; z-index: 4; }`,
        `.framer-CaVRT .framer-qlkypp-container { flex: none; height: auto; order: -998; position: relative; width: auto; }`,
        `.framer-CaVRT .framer-1xw88z8-container { flex: none; height: auto; left: 0px; order: -997; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); z-index: 7; }`,
        `.framer-CaVRT .framer-129qs0a { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-CaVRT .framer-aofqy9 { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background: linear-gradient(180deg, var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000000) 0%, var(--token-d22f0868-8c79-43bb-98c5-f93163ec74ff, rgb(27, 34, 40)) 100%); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1600px; order: 1005; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-1j2eboq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1080px; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-CaVRT .framer-1sap953, .framer-CaVRT .framer-123zn8e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-ososf { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: hidden; padding: 0px 0px 248px 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-CaVRT .framer-122k8zd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-1rx3f4p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-jq8apq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 610px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-moeaun { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 607px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-4fy67c-container { flex: none; height: 48px; position: relative; width: auto; }`,
        `.framer-CaVRT .framer-129p403 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-1o6au74, .framer-CaVRT .framer-11882fi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-1t1mrja, .framer-CaVRT .framer-rounrs { align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.1); border-bottom-left-radius: 678px; border-bottom-right-radius: 678px; border-top-left-radius: 678px; border-top-right-radius: 678px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-jp4mhw, .framer-CaVRT .framer-ifx15x { flex: none; height: 48px; overflow: hidden; position: relative; width: 48px; }`,
        `.framer-CaVRT .framer-13mx6cb { aspect-ratio: 1 / 1; flex: none; height: auto; left: 0px; opacity: 0.5; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
        `.framer-CaVRT .framer-9makqx, .framer-CaVRT .framer-14qc40e, .framer-CaVRT .framer-12pkxid, .framer-CaVRT .framer-rjulvk, .framer-CaVRT .framer-gsuw6q, .framer-CaVRT .framer-1rwmmov, .framer-CaVRT .framer-3gkhif, .framer-CaVRT .framer-1h3pve3, .framer-CaVRT .framer-48hbrp, .framer-CaVRT .framer-lt1zyc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-CaVRT .framer-kbhszf { align-self: stretch; background-color: rgba(255, 255, 255, 0.1); flex: none; height: auto; overflow: hidden; position: relative; width: 1px; }`,
        `.framer-CaVRT .framer-18jayev { aspect-ratio: 1.4437086092715232 / 1; flex: none; height: auto; left: 50%; opacity: 0.5; overflow: visible; position: absolute; top: 50%; width: 36px; }`,
        `.framer-CaVRT .framer-i9bx2u { border-top-left-radius: 4px; flex: 2 0 0px; height: 730px; overflow: visible; position: relative; width: 1px; }`,
        `.framer-CaVRT .framer-jirneu { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-mask: radial-gradient(184% 229.99999999999997% at 0% 0%, #000000 32.60838963963964%, rgba(0,0,0,0) 100%) add; align-content: center; align-items: center; aspect-ratio: 1.3333333333333333 / 1; background-color: var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(33, 33, 33, 0.85)); border-bottom-left-radius: 24px; border-top-left-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: auto; justify-content: flex-start; left: 0px; mask: radial-gradient(184% 229.99999999999997% at 0% 0%, rgba(0,0,0,1) 32.60838963963964%, rgba(0,0,0,0) 100%) add; max-width: 960px; overflow: var(--overflow-clip-fallback, clip); padding: 36px; position: absolute; right: -272px; top: -32px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-1certp8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 48px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-hhmdhh, .framer-CaVRT .framer-1dd3oij { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); flex: none; height: 32px; position: relative; width: auto; }`,
        `.framer-CaVRT .framer-qmmni8 { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: var(--token-3fab9d78-ec3a-44ec-ad62-b2eca6daf4a5, rgba(23, 23, 23, 0.5)); border-bottom-left-radius: 131px; border-bottom-right-radius: 131px; border-top-left-radius: 131px; border-top-right-radius: 131px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-17qqq29, .framer-CaVRT .framer-1sz9z1r { --1ww558a: 1; --4rxgx6: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-CaVRT .framer-5n9j70 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-5b1dk7 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 65px; height: auto; justify-content: center; max-width: 66%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-CaVRT .framer-18pr7sr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-r2b6vz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-196ak39, .framer-CaVRT .framer-13dyghu { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 420px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-53rk4a { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-3fab9d78-ec3a-44ec-ad62-b2eca6daf4a5, rgba(23, 23, 23, 0.5)); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 120px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-nlg6yk { --framer-text-wrap-override: balance; flex: 1 0 0px; height: 1px; opacity: 0.5; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-du0f5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 24px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-1k82ryd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-CaVRT .framer-pwp6e2, .framer-CaVRT .framer-12dp453, .framer-CaVRT .framer-1k1rqx3 { --1ww558a: 2; --4rxgx6: var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(213, 224, 232, 0.25)); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 14px; }`,
        `.framer-CaVRT .framer-qph9oj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-mkrgio { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1 / 1; background-color: rgba(255, 255, 255, 0.1); border-bottom-left-radius: 608px; border-bottom-right-radius: 608px; border-top-left-radius: 608px; border-top-right-radius: 608px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-1qiazs9 { --1ww558a: 2; --4rxgx6: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 14px; }`,
        `.framer-CaVRT .framer-m1ckpc { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1 / 1; background-color: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); border-bottom-left-radius: 608px; border-bottom-right-radius: 608px; border-top-left-radius: 608px; border-top-right-radius: 608px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-2nai74 { --1ww558a: 2; --4rxgx6: var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(31, 27, 24, 0.75)); aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 14px; }`,
        `.framer-CaVRT .framer-7p7ku8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-tz2eby { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-9kj2fp { -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 20%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-CaVRT .framer-1rd7d3l { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: rgba(255, 255, 255, 0.1); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 12px 4px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-1n2wd1q, .framer-CaVRT .framer-q27h8z, .framer-CaVRT .framer-ypx7sn { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 12px 4px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-CaVRT .framer-wun5d1 { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 100%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-l0wkci, .framer-CaVRT .framer-gpele7, .framer-CaVRT .framer-1amn0nw, .framer-CaVRT .framer-1il64ce, .framer-CaVRT .framer-70az75 { background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-y8a4wn-container, .framer-CaVRT .framer-cygfn2-container, .framer-CaVRT .framer-xlh8lv-container, .framer-CaVRT .framer-1uysbpt-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-lc3j49 { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 50.02754820936639%, rgba(0, 0, 0, 0) 100%) add; background-color: var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, #fae6e1); flex: none; height: 1px; left: 0px; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 50.02754820936639%, rgba(0, 0, 0, 0) 100%) add; opacity: 0.75; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-CaVRT .framer-1p8lytk { bottom: 0px; flex: none; height: 190px; left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 0; }`,
        `.framer-CaVRT .framer-15kwehq { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1600px; order: 1006; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-zz81tn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1080px; overflow: visible; padding: 64px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-yk6mz3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-CaVRT .framer-2gawpk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-zbagcq, .framer-CaVRT .framer-1btnc83, .framer-CaVRT .framer-1rraqux { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-1evr4bd, .framer-CaVRT .framer-xqdypl, .framer-CaVRT .framer-1k9b3rk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-1v0ps5u, .framer-CaVRT .framer-5lc3vm, .framer-CaVRT .framer-k0yq1n, .framer-CaVRT .framer-1va48o1, .framer-CaVRT .framer-50vlls, .framer-CaVRT .framer-8x5t1n, .framer-CaVRT .framer-1rw9m3z, .framer-CaVRT .framer-1l1t6ji, .framer-CaVRT .framer-1yrbxnb, .framer-CaVRT .framer-1d891sv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-CaVRT .framer-dtf6w2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-CaVRT .framer-gaqks3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-CaVRT .framer-1w3nz9c-container, .framer-CaVRT .framer-2vbsob-container, .framer-CaVRT .framer-1xzjq19-container, .framer-CaVRT .framer-wbowxr-container, .framer-CaVRT .framer-ehurei-container { flex: none; height: auto; position: relative; width: auto; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...Ft,
        ...Ye,
        ...jt,
        ...Ke,
        ...St,
        ...Dt,
        `.framer-CaVRT[data-border="true"]::after, .framer-CaVRT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
      ]),
      (Ni = {
        oVtsut5ij: `(min-width: 810px) and (max-width: 1279.98px)`,
        Tp3NbtZ_b: `(max-width: 809.98px)`,
        VpTEA5Un0: `(min-width: 1280px)`,
      }),
      (Pi = { Desktop: `VpTEA5Un0`, Phone: `Tp3NbtZ_b`, Tablet: `oVtsut5ij` }),
      (Fi = ({ value: e }) =>
        Ce()
          ? null
          : C(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Ii = ({
        cTAVisible: e,
        height: t,
        id: n,
        scrollSection: r,
        width: i,
        ...a
      }) => ({
        ...a,
        egeQCIuFh: r ?? a.egeQCIuFh,
        MO6WawlI2: e ?? a.MO6WawlI2 ?? !0,
        variant: Pi[a.variant] ?? a.variant ?? `VpTEA5Un0`,
      })),
      (Li = w(function (e, t) {
        let n = O(null),
          r = t ?? n,
          i = ne(),
          { activeLocale: a, setLocale: s } = Te(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            egeQCIuFh: f,
            MO6WawlI2: p,
            children: m,
            ...h
          } = Ii(e),
          [g, _] = je(d, _i, !1),
          v = F(yi, Lt, Qe, Nt, $e, wt, kt);
        de();
        let y = () => !vi() || g !== `Tp3NbtZ_b`;
        return (
          Ne({}),
          C(De.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: Pi,
              isLayoutTemplate: !0,
              primaryVariantId: `VpTEA5Un0`,
              variantClassNames: bi,
            },
            children: b(re, {
              id: u ?? i,
              children: [
                C(Fi, {
                  value: `:root body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 9, 18)); }`,
                }),
                b(A.div, {
                  ...h,
                  className: F(v, `framer-1t24cya`, l),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    C(V, {
                      height: 96,
                      y: 892,
                      children: C(W, {
                        className: `framer-1px5wmp-container`,
                        layoutScroll: !0,
                        nodeId: `FuJKiCxBE`,
                        rendersWithMotion: !0,
                        scopeId: `Ihsypfxzf`,
                      }),
                    }),
                    C(V, {
                      children: C(W, {
                        className: `framer-qlkypp-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `Wre9ivqvo`,
                        scopeId: `Ihsypfxzf`,
                        children: C(fn, {
                          height: `100%`,
                          id: `Wre9ivqvo`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `Wre9ivqvo`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    C(V, {
                      height: 444,
                      width: `100vw`,
                      y: 0,
                      children: C(ti, {
                        animate: xi,
                        className: `framer-1xw88z8-container`,
                        "data-framer-appear-id": `1xw88z8`,
                        initial: Si,
                        layoutScroll: !0,
                        nodeId: `LzMxTsN0m`,
                        optimized: !0,
                        rendersWithMotion: !0,
                        scopeId: `Ihsypfxzf`,
                        children: C(I, {
                          breakpoint: g,
                          overrides: {
                            oVtsut5ij: {
                              __framer__targets: [
                                { ref: f, target: `u2b8PUbT8` },
                              ],
                              variant: Ci(`f8sOYzyhl`),
                              Y2WP5Cm7U: `0px 24px 0px 24px`,
                            },
                            Tp3NbtZ_b: {
                              __framer__targets: [
                                { ref: f, target: `u2b8PUbT8` },
                              ],
                              variant: Ci(`f8sOYzyhl`),
                              Y2WP5Cm7U: `0px 24px 0px 24px`,
                            },
                          },
                          children: C(ei, {
                            __framer__animateOnce: !1,
                            __framer__targets: [
                              { ref: f, target: `Vcc3AvD1S` },
                            ],
                            __framer__threshold: 0,
                            __framer__variantAppearEffectEnabled: !0,
                            height: `100%`,
                            id: `LzMxTsN0m`,
                            ipjLzscUZ: 48,
                            layoutId: `LzMxTsN0m`,
                            style: { width: `100%` },
                            variant: Ci(`eMi5Og3Sd`),
                            width: `100%`,
                            Y2WP5Cm7U: `0px 40px 0px 40px`,
                          }),
                        }),
                      }),
                    }),
                    m,
                    C(`div`, { className: `framer-129qs0a` }),
                    p !== !1 &&
                      b(A.section, {
                        className: `framer-aofqy9`,
                        "data-border": !0,
                        "data-framer-name": `CTA`,
                        children: [
                          C(`div`, {
                            className: `framer-1j2eboq`,
                            "data-framer-name": `container`,
                            children: b(`div`, {
                              className: `framer-1sap953`,
                              children: [
                                b(`div`, {
                                  className: `framer-ososf`,
                                  "data-framer-name": `lockup`,
                                  children: [
                                    b(`div`, {
                                      className: `framer-122k8zd`,
                                      children: [
                                        b(`div`, {
                                          className: `framer-1rx3f4p`,
                                          children: [
                                            C(ni, {
                                              __framer__animate: {
                                                transition: Ti,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: wi,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0,
                                              __fromCanvasComponent: !0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              children: C(o, {
                                                children: C(`h2`, {
                                                  className: `framer-styles-preset-fahce0`,
                                                  "data-styles-preset": `nZtZfLTSW`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                  },
                                                  children: `Get started today`,
                                                }),
                                              }),
                                              className: `framer-jq8apq`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            C(ni, {
                                              __framer__animate: {
                                                transition: Ei,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: wi,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0,
                                              __fromCanvasComponent: !0,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                  },
                                                  children: `Powder is easy to set up, maintain, and use. It takes less than 5 minutes to get up and running.`,
                                                }),
                                              }),
                                              className: `framer-moeaun`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        C(ue, {
                                          links: [
                                            {
                                              href: { webPageId: `QEHd0IWPx` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `QEHd0IWPx` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `QEHd0IWPx` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            C(I, {
                                              breakpoint: g,
                                              overrides: {
                                                oVtsut5ij: { y: 1566 },
                                                Tp3NbtZ_b: { y: 1506 },
                                              },
                                              children: C(V, {
                                                height: 48,
                                                y: 1626,
                                                children: C(ii, {
                                                  __framer__animate: {
                                                    transition: Di,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: wi,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className: `framer-4fy67c-container`,
                                                  nodeId: `hkHw0PVKF`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `Ihsypfxzf`,
                                                  children: C(I, {
                                                    breakpoint: g,
                                                    overrides: {
                                                      oVtsut5ij: {
                                                        FWKDMXbN2: e[1],
                                                      },
                                                      Tp3NbtZ_b: {
                                                        FWKDMXbN2: e[2],
                                                      },
                                                    },
                                                    children: C(K, {
                                                      BANE331ww: !1,
                                                      FWKDMXbN2: e[0],
                                                      height: `100%`,
                                                      id: `hkHw0PVKF`,
                                                      layoutId: `hkHw0PVKF`,
                                                      mYjHZJ6Gn: `Get a demo`,
                                                      p8v7WNQPZ: qe,
                                                      style: { height: `100%` },
                                                      variant: Ci(`LxHqL1VPe`),
                                                      width: `100%`,
                                                      YkfrxUoaP: !1,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                      ],
                                    }),
                                    b(`div`, {
                                      className: `framer-129p403`,
                                      "data-framer-name": `gdpr`,
                                      children: [
                                        b(`div`, {
                                          className: `framer-1o6au74`,
                                          children: [
                                            C(`div`, {
                                              className: `framer-1t1mrja`,
                                              children: C(`div`, {
                                                className: `framer-jp4mhw`,
                                                children: C(I, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    oVtsut5ij: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 256,
                                                        intrinsicWidth: 256,
                                                        loading: N(1632),
                                                        pixelHeight: 512,
                                                        pixelWidth: 512,
                                                        sizes: `48px`,
                                                        src: `/test/framer/images/dvjihLhp9whD26v7qSJT2pbwPo.png?width=512&height=512`,
                                                      },
                                                    },
                                                    Tp3NbtZ_b: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 256,
                                                        intrinsicWidth: 256,
                                                        loading: N(1630),
                                                        pixelHeight: 512,
                                                        pixelWidth: 512,
                                                        sizes: `48px`,
                                                        src: `/test/framer/images/dvjihLhp9whD26v7qSJT2pbwPo.png?width=512&height=512`,
                                                      },
                                                    },
                                                  },
                                                  children: C(Re, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 256,
                                                      intrinsicWidth: 256,
                                                      loading: N(1810),
                                                      pixelHeight: 512,
                                                      pixelWidth: 512,
                                                      sizes: `48px`,
                                                      src: `/test/framer/images/dvjihLhp9whD26v7qSJT2pbwPo.png?width=512&height=512`,
                                                    },
                                                    className: `framer-13mx6cb`,
                                                    "data-framer-name": `Gdpr c`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  children: `GDPR`,
                                                }),
                                              }),
                                              className: `framer-9makqx`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        C(`div`, {
                                          className: `framer-kbhszf`,
                                        }),
                                        b(`div`, {
                                          className: `framer-11882fi`,
                                          children: [
                                            C(`div`, {
                                              className: `framer-rounrs`,
                                              children: C(`div`, {
                                                className: `framer-ifx15x`,
                                                children: C(I, {
                                                  breakpoint: g,
                                                  overrides: {
                                                    oVtsut5ij: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 75.5,
                                                        intrinsicWidth: 109,
                                                        loading: N(1643.5),
                                                        pixelHeight: 151,
                                                        pixelWidth: 218,
                                                        sizes: `36px`,
                                                        src: `/test/framer/images/027B2NJZowoMM4YvobleMlZAhk.png?width=218&height=151`,
                                                      },
                                                    },
                                                    Tp3NbtZ_b: {
                                                      background: {
                                                        alt: ``,
                                                        fit: `fill`,
                                                        intrinsicHeight: 75.5,
                                                        intrinsicWidth: 109,
                                                        loading: N(1641.5),
                                                        pixelHeight: 151,
                                                        pixelWidth: 218,
                                                        sizes: `36px`,
                                                        src: `/test/framer/images/027B2NJZowoMM4YvobleMlZAhk.png?width=218&height=151`,
                                                      },
                                                    },
                                                  },
                                                  children: C(Re, {
                                                    background: {
                                                      alt: ``,
                                                      fit: `fill`,
                                                      intrinsicHeight: 75.5,
                                                      intrinsicWidth: 109,
                                                      loading: N(1821.5),
                                                      pixelHeight: 151,
                                                      pixelWidth: 218,
                                                      sizes: `36px`,
                                                      src: `/test/framer/images/027B2NJZowoMM4YvobleMlZAhk.png?width=218&height=151`,
                                                    },
                                                    className: `framer-18jayev`,
                                                    "data-framer-name": `21972-312 SOC_NonCPA-375px-1`,
                                                    transformTemplate: Oi,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  children: `SOC 2`,
                                                }),
                                              }),
                                              className: `framer-14qc40e`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                C(`div`, {
                                  className: `framer-i9bx2u`,
                                  children: b(mi, {
                                    __framer__spring: {
                                      bounce: 0,
                                      damping: 60,
                                      delay: 0,
                                      duration: 1,
                                      durationBasedSpring: !0,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 1,
                                      stagger: 0,
                                      stiffness: 500,
                                      type: `spring`,
                                    },
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 136,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onInView`,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-jirneu`,
                                    "data-border": !0,
                                    children: [
                                      b(`div`, {
                                        className: `framer-1certp8`,
                                        children: [
                                          C(mt, {
                                            animated: !1,
                                            className: `framer-hhmdhh`,
                                            layoutId: `VrHbbmGkR`,
                                            z1don5LZx: !0,
                                          }),
                                          C(`div`, {
                                            className: `framer-qmmni8`,
                                            "data-border": !0,
                                            children: C(st, {
                                              animated: !1,
                                              className: `framer-17qqq29`,
                                              CRY1Fpez4: !0,
                                              layoutId: `cWHc_vd9S`,
                                              vet7gqNu_: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      C(`div`, {
                                        className: `framer-5n9j70`,
                                        children: b(`div`, {
                                          className: `framer-5b1dk7`,
                                          children: [
                                            b(`div`, {
                                              className: `framer-18pr7sr`,
                                              children: [
                                                b(`div`, {
                                                  className: `framer-r2b6vz`,
                                                  children: [
                                                    C(M, {
                                                      __fromCanvasComponent: !0,
                                                      children: C(o, {
                                                        children: C(`h4`, {
                                                          className: `framer-styles-preset-14zqc8e`,
                                                          "data-styles-preset": `gk3iglzUb`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(250, 230, 225))`,
                                                          },
                                                          children: `Welcome back`,
                                                        }),
                                                      }),
                                                      className: `framer-196ak39`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    C(M, {
                                                      __fromCanvasComponent: !0,
                                                      children: C(o, {
                                                        children: C(`p`, {
                                                          className: `framer-styles-preset-1fhxhj6`,
                                                          "data-styles-preset": `O0790qsZT`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgb(146, 173, 169))`,
                                                          },
                                                          children: `How can I help you today, Alex?`,
                                                        }),
                                                      }),
                                                      className: `framer-13dyghu`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                                b(`div`, {
                                                  className: `framer-53rk4a`,
                                                  "data-border": !0,
                                                  children: [
                                                    C(M, {
                                                      __fromCanvasComponent: !0,
                                                      children: C(o, {
                                                        children: C(`p`, {
                                                          className: `framer-styles-preset-1fhxhj6`,
                                                          "data-styles-preset": `O0790qsZT`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgb(171, 164, 161))`,
                                                          },
                                                          children: `Ask anything. Type @ for mentions and / for shortcuts.`,
                                                        }),
                                                      }),
                                                      className: `framer-nlg6yk`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    b(`div`, {
                                                      className: `framer-du0f5k`,
                                                      children: [
                                                        b(`div`, {
                                                          className: `framer-1k82ryd`,
                                                          children: [
                                                            C(tt, {
                                                              animated: !1,
                                                              className: `framer-pwp6e2`,
                                                              CRY1Fpez4: !0,
                                                              layoutId: `FMeLRkmOR`,
                                                              vet7gqNu_: !0,
                                                            }),
                                                            C(nt, {
                                                              animated: !1,
                                                              className: `framer-12dp453`,
                                                              CRY1Fpez4: !0,
                                                              layoutId: `rTiurx_pz`,
                                                              vet7gqNu_: !0,
                                                            }),
                                                            C(ht, {
                                                              animated: !1,
                                                              className: `framer-1k1rqx3`,
                                                              CRY1Fpez4: !0,
                                                              layoutId: `bqhZ4SKLJ`,
                                                              vet7gqNu_: !0,
                                                            }),
                                                          ],
                                                        }),
                                                        b(`div`, {
                                                          className: `framer-qph9oj`,
                                                          children: [
                                                            C(`div`, {
                                                              className: `framer-mkrgio`,
                                                              "data-border": !0,
                                                              children: C(lt, {
                                                                animated: !1,
                                                                className: `framer-1qiazs9`,
                                                                CRY1Fpez4: !0,
                                                                layoutId: `BXpjgTdJx`,
                                                                vet7gqNu_: !0,
                                                              }),
                                                            }),
                                                            C(`div`, {
                                                              className: `framer-m1ckpc`,
                                                              "data-border": !0,
                                                              children: C(pt, {
                                                                animated: !1,
                                                                className: `framer-2nai74`,
                                                                CRY1Fpez4: !0,
                                                                layoutId: `oL_mpzQN2`,
                                                                vet7gqNu_: !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            b(`div`, {
                                              className: `framer-7p7ku8`,
                                              children: [
                                                b(`div`, {
                                                  className: `framer-tz2eby`,
                                                  children: [
                                                    b(`div`, {
                                                      className: `framer-9kj2fp`,
                                                      children: [
                                                        C(`div`, {
                                                          className: `framer-1rd7d3l`,
                                                          "data-border": !0,
                                                          children: C(M, {
                                                            __fromCanvasComponent:
                                                              !0,
                                                            children: C(o, {
                                                              children: C(`p`, {
                                                                className: `framer-styles-preset-1fhxhj6`,
                                                                "data-styles-preset": `O0790qsZT`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                                },
                                                                children: `Research`,
                                                              }),
                                                            }),
                                                            className: `framer-12pkxid`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout:
                                                              !0,
                                                          }),
                                                        }),
                                                        C(`div`, {
                                                          className: `framer-1n2wd1q`,
                                                          "data-border": !0,
                                                          children: C(M, {
                                                            __fromCanvasComponent:
                                                              !0,
                                                            children: C(o, {
                                                              children: C(`p`, {
                                                                className: `framer-styles-preset-1fhxhj6`,
                                                                "data-styles-preset": `O0790qsZT`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.6))`,
                                                                },
                                                                children: `Support Ops`,
                                                              }),
                                                            }),
                                                            className: `framer-rjulvk`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout:
                                                              !0,
                                                          }),
                                                        }),
                                                        C(`div`, {
                                                          className: `framer-q27h8z`,
                                                          "data-border": !0,
                                                          children: C(M, {
                                                            __fromCanvasComponent:
                                                              !0,
                                                            children: C(o, {
                                                              children: C(`p`, {
                                                                className: `framer-styles-preset-1fhxhj6`,
                                                                "data-styles-preset": `O0790qsZT`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.6))`,
                                                                },
                                                                children: `Writing`,
                                                              }),
                                                            }),
                                                            className: `framer-gsuw6q`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout:
                                                              !0,
                                                          }),
                                                        }),
                                                        C(`div`, {
                                                          className: `framer-ypx7sn`,
                                                          "data-border": !0,
                                                          children: C(M, {
                                                            __fromCanvasComponent:
                                                              !0,
                                                            children: C(o, {
                                                              children: C(`p`, {
                                                                className: `framer-styles-preset-1fhxhj6`,
                                                                "data-styles-preset": `O0790qsZT`,
                                                                dir: `auto`,
                                                                style: {
                                                                  "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.6))`,
                                                                },
                                                                children: `Actions`,
                                                              }),
                                                            }),
                                                            className: `framer-1rwmmov`,
                                                            fonts: [`Inter`],
                                                            verticalAlignment: `top`,
                                                            withExternalLayout:
                                                              !0,
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    C(it, {
                                                      animated: !1,
                                                      className: `framer-1sz9z1r`,
                                                      CRY1Fpez4: !0,
                                                      layoutId: `xZ_Fae9vM`,
                                                      vet7gqNu_: !0,
                                                    }),
                                                  ],
                                                }),
                                                b(`div`, {
                                                  className: `framer-wun5d1`,
                                                  children: [
                                                    C(`div`, {
                                                      className: `framer-l0wkci`,
                                                    }),
                                                    C(I, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        oVtsut5ij: {
                                                          width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                          y: 1549.4,
                                                        },
                                                        Tp3NbtZ_b: {
                                                          width: `min(max(min(min(min(100vw, 1600px) - 48px, 729px), 960px) - 48px, 1px), min(min(min(100vw, 1600px) - 48px, 729px), 960px) - 48px)`,
                                                          y: 2024.9,
                                                        },
                                                      },
                                                      children: C(V, {
                                                        height: 21,
                                                        width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                        y: 1609.4,
                                                        children: C(W, {
                                                          className: `framer-y8a4wn-container`,
                                                          nodeId: `NETegyc4w`,
                                                          scopeId: `Ihsypfxzf`,
                                                          children: C(gt, {
                                                            height: `100%`,
                                                            id: `NETegyc4w`,
                                                            layoutId: `NETegyc4w`,
                                                            logK7JHUX: `Summarize our product in simple terms for new users`,
                                                            style: {
                                                              width: `100%`,
                                                            },
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    C(`div`, {
                                                      className: `framer-gpele7`,
                                                    }),
                                                    C(I, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        oVtsut5ij: {
                                                          width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                          y: 1603.4,
                                                        },
                                                        Tp3NbtZ_b: {
                                                          width: `min(max(min(min(min(100vw, 1600px) - 48px, 729px), 960px) - 48px, 1px), min(min(min(100vw, 1600px) - 48px, 729px), 960px) - 48px)`,
                                                          y: 2078.9,
                                                        },
                                                      },
                                                      children: C(V, {
                                                        height: 21,
                                                        width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                        y: 1663.4,
                                                        children: C(W, {
                                                          className: `framer-cygfn2-container`,
                                                          nodeId: `o5pDPyVAc`,
                                                          scopeId: `Ihsypfxzf`,
                                                          children: C(gt, {
                                                            height: `100%`,
                                                            id: `o5pDPyVAc`,
                                                            layoutId: `o5pDPyVAc`,
                                                            logK7JHUX: `Draft a friendly support reply using our help docs`,
                                                            style: {
                                                              width: `100%`,
                                                            },
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    y() &&
                                                      C(`div`, {
                                                        className: `framer-1amn0nw hidden-k7b1cf`,
                                                      }),
                                                    y() &&
                                                      C(I, {
                                                        breakpoint: g,
                                                        overrides: {
                                                          oVtsut5ij: {
                                                            width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                            y: 1657.4,
                                                          },
                                                        },
                                                        children: C(V, {
                                                          height: 21,
                                                          width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                          y: 1717.4,
                                                          children: C(W, {
                                                            className: `framer-xlh8lv-container hidden-k7b1cf`,
                                                            nodeId: `pZCf3Zgv9`,
                                                            scopeId: `Ihsypfxzf`,
                                                            children: C(gt, {
                                                              height: `100%`,
                                                              id: `pZCf3Zgv9`,
                                                              layoutId: `pZCf3Zgv9`,
                                                              logK7JHUX: `Write a concise follow-up email after a sales call`,
                                                              style: {
                                                                width: `100%`,
                                                              },
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    y() &&
                                                      C(`div`, {
                                                        className: `framer-1il64ce hidden-k7b1cf`,
                                                      }),
                                                    y() &&
                                                      C(I, {
                                                        breakpoint: g,
                                                        overrides: {
                                                          oVtsut5ij: {
                                                            width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 720px) - 48px) / 2, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                            y: 1711.4,
                                                          },
                                                        },
                                                        children: C(V, {
                                                          height: 21,
                                                          width: `min(max(min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px, 1px), (min(max((min(min(100vw, 1600px) - 48px, 1080px) - 48px) / 1.5, 1px) + 272px, 960px) - 72px) * 0.66)`,
                                                          y: 1771.4,
                                                          children: C(W, {
                                                            className: `framer-1uysbpt-container hidden-k7b1cf`,
                                                            nodeId: `yBef6XnF7`,
                                                            scopeId: `Ihsypfxzf`,
                                                            children: C(gt, {
                                                              height: `100%`,
                                                              id: `yBef6XnF7`,
                                                              layoutId: `yBef6XnF7`,
                                                              logK7JHUX: `Extract action items and owners from this meeting note`,
                                                              style: {
                                                                width: `100%`,
                                                              },
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      C(`div`, { className: `framer-lc3j49` }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          C(I, {
                            breakpoint: g,
                            overrides: {
                              oVtsut5ij: {
                                background: {
                                  alt: `Transparent image of sand dunes`,
                                  fit: `fill`,
                                  intrinsicHeight: 349,
                                  intrinsicWidth: 1600,
                                  loading: N(1742),
                                  pixelHeight: 349,
                                  pixelWidth: 1600,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `min(100vw, 1600px)`,
                                  src: `/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?width=1600&height=349`,
                                  srcSet: `/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?scale-down-to=512&width=1600&height=349 512w,/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?scale-down-to=1024&width=1600&height=349 1024w,/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?width=1600&height=349 1600w`,
                                },
                              },
                              Tp3NbtZ_b: {
                                background: {
                                  alt: `Transparent image of sand dunes`,
                                  fit: `fill`,
                                  intrinsicHeight: 349,
                                  intrinsicWidth: 1600,
                                  loading: N(1776),
                                  pixelHeight: 349,
                                  pixelWidth: 1600,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `min(100vw, 1600px)`,
                                  src: `/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?width=1600&height=349`,
                                  srcSet: `/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?scale-down-to=512&width=1600&height=349 512w,/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?scale-down-to=1024&width=1600&height=349 1024w,/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?width=1600&height=349 1600w`,
                                },
                              },
                            },
                            children: C(hi, {
                              __framer__spring: {
                                bounce: 0,
                                damping: 60,
                                delay: 0,
                                duration: 1,
                                durationBasedSpring: !0,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stagger: 0,
                                stiffness: 500,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 64,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              background: {
                                alt: `Transparent image of sand dunes`,
                                fit: `fill`,
                                intrinsicHeight: 349,
                                intrinsicWidth: 1600,
                                loading: N(1920),
                                pixelHeight: 349,
                                pixelWidth: 1600,
                                positionX: `center`,
                                positionY: `top`,
                                sizes: `min(100vw, 1600px)`,
                                src: `/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?width=1600&height=349`,
                                srcSet: `/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?scale-down-to=512&width=1600&height=349 512w,/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?scale-down-to=1024&width=1600&height=349 1024w,/test/framer/images/KEyElslPaeEXTKlix9xtVlt4.png?width=1600&height=349 1600w`,
                              },
                              className: `framer-1p8lytk`,
                              "data-framer-name": `Sstfnco Minimalist_rolling_landscape_smooth_layered_hills_faint__523ac200-04ea-4fe0-8723-13074ad98f38`,
                            }),
                          }),
                        ],
                      }),
                    C(A.footer, {
                      className: `framer-15kwehq`,
                      "data-border": !0,
                      "data-framer-name": `Footer`,
                      children: b(`div`, {
                        className: `framer-zz81tn`,
                        "data-framer-name": `container`,
                        children: [
                          b(`div`, {
                            className: `framer-123zn8e`,
                            children: [
                              C(`div`, {
                                className: `framer-yk6mz3`,
                                children: C(mt, {
                                  animated: !1,
                                  className: `framer-1dd3oij`,
                                  layoutId: `U3zkmuRbY`,
                                  z1don5LZx: !0,
                                }),
                              }),
                              b(`div`, {
                                className: `framer-2gawpk`,
                                children: [
                                  b(`div`, {
                                    className: `framer-zbagcq`,
                                    children: [
                                      C(I, {
                                        breakpoint: g,
                                        overrides: {
                                          Tp3NbtZ_b: {
                                            children: C(o, {
                                              children: C(`p`, {
                                                className: `framer-styles-preset-1fhxhj6`,
                                                "data-styles-preset": `O0790qsZT`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                },
                                                children: `Product`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: C(M, {
                                          __fromCanvasComponent: !0,
                                          children: C(o, {
                                            children: C(`p`, {
                                              className: `framer-styles-preset-1fhxhj6`,
                                              "data-styles-preset": `O0790qsZT`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                              },
                                              children: `Product`,
                                            }),
                                          }),
                                          className: `framer-3gkhif`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      b(`div`, {
                                        className: `framer-1evr4bd`,
                                        children: [
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        webPageId: `jOgyCWBcf`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `dFlSpFAAi`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Homepage`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      webPageId: `jOgyCWBcf`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `dFlSpFAAi`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Homepage`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1v0ps5u`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        webPageId: `bXKgIgpkp`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `ceJeNkjdO`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Changelog`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      webPageId: `bXKgIgpkp`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `ceJeNkjdO`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Changelog`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-5lc3vm`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        webPageId: `WBQiMtek1`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `Sfh6EDCTO`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Pricing`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      webPageId: `WBQiMtek1`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `Sfh6EDCTO`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Pricing`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-k0yq1n`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        webPageId: `QEHd0IWPx`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `GaHF_3mOJ`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: C(`strong`, {
                                                          children: `Get started`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      webPageId: `QEHd0IWPx`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `GaHF_3mOJ`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: C(`strong`, {
                                                        children: `Get started`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1va48o1`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  b(`div`, {
                                    className: `framer-1btnc83`,
                                    children: [
                                      C(I, {
                                        breakpoint: g,
                                        overrides: {
                                          Tp3NbtZ_b: {
                                            children: C(o, {
                                              children: C(`p`, {
                                                className: `framer-styles-preset-1fhxhj6`,
                                                "data-styles-preset": `O0790qsZT`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                },
                                                children: `Company`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: C(M, {
                                          __fromCanvasComponent: !0,
                                          children: C(o, {
                                            children: C(`p`, {
                                              className: `framer-styles-preset-1fhxhj6`,
                                              "data-styles-preset": `O0790qsZT`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                              },
                                              children: `Company`,
                                            }),
                                          }),
                                          className: `framer-1h3pve3`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      b(`div`, {
                                        className: `framer-xqdypl`,
                                        children: [
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        webPageId: `dpEtnX2Cb`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `otG5giEgS`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `About`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      webPageId: `dpEtnX2Cb`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `otG5giEgS`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `About`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-50vlls`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        hash: `:vIFrrY2Ua`,
                                                        webPageId: `dpEtnX2Cb`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `bMhPKQ2MW`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Careers`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      hash: `:vIFrrY2Ua`,
                                                      webPageId: `dpEtnX2Cb`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `bMhPKQ2MW`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Careers`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-8x5t1n`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        webPageId: `JHJfURpkN`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `bSYEHgIJo`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Blog`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      webPageId: `JHJfURpkN`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `bSYEHgIJo`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Blog`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1rw9m3z`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  b(`div`, {
                                    className: `framer-1rraqux`,
                                    children: [
                                      C(I, {
                                        breakpoint: g,
                                        overrides: {
                                          Tp3NbtZ_b: {
                                            children: C(o, {
                                              children: C(`p`, {
                                                className: `framer-styles-preset-1fhxhj6`,
                                                "data-styles-preset": `O0790qsZT`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                },
                                                children: `Legal`,
                                              }),
                                            }),
                                          },
                                        },
                                        children: C(M, {
                                          __fromCanvasComponent: !0,
                                          children: C(o, {
                                            children: C(`p`, {
                                              className: `framer-styles-preset-1fhxhj6`,
                                              "data-styles-preset": `O0790qsZT`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                              },
                                              children: `Legal`,
                                            }),
                                          }),
                                          className: `framer-48hbrp`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                      b(`div`, {
                                        className: `framer-1k9b3rk`,
                                        children: [
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        pathVariables: {
                                                          bFQmkkgLQ: `terms-of-use`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          bFQmkkgLQ: {
                                                            collectionId: `UfMy5xA3O`,
                                                            collectionItemId: `s0gRjAr4H`,
                                                          },
                                                        },
                                                        webPageId: `Jg52n0EKK`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `LvHXpF5TV`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Terms of use`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      pathVariables: {
                                                        bFQmkkgLQ: `terms-of-use`,
                                                      },
                                                      unresolvedPathSlugs: {
                                                        bFQmkkgLQ: {
                                                          collectionId: `UfMy5xA3O`,
                                                          collectionItemId: `s0gRjAr4H`,
                                                        },
                                                      },
                                                      webPageId: `Jg52n0EKK`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `LvHXpF5TV`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Terms of use`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1l1t6ji`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        pathVariables: {
                                                          bFQmkkgLQ: `privacy-policy`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          bFQmkkgLQ: {
                                                            collectionId: `UfMy5xA3O`,
                                                            collectionItemId: `IDyx00s0G`,
                                                          },
                                                        },
                                                        webPageId: `Jg52n0EKK`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `cA0Lm00N9`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Privacy policy`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      pathVariables: {
                                                        bFQmkkgLQ: `privacy-policy`,
                                                      },
                                                      unresolvedPathSlugs: {
                                                        bFQmkkgLQ: {
                                                          collectionId: `UfMy5xA3O`,
                                                          collectionItemId: `IDyx00s0G`,
                                                        },
                                                      },
                                                      webPageId: `Jg52n0EKK`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `cA0Lm00N9`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Privacy policy`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1yrbxnb`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          C(I, {
                                            breakpoint: g,
                                            overrides: {
                                              Tp3NbtZ_b: {
                                                children: C(o, {
                                                  children: C(`p`, {
                                                    className: `framer-styles-preset-1fhxhj6`,
                                                    "data-styles-preset": `O0790qsZT`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                    },
                                                    children: C(B, {
                                                      href: {
                                                        pathVariables: {
                                                          bFQmkkgLQ: `cookie-policy`,
                                                        },
                                                        unresolvedPathSlugs: {
                                                          bFQmkkgLQ: {
                                                            collectionId: `UfMy5xA3O`,
                                                            collectionItemId: `ntmFreNbo`,
                                                          },
                                                        },
                                                        webPageId: `Jg52n0EKK`,
                                                      },
                                                      motionChild: !0,
                                                      nodeId: `zQy7E5qZP`,
                                                      openInNewTab: !1,
                                                      relValues: [],
                                                      scopeId: `Ihsypfxzf`,
                                                      smoothScroll: !1,
                                                      children: C(A.a, {
                                                        className: `framer-styles-preset-v2iiak`,
                                                        "data-styles-preset": `Bh7brll6H`,
                                                        children: `Cookie policy`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              },
                                            },
                                            children: C(M, {
                                              __fromCanvasComponent: !0,
                                              children: C(o, {
                                                children: C(`p`, {
                                                  className: `framer-styles-preset-1fhxhj6`,
                                                  "data-styles-preset": `O0790qsZT`,
                                                  dir: `auto`,
                                                  children: C(B, {
                                                    href: {
                                                      pathVariables: {
                                                        bFQmkkgLQ: `cookie-policy`,
                                                      },
                                                      unresolvedPathSlugs: {
                                                        bFQmkkgLQ: {
                                                          collectionId: `UfMy5xA3O`,
                                                          collectionItemId: `ntmFreNbo`,
                                                        },
                                                      },
                                                      webPageId: `Jg52n0EKK`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `zQy7E5qZP`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `Ihsypfxzf`,
                                                    smoothScroll: !1,
                                                    children: C(A.a, {
                                                      className: `framer-styles-preset-v2iiak`,
                                                      "data-styles-preset": `Bh7brll6H`,
                                                      children: `Cookie policy`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1d891sv`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          C(`div`, { className: `framer-70az75` }),
                          b(`div`, {
                            className: `framer-dtf6w2`,
                            children: [
                              C(M, {
                                __fromCanvasComponent: !0,
                                children: C(o, {
                                  children: C(`p`, {
                                    className: `framer-styles-preset-10qv886`,
                                    "data-styles-preset": `dvE5DE7ca`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                    },
                                    children: `© Powder, Inc., 2026. All rights reserved`,
                                  }),
                                }),
                                className: `framer-lt1zyc`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              b(`div`, {
                                className: `framer-gaqks3`,
                                children: [
                                  C(I, {
                                    breakpoint: g,
                                    overrides: { Tp3NbtZ_b: { y: 3046 } },
                                    children: C(V, {
                                      height: 36,
                                      y: 1538,
                                      children: C(W, {
                                        className: `framer-1w3nz9c-container`,
                                        nodeId: `YXutDS_9t`,
                                        scopeId: `Ihsypfxzf`,
                                        children: C(Q, {
                                          height: `100%`,
                                          id: `YXutDS_9t`,
                                          layoutId: `YXutDS_9t`,
                                          NVdv7NMuV: bn,
                                          vAJxbkBBk: `https://www.framer.com/@stfnco/`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  C(I, {
                                    breakpoint: g,
                                    overrides: { Tp3NbtZ_b: { y: 3046 } },
                                    children: C(V, {
                                      height: 36,
                                      y: 1538,
                                      children: C(W, {
                                        className: `framer-2vbsob-container`,
                                        nodeId: `ShN334TOe`,
                                        scopeId: `Ihsypfxzf`,
                                        children: C(Q, {
                                          height: `100%`,
                                          id: `ShN334TOe`,
                                          layoutId: `ShN334TOe`,
                                          NVdv7NMuV: On,
                                          vAJxbkBBk: `facebook.com`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  C(I, {
                                    breakpoint: g,
                                    overrides: { Tp3NbtZ_b: { y: 3046 } },
                                    children: C(V, {
                                      height: 36,
                                      y: 1538,
                                      children: C(W, {
                                        className: `framer-1xzjq19-container`,
                                        nodeId: `SPtKuCZ0C`,
                                        scopeId: `Ihsypfxzf`,
                                        children: C(Q, {
                                          height: `100%`,
                                          id: `SPtKuCZ0C`,
                                          layoutId: `SPtKuCZ0C`,
                                          NVdv7NMuV: In,
                                          vAJxbkBBk: `linkedin.com`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  C(I, {
                                    breakpoint: g,
                                    overrides: { Tp3NbtZ_b: { y: 3046 } },
                                    children: C(V, {
                                      height: 36,
                                      y: 1538,
                                      children: C(W, {
                                        className: `framer-wbowxr-container`,
                                        nodeId: `ctct6uGnX`,
                                        scopeId: `Ihsypfxzf`,
                                        children: C(Q, {
                                          height: `100%`,
                                          id: `ctct6uGnX`,
                                          layoutId: `ctct6uGnX`,
                                          NVdv7NMuV: Qn,
                                          vAJxbkBBk: `https://x.com/stfnco`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  C(I, {
                                    breakpoint: g,
                                    overrides: { Tp3NbtZ_b: { y: 3046 } },
                                    children: C(V, {
                                      height: 36,
                                      y: 1538,
                                      children: C(W, {
                                        className: `framer-ehurei-container`,
                                        nodeId: `bY9FNFdzj`,
                                        scopeId: `Ihsypfxzf`,
                                        children: C(Q, {
                                          height: `100%`,
                                          id: `bY9FNFdzj`,
                                          layoutId: `bY9FNFdzj`,
                                          NVdv7NMuV: Wn,
                                          vAJxbkBBk: `instagram.com`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                C(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Ri = (e) =>
        e === Ue.canvas || e === Ue.export
          ? [
              ...Mi,
              ...Ai.flatMap((e) => {
                let t = ji[e];
                return ki[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [
              ...Mi,
              ...Ai.map((e) => `@media ${Ni[e]} { ${ki[e].join(` `)} }`),
            ]),
      (zi = U(Li, Ri, `framer-CaVRT`)),
      (zi.displayName = `Template`),
      (zi.defaultProps = { height: 1776, width: 1280 }),
      H(zi, {
        egeQCIuFh: { title: `Scroll Section`, type: G.ScrollSectionRef },
        MO6WawlI2: { defaultValue: !0, title: `CTA Visible`, type: G.Boolean },
      }),
      j(
        zi,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/test/framer/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/test/framer/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/test/framer/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/test/framer/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/test/framer/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/test/framer/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/test/framer/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/test/framer/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/test/framer/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/test/framer/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `/test/framer/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/test/framer/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/test/framer/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/test/framer/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
            ],
          },
          ...Xr,
          ...Qr,
          ...$r,
          ...ri,
          ...ai,
          ...oi,
          ...si,
          ...ci,
          ...li,
          ...ui,
          ...di,
          ...fi,
          ...pi,
          ...gi,
          ...L(It),
          ...L(Ge),
          ...L(Mt),
          ...L(Xe),
          ...L(Ct),
          ...L(Ot),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (zi.loader = {
        load: (e, t) =>
          Pe(
            [
              () => pe(X, {}, t),
              () => pe(Y, {}, t),
              () => pe(K, {}, t),
              () => pe(gt, {}, t),
              () => pe(Q, {}, t),
            ],
            t,
          ),
      }));
  });
function Vi({ webPageId: e, children: t, style: n, ...r }) {
  let i = {
      egeQCIuFh: {
        href: { hash: `:cjgR0PL3H`, webPageId: `jOgyCWBcf` },
        refKey: !0,
      },
      MO6WawlI2: !0,
    },
    a = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:gGQFloYSu`, webPageId: `JHJfURpkN` },
        refKey: !0,
      },
    },
    o = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:kkb614BCi`, webPageId: `dpEtnX2Cb` },
        refKey: !0,
      },
    },
    s = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:VZx6LPrax`, webPageId: `bXKgIgpkp` },
        refKey: !0,
      },
    },
    c = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:yo60OTfsP`, webPageId: `QEHd0IWPx` },
        refKey: !0,
      },
      MO6WawlI2: !1,
    },
    l = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:ce0aNLZwZ`, webPageId: `dE6UQK_JW` },
        refKey: !0,
      },
      MO6WawlI2: !1,
    },
    u = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:LJWBAIvDt`, webPageId: `WBQiMtek1` },
        refKey: !0,
      },
    },
    d = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:irEBHMYq0`, webPageId: `o2yXfHY3m` },
        refKey: !0,
      },
    },
    f = {
      ...i,
      egeQCIuFh: {
        href: { hash: `:vU20a15sy`, webPageId: `Jg52n0EKK` },
        refKey: !0,
      },
    },
    p = be(),
    m =
      {
        bXKgIgpkp: s,
        dE6UQK_JW: l,
        dpEtnX2Cb: o,
        Jg52n0EKK: f,
        JHJfURpkN: a,
        jOgyCWBcf: i,
        o2yXfHY3m: d,
        QEHd0IWPx: c,
        WBQiMtek1: u,
      }[e] ?? {};
  switch (e) {
    case `jOgyCWBcf`:
    case `JHJfURpkN`:
    case `dpEtnX2Cb`:
    case `bXKgIgpkp`:
    case `QEHd0IWPx`:
    case `dE6UQK_JW`:
    case `WBQiMtek1`:
    case `o2yXfHY3m`:
    case `Jg52n0EKK`:
      return g(ue, { links: [m.egeQCIuFh] }, (e) =>
        g(zi, { ...m, egeQCIuFh: p(e[0]), key: `Template1`, style: n }, t(!0)),
      );
    default:
      return t(!1);
  }
}
function Hi(e) {
  switch (e) {
    case `jOgyCWBcf`:
    case `JHJfURpkN`:
    case `dpEtnX2Cb`:
    case `bXKgIgpkp`:
    case `QEHd0IWPx`:
    case `dE6UQK_JW`:
    case `WBQiMtek1`:
    case `o2yXfHY3m`:
    case `Jg52n0EKK`:
      return [
        { hash: `k7b1cf`, mediaQuery: `(max-width: 809.98px)` },
        {
          hash: `65kzqc`,
          mediaQuery: `(min-width: 810px) and (max-width: 1279.98px)`,
        },
        { hash: `1t24cya`, mediaQuery: `(min-width: 1280px)` },
      ];
    default:
      return;
  }
}
async function Ui({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: n,
  localeId: a,
  collectionItemId: s,
  contentLocaleId: c,
  shouldResolveInitialRouteContentState: l = !1,
}) {
  let u = $[e].page.preload();
  (Be({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    Le(Yi));
  let f = g(We, {
    children: g(Oe, {
      children: g(we, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: n,
        routes: $,
        collectionUtils: qi,
        serverDatabaseClient: Ji,
        framerSiteId: Yi,
        notFoundPage: z(
          () =>
            import(
              `./MC18Gxs-42CGr6-toqLz7frmItLEYbRGbwyGNqYr2Sg.B7ioF-h8.mjs`
            ),
        ),
        isReducedMotion: void 0,
        localeId: a,
        locales: Ki,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://powder.framer.website`,
        EditorBar:
          d === void 0
            ? void 0
            : (() => {
                if (Zi) {
                  console.log(
                    `[Framer On-Page Editing] Unavailable because navigator is bot`,
                  );
                  return;
                }
                return z(async () => {
                  d.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: {
                      useCurrentRoute: Ie,
                      useLocaleInfo: Te,
                      useRouter: de,
                    },
                    react: {
                      createElement: g,
                      Fragment: o,
                      memo: r,
                      useCallback: ee,
                      useEffect: m,
                      useRef: O,
                      useState: D,
                      useLayoutEffect: i,
                    },
                    "react-dom": { createPortal: v },
                  };
                  let { createEditorBar: e } = await import(
                    `https://framer.com/edit/init.mjs`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: Vi,
        loadSnippetsModule: new Ae(
          () =>
            import(
              `./-3Qbd2-0Wts1Sm7wLUvWzYPBz0kpofX2ho4_HSH2siQ.dObCGW41.mjs`
            ),
        ),
        initialCollectionItemId: s,
        initialContentLocaleIdOverride: c,
      }),
    }),
    value: {
      global: {
        enter: {
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.2,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await u, f);
}
function Wi() {
  Xi && d.__framer_events.push(arguments);
}
async function Gi(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || d.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r,
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r,
      );
    Wi(
      n ? `published_site_load_recoverable_error` : `published_site_load_error`,
      {
        message: String(e),
        componentStack: r,
        stack: r
          ? void 0
          : e instanceof Error && typeof e.stack == `string`
            ? e.stack
            : null,
      },
    );
  }
  try {
    let r, i, a, o, s, c, u;
    if (e)
      ((u = JSON.parse(t.dataset.framerHydrateV2)),
        (r = u.routeId),
        (i = u.localeId),
        (a = u.contentLocaleId),
        (o = u.pathVariables),
        (s = u.canonicalPathVariables),
        (c = u.breakpoints),
        (r = Ve($, r)));
    else {
      Ve($, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries())
          e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = he($, decodeURIComponent(location.pathname), !0, Ki);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let f = Ui({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? u?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    d !== void 0 &&
      (async () => {
        let e = $[r],
          t = Ki.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = u?.collectionItemId ?? null;
        if (n === null && e?.collectionId && qi) {
          let r = await qi[e.collectionId]?.(),
            [i] = Object.values(o);
          r &&
            typeof i == `string` &&
            (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          d.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Yi,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: d.location.href,
              hostname: d.location.hostname || null,
              pathname: d.location.pathname || null,
              hash: d.location.hash || null,
              search: d.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await xe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, {
              detail: { framerLocale: t || null },
            }),
          ));
      })();
    let p = await f;
    e
      ? (ge(`framer-rewrite-breakpoints`, () => {
          (ze(c), d.__framer_onRewriteBreakpoints?.(c));
        }),
        (Zi ? (e) => e() : l)(() => {
          (oe(), Fe(), te(t, p, { onRecoverableError: n }));
        }))
      : T(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var $, Ki, qi, Ji, Yi, Xi, Zi;
t(() => {
  if (
    (k(),
    R(),
    u(),
    p(),
    S(),
    Bi(),
    ($ = {
      jOgyCWBcf: {
        elements: {
          AJzJpSwjO: `4-4`,
          aUirB3ivo: `2`,
          B0oGZOLMa: `intro-2`,
          BrsC2uNXf: `4-5`,
          cjgR0PL3H: `scroll`,
          ClxamfX9A: `logos`,
          e7Tjt_QG9: `hero`,
          Gelr8GH2W: `pricing`,
          Gh8lE9Kpv: `scroll-1`,
          GjEp0gJRB: `3`,
          guymAet8S: `4-7`,
          hD49b5EYc: `1`,
          Hd7kobyWD: `trig-3`,
          Hddi9z5pY: `about`,
          JGn24sgnT: `4-3`,
          O8F_AsOVO: `4-2`,
          OjsXQqGmf: `intro4`,
          QR0Lof7V5: `intro-1`,
          Qu6MXfx1P: `4-6`,
          TFQnOZ5lH: `0`,
          uIqAA9SvV: `trig-1`,
          UiyHMjv1G: `intro-3`,
          wKniCloW0: `mission`,
          yeXz9vysr: `4`,
          zTfr6cRLT: `4-1`,
          ZuepFrmpR: `trig-2`,
        },
        page: z(
          () =>
            import(
              `./z9KcjFd8l52X_GltqgttsmDqiSzMakmDmzPLBDKlws0.Dveybpgj.mjs`
            ),
        ),
        path: `/`,
      },
      JHJfURpkN: {
        elements: { gGQFloYSu: `scroll` },
        page: z(
          () =>
            import(
              `./FxofuR_JietVmuTpWIW4K5WvF-5zZO9SCjCDfhU3-vA.D5Q-1xI9.mjs`
            ),
        ),
        path: `/blog`,
      },
      dpEtnX2Cb: {
        elements: {
          Hk4RLrfhK: `4-2`,
          jn4LK8Odh: `4`,
          kkb614BCi: `scroll`,
          Ro2LEe0ZJ: `4-1`,
          RS92lrecu: `hero`,
          t2VlnlHpb: `4-3`,
          vIFrrY2Ua: `roles`,
        },
        page: z(
          () =>
            import(
              `./prP4YwmBUgmpWCBqgphYmVrxCEiImCXUqDmvi2Mr20o.DxPkbbLb.mjs`
            ),
        ),
        path: `/about`,
      },
      bXKgIgpkp: {
        elements: {
          V9IvRZrVz: `changelog`,
          VZx6LPrax: `scroll`,
          YqfxqiNyH: `hero`,
        },
        page: z(
          () =>
            import(
              `./tRmdStqOcl0_nf50ubEbzp3S38Od8Iug74rnPkg6fkA.Dc3CIgIu.mjs`
            ),
        ),
        path: `/changelog`,
      },
      QEHd0IWPx: {
        elements: { yo60OTfsP: `scroll` },
        page: z(
          () =>
            import(
              `./2qj3_qMQWkCj8t0Zfdu9PQ2JD-d9T-S5xbkYT0mam34.4373iTjk.mjs`
            ),
        ),
        path: `/get-started`,
      },
      dE6UQK_JW: {
        elements: { ce0aNLZwZ: `scroll` },
        page: z(
          () =>
            import(
              `./MC18Gxs-42CGr6-toqLz7frmItLEYbRGbwyGNqYr2Sg.B7ioF-h8.mjs`
            ),
        ),
        path: `/404`,
      },
      WBQiMtek1: {
        elements: {
          IP_5mrDzS: `compare`,
          LJWBAIvDt: `scroll`,
          m2PRsnkFo: `scroll-1`,
          NjRIwgTM0: `pricing`,
          VbpnlC5S2: `logos`,
        },
        page: z(
          () =>
            import(
              `./0uA8WtGnqRfoHc_lgo0HI00G43Xix_F-EBxgfiFjZLI.pdrCH3bq.mjs`
            ),
        ),
        path: `/pricing`,
      },
      Tt0mMPztE: {
        elements: {},
        page: z(
          () =>
            import(
              `./7tp_hpGYaUNDkb_aL-U7D3RfJ3zBDyoCl7fqCtbbJnY.ClUAf3lS.mjs`
            ),
        ),
        path: `/page`,
      },
      o2yXfHY3m: {
        collectionId: `SVtyO51O3`,
        elements: { fcyKHIcrs: `4`, irEBHMYq0: `scroll` },
        page: z(
          () =>
            import(
              `./mRkHPpS26EW-l_keQLnN_f4DHNhCWNAF3ppJ4F96MR8.CV8EpMUL.mjs`
            ),
        ),
        path: `/blog/:a7bj_ZBM4`,
      },
      Jg52n0EKK: {
        collectionId: `UfMy5xA3O`,
        elements: { vU20a15sy: `scroll` },
        page: z(
          () =>
            import(
              `./FQ3dgCe0WNsbo8ldInn_gtmY5NnoNzVI5aulYS9jwrk.jYeEOSHX.mjs`
            ),
        ),
        path: `/:bFQmkkgLQ`,
      },
    }),
    (Ki = [
      {
        code: `en`,
        id: `default`,
        name: `English`,
        slug: ``,
        textDirection: `ltr`,
      },
    ]),
    (qi = {
      SVtyO51O3: async () =>
        (
          await import(
            `./nHF3QrhzHrztkuujF3NHFfNh5GldGXLxMsTrIDc2RoM.CTZ8h1qP.mjs`
          )
        )?.utils,
      UfMy5xA3O: async () =>
        (
          await import(
            `./mPlB7_BIZjo-l4ZaU_MwphS0HMaQ7I4bRY8il65Ehys.Cq2UvRTt.mjs`
          )
        )?.utils,
      ZtiWazyOp: async () =>
        (await import(`./ZtiWazyOp.CWnYLhiA.mjs`).then((e) => (e.n(), e.t)))
          ?.utils,
    }),
    (Ji = void 0),
    (Yi = `7a611623c6ba08e03fe5f8f3f8ab29e83b0511137fd01481a40148d17448de71`),
    (Xi = typeof document < `u`),
    (Zi =
      Xi &&
      /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
        n.userAgent,
      )),
    Xi)
  ) {
    ((d.__framer_importFromPackage = (e, t) => () =>
      g(Ee, {
        error: `Package component not supported: "` + t + `" in "` + e + `"`,
      })),
      (d.__framer_events = d.__framer_events || []),
      Se());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Gi(!0, e) : Gi(!1, e);
  }
  })();
export { Hi as getLayoutTemplateBreakpoints, Ui as getPageRoot };
//# sourceMappingURL=script_main.CE7G0tVs.mjs.map
