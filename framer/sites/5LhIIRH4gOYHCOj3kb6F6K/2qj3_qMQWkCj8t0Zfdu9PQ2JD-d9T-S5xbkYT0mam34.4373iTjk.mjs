import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as ee,
  x as te,
} from "./react.CbTQkvGa.mjs";
import { M as u, i as ne, o as d, t as f } from "./motion.DqePFWeo.mjs";
import {
  A as p,
  At as re,
  D as m,
  G as h,
  H as g,
  I as _,
  It as v,
  Nt as y,
  Ot as ie,
  P as b,
  Rt as x,
  S,
  Tt as ae,
  W as C,
  X as w,
  _t as T,
  a as E,
  bt as oe,
  d as D,
  ft as se,
  gt as ce,
  ht as le,
  it as ue,
  j as de,
  jt as O,
  k,
  l as fe,
  o as A,
  p as pe,
  s as j,
  u as me,
  xt as he,
} from "./framer.CFgihyWK.mjs";
import {
  a as ge,
  c as _e,
  d as ve,
  f as ye,
  i as be,
  l as M,
  o as xe,
  r as Se,
  s as N,
  u as Ce,
} from "./shared-lib.t8-xaOwk.mjs";
import {
  _ as we,
  a as Te,
  c as Ee,
  d as De,
  f as Oe,
  g as ke,
  h as Ae,
  i as je,
  l as Me,
  m as Ne,
  n as Pe,
  o as Fe,
  p as Ie,
  r as Le,
  s as Re,
  t as P,
  u as ze,
  v as Be,
} from "./sphFUGhj9.BWeZJkL5.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./gk3iglzUb.DiXJMYUN.mjs";
import { n as Ge, t as Ke } from "./Border_Glow_Card.hHoZa0OP.mjs";
import {
  a as qe,
  i as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  t as Qe,
} from "./vwqpZoZVi.D0PpBGTp.mjs";
import {
  a as $e,
  i as et,
  n as tt,
  o as nt,
  r as rt,
  t as it,
} from "./w7zabuB3D.CehoLNDd.mjs";
import {
  a as at,
  i as ot,
  n as st,
  o as ct,
  r as lt,
  t as F,
} from "./m54zGBZ4w.CObtf37r.mjs";
import ut, {
  t as dt,
} from "./8-lougX1aNqOoJdw0rSR48j1R3b4PNO6vxW8Gz0FNbI.BBLCgKZB.mjs";
function ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  I,
  Dt = e(() => {
    (l(),
      w(),
      f(),
      r(),
      Ce(),
      (pt = y(u.div)),
      (mt = { VFPWG5s23: { hover: !0, pressed: !0 } }),
      (ht = [`VFPWG5s23`, `pigfbG1O9`, `OpOTRBsnV`, `vjwDGZbwI`, `AfOLQJQZ8`]),
      (gt = `framer-yFylq`),
      (_t = {
        AfOLQJQZ8: `framer-v-1n9pxa7`,
        OpOTRBsnV: `framer-v-16r5156`,
        pigfbG1O9: `framer-v-1grt1yb`,
        VFPWG5s23: `framer-v-ai5a7d`,
        vjwDGZbwI: `framer-v-sf2qtb`,
      }),
      (vt = {
        delay: 0,
        duration: 0.2,
        ease: [0.44, 0, 0.56, 1],
        type: `tween`,
      }),
      (yt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (bt = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (xt = (e, t) => `translateX(-50%) ${t}`),
      (St = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(d.Provider, { value: o, children: t });
      }),
      (Ct = {
        Default: `VFPWG5s23`,
        Disabled: `OpOTRBsnV`,
        Error: `AfOLQJQZ8`,
        Loading: `pigfbG1O9`,
        Success: `vjwDGZbwI`,
      }),
      (wt = u.create(t)),
      (Tt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ct[r.variant] ?? r.variant ?? `VFPWG5s23`,
      })),
      (Et = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (I = O(
        c(function (e, n) {
          let r = te(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: c, setLocale: l } = oe();
          se();
          let { style: d, className: f, layoutId: p, variant: h, ...g } = Tt(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: ie,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ae,
              setVariant: C,
              variants: w,
            } = re({
              cycleOrder: ht,
              defaultVariant: `VFPWG5s23`,
              enabledGestures: mt,
              ref: i,
              variant: h,
              variantClassNames: _t,
            }),
            T = Et(e, w),
            E = b(gt, N),
            D = () => _ !== `pigfbG1O9`,
            ce = () => _ === `pigfbG1O9`;
          return s(ne, {
            id: p ?? a,
            children: s(wt, {
              animate: w,
              initial: !1,
              children: s(St, {
                value: vt,
                children: o(u.button, {
                  ...g,
                  ...ie,
                  className: b(E, `framer-ai5a7d`, f, v),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: T,
                  layoutId: `VFPWG5s23`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                    borderBottomLeftRadius: 420,
                    borderBottomRightRadius: 420,
                    borderTopLeftRadius: 420,
                    borderTopRightRadius: 420,
                    opacity: 1,
                    ...d,
                  },
                  variants: {
                    "VFPWG5s23-hover": {
                      backgroundColor: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                      opacity: 1,
                    },
                    "VFPWG5s23-pressed": { opacity: 1 },
                    AfOLQJQZ8: {
                      backgroundColor: `rgba(255, 34, 68, 0.15)`,
                      opacity: 1,
                    },
                    OpOTRBsnV: { opacity: 0.5 },
                    vjwDGZbwI: { opacity: 1 },
                  },
                  ...ft(
                    {
                      "VFPWG5s23-hover": { "data-framer-name": void 0 },
                      "VFPWG5s23-pressed": { "data-framer-name": void 0 },
                      AfOLQJQZ8: { "data-framer-name": `Error` },
                      OpOTRBsnV: { "data-framer-name": `Disabled` },
                      pigfbG1O9: { "data-framer-name": `Loading` },
                      vjwDGZbwI: { "data-framer-name": `Success` },
                    },
                    _,
                    x,
                  ),
                  children: [
                    D() &&
                      s(m, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(u.p, {
                            className: `framer-styles-preset-1fhxhj6`,
                            "data-styles-preset": `O0790qsZT`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0)))`,
                            },
                            children: s(u.strong, { children: `Submit` }),
                          }),
                        }),
                        className: `framer-9n6f2f`,
                        fonts: [`Inter`, `Inter-Bold`],
                        layoutDependency: T,
                        layoutId: `xMnKMjwSo`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          AfOLQJQZ8: {
                            "--extracted-r6o4lv": `rgb(255, 34, 68)`,
                          },
                          vjwDGZbwI: {
                            "--extracted-r6o4lv": `var(--token-e1b8bbdc-eeb2-4ffd-b8c7-b4b2942ab291, rgb(0, 7, 13))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...ft(
                          {
                            AfOLQJQZ8: {
                              children: s(t, {
                                children: s(u.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                            vjwDGZbwI: {
                              children: s(t, {
                                children: s(u.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e1b8bbdc-eeb2-4ffd-b8c7-b4b2942ab291, rgb(0, 7, 13)))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                              fonts: [`Inter-SemiBold`],
                            },
                          },
                          _,
                          x,
                        ),
                      }),
                    ce() &&
                      s(u.div, {
                        className: `framer-820sd2`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: T,
                        layoutId: `dM4hyx_Tb`,
                        style: {
                          mask: `url('./framer/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('./framer/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: s(pt, {
                          __framer__loop: bt,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: yt,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-13m8yrk`,
                          "data-framer-name": `Conic`,
                          layoutDependency: T,
                          layoutId: `OB8fOIUPp`,
                          style: {
                            background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, var(--token-e1b8bbdc-eeb2-4ffd-b8c7-b4b2942ab291, rgb(0, 7, 13)) 342deg)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            pigfbG1O9: {
                              mask: `url('./framer/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('./framer/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: s(u.div, {
                            className: `framer-1mxtmx0`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: T,
                            layoutId: `jw8xzsvup`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: xt,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-yFylq.framer-1ona93u, .framer-yFylq .framer-1ona93u { display: block; }`,
          `.framer-yFylq.framer-ai5a7d { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: min-content; }`,
          `.framer-yFylq .framer-9n6f2f { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-yFylq .framer-820sd2 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-yFylq .framer-13m8yrk { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-yFylq .framer-1mxtmx0 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-yFylq.framer-v-1grt1yb.framer-ai5a7d, .framer-yFylq.framer-v-16r5156.framer-ai5a7d, .framer-yFylq.framer-v-sf2qtb.framer-ai5a7d, .framer-yFylq.framer-v-1n9pxa7.framer-ai5a7d { cursor: unset; }`,
          `.framer-yFylq.framer-v-1grt1yb .framer-13m8yrk { overflow: hidden; }`,
          ..._e,
          `.framer-yFylq[data-border="true"]::after, .framer-yFylq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-yFylq`,
      )),
      (I.displayName = `Button Form`),
      (I.defaultProps = { height: 40, width: 77 }),
      de(I, {
        variant: {
          options: [
            `VFPWG5s23`,
            `pigfbG1O9`,
            `OpOTRBsnV`,
            `vjwDGZbwI`,
            `AfOLQJQZ8`,
          ],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: j.Enum,
        },
      }),
      p(
        I,
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
                url: `./framer/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `./framer/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `./framer/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `./framer/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `./framer/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `./framer/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `./framer/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `./framer/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `./framer/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `./framer/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `./framer/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `./framer/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `./framer/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `./framer/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `./framer/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `./framer/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `./framer/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `./framer/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `./framer/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `./framer/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `./framer/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...C(M),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  L,
  Ot,
  kt,
  R,
  At,
  jt,
  z,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  B,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  V,
  Kt,
  qt,
  H,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  U,
  W,
  G,
  K,
  en,
  q,
  tn,
  J,
  nn,
  rn,
  Y,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  X,
  vn,
  yn,
  bn,
  xn,
  Z,
  Sn,
  Cn,
  Q,
  $;
e(() => {
  (l(),
    w(),
    f(),
    r(),
    ye(),
    Be(),
    ke(),
    Ne(),
    Oe(),
    ze(),
    Ee(),
    Fe(),
    st(),
    Dt(),
    Pe(),
    Ge(),
    ct(),
    Ve(),
    Ce(),
    xe(),
    Xe(),
    Je(),
    nt(),
    et(),
    je(),
    Ye(),
    tt(),
    dt(),
    (L = y(pe)),
    (Ot = g(F)),
    (kt = y(A)),
    (R = y(m)),
    (At = g(I)),
    (jt = g(Ke)),
    (z = y(u.div)),
    (Mt = g(rt)),
    (Nt = g(qe)),
    (Pt = g(it)),
    (Ft = g(Ze)),
    (It = g($e)),
    (Lt = g(Qe)),
    (Rt = x(y(u.div))),
    (zt = g(Le)),
    (Bt = g(Ae)),
    (B = v(m)),
    (Vt = g(we)),
    (Ht = g(Te)),
    (Ut = g(Re)),
    (Wt = g(Me)),
    (Gt = g(Ie)),
    (V = v(u.div)),
    (Kt = g(De)),
    (qt = g(P)),
    (H = v(A)),
    (Jt = {
      enp8uMTYS: `(min-width: 1024px) and (max-width: 1279.98px)`,
      H0F1_dqEb: `(min-width: 1280px)`,
      MESoOI3DZ: `(max-width: 1023.98px)`,
    }),
    (Yt = []),
    (Xt = `framer-MwXVq`),
    (Zt = {
      enp8uMTYS: `framer-v-b030hu`,
      H0F1_dqEb: `framer-v-ma9cro`,
      MESoOI3DZ: `framer-v-e3n20k`,
    }),
    (Qt = (e, t, n) => (e && t ? `position` : n)),
    ($t = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 67,
    }),
    (U = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (W = {
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
    (G = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (en = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (q = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (tn = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (J = { bounce: 0, delay: 0.4, duration: 1, type: `spring` }),
    (nn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 128,
    }),
    (rn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 0,
    }),
    (Y = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (an = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: J,
      x: 0,
      y: 0,
    }),
    (on = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.5, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (sn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.6, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (cn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.7, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (ln = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.8, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (un = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.9, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (dn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (fn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.1, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (pn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.2, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (mn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.3, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (hn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.4, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (gn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.5, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (_n = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.6, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (X = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.7, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (vn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.8, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (yn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 1.9, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (bn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 2, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (xn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 64,
    }),
    (Z = { Desktop: `H0F1_dqEb`, Phone: `MESoOI3DZ`, Tablet: `enp8uMTYS` }),
    (Sn = ({ value: e }) =>
      T()
        ? null
        : s(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Cn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `H0F1_dqEb`,
    })),
    (Q = O(
      c(function (e, r) {
        let c = te(null),
          l = r ?? c,
          f = ee(),
          { activeLocale: p, setLocale: re } = oe(),
          g = se(),
          { style: _, className: v, layoutId: y, variant: x, ...C } = Cn(e);
        he(n(() => ut({}, p), [p]));
        let [w, T] = ce(x, Jt, !1),
          ue = b(Xt, lt, Se, We, N),
          de = a(D)?.isLayoutTemplate,
          O = !!a(d)?.transition?.layout,
          pe = Qt(de, O),
          j = ae(`yo60OTfsP`),
          ge = ie();
        return (
          le({}),
          s(D.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Z,
              primaryVariantId: `H0F1_dqEb`,
              variantClassNames: Zt,
            },
            children: o(ne, {
              id: y ?? f,
              children: [
                s(Sn, {
                  value: `html body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 9, 18)); }`,
                }),
                s(u.div, {
                  ...C,
                  className: b(ue, `framer-ma9cro`, v),
                  ref: l,
                  style: { ..._ },
                  children: o(u.section, {
                    className: `framer-1vl2109`,
                    "data-border": !0,
                    "data-framer-name": `CTA Section`,
                    layout: pe,
                    children: [
                      s(S, {
                        breakpoint: w,
                        overrides: {
                          enp8uMTYS: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 424,
                              intrinsicWidth: 1232,
                              loading: h((g?.y || 0) + 0 + 0 + 1360 - 538),
                              pixelHeight: 848,
                              pixelWidth: 2464,
                              positionX: `center`,
                              positionY: `top`,
                              sizes: `min(${g?.width || `100vw`}, 1600px)`,
                              src: `./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?width=2464&height=848`,
                              srcSet: `./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=512&width=2464&height=848 512w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=1024&width=2464&height=848 1024w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=2048&width=2464&height=848 2048w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?width=2464&height=848 2464w`,
                            },
                          },
                          MESoOI3DZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 424,
                              intrinsicWidth: 1232,
                              loading: h((g?.y || 0) + 0 + 0 + 1360 - 184),
                              pixelHeight: 848,
                              pixelWidth: 2464,
                              positionX: `center`,
                              positionY: `top`,
                              sizes: `min(${g?.width || `100vw`}, 1600px)`,
                              src: `./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?width=2464&height=848`,
                              srcSet: `./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=512&width=2464&height=848 512w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=1024&width=2464&height=848 1024w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=2048&width=2464&height=848 2048w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?width=2464&height=848 2464w`,
                            },
                          },
                        },
                        children: s(L, {
                          __framer__adjustPosition: !1,
                          __framer__animate: { transition: U },
                          __framer__animateOnce: !0,
                          __framer__enter: $t,
                          __framer__offset: 0,
                          __framer__parallaxTransformEnabled: !0,
                          __framer__speed: 83,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 0.25,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 424,
                            intrinsicWidth: 1232,
                            loading: h((g?.y || 0) + 0 + 0 + 1076 - 538),
                            pixelHeight: 848,
                            pixelWidth: 2464,
                            positionX: `center`,
                            positionY: `top`,
                            sizes: `min(${g?.width || `100vw`}, 1600px)`,
                            src: `./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?width=2464&height=848`,
                            srcSet: `./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=512&width=2464&height=848 512w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=1024&width=2464&height=848 1024w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?scale-down-to=2048&width=2464&height=848 2048w,./framer/images/T6hTfVKiQ81oLHCljxjb0WPLHY8.png?width=2464&height=848 2464w`,
                          },
                          className: `framer-11zywq6`,
                          "data-framer-name": `background`,
                        }),
                      }),
                      s(`div`, {
                        className: `framer-145aeqh`,
                        "data-framer-name": `container`,
                        children: o(`div`, {
                          className: `framer-1e029ai`,
                          id: j,
                          ref: ge(j),
                          children: [
                            o(`div`, {
                              className: `framer-1v3n0ou`,
                              "data-framer-name": `lockup`,
                              children: [
                                o(`div`, {
                                  className: `framer-seeix7`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-s31k9f`,
                                      children: [
                                        s(S, {
                                          breakpoint: w,
                                          overrides: {
                                            enp8uMTYS: {
                                              y:
                                                (g?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                -41.4 +
                                                180 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            MESoOI3DZ: {
                                              y:
                                                (g?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                -1.4 +
                                                180 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: s(E, {
                                            height: 30,
                                            y:
                                              (g?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              180 +
                                              0 +
                                              0 +
                                              0 +
                                              104.6 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: s(kt, {
                                              __framer__animate: {
                                                transition: G,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: W,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-k50y0d-container`,
                                              nodeId: `QgbX5tthO`,
                                              rendersWithMotion: !0,
                                              scopeId: `QEHd0IWPx`,
                                              children: s(F, {
                                                bwtRC2zWt: `Try Powder`,
                                                cxgg1etFf: !0,
                                                Dh_X3w3jZ: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                dMWH0omL8: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                                eaYoGaNwq: {
                                                  borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgb(20, 35, 50))`,
                                                  borderStyle: `solid`,
                                                  borderWidth: 1,
                                                },
                                                GYoEH1GVm: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                h3fww64y5: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65))`,
                                                height: `100%`,
                                                id: `QgbX5tthO`,
                                                layoutId: `QgbX5tthO`,
                                                OgEx_2E7P: !1,
                                                pdea6CzDr: ve,
                                                Rtia32FHG: !0,
                                                variant: K(`qfOTriuLV`),
                                                VvHeeXiqh: !1,
                                                width: `100%`,
                                                ZGOQT_PfL: `4px 16px 4px 16px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-15dxoyp`,
                                          children: [
                                            s(S, {
                                              breakpoint: w,
                                              overrides: {
                                                enp8uMTYS: {
                                                  children: s(t, {
                                                    children: s(`h1`, {
                                                      className: `framer-styles-preset-7hjh4k`,
                                                      "data-styles-preset": `bM7WzBkv5`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                      },
                                                      children: `Get a demo`,
                                                    }),
                                                  }),
                                                },
                                                MESoOI3DZ: {
                                                  children: s(t, {
                                                    children: s(`h1`, {
                                                      className: `framer-styles-preset-7hjh4k`,
                                                      "data-styles-preset": `bM7WzBkv5`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                      },
                                                      children: `Get a demo`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: s(R, {
                                                __framer__animate: {
                                                  transition: en,
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: W,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: s(t, {
                                                  children: s(`h1`, {
                                                    className: `framer-styles-preset-7hjh4k`,
                                                    "data-styles-preset": `bM7WzBkv5`,
                                                    dir: `auto`,
                                                    children: `Get a demo`,
                                                  }),
                                                }),
                                                className: `framer-wkgqqs`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            s(S, {
                                              breakpoint: w,
                                              overrides: {
                                                enp8uMTYS: {
                                                  children: s(t, {
                                                    children: s(`p`, {
                                                      className: `framer-styles-preset-prenqk`,
                                                      "data-styles-preset": `POYKcChXw`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                      },
                                                      children: `See how Powder can help you today (it might just blow your mind a little)`,
                                                    }),
                                                  }),
                                                },
                                                MESoOI3DZ: {
                                                  children: s(t, {
                                                    children: s(`p`, {
                                                      className: `framer-styles-preset-prenqk`,
                                                      "data-styles-preset": `POYKcChXw`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `center`,
                                                      },
                                                      children: `See how Powder can help you today (it might just blow your mind a little)`,
                                                    }),
                                                  }),
                                                },
                                              },
                                              children: s(R, {
                                                __framer__animate: {
                                                  transition: U,
                                                },
                                                __framer__animateOnce: !0,
                                                __framer__enter: W,
                                                __framer__styleAppearEffectEnabled:
                                                  !0,
                                                __framer__threshold: 0,
                                                __fromCanvasComponent: !0,
                                                __perspectiveFX: !1,
                                                __targetOpacity: 1,
                                                children: s(t, {
                                                  children: s(`p`, {
                                                    className: `framer-styles-preset-prenqk`,
                                                    "data-styles-preset": `POYKcChXw`,
                                                    dir: `auto`,
                                                    children: `See how Powder can help you today (it might just blow your mind a little)`,
                                                  }),
                                                }),
                                                className: `framer-pih7rf`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    o(z, {
                                      __framer__animate: { transition: q },
                                      __framer__animateOnce: !0,
                                      __framer__enter: W,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1u49eal`,
                                      "data-framer-name": `Form`,
                                      children: [
                                        s(fe, {
                                          action: `https://api.framer.com/forms/v1/forms/2aed3ffd-60b6-43b9-b82b-f327705af7e0/submit`,
                                          className: `framer-abynrr`,
                                          nodeId: `AFWQ7_G95`,
                                          children: (e) =>
                                            o(i, {
                                              children: [
                                                s(`label`, {
                                                  className: `framer-1df0ap6`,
                                                  children: s(me, {
                                                    className: `framer-p77m7z`,
                                                    inputName: `email`,
                                                    placeholder: `What's your work email?`,
                                                    required: !0,
                                                    type: `email`,
                                                  }),
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        310.8 +
                                                        0 +
                                                        0 +
                                                        8,
                                                    },
                                                    MESoOI3DZ: {
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        310.8 +
                                                        0 +
                                                        0 +
                                                        8,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 40,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      104.6 +
                                                      0 +
                                                      310.8 +
                                                      0 +
                                                      0 +
                                                      8,
                                                    children: s(A, {
                                                      className: `framer-1c74vtp-container`,
                                                      nodeId: `ZMRRjz7pB`,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(I, {
                                                        height: `100%`,
                                                        id: `ZMRRjz7pB`,
                                                        layoutId: `ZMRRjz7pB`,
                                                        style: {
                                                          height: `100%`,
                                                        },
                                                        type: `submit`,
                                                        variant: tn(
                                                          e,
                                                          {
                                                            error: `AfOLQJQZ8`,
                                                            pending: `pigfbG1O9`,
                                                            success: `vjwDGZbwI`,
                                                          },
                                                          K(`VFPWG5s23`),
                                                        ),
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                        }),
                                        s(E, {
                                          children: s(A, {
                                            className: `framer-zqacjt-container`,
                                            isAuthoredByUser: !0,
                                            nodeId: `tNPlALsjn`,
                                            scopeId: `QEHd0IWPx`,
                                            children: s(Ke, {
                                              baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                              borderRadius: 97,
                                              borderWidth: 1,
                                              bottomLeft: 97,
                                              bottomRight: 97,
                                              cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                              glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                              height: `100%`,
                                              id: `tNPlALsjn`,
                                              isMixed: !1,
                                              layoutId: `tNPlALsjn`,
                                              proximity: 490,
                                              smoothing: 0.05,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              topLeft: 97,
                                              topRight: 97,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(Rt, {
                                  __framer__animate: { transition: J },
                                  __framer__animateOnce: !0,
                                  __framer__enter: W,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1elqzeo`,
                                  tickerEffectAlign: `center`,
                                  tickerEffectDirectionModifier: `default`,
                                  tickerEffectDraggable: !1,
                                  tickerEffectEnabled: !0,
                                  tickerEffectGap: `10px`,
                                  tickerEffectHoverModifier: 100,
                                  tickerEffectOverflow: `hidden`,
                                  tickerEffectPosition: `relative`,
                                  tickerEffectStackDirection: `row`,
                                  tickerEffectVelocity: 25,
                                  children: [
                                    s(k, {
                                      children: s(`div`, {
                                        className: `framer-du2hew`,
                                        children: s(rt, {
                                          animated: !1,
                                          className: `framer-p1taep`,
                                          layoutId: `T3M_zgKUs`,
                                          z1don5LZx: !0,
                                        }),
                                      }),
                                    }),
                                    s(k, {
                                      children: s(`div`, {
                                        className: `framer-1ujlm15`,
                                        children: s(qe, {
                                          animated: !1,
                                          className: `framer-1c4yklq`,
                                          layoutId: `XeroA9WGd`,
                                          z1don5LZx: !0,
                                        }),
                                      }),
                                    }),
                                    s(k, {
                                      children: s(`div`, {
                                        className: `framer-1op5ozk`,
                                        children: s(it, {
                                          animated: !1,
                                          className: `framer-1nlhigu`,
                                          layoutId: `chp1E16Ub`,
                                          z1don5LZx: !0,
                                        }),
                                      }),
                                    }),
                                    s(k, {
                                      children: s(`div`, {
                                        className: `framer-9nlc5j`,
                                        children: s(Ze, {
                                          animated: !1,
                                          className: `framer-1if3wb4`,
                                          layoutId: `Golb2DLpL`,
                                          z1don5LZx: !0,
                                        }),
                                      }),
                                    }),
                                    s(k, {
                                      children: s(`div`, {
                                        className: `framer-flzmis`,
                                        children: s($e, {
                                          animated: !1,
                                          className: `framer-h91nhj`,
                                          layoutId: `D0a7wQUvl`,
                                          z1don5LZx: !0,
                                        }),
                                      }),
                                    }),
                                    s(k, {
                                      children: s(`div`, {
                                        className: `framer-10w94ik`,
                                        children: s(Qe, {
                                          animated: !1,
                                          className: `framer-1rwma04`,
                                          layoutId: `VGlmrw6Gp`,
                                          z1don5LZx: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-1mc9kna`,
                              children: o(z, {
                                __framer__adjustPosition: !1,
                                __framer__animate: { transition: G },
                                __framer__animateOnce: !0,
                                __framer__enter: nn,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 80,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-oe5vhr`,
                                "data-border": !0,
                                children: [
                                  o(`div`, {
                                    className: `framer-xgktzk`,
                                    children: [
                                      s(Le, {
                                        animated: !1,
                                        className: `framer-kj30hu`,
                                        layoutId: `b2eT1HrsX`,
                                        z1don5LZx: !0,
                                      }),
                                      s(`div`, {
                                        className: `framer-aosdbi`,
                                        "data-border": !0,
                                        children: s(Ae, {
                                          animated: !1,
                                          className: `framer-i57d6s`,
                                          CRY1Fpez4: !0,
                                          layoutId: `meIcqv50H`,
                                          vet7gqNu_: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  s(`div`, {
                                    className: `framer-13ldscn`,
                                    children: o(`div`, {
                                      className: `framer-16yg31k`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-1m6y8ia`,
                                          children: [
                                            o(`div`, {
                                              className: `framer-ywe9p0`,
                                              children: [
                                                s(B, {
                                                  __fromCanvasComponent: !0,
                                                  animate: rn,
                                                  children: s(t, {
                                                    children: s(`h4`, {
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
                                                  className: `framer-1o05zs7`,
                                                  "data-framer-appear-id": `1o05zs7`,
                                                  fonts: [`Inter`],
                                                  initial: Y,
                                                  optimized: !0,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                s(B, {
                                                  __fromCanvasComponent: !0,
                                                  animate: an,
                                                  children: s(t, {
                                                    children: s(`p`, {
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
                                                  className: `framer-1qx0o2j`,
                                                  "data-framer-appear-id": `1qx0o2j`,
                                                  fonts: [`Inter`],
                                                  initial: Y,
                                                  optimized: !0,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            o(V, {
                                              animate: on,
                                              className: `framer-1ka7y7r`,
                                              "data-border": !0,
                                              "data-framer-appear-id": `1ka7y7r`,
                                              initial: Y,
                                              optimized: !0,
                                              children: [
                                                s(m, {
                                                  __fromCanvasComponent: !0,
                                                  children: s(t, {
                                                    children: s(`p`, {
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
                                                  className: `framer-19py1tx`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                o(`div`, {
                                                  className: `framer-1ckt864`,
                                                  children: [
                                                    o(`div`, {
                                                      className: `framer-b2nyn8`,
                                                      children: [
                                                        s(we, {
                                                          animated: !1,
                                                          className: `framer-bl9jt0`,
                                                          CRY1Fpez4: !0,
                                                          layoutId: `lDelGTKkZ`,
                                                          vet7gqNu_: !0,
                                                        }),
                                                        s(Te, {
                                                          animated: !1,
                                                          className: `framer-1kli47c`,
                                                          CRY1Fpez4: !0,
                                                          layoutId: `ArumUr4_t`,
                                                          vet7gqNu_: !0,
                                                        }),
                                                        s(Re, {
                                                          animated: !1,
                                                          className: `framer-1tnwpgn`,
                                                          CRY1Fpez4: !0,
                                                          layoutId: `YhmK6M2uu`,
                                                          vet7gqNu_: !0,
                                                        }),
                                                      ],
                                                    }),
                                                    o(`div`, {
                                                      className: `framer-1glg4xa`,
                                                      children: [
                                                        s(`div`, {
                                                          className: `framer-1fxm4bt`,
                                                          "data-border": !0,
                                                          children: s(Me, {
                                                            animated: !1,
                                                            className: `framer-nk1kit`,
                                                            CRY1Fpez4: !0,
                                                            layoutId: `VTy2y8Nke`,
                                                            vet7gqNu_: !0,
                                                          }),
                                                        }),
                                                        s(`div`, {
                                                          className: `framer-46c9bs`,
                                                          "data-border": !0,
                                                          children: s(Ie, {
                                                            animated: !1,
                                                            className: `framer-6p6xx7`,
                                                            CRY1Fpez4: !0,
                                                            layoutId: `DZS1WrnLI`,
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
                                        o(`div`, {
                                          className: `framer-1l4md9v`,
                                          children: [
                                            o(`div`, {
                                              className: `framer-111e6qa`,
                                              children: [
                                                o(V, {
                                                  animate: sn,
                                                  className: `framer-561phy`,
                                                  "data-framer-appear-id": `561phy`,
                                                  initial: Y,
                                                  optimized: !0,
                                                  children: [
                                                    s(`div`, {
                                                      className: `framer-rcunpp`,
                                                      "data-border": !0,
                                                      children: s(m, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: s(t, {
                                                          children: s(`p`, {
                                                            className: `framer-styles-preset-1fhxhj6`,
                                                            "data-styles-preset": `O0790qsZT`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                            },
                                                            children: `Research`,
                                                          }),
                                                        }),
                                                        className: `framer-1pitlal`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    s(`div`, {
                                                      className: `framer-11e973q`,
                                                      "data-border": !0,
                                                      children: s(m, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: s(t, {
                                                          children: s(`p`, {
                                                            className: `framer-styles-preset-1fhxhj6`,
                                                            "data-styles-preset": `O0790qsZT`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.6))`,
                                                            },
                                                            children: `Support Ops`,
                                                          }),
                                                        }),
                                                        className: `framer-6v2rvf`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    s(`div`, {
                                                      className: `framer-12xmkd5`,
                                                      "data-border": !0,
                                                      children: s(m, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: s(t, {
                                                          children: s(`p`, {
                                                            className: `framer-styles-preset-1fhxhj6`,
                                                            "data-styles-preset": `O0790qsZT`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.6))`,
                                                            },
                                                            children: `Writing`,
                                                          }),
                                                        }),
                                                        className: `framer-1wr7b7w`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                    s(`div`, {
                                                      className: `framer-1gvz9uc`,
                                                      "data-border": !0,
                                                      children: s(m, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: s(t, {
                                                          children: s(`p`, {
                                                            className: `framer-styles-preset-1fhxhj6`,
                                                            "data-styles-preset": `O0790qsZT`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-color": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.6))`,
                                                            },
                                                            children: `Actions`,
                                                          }),
                                                        }),
                                                        className: `framer-5xjeyh`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                s(De, {
                                                  animated: !1,
                                                  className: `framer-1k1i0ye`,
                                                  CRY1Fpez4: !0,
                                                  layoutId: `ebbiXiou1`,
                                                  vet7gqNu_: !0,
                                                }),
                                              ],
                                            }),
                                            o(`div`, {
                                              className: `framer-182vlce`,
                                              children: [
                                                s(V, {
                                                  animate: cn,
                                                  className: `framer-x35pme`,
                                                  "data-framer-appear-id": `x35pme`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        17,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        17,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      17,
                                                    children: s(H, {
                                                      animate: ln,
                                                      className: `framer-1l541h1-container`,
                                                      "data-framer-appear-id": `1l541h1`,
                                                      initial: Y,
                                                      nodeId: `TxhtsweYp`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `TxhtsweYp`,
                                                        layoutId: `TxhtsweYp`,
                                                        logK7JHUX: `Summarize our product in simple terms for new users`,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                s(V, {
                                                  animate: un,
                                                  className: `framer-578s24`,
                                                  "data-framer-appear-id": `578s24`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        71,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        71,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      71,
                                                    children: s(H, {
                                                      animate: dn,
                                                      className: `framer-ce0jfn-container`,
                                                      "data-framer-appear-id": `ce0jfn`,
                                                      initial: Y,
                                                      nodeId: `V4r7QCLKf`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `V4r7QCLKf`,
                                                        layoutId: `V4r7QCLKf`,
                                                        logK7JHUX: `Draft a friendly support reply using our help docs`,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                s(V, {
                                                  animate: fn,
                                                  className: `framer-7uldt8`,
                                                  "data-framer-appear-id": `7uldt8`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        125,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        125,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      125,
                                                    children: s(H, {
                                                      animate: pn,
                                                      className: `framer-10226td-container`,
                                                      "data-framer-appear-id": `10226td`,
                                                      initial: Y,
                                                      nodeId: `KmqwTXMpl`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `KmqwTXMpl`,
                                                        layoutId: `KmqwTXMpl`,
                                                        logK7JHUX: `Write a concise follow-up email after a sales call`,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                s(V, {
                                                  animate: mn,
                                                  className: `framer-108skl6`,
                                                  "data-framer-appear-id": `108skl6`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        179,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        179,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      179,
                                                    children: s(H, {
                                                      animate: hn,
                                                      className: `framer-1y0chby-container`,
                                                      "data-framer-appear-id": `1y0chby`,
                                                      initial: Y,
                                                      nodeId: `gICImSs9Y`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `gICImSs9Y`,
                                                        layoutId: `gICImSs9Y`,
                                                        logK7JHUX: `Extract action items and owners from this meeting note`,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                s(V, {
                                                  animate: gn,
                                                  className: `framer-1n5yfgx`,
                                                  "data-framer-appear-id": `1n5yfgx`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        233,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        233,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      233,
                                                    children: s(H, {
                                                      animate: _n,
                                                      className: `framer-5nwudw-container`,
                                                      "data-framer-appear-id": `5nwudw`,
                                                      initial: Y,
                                                      nodeId: `mlQF1mTmB`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `mlQF1mTmB`,
                                                        layoutId: `mlQF1mTmB`,
                                                        logK7JHUX: `Find the exact policy that answers this customer question`,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                s(V, {
                                                  animate: X,
                                                  className: `framer-1qodgv8`,
                                                  "data-framer-appear-id": `1qodgv8`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        287,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        287,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      287,
                                                    children: s(H, {
                                                      animate: vn,
                                                      className: `framer-1d4ip3v-container`,
                                                      "data-framer-appear-id": `1d4ip3v`,
                                                      initial: Y,
                                                      nodeId: `y33IuAAtX`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `y33IuAAtX`,
                                                        layoutId: `y33IuAAtX`,
                                                        logK7JHUX: `Compare these two plans and recommend the best fit`,
                                                        style: {
                                                          width: `100%`,
                                                        },
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                                s(V, {
                                                  animate: yn,
                                                  className: `framer-of9quf`,
                                                  "data-framer-appear-id": `of9quf`,
                                                  initial: Y,
                                                  optimized: !0,
                                                }),
                                                s(S, {
                                                  breakpoint: w,
                                                  overrides: {
                                                    enp8uMTYS: {
                                                      width: `min(max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px, 1px), (min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 72px) * 0.66)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -41.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        36 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        341,
                                                    },
                                                    MESoOI3DZ: {
                                                      width: `max(min(min(min(${g?.width || `100vw`}, 1600px) - 48px, 720px), 960px) - 48px, 1px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        -1.4 +
                                                        180 +
                                                        0 +
                                                        0 +
                                                        570.8 +
                                                        0 +
                                                        24 +
                                                        72 +
                                                        0 +
                                                        0 +
                                                        371.8 +
                                                        0 +
                                                        53 +
                                                        0 +
                                                        341,
                                                    },
                                                  },
                                                  children: s(E, {
                                                    height: 21,
                                                    width: `582.78px`,
                                                    y:
                                                      (g?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      180 +
                                                      0 +
                                                      0 +
                                                      8 +
                                                      36 +
                                                      72 +
                                                      0 +
                                                      0 +
                                                      371.8 +
                                                      0 +
                                                      53 +
                                                      0 +
                                                      341,
                                                    children: s(H, {
                                                      animate: bn,
                                                      className: `framer-1d4t1ry-container`,
                                                      "data-framer-appear-id": `1d4t1ry`,
                                                      initial: Y,
                                                      nodeId: `goE4XNFcq`,
                                                      optimized: !0,
                                                      rendersWithMotion: !0,
                                                      scopeId: `QEHd0IWPx`,
                                                      children: s(P, {
                                                        height: `100%`,
                                                        id: `goE4XNFcq`,
                                                        layoutId: `goE4XNFcq`,
                                                        logK7JHUX: `Turn this bug report into a clear engineering ticket`,
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
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      s(S, {
                        breakpoint: w,
                        overrides: {
                          enp8uMTYS: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 244,
                              intrinsicWidth: 1232,
                              loading: h((g?.y || 0) + 0 + 0 + 1360 - 384),
                              pixelHeight: 488,
                              pixelWidth: 2464,
                              sizes: `min(${g?.width || `100vw`}, 1600px)`,
                              src: `./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?width=2464&height=488`,
                              srcSet: `./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=512&width=2464&height=488 512w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=1024&width=2464&height=488 1024w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=2048&width=2464&height=488 2048w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?width=2464&height=488 2464w`,
                            },
                          },
                          MESoOI3DZ: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 244,
                              intrinsicWidth: 1232,
                              loading: h((g?.y || 0) + 0 + 0 + 1360 - 384),
                              pixelHeight: 488,
                              pixelWidth: 2464,
                              sizes: `min(${g?.width || `100vw`}, 1600px)`,
                              src: `./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?width=2464&height=488`,
                              srcSet: `./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=512&width=2464&height=488 512w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=1024&width=2464&height=488 1024w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=2048&width=2464&height=488 2048w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?width=2464&height=488 2464w`,
                            },
                          },
                        },
                        children: s(L, {
                          __framer__animate: { transition: G },
                          __framer__animateOnce: !0,
                          __framer__enter: xn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 244,
                            intrinsicWidth: 1232,
                            loading: h((g?.y || 0) + 0 + 0 + 1076 - 384),
                            pixelHeight: 488,
                            pixelWidth: 2464,
                            sizes: `min(${g?.width || `100vw`}, 1600px)`,
                            src: `./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?width=2464&height=488`,
                            srcSet: `./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=512&width=2464&height=488 512w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=1024&width=2464&height=488 1024w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?scale-down-to=2048&width=2464&height=488 2048w,./framer/images/rNwNiQxFN2tkAEI5eUdmAxB9v4.png?width=2464&height=488 2464w`,
                          },
                          className: `framer-cremd3`,
                          "data-framer-name": `foreground`,
                        }),
                      }),
                    ],
                  }),
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-MwXVq.framer-hpnkvs, .framer-MwXVq .framer-hpnkvs { display: block; }`,
        `.framer-MwXVq.framer-ma9cro { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-MwXVq .framer-1vl2109 { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-height: 1360px; max-width: 1600px; min-height: 100vh; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-11zywq6 { aspect-ratio: 2.115702479338843 / 1; bottom: -67px; flex: none; gap: 0px; height: auto; left: 0px; opacity: 0.25; overflow: visible; position: absolute; right: 0px; z-index: 0; }`,
        `.framer-MwXVq .framer-145aeqh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; max-width: 1080px; overflow: visible; padding: 180px 0px 180px 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-1e029ai { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 138px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-1v3n0ou { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-MwXVq .framer-seeix7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-s31k9f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-k50y0d-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-MwXVq .framer-15dxoyp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-wkgqqs, .framer-MwXVq .framer-pih7rf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 480px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-1u49eal { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 56px; justify-content: center; max-width: 360px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-abynrr { align-content: center; align-items: center; border-bottom-left-radius: 337px; border-bottom-right-radius: 337px; border-top-left-radius: 337px; border-top-right-radius: 337px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-MwXVq .framer-1df0ap6 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-MwXVq .framer-p77m7z { --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-font-color: var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, #fff3f0); --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 0px 0px 0px 16px; --framer-input-placeholder-color: var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25)); flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-1c74vtp-container { flex: none; height: 40px; position: relative; width: auto; }`,
        `.framer-MwXVq .framer-zqacjt-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-MwXVq .framer-1elqzeo { -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20.11787819253438%, rgb(0, 0, 0) 80.28523612020665%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 20.11787819253438%, rgb(0, 0, 0) 80.28523612020665%, rgba(0, 0, 0, 0) 100%) add; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-du2hew { border-bottom-left-radius: 16px; border-bottom-right-radius: 8px; border-top-left-radius: 16px; border-top-right-radius: 8px; flex: none; height: 60px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 90px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-p1taep, .framer-MwXVq .framer-h91nhj { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 28px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: auto; }`,
        `.framer-MwXVq .framer-1ujlm15, .framer-MwXVq .framer-1op5ozk, .framer-MwXVq .framer-9nlc5j, .framer-MwXVq .framer-flzmis { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: 60px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 90px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-1c4yklq { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 22px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: auto; }`,
        `.framer-MwXVq .framer-1nlhigu { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 34px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: auto; }`,
        `.framer-MwXVq .framer-1if3wb4 { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 29px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: auto; }`,
        `.framer-MwXVq .framer-10w94ik { border-bottom-left-radius: 8px; border-bottom-right-radius: 16px; border-top-left-radius: 8px; border-top-right-radius: 16px; flex: none; height: 60px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 90px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-1rwma04 { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 32px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: auto; }`,
        `.framer-MwXVq .framer-1mc9kna { border-top-left-radius: 4px; flex: 2 0 0px; height: 716px; overflow: visible; position: relative; width: 1px; }`,
        `.framer-MwXVq .framer-oe5vhr { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(8px); align-content: center; align-items: center; backdrop-filter: blur(8px); background-color: var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(33, 33, 33, 0.85)); border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; bottom: -234px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; justify-content: flex-start; left: 0px; max-width: 960px; overflow: var(--overflow-clip-fallback, clip); padding: 36px 36px 0px 36px; position: absolute; top: 8px; width: 955px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-xgktzk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 48px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-kj30hu { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); flex: none; height: 32px; position: relative; width: auto; }`,
        `.framer-MwXVq .framer-aosdbi { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; aspect-ratio: 1 / 1; background-color: var(--token-3fab9d78-ec3a-44ec-ad62-b2eca6daf4a5, rgba(23, 23, 23, 0.5)); border-bottom-left-radius: 131px; border-bottom-right-radius: 131px; border-top-left-radius: 131px; border-top-right-radius: 131px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-i57d6s, .framer-MwXVq .framer-1k1i0ye { --1ww558a: 1; --4rxgx6: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-MwXVq .framer-13ldscn { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-16yg31k { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 65px; height: 100%; justify-content: flex-start; max-width: 66%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-MwXVq .framer-1m6y8ia { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-ywe9p0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-1o05zs7, .framer-MwXVq .framer-1qx0o2j { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 420px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MwXVq .framer-1ka7y7r { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 120px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MwXVq .framer-19py1tx { --framer-text-wrap-override: balance; flex: 1 0 0px; height: 1px; opacity: 0.5; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-1ckt864 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 24px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-b2nyn8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-MwXVq .framer-bl9jt0, .framer-MwXVq .framer-1kli47c, .framer-MwXVq .framer-1tnwpgn { --1ww558a: 2; --4rxgx6: var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(213, 224, 232, 0.25)); aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 14px; }`,
        `.framer-MwXVq .framer-1glg4xa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-MwXVq .framer-1fxm4bt { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1 / 1; background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); border-bottom-left-radius: 608px; border-bottom-right-radius: 608px; border-top-left-radius: 608px; border-top-right-radius: 608px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-nk1kit { --1ww558a: 2; --4rxgx6: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 14px; }`,
        `.framer-MwXVq .framer-46c9bs { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; aspect-ratio: 1 / 1; background-color: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, #aba4a1); border-bottom-left-radius: 608px; border-bottom-right-radius: 608px; border-top-left-radius: 608px; border-top-right-radius: 608px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-6p6xx7 { --1ww558a: 2; --4rxgx6: var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(31, 27, 24, 0.75)); aspect-ratio: 1 / 1; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 14px; }`,
        `.framer-MwXVq .framer-1l4md9v { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-111e6qa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-561phy { -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 20%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MwXVq .framer-rcunpp { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 12px 4px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-1pitlal, .framer-MwXVq .framer-6v2rvf, .framer-MwXVq .framer-1wr7b7w, .framer-MwXVq .framer-5xjeyh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-MwXVq .framer-11e973q, .framer-MwXVq .framer-12xmkd5, .framer-MwXVq .framer-1gvz9uc { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 12px 4px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwXVq .framer-182vlce { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 19%, rgba(0,0,0,1) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 1px; justify-content: flex-start; mask: linear-gradient(0deg, rgba(0,0,0,0) 19%, rgba(0,0,0,1) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-MwXVq .framer-x35pme, .framer-MwXVq .framer-578s24, .framer-MwXVq .framer-7uldt8, .framer-MwXVq .framer-108skl6, .framer-MwXVq .framer-1n5yfgx, .framer-MwXVq .framer-1qodgv8, .framer-MwXVq .framer-of9quf { background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MwXVq .framer-1l541h1-container, .framer-MwXVq .framer-ce0jfn-container, .framer-MwXVq .framer-10226td-container, .framer-MwXVq .framer-1y0chby-container, .framer-MwXVq .framer-5nwudw-container, .framer-MwXVq .framer-1d4ip3v-container, .framer-MwXVq .framer-1d4t1ry-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MwXVq .framer-cremd3 { aspect-ratio: 5.049180327868853 / 1; bottom: -2px; flex: none; height: auto; left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 0; }`,
        ...ot,
        ...be,
        ...He,
        ..._e,
        `.framer-MwXVq[data-border="true"]::after, .framer-MwXVq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 1024px) and (max-width: 1279.98px) { .framer-MwXVq.framer-ma9cro { width: 1024px; } .framer-MwXVq .framer-1vl2109 { min-height: unset; } .framer-MwXVq .framer-145aeqh { max-width: 720px; padding: 180px 0px 80px 0px; } .framer-MwXVq .framer-1e029ai { flex-direction: column; gap: 80px; } .framer-MwXVq .framer-1v3n0ou { align-self: unset; flex: none; gap: 64px; height: min-content; width: 100%; } .framer-MwXVq .framer-seeix7 { align-content: center; align-items: center; } .framer-MwXVq .framer-1mc9kna { flex: none; height: 612px; width: 100%; } .framer-MwXVq .framer-oe5vhr { bottom: 0px; right: 0px; top: 0px; width: unset; } .framer-MwXVq .framer-16yg31k { height: min-content; } .framer-MwXVq .framer-1l4md9v { flex: none; height: min-content; } .framer-MwXVq .framer-182vlce { flex: none; height: 169px; }}`,
        `@media (max-width: 1023.98px) { .framer-MwXVq.framer-ma9cro { width: 390px; } .framer-MwXVq .framer-1vl2109 { min-height: unset; } .framer-MwXVq .framer-11zywq6 { bottom: 0px; } .framer-MwXVq .framer-145aeqh { max-width: 720px; padding: 180px 0px 0px 0px; } .framer-MwXVq .framer-1e029ai { flex-direction: column; gap: 80px; } .framer-MwXVq .framer-1v3n0ou { align-self: unset; flex: none; gap: 64px; height: min-content; width: 100%; } .framer-MwXVq .framer-seeix7 { align-content: center; align-items: center; } .framer-MwXVq .framer-1mc9kna { flex: none; height: 612px; width: 100%; } .framer-MwXVq .framer-oe5vhr { bottom: 0px; padding: 24px 24px 0px 24px; right: 0px; top: 0px; width: unset; } .framer-MwXVq .framer-16yg31k { height: min-content; max-width: unset; } .framer-MwXVq .framer-1l4md9v { flex: none; height: min-content; } .framer-MwXVq .framer-182vlce { flex: none; height: 169px; }}`,
      ],
      `framer-MwXVq`,
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1514, width: 1280 }),
    p(
      Q,
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
              url: `./framer/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `./framer/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `./framer/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `./framer/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `./framer/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `./framer/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `./framer/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `./framer/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `./framer/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `./framer/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `./framer/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `./framer/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `./framer/assets/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `./framer/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Ot,
        ...At,
        ...jt,
        ...Mt,
        ...Nt,
        ...Pt,
        ...Ft,
        ...It,
        ...Lt,
        ...zt,
        ...Bt,
        ...Vt,
        ...Ht,
        ...Ut,
        ...Wt,
        ...Gt,
        ...Kt,
        ...qt,
        ...C(at),
        ...C(ge),
        ...C(Ue),
        ...C(M),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (Q.loader = {
      load: (e, t) =>
        ue([() => _(F, {}, t), () => _(I, {}, t), () => _(P, {}, t)], t),
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerQEHd0IWPx`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"enp8uMTYS":{"layout":["fixed","auto"]},"MESoOI3DZ":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"yo60OTfsP":{"pattern":":yo60OTfsP","name":"scroll"}}`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1280`,
            framerIntrinsicHeight: `1514`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Yt as queryParamNames };
//# sourceMappingURL=2qj3_qMQWkCj8t0Zfdu9PQ2JD-d9T-S5xbkYT0mam34.4373iTjk.mjs.map
