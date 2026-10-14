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
  v as u,
  w as ee,
  x as te,
} from "./react.CbTQkvGa.mjs";
import { M as d, i as f, o as p, t as m } from "./motion.DqePFWeo.mjs";
import {
  A as h,
  At as g,
  D as _,
  E as ne,
  Et as v,
  H as y,
  I as b,
  It as x,
  Nt as S,
  O as C,
  Ot as re,
  P as w,
  S as T,
  Tt as ie,
  W as E,
  X as D,
  _t as O,
  a as k,
  bt as ae,
  d as oe,
  dt as A,
  ft as se,
  gt as j,
  ht as ce,
  j as M,
  jt as N,
  kt as le,
  n as ue,
  nt as P,
  o as de,
  s as F,
  u as fe,
  ut as pe,
  wt as me,
  x as he,
  xt as ge,
  yt as _e,
} from "./framer.CFgihyWK.mjs";
import { d as ve, f as ye } from "./shared-lib.t8-xaOwk.mjs";
import { n as be, t as I } from "./EDCfJkePc.BsIQLi6J.mjs";
import {
  a as xe,
  i as Se,
  n as L,
  o as Ce,
  r as we,
  t as R,
} from "./m54zGBZ4w.CObtf37r.mjs";
import { i as Te, t as Ee } from "./SVtyO51O3.CKWhAbI4.mjs";
import { n as De, r as z } from "./ZtiWazyOp.CWnYLhiA.mjs";
import Oe, {
  t as ke,
} from "./qbfdA5tDSb3CRt_wqsqlDDfE7DO51gTNWFClnxFGK6Q.UreJiISG.mjs";
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  V,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  H,
  He = e(() => {
    (l(),
      D(),
      m(),
      r(),
      L(),
      (Ae = y(R)),
      (je = { kbLFVHkyg: { hover: !0 } }),
      (Me = [`kbLFVHkyg`, `cu5xK3o0T`]),
      (Ne = `framer-9YJ5R`),
      (Pe = { cu5xK3o0T: `framer-v-myhyph`, kbLFVHkyg: `framer-v-xq4utd` }),
      (Fe = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (V = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ie = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (Le = { Active: `cu5xK3o0T`, Default: `kbLFVHkyg` }),
      (Re = d.create(t)),
      (ze = (e, t) => {
        let [n, r] = u(e),
          [i, a] = u(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Be = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        eAHGXWjyh: e ?? a.eAHGXWjyh,
        mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
        variant: Le[a.variant] ?? a.variant ?? `kbLFVHkyg`,
      })),
      (Ve = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (H = N(
        c(function (e, t) {
          let n = te(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: c } = ae(),
            l = se(),
            {
              style: u,
              className: p,
              layoutId: m,
              variant: h,
              mXpY5N3RA: _,
              onmXpY5N3RAChange: ne,
              eAHGXWjyh: v,
              ...y
            } = Be(e),
            [b, x] = ze(_, ne),
            {
              baseVariant: S,
              classNames: re,
              clearLoadingGesture: T,
              gestureHandlers: ie,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: oe,
              variants: A,
            } = g({
              cycleOrder: Me,
              defaultVariant: `kbLFVHkyg`,
              enabledGestures: je,
              ref: r,
              variant: h,
              variantClassNames: Pe,
            }),
            j = Ve(e, A),
            { activeVariantCallback: ce, delay: M } = pe(S),
            N = ce(async (...e) => {
              if ((O({ isPressed: !1 }), v && (await v(...e)) === !1))
                return !1;
            }),
            le = w(Ne);
          return s(f, {
            id: m ?? i,
            children: s(Re, {
              animate: A,
              initial: !1,
              children: s(Ie, {
                value: Fe,
                children: o(d.div, {
                  ...y,
                  ...ie,
                  className: w(le, `framer-xq4utd`, p, re),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `kbLFVHkyg`,
                  onTap: N,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...u,
                  },
                  ...B(
                    {
                      "kbLFVHkyg-hover": { "data-framer-name": void 0 },
                      cu5xK3o0T: { "data-framer-name": `Active` },
                    },
                    S,
                    E,
                  ),
                  children: [
                    s(k, {
                      height: 31,
                      y: (l?.y || 0) + 0,
                      children: s(C, {
                        className: `framer-1p1re9q-container`,
                        layoutDependency: j,
                        layoutId: `qzlXvshAz-container`,
                        nodeId: `qzlXvshAz`,
                        rendersWithMotion: !0,
                        scopeId: `ZVDVcylIA`,
                        children: s(R, {
                          bwtRC2zWt: b,
                          Dh_X3w3jZ: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgb(213, 224, 232))`,
                          dMWH0omL8: `rgba(255, 255, 255, 0)`,
                          dVMswOCfH: !1,
                          eaYoGaNwq: {
                            borderColor: `rgba(255, 255, 255, 0)`,
                            borderStyle: `solid`,
                            borderWidth: 1,
                          },
                          GYoEH1GVm: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                          h3fww64y5: `rgba(250, 230, 225, 0.25)`,
                          height: `100%`,
                          id: `qzlXvshAz`,
                          layoutId: `qzlXvshAz`,
                          lMG_p6tJa: !1,
                          onbwtRC2zWtChange: x,
                          Rtia32FHG: !1,
                          v6Yyhxe69: `ArrowRight`,
                          variant: V(`qfOTriuLV`),
                          VvHeeXiqh: !1,
                          width: `100%`,
                          ZGOQT_PfL: `4px 16px 4px 16px`,
                          ...B(
                            {
                              cu5xK3o0T: {
                                Dh_X3w3jZ: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                dMWH0omL8: `rgba(255, 255, 255, 0.15)`,
                                eaYoGaNwq: {
                                  borderColor: `rgba(255, 255, 255, 0.1)`,
                                  borderStyle: `solid`,
                                  borderWidth: 1,
                                },
                              },
                            },
                            S,
                            E,
                          ),
                        }),
                      }),
                    }),
                    s(k, {
                      height: (l?.height || 29) - 0,
                      width: l?.width || `100vw`,
                      y: (l?.y || 0) + 0,
                      children: s(C, {
                        className: `framer-ypy2r1-container`,
                        layoutDependency: j,
                        layoutId: `ighC7p1Wo-container`,
                        nodeId: `ighC7p1Wo`,
                        rendersWithMotion: !0,
                        scopeId: `ZVDVcylIA`,
                        style: { opacity: 0 },
                        variants: { "kbLFVHkyg-hover": { opacity: 1 } },
                        children: s(R, {
                          bwtRC2zWt: b,
                          Dh_X3w3jZ: `rgb(255, 255, 255)`,
                          dMWH0omL8: `rgba(255, 255, 255, 0)`,
                          dVMswOCfH: !1,
                          eaYoGaNwq: {
                            borderColor: `rgba(255, 255, 255, 0)`,
                            borderStyle: `solid`,
                            borderWidth: 1,
                          },
                          GYoEH1GVm: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                          h3fww64y5: `rgba(250, 230, 225, 0.25)`,
                          height: `100%`,
                          id: `ighC7p1Wo`,
                          layoutId: `ighC7p1Wo`,
                          lMG_p6tJa: !1,
                          onbwtRC2zWtChange: x,
                          Rtia32FHG: !1,
                          style: { height: `100%`, width: `100%` },
                          v6Yyhxe69: `ArrowRight`,
                          variant: V(`qfOTriuLV`),
                          VvHeeXiqh: !1,
                          width: `100%`,
                          ZGOQT_PfL: `4px 16px 4px 16px`,
                          ...B(
                            {
                              cu5xK3o0T: {
                                Dh_X3w3jZ: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                dMWH0omL8: `rgba(255, 255, 255, 0.15)`,
                                eaYoGaNwq: {
                                  borderColor: `rgba(255, 255, 255, 0.1)`,
                                  borderStyle: `solid`,
                                  borderWidth: 1,
                                },
                              },
                            },
                            S,
                            E,
                          ),
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
          `.framer-9YJ5R.framer-9hwr3n, .framer-9YJ5R .framer-9hwr3n { display: block; }`,
          `.framer-9YJ5R.framer-xq4utd { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
          `.framer-9YJ5R .framer-1p1re9q-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-9YJ5R .framer-ypy2r1-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
        ],
        `framer-9YJ5R`,
      )),
      (H.displayName = `Tag Tab`),
      (H.defaultProps = { height: 29, width: 91 }),
      M(H, {
        variant: {
          options: [`kbLFVHkyg`, `cu5xK3o0T`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: F.Enum,
        },
        mXpY5N3RA: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Title`,
          type: F.String,
        },
        onmXpY5N3RAChange: { changes: `mXpY5N3RA`, type: F.ChangeHandler },
        eAHGXWjyh: { title: `Click`, type: F.EventHandler },
      }),
      h(H, [{ explicitInter: !0, fonts: [] }, ...Ae], {
        supportsExplicitInterCodegen: !0,
      }),
      (H.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([b(R, {}, t)])),
      }));
  }),
  Ue,
  U,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  W,
  tt,
  G,
  nt,
  rt,
  K,
  it,
  at,
  ot,
  q,
  J,
  st,
  ct,
  Y,
  X,
  lt,
  ut,
  dt,
  ft,
  pt,
  Z,
  mt,
  Q,
  ht,
  gt,
  $,
  _t;
e(() => {
  (l(),
    D(),
    m(),
    r(),
    ye(),
    be(),
    L(),
    He(),
    Te(),
    De(),
    Ce(),
    ke(),
    (Ue = y(R)),
    (U = S(de)),
    (We = S(_)),
    (Ge = x(d.div)),
    (Ke = y(H)),
    (qe = S(d.label)),
    (Je = y(I)),
    (Ye = x(de)),
    (Xe = {
      hZSlnjmOl: `(min-width: 1280px)`,
      MEMKBGQ_u: `(min-width: 810px) and (max-width: 1279.98px)`,
      om1vdNYxD: `(max-width: 809.98px)`,
    }),
    (Ze = [`category-new`, `title`]),
    (Qe = `framer-5AGOA`),
    ($e = {
      hZSlnjmOl: `framer-v-14j1pn2`,
      MEMKBGQ_u: `framer-v-hvfidb`,
      om1vdNYxD: `framer-v-20ibce`,
    }),
    (et = (e, t, n) => (e && t ? `position` : n)),
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
    (tt = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
    (G = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (nt = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (rt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0, duration: 2, type: `spring` },
      x: 0,
      y: 0,
    }),
    (K = {
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
    (it = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (at = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (ot = (e, t) => (e ? `kbLFVHkyg` : `cu5xK3o0T`)),
    (q = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (J = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (st = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e.toLowerCase() === t.toLowerCase()
        : e === t),
    (ct = (e, t) => (e ? `cu5xK3o0T` : `kbLFVHkyg`)),
    (Y = () => ({
      from: { alias: `YBeiDIWet`, data: z, type: `Collection` },
      select: [
        { collection: `YBeiDIWet`, name: `id`, type: `Identifier` },
        { collection: `YBeiDIWet`, name: `PzdqqBji0`, type: `Identifier` },
        { collection: `YBeiDIWet`, name: `qxz0gWIFz`, type: `Identifier` },
      ],
    })),
    (X = ({ query: e, pageSize: t, children: n }) => n(me(e))),
    (lt = { bounce: 0, delay: 0.4, duration: 1, type: `spring` }),
    (ut = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (dt = (e, t, n) => {
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
    (ft = { dateStyle: `medium`, timeZone: `UTC` }),
    (pt = (e, t) => dt(e, ft, t)),
    (Z = (e, t) => ({
      from: {
        constraint: {
          left: {
            collection: `Xg6p0J5WL`,
            name: `x19GGtPDy`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { collection: `x19GGtPDy`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `Xg6p0J5WL`, data: Ee, type: `Collection` },
        right: { alias: `x19GGtPDy`, data: z, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `Xg6p0J5WL`, name: `ouCb5EaSp`, type: `Identifier` },
        {
          alias: `x19GGtPDy.PzdqqBji0`,
          collection: `x19GGtPDy`,
          name: `PzdqqBji0`,
          type: `Identifier`,
        },
        { collection: `Xg6p0J5WL`, name: `Kbo7saXJt`, type: `Identifier` },
        { collection: `Xg6p0J5WL`, name: `uK2oWIs2_`, type: `Identifier` },
        { collection: `Xg6p0J5WL`, name: `a7bj_ZBM4`, type: `Identifier` },
        { collection: `Xg6p0J5WL`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: {
            left: { type: `LiteralValue`, value: e },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            left: { collection: `x19GGtPDy`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
        operator: `and`,
        right: {
          left: {
            left: { type: `LiteralValue`, value: t },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            arguments: [
              {
                collection: `Xg6p0J5WL`,
                name: `Kbo7saXJt`,
                type: `Identifier`,
              },
              { type: `LiteralValue`, value: t },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (mt = (e, t) => ({
      from: {
        constraint: {
          left: {
            collection: `Xg6p0J5WL`,
            name: `x19GGtPDy`,
            type: `Identifier`,
          },
          operator: `==`,
          right: { collection: `x19GGtPDy`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `Xg6p0J5WL`, data: Ee, type: `Collection` },
        right: { alias: `x19GGtPDy`, data: z, type: `Collection` },
        type: `LeftJoin`,
      },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `Xg6p0J5WL`, name: `ouCb5EaSp`, type: `Identifier` },
        {
          alias: `x19GGtPDy.PzdqqBji0`,
          collection: `x19GGtPDy`,
          name: `PzdqqBji0`,
          type: `Identifier`,
        },
        { collection: `Xg6p0J5WL`, name: `Kbo7saXJt`, type: `Identifier` },
        { collection: `Xg6p0J5WL`, name: `uK2oWIs2_`, type: `Identifier` },
        { collection: `Xg6p0J5WL`, name: `a7bj_ZBM4`, type: `Identifier` },
        { collection: `Xg6p0J5WL`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: {
            left: { type: `LiteralValue`, value: e },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            left: { collection: `x19GGtPDy`, name: `id`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
        operator: `and`,
        right: {
          left: {
            left: { type: `LiteralValue`, value: t },
            operator: `==`,
            right: { type: `LiteralValue`, value: null },
            type: `BinaryOperation`,
          },
          operator: `or`,
          right: {
            arguments: [
              {
                collection: `Xg6p0J5WL`,
                name: `Kbo7saXJt`,
                type: `Identifier`,
              },
              { type: `LiteralValue`, value: t },
            ],
            functionName: `CONTAINS`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (Q = { Desktop: `hZSlnjmOl`, Phone: `om1vdNYxD`, Tablet: `MEMKBGQ_u` }),
    (ht = ({ value: e }) =>
      O()
        ? null
        : s(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (gt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `hZSlnjmOl`,
    })),
    ($ = N(
      c(function (e, r) {
        let c = te(null),
          l = r ?? c,
          u = ee(),
          { activeLocale: m, setLocale: h } = ae(),
          g = se(),
          [_, y] = A({
            collectionId: `ZtiWazyOp`,
            optional: !0,
            parameterName: `category-new`,
          }),
          [b, x] = le({ optional: !0, parameterName: `title` }),
          { style: S, className: C, layoutId: E, variant: D, ...O } = gt(e);
        ge(n(() => Oe({}, m), [m]));
        let [M, N] = j(D, Xe, !1),
          { activeVariantCallback: P, delay: de } = pe(void 0),
          F = P(async (...e) => {
            y?.(void 0);
          }),
          me = ({ argw8go98: e }) =>
            P(async (...t) => {
              y?.(e);
            }),
          ye = w(Qe, we),
          be = a(oe)?.isLayoutTemplate,
          xe = !!a(p)?.transition?.layout,
          Se = et(be, xe),
          L = ie(`gGQFloYSu`),
          Ce = re(),
          Te = _e();
        return (
          v(),
          ce({}),
          s(oe.Provider, {
            value: {
              activeVariantId: M,
              humanReadableVariantMap: Q,
              primaryVariantId: `hZSlnjmOl`,
              variantClassNames: $e,
            },
            children: o(f, {
              id: E ?? u,
              children: [
                s(ht, {
                  value: `html body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0)); }`,
                }),
                s(d.div, {
                  ...O,
                  className: w(ye, `framer-14j1pn2`, C),
                  ref: l,
                  style: { ...S },
                  children: s(d.section, {
                    className: `framer-usv2zy`,
                    "data-border": !0,
                    "data-framer-name": `Blog`,
                    layout: Se,
                    children: o(`div`, {
                      className: `framer-1b360ca`,
                      "data-framer-name": `content`,
                      children: [
                        o(`div`, {
                          className: `framer-w346c2`,
                          "data-framer-name": `Header`,
                          id: L,
                          ref: Ce(L),
                          children: [
                            s(k, {
                              height: 30,
                              children: s(U, {
                                __framer__animate: { transition: tt },
                                __framer__animateOnce: !0,
                                __framer__enter: W,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-4qzkov-container`,
                                nodeId: `fjyN6w2CU`,
                                rendersWithMotion: !0,
                                scopeId: `JHJfURpkN`,
                                children: s(R, {
                                  bwtRC2zWt: `Blog`,
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
                                  id: `fjyN6w2CU`,
                                  layoutId: `fjyN6w2CU`,
                                  OgEx_2E7P: !1,
                                  pdea6CzDr: ve,
                                  Rtia32FHG: !0,
                                  variant: G(`qfOTriuLV`),
                                  VvHeeXiqh: !1,
                                  width: `100%`,
                                  ZGOQT_PfL: `4px 16px 4px 16px`,
                                }),
                              }),
                            }),
                            s(We, {
                              __framer__animate: { transition: nt },
                              __framer__animateOnce: !0,
                              __framer__enter: W,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: s(t, {
                                children: s(`h1`, {
                                  className: `framer-styles-preset-7hjh4k`,
                                  "data-styles-preset": `bM7WzBkv5`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                  },
                                  children: `News and insights`,
                                }),
                              }),
                              className: `framer-168pw51`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        o(`div`, {
                          className: `framer-1tlja5j`,
                          children: [
                            s(Ge, {
                              animate: rt,
                              className: `framer-1kr95m1`,
                              "data-framer-appear-id": `1kr95m1`,
                              initial: K,
                              optimized: !0,
                            }),
                            o(`div`, {
                              className: `framer-s31vp6`,
                              children: [
                                o(`div`, {
                                  className: `framer-j61ab7`,
                                  children: [
                                    s(`div`, {
                                      className: `framer-1sl7vgm`,
                                      children: s(ue, {
                                        children: s(X, {
                                          query: Y(),
                                          children: (e, t, n) =>
                                            o(i, {
                                              children: [
                                                s(k, {
                                                  height: 29,
                                                  children: s(U, {
                                                    __framer__animate: {
                                                      transition: it,
                                                    },
                                                    __framer__animateOnce: !0,
                                                    __framer__enter: W,
                                                    __framer__styleAppearEffectEnabled:
                                                      !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className: `framer-pmgr6-container`,
                                                    nodeId: `tJzX7AwMa`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `JHJfURpkN`,
                                                    children: s(H, {
                                                      eAHGXWjyh: F,
                                                      height: `100%`,
                                                      id: `tJzX7AwMa`,
                                                      layoutId: `tJzX7AwMa`,
                                                      mXpY5N3RA: `All`,
                                                      variant: G(ot(at(_), m)),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                e?.map(
                                                  (
                                                    {
                                                      id: e,
                                                      PzdqqBji0: t,
                                                      qxz0gWIFz: n,
                                                    },
                                                    r,
                                                  ) => (
                                                    (t ??= ``),
                                                    (n ??= ``),
                                                    s(
                                                      f,
                                                      {
                                                        id: `YBeiDIWet-${e}`,
                                                        children: s(
                                                          he.Provider,
                                                          {
                                                            value: {
                                                              qxz0gWIFz: n,
                                                            },
                                                            children: s(k, {
                                                              height: 29,
                                                              children: s(U, {
                                                                __framer__animate:
                                                                  {
                                                                    transition:
                                                                      J(
                                                                        q,
                                                                        r * 0.1,
                                                                      ),
                                                                  },
                                                                __framer__animateOnce:
                                                                  !0,
                                                                __framer__enter:
                                                                  W,
                                                                __framer__styleAppearEffectEnabled:
                                                                  !0,
                                                                __framer__threshold: 0,
                                                                __perspectiveFX:
                                                                  !1,
                                                                __targetOpacity: 1,
                                                                className: `framer-1npxo7q-container`,
                                                                nodeId: `BCMyslxxv`,
                                                                rendersWithMotion:
                                                                  !0,
                                                                scopeId: `JHJfURpkN`,
                                                                children: s(H, {
                                                                  eAHGXWjyh: me(
                                                                    {
                                                                      argw8go98:
                                                                        e,
                                                                    },
                                                                  ),
                                                                  height: `100%`,
                                                                  id: `BCMyslxxv`,
                                                                  layoutId: `BCMyslxxv`,
                                                                  mXpY5N3RA: t,
                                                                  variant: G(
                                                                    ct(
                                                                      st(_, e),
                                                                      m,
                                                                    ),
                                                                  ),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          },
                                                        ),
                                                      },
                                                      e,
                                                    )
                                                  ),
                                                ),
                                              ],
                                            }),
                                        }),
                                      }),
                                    }),
                                    s(qe, {
                                      __framer__animate: { transition: lt },
                                      __framer__animateOnce: !0,
                                      __framer__enter: W,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1uv61dy`,
                                      children: s(T, {
                                        breakpoint: M,
                                        overrides: {
                                          MEMKBGQ_u: {
                                            inputName: `MEMKBGQ_uEKK0GOLM5`,
                                          },
                                          om1vdNYxD: {
                                            inputName: `om1vdNYxDEKK0GOLM5`,
                                          },
                                        },
                                        children: s(fe, {
                                          className: `framer-kd0vi6`,
                                          inputName: `EKK0GOLM5`,
                                          onChange: (e) =>
                                            x(e.target.value || void 0),
                                          onClear: () => x(void 0),
                                          placeholder: `Search…`,
                                          type: `text`,
                                          value: b ?? ``,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-1lmdd99`,
                                  children: s(ue, {
                                    children: s(T, {
                                      breakpoint: M,
                                      overrides: {
                                        om1vdNYxD: { query: mt(_, b) },
                                      },
                                      children: s(X, {
                                        query: Z(_, b),
                                        children: (e, t, n) =>
                                          s(i, {
                                            children: e?.map(
                                              (
                                                {
                                                  "x19GGtPDy.PzdqqBji0": e,
                                                  a7bj_ZBM4: t,
                                                  id: n,
                                                  Kbo7saXJt: r,
                                                  ouCb5EaSp: i,
                                                  uK2oWIs2_: a,
                                                },
                                                o,
                                              ) => (
                                                (e ??= ``),
                                                (r ??= ``),
                                                (t ??= ``),
                                                s(
                                                  f,
                                                  {
                                                    id: `Xg6p0J5WL-${n}`,
                                                    children: s(he.Provider, {
                                                      value: { a7bj_ZBM4: t },
                                                      children: s(ne, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: {
                                                                a7bj_ZBM4: t,
                                                              },
                                                              webPageId: `o2yXfHY3m`,
                                                            },
                                                            implicitPathVariables:
                                                              void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: {
                                                                a7bj_ZBM4: t,
                                                              },
                                                              webPageId: `o2yXfHY3m`,
                                                            },
                                                            implicitPathVariables:
                                                              void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: {
                                                                a7bj_ZBM4: t,
                                                              },
                                                              webPageId: `o2yXfHY3m`,
                                                            },
                                                            implicitPathVariables:
                                                              void 0,
                                                          },
                                                        ],
                                                        children: (t) =>
                                                          s(T, {
                                                            breakpoint: M,
                                                            overrides: {
                                                              MEMKBGQ_u: {
                                                                width: `max((min(max(min(${g?.width || `100vw`}, 1600px) - 48px, 1px), 720px) - 24px) / 2, 115px)`,
                                                              },
                                                              om1vdNYxD: {
                                                                width: `min(max(min(${g?.width || `100vw`}, 1600px) - 48px, 1px), 720px)`,
                                                              },
                                                            },
                                                            children: s(k, {
                                                              height: 572,
                                                              width: `max((min(max(min(${g?.width || `100vw`}, 1600px) - 48px, 1px), 1080px) - 24px) / 2, 115px)`,
                                                              children: s(Ye, {
                                                                animate: {
                                                                  opacity: 1,
                                                                  rotate: 0,
                                                                  rotateX: 0,
                                                                  rotateY: 0,
                                                                  scale: 1,
                                                                  skewX: 0,
                                                                  skewY: 0,
                                                                  transition: J(
                                                                    q,
                                                                    o * 0.1,
                                                                  ),
                                                                  x: 0,
                                                                  y: 0,
                                                                },
                                                                className: `framer-1fs4sce-container`,
                                                                "data-framer-appear-id": `1fs4sce-${o}`,
                                                                initial: K,
                                                                nodeId: `jfvPJRTID`,
                                                                optimized: !0,
                                                                rendersWithMotion:
                                                                  !0,
                                                                scopeId: `JHJfURpkN`,
                                                                children: s(T, {
                                                                  breakpoint: M,
                                                                  overrides: {
                                                                    MEMKBGQ_u: {
                                                                      gxeyUhKR9:
                                                                        t[1],
                                                                      variant:
                                                                        G(
                                                                          `WeZA0eSBc`,
                                                                        ),
                                                                    },
                                                                    om1vdNYxD: {
                                                                      gxeyUhKR9:
                                                                        t[2],
                                                                      variant:
                                                                        G(
                                                                          `WeZA0eSBc`,
                                                                        ),
                                                                    },
                                                                  },
                                                                  children: s(
                                                                    I,
                                                                    {
                                                                      Ctu1ht6He:
                                                                        pt(
                                                                          a,
                                                                          Te,
                                                                        ),
                                                                      GA6hKt9L6:
                                                                        r,
                                                                      gxeyUhKR9:
                                                                        t[0],
                                                                      height: `100%`,
                                                                      id: `jfvPJRTID`,
                                                                      JrntB4uQL:
                                                                        e,
                                                                      layoutId: `jfvPJRTID`,
                                                                      SEBel0Jxh:
                                                                        ut(i),
                                                                      style: {
                                                                        width: `100%`,
                                                                      },
                                                                      variant:
                                                                        G(
                                                                          `hVUejLfH2`,
                                                                        ),
                                                                      width: `100%`,
                                                                    },
                                                                  ),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                      }),
                                                    }),
                                                  },
                                                  n,
                                                )
                                              ),
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
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-5AGOA.framer-1e1pdcy, .framer-5AGOA .framer-1e1pdcy { display: block; }`,
        `.framer-5AGOA.framer-14j1pn2 { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
        `.framer-5AGOA .framer-usv2zy { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 120px 24px; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-1b360ca { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 180px 0px 10px 0px; position: relative; width: 1px; }`,
        `.framer-5AGOA .framer-w346c2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-4qzkov-container, .framer-5AGOA .framer-pmgr6-container, .framer-5AGOA .framer-1npxo7q-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-5AGOA .framer-168pw51 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 620px; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-1tlja5j, .framer-5AGOA .framer-s31vp6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-1kr95m1 { background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); flex: none; gap: 0px; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-5AGOA .framer-j61ab7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-1sl7vgm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: wrap; gap: 8px 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-5AGOA .framer-1uv61dy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 200px; }`,
        `.framer-5AGOA .framer-kd0vi6 { --framer-input-background: var(--token-27bd6520-c1b1-4e4d-94a8-4d38b552143d, rgba(38, 38, 38, 0.85)); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 256px; --framer-input-border-radius-bottom-right: 256px; --framer-input-border-radius-top-left: 256px; --framer-input-border-radius-top-right: 256px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-icon-content: ""; --framer-input-icon-mask-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>'); --framer-input-padding: 11px; --framer-input-placeholder-color: var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-1lmdd99 { display: grid; flex: none; gap: 24px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(115px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5AGOA .framer-1fs4sce-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        ...Se,
        `.framer-5AGOA[data-border="true"]::after, .framer-5AGOA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-5AGOA.framer-14j1pn2 { width: 810px; } .framer-5AGOA .framer-1b360ca { gap: 36px; max-width: 720px; padding: 120px 0px 10px 0px; }}`,
        `@media (max-width: 809.98px) { .framer-5AGOA.framer-14j1pn2 { width: 375px; } .framer-5AGOA .framer-1b360ca { gap: 24px; max-width: 720px; padding: 120px 0px 24px 0px; } .framer-5AGOA .framer-168pw51 { max-width: 500px; } .framer-5AGOA .framer-j61ab7 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; } .framer-5AGOA .framer-1sl7vgm { flex: none; order: 0; width: 100%; } .framer-5AGOA .framer-1uv61dy { order: 1; width: 100%; } .framer-5AGOA .framer-1lmdd99 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px 36px; justify-content: flex-start; } .framer-5AGOA .framer-1fs4sce-container { align-self: unset; }}`,
      ],
      `framer-5AGOA`,
    )),
    ($.displayName = `Blog`),
    ($.defaultProps = { height: 4981.5, width: 1280 }),
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
          ],
        },
        ...Ue,
        ...Ke,
        ...Je,
        ...E(xe),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => {
            let e = await (async () => {
              let e = t.pathVariables?.[`category-new`] ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`ZtiWazyOp`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })();
            return {
              bZXzy3Y8m1: t.pathVariables?.title ?? void 0,
              Ou5dnCoeL1: e,
            };
          })(),
          i = P.get(Y(), n);
        return Promise.allSettled([
          i.preload(),
          r.then(({ Ou5dnCoeL1: e, bZXzy3Y8m1: t }) =>
            P.get(Z(e, t), n).preload(),
          ),
          r.then(({ Ou5dnCoeL1: e, bZXzy3Y8m1: t }) =>
            P.get(mt(e, t), n).preload(),
          ),
          b(R, {}, t),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(
              e.flatMap((e) => [b(H, {}, t), b(H, {}, t)]),
            );
          })(),
          (async () => {
            let { Ou5dnCoeL1: e, bZXzy3Y8m1: i } = await r,
              a = (await P.get(Z(e, i), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(a.flatMap((e) => b(I, {}, t)));
          })(),
        ]);
      },
    }),
    (_t = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJHJfURpkN`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"gGQFloYSu":{"pattern":":gGQFloYSu","name":"scroll"}}`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"MEMKBGQ_u":{"layout":["fixed","auto"]},"om1vdNYxD":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1280`,
            framerIntrinsicHeight: `4981.5`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
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
export { _t as __FramerMetadata__, $ as default, Ze as queryParamNames };
//# sourceMappingURL=FxofuR_JietVmuTpWIW4K5WvF-5zZO9SCjCDfhU3-vA.D5Q-1xI9.mjs.map
