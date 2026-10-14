import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  j as i,
  l as a,
  o,
  p as s,
  s as ee,
  w as te,
  x as ne,
} from "./react.CbTQkvGa.mjs";
import { M as c, i as re, o as ie, t as l } from "./motion.DqePFWeo.mjs";
import {
  A as u,
  D as ae,
  E as oe,
  Et as se,
  H as d,
  I as f,
  K as p,
  Nt as m,
  Ot as ce,
  P as h,
  S as g,
  Tt as le,
  U as _,
  W as v,
  X as y,
  _t as b,
  a as ue,
  bt as de,
  d as x,
  ft as fe,
  gt as pe,
  ht as me,
  i as he,
  jt as S,
  nt as C,
  o as w,
  pt as ge,
  v as _e,
  wt as ve,
  xt as ye,
  yt as be,
} from "./framer.CFgihyWK.mjs";
import {
  a as T,
  c as E,
  d as xe,
  f as D,
  i as Se,
  l as O,
  o as k,
  r as Ce,
  s as we,
  u as A,
} from "./shared-lib.t8-xaOwk.mjs";
import { i as j, n as M, r as N, t as Te } from "./Bh7brll6H.qtsmKJJV.mjs";
import { i as P, n as F, r as Ee, t as De } from "./gk3iglzUb.DiXJMYUN.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./nZtZfLTSW.DMk9jra7.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./Q_3jdt9X6.DkyYpPLX.mjs";
import {
  a as Ie,
  c as Le,
  d as I,
  i as Re,
  l as L,
  n as ze,
  o as Be,
  r as Ve,
  s as He,
  t as Ue,
  u as We,
} from "./Yki2UlU8A.ChUH1oy5.mjs";
import {
  a as Ge,
  i as Ke,
  n as qe,
  o as Je,
  r as Ye,
  t as R,
} from "./m54zGBZ4w.CObtf37r.mjs";
import { i as Xe, n as Ze, r as Qe, t as $e } from "./gSwoAzhaJ.C2ngI3i2.mjs";
import { i as et, n as tt, r as nt, t as rt } from "./uLTHU2gC4.BdjxAb2y.mjs";
import {
  a as it,
  c as at,
  i as ot,
  n as st,
  o as ct,
  r as lt,
  s as ut,
  t as dt,
} from "./E5yNQbQ3n.DcfWS1YV.mjs";
import { i as ft, n as pt } from "./UfMy5xA3O.DWxCQCXX.mjs";
import mt, {
  t as ht,
} from "./hWTNFHSVeArBr911atrQO9ACj7NyQr1f763yrcpjtvU.zc5NKyo2.mjs";
var gt,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  _t,
  vt,
  yt,
  bt,
  xt,
  Z,
  St,
  Q,
  Ct,
  $,
  wt;
e(() => {
  (ee(),
    y(),
    l(),
    r(),
    D(),
    qe(),
    ft(),
    We(),
    j(),
    Je(),
    at(),
    ot(),
    P(),
    Xe(),
    Oe(),
    A(),
    k(),
    Me(),
    Le(),
    et(),
    Re(),
    ht(),
    (gt = d(R)),
    (z = m(w)),
    (B = m(ae)),
    (V = {
      FJVfE25Zm: `(max-width: 809.98px)`,
      n0Wp2SIRE: `(min-width: 1280px)`,
      PlBsBtB29: `(min-width: 810px) and (max-width: 1279.98px)`,
    }),
    (H = []),
    (U = `framer-S789L`),
    (W = {
      FJVfE25Zm: `framer-v-1em88sz`,
      n0Wp2SIRE: `framer-v-dplk2b`,
      PlBsBtB29: `framer-v-1rwhajl`,
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
    (_t = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (vt = { dateStyle: `long`, timeZone: `UTC` }),
    (yt = (e, t) => _t(e, vt, t)),
    (bt = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? t + e
        : typeof e == `string`
          ? e
          : typeof t == `string`
            ? t
            : ``),
    (xt = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (Z = { Desktop: `n0Wp2SIRE`, Phone: `FJVfE25Zm`, Tablet: `PlBsBtB29` }),
    (St = ({ value: e }) =>
      b()
        ? null
        : o(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Q = (e) => ({
      from: { alias: `Jg52n0EKK`, data: pt, type: `Collection` },
      select: [
        { collection: `Jg52n0EKK`, name: `io9BxGAow`, type: `Identifier` },
        { collection: `Jg52n0EKK`, name: `uOuhGTBXQ`, type: `Identifier` },
        { collection: `Jg52n0EKK`, name: `updatedAt`, type: `Identifier` },
      ],
      where: e,
    })),
    (Ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `n0Wp2SIRE`,
    })),
    ($ = S(
      s(function (e, r) {
        let s = ne(null),
          ee = r ?? s,
          l = te(),
          { activeLocale: u, setLocale: ae } = de(),
          d = fe(),
          f = ge(),
          [m] = ve(Q(p(f, `Jg52n0EKK`))),
          _ = (e) => {
            if (!m)
              throw new _e(
                `No data matches path variables: ${JSON.stringify(f)}`,
              );
            return m[e];
          },
          {
            style: v,
            className: y,
            layoutId: b,
            variant: S,
            io9BxGAow: C = _(`io9BxGAow`) ?? ``,
            uOuhGTBXQ: w = _(`uOuhGTBXQ`) ?? ``,
            updatedAt: T = _(`updatedAt`),
            ...E
          } = Ct(e);
        ye(n(() => mt({}, u), [u]));
        let [D, Se] = pe(S, V, !1),
          O = h(U, Ye, we, je, rt, De, $e, Fe, Ce, Te, Ue, dt, Ie, it),
          k = i(x)?.isLayoutTemplate,
          A = !!i(ie)?.transition?.layout,
          j = G(k, A),
          M = le(`vU20a15sy`),
          N = ce();
        se();
        let P = be(),
          F = bt(yt(T, P), `Last updated: `);
        return (
          me({}),
          o(x.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Z,
              primaryVariantId: `n0Wp2SIRE`,
              variantClassNames: W,
            },
            children: a(re, {
              id: b ?? l,
              children: [
                o(St, {
                  value: `html body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0)); }`,
                }),
                a(c.div, {
                  ...E,
                  className: h(O, `framer-dplk2b`, y),
                  ref: ee,
                  style: { ...v },
                  children: [
                    o(c.section, {
                      className: `framer-l4dhbq`,
                      "data-border": !0,
                      "data-framer-name": `Hero`,
                      layout: j,
                      children: o(`div`, {
                        className: `framer-11g2bfx`,
                        "data-framer-name": `content`,
                        children: o(`div`, {
                          className: `framer-jeebcm`,
                          children: o(`div`, {
                            className: `framer-avlzih`,
                            children: a(`div`, {
                              className: `framer-f8mxu7`,
                              id: M,
                              ref: N(M),
                              children: [
                                o(oe, {
                                  links: [
                                    {
                                      href: { webPageId: `jOgyCWBcf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `jOgyCWBcf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `jOgyCWBcf` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    o(g, {
                                      breakpoint: D,
                                      overrides: {
                                        FJVfE25Zm: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                        PlBsBtB29: {
                                          y:
                                            (d?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: o(ue, {
                                        height: 30,
                                        y:
                                          (d?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          180 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                        children: o(z, {
                                          __framer__animate: { transition: q },
                                          __framer__animateOnce: !0,
                                          __framer__enter: K,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-qmsjgt-container`,
                                          nodeId: `AThTEp99r`,
                                          rendersWithMotion: !0,
                                          scopeId: `Jg52n0EKK`,
                                          children: o(g, {
                                            breakpoint: D,
                                            overrides: {
                                              FJVfE25Zm: {
                                                variant: J(`qfOTriuLV`),
                                                wJ9vRU9tl: e[1],
                                              },
                                              PlBsBtB29: {
                                                variant: J(`qfOTriuLV`),
                                                wJ9vRU9tl: e[2],
                                              },
                                            },
                                            children: o(R, {
                                              bwtRC2zWt: `← Back to website`,
                                              cxgg1etFf: !0,
                                              Dh_X3w3jZ: `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                              dMWH0omL8: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                              eaYoGaNwq: {
                                                borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgb(20, 35, 50))`,
                                                borderStyle: `solid`,
                                                borderWidth: 1,
                                              },
                                              GYoEH1GVm: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                              h3fww64y5: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65))`,
                                              height: `100%`,
                                              id: `AThTEp99r`,
                                              layoutId: `AThTEp99r`,
                                              OgEx_2E7P: !1,
                                              pdea6CzDr: xe,
                                              Rtia32FHG: !1,
                                              variant: J(`cGzyTNP1h`),
                                              VvHeeXiqh: !1,
                                              width: `100%`,
                                              wJ9vRU9tl: e[0],
                                              ZGOQT_PfL: `4px 16px 4px 16px`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                a(`div`, {
                                  className: `framer-15qshga`,
                                  children: [
                                    o(g, {
                                      breakpoint: D,
                                      overrides: {
                                        FJVfE25Zm: {
                                          children: o(t, {
                                            children: o(`h1`, {
                                              className: `framer-styles-preset-7hjh4k`,
                                              "data-styles-preset": `bM7WzBkv5`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                              },
                                              children: `Terms of Use`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(B, {
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
                                              "--framer-text-alignment": `center`,
                                              "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                            },
                                            children: `Terms of Use`,
                                          }),
                                        }),
                                        className: `framer-1xiv247`,
                                        fonts: [`Inter`],
                                        text: C,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    o(g, {
                                      breakpoint: D,
                                      overrides: {
                                        FJVfE25Zm: {
                                          children: o(t, {
                                            children: o(`p`, {
                                              className: `framer-styles-preset-1fhxhj6`,
                                              "data-styles-preset": `O0790qsZT`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                              },
                                              children: `Last updated: March 26, 2026`,
                                            }),
                                          }),
                                        },
                                      },
                                      children: o(B, {
                                        __framer__animate: { transition: X },
                                        __framer__animateOnce: !0,
                                        __framer__enter: K,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: o(t, {
                                          children: o(`p`, {
                                            className: `framer-styles-preset-1fhxhj6`,
                                            "data-styles-preset": `O0790qsZT`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `center`,
                                            },
                                            children: `Last updated:`,
                                          }),
                                        }),
                                        className: `framer-rmppug`,
                                        fonts: [`Inter`],
                                        text: o(`time`, {
                                          dateTime: T,
                                          children: F,
                                        }),
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                    o(c.section, {
                      className: `framer-8h4nru`,
                      "data-border": !0,
                      "data-framer-name": `Rich Text`,
                      layout: j,
                      children: o(`div`, {
                        className: `framer-cxvgd8`,
                        "data-framer-name": `container`,
                        children: o(`div`, {
                          className: `framer-1634542`,
                          children: o(he, {
                            presets: {
                              "module:NEd4VmDdsxM3StIUbddO/pRRgk0dcN3gDaE0WpAE7/YouTube.js:Youtube":
                                I.a0nYGZm23,
                              "module:pVk4QsoHxASnVtUBp6jr/ttReBBOK4JjO79S16uu9/CodeBlock.js:default":
                                I.MoKvqzGZv,
                            },
                            children: o(B, {
                              __framer__animate: { transition: xt },
                              __framer__animateOnce: !0,
                              __framer__enter: K,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: w,
                              className: `framer-1mgckzh`,
                              "data-framer-name": `Content`,
                              fonts: [`Inter`],
                              stylesPresetsClassNames: {
                                a: `framer-styles-preset-v2iiak`,
                                blockquote: `framer-styles-preset-ndxpvm`,
                                code: `framer-styles-preset-dxvkw6`,
                                h1: `framer-styles-preset-7hjh4k`,
                                h2: `framer-styles-preset-fahce0`,
                                h3: `framer-styles-preset-u3ga62`,
                                h4: `framer-styles-preset-14zqc8e`,
                                h5: `framer-styles-preset-qfhoqo`,
                                h6: `framer-styles-preset-b70r5p`,
                                img: `framer-styles-preset-5o05jg`,
                                p: `framer-styles-preset-prenqk`,
                                table: `framer-styles-preset-4szdrk`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
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
        `.framer-S789L.framer-16rbod5, .framer-S789L .framer-16rbod5 { display: block; }`,
        `.framer-S789L.framer-dplk2b { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-S789L .framer-l4dhbq { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-11g2bfx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 180px 0px 64px 0px; position: relative; width: 1px; }`,
        `.framer-S789L .framer-jeebcm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-avlzih { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-S789L .framer-f8mxu7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-qmsjgt-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-S789L .framer-15qshga { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-1xiv247 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 560px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-rmppug { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 420px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-8h4nru { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-cxvgd8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: visible; padding: 0px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-1634542 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-S789L .framer-1mgckzh { --framer-paragraph-spacing: 36px; flex: none; height: auto; max-width: 520px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...Ke,
        ...E,
        ...ke,
        ...tt,
        ...F,
        ...Ze,
        ...Ne,
        ...Se,
        ...M,
        ...ze,
        ...st,
        ...Be,
        ...ct,
        `.framer-S789L[data-border="true"]::after, .framer-S789L [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 809.98px) { .framer-S789L.framer-dplk2b { width: 375px; } .framer-S789L .framer-11g2bfx { gap: 36px; max-width: 720px; padding: 120px 0px 36px 0px; } .framer-S789L .framer-f8mxu7 { align-content: flex-start; align-items: flex-start; } .framer-S789L .framer-1xiv247 { max-width: 500px; } .framer-S789L .framer-cxvgd8 { gap: 36px; padding: 0px 0px 80px 0px; } .framer-S789L .framer-1mgckzh { --framer-paragraph-spacing: 32px; }}`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-S789L.framer-dplk2b { width: 810px; } .framer-S789L .framer-11g2bfx { gap: 48px; max-width: 720px; padding: 120px 0px 48px 0px; } .framer-S789L .framer-cxvgd8 { max-width: 720px; }}`,
      ],
      `framer-S789L`,
    )),
    ($.displayName = `Rich Text`),
    ($.defaultProps = { height: 6786, width: 1280 }),
    u(
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
          ],
        },
        ...gt,
        ...v(Ge),
        ...v(O),
        ...v(Ae),
        ...v(nt),
        ...v(Ee),
        ...v(Qe),
        ...v(Pe),
        ...v(T),
        ...v(N),
        ...v(Ve),
        ...v(lt),
        ...v(He),
        ...v(ut),
        ...(L?.MoKvqzGZv ? _(L?.MoKvqzGZv) : []),
        ...(L?.a0nYGZm23 ? _(L?.a0nYGZm23) : []),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([
          C.get(Q(p(t.pathVariables, `Jg52n0EKK`)), n).preload(),
          f(R, {}, t),
        ]);
      },
    }),
    (wt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJg52n0EKK`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1280`,
            framerIntrinsicHeight: `6786`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"vU20a15sy":{"pattern":":vU20a15sy","name":"scroll"}}`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"FJVfE25Zm":{"layout":["fixed","auto"]},"PlBsBtB29":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { wt as __FramerMetadata__, $ as default, H as queryParamNames };
//# sourceMappingURL=FQ3dgCe0WNsbo8ldInn_gtmY5NnoNzVI5aulYS9jwrk.jYeEOSHX.mjs.map
