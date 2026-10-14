import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  j as i,
  l as a,
  o,
  p as s,
  s as c,
  w as ee,
  x as l,
} from "./react.CbTQkvGa.mjs";
import { M as u, i as te, o as d, t as f } from "./motion.DqePFWeo.mjs";
import {
  A as p,
  At as ne,
  D as m,
  H as h,
  I as g,
  Nt as _,
  O as v,
  Ot as y,
  P as b,
  Rt as x,
  S,
  Tt as C,
  W as w,
  X as T,
  _t as re,
  a as E,
  bt as ie,
  d as ae,
  ft as oe,
  gt as se,
  ht as D,
  j as O,
  jt as k,
  k as A,
  o as j,
  s as M,
  xt as ce,
} from "./framer.CFgihyWK.mjs";
import {
  a as le,
  d as ue,
  f as de,
  i as N,
  o as fe,
  r as pe,
} from "./shared-lib.t8-xaOwk.mjs";
import { i as me, n as P, r as he, t as ge } from "./nZtZfLTSW.DMk9jra7.mjs";
import { i as _e, n as F, r as I, t as L } from "./LOmU9jDw7.mUhw3LRT.mjs";
import { n as ve, t as R } from "./Border_Glow_Card.hHoZa0OP.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./Q_3jdt9X6.DkyYpPLX.mjs";
import {
  a as Ce,
  i as we,
  n as Te,
  o as Ee,
  r as De,
  t as Oe,
} from "./vwqpZoZVi.D0PpBGTp.mjs";
import {
  a as ke,
  i as Ae,
  n as je,
  o as Me,
  r as Ne,
  t as Pe,
} from "./w7zabuB3D.CehoLNDd.mjs";
import {
  a as Fe,
  i as Ie,
  n as Le,
  o as Re,
  r as ze,
  t as z,
} from "./m54zGBZ4w.CObtf37r.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./gSwoAzhaJ.C2ngI3i2.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./uLTHU2gC4.BdjxAb2y.mjs";
import Je, {
  t as Ye,
} from "./ip6dAK9gaNpKokTJReFxu1GSB6AFWHMV5UJX5q2FyQA.CzLHdS-3.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe,
  Ze,
  Qe,
  $e,
  et,
  V,
  tt,
  nt,
  rt,
  it,
  at,
  H,
  ot = e(() => {
    (c(),
      T(),
      f(),
      r(),
      Be(),
      ye(),
      We(),
      _e(),
      (Xe = h(I)),
      (Ze = [`Zoo6jDGPM`, `WlHZDDDw4`]),
      (Qe = `framer-8uGnK`),
      ($e = { WlHZDDDw4: `framer-v-1jztelv`, Zoo6jDGPM: `framer-v-yzm9z9` }),
      (et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (V = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (tt = ({ value: e, children: t }) => {
        let r = i(d),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(d.Provider, { value: s, children: t });
      }),
      (nt = { "Variant 1": `Zoo6jDGPM`, Mobile: `WlHZDDDw4` }),
      (rt = u.create(t)),
      (it = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: nt[r.variant] ?? r.variant ?? `Zoo6jDGPM`,
      })),
      (at = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (H = k(
        s(function (e, n) {
          let r = l(null),
            i = n ?? r,
            s = ee(),
            { activeLocale: c, setLocale: d } = ie(),
            f = oe(),
            { style: p, className: h, layoutId: g, variant: _, ...y } = it(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: re,
              setGestureState: ae,
              setVariant: se,
              variants: D,
            } = ne({
              cycleOrder: Ze,
              defaultVariant: `Zoo6jDGPM`,
              ref: i,
              variant: _,
              variantClassNames: $e,
            }),
            O = at(e, D),
            k = b(Qe, Ue, Se, qe),
            A = () => x !== `WlHZDDDw4`,
            j = () => x === `WlHZDDDw4`;
          return o(te, {
            id: g ?? s,
            children: o(rt, {
              animate: D,
              initial: !1,
              children: o(tt, {
                value: et,
                children: o(u.div, {
                  ...y,
                  ...w,
                  className: b(k, `framer-yzm9z9`, h, S),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: O,
                  layoutId: `Zoo6jDGPM`,
                  ref: i,
                  style: { ...p },
                  ...B({ WlHZDDDw4: { "data-framer-name": `Mobile` } }, x, T),
                  children: o(u.div, {
                    className: `framer-13mgcjd`,
                    layoutDependency: O,
                    layoutId: `xbiZGkIUt`,
                    children: a(u.div, {
                      className: `framer-f2z7k6`,
                      layoutDependency: O,
                      layoutId: `Z1Ki1CSzW`,
                      children: [
                        A() &&
                          a(u.div, {
                            className: `framer-tbdea7`,
                            layoutDependency: O,
                            layoutId: `ud6rfcZO1`,
                            children: [
                              o(u.div, {
                                className: `framer-13b83ar`,
                                "data-border": !0,
                                layoutDependency: O,
                                layoutId: `sXwdJf2jL`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                  "--border-left-width": `0px`,
                                  "--border-right-width": `0px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `0px`,
                                  backgroundColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                },
                                children: o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(u.h5, {
                                      className: `framer-styles-preset-qfhoqo`,
                                      "data-styles-preset": `gSwoAzhaJ`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                      },
                                      children: `Features`,
                                    }),
                                  }),
                                  className: `framer-i8y1i0`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `GsvyumAPM`,
                                  style: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(u.div, {
                                className: `framer-ja9egb`,
                                layoutDependency: O,
                                layoutId: `tK7lVzsvL`,
                                children: [
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      0,
                                    children: o(v, {
                                      className: `framer-qfbpsf-container`,
                                      layoutDependency: O,
                                      layoutId: `sQ_G0i3sZ-container`,
                                      nodeId: `sQ_G0i3sZ`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `sQ_G0i3sZ`,
                                        IsnRU0dVs: `Team members`,
                                        layoutId: `sQ_G0i3sZ`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      61,
                                    children: o(v, {
                                      className: `framer-1i7oc0n-container`,
                                      layoutDependency: O,
                                      layoutId: `hkbFQNQKv-container`,
                                      nodeId: `hkbFQNQKv`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `hkbFQNQKv`,
                                        IsnRU0dVs: `AI queries / mo`,
                                        layoutId: `hkbFQNQKv`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      122,
                                    children: o(v, {
                                      className: `framer-6nw2h9-container`,
                                      layoutDependency: O,
                                      layoutId: `yXDXsshut-container`,
                                      nodeId: `yXDXsshut`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `yXDXsshut`,
                                        IsnRU0dVs: `Connected integrations`,
                                        layoutId: `yXDXsshut`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      183,
                                    children: o(v, {
                                      className: `framer-3ja9t4-container`,
                                      layoutDependency: O,
                                      layoutId: `R_Fa7LzTL-container`,
                                      nodeId: `R_Fa7LzTL`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `R_Fa7LzTL`,
                                        IsnRU0dVs: `Conversation history`,
                                        layoutId: `R_Fa7LzTL`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      244,
                                    children: o(v, {
                                      className: `framer-1dq8tnl-container`,
                                      layoutDependency: O,
                                      layoutId: `TC7TLZA2y-container`,
                                      nodeId: `TC7TLZA2y`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `TC7TLZA2y`,
                                        IsnRU0dVs: `Source attribution`,
                                        layoutId: `TC7TLZA2y`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      305,
                                    children: o(v, {
                                      className: `framer-q5462g-container`,
                                      layoutDependency: O,
                                      layoutId: `GsjIum5M_-container`,
                                      nodeId: `GsjIum5M_`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `GsjIum5M_`,
                                        IsnRU0dVs: `Action execution`,
                                        layoutId: `GsjIum5M_`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      366,
                                    children: o(v, {
                                      className: `framer-1wvkwd7-container`,
                                      layoutDependency: O,
                                      layoutId: `Rrjs6AK1P-container`,
                                      nodeId: `Rrjs6AK1P`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `Rrjs6AK1P`,
                                        IsnRU0dVs: `Custom AI instructions`,
                                        layoutId: `Rrjs6AK1P`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      185.6 +
                                      0 +
                                      427,
                                    children: o(v, {
                                      className: `framer-lxmefq-container`,
                                      layoutDependency: O,
                                      layoutId: `Cwhtg_K2C-container`,
                                      nodeId: `Cwhtg_K2C`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `Cwhtg_K2C`,
                                        IsnRU0dVs: `Multi-step workflows`,
                                        layoutId: `Cwhtg_K2C`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 0,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              o(u.div, {
                                className: `framer-j2icjc`,
                                layoutDependency: O,
                                layoutId: `RqJep0M54`,
                                children: o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(u.h6, {
                                      className: `framer-styles-preset-b70r5p`,
                                      "data-styles-preset": `Q_3jdt9X6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                      },
                                      children: `Security & Compliance`,
                                    }),
                                  }),
                                  className: `framer-jzvzii`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `ngTkxDJd3`,
                                  style: {
                                    "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(u.div, {
                                className: `framer-1vyncp7`,
                                layoutDependency: O,
                                layoutId: `wMJOl3H6K`,
                                children: [
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      802.6 +
                                      0 +
                                      0,
                                    children: o(v, {
                                      className: `framer-1v3xqzi-container`,
                                      layoutDependency: O,
                                      layoutId: `KCMuMaA4L-container`,
                                      nodeId: `KCMuMaA4L`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `KCMuMaA4L`,
                                        IsnRU0dVs: `SSO`,
                                        layoutId: `KCMuMaA4L`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      802.6 +
                                      0 +
                                      61,
                                    children: o(v, {
                                      className: `framer-121ra8n-container`,
                                      layoutDependency: O,
                                      layoutId: `COvPob3PW-container`,
                                      nodeId: `COvPob3PW`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `COvPob3PW`,
                                        IsnRU0dVs: `SAML & SCIM`,
                                        layoutId: `COvPob3PW`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      802.6 +
                                      0 +
                                      122,
                                    children: o(v, {
                                      className: `framer-lho52a-container`,
                                      layoutDependency: O,
                                      layoutId: `ViWxcZNar-container`,
                                      nodeId: `ViWxcZNar`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `ViWxcZNar`,
                                        IsnRU0dVs: `Audit Logs`,
                                        layoutId: `ViWxcZNar`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 0,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              o(u.div, {
                                className: `framer-wi0li3`,
                                layoutDependency: O,
                                layoutId: `OEDKG6Q5f`,
                                children: o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(u.h6, {
                                      className: `framer-styles-preset-b70r5p`,
                                      "data-styles-preset": `Q_3jdt9X6`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                      },
                                      children: `Support`,
                                    }),
                                  }),
                                  className: `framer-1ww45e7`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `Nh3HzOvY_`,
                                  style: {
                                    "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(u.div, {
                                className: `framer-1cbz9gy`,
                                layoutDependency: O,
                                layoutId: `gDJxhqu5p`,
                                children: [
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      1114.6 +
                                      0 +
                                      0,
                                    children: o(v, {
                                      className: `framer-je8uvr-container`,
                                      layoutDependency: O,
                                      layoutId: `HnIsoZOlt-container`,
                                      nodeId: `HnIsoZOlt`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `HnIsoZOlt`,
                                        IsnRU0dVs: `Community support`,
                                        layoutId: `HnIsoZOlt`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      1114.6 +
                                      0 +
                                      61,
                                    children: o(v, {
                                      className: `framer-xti1ny-container`,
                                      layoutDependency: O,
                                      layoutId: `x6ShT75Vs-container`,
                                      nodeId: `x6ShT75Vs`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `x6ShT75Vs`,
                                        IsnRU0dVs: `Priority support`,
                                        layoutId: `x6ShT75Vs`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 1,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                  o(E, {
                                    height: 61,
                                    width: `min(max(${f?.width || `100vw`} * 0.4, 1px), 378px)`,
                                    y:
                                      (f?.y || 0) +
                                      0 +
                                      (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                        0 +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      1114.6 +
                                      0 +
                                      122,
                                    children: o(v, {
                                      className: `framer-39ihx-container`,
                                      layoutDependency: O,
                                      layoutId: `oYP5svcUX-container`,
                                      nodeId: `oYP5svcUX`,
                                      rendersWithMotion: !0,
                                      scopeId: `phL8NQOnv`,
                                      children: o(I, {
                                        DXtiLHcoU: ``,
                                        height: `100%`,
                                        id: `oYP5svcUX`,
                                        IsnRU0dVs: `Dedicated account manager`,
                                        layoutId: `oYP5svcUX`,
                                        QTM4ITCYc: !0,
                                        style: { width: `100%` },
                                        UpWqDq7T6: {
                                          borderBottomWidth: 0,
                                          borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          borderLeftWidth: 0,
                                          borderRightWidth: 0,
                                          borderStyle: `solid`,
                                          borderTopWidth: 0,
                                        },
                                        variant: V(`F4gDFkigA`),
                                        width: `100%`,
                                        yEK4cBzgR: `20px 0px 20px 0px`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        a(u.div, {
                          className: `framer-42mu3b`,
                          layoutDependency: O,
                          layoutId: `yilD8kFzh`,
                          children: [
                            a(u.div, {
                              className: `framer-h7vv5d`,
                              "data-border": !0,
                              layoutDependency: O,
                              layoutId: `GMQ4iO6fg`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                              },
                              variants: {
                                WlHZDDDw4: {
                                  "--border-bottom-width": `0px`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                              },
                              children: [
                                o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(u.h5, {
                                      className: `framer-styles-preset-qfhoqo`,
                                      "data-styles-preset": `gSwoAzhaJ`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                      },
                                      children: `Starter`,
                                    }),
                                  }),
                                  className: `framer-1adv30p`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `UDs5Bz42P`,
                                  style: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  variants: {
                                    WlHZDDDw4: {
                                      "--extracted-a0htzi": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        children: o(t, {
                                          children: o(u.h3, {
                                            className: `framer-styles-preset-u3ga62`,
                                            "data-styles-preset": `uLTHU2gC4`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                            },
                                            children: `Starter`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                }),
                                j() &&
                                  o(m, {
                                    __fromCanvasComponent: !0,
                                    children: o(t, {
                                      children: o(u.h5, {
                                        className: `framer-styles-preset-qfhoqo`,
                                        "data-styles-preset": `gSwoAzhaJ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                        },
                                        children: `Features`,
                                      }),
                                    }),
                                    className: `framer-1iwssqz`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `x53F7jhOA`,
                                    style: {
                                      "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-a3kkdd`,
                              layoutDependency: O,
                              layoutId: `L1MfAvTnX`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-ej1ugk-container`,
                                    layoutDependency: O,
                                    layoutId: `esxfBTkKl-container`,
                                    nodeId: `esxfBTkKl`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Up to 2`,
                                      height: `100%`,
                                      id: `esxfBTkKl`,
                                      IsnRU0dVs: `Team members`,
                                      layoutId: `esxfBTkKl`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-10ia16g-container`,
                                    layoutDependency: O,
                                    layoutId: `ExTjsolnU-container`,
                                    nodeId: `ExTjsolnU`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `200`,
                                      height: `100%`,
                                      id: `ExTjsolnU`,
                                      IsnRU0dVs: `AI queries / mo`,
                                      layoutId: `ExTjsolnU`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-sqo5gr-container`,
                                    layoutDependency: O,
                                    layoutId: `ZYxUo0EYr-container`,
                                    nodeId: `ZYxUo0EYr`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `2`,
                                      height: `100%`,
                                      id: `ZYxUo0EYr`,
                                      IsnRU0dVs: `Connected integrations`,
                                      layoutId: `ZYxUo0EYr`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    183,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          183,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1o1izpo-container`,
                                    layoutDependency: O,
                                    layoutId: `axH5GGz4U-container`,
                                    nodeId: `axH5GGz4U`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `30 days`,
                                      height: `100%`,
                                      id: `axH5GGz4U`,
                                      IsnRU0dVs: `Conversation history`,
                                      layoutId: `axH5GGz4U`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    244,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          244,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-7levn-container`,
                                    layoutDependency: O,
                                    layoutId: `PPWSgwnan-container`,
                                    nodeId: `PPWSgwnan`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `PPWSgwnan`,
                                      IsnRU0dVs: `Source attribution`,
                                      layoutId: `PPWSgwnan`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    305,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          305,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-lf51oo-container`,
                                    layoutDependency: O,
                                    layoutId: `BUj6OmKzF-container`,
                                    nodeId: `BUj6OmKzF`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `BUj6OmKzF`,
                                      IsnRU0dVs: `Action execution`,
                                      layoutId: `BUj6OmKzF`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    366,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          366,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1gv8t01-container`,
                                    layoutDependency: O,
                                    layoutId: `ibCWo34hV-container`,
                                    nodeId: `ibCWo34hV`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `ibCWo34hV`,
                                      IsnRU0dVs: `Custom AI instructions`,
                                      layoutId: `ibCWo34hV`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    427,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          150.2 +
                                          0 +
                                          427,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-75yy4h-container`,
                                    layoutDependency: O,
                                    layoutId: `Mwx1pJKHQ-container`,
                                    nodeId: `Mwx1pJKHQ`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `Mwx1pJKHQ`,
                                      IsnRU0dVs: `Multi-step workflows`,
                                      layoutId: `Mwx1pJKHQ`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(u.div, {
                              className: `framer-1evubsq`,
                              layoutDependency: O,
                              layoutId: `H5LC4anqI`,
                              style: { opacity: 0 },
                              variants: { WlHZDDDw4: { opacity: 1 } },
                              children: o(m, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(u.h6, {
                                    className: `framer-styles-preset-b70r5p`,
                                    "data-styles-preset": `Q_3jdt9X6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `Features`,
                                  }),
                                }),
                                className: `framer-varxf7`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `CUw74otkz`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  WlHZDDDw4: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    WlHZDDDw4: {
                                      children: o(t, {
                                        children: o(u.h5, {
                                          className: `framer-styles-preset-qfhoqo`,
                                          "data-styles-preset": `gSwoAzhaJ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                          },
                                          children: `Security & Compliance`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T,
                                ),
                              }),
                            }),
                            a(u.div, {
                              className: `framer-9leapc`,
                              layoutDependency: O,
                              layoutId: `gur1ePmmD`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          719.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-43t8oa-container`,
                                    layoutDependency: O,
                                    layoutId: `oxlsswOYW-container`,
                                    nodeId: `oxlsswOYW`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `oxlsswOYW`,
                                      IsnRU0dVs: `SSO`,
                                      layoutId: `oxlsswOYW`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          719.8 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-9db75d-container`,
                                    layoutDependency: O,
                                    layoutId: `VRUUlpnce-container`,
                                    nodeId: `VRUUlpnce`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `VRUUlpnce`,
                                      IsnRU0dVs: `SAML & SCIM`,
                                      layoutId: `VRUUlpnce`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          719.8 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1ogsljg-container`,
                                    layoutDependency: O,
                                    layoutId: `Rvhct1DMN-container`,
                                    nodeId: `Rvhct1DMN`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `Rvhct1DMN`,
                                      IsnRU0dVs: `Audit Logs`,
                                      layoutId: `Rvhct1DMN`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(u.div, {
                              className: `framer-p8jcau`,
                              layoutDependency: O,
                              layoutId: `G8BhRSGqG`,
                              style: { opacity: 0 },
                              variants: { WlHZDDDw4: { opacity: 1 } },
                              children: o(m, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(u.h6, {
                                    className: `framer-styles-preset-b70r5p`,
                                    "data-styles-preset": `Q_3jdt9X6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `Features`,
                                  }),
                                }),
                                className: `framer-jmik2i`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `ULhtEtZ0Q`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  WlHZDDDw4: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    WlHZDDDw4: {
                                      children: o(t, {
                                        children: o(u.h5, {
                                          className: `framer-styles-preset-qfhoqo`,
                                          "data-styles-preset": `gSwoAzhaJ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                          },
                                          children: `Support`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T,
                                ),
                              }),
                            }),
                            a(u.div, {
                              className: `framer-1sadau`,
                              layoutDependency: O,
                              layoutId: `km4yQNRhL`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          984.4 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1hw1f4i-container`,
                                    layoutDependency: O,
                                    layoutId: `Li_BIWaNd-container`,
                                    nodeId: `Li_BIWaNd`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `Li_BIWaNd`,
                                      IsnRU0dVs: `Community support`,
                                      layoutId: `Li_BIWaNd`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          984.4 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1vl8x8v-container`,
                                    layoutDependency: O,
                                    layoutId: `kI6Je7CDp-container`,
                                    nodeId: `kI6Je7CDp`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `kI6Je7CDp`,
                                      IsnRU0dVs: `Priority support`,
                                      layoutId: `kI6Je7CDp`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          984.4 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1d395uc-container`,
                                    layoutDependency: O,
                                    layoutId: `gfMOT18Mn-container`,
                                    nodeId: `gfMOT18Mn`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `gfMOT18Mn`,
                                      IsnRU0dVs: `Dedicated account manager`,
                                      layoutId: `gfMOT18Mn`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a(u.div, {
                          className: `framer-1e0x0fs`,
                          layoutDependency: O,
                          layoutId: `XMMRh0mt4`,
                          children: [
                            a(u.div, {
                              className: `framer-1qvz3zn`,
                              "data-border": !0,
                              layoutDependency: O,
                              layoutId: `nmRjigIoy`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                              },
                              variants: {
                                WlHZDDDw4: {
                                  "--border-bottom-width": `0px`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                              },
                              children: [
                                o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(u.h5, {
                                      className: `framer-styles-preset-qfhoqo`,
                                      "data-styles-preset": `gSwoAzhaJ`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                      },
                                      children: `Basic`,
                                    }),
                                  }),
                                  className: `framer-p29ls0`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `cSldDd2oM`,
                                  style: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  variants: {
                                    WlHZDDDw4: {
                                      "--extracted-a0htzi": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        children: o(t, {
                                          children: o(u.h3, {
                                            className: `framer-styles-preset-u3ga62`,
                                            "data-styles-preset": `uLTHU2gC4`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                            },
                                            children: `Basic`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                }),
                                j() &&
                                  o(m, {
                                    __fromCanvasComponent: !0,
                                    children: o(t, {
                                      children: o(u.h5, {
                                        className: `framer-styles-preset-qfhoqo`,
                                        "data-styles-preset": `gSwoAzhaJ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                        },
                                        children: `Features`,
                                      }),
                                    }),
                                    className: `framer-1ygh5hx`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `OQ_7EGKXU`,
                                    style: {
                                      "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-16qjeho`,
                              layoutDependency: O,
                              layoutId: `U4wPVcVTU`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-11v9abo-container`,
                                    layoutDependency: O,
                                    layoutId: `QsDLPdw8o-container`,
                                    nodeId: `QsDLPdw8o`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Up to 15`,
                                      height: `100%`,
                                      id: `QsDLPdw8o`,
                                      IsnRU0dVs: `Team members`,
                                      layoutId: `QsDLPdw8o`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1bnyfb5-container`,
                                    layoutDependency: O,
                                    layoutId: `JC82_bIbo-container`,
                                    nodeId: `JC82_bIbo`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `2,000`,
                                      height: `100%`,
                                      id: `JC82_bIbo`,
                                      IsnRU0dVs: `AI queries / mo`,
                                      layoutId: `JC82_bIbo`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1193znu-container`,
                                    layoutDependency: O,
                                    layoutId: `gGpCJVJ5O-container`,
                                    nodeId: `gGpCJVJ5O`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Unlimited`,
                                      height: `100%`,
                                      id: `gGpCJVJ5O`,
                                      IsnRU0dVs: `Connected integrations`,
                                      layoutId: `gGpCJVJ5O`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    183,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          183,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-vupprj-container`,
                                    layoutDependency: O,
                                    layoutId: `phfzYwela-container`,
                                    nodeId: `phfzYwela`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Unlimited`,
                                      height: `100%`,
                                      id: `phfzYwela`,
                                      IsnRU0dVs: `Conversation history`,
                                      layoutId: `phfzYwela`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    244,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          244,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1qi6uqv-container`,
                                    layoutDependency: O,
                                    layoutId: `o6J8VhaiR-container`,
                                    nodeId: `o6J8VhaiR`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `o6J8VhaiR`,
                                      IsnRU0dVs: `Source attribution`,
                                      layoutId: `o6J8VhaiR`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    305,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          305,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-f57ajq-container`,
                                    layoutDependency: O,
                                    layoutId: `P1icppN3N-container`,
                                    nodeId: `P1icppN3N`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `P1icppN3N`,
                                      IsnRU0dVs: `Action execution`,
                                      layoutId: `P1icppN3N`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    366,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          366,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-tmd2ap-container`,
                                    layoutDependency: O,
                                    layoutId: `vq9DSaUF_-container`,
                                    nodeId: `vq9DSaUF_`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `vq9DSaUF_`,
                                      IsnRU0dVs: `Custom AI instructions`,
                                      layoutId: `vq9DSaUF_`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    427,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          150.2 +
                                          0 +
                                          427,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-wx5qp-container`,
                                    layoutDependency: O,
                                    layoutId: `o7MLo8Ilf-container`,
                                    nodeId: `o7MLo8Ilf`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `o7MLo8Ilf`,
                                      IsnRU0dVs: `Multi-step workflows`,
                                      layoutId: `o7MLo8Ilf`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(u.div, {
                              className: `framer-1mdxxh5`,
                              layoutDependency: O,
                              layoutId: `Vrs8gyLFb`,
                              style: { opacity: 0 },
                              variants: { WlHZDDDw4: { opacity: 1 } },
                              children: o(m, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(u.h6, {
                                    className: `framer-styles-preset-b70r5p`,
                                    "data-styles-preset": `Q_3jdt9X6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `Features`,
                                  }),
                                }),
                                className: `framer-g3mjod`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `g3Hqti_ch`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  WlHZDDDw4: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    WlHZDDDw4: {
                                      children: o(t, {
                                        children: o(u.h5, {
                                          className: `framer-styles-preset-qfhoqo`,
                                          "data-styles-preset": `gSwoAzhaJ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                          },
                                          children: `Security & Compliance`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T,
                                ),
                              }),
                            }),
                            a(u.div, {
                              className: `framer-1a311am`,
                              layoutDependency: O,
                              layoutId: `eGCyJaSQP`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          719.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-124x84v-container`,
                                    layoutDependency: O,
                                    layoutId: `jju592vhM-container`,
                                    nodeId: `jju592vhM`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `jju592vhM`,
                                      IsnRU0dVs: `SSO`,
                                      layoutId: `jju592vhM`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          719.8 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1vnxib9-container`,
                                    layoutDependency: O,
                                    layoutId: `M704nleqs-container`,
                                    nodeId: `M704nleqs`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `M704nleqs`,
                                      IsnRU0dVs: `SAML & SCIM`,
                                      layoutId: `M704nleqs`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          719.8 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-efax4j-container`,
                                    layoutDependency: O,
                                    layoutId: `Q4DZ0OSrO-container`,
                                    nodeId: `Q4DZ0OSrO`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `Q4DZ0OSrO`,
                                      IsnRU0dVs: `Audit Logs`,
                                      layoutId: `Q4DZ0OSrO`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(u.div, {
                              className: `framer-1tv4an9`,
                              layoutDependency: O,
                              layoutId: `snCl92c24`,
                              style: { opacity: 0 },
                              variants: { WlHZDDDw4: { opacity: 1 } },
                              children: o(m, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(u.h6, {
                                    className: `framer-styles-preset-b70r5p`,
                                    "data-styles-preset": `Q_3jdt9X6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `Features`,
                                  }),
                                }),
                                className: `framer-ikcvw8`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `uf6AxRXJp`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  WlHZDDDw4: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    WlHZDDDw4: {
                                      children: o(t, {
                                        children: o(u.h5, {
                                          className: `framer-styles-preset-qfhoqo`,
                                          "data-styles-preset": `gSwoAzhaJ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                          },
                                          children: `Support`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T,
                                ),
                              }),
                            }),
                            a(u.div, {
                              className: `framer-16wfru5`,
                              layoutDependency: O,
                              layoutId: `x5QXYXw9N`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          984.4 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-5cqc2q-container`,
                                    layoutDependency: O,
                                    layoutId: `tMw1ong5e-container`,
                                    nodeId: `tMw1ong5e`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `tMw1ong5e`,
                                      IsnRU0dVs: `Community support`,
                                      layoutId: `tMw1ong5e`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          984.4 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-wllick-container`,
                                    layoutDependency: O,
                                    layoutId: `jdKfwbFN6-container`,
                                    nodeId: `jdKfwbFN6`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `jdKfwbFN6`,
                                      IsnRU0dVs: `Priority support`,
                                      layoutId: `jdKfwbFN6`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          1287.4 +
                                          0 +
                                          984.4 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1q7bxl5-container`,
                                    layoutDependency: O,
                                    layoutId: `xGtwfF32n-container`,
                                    nodeId: `xGtwfF32n`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `xGtwfF32n`,
                                      IsnRU0dVs: `Dedicated account manager`,
                                      layoutId: `xGtwfF32n`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`cOi6yPk8e`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a(u.div, {
                          className: `framer-9kn2au`,
                          layoutDependency: O,
                          layoutId: `c9Z7DEWYb`,
                          children: [
                            a(u.div, {
                              className: `framer-1bvkpkf`,
                              "data-border": !0,
                              layoutDependency: O,
                              layoutId: `s5SuCm4Ai`,
                              style: {
                                "--border-bottom-width": `1px`,
                                "--border-color": `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                                backgroundColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                              },
                              variants: {
                                WlHZDDDw4: {
                                  "--border-bottom-width": `0px`,
                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                },
                              },
                              children: [
                                o(m, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(u.h5, {
                                      className: `framer-styles-preset-qfhoqo`,
                                      "data-styles-preset": `gSwoAzhaJ`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                      },
                                      children: `Pro`,
                                    }),
                                  }),
                                  className: `framer-4yxkru`,
                                  fonts: [`Inter`],
                                  layoutDependency: O,
                                  layoutId: `j4w7Mr7ak`,
                                  style: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  variants: {
                                    WlHZDDDw4: {
                                      "--extracted-a0htzi": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    },
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        children: o(t, {
                                          children: o(u.h3, {
                                            className: `framer-styles-preset-u3ga62`,
                                            "data-styles-preset": `uLTHU2gC4`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--extracted-a0htzi, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                            },
                                            children: `Pro`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                }),
                                j() &&
                                  o(m, {
                                    __fromCanvasComponent: !0,
                                    children: o(t, {
                                      children: o(u.h5, {
                                        className: `framer-styles-preset-qfhoqo`,
                                        "data-styles-preset": `gSwoAzhaJ`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                        },
                                        children: `Features`,
                                      }),
                                    }),
                                    className: `framer-isi7y3`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `FJF8M8x2C`,
                                    style: {
                                      "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                                      "--framer-link-text-decoration": `underline`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                            a(u.div, {
                              className: `framer-466shq`,
                              layoutDependency: O,
                              layoutId: `XTGIOFtDg`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-gs0qd2-container`,
                                    layoutDependency: O,
                                    layoutId: `h1N1y3LFj-container`,
                                    nodeId: `h1N1y3LFj`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Unlimited`,
                                      height: `100%`,
                                      id: `h1N1y3LFj`,
                                      IsnRU0dVs: `Team members`,
                                      layoutId: `h1N1y3LFj`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1l4eox5-container`,
                                    layoutDependency: O,
                                    layoutId: `MgISDtrhJ-container`,
                                    nodeId: `MgISDtrhJ`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Custom`,
                                      height: `100%`,
                                      id: `MgISDtrhJ`,
                                      IsnRU0dVs: `AI queries / mo`,
                                      layoutId: `MgISDtrhJ`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-d5qqne-container`,
                                    layoutDependency: O,
                                    layoutId: `E8WcA6IVv-container`,
                                    nodeId: `E8WcA6IVv`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Unlimited`,
                                      height: `100%`,
                                      id: `E8WcA6IVv`,
                                      IsnRU0dVs: `Connected integrations`,
                                      layoutId: `E8WcA6IVv`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    183,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          183,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-uh5s1i-container`,
                                    layoutDependency: O,
                                    layoutId: `AgZxMU0mv-container`,
                                    nodeId: `AgZxMU0mv`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: `Unlimited`,
                                      height: `100%`,
                                      id: `AgZxMU0mv`,
                                      IsnRU0dVs: `Conversation history`,
                                      layoutId: `AgZxMU0mv`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`F4gDFkigA`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    244,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          244,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-xjf50u-container`,
                                    layoutDependency: O,
                                    layoutId: `uJUEVhFYS-container`,
                                    nodeId: `uJUEVhFYS`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `uJUEVhFYS`,
                                      IsnRU0dVs: `Source attribution`,
                                      layoutId: `uJUEVhFYS`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    305,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          305,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-16acsj5-container`,
                                    layoutDependency: O,
                                    layoutId: `wNUJgOLZ4-container`,
                                    nodeId: `wNUJgOLZ4`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `wNUJgOLZ4`,
                                      IsnRU0dVs: `Action execution`,
                                      layoutId: `wNUJgOLZ4`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    366,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          366,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1gy1hvg-container`,
                                    layoutDependency: O,
                                    layoutId: `wO6A_MDAV-container`,
                                    nodeId: `wO6A_MDAV`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `wO6A_MDAV`,
                                      IsnRU0dVs: `Custom AI instructions`,
                                      layoutId: `wO6A_MDAV`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    185.6 +
                                    0 +
                                    427,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          150.2 +
                                          0 +
                                          427,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-e1t4n0-container`,
                                    layoutDependency: O,
                                    layoutId: `AgAWm9FxK-container`,
                                    nodeId: `AgAWm9FxK`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `AgAWm9FxK`,
                                      IsnRU0dVs: `Multi-step workflows`,
                                      layoutId: `AgAWm9FxK`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(u.div, {
                              className: `framer-15hlh0g`,
                              layoutDependency: O,
                              layoutId: `fu7XqTsZI`,
                              style: { opacity: 0 },
                              variants: { WlHZDDDw4: { opacity: 1 } },
                              children: o(m, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(u.h6, {
                                    className: `framer-styles-preset-b70r5p`,
                                    "data-styles-preset": `Q_3jdt9X6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `Features`,
                                  }),
                                }),
                                className: `framer-57hw6v`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `lYGbXxl_D`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  WlHZDDDw4: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    WlHZDDDw4: {
                                      children: o(t, {
                                        children: o(u.h5, {
                                          className: `framer-styles-preset-qfhoqo`,
                                          "data-styles-preset": `gSwoAzhaJ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                          },
                                          children: `Security & Compliance`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T,
                                ),
                              }),
                            }),
                            a(u.div, {
                              className: `framer-1rjs02v`,
                              layoutDependency: O,
                              layoutId: `W_rLMkctg`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          719.8 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1a0h6qa-container`,
                                    layoutDependency: O,
                                    layoutId: `e_l4mzbGV-container`,
                                    nodeId: `e_l4mzbGV`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `e_l4mzbGV`,
                                      IsnRU0dVs: `SSO`,
                                      layoutId: `e_l4mzbGV`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          719.8 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1lxom8k-container`,
                                    layoutDependency: O,
                                    layoutId: `gjnluF0e1-container`,
                                    nodeId: `gjnluF0e1`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `gjnluF0e1`,
                                      IsnRU0dVs: `SAML & SCIM`,
                                      layoutId: `gjnluF0e1`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    802.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          719.8 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-3zm32m-container`,
                                    layoutDependency: O,
                                    layoutId: `TZ5gHYaEn-container`,
                                    nodeId: `TZ5gHYaEn`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `TZ5gHYaEn`,
                                      IsnRU0dVs: `Audit Logs`,
                                      layoutId: `TZ5gHYaEn`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            o(u.div, {
                              className: `framer-18lmo6d`,
                              layoutDependency: O,
                              layoutId: `bkoz8EzAR`,
                              style: { opacity: 0 },
                              variants: { WlHZDDDw4: { opacity: 1 } },
                              children: o(m, {
                                __fromCanvasComponent: !0,
                                children: o(t, {
                                  children: o(u.h6, {
                                    className: `framer-styles-preset-b70r5p`,
                                    "data-styles-preset": `Q_3jdt9X6`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `Features`,
                                  }),
                                }),
                                className: `framer-1atyzrs`,
                                fonts: [`Inter`],
                                layoutDependency: O,
                                layoutId: `x0CaO56j3`,
                                style: {
                                  "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                variants: {
                                  WlHZDDDw4: {
                                    "--extracted-1lwpl3i": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...B(
                                  {
                                    WlHZDDDw4: {
                                      children: o(t, {
                                        children: o(u.h5, {
                                          className: `framer-styles-preset-qfhoqo`,
                                          "data-styles-preset": `gSwoAzhaJ`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                          },
                                          children: `Support`,
                                        }),
                                      }),
                                    },
                                  },
                                  x,
                                  T,
                                ),
                              }),
                            }),
                            a(u.div, {
                              className: `framer-j8ldx3`,
                              layoutDependency: O,
                              layoutId: `Yxg3dHOEW`,
                              children: [
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    0,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          984.4 +
                                          0 +
                                          0,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1o0v59t-container`,
                                    layoutDependency: O,
                                    layoutId: `GQgtM5q3H-container`,
                                    nodeId: `GQgtM5q3H`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `GQgtM5q3H`,
                                      IsnRU0dVs: `Community support`,
                                      layoutId: `GQgtM5q3H`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    61,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          984.4 +
                                          0 +
                                          61,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1gnnnr4-container`,
                                    layoutDependency: O,
                                    layoutId: `pP8gq7TTw-container`,
                                    nodeId: `pP8gq7TTw`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `pP8gq7TTw`,
                                      IsnRU0dVs: `Priority support`,
                                      layoutId: `pP8gq7TTw`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 1,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
                                    }),
                                  }),
                                }),
                                o(E, {
                                  height: 61,
                                  width: `max(${f?.width || `100vw`} / 5, 1px)`,
                                  y:
                                    (f?.y || 0) +
                                    0 +
                                    (((f?.height || 1298) - 0 - 1297.6) / 2 +
                                      0 +
                                      0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    1114.6 +
                                    0 +
                                    122,
                                  ...B(
                                    {
                                      WlHZDDDw4: {
                                        width: f?.width || `100vw`,
                                        y:
                                          (f?.y || 0) +
                                          0 +
                                          (((f?.height || 3742) - 0 - 3742.2) /
                                            2 +
                                            0 +
                                            0) +
                                          0 +
                                          0 +
                                          0 +
                                          2574.8 +
                                          0 +
                                          984.4 +
                                          0 +
                                          122,
                                      },
                                    },
                                    x,
                                    T,
                                  ),
                                  children: o(v, {
                                    className: `framer-1b9sttw-container`,
                                    layoutDependency: O,
                                    layoutId: `rYjwe6HMR-container`,
                                    nodeId: `rYjwe6HMR`,
                                    rendersWithMotion: !0,
                                    scopeId: `phL8NQOnv`,
                                    children: o(I, {
                                      DXtiLHcoU: ``,
                                      height: `100%`,
                                      id: `rYjwe6HMR`,
                                      IsnRU0dVs: `Dedicated account manager`,
                                      layoutId: `rYjwe6HMR`,
                                      QTM4ITCYc: !1,
                                      style: { width: `100%` },
                                      UpWqDq7T6: {
                                        borderBottomWidth: 0,
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderLeftWidth: 0,
                                        borderRightWidth: 0,
                                        borderStyle: `solid`,
                                        borderTopWidth: 0,
                                      },
                                      variant: V(`vq09Dmf5j`),
                                      width: `100%`,
                                      yEK4cBzgR: `20px 0px 20px 0px`,
                                      ...B(
                                        { WlHZDDDw4: { QTM4ITCYc: !0 } },
                                        x,
                                        T,
                                      ),
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
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-8uGnK.framer-7a4ej6, .framer-8uGnK .framer-7a4ej6 { display: block; }`,
          `.framer-8uGnK.framer-yzm9z9 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1080px; }`,
          `.framer-8uGnK .framer-13mgcjd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-8uGnK .framer-f2z7k6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-8uGnK .framer-tbdea7 { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 378px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-8uGnK .framer-13b83ar, .framer-8uGnK .framer-h7vv5d, .framer-8uGnK .framer-1qvz3zn, .framer-8uGnK .framer-1bvkpkf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 24px 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-8uGnK .framer-i8y1i0, .framer-8uGnK .framer-jzvzii, .framer-8uGnK .framer-1ww45e7, .framer-8uGnK .framer-1iwssqz, .framer-8uGnK .framer-1ygh5hx, .framer-8uGnK .framer-isi7y3 { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 620px; position: relative; width: 1px; }`,
          `.framer-8uGnK .framer-ja9egb, .framer-8uGnK .framer-1vyncp7, .framer-8uGnK .framer-1cbz9gy, .framer-8uGnK .framer-a3kkdd, .framer-8uGnK .framer-9leapc, .framer-8uGnK .framer-1sadau, .framer-8uGnK .framer-16qjeho, .framer-8uGnK .framer-1a311am, .framer-8uGnK .framer-16wfru5, .framer-8uGnK .framer-466shq, .framer-8uGnK .framer-1rjs02v, .framer-8uGnK .framer-j8ldx3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8uGnK .framer-qfbpsf-container, .framer-8uGnK .framer-1i7oc0n-container, .framer-8uGnK .framer-6nw2h9-container, .framer-8uGnK .framer-3ja9t4-container, .framer-8uGnK .framer-1dq8tnl-container, .framer-8uGnK .framer-q5462g-container, .framer-8uGnK .framer-1wvkwd7-container, .framer-8uGnK .framer-lxmefq-container, .framer-8uGnK .framer-1v3xqzi-container, .framer-8uGnK .framer-121ra8n-container, .framer-8uGnK .framer-lho52a-container, .framer-8uGnK .framer-je8uvr-container, .framer-8uGnK .framer-xti1ny-container, .framer-8uGnK .framer-39ihx-container, .framer-8uGnK .framer-ej1ugk-container, .framer-8uGnK .framer-10ia16g-container, .framer-8uGnK .framer-sqo5gr-container, .framer-8uGnK .framer-1o1izpo-container, .framer-8uGnK .framer-7levn-container, .framer-8uGnK .framer-lf51oo-container, .framer-8uGnK .framer-1gv8t01-container, .framer-8uGnK .framer-75yy4h-container, .framer-8uGnK .framer-43t8oa-container, .framer-8uGnK .framer-9db75d-container, .framer-8uGnK .framer-1ogsljg-container, .framer-8uGnK .framer-1hw1f4i-container, .framer-8uGnK .framer-1vl8x8v-container, .framer-8uGnK .framer-1d395uc-container, .framer-8uGnK .framer-11v9abo-container, .framer-8uGnK .framer-1bnyfb5-container, .framer-8uGnK .framer-1193znu-container, .framer-8uGnK .framer-vupprj-container, .framer-8uGnK .framer-1qi6uqv-container, .framer-8uGnK .framer-f57ajq-container, .framer-8uGnK .framer-tmd2ap-container, .framer-8uGnK .framer-wx5qp-container, .framer-8uGnK .framer-124x84v-container, .framer-8uGnK .framer-1vnxib9-container, .framer-8uGnK .framer-efax4j-container, .framer-8uGnK .framer-5cqc2q-container, .framer-8uGnK .framer-wllick-container, .framer-8uGnK .framer-1q7bxl5-container, .framer-8uGnK .framer-gs0qd2-container, .framer-8uGnK .framer-1l4eox5-container, .framer-8uGnK .framer-d5qqne-container, .framer-8uGnK .framer-uh5s1i-container, .framer-8uGnK .framer-xjf50u-container, .framer-8uGnK .framer-16acsj5-container, .framer-8uGnK .framer-1gy1hvg-container, .framer-8uGnK .framer-e1t4n0-container, .framer-8uGnK .framer-1a0h6qa-container, .framer-8uGnK .framer-1lxom8k-container, .framer-8uGnK .framer-3zm32m-container, .framer-8uGnK .framer-1o0v59t-container, .framer-8uGnK .framer-1gnnnr4-container, .framer-8uGnK .framer-1b9sttw-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-8uGnK .framer-j2icjc, .framer-8uGnK .framer-wi0li3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 620px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-8uGnK .framer-42mu3b, .framer-8uGnK .framer-1e0x0fs, .framer-8uGnK .framer-9kn2au { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-8uGnK .framer-1adv30p, .framer-8uGnK .framer-varxf7, .framer-8uGnK .framer-jmik2i, .framer-8uGnK .framer-p29ls0, .framer-8uGnK .framer-g3mjod, .framer-8uGnK .framer-ikcvw8, .framer-8uGnK .framer-4yxkru, .framer-8uGnK .framer-57hw6v, .framer-8uGnK .framer-1atyzrs { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-8uGnK .framer-1evubsq, .framer-8uGnK .framer-p8jcau, .framer-8uGnK .framer-1mdxxh5, .framer-8uGnK .framer-1tv4an9, .framer-8uGnK .framer-15hlh0g, .framer-8uGnK .framer-18lmo6d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-8uGnK.framer-v-1jztelv.framer-yzm9z9 { width: 406px; }`,
          `.framer-8uGnK.framer-v-1jztelv .framer-f2z7k6 { flex-direction: column; gap: 120px; }`,
          `.framer-8uGnK.framer-v-1jztelv .framer-42mu3b, .framer-8uGnK.framer-v-1jztelv .framer-1e0x0fs, .framer-8uGnK.framer-v-1jztelv .framer-9kn2au { flex: none; gap: 24px; width: 100%; }`,
          `.framer-8uGnK.framer-v-1jztelv .framer-h7vv5d, .framer-8uGnK.framer-v-1jztelv .framer-1qvz3zn, .framer-8uGnK.framer-v-1jztelv .framer-1bvkpkf { flex-direction: column; gap: 44px; padding: 0px; position: relative; top: unset; }`,
          `.framer-8uGnK.framer-v-1jztelv .framer-1adv30p, .framer-8uGnK.framer-v-1jztelv .framer-1iwssqz, .framer-8uGnK.framer-v-1jztelv .framer-p29ls0, .framer-8uGnK.framer-v-1jztelv .framer-1ygh5hx, .framer-8uGnK.framer-v-1jztelv .framer-4yxkru, .framer-8uGnK.framer-v-1jztelv .framer-isi7y3 { flex: none; width: 100%; }`,
          ...Ve,
          ...be,
          ...Ge,
          `.framer-8uGnK[data-border="true"]::after, .framer-8uGnK [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-8uGnK`,
      )),
      (H.displayName = `Comparison Table`),
      (H.defaultProps = { height: 1298, width: 1080 }),
      O(H, {
        variant: {
          options: [`Zoo6jDGPM`, `WlHZDDDw4`],
          optionTitles: [`Variant 1`, `Mobile`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      p(
        H,
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
          ...Xe,
          ...w(He),
          ...w(xe),
          ...w(Ke),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (H.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([g(I, {}, t)])),
      }));
  }),
  st,
  U,
  W,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
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
  Dt,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Ot,
  kt,
  At,
  jt,
  Q,
  Mt,
  Nt,
  $,
  Pt;
e(() => {
  (c(),
    T(),
    f(),
    r(),
    de(),
    F(),
    Le(),
    ot(),
    ve(),
    Re(),
    me(),
    fe(),
    Ee(),
    we(),
    Me(),
    Ae(),
    Te(),
    je(),
    Ye(),
    (st = h(z)),
    (U = _(j)),
    (W = _(m)),
    (ct = h(L)),
    (lt = h(R)),
    (ut = h(Ne)),
    (dt = _(Ne)),
    (ft = h(Ce)),
    (pt = _(Ce)),
    (mt = h(Pe)),
    (ht = _(Pe)),
    (gt = h(De)),
    (_t = _(De)),
    (vt = h(ke)),
    (yt = _(ke)),
    (bt = h(Oe)),
    (xt = _(Oe)),
    (St = x(u.div)),
    (Ct = h(H)),
    (wt = {
      c2__srr4x: `(min-width: 810px) and (max-width: 1279.98px)`,
      e6Sddt6IM: `(max-width: 809.98px)`,
      gF5iDJvWa: `(min-width: 1280px)`,
    }),
    (Tt = []),
    (Et = `framer-4tLwP`),
    (Dt = {
      c2__srr4x: `framer-v-2a2nkr`,
      e6Sddt6IM: `framer-v-1vmmyj3`,
      gF5iDJvWa: `framer-v-1f2gfjo`,
    }),
    (G = (e, t, n) => (e && t ? `position` : n)),
    (K = {
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
    (q = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (X = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (Z = (e, t) => `translate(-50%, -50%) ${t}`),
    (Ot = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (kt = { bounce: 0, delay: 0.4, duration: 1, type: `spring` }),
    (At = { bounce: 0, delay: 0.5, duration: 1, type: `spring` }),
    (jt = { bounce: 0, delay: 0.6, duration: 1, type: `spring` }),
    (Q = { Desktop: `gF5iDJvWa`, Phone: `e6Sddt6IM`, Tablet: `c2__srr4x` }),
    (Mt = ({ value: e }) =>
      re()
        ? null
        : o(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Nt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `gF5iDJvWa`,
    })),
    ($ = k(
      s(function (e, r) {
        let s = l(null),
          c = r ?? s,
          f = ee(),
          { activeLocale: p, setLocale: ne } = ie(),
          m = oe(),
          { style: h, className: g, layoutId: _, variant: v, ...x } = Nt(e);
        ce(n(() => Je({}, p), [p]));
        let [w, T] = se(v, wt, !1),
          re = b(Et, ze, pe, ge),
          O = i(ae)?.isLayoutTemplate,
          k = !!i(d)?.transition?.layout,
          M = G(O, k),
          le = C(`NjRIwgTM0`),
          de = l(null),
          N = C(`LJWBAIvDt`),
          fe = y(),
          me = C(`VbpnlC5S2`),
          P = l(null),
          he = C(`IP_5mrDzS`),
          _e = l(null),
          F = C(`m2PRsnkFo`),
          I = l(null);
        return (
          D({}),
          o(ae.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Q,
              primaryVariantId: `gF5iDJvWa`,
              variantClassNames: Dt,
            },
            children: a(te, {
              id: _ ?? f,
              children: [
                o(Mt, {
                  value: `html body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 9, 18)); }`,
                }),
                a(u.div, {
                  ...x,
                  className: b(re, `framer-1f2gfjo`, g),
                  ref: c,
                  style: { ...h },
                  children: [
                    o(u.section, {
                      className: `framer-17hvgqh`,
                      "data-border": !0,
                      "data-framer-name": `Pricing`,
                      id: le,
                      layout: M,
                      ref: de,
                      children: a(`div`, {
                        className: `framer-6xjh1p`,
                        "data-framer-name": `content`,
                        children: [
                          a(`div`, {
                            className: `framer-1fv0nqf`,
                            id: N,
                            ref: fe(N),
                            children: [
                              o(S, {
                                breakpoint: w,
                                overrides: {
                                  c2__srr4x: {
                                    y:
                                      (m?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      120 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  e6Sddt6IM: {
                                    y:
                                      (m?.y || 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0 +
                                      120 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                children: o(E, {
                                  height: 30,
                                  y:
                                    (m?.y || 0) +
                                    0 +
                                    0 +
                                    0 +
                                    0 +
                                    180 +
                                    0 +
                                    0 +
                                    0,
                                  children: o(U, {
                                    __framer__animate: { transition: q },
                                    __framer__animateOnce: !0,
                                    __framer__enter: K,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1dsfsge-container`,
                                    nodeId: `woaUunZNI`,
                                    rendersWithMotion: !0,
                                    scopeId: `WBQiMtek1`,
                                    children: o(z, {
                                      bwtRC2zWt: `Pricing`,
                                      cxgg1etFf: !0,
                                      Dh_X3w3jZ: `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                      dMWH0omL8: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      eaYoGaNwq: {
                                        borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        borderStyle: `solid`,
                                        borderWidth: 1,
                                      },
                                      GYoEH1GVm: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                      h3fww64y5: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      height: `100%`,
                                      id: `woaUunZNI`,
                                      layoutId: `woaUunZNI`,
                                      OgEx_2E7P: !1,
                                      pdea6CzDr: ue,
                                      Rtia32FHG: !0,
                                      variant: J(`qfOTriuLV`),
                                      VvHeeXiqh: !1,
                                      width: `100%`,
                                      ZGOQT_PfL: `4px 16px 4px 16px`,
                                    }),
                                  }),
                                }),
                              }),
                              o(W, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: o(t, {
                                  children: o(`h1`, {
                                    className: `framer-styles-preset-7hjh4k`,
                                    "data-styles-preset": `bM7WzBkv5`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    },
                                    children: `Clear pricing plans that scale with you`,
                                  }),
                                }),
                                className: `framer-7r00jo`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          o(S, {
                            breakpoint: w,
                            overrides: {
                              c2__srr4x: {
                                width: `min(min(${m?.width || `100vw`}, 1600px) - 48px, 720px)`,
                                y: (m?.y || 0) + 0 + 0 + 0 + 0 + 120 + 174.8,
                              },
                              e6Sddt6IM: {
                                y: (m?.y || 0) + 0 + 0 + 0 + 0 + 120 + 162.8,
                              },
                            },
                            children: o(E, {
                              height: 743,
                              width: `min(min(${m?.width || `100vw`}, 1600px) - 48px, 1080px)`,
                              y: (m?.y || 0) + 0 + 0 + 0 + 0 + 180 + 190.8,
                              children: o(U, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-6phi5r-container`,
                                nodeId: `ydWqDKH6U`,
                                rendersWithMotion: !0,
                                scopeId: `WBQiMtek1`,
                                children: o(S, {
                                  breakpoint: w,
                                  overrides: {
                                    c2__srr4x: { variant: J(`PhsqtEgn4`) },
                                    e6Sddt6IM: { variant: J(`Abiy5bkiE`) },
                                  },
                                  children: o(L, {
                                    height: `100%`,
                                    id: `ydWqDKH6U`,
                                    layoutId: `ydWqDKH6U`,
                                    style: { width: `100%` },
                                    variant: J(`lkCEJd_yl`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          a(`div`, {
                            className: `framer-haz6vf`,
                            "data-framer-name": `Ticker`,
                            children: [
                              o(W, {
                                __framer__animate: { transition: q },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: o(t, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-prenqk`,
                                    "data-styles-preset": `POYKcChXw`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                    },
                                    children: `Trusted by industry leaders`,
                                  }),
                                }),
                                className: `framer-1r8r690`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              a(`div`, {
                                className: `framer-tlf247`,
                                id: me,
                                ref: P,
                                children: [
                                  o(E, {
                                    children: o(j, {
                                      className: `framer-1bvh46a-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `rQ9xVA7LI`,
                                      scopeId: `WBQiMtek1`,
                                      children: o(R, {
                                        baseBorderColor: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                        borderRadius: 24,
                                        borderWidth: 1,
                                        bottomLeft: 24,
                                        bottomRight: 24,
                                        cardBackground: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(6, 5, 3, 0.75))`,
                                        glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                        height: `100%`,
                                        id: `rQ9xVA7LI`,
                                        isMixed: !1,
                                        layoutId: `rQ9xVA7LI`,
                                        proximity: 490,
                                        smoothing: 0.05,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        topLeft: 24,
                                        topRight: 24,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  a(St, {
                                    className: `framer-3fsm5g`,
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
                                      o(S, {
                                        breakpoint: w,
                                        overrides: {
                                          e6Sddt6IM: { width: void 0 },
                                        },
                                        children: o(A, {
                                          width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                          children: o(`div`, {
                                            className: `framer-19vmhpc`,
                                            children: o(dt, {
                                              __framer__animate: {
                                                transition: Y,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: K,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__targets: [
                                                { ref: P, target: `animate` },
                                              ],
                                              __framer__threshold: 1,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animated: !0,
                                              className: `framer-1vj5det`,
                                              layoutId: `JK8_ZAZXs`,
                                              transformTemplate: Z,
                                              z1don5LZx: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(S, {
                                        breakpoint: w,
                                        overrides: {
                                          e6Sddt6IM: { width: void 0 },
                                        },
                                        children: o(A, {
                                          width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                          children: o(`div`, {
                                            className: `framer-kz64l8`,
                                            children: o(pt, {
                                              __framer__animate: {
                                                transition: X,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: K,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__targets: [
                                                { ref: P, target: `animate` },
                                              ],
                                              __framer__threshold: 1,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animated: !0,
                                              className: `framer-pc9f3w`,
                                              layoutId: `QSfq70sdy`,
                                              transformTemplate: Z,
                                              z1don5LZx: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(S, {
                                        breakpoint: w,
                                        overrides: {
                                          e6Sddt6IM: { width: void 0 },
                                        },
                                        children: o(A, {
                                          width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                          children: o(`div`, {
                                            className: `framer-dlwtgr`,
                                            children: o(ht, {
                                              __framer__animate: {
                                                transition: Ot,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: K,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__targets: [
                                                { ref: P, target: `animate` },
                                              ],
                                              __framer__threshold: 1,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animated: !0,
                                              className: `framer-1vcvolk`,
                                              layoutId: `i5Jgku0Sc`,
                                              transformTemplate: Z,
                                              z1don5LZx: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(S, {
                                        breakpoint: w,
                                        overrides: {
                                          e6Sddt6IM: { width: void 0 },
                                        },
                                        children: o(A, {
                                          width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                          children: o(`div`, {
                                            className: `framer-1a1g0jw`,
                                            children: o(_t, {
                                              __framer__animate: {
                                                transition: kt,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: K,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__targets: [
                                                { ref: P, target: `animate` },
                                              ],
                                              __framer__threshold: 1,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animated: !0,
                                              className: `framer-zpyom9`,
                                              layoutId: `P6VB2q1u4`,
                                              transformTemplate: Z,
                                              z1don5LZx: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(S, {
                                        breakpoint: w,
                                        overrides: {
                                          e6Sddt6IM: { width: void 0 },
                                        },
                                        children: o(A, {
                                          width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                          children: o(`div`, {
                                            className: `framer-1hagm9c`,
                                            children: o(yt, {
                                              __framer__animate: {
                                                transition: At,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: K,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__targets: [
                                                { ref: P, target: `animate` },
                                              ],
                                              __framer__threshold: 1,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animated: !0,
                                              className: `framer-1qbcxvz`,
                                              layoutId: `cAGt_W55m`,
                                              transformTemplate: Z,
                                              z1don5LZx: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(S, {
                                        breakpoint: w,
                                        overrides: {
                                          e6Sddt6IM: { width: void 0 },
                                        },
                                        children: o(A, {
                                          width: `calc((100% - var(--ticker-total-not-fr,0px) - (var(--ticker-gap,0px) * (var(--ticker-cms-total-children, var(--ticker-total-children,1)) - 1))) / (var(--ticker-total-fr,1) * var(--ticker-cms-total-children,1)) * 1)`,
                                          children: o(`div`, {
                                            className: `framer-1bhyzz3`,
                                            children: o(xt, {
                                              __framer__animate: {
                                                transition: jt,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: K,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__targets: [
                                                { ref: P, target: `animate` },
                                              ],
                                              __framer__threshold: 1,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              animated: !0,
                                              className: `framer-16kk7e2`,
                                              layoutId: `rXKJeLqgL`,
                                              transformTemplate: Z,
                                              z1don5LZx: !0,
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
                        ],
                      }),
                    }),
                    o(u.section, {
                      className: `framer-v39gm9`,
                      "data-border": !0,
                      "data-framer-name": `Comparison`,
                      id: he,
                      layout: M,
                      ref: _e,
                      children: a(`div`, {
                        className: `framer-ys2xnk`,
                        "data-framer-name": `content`,
                        children: [
                          o(`div`, {
                            className: `framer-171mk84`,
                            id: F,
                            ref: I,
                            children: o(W, {
                              __framer__animate: { transition: q },
                              __framer__animateOnce: !0,
                              __framer__enter: K,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: o(t, {
                                children: o(`h2`, {
                                  className: `framer-styles-preset-fahce0`,
                                  "data-styles-preset": `nZtZfLTSW`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                  children: `Compare plans`,
                                }),
                              }),
                              className: `framer-1tszxjq`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          o(S, {
                            breakpoint: w,
                            overrides: {
                              c2__srr4x: {
                                width: `min(min(${m?.width || `100vw`}, 1600px) - 48px, 720px)`,
                                y: (m?.y || 0) + 0 + 1469.8 + 0 + 0 + 0 + 54,
                              },
                              e6Sddt6IM: {
                                y: (m?.y || 0) + 0 + 1405.8 + 0 + 0 + 0 + 90,
                              },
                            },
                            children: o(E, {
                              height: 1298,
                              width: `min(min(${m?.width || `100vw`}, 1600px) - 48px, 1080px)`,
                              y: (m?.y || 0) + 0 + 1621.8 + 0 + 0 + 0 + 54,
                              children: o(U, {
                                __framer__animate: { transition: Y },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-elykc7-container`,
                                nodeId: `h2ySffdZF`,
                                rendersWithMotion: !0,
                                scopeId: `WBQiMtek1`,
                                children: o(S, {
                                  breakpoint: w,
                                  overrides: {
                                    e6Sddt6IM: { variant: J(`WlHZDDDw4`) },
                                  },
                                  children: o(H, {
                                    height: `100%`,
                                    id: `h2ySffdZF`,
                                    layoutId: `h2ySffdZF`,
                                    style: { width: `100%` },
                                    variant: J(`Zoo6jDGPM`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-4tLwP.framer-igko6n, .framer-4tLwP .framer-igko6n { display: block; }`,
        `.framer-4tLwP.framer-1f2gfjo { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1316px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-4tLwP .framer-17hvgqh { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-6xjh1p { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 180px 0px 180px 0px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-1fv0nqf, .framer-4tLwP .framer-171mk84 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-1dsfsge-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-4tLwP .framer-7r00jo, .framer-4tLwP .framer-1r8r690, .framer-4tLwP .framer-1tszxjq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 620px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-6phi5r-container, .framer-4tLwP .framer-elykc7-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-haz6vf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-tlf247 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-1bvh46a-container { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; z-index: 0; }`,
        `.framer-4tLwP .framer-3fsm5g { --ticker-gap: 10px; --ticker-total-children: 6; --ticker-total-fr: 6; -webkit-mask: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20.11787819253438%, rgb(0, 0, 0) 80.28523612020665%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; mask: linear-gradient(270deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 20.11787819253438%, rgb(0, 0, 0) 80.28523612020665%, rgba(0, 0, 0, 0) 100%) add; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4tLwP .framer-19vmhpc { border-bottom-left-radius: 16px; border-bottom-right-radius: 8px; border-top-left-radius: 16px; border-top-right-radius: 8px; flex: 1 0 0px; height: 120px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-4tLwP .framer-1vj5det { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 28px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 51px); }`,
        `.framer-4tLwP .framer-kz64l8, .framer-4tLwP .framer-dlwtgr, .framer-4tLwP .framer-1a1g0jw, .framer-4tLwP .framer-1hagm9c { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: 1 0 0px; height: 120px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-4tLwP .framer-pc9f3w { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 22px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 54px); }`,
        `.framer-4tLwP .framer-1vcvolk { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 34px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 35px); }`,
        `.framer-4tLwP .framer-zpyom9 { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 29px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 57px); }`,
        `.framer-4tLwP .framer-1qbcxvz { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 28px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 42px); }`,
        `.framer-4tLwP .framer-1bhyzz3 { border-bottom-left-radius: 8px; border-bottom-right-radius: 16px; border-top-left-radius: 8px; border-top-right-radius: 16px; flex: 1 0 0px; height: 120px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-4tLwP .framer-16kk7e2 { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); flex: none; height: 32px; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: var(--framer-aspect-ratio-supported, 40px); }`,
        `.framer-4tLwP .framer-v39gm9 { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; scroll-margin-top: 120px; width: 100%; }`,
        `.framer-4tLwP .framer-ys2xnk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px 0px 180px 0px; position: relative; width: 100%; }`,
        ...Ie,
        ...N,
        ...P,
        `.framer-4tLwP[data-border="true"]::after, .framer-4tLwP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-4tLwP.framer-1f2gfjo { width: 810px; } .framer-4tLwP .framer-6xjh1p { gap: 48px; max-width: 720px; padding: 120px 0px 120px 0px; } .framer-4tLwP .framer-ys2xnk { max-width: 720px; padding: 0px 0px 120px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-4tLwP.framer-1f2gfjo { width: 390px; } .framer-4tLwP .framer-6xjh1p { gap: 36px; padding: 120px 0px 80px 0px; } .framer-4tLwP .framer-19vmhpc, .framer-4tLwP .framer-kz64l8, .framer-4tLwP .framer-dlwtgr, .framer-4tLwP .framer-1a1g0jw, .framer-4tLwP .framer-1hagm9c, .framer-4tLwP .framer-1bhyzz3 { flex: none; width: 120px; } .framer-4tLwP .framer-ys2xnk { gap: 36px; padding: 0px 0px 80px 0px; }}`,
      ],
      `framer-4tLwP`,
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 4479, width: 1280 }),
    p(
      $,
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
        ...st,
        ...ct,
        ...lt,
        ...ut,
        ...ft,
        ...mt,
        ...gt,
        ...vt,
        ...bt,
        ...Ct,
        ...w(Fe),
        ...w(le),
        ...w(he),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([g(z, {}, t), g(L, {}, t), g(H, {}, t)])
      ),
    }),
    (Pt = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `FramerWBQiMtek1`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1280`,
            framerIntrinsicHeight: `4479`,
            framerScrollSections: `{"NjRIwgTM0":{"pattern":":NjRIwgTM0","name":"pricing"},"LJWBAIvDt":{"pattern":":LJWBAIvDt","name":"scroll"},"VbpnlC5S2":{"pattern":":VbpnlC5S2","name":"logos"},"IP_5mrDzS":{"pattern":":IP_5mrDzS","name":"compare"},"m2PRsnkFo":{"pattern":":m2PRsnkFo","name":"scroll"}}`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"c2__srr4x":{"layout":["fixed","fixed"]},"e6Sddt6IM":{"layout":["fixed","fixed"]}}}`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Pt as __FramerMetadata__, $ as default, Tt as queryParamNames };
//# sourceMappingURL=0uA8WtGnqRfoHc_lgo0HI00G43Xix_F-EBxgfiFjZLI.pdrCH3bq.mjs.map
