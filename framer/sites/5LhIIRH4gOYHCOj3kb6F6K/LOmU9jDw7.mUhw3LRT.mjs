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
  w as l,
  x as u,
} from "./react.CbTQkvGa.mjs";
import { M as d, i as f, o as p, t as m } from "./motion.DqePFWeo.mjs";
import {
  A as h,
  At as ee,
  D as g,
  Dt as _,
  E as v,
  Et as y,
  H as b,
  I as x,
  Nt as S,
  O as C,
  P as w,
  W as T,
  X as E,
  a as D,
  bt as O,
  ft as k,
  h as A,
  j,
  jt as M,
  s as N,
  ut as P,
} from "./framer.CFgihyWK.mjs";
import {
  a as te,
  c as F,
  d as I,
  f as L,
  i as R,
  l as z,
  o as ne,
  r as re,
  s as ie,
  u as B,
} from "./shared-lib.t8-xaOwk.mjs";
import { n as ae, t as V } from "./LgNu28hAv.T-w2QUq1.mjs";
import { i as oe, n as se, r as ce, t as le } from "./dvE5DE7ca.DiQM6HA0.mjs";
import { n as ue, t as de } from "./Border_Glow_Card.hHoZa0OP.mjs";
import { n as fe, t as H } from "./Pricing_Number.BkYtWJNt.mjs";
import { i as pe, n as me, r as he, t as ge } from "./uLTHU2gC4.BdjxAb2y.mjs";
var _e,
  ve,
  ye,
  be,
  xe,
  Se,
  U,
  Ce = e(() => {
    (c(),
      E(),
      r(),
      (_e = `var(--framer-icon-mask)`),
      (ve = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ye = d.create(ve)),
      (be = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(ye, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (xe = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 14 M 0 14 L 14 0" fill="transparent" height="14px" id="Bllog1548" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5 5)" width="14px"/></svg>`),
      (Se = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (U = M(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = Se(e),
            u = _(`1358249524`, xe);
          return o(be, {
            ...l,
            className: w(`framer-WaVd3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-WaVd3 { -webkit-mask: ${_e}; aspect-ratio: 1; display: block; mask: ${_e}; width: 24px; }`,
        ],
        `framer-WaVd3`,
      )),
      (U.displayName = `X Close Delete`),
      j(U, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: N.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: N.Number,
        },
      }));
  });
function we(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  W,
  Fe = e(() => {
    (c(),
      E(),
      m(),
      r(),
      fe(),
      (Te = b(H)),
      (Ee = [
        `qJ9Nl_Dp1`,
        `MRgdsduvu`,
        `clc_OKMm2`,
        `FBBPcEd7I`,
        `CVm7lPE1f`,
        `RsC6BUoyu`,
      ]),
      (De = `framer-cyrRh`),
      (Oe = {
        clc_OKMm2: `framer-v-13a1l8p`,
        CVm7lPE1f: `framer-v-1tlv3nm`,
        FBBPcEd7I: `framer-v-11oq5tw`,
        MRgdsduvu: `framer-v-iz2dzw`,
        qJ9Nl_Dp1: `framer-v-wherim`,
        RsC6BUoyu: `framer-v-y6m2fo`,
      }),
      (ke = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ae = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (je = {
        "Desktop Monthly": `MRgdsduvu`,
        "Desktop Yearly": `qJ9Nl_Dp1`,
        "Mobile Montly": `RsC6BUoyu`,
        "Mobile Yearly": `CVm7lPE1f`,
        "Tablet Monthly": `FBBPcEd7I`,
        "Tablet Yearly": `clc_OKMm2`,
      }),
      (Me = d.create(t)),
      (Ne = ({
        color: e,
        durationS: t,
        height: n,
        id: r,
        montly: i,
        prefix: a,
        suffix: o,
        width: s,
        yearly: c,
        ...l
      }) => ({
        ...l,
        b87q8DydE: c ?? l.b87q8DydE ?? 19,
        fioz4RPHv: t ?? l.fioz4RPHv ?? 0.6,
        QhpKq63bo:
          e ??
          l.QhpKq63bo ??
          `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
        rBEAL3VOd: o ?? l.rBEAL3VOd,
        UQQvQjowu: a ?? l.UQQvQjowu ?? `$`,
        variant: je[l.variant] ?? l.variant ?? `qJ9Nl_Dp1`,
        xYsEOirX6: i ?? l.xYsEOirX6 ?? 49,
      })),
      (Pe = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (W = M(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: s } = O();
          k();
          let {
              style: c,
              className: p,
              layoutId: m,
              variant: h,
              b87q8DydE: g,
              xYsEOirX6: _,
              UQQvQjowu: v,
              rBEAL3VOd: y,
              fioz4RPHv: b,
              QhpKq63bo: x,
              ...S
            } = Ne(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: te,
              variants: F,
            } = ee({
              cycleOrder: Ee,
              defaultVariant: `qJ9Nl_Dp1`,
              ref: r,
              variant: h,
              variantClassNames: Oe,
            }),
            I = Pe(e, F),
            L = w(De);
          return o(f, {
            id: m ?? i,
            children: o(Me, {
              animate: F,
              initial: !1,
              children: o(Ae, {
                value: ke,
                children: o(d.div, {
                  ...S,
                  ...j,
                  className: w(L, `framer-wherim`, p, E),
                  "data-framer-name": `Desktop Yearly`,
                  layoutDependency: I,
                  layoutId: `qJ9Nl_Dp1`,
                  ref: r,
                  style: { ...c },
                  ...we(
                    {
                      clc_OKMm2: { "data-framer-name": `Tablet Yearly` },
                      CVm7lPE1f: { "data-framer-name": `Mobile Yearly` },
                      FBBPcEd7I: { "data-framer-name": `Tablet Monthly` },
                      MRgdsduvu: { "data-framer-name": `Desktop Monthly` },
                      RsC6BUoyu: { "data-framer-name": `Mobile Montly` },
                    },
                    T,
                    M,
                  ),
                  children: o(D, {
                    children: o(C, {
                      className: `framer-kyryl2-container`,
                      isAuthoredByUser: !0,
                      layoutDependency: I,
                      layoutId: `wv5AcJvTs-container`,
                      nodeId: `wv5AcJvTs`,
                      rendersWithMotion: !0,
                      scopeId: `Xvb7vjqIm`,
                      children: o(H, {
                        appearDuration: 1.2,
                        color: x,
                        duration: b,
                        font: {
                          fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                          fontSize: `36px`,
                          fontStyle: `normal`,
                          fontWeight: 400,
                          letterSpacing: `-0.02em`,
                          lineHeight: `1.35em`,
                        },
                        height: `100%`,
                        id: `wv5AcJvTs`,
                        layoutId: `wv5AcJvTs`,
                        prefix: v,
                        prefixColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                        suffix: y,
                        suffixColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                        value: g,
                        width: `100%`,
                        ...we(
                          {
                            clc_OKMm2: {
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `32px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `-0.02em`,
                                lineHeight: `1.35em`,
                              },
                            },
                            CVm7lPE1f: {
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `28px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `-0.02em`,
                                lineHeight: `1.35em`,
                              },
                            },
                            FBBPcEd7I: {
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `32px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `-0.02em`,
                                lineHeight: `1.35em`,
                              },
                              value: _,
                            },
                            MRgdsduvu: { value: _ },
                            RsC6BUoyu: {
                              font: {
                                fontFamily: `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                fontSize: `28px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `-0.02em`,
                                lineHeight: `1.35em`,
                              },
                              value: _,
                            },
                          },
                          T,
                          M,
                        ),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-cyrRh.framer-15pczr3, .framer-cyrRh .framer-15pczr3 { display: block; }`,
          `.framer-cyrRh.framer-wherim { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-cyrRh .framer-kyryl2-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-cyrRh`,
      )),
      (W.displayName = `Animated Price Switch`),
      (W.defaultProps = { height: 48.5, width: 54 }),
      j(W, {
        variant: {
          options: [
            `qJ9Nl_Dp1`,
            `MRgdsduvu`,
            `clc_OKMm2`,
            `FBBPcEd7I`,
            `CVm7lPE1f`,
            `RsC6BUoyu`,
          ],
          optionTitles: [
            `Desktop Yearly`,
            `Desktop Monthly`,
            `Tablet Yearly`,
            `Tablet Monthly`,
            `Mobile Yearly`,
            `Mobile Montly`,
          ],
          title: `Variant`,
          type: N.Enum,
        },
        b87q8DydE: {
          defaultValue: 19,
          max: 9999,
          min: 0,
          title: `Yearly`,
          type: N.Number,
        },
        onb87q8DydEChange: { changes: `b87q8DydE`, type: N.ChangeHandler },
        xYsEOirX6: {
          defaultValue: 49,
          max: 9999,
          min: 0,
          title: `Montly`,
          type: N.Number,
        },
        onxYsEOirX6Change: { changes: `xYsEOirX6`, type: N.ChangeHandler },
        UQQvQjowu: { defaultValue: `$`, title: `Prefix`, type: N.String },
        onUQQvQjowuChange: { changes: `UQQvQjowu`, type: N.ChangeHandler },
        rBEAL3VOd: { defaultValue: ``, title: `Suffix`, type: N.String },
        onrBEAL3VOdChange: { changes: `rBEAL3VOd`, type: N.ChangeHandler },
        fioz4RPHv: {
          defaultValue: 0.6,
          max: 2,
          min: 0.1,
          step: 0.1,
          title: `Duration S`,
          type: N.Number,
        },
        onfioz4RPHvChange: { changes: `fioz4RPHv`, type: N.ChangeHandler },
        QhpKq63bo: {
          defaultValue: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)) /* {"name":"Text 100"} */`,
          title: `Color`,
          type: N.Color,
        },
      }),
      h(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `/test/framer/assets/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `/test/framer/assets/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `/test/framer/assets/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `/test/framer/assets/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `/test/framer/assets/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `/test/framer/assets/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `/test/framer/assets/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Te,
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue = e(() => {
    (c(),
      E(),
      r(),
      (Ie = `var(--framer-icon-mask)`),
      (Le = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Re = d.create(Le)),
      (ze = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(Re, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Be = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 6 L 6 12 L 18 0" fill="transparent" height="12px" id="KVyKpRjev" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 6)" width="18px"/></svg>`),
      (Ve = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (He = M(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = Ve(e),
            u = _(`1839610128`, Be);
          return o(ze, {
            ...l,
            className: w(`framer-MO1L3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-MO1L3 { -webkit-mask: ${Ie}; aspect-ratio: 1; display: block; mask: ${Ie}; width: 24px; }`,
        ],
        `framer-MO1L3`,
      )),
      (He.displayName = `Check Good`),
      j(He, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: N.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: N.Number,
        },
      }));
  });
function We(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  G,
  et = e(() => {
    (c(),
      E(),
      m(),
      r(),
      Ue(),
      Ce(),
      (Ge = [`pG7L_WqgX`, `BVJGe8J_p`]),
      (Ke = `framer-pg0ED`),
      (qe = { BVJGe8J_p: `framer-v-1766y2z`, pG7L_WqgX: `framer-v-s8uxi` }),
      (Je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ye = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (Xe = { "Check Light": `BVJGe8J_p`, "No Check": `pG7L_WqgX` }),
      (Ze = d.create(t)),
      (Qe = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Xe[r.variant] ?? r.variant ?? `pG7L_WqgX`,
      })),
      ($e = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (G = M(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: s } = O();
          k();
          let { style: c, className: p, layoutId: m, variant: h, ...g } = Qe(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: T,
              variants: E,
            } = ee({
              cycleOrder: Ge,
              defaultVariant: `pG7L_WqgX`,
              ref: r,
              variant: h,
              variantClassNames: qe,
            }),
            D = $e(e, E),
            j = w(Ke);
          return o(f, {
            id: m ?? i,
            children: o(Ze, {
              animate: E,
              initial: !1,
              children: o(Ye, {
                value: Je,
                children: o(d.div, {
                  ...g,
                  ...b,
                  className: w(j, `framer-s8uxi`, p, v),
                  "data-framer-name": `No Check`,
                  layoutDependency: D,
                  layoutId: `pG7L_WqgX`,
                  ref: r,
                  style: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...c,
                  },
                  variants: {
                    BVJGe8J_p: {
                      backgroundColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                      borderBottomLeftRadius: 880,
                      borderBottomRightRadius: 880,
                      borderTopLeftRadius: 880,
                      borderTopRightRadius: 880,
                    },
                  },
                  ...We(
                    { BVJGe8J_p: { "data-framer-name": `Check Light` } },
                    _,
                    x,
                  ),
                  children: o(A, {
                    animated: !0,
                    className: `framer-pnom0e`,
                    Component: U,
                    layoutDependency: D,
                    layoutId: `G8UqtzSj3`,
                    style: {
                      "--1ww558a": 2,
                      "--4rxgx6": `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                    },
                    variants: {
                      BVJGe8J_p: {
                        "--4rxgx6": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                      },
                    },
                    ...We({ BVJGe8J_p: { Component: He } }, _, x),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-pg0ED.framer-1lxmnq2, .framer-pg0ED .framer-1lxmnq2 { display: block; }`,
          `.framer-pg0ED.framer-s8uxi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 21px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 21px; }`,
          `.framer-pg0ED .framer-pnom0e { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 14px; }`,
          `.framer-pg0ED.framer-v-1766y2z.framer-s8uxi { will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-pg0ED`,
      )),
      (G.displayName = `Checkmark`),
      (G.defaultProps = { height: 21, width: 21 }),
      j(G, {
        variant: {
          options: [`pG7L_WqgX`, `BVJGe8J_p`],
          optionTitles: [`No Check`, `Check Light`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      h(G, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function tt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  K,
  _t = e(() => {
    (c(),
      E(),
      m(),
      r(),
      B(),
      et(),
      (nt = b(G)),
      (rt = [`F4gDFkigA`, `vq09Dmf5j`, `cOi6yPk8e`]),
      (it = `framer-rCilx`),
      (at = {
        cOi6yPk8e: `framer-v-137bekw`,
        F4gDFkigA: `framer-v-fiup9b`,
        vq09Dmf5j: `framer-v-1dm466k`,
      }),
      (ot = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (st = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ct = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (lt = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (ut = (e) => !e),
      (dt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (ft = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (pt = { "Text Only": `F4gDFkigA`, Check: `vq09Dmf5j`, X: `cOi6yPk8e` }),
      (mt = d.create(t)),
      (ht = ({
        border: e,
        height: t,
        id: n,
        padding: r,
        showTitle: i,
        title: a,
        value: o,
        width: s,
        ...c
      }) => ({
        ...c,
        DXtiLHcoU: o ?? c.DXtiLHcoU ?? `Up to 3`,
        IsnRU0dVs: a ?? c.IsnRU0dVs,
        QTM4ITCYc: i ?? c.QTM4ITCYc,
        UpWqDq7T6: e ??
          c.UpWqDq7T6 ?? {
            borderBottomWidth: 1,
            borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)) /* {"name":"Border"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        variant: pt[c.variant] ?? c.variant ?? `F4gDFkigA`,
        yEK4cBzgR: r ?? c.yEK4cBzgR ?? `20px 36px 20px 36px`,
      })),
      (gt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (K = M(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            s = l(),
            { activeLocale: c, setLocale: p } = O();
          k();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: v,
              DXtiLHcoU: y,
              IsnRU0dVs: b,
              QTM4ITCYc: x,
              yEK4cBzgR: S,
              UpWqDq7T6: T,
              ...E
            } = ht(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: te,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = ee({
              cycleOrder: rt,
              defaultVariant: `F4gDFkigA`,
              ref: i,
              variant: v,
              variantClassNames: at,
            }),
            R = gt(e, L),
            z = w(it, ie),
            ne = () => !![`vq09Dmf5j`, `cOi6yPk8e`].includes(A),
            re = (e) => ![`vq09Dmf5j`, `cOi6yPk8e`].includes(A) && e,
            B = lt(lt(y, `: `), b),
            ae = ut(x),
            V = dt(y),
            oe = (e, t) => (A === `cOi6yPk8e` ? t : e),
            se = (e) => ([`vq09Dmf5j`, `cOi6yPk8e`].includes(A) ? e : !1),
            ce = ut(dt(y));
          return o(f, {
            id: _ ?? s,
            children: o(mt, {
              animate: L,
              initial: !1,
              children: o(ft, {
                value: st,
                children: a(d.div, {
                  ...E,
                  ...N,
                  className: w(z, `framer-fiup9b`, h, j),
                  "data-border": !0,
                  "data-framer-name": `Text Only`,
                  layoutDependency: R,
                  layoutId: `F4gDFkigA`,
                  ref: i,
                  style: {
                    "--19tqfgx": ot(S),
                    "--border-bottom-width":
                      (T?.borderBottomWidth ?? T?.borderWidth) + `px`,
                    "--border-color": T?.borderColor,
                    "--border-left-width":
                      (T?.borderLeftWidth ?? T?.borderWidth) + `px`,
                    "--border-right-width":
                      (T?.borderRightWidth ?? T?.borderWidth) + `px`,
                    "--border-style": T?.borderStyle,
                    "--border-top-width":
                      (T?.borderTopWidth ?? T?.borderWidth) + `px`,
                    ...m,
                  },
                  ...tt(
                    {
                      cOi6yPk8e: { "data-framer-name": `X` },
                      vq09Dmf5j: { "data-framer-name": `Check` },
                    },
                    A,
                    P,
                  ),
                  children: [
                    ne() &&
                      o(D, {
                        ...tt(
                          {
                            cOi6yPk8e: { height: 21 },
                            vq09Dmf5j: { height: 21 },
                          },
                          A,
                          P,
                        ),
                        children: o(C, {
                          className: `framer-ju1rr1-container`,
                          layoutDependency: R,
                          layoutId: `B4Nu3THFC-container`,
                          nodeId: `B4Nu3THFC`,
                          rendersWithMotion: !0,
                          scopeId: `NjWPaPAj3`,
                          children: o(G, {
                            height: `100%`,
                            id: `B4Nu3THFC`,
                            layoutId: `B4Nu3THFC`,
                            variant: ct(`pG7L_WqgX`),
                            width: `100%`,
                            ...tt(
                              { vq09Dmf5j: { variant: ct(`BVJGe8J_p`) } },
                              A,
                              P,
                            ),
                          }),
                        }),
                      }),
                    a(d.div, {
                      className: `framer-1gbof3v`,
                      layoutDependency: R,
                      layoutId: `vnWU5vvNh`,
                      children: [
                        re(x !== !1) &&
                          o(g, {
                            __fromCanvasComponent: !0,
                            children: o(t, {
                              children: o(d.p, {
                                className: `framer-styles-preset-1fhxhj6`,
                                "data-styles-preset": `O0790qsZT`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `left` },
                                children: o(d.strong, {
                                  children: `: Up to 3`,
                                }),
                              }),
                            }),
                            className: `framer-1ikqfw3`,
                            "data-framer-name": `Feature + Value`,
                            fonts: [`Inter`, `Inter-Bold`],
                            layoutDependency: R,
                            layoutId: `NmqpBvTFb`,
                            style: { "--framer-paragraph-spacing": `18px` },
                            text: B,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        oe(ae !== !1, V !== !1) &&
                          o(g, {
                            __fromCanvasComponent: !0,
                            children: o(t, {
                              children: o(d.p, {
                                className: `framer-styles-preset-1fhxhj6`,
                                "data-styles-preset": `O0790qsZT`,
                                dir: `auto`,
                                style: { "--framer-text-alignment": `left` },
                                children: o(d.strong, { children: `: ` }),
                              }),
                            }),
                            className: `framer-1vk8xzh`,
                            "data-framer-name": `Value`,
                            fonts: [`Inter`, `Inter-Bold`],
                            layoutDependency: R,
                            layoutId: `A_vvxqOHp`,
                            style: { "--framer-paragraph-spacing": `18px` },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        se(x !== !1) &&
                          a(d.div, {
                            className: `framer-1hcjtho`,
                            "data-framer-name": `Check Feature`,
                            layoutDependency: R,
                            layoutId: `RSMAT7CwH`,
                            children: [
                              ce !== !1 &&
                                o(g, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(d.p, {
                                      className: `framer-styles-preset-1fhxhj6`,
                                      "data-styles-preset": `O0790qsZT`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: o(d.strong, { children: `: ` }),
                                    }),
                                  }),
                                  className: `framer-1b515n`,
                                  "data-framer-name": `Feature`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  layoutDependency: R,
                                  layoutId: `bIbnXaB1E`,
                                  style: {
                                    "--framer-paragraph-spacing": `18px`,
                                  },
                                  text: b,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              V !== !1 &&
                                o(g, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(d.p, {
                                      className: `framer-styles-preset-1fhxhj6`,
                                      "data-styles-preset": `O0790qsZT`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                      },
                                      children: o(d.strong, { children: `: ` }),
                                    }),
                                  }),
                                  className: `framer-184l85v`,
                                  "data-framer-name": `Feature + Value`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  layoutDependency: R,
                                  layoutId: `i_p8QFiSY`,
                                  style: {
                                    "--framer-paragraph-spacing": `18px`,
                                  },
                                  text: B,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
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
          `.framer-rCilx.framer-1imv5td, .framer-rCilx .framer-1imv5td { display: block; }`,
          `.framer-rCilx.framer-fiup9b { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1228px; overflow: visible; padding: var(--19tqfgx); position: relative; width: 253px; }`,
          `.framer-rCilx .framer-ju1rr1-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-rCilx .framer-1gbof3v { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-rCilx .framer-1ikqfw3, .framer-rCilx .framer-1vk8xzh, .framer-rCilx .framer-1b515n, .framer-rCilx .framer-184l85v { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-rCilx .framer-1hcjtho { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-rCilx.framer-v-1dm466k.framer-fiup9b, .framer-rCilx.framer-v-137bekw.framer-fiup9b { gap: 12px; justify-content: flex-start; }`,
          `.framer-rCilx.framer-v-1dm466k .framer-1gbof3v, .framer-rCilx.framer-v-137bekw .framer-1gbof3v { gap: 4px; }`,
          `.framer-rCilx.framer-v-1dm466k .framer-1vk8xzh, .framer-rCilx.framer-v-137bekw .framer-1vk8xzh { order: 0; }`,
          `.framer-rCilx.framer-v-1dm466k .framer-1hcjtho, .framer-rCilx.framer-v-137bekw .framer-1hcjtho { order: 1; }`,
          ...F,
          `.framer-rCilx[data-border="true"]::after, .framer-rCilx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-rCilx`,
      )),
      (K.displayName = `Table Value`),
      (K.defaultProps = { height: 61, width: 253 }),
      j(K, {
        variant: {
          options: [`F4gDFkigA`, `vq09Dmf5j`, `cOi6yPk8e`],
          optionTitles: [`Text Only`, `Check`, `X`],
          title: `Variant`,
          type: N.Enum,
        },
        DXtiLHcoU: {
          defaultValue: `Up to 3`,
          displayTextArea: !1,
          title: `Value`,
          type: N.String,
        },
        onDXtiLHcoUChange: { changes: `DXtiLHcoU`, type: N.ChangeHandler },
        IsnRU0dVs: {
          defaultValue: ``,
          placeholder: `Users`,
          title: `Title`,
          type: N.String,
        },
        onIsnRU0dVsChange: { changes: `IsnRU0dVs`, type: N.ChangeHandler },
        QTM4ITCYc: { defaultValue: !1, title: `Show Title`, type: N.Boolean },
        onQTM4ITCYcChange: { changes: `QTM4ITCYc`, type: N.ChangeHandler },
        yEK4cBzgR: {
          defaultValue: `20px 36px 20px 36px`,
          title: `Padding`,
          type: N.Padding,
        },
        UpWqDq7T6: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)) /* {"name":"Border"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: N.Border,
        },
      }),
      h(
        K,
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
          ...nt,
          ...T(z),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      (K.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([x(G, {}, t)])),
      }));
  });
function vt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  q,
  Ot = e(() => {
    (c(),
      E(),
      m(),
      r(),
      (yt = [`Js1GF3vTG`, `iNABZRdK2`]),
      (bt = `framer-QhUXS`),
      (xt = { iNABZRdK2: `framer-v-1biiw61`, Js1GF3vTG: `framer-v-k8mx9c` }),
      (St = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ct = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (wt = { Off: `iNABZRdK2`, On: `Js1GF3vTG` }),
      (Tt = d.create(t)),
      (Et = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        oeZcsGgYt: e ?? i.oeZcsGgYt,
        variant: wt[i.variant] ?? i.variant ?? `Js1GF3vTG`,
      })),
      (Dt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (q = M(
        s(function (e, t) {
          let n = u(null),
            r = t ?? n,
            i = l(),
            { activeLocale: a, setLocale: s } = O();
          k();
          let {
              style: c,
              className: p,
              layoutId: m,
              variant: h,
              oeZcsGgYt: g,
              ..._
            } = Et(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = ee({
              cycleOrder: yt,
              defaultVariant: `Js1GF3vTG`,
              ref: r,
              variant: h,
              variantClassNames: xt,
            }),
            A = Dt(e, D),
            { activeVariantCallback: j, delay: M } = P(v),
            N = j(async (...e) => {
              if ((T({ isPressed: !1 }), g && (await g(...e)) === !1))
                return !1;
            }),
            te = w(bt);
          return o(f, {
            id: m ?? i,
            children: o(Tt, {
              animate: D,
              initial: !1,
              children: o(Ct, {
                value: St,
                children: o(d.div, {
                  ..._,
                  ...x,
                  className: w(te, `framer-k8mx9c`, p, y),
                  "data-border": !0,
                  "data-framer-name": `On`,
                  "data-highlight": !0,
                  layoutDependency: A,
                  layoutId: `Js1GF3vTG`,
                  onTap: N,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-666d339b-7d60-4b7a-abe3-01853a672031, rgb(2, 145, 150))`,
                    borderBottomLeftRadius: 804,
                    borderBottomRightRadius: 804,
                    borderTopLeftRadius: 804,
                    borderTopRightRadius: 804,
                    ...c,
                  },
                  variants: {
                    iNABZRdK2: {
                      backgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                    },
                  },
                  ...vt({ iNABZRdK2: { "data-framer-name": `Off` } }, v, S),
                  children: o(d.div, {
                    className: `framer-76pmax`,
                    "data-border": !0,
                    layoutDependency: A,
                    layoutId: `JRdUArYNq`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                      borderBottomLeftRadius: 776,
                      borderBottomRightRadius: 776,
                      borderTopLeftRadius: 776,
                      borderTopRightRadius: 776,
                    },
                    variants: {
                      iNABZRdK2: {
                        backgroundColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                      },
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-QhUXS.framer-15xy5ec, .framer-QhUXS .framer-15xy5ec { display: block; }`,
          `.framer-QhUXS.framer-k8mx9c { cursor: pointer; height: 18px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QhUXS .framer-76pmax { flex: none; height: 12px; left: 21px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 12px / 2); width: 12px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QhUXS.framer-v-1biiw61 .framer-76pmax { left: 3px; }`,
          `.framer-QhUXS[data-border="true"]::after, .framer-QhUXS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-QhUXS`,
      )),
      (q.displayName = `Pricing Switch`),
      (q.defaultProps = { height: 18, width: 36 }),
      j(q, {
        variant: {
          options: [`Js1GF3vTG`, `iNABZRdK2`],
          optionTitles: [`On`, `Off`],
          title: `Variant`,
          type: N.Enum,
        },
        oeZcsGgYt: { title: `Click`, type: N.EventHandler },
      }),
      h(q, [{ explicitInter: !0, fonts: [] }], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kt,
  Y,
  At,
  jt,
  Mt,
  X,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  Z,
  zt,
  Bt,
  Vt,
  Ht,
  Q,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  $,
  Yt = e(() => {
    (c(),
      E(),
      m(),
      r(),
      L(),
      ue(),
      oe(),
      B(),
      ne(),
      pe(),
      ae(),
      _t(),
      Ot(),
      Fe(),
      (kt = b(de)),
      (Y = S(g)),
      (At = b(V)),
      (jt = S(C)),
      (Mt = b(K)),
      (X = S(d.div)),
      (Nt = b(q)),
      (Pt = b(W)),
      (Ft = [
        `lkCEJd_yl`,
        `Abiy5bkiE`,
        `zdhQ7paXI`,
        `Otlu_WNq9`,
        `PhsqtEgn4`,
        `krDaVoIGm`,
      ]),
      (It = `framer-fqY5H`),
      (Lt = {
        Abiy5bkiE: `framer-v-1t3q6ox`,
        krDaVoIGm: `framer-v-1v6suq8`,
        lkCEJd_yl: `framer-v-2972yt`,
        Otlu_WNq9: `framer-v-t3vrzj`,
        PhsqtEgn4: `framer-v-1yevq9h`,
        zdhQ7paXI: `framer-v-f24sm1`,
      }),
      (Rt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Z = {
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
      (zt = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
      (Bt = { bounce: 0.2, delay: 0.2, duration: 1, type: `spring` }),
      (Vt = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
      (Ht = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ut = { bounce: 0, delay: 0.4, duration: 1, type: `spring` }),
      (Wt = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (Gt = {
        "Desktop Monthly": `zdhQ7paXI`,
        "Mobile Monthly": `Otlu_WNq9`,
        "Tablet Stack Monthly": `krDaVoIGm`,
        "Tablet Stack Yearly": `PhsqtEgn4`,
        Desktop: `lkCEJd_yl`,
        Mobile: `Abiy5bkiE`,
      }),
      (Kt = d.create(t)),
      (qt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Gt[r.variant] ?? r.variant ?? `lkCEJd_yl`,
      })),
      (Jt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      ($ = M(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            s = l(),
            { activeLocale: c, setLocale: p } = O(),
            m = k(),
            { style: h, className: _, layoutId: b, variant: x, ...S } = qt(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: te,
              setVariant: F,
              variants: L,
            } = ee({
              cycleOrder: Ft,
              defaultVariant: `lkCEJd_yl`,
              ref: i,
              variant: x,
              variantClassNames: Lt,
            }),
            R = Jt(e, L),
            { activeVariantCallback: z, delay: ne } = P(T),
            B = z(async (...e) => {
              F(`zdhQ7paXI`);
            }),
            ae = z(async (...e) => {
              F(`Otlu_WNq9`);
            }),
            oe = z(async (...e) => {
              F(`lkCEJd_yl`);
            }),
            se = z(async (...e) => {
              F(`Abiy5bkiE`);
            }),
            ce = z(async (...e) => {
              F(`krDaVoIGm`);
            }),
            ue = z(async (...e) => {
              F(`PhsqtEgn4`);
            }),
            fe = w(It, le, ge, ie, re),
            H = () => ![`Abiy5bkiE`, `Otlu_WNq9`].includes(T);
          return (
            y(),
            o(f, {
              id: b ?? s,
              children: o(Kt, {
                animate: L,
                initial: !1,
                children: o(Wt, {
                  value: Rt,
                  children: a(d.div, {
                    ...S,
                    ...j,
                    className: w(fe, `framer-2972yt`, _, E),
                    "data-framer-name": `Desktop`,
                    layoutDependency: R,
                    layoutId: `lkCEJd_yl`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                      ...h,
                    },
                    variants: {
                      Abiy5bkiE: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      krDaVoIGm: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      Otlu_WNq9: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                      PhsqtEgn4: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                      zdhQ7paXI: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                      },
                    },
                    ...J(
                      {
                        Abiy5bkiE: {
                          "data-border": !0,
                          "data-framer-name": `Mobile`,
                        },
                        krDaVoIGm: {
                          "data-framer-name": `Tablet Stack Monthly`,
                        },
                        Otlu_WNq9: {
                          "data-border": !0,
                          "data-framer-name": `Mobile Monthly`,
                        },
                        PhsqtEgn4: {
                          "data-framer-name": `Tablet Stack Yearly`,
                        },
                        zdhQ7paXI: { "data-framer-name": `Desktop Monthly` },
                      },
                      T,
                      M,
                    ),
                    children: [
                      H() &&
                        o(D, {
                          children: o(C, {
                            className: `framer-1kbxrjn-container`,
                            isAuthoredByUser: !0,
                            layoutDependency: R,
                            layoutId: `XsXGUPswH-container`,
                            nodeId: `XsXGUPswH`,
                            rendersWithMotion: !0,
                            scopeId: `LOmU9jDw7`,
                            children: o(de, {
                              baseBorderColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                              borderRadius: 24,
                              borderWidth: 1,
                              bottomLeft: 24,
                              bottomRight: 24,
                              cardBackground: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                              glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                              height: `100%`,
                              id: `XsXGUPswH`,
                              isMixed: !1,
                              layoutId: `XsXGUPswH`,
                              proximity: 490,
                              smoothing: 0.05,
                              style: { height: `100%`, width: `100%` },
                              topLeft: 24,
                              topRight: 24,
                              width: `100%`,
                            }),
                          }),
                        }),
                      H() &&
                        o(D, {
                          children: o(C, {
                            className: `framer-wwxqzw-container`,
                            isAuthoredByUser: !0,
                            layoutDependency: R,
                            layoutId: `DzeM8025c-container`,
                            nodeId: `DzeM8025c`,
                            rendersWithMotion: !0,
                            scopeId: `LOmU9jDw7`,
                            children: o(de, {
                              baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                              borderRadius: 16,
                              borderWidth: 1,
                              bottomLeft: 16,
                              bottomRight: 16,
                              cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                              glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                              height: `100%`,
                              id: `DzeM8025c`,
                              isMixed: !1,
                              layoutId: `DzeM8025c`,
                              proximity: 490,
                              smoothing: 0.05,
                              style: { height: `100%`, width: `100%` },
                              topLeft: 16,
                              topRight: 16,
                              width: `100%`,
                            }),
                          }),
                        }),
                      a(d.div, {
                        className: `framer-67zyla`,
                        layoutDependency: R,
                        layoutId: `Lt_crxhgC`,
                        children: [
                          a(d.div, {
                            className: `framer-9ycufv`,
                            layoutDependency: R,
                            layoutId: `PjW8fC8Oi`,
                            children: [
                              a(d.div, {
                                className: `framer-1grz4q3`,
                                layoutDependency: R,
                                layoutId: `eo2UMTycz`,
                                children: [
                                  o(d.div, {
                                    className: `framer-1jg45bd`,
                                    "data-border": !0,
                                    layoutDependency: R,
                                    layoutId: `e9tM2x9Ju`,
                                    style: {
                                      "--border-bottom-width": `1px`,
                                      "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      "--border-left-width": `0px`,
                                      "--border-right-width": `0px`,
                                      "--border-style": `solid`,
                                      "--border-top-width": `0px`,
                                    },
                                    children: o(Y, {
                                      __framer__animate: { transition: zt },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Z,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      children: o(t, {
                                        children: o(d.p, {
                                          className: `framer-styles-preset-10qv886`,
                                          "data-styles-preset": `dvE5DE7ca`,
                                          dir: `auto`,
                                          children: o(d.strong, {
                                            children: `STARTER`,
                                          }),
                                        }),
                                      }),
                                      className: `framer-bcdizg`,
                                      fonts: [`Inter`, `Inter-Bold`],
                                      layoutDependency: R,
                                      layoutId: `n6J4Iixy0`,
                                      style: {
                                        "--framer-paragraph-spacing": `18px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  a(d.div, {
                                    className: `framer-1ce7l1x`,
                                    layoutDependency: R,
                                    layoutId: `yGwUE5HZ_`,
                                    children: [
                                      o(Y, {
                                        __framer__animate: { transition: Bt },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        children: o(t, {
                                          children: o(d.h3, {
                                            className: `framer-styles-preset-u3ga62`,
                                            "data-styles-preset": `uLTHU2gC4`,
                                            dir: `auto`,
                                            children: `Free`,
                                          }),
                                        }),
                                        className: `framer-yaq6fq`,
                                        fonts: [`Inter`],
                                        layoutDependency: R,
                                        layoutId: `w1VyuDh7x`,
                                        style: {
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      o(Y, {
                                        __framer__animate: { transition: Vt },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        children: o(t, {
                                          children: o(d.p, {
                                            className: `framer-styles-preset-1fhxhj6`,
                                            "data-styles-preset": `O0790qsZT`,
                                            dir: `auto`,
                                            children: `For small teams getting started with AI support.`,
                                          }),
                                        }),
                                        className: `framer-1cz016w`,
                                        fonts: [`Inter`],
                                        layoutDependency: R,
                                        layoutId: `TMxikDqTu`,
                                        style: {
                                          "--framer-paragraph-spacing": `18px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o(v, {
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
                                  o(D, {
                                    height: 48,
                                    y: (m?.y || 0) + 0 + 0 + 0 + 36 + 327.6,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            (((m?.height || 200) - 0 - 2624.6) /
                                              2 +
                                              0 +
                                              0) +
                                            0 +
                                            0 +
                                            36 +
                                            327.6,
                                        },
                                        krDaVoIGm: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            28 +
                                            327.6,
                                        },
                                        Otlu_WNq9: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            (((m?.height || 200) - 0 - 2624.6) /
                                              2 +
                                              0 +
                                              0) +
                                            0 +
                                            0 +
                                            36 +
                                            327.6,
                                        },
                                        PhsqtEgn4: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            28 +
                                            327.6,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                    children: o(jt, {
                                      __framer__animate: { transition: Ht },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Z,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-1m63zhl-container`,
                                      layoutDependency: R,
                                      layoutId: `zarGjLcWz-container`,
                                      nodeId: `zarGjLcWz`,
                                      rendersWithMotion: !0,
                                      scopeId: `LOmU9jDw7`,
                                      children: o(V, {
                                        BANE331ww: !1,
                                        FWKDMXbN2: e[0],
                                        height: `100%`,
                                        id: `zarGjLcWz`,
                                        layoutId: `zarGjLcWz`,
                                        mYjHZJ6Gn: `Get Started`,
                                        p8v7WNQPZ: I,
                                        variant: Q(`cNdVluHs7`),
                                        width: `100%`,
                                        YkfrxUoaP: !1,
                                        ...J(
                                          {
                                            Abiy5bkiE: { FWKDMXbN2: e[1] },
                                            krDaVoIGm: { FWKDMXbN2: e[5] },
                                            Otlu_WNq9: { FWKDMXbN2: e[3] },
                                            PhsqtEgn4: { FWKDMXbN2: e[4] },
                                            zdhQ7paXI: { FWKDMXbN2: e[2] },
                                          },
                                          T,
                                          M,
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          a(X, {
                            __framer__animate: { transition: Ut },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1t9f2y1`,
                            layoutDependency: R,
                            layoutId: `GwpYlng7r`,
                            children: [
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 0,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        0,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 0,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        0,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 0,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1oi5y7s-container`,
                                  layoutDependency: R,
                                  layoutId: `gNbMHHwEi-container`,
                                  nodeId: `gNbMHHwEi`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `Up to 3`,
                                    height: `100%`,
                                    id: `gNbMHHwEi`,
                                    IsnRU0dVs: `Team members`,
                                    layoutId: `gNbMHHwEi`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 61,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        61,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 61,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        61,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 61,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-mu9wvz-container`,
                                  layoutDependency: R,
                                  layoutId: `iAt0lsKuD-container`,
                                  nodeId: `iAt0lsKuD`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `200`,
                                    height: `100%`,
                                    id: `iAt0lsKuD`,
                                    IsnRU0dVs: `AI queries / mo`,
                                    layoutId: `iAt0lsKuD`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 122,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        122,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 122,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        122,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 122,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-5xjyz9-container`,
                                  layoutDependency: R,
                                  layoutId: `h_jdiW0HS-container`,
                                  nodeId: `h_jdiW0HS`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `2`,
                                    height: `100%`,
                                    id: `h_jdiW0HS`,
                                    IsnRU0dVs: `Integrations`,
                                    layoutId: `h_jdiW0HS`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 183,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        183,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 183,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        183,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 183,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-nat5er-container`,
                                  layoutDependency: R,
                                  layoutId: `nAa1Xa36Y-container`,
                                  nodeId: `nAa1Xa36Y`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `nAa1Xa36Y`,
                                    IsnRU0dVs: `Source attribution`,
                                    layoutId: `nAa1Xa36Y`,
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
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 244,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        244,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 244,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        244,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 244,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-158kb68-container`,
                                  layoutDependency: R,
                                  layoutId: `KPmkrkuW4-container`,
                                  nodeId: `KPmkrkuW4`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `KPmkrkuW4`,
                                    IsnRU0dVs: `Conversation history`,
                                    layoutId: `KPmkrkuW4`,
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
                                    variant: Q(`cOi6yPk8e`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 305,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        305,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 305,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        305,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 305,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-lf4vxp-container`,
                                  layoutDependency: R,
                                  layoutId: `A95KZ1nHn-container`,
                                  nodeId: `A95KZ1nHn`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `A95KZ1nHn`,
                                    IsnRU0dVs: `Slack notifications`,
                                    layoutId: `A95KZ1nHn`,
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
                                    variant: Q(`cOi6yPk8e`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 447.6 + 0 + 366,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        366,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 366,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          0 +
                                          0) +
                                        0 +
                                        447.6 +
                                        0 +
                                        366,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 431.6 + 0 + 366,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1n3a4v-container`,
                                  layoutDependency: R,
                                  layoutId: `W6UH1iMmj-container`,
                                  nodeId: `W6UH1iMmj`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `W6UH1iMmj`,
                                    IsnRU0dVs: `API access`,
                                    layoutId: `W6UH1iMmj`,
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
                                    variant: Q(`cOi6yPk8e`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 36px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 40px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 28px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 40px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 28px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a(d.div, {
                        className: `framer-1tif5ju`,
                        layoutDependency: R,
                        layoutId: `tGu1GKgnt`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `rgba(0, 0, 0, 0)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                          backgroundColor: `rgba(0, 0, 0, 0)`,
                        },
                        variants: {
                          Abiy5bkiE: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(23, 23, 23, 0.85))`,
                          },
                          krDaVoIGm: {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                          },
                          Otlu_WNq9: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(23, 23, 23, 0.85))`,
                          },
                          PhsqtEgn4: {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                          },
                          zdhQ7paXI: {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                            backgroundColor: `rgba(0, 0, 0, 0)`,
                          },
                        },
                        ...J(
                          {
                            Abiy5bkiE: { "data-border": !0 },
                            Otlu_WNq9: { "data-border": !0 },
                          },
                          T,
                          M,
                        ),
                        children: [
                          H() &&
                            o(d.div, {
                              className: `framer-1aw2xpp`,
                              layoutDependency: R,
                              layoutId: `mh_1aFmNG`,
                              style: {
                                backdropFilter: `blur(8px)`,
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                                WebkitBackdropFilter: `blur(8px)`,
                              },
                              children: o(D, {
                                children: o(C, {
                                  className: `framer-123gxou-container`,
                                  isAuthoredByUser: !0,
                                  layoutDependency: R,
                                  layoutId: `qOVzNEBmT-container`,
                                  nodeId: `qOVzNEBmT`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(de, {
                                    baseBorderColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    bottomLeft: 12,
                                    bottomRight: 12,
                                    cardBackground: `var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(23, 23, 23, 0.85))`,
                                    glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                    height: `100%`,
                                    id: `qOVzNEBmT`,
                                    isMixed: !1,
                                    layoutId: `qOVzNEBmT`,
                                    proximity: 490,
                                    smoothing: 0.05,
                                    style: { height: `100%`, width: `100%` },
                                    topLeft: 12,
                                    topRight: 12,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          o(d.div, {
                            className: `framer-x3j3jk`,
                            layoutDependency: R,
                            layoutId: `QxfkoEYhX`,
                            children: a(d.div, {
                              className: `framer-c5wopx`,
                              layoutDependency: R,
                              layoutId: `EsbLTWzGJ`,
                              children: [
                                a(d.div, {
                                  className: `framer-1trw7r4`,
                                  layoutDependency: R,
                                  layoutId: `NlpwwiPtN`,
                                  children: [
                                    a(d.div, {
                                      className: `framer-1li23de`,
                                      "data-border": !0,
                                      layoutDependency: R,
                                      layoutId: `k4h_MLlIS`,
                                      style: {
                                        "--border-bottom-width": `1px`,
                                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                        "--border-left-width": `0px`,
                                        "--border-right-width": `0px`,
                                        "--border-style": `solid`,
                                        "--border-top-width": `0px`,
                                      },
                                      children: [
                                        o(Y, {
                                          __framer__animate: { transition: zt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0,
                                          __fromCanvasComponent: !0,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          children: o(t, {
                                            children: o(d.p, {
                                              className: `framer-styles-preset-10qv886`,
                                              "data-styles-preset": `dvE5DE7ca`,
                                              dir: `auto`,
                                              children: o(d.strong, {
                                                children: `BASIC`,
                                              }),
                                            }),
                                          }),
                                          className: `framer-g0lv5x`,
                                          fonts: [`Inter`, `Inter-Bold`],
                                          layoutDependency: R,
                                          layoutId: `UZg1I94bk`,
                                          style: {
                                            "--framer-paragraph-spacing": `18px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        a(d.div, {
                                          className: `framer-141t3co`,
                                          layoutDependency: R,
                                          layoutId: `E6vbEwahI`,
                                          children: [
                                            o(D, {
                                              height: 18,
                                              width: `36px`,
                                              y:
                                                (m?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                36 +
                                                0 +
                                                0 +
                                                0 +
                                                36 +
                                                0,
                                              ...J(
                                                {
                                                  Abiy5bkiE: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      (((m?.height || 200) -
                                                        0 -
                                                        2624.6) /
                                                        2 +
                                                        874.6 +
                                                        0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0,
                                                  },
                                                  krDaVoIGm: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      28 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0,
                                                  },
                                                  Otlu_WNq9: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      (((m?.height || 200) -
                                                        0 -
                                                        2624.6) /
                                                        2 +
                                                        874.6 +
                                                        0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0,
                                                  },
                                                  PhsqtEgn4: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      28 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0,
                                                  },
                                                },
                                                T,
                                                M,
                                              ),
                                              children: o(C, {
                                                className: `framer-10xog8e-container`,
                                                layoutDependency: R,
                                                layoutId: `PyUFQSqds-container`,
                                                nodeId: `PyUFQSqds`,
                                                rendersWithMotion: !0,
                                                scopeId: `LOmU9jDw7`,
                                                children: o(q, {
                                                  height: `100%`,
                                                  id: `PyUFQSqds`,
                                                  layoutId: `PyUFQSqds`,
                                                  oeZcsGgYt: B,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  variant: Q(`Js1GF3vTG`),
                                                  width: `100%`,
                                                  ...J(
                                                    {
                                                      Abiy5bkiE: {
                                                        oeZcsGgYt: ae,
                                                      },
                                                      krDaVoIGm: {
                                                        oeZcsGgYt: ue,
                                                        variant: Q(`iNABZRdK2`),
                                                      },
                                                      Otlu_WNq9: {
                                                        oeZcsGgYt: se,
                                                        variant: Q(`iNABZRdK2`),
                                                      },
                                                      PhsqtEgn4: {
                                                        oeZcsGgYt: ce,
                                                      },
                                                      zdhQ7paXI: {
                                                        oeZcsGgYt: oe,
                                                        variant: Q(`iNABZRdK2`),
                                                      },
                                                    },
                                                    T,
                                                    M,
                                                  ),
                                                }),
                                              }),
                                            }),
                                            o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(t, {
                                                children: o(d.p, {
                                                  className: `framer-styles-preset-10qv886`,
                                                  "data-styles-preset": `dvE5DE7ca`,
                                                  dir: `auto`,
                                                  children: o(d.strong, {
                                                    children: `Yearly`,
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1dob7zo`,
                                              fonts: [`Inter`, `Inter-Bold`],
                                              layoutDependency: R,
                                              layoutId: `kK_KKv6fS`,
                                              style: {
                                                "--framer-paragraph-spacing": `18px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a(d.div, {
                                      className: `framer-395gfb`,
                                      layoutDependency: R,
                                      layoutId: `EQY9_T9pC`,
                                      children: [
                                        a(X, {
                                          __framer__animate: { transition: Bt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          className: `framer-1814gio`,
                                          layoutDependency: R,
                                          layoutId: `npqI5stps`,
                                          children: [
                                            o(D, {
                                              height: 49,
                                              y:
                                                (m?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                36 +
                                                0 +
                                                0 +
                                                130 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              ...J(
                                                {
                                                  Abiy5bkiE: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      (((m?.height || 200) -
                                                        0 -
                                                        2624.6) /
                                                        2 +
                                                        874.6 +
                                                        0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      130 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                  krDaVoIGm: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      28 +
                                                      0 +
                                                      0 +
                                                      130 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                  Otlu_WNq9: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      (((m?.height || 200) -
                                                        0 -
                                                        2624.6) /
                                                        2 +
                                                        874.6 +
                                                        0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      36 +
                                                      0 +
                                                      0 +
                                                      130 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                  PhsqtEgn4: {
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      28 +
                                                      0 +
                                                      0 +
                                                      130 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                T,
                                                M,
                                              ),
                                              children: o(C, {
                                                className: `framer-1d30tdi-container`,
                                                layoutDependency: R,
                                                layoutId: `CrGaFlfRi-container`,
                                                nodeId: `CrGaFlfRi`,
                                                rendersWithMotion: !0,
                                                scopeId: `LOmU9jDw7`,
                                                children: o(W, {
                                                  b87q8DydE: 19,
                                                  fioz4RPHv: 0.6,
                                                  height: `100%`,
                                                  id: `CrGaFlfRi`,
                                                  layoutId: `CrGaFlfRi`,
                                                  QhpKq63bo: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                  rBEAL3VOd: ``,
                                                  UQQvQjowu: `$`,
                                                  variant: Q(`qJ9Nl_Dp1`),
                                                  width: `100%`,
                                                  xYsEOirX6: 39,
                                                  ...J(
                                                    {
                                                      Abiy5bkiE: {
                                                        variant: Q(`CVm7lPE1f`),
                                                      },
                                                      krDaVoIGm: {
                                                        variant: Q(`FBBPcEd7I`),
                                                      },
                                                      Otlu_WNq9: {
                                                        variant: Q(`RsC6BUoyu`),
                                                      },
                                                      PhsqtEgn4: {
                                                        variant: Q(`clc_OKMm2`),
                                                      },
                                                      zdhQ7paXI: {
                                                        variant: Q(`MRgdsduvu`),
                                                      },
                                                    },
                                                    T,
                                                    M,
                                                  ),
                                                }),
                                              }),
                                            }),
                                            o(d.div, {
                                              className: `framer-1imisdn`,
                                              layoutDependency: R,
                                              layoutId: `IFYpnSekB`,
                                              children: o(g, {
                                                __fromCanvasComponent: !0,
                                                children: o(t, {
                                                  children: o(d.p, {
                                                    className: `framer-styles-preset-prenqk`,
                                                    "data-styles-preset": `POYKcChXw`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65)))`,
                                                    },
                                                    children: `/month`,
                                                  }),
                                                }),
                                                className: `framer-1eho6u8`,
                                                fonts: [`Inter`],
                                                layoutDependency: R,
                                                layoutId: `reqt1Dpd3`,
                                                style: {
                                                  "--extracted-r6o4lv": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                  "--framer-link-text-decoration": `underline`,
                                                },
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        o(Y, {
                                          __framer__animate: { transition: Vt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Z,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0,
                                          __fromCanvasComponent: !0,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          children: o(t, {
                                            children: o(d.p, {
                                              className: `framer-styles-preset-1fhxhj6`,
                                              "data-styles-preset": `O0790qsZT`,
                                              dir: `auto`,
                                              children: `For orgs with advanced security and scale needs.`,
                                            }),
                                          }),
                                          className: `framer-13nm0kf`,
                                          fonts: [`Inter`],
                                          layoutDependency: R,
                                          layoutId: `ngubXBNdr`,
                                          style: {
                                            "--framer-paragraph-spacing": `18px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(v, {
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
                                    o(D, {
                                      height: 48,
                                      y: (m?.y || 0) + 0 + 0 + 0 + 0 + 36 + 328,
                                      ...J(
                                        {
                                          Abiy5bkiE: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              (((m?.height || 200) -
                                                0 -
                                                2624.6) /
                                                2 +
                                                874.6 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              36 +
                                              328,
                                          },
                                          krDaVoIGm: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              28 +
                                              328,
                                          },
                                          Otlu_WNq9: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              (((m?.height || 200) -
                                                0 -
                                                2624.6) /
                                                2 +
                                                874.6 +
                                                0) +
                                              0 +
                                              0 +
                                              0 +
                                              36 +
                                              328,
                                          },
                                          PhsqtEgn4: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              28 +
                                              328,
                                          },
                                        },
                                        T,
                                        M,
                                      ),
                                      children: o(jt, {
                                        __framer__animate: { transition: Ht },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-1h01r1c-container`,
                                        layoutDependency: R,
                                        layoutId: `Uz7Q_AzU3-container`,
                                        nodeId: `Uz7Q_AzU3`,
                                        rendersWithMotion: !0,
                                        scopeId: `LOmU9jDw7`,
                                        children: o(V, {
                                          BANE331ww: !1,
                                          FWKDMXbN2: e[0],
                                          height: `100%`,
                                          id: `Uz7Q_AzU3`,
                                          layoutId: `Uz7Q_AzU3`,
                                          mYjHZJ6Gn: `Get Started`,
                                          p8v7WNQPZ: I,
                                          variant: Q(`woqNk0Qel`),
                                          width: `100%`,
                                          YkfrxUoaP: !1,
                                          ...J(
                                            {
                                              Abiy5bkiE: { FWKDMXbN2: e[1] },
                                              krDaVoIGm: { FWKDMXbN2: e[5] },
                                              Otlu_WNq9: { FWKDMXbN2: e[3] },
                                              PhsqtEgn4: { FWKDMXbN2: e[4] },
                                              zdhQ7paXI: { FWKDMXbN2: e[2] },
                                            },
                                            T,
                                            M,
                                          ),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                          }),
                          a(X, {
                            __framer__animate: { transition: Ut },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-patjhq`,
                            layoutDependency: R,
                            layoutId: `xmAAeChLs`,
                            children: [
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 0,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        0,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 0,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        0,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 0,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-cf14xi-container`,
                                  layoutDependency: R,
                                  layoutId: `GKjKUpGaz-container`,
                                  nodeId: `GKjKUpGaz`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `Unlimited`,
                                    height: `100%`,
                                    id: `GKjKUpGaz`,
                                    IsnRU0dVs: `Team members`,
                                    layoutId: `GKjKUpGaz`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `min(max(${m?.width || `100vw`} / 3, 1px) - 72px, 1228px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 61,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        61,
                                    },
                                    krDaVoIGm: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 61,
                                    },
                                    Otlu_WNq9: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        61,
                                    },
                                    PhsqtEgn4: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 61,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1xt95jb-container`,
                                  layoutDependency: R,
                                  layoutId: `xEFUO225V-container`,
                                  nodeId: `xEFUO225V`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `200`,
                                    height: `100%`,
                                    id: `xEFUO225V`,
                                    IsnRU0dVs: `AI queries / mo`,
                                    layoutId: `xEFUO225V`,
                                    QTM4ITCYc: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    UpWqDq7T6: {
                                      borderBottomWidth: 1,
                                      borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderStyle: `solid`,
                                      borderTopWidth: 0,
                                    },
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `min(max(${m?.width || `100vw`} / 3, 1px) - 72px, 1228px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 122,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        122,
                                    },
                                    krDaVoIGm: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 122,
                                    },
                                    Otlu_WNq9: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        122,
                                    },
                                    PhsqtEgn4: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 122,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-wl4e09-container`,
                                  layoutDependency: R,
                                  layoutId: `RfGTovpf_-container`,
                                  nodeId: `RfGTovpf_`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `Unlimited`,
                                    height: `100%`,
                                    id: `RfGTovpf_`,
                                    IsnRU0dVs: `Integrations`,
                                    layoutId: `RfGTovpf_`,
                                    QTM4ITCYc: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    UpWqDq7T6: {
                                      borderBottomWidth: 1,
                                      borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderStyle: `solid`,
                                      borderTopWidth: 0,
                                    },
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `min(max(${m?.width || `100vw`} / 3, 1px) - 72px, 1228px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 183,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        183,
                                    },
                                    krDaVoIGm: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 183,
                                    },
                                    Otlu_WNq9: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        183,
                                    },
                                    PhsqtEgn4: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 183,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1v2lh31-container`,
                                  layoutDependency: R,
                                  layoutId: `sPMUXgKTR-container`,
                                  nodeId: `sPMUXgKTR`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `sPMUXgKTR`,
                                    IsnRU0dVs: `Source attribution`,
                                    layoutId: `sPMUXgKTR`,
                                    QTM4ITCYc: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    UpWqDq7T6: {
                                      borderBottomWidth: 1,
                                      borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderStyle: `solid`,
                                      borderTopWidth: 0,
                                    },
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `min(max(${m?.width || `100vw`} / 3, 1px) - 72px, 1228px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 244,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        244,
                                    },
                                    krDaVoIGm: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 244,
                                    },
                                    Otlu_WNq9: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        244,
                                    },
                                    PhsqtEgn4: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 244,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1blw9du-container`,
                                  layoutDependency: R,
                                  layoutId: `e7lBm3F75-container`,
                                  nodeId: `e7lBm3F75`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `e7lBm3F75`,
                                    IsnRU0dVs: `Conversation history`,
                                    layoutId: `e7lBm3F75`,
                                    QTM4ITCYc: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    UpWqDq7T6: {
                                      borderBottomWidth: 1,
                                      borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderStyle: `solid`,
                                      borderTopWidth: 0,
                                    },
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `min(max(${m?.width || `100vw`} / 3, 1px) - 72px, 1228px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 305,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        305,
                                    },
                                    krDaVoIGm: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 305,
                                    },
                                    Otlu_WNq9: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        305,
                                    },
                                    PhsqtEgn4: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 305,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1hq93cp-container`,
                                  layoutDependency: R,
                                  layoutId: `auoTKz3ma-container`,
                                  nodeId: `auoTKz3ma`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `auoTKz3ma`,
                                    IsnRU0dVs: `Slack notifications`,
                                    layoutId: `auoTKz3ma`,
                                    QTM4ITCYc: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    UpWqDq7T6: {
                                      borderBottomWidth: 1,
                                      borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderStyle: `solid`,
                                      borderTopWidth: 0,
                                    },
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `min(max(${m?.width || `100vw`} / 3, 1px) - 72px, 1228px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 366,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        366,
                                    },
                                    krDaVoIGm: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 366,
                                    },
                                    Otlu_WNq9: {
                                      width: `min(${m?.width || `100vw`} - 72px, 1228px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          874.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        366,
                                    },
                                    PhsqtEgn4: {
                                      width: `min(max(${m?.width || `100vw`} / 3, 1px) - 56px, 1228px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 366,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-19rxd04-container`,
                                  layoutDependency: R,
                                  layoutId: `m8eUN4msK-container`,
                                  nodeId: `m8eUN4msK`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `m8eUN4msK`,
                                    IsnRU0dVs: `API access`,
                                    layoutId: `m8eUN4msK`,
                                    QTM4ITCYc: !0,
                                    style: { maxWidth: `100%`, width: `100%` },
                                    UpWqDq7T6: {
                                      borderBottomWidth: 0,
                                      borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderStyle: `solid`,
                                      borderTopWidth: 0,
                                    },
                                    variant: Q(`cOi6yPk8e`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 36px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 40px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 28px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 40px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 28px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a(d.div, {
                        className: `framer-182pk2d`,
                        layoutDependency: R,
                        layoutId: `f3cUOt8NG`,
                        children: [
                          a(d.div, {
                            className: `framer-xm4w77`,
                            layoutDependency: R,
                            layoutId: `nDYk28krz`,
                            children: [
                              a(d.div, {
                                className: `framer-1h80t5t`,
                                layoutDependency: R,
                                layoutId: `iPkHrP_5G`,
                                children: [
                                  a(d.div, {
                                    className: `framer-1fl5muh`,
                                    "data-border": !0,
                                    layoutDependency: R,
                                    layoutId: `T62z8Kprv`,
                                    style: {
                                      "--border-bottom-width": `1px`,
                                      "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                      "--border-left-width": `0px`,
                                      "--border-right-width": `0px`,
                                      "--border-style": `solid`,
                                      "--border-top-width": `0px`,
                                    },
                                    children: [
                                      o(Y, {
                                        __framer__animate: { transition: zt },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        children: o(t, {
                                          children: o(d.p, {
                                            className: `framer-styles-preset-10qv886`,
                                            "data-styles-preset": `dvE5DE7ca`,
                                            dir: `auto`,
                                            children: o(d.strong, {
                                              children: `PRO`,
                                            }),
                                          }),
                                        }),
                                        className: `framer-1tv1igx`,
                                        fonts: [`Inter`, `Inter-Bold`],
                                        layoutDependency: R,
                                        layoutId: `I1_os7b4f`,
                                        style: {
                                          "--framer-paragraph-spacing": `18px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      a(d.div, {
                                        className: `framer-1c84vd9`,
                                        layoutDependency: R,
                                        layoutId: `hXZMub7OU`,
                                        children: [
                                          o(D, {
                                            height: 18,
                                            width: `36px`,
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              36 +
                                              0 +
                                              0 +
                                              0 +
                                              36 +
                                              0,
                                            ...J(
                                              {
                                                Abiy5bkiE: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    (((m?.height || 200) -
                                                      0 -
                                                      2624.6) /
                                                      2 +
                                                      1749.6 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0,
                                                },
                                                krDaVoIGm: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    28 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0,
                                                },
                                                Otlu_WNq9: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    (((m?.height || 200) -
                                                      0 -
                                                      2624.6) /
                                                      2 +
                                                      1749.6 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0,
                                                },
                                                PhsqtEgn4: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    28 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0,
                                                },
                                              },
                                              T,
                                              M,
                                            ),
                                            children: o(C, {
                                              className: `framer-pnveh6-container`,
                                              layoutDependency: R,
                                              layoutId: `iU0jSDdSQ-container`,
                                              nodeId: `iU0jSDdSQ`,
                                              rendersWithMotion: !0,
                                              scopeId: `LOmU9jDw7`,
                                              children: o(q, {
                                                height: `100%`,
                                                id: `iU0jSDdSQ`,
                                                layoutId: `iU0jSDdSQ`,
                                                oeZcsGgYt: B,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`,
                                                },
                                                variant: Q(`Js1GF3vTG`),
                                                width: `100%`,
                                                ...J(
                                                  {
                                                    Abiy5bkiE: {
                                                      oeZcsGgYt: ae,
                                                    },
                                                    krDaVoIGm: {
                                                      oeZcsGgYt: ue,
                                                      variant: Q(`iNABZRdK2`),
                                                    },
                                                    Otlu_WNq9: {
                                                      oeZcsGgYt: se,
                                                      variant: Q(`iNABZRdK2`),
                                                    },
                                                    PhsqtEgn4: {
                                                      oeZcsGgYt: ce,
                                                    },
                                                    zdhQ7paXI: {
                                                      oeZcsGgYt: oe,
                                                      variant: Q(`iNABZRdK2`),
                                                    },
                                                  },
                                                  T,
                                                  M,
                                                ),
                                              }),
                                            }),
                                          }),
                                          o(g, {
                                            __fromCanvasComponent: !0,
                                            children: o(t, {
                                              children: o(d.p, {
                                                className: `framer-styles-preset-10qv886`,
                                                "data-styles-preset": `dvE5DE7ca`,
                                                dir: `auto`,
                                                children: o(d.strong, {
                                                  children: `Yearly`,
                                                }),
                                              }),
                                            }),
                                            className: `framer-10ct4u4`,
                                            fonts: [`Inter`, `Inter-Bold`],
                                            layoutDependency: R,
                                            layoutId: `ixBVz0Qnm`,
                                            style: {
                                              "--framer-paragraph-spacing": `18px`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a(d.div, {
                                    className: `framer-1j2959z`,
                                    layoutDependency: R,
                                    layoutId: `h0mbOeGoC`,
                                    children: [
                                      a(X, {
                                        __framer__animate: { transition: Bt },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        className: `framer-1nsc10r`,
                                        layoutDependency: R,
                                        layoutId: `u1EEicfLv`,
                                        children: [
                                          o(D, {
                                            height: 49,
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              36 +
                                              0 +
                                              0 +
                                              130 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            ...J(
                                              {
                                                Abiy5bkiE: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    (((m?.height || 200) -
                                                      0 -
                                                      2624.6) /
                                                      2 +
                                                      1749.6 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0 +
                                                    0 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                                krDaVoIGm: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    28 +
                                                    0 +
                                                    0 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                                Otlu_WNq9: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    (((m?.height || 200) -
                                                      0 -
                                                      2624.6) /
                                                      2 +
                                                      1749.6 +
                                                      0) +
                                                    0 +
                                                    0 +
                                                    36 +
                                                    0 +
                                                    0 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                                PhsqtEgn4: {
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    28 +
                                                    0 +
                                                    0 +
                                                    130 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              T,
                                              M,
                                            ),
                                            children: o(C, {
                                              className: `framer-zjpk98-container`,
                                              layoutDependency: R,
                                              layoutId: `V0UlqRP87-container`,
                                              nodeId: `V0UlqRP87`,
                                              rendersWithMotion: !0,
                                              scopeId: `LOmU9jDw7`,
                                              children: o(W, {
                                                b87q8DydE: 49,
                                                fioz4RPHv: 0.6,
                                                height: `100%`,
                                                id: `V0UlqRP87`,
                                                layoutId: `V0UlqRP87`,
                                                QhpKq63bo: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                rBEAL3VOd: ``,
                                                UQQvQjowu: `$`,
                                                variant: Q(`qJ9Nl_Dp1`),
                                                width: `100%`,
                                                xYsEOirX6: 89,
                                                ...J(
                                                  {
                                                    Abiy5bkiE: {
                                                      variant: Q(`CVm7lPE1f`),
                                                    },
                                                    krDaVoIGm: {
                                                      variant: Q(`FBBPcEd7I`),
                                                    },
                                                    Otlu_WNq9: {
                                                      variant: Q(`RsC6BUoyu`),
                                                    },
                                                    PhsqtEgn4: {
                                                      variant: Q(`clc_OKMm2`),
                                                    },
                                                    zdhQ7paXI: {
                                                      variant: Q(`MRgdsduvu`),
                                                    },
                                                  },
                                                  T,
                                                  M,
                                                ),
                                              }),
                                            }),
                                          }),
                                          o(d.div, {
                                            className: `framer-12s4t1x`,
                                            layoutDependency: R,
                                            layoutId: `ndvh2chTI`,
                                            children: o(g, {
                                              __fromCanvasComponent: !0,
                                              children: o(t, {
                                                children: o(d.p, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65)))`,
                                                  },
                                                  children: `/month`,
                                                }),
                                              }),
                                              className: `framer-1hllbfy`,
                                              fonts: [`Inter`],
                                              layoutDependency: R,
                                              layoutId: `VS_TIAly8`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                                "--framer-link-text-decoration": `underline`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                      o(Y, {
                                        __framer__animate: { transition: Vt },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Z,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        children: o(t, {
                                          children: o(d.p, {
                                            className: `framer-styles-preset-1fhxhj6`,
                                            "data-styles-preset": `O0790qsZT`,
                                            dir: `auto`,
                                            children: `For growing teams that need automation.`,
                                          }),
                                        }),
                                        className: `framer-ccz5v`,
                                        fonts: [`Inter`],
                                        layoutDependency: R,
                                        layoutId: `cOVwDGWTz`,
                                        style: {
                                          "--framer-paragraph-spacing": `18px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o(v, {
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
                                  o(D, {
                                    height: 48,
                                    y: (m?.y || 0) + 0 + 0 + 0 + 36 + 328,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            (((m?.height || 200) - 0 - 2624.6) /
                                              2 +
                                              1749.6 +
                                              0) +
                                            0 +
                                            0 +
                                            36 +
                                            328,
                                        },
                                        krDaVoIGm: {
                                          y: (m?.y || 0) + 0 + 0 + 0 + 28 + 328,
                                        },
                                        Otlu_WNq9: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            (((m?.height || 200) - 0 - 2624.6) /
                                              2 +
                                              1749.6 +
                                              0) +
                                            0 +
                                            0 +
                                            36 +
                                            328,
                                        },
                                        PhsqtEgn4: {
                                          y: (m?.y || 0) + 0 + 0 + 0 + 28 + 328,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                    children: o(jt, {
                                      __framer__animate: { transition: Ht },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Z,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-1xjn96d-container`,
                                      layoutDependency: R,
                                      layoutId: `VImvF0kH9-container`,
                                      nodeId: `VImvF0kH9`,
                                      rendersWithMotion: !0,
                                      scopeId: `LOmU9jDw7`,
                                      children: o(V, {
                                        BANE331ww: !1,
                                        FWKDMXbN2: e[0],
                                        height: `100%`,
                                        id: `VImvF0kH9`,
                                        layoutId: `VImvF0kH9`,
                                        mYjHZJ6Gn: `Get Started`,
                                        p8v7WNQPZ: I,
                                        variant: Q(`cNdVluHs7`),
                                        width: `100%`,
                                        YkfrxUoaP: !1,
                                        ...J(
                                          {
                                            Abiy5bkiE: { FWKDMXbN2: e[1] },
                                            krDaVoIGm: { FWKDMXbN2: e[5] },
                                            Otlu_WNq9: { FWKDMXbN2: e[3] },
                                            PhsqtEgn4: { FWKDMXbN2: e[4] },
                                            zdhQ7paXI: { FWKDMXbN2: e[2] },
                                          },
                                          T,
                                          M,
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          a(X, {
                            __framer__animate: { transition: Ut },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1jvt5fe`,
                            layoutDependency: R,
                            layoutId: `GxZeyized`,
                            children: [
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 0,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        0,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 0,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        0,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 0,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-39kka6-container`,
                                  layoutDependency: R,
                                  layoutId: `WWvyl99oi-container`,
                                  nodeId: `WWvyl99oi`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `Up to 15`,
                                    height: `100%`,
                                    id: `WWvyl99oi`,
                                    IsnRU0dVs: `Team members`,
                                    layoutId: `WWvyl99oi`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 61,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        61,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 61,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        61,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 61,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-wg55yv-container`,
                                  layoutDependency: R,
                                  layoutId: `az4PWAdTJ-container`,
                                  nodeId: `az4PWAdTJ`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `200`,
                                    height: `100%`,
                                    id: `az4PWAdTJ`,
                                    IsnRU0dVs: `AI queries / mo`,
                                    layoutId: `az4PWAdTJ`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 122,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        122,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 122,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        122,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 122,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-1mfvtop-container`,
                                  layoutDependency: R,
                                  layoutId: `DijWz6Ull-container`,
                                  nodeId: `DijWz6Ull`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: `Unlimited`,
                                    height: `100%`,
                                    id: `DijWz6Ull`,
                                    IsnRU0dVs: `Integrations`,
                                    layoutId: `DijWz6Ull`,
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
                                    variant: Q(`F4gDFkigA`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 183,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        183,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 183,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        183,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 183,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-4y3805-container`,
                                  layoutDependency: R,
                                  layoutId: `B61jelU4w-container`,
                                  nodeId: `B61jelU4w`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `B61jelU4w`,
                                    IsnRU0dVs: `Source attribution`,
                                    layoutId: `B61jelU4w`,
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
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 244,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        244,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 244,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        244,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 244,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-gkmxv0-container`,
                                  layoutDependency: R,
                                  layoutId: `RDzHKuTtZ-container`,
                                  nodeId: `RDzHKuTtZ`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `RDzHKuTtZ`,
                                    IsnRU0dVs: `Conversation history`,
                                    layoutId: `RDzHKuTtZ`,
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
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 305,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        305,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 305,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        305,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 305,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-99rntn-container`,
                                  layoutDependency: R,
                                  layoutId: `r_IdltVjR-container`,
                                  nodeId: `r_IdltVjR`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `r_IdltVjR`,
                                    IsnRU0dVs: `Slack notifications`,
                                    layoutId: `r_IdltVjR`,
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
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 20px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 12px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 16px 0px`,
                                        },
                                      },
                                      T,
                                      M,
                                    ),
                                  }),
                                }),
                              }),
                              o(D, {
                                height: 61,
                                width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 72px)`,
                                y: (m?.y || 0) + 0 + 0 + 448 + 0 + 366,
                                ...J(
                                  {
                                    Abiy5bkiE: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        366,
                                    },
                                    krDaVoIGm: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 366,
                                    },
                                    Otlu_WNq9: {
                                      width: `calc(${m?.width || `100vw`} - 72px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        (((m?.height || 200) - 0 - 2624.6) / 2 +
                                          1749.6 +
                                          0) +
                                        0 +
                                        448 +
                                        0 +
                                        366,
                                    },
                                    PhsqtEgn4: {
                                      width: `calc(max(${m?.width || `100vw`} / 3, 1px) - 56px)`,
                                      y: (m?.y || 0) + 0 + 0 + 432 + 0 + 366,
                                    },
                                  },
                                  T,
                                  M,
                                ),
                                children: o(C, {
                                  className: `framer-17154t8-container`,
                                  layoutDependency: R,
                                  layoutId: `zo02Rbi7I-container`,
                                  nodeId: `zo02Rbi7I`,
                                  rendersWithMotion: !0,
                                  scopeId: `LOmU9jDw7`,
                                  children: o(K, {
                                    DXtiLHcoU: ``,
                                    height: `100%`,
                                    id: `zo02Rbi7I`,
                                    IsnRU0dVs: `API access`,
                                    layoutId: `zo02Rbi7I`,
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
                                    variant: Q(`vq09Dmf5j`),
                                    width: `100%`,
                                    yEK4cBzgR: `20px 0px 36px 0px`,
                                    ...J(
                                      {
                                        Abiy5bkiE: {
                                          yEK4cBzgR: `16px 0px 40px 0px`,
                                        },
                                        krDaVoIGm: {
                                          yEK4cBzgR: `16px 0px 28px 0px`,
                                        },
                                        Otlu_WNq9: {
                                          yEK4cBzgR: `16px 0px 40px 0px`,
                                        },
                                        PhsqtEgn4: {
                                          yEK4cBzgR: `16px 0px 28px 0px`,
                                        },
                                      },
                                      T,
                                      M,
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
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fqY5H.framer-vsbmbl, .framer-fqY5H .framer-vsbmbl { display: block; }`,
          `.framer-fqY5H.framer-2972yt { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-fqY5H .framer-1kbxrjn-container { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; z-index: 0; }`,
          `.framer-fqY5H .framer-wwxqzw-container, .framer-fqY5H .framer-123gxou-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-fqY5H .framer-67zyla { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-fqY5H .framer-9ycufv, .framer-fqY5H .framer-xm4w77 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 36px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-fqY5H .framer-1grz4q3, .framer-fqY5H .framer-1trw7r4, .framer-fqY5H .framer-1h80t5t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-1jg45bd, .framer-fqY5H .framer-1li23de, .framer-fqY5H .framer-1fl5muh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 16px 0px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-bcdizg, .framer-fqY5H .framer-g0lv5x, .framer-fqY5H .framer-1tv1igx { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-fqY5H .framer-1ce7l1x, .framer-fqY5H .framer-395gfb, .framer-fqY5H .framer-1j2959z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 240px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-yaq6fq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-fqY5H .framer-1cz016w, .framer-fqY5H .framer-13nm0kf, .framer-fqY5H .framer-ccz5v { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 1228px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-1m63zhl-container, .framer-fqY5H .framer-1d30tdi-container, .framer-fqY5H .framer-1h01r1c-container, .framer-fqY5H .framer-zjpk98-container, .framer-fqY5H .framer-1xjn96d-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-fqY5H .framer-1t9f2y1, .framer-fqY5H .framer-patjhq, .framer-fqY5H .framer-1jvt5fe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 36px 0px 36px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-1oi5y7s-container, .framer-fqY5H .framer-mu9wvz-container, .framer-fqY5H .framer-5xjyz9-container, .framer-fqY5H .framer-nat5er-container, .framer-fqY5H .framer-158kb68-container, .framer-fqY5H .framer-lf4vxp-container, .framer-fqY5H .framer-1n3a4v-container, .framer-fqY5H .framer-cf14xi-container, .framer-fqY5H .framer-39kka6-container, .framer-fqY5H .framer-wg55yv-container, .framer-fqY5H .framer-1mfvtop-container, .framer-fqY5H .framer-4y3805-container, .framer-fqY5H .framer-gkmxv0-container, .framer-fqY5H .framer-99rntn-container, .framer-fqY5H .framer-17154t8-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-1tif5ju { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-fqY5H .framer-1aw2xpp { bottom: -16px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: -16px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fqY5H .framer-x3j3jk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-fqY5H .framer-c5wopx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 36px; position: relative; width: 1px; }`,
          `.framer-fqY5H .framer-141t3co, .framer-fqY5H .framer-1c84vd9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-fqY5H .framer-10xog8e-container, .framer-fqY5H .framer-pnveh6-container { flex: none; height: 18px; position: relative; width: 36px; }`,
          `.framer-fqY5H .framer-1dob7zo, .framer-fqY5H .framer-10ct4u4 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-fqY5H .framer-1814gio, .framer-fqY5H .framer-1nsc10r { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-1imisdn, .framer-fqY5H .framer-12s4t1x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 4px 0px; position: relative; width: min-content; }`,
          `.framer-fqY5H .framer-1eho6u8, .framer-fqY5H .framer-1hllbfy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-fqY5H .framer-1xt95jb-container, .framer-fqY5H .framer-wl4e09-container, .framer-fqY5H .framer-1v2lh31-container, .framer-fqY5H .framer-1blw9du-container, .framer-fqY5H .framer-1hq93cp-container, .framer-fqY5H .framer-19rxd04-container { flex: none; height: auto; max-width: 1228px; position: relative; width: 100%; }`,
          `.framer-fqY5H .framer-182pk2d { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-fqY5H.framer-v-1t3q6ox.framer-2972yt, .framer-fqY5H.framer-v-t3vrzj.framer-2972yt { flex-direction: column; width: 377px; }`,
          `.framer-fqY5H.framer-v-1t3q6ox .framer-67zyla, .framer-fqY5H.framer-v-1t3q6ox .framer-1tif5ju, .framer-fqY5H.framer-v-1t3q6ox .framer-182pk2d, .framer-fqY5H.framer-v-t3vrzj .framer-67zyla, .framer-fqY5H.framer-v-t3vrzj .framer-1tif5ju, .framer-fqY5H.framer-v-t3vrzj .framer-182pk2d { flex: none; width: 100%; }`,
          `.framer-fqY5H.framer-v-1t3q6ox .framer-1imisdn, .framer-fqY5H.framer-v-1t3q6ox .framer-12s4t1x, .framer-fqY5H.framer-v-t3vrzj .framer-1imisdn, .framer-fqY5H.framer-v-t3vrzj .framer-12s4t1x { padding: 0px 0px 3px 0px; }`,
          `.framer-fqY5H.framer-v-1yevq9h.framer-2972yt, .framer-fqY5H.framer-v-1v6suq8.framer-2972yt { width: 810px; }`,
          `.framer-fqY5H.framer-v-1yevq9h .framer-9ycufv, .framer-fqY5H.framer-v-1yevq9h .framer-c5wopx, .framer-fqY5H.framer-v-1yevq9h .framer-xm4w77, .framer-fqY5H.framer-v-1v6suq8 .framer-9ycufv, .framer-fqY5H.framer-v-1v6suq8 .framer-c5wopx, .framer-fqY5H.framer-v-1v6suq8 .framer-xm4w77 { padding: 28px; }`,
          `.framer-fqY5H.framer-v-1yevq9h .framer-1t9f2y1, .framer-fqY5H.framer-v-1yevq9h .framer-patjhq, .framer-fqY5H.framer-v-1yevq9h .framer-1jvt5fe, .framer-fqY5H.framer-v-1v6suq8 .framer-1t9f2y1, .framer-fqY5H.framer-v-1v6suq8 .framer-patjhq, .framer-fqY5H.framer-v-1v6suq8 .framer-1jvt5fe { padding: 0px 28px 0px 28px; }`,
          ...se,
          ...me,
          ...F,
          ...R,
          `.framer-fqY5H[data-border="true"]::after, .framer-fqY5H [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-fqY5H`,
      )),
      ($.displayName = `Pricing Section`),
      ($.defaultProps = { height: 744, width: 1280 }),
      j($, {
        variant: {
          options: [
            `lkCEJd_yl`,
            `Abiy5bkiE`,
            `zdhQ7paXI`,
            `Otlu_WNq9`,
            `PhsqtEgn4`,
            `krDaVoIGm`,
          ],
          optionTitles: [
            `Desktop`,
            `Mobile`,
            `Desktop Monthly`,
            `Mobile Monthly`,
            `Tablet Stack Yearly`,
            `Tablet Stack Monthly`,
          ],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      h(
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
          ...kt,
          ...At,
          ...Mt,
          ...Nt,
          ...Pt,
          ...T(ce),
          ...T(he),
          ...T(z),
          ...T(te),
        ],
        { supportsExplicitInterCodegen: !0 },
      ),
      ($.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([
            x(V, {}, t),
            x(K, {}, t),
            x(q, {}, t),
            x(W, {}, t),
          ])
        ),
      }));
  });
export { W as a, Ce as c, _t as i, Yt as n, Fe as o, K as r, U as s, $ as t };
//# sourceMappingURL=LOmU9jDw7.mUhw3LRT.mjs.map
