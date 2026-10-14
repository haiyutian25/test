import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  V as i,
  c as a,
  d as o,
  j as s,
  l as c,
  m as l,
  o as u,
  p as d,
  s as f,
  w as ee,
  x as p,
  z as m,
} from "./react.CbTQkvGa.mjs";
import { M as h, i as te, o as g, t as _ } from "./motion.DqePFWeo.mjs";
import {
  A as v,
  At as ne,
  C as re,
  D as y,
  Dt as b,
  E as ie,
  Et as ae,
  G as x,
  H as S,
  I as oe,
  Nt as C,
  O as se,
  Ot as ce,
  P as w,
  Rt as le,
  S as T,
  Tt as E,
  W as D,
  X as O,
  _ as ue,
  _t as de,
  a as k,
  bt as fe,
  d as pe,
  ft as me,
  gt as he,
  h as ge,
  ht as _e,
  j as A,
  jt as j,
  k as ve,
  n as ye,
  nt as be,
  o as M,
  p as xe,
  r as Se,
  s as N,
  t as Ce,
  wt as we,
  x as Te,
  xt as Ee,
} from "./framer.CFgihyWK.mjs";
import {
  a as De,
  c as Oe,
  d as ke,
  f as Ae,
  i as je,
  l as Me,
  o as Ne,
  r as Pe,
  s as Fe,
  u as Ie,
} from "./shared-lib.t8-xaOwk.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./Bh7brll6H.qtsmKJJV.mjs";
import { n as Ve, t as He } from "./LgNu28hAv.T-w2QUq1.mjs";
import { i as Ue, n as We, r as Ge, t as Ke } from "./dvE5DE7ca.DiQM6HA0.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./nZtZfLTSW.DMk9jra7.mjs";
import {
  a as Ze,
  i as Qe,
  n as $e,
  o as et,
  r as tt,
  t as nt,
} from "./Carousel.C7jQVUHC.mjs";
import { n as rt, t as P } from "./Border_Glow_Card.hHoZa0OP.mjs";
import { i as it, n as at, r as ot, t as st } from "./Q_3jdt9X6.DkyYpPLX.mjs";
import {
  a as ct,
  i as lt,
  n as ut,
  o as dt,
  r as ft,
  t as pt,
} from "./vwqpZoZVi.D0PpBGTp.mjs";
import { n as mt, t as ht } from "./Pricing_Number.BkYtWJNt.mjs";
import {
  a as gt,
  i as _t,
  n as vt,
  o as yt,
  r as bt,
  t as xt,
} from "./m54zGBZ4w.CObtf37r.mjs";
import { i as St, n as Ct, r as wt, t as Tt } from "./gSwoAzhaJ.C2ngI3i2.mjs";
import Et, {
  t as Dt,
} from "./ScX63CftFd28dk0pQ64CVc4Ey6dIt3As5T9P0fei0Ek.CQTAhlec.mjs";
var Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft = e(() => {
    (f(),
      O(),
      r(),
      (Ot = `var(--framer-icon-mask)`),
      (kt = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (At = h.create(kt)),
      (jt = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(At, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Mt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 20 9 L 10 14 L 0 9 M 20 13 L 10 18 L 0 13 M 0 5 L 10 0 L 20 5 L 10 10 Z" fill="transparent" height="18px" id="TkfZkaC1V" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="20px"/></svg>`),
      (Nt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Pt = j(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Nt(e),
            l = b(`969614908`, Mt);
          return u(jt, {
            ...c,
            className: w(`framer-ROvqC`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-ROvqC { -webkit-mask: ${Ot}; aspect-ratio: 1; display: block; mask: ${Ot}; width: 24px; }`,
        ],
        `framer-ROvqC`,
      )),
      (Pt.displayName = `Layers Stack`),
      A(Pt, {
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
  }),
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut = e(() => {
    (f(),
      O(),
      r(),
      (It = `var(--framer-icon-mask)`),
      (Lt = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Rt = h.create(Lt)),
      (zt = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Rt, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Bt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 8 C 0 8 4 0 11 0 C 18 0 22 8 22 8" fill="transparent" height="8px" id="i1gQjUeG5" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(1 4)" width="22px"/><path d="M 0 0 C 0 0 4 8 11 8 C 18 8 22 0 22 0" fill="transparent" height="8px" id="Z46WJCsiS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(1 12)" width="22px"/><path d="M 3 6 C 4.657 6 6 4.657 6 3 C 6 1.343 4.657 0 3 0 C 1.343 0 0 1.343 0 3 C 0 4.657 1.343 6 3 6 Z" fill="transparent" height="6px" id="JCy6NQxG9" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(9 9)" width="6px"/></svg>`),
      (Vt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Ht = j(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Vt(e),
            l = b(`743045950`, Bt);
          return u(zt, {
            ...c,
            className: w(`framer-TQmuP`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-TQmuP { -webkit-mask: ${It}; aspect-ratio: 1; display: block; mask: ${It}; width: 24px; }`,
        ],
        `framer-TQmuP`,
      )),
      (Ht.displayName = `Eye Password`),
      A(Ht, {
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
  }),
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    (f(),
      O(),
      r(),
      (Wt = `var(--framer-icon-mask)`),
      (Gt = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Kt = h.create(Gt)),
      (qt = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(Kt, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (Jt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 14 L 16 18 M 18 16 L 14 16 M 9 0 C 9 4.971 4.971 9 0 9 C 4.971 9 9 13.029 9 18 C 9 13.029 13.029 9 18 9 C 13.029 9 9 4.971 9 0 Z M 2 0 C 2 1.105 1.105 2 0 2 C 1.105 2 2 2.895 2 4 C 2 2.895 2.895 2 4 2 C 2.895 2 2 1.105 2 0 Z" fill="transparent" height="18px" id="q6zTnnrPJ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="18px"/></svg>`),
      (Yt = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Xt = j(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = Yt(e),
            l = b(`2482595871`, Jt);
          return u(qt, {
            ...c,
            className: w(`framer-4Mv4Y`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-4Mv4Y { -webkit-mask: ${Wt}; aspect-ratio: 1; display: block; mask: ${Wt}; width: 24px; }`,
        ],
        `framer-4Mv4Y`,
      )),
      (Xt.displayName = `Sparkle Stars Ai 2`),
      A(Xt, {
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
  }),
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on = e(() => {
    (f(),
      O(),
      r(),
      (Qt = `var(--framer-icon-mask)`),
      ($t = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (en = h.create($t)),
      (tn = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(en, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (nn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10 0 L 10 6 M 10 14 L 10 20 M 20 10 L 14 10 M 6 10 L 0 10 M 18 10 C 18 14.418 14.418 18 10 18 C 5.582 18 2 14.418 2 10 C 2 5.582 5.582 2 10 2 C 14.418 2 18 5.582 18 10 Z" fill="transparent" height="20px" id="hzAZN6uh_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (rn = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (an = j(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = rn(e),
            l = b(`1925813472`, nn);
          return u(tn, {
            ...c,
            className: w(`framer-bstZN`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-bstZN { -webkit-mask: ${Qt}; aspect-ratio: 1; display: block; mask: ${Qt}; width: 24px; }`,
        ],
        `framer-bstZN`,
      )),
      (an.displayName = `Crosshair Target Center 2`),
      A(an, {
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
  }),
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn = e(() => {
    (f(),
      O(),
      r(),
      (sn = `var(--framer-icon-mask)`),
      (cn = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ln = h.create(cn)),
      (un = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(ln, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (dn = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.993 2.136 C 7.994 -0.202 4.66 -0.83 2.155 1.31 C -0.35 3.45 -0.703 7.029 1.264 9.56 C 2.9 11.665 7.85 16.104 9.472 17.541 C 9.654 17.702 9.744 17.782 9.85 17.814 C 9.943 17.841 10.044 17.841 10.136 17.814 C 10.242 17.782 10.333 17.702 10.514 17.541 C 12.137 16.104 17.087 11.665 18.722 9.56 C 20.689 7.029 20.38 3.428 17.832 1.31 C 15.284 -0.808 11.993 -0.202 9.993 2.136 Z" fill="transparent" height="17.834202051583222px" id="wkOguib3l" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 3)" width="19.999979971729495px"/></svg>`),
      (fn = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (pn = j(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = fn(e),
            l = b(`1749036910`, dn);
          return u(un, {
            ...c,
            className: w(`framer-qQQ9K`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-qQQ9K { -webkit-mask: ${sn}; aspect-ratio: 1; display: block; mask: ${sn}; width: 24px; }`,
        ],
        `framer-qQQ9K`,
      )),
      (pn.displayName = `Heart Love Like 2`),
      A(pn, {
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
function hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  F,
  An = e(() => {
    (f(),
      O(),
      _(),
      r(),
      mn(),
      rt(),
      Ie(),
      it(),
      (gn = S(P)),
      (_n = C(y)),
      (vn = [`FDE73ruHa`, `dKYsEg9hd`, `bS8XeHz72`]),
      (yn = `framer-CImsh`),
      (bn = {
        bS8XeHz72: `framer-v-e8tweh`,
        dKYsEg9hd: `framer-v-1xo5nxn`,
        FDE73ruHa: `framer-v-94ixhs`,
      }),
      (xn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Sn = {
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
      (Cn = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
      (wn = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
      (Tn = ({ value: e, children: t }) => {
        let r = s(g),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(g.Provider, { value: a, children: t });
      }),
      (En = {
        "Variant 1": `FDE73ruHa`,
        "Variant 2": `dKYsEg9hd`,
        Mobile: `bS8XeHz72`,
      }),
      (Dn = h.create(t)),
      (On = ({
        height: e,
        icon: t,
        icon2: n,
        id: r,
        text: i,
        width: a,
        ...o
      }) => ({
        ...o,
        ia_wRBnep:
          i ??
          o.ia_wRBnep ??
          `We place our customers at the heart of our work, striving to understand their needs and deliver solutions that make a real difference.`,
        kdII0fGO7: t ?? o.kdII0fGO7 ?? `Start with the Customer`,
        P7spVVjOg: n ?? o.P7spVVjOg ?? pn,
        variant: En[o.variant] ?? o.variant ?? `FDE73ruHa`,
      })),
      (kn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (F = j(
        d(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = fe();
          me();
          let {
              style: l,
              className: d,
              layoutId: f,
              variant: m,
              P7spVVjOg: g,
              kdII0fGO7: _,
              ia_wRBnep: v,
              ...re
            } = On(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ie,
              gestureHandlers: ae,
              gestureVariant: x,
              isLoading: S,
              setGestureState: oe,
              setVariant: C,
              variants: ce,
            } = ne({
              cycleOrder: vn,
              defaultVariant: `FDE73ruHa`,
              ref: i,
              variant: m,
              variantClassNames: bn,
            }),
            le = kn(e, ce),
            T = w(yn, st, Fe),
            E = () => y !== `bS8XeHz72`;
          return u(te, {
            id: f ?? a,
            children: u(Dn, {
              animate: ce,
              initial: !1,
              children: u(Tn, {
                value: xn,
                children: c(h.div, {
                  ...re,
                  ...ae,
                  className: w(T, `framer-94ixhs`, d, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: le,
                  layoutId: `FDE73ruHa`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...l,
                  },
                  variants: {
                    bS8XeHz72: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    dKYsEg9hd: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                  },
                  ...hn(
                    {
                      bS8XeHz72: { "data-framer-name": `Mobile` },
                      dKYsEg9hd: { "data-framer-name": `Variant 2` },
                    },
                    y,
                    x,
                  ),
                  children: [
                    E() &&
                      u(k, {
                        children: u(se, {
                          className: `framer-1b1k7f1-container`,
                          isAuthoredByUser: !0,
                          layoutDependency: le,
                          layoutId: `w63Yl6ARZ-container`,
                          nodeId: `w63Yl6ARZ`,
                          rendersWithMotion: !0,
                          scopeId: `jz19l_Y6i`,
                          children: u(P, {
                            baseBorderColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                            borderRadius: 24,
                            borderWidth: 1,
                            bottomLeft: 24,
                            bottomRight: 24,
                            cardBackground: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                            glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                            height: `100%`,
                            id: `w63Yl6ARZ`,
                            isMixed: !1,
                            layoutId: `w63Yl6ARZ`,
                            proximity: 490,
                            smoothing: 0.05,
                            style: { height: `100%`, width: `100%` },
                            topLeft: 24,
                            topRight: 24,
                            width: `100%`,
                          }),
                        }),
                      }),
                    u(k, {
                      children: u(se, {
                        className: `framer-1h6logv-container`,
                        isAuthoredByUser: !0,
                        layoutDependency: le,
                        layoutId: `qg1ZJU0JC-container`,
                        nodeId: `qg1ZJU0JC`,
                        rendersWithMotion: !0,
                        scopeId: `jz19l_Y6i`,
                        children: u(P, {
                          baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                          borderRadius: 16,
                          borderWidth: 1,
                          bottomLeft: 16,
                          bottomRight: 8,
                          cardBackground: `rgba(5, 4, 3, 0.9)`,
                          glowColor: `rgba(255, 255, 255, 0.5)`,
                          height: `100%`,
                          id: `qg1ZJU0JC`,
                          isMixed: !1,
                          layoutId: `qg1ZJU0JC`,
                          proximity: 490,
                          smoothing: 0.01,
                          style: { height: `100%`, width: `100%` },
                          topLeft: 16,
                          topRight: 8,
                          width: `100%`,
                        }),
                      }),
                    }),
                    u(h.div, {
                      className: `framer-15ax4nd`,
                      layoutDependency: le,
                      layoutId: `ABXgfxYup`,
                      children: u(ge, {
                        animated: !0,
                        className: `framer-15928g9`,
                        Component: g,
                        layoutDependency: le,
                        layoutId: `EIPjETAmR`,
                        style: {
                          "--1ww558a": 1,
                          "--4rxgx6": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                        },
                      }),
                    }),
                    c(h.div, {
                      className: `framer-1v29cha`,
                      layoutDependency: le,
                      layoutId: `PgXiUhUCK`,
                      children: [
                        u(_n, {
                          __framer__animate: { transition: Cn },
                          __framer__animateOnce: !0,
                          __framer__enter: Sn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0.5,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          children: u(t, {
                            children: u(h.h6, {
                              className: `framer-styles-preset-b70r5p`,
                              "data-styles-preset": `Q_3jdt9X6`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                              },
                              children: `Start with the Customer`,
                            }),
                          }),
                          className: `framer-u087b2`,
                          fonts: [`Inter`],
                          layoutDependency: le,
                          layoutId: `KiB4RJjpt`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(_n, {
                          __framer__animate: { transition: wn },
                          __framer__animateOnce: !0,
                          __framer__enter: Sn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __fromCanvasComponent: !0,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          children: u(t, {
                            children: u(h.p, {
                              className: `framer-styles-preset-1fhxhj6`,
                              "data-styles-preset": `O0790qsZT`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)))`,
                              },
                              children: `We place our customers at the heart of our work, striving to understand their needs and deliver solutions that make a real difference.`,
                            }),
                          }),
                          className: `framer-sszkqo`,
                          fonts: [`Inter`],
                          layoutDependency: le,
                          layoutId: `gFriSeZXc`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `.framer-CImsh.framer-1qyfbnb, .framer-CImsh .framer-1qyfbnb { display: block; }`,
          `.framer-CImsh.framer-94ixhs { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 327px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 357px; }`,
          `.framer-CImsh .framer-1b1k7f1-container { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; z-index: 0; }`,
          `.framer-CImsh .framer-1h6logv-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-CImsh .framer-15ax4nd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 36px; position: relative; width: 100%; }`,
          `.framer-CImsh .framer-15928g9 { flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 28px; }`,
          `.framer-CImsh .framer-1v29cha { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 36px 36px 36px; position: relative; width: 100%; }`,
          `.framer-CImsh .framer-u087b2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-CImsh .framer-sszkqo { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-CImsh.framer-v-e8tweh .framer-15ax4nd { padding: 28px; }`,
          `.framer-CImsh.framer-v-e8tweh .framer-1v29cha { padding: 0px 28px 28px 28px; }`,
          ...at,
          ...Oe,
        ],
        `framer-CImsh`,
      )),
      (F.displayName = `value`),
      (F.defaultProps = { height: 327, width: 357 }),
      A(F, {
        variant: {
          options: [`FDE73ruHa`, `dKYsEg9hd`, `bS8XeHz72`],
          optionTitles: [`Variant 1`, `Variant 2`, `Mobile`],
          title: `Variant`,
          type: N.Enum,
        },
        P7spVVjOg: {
          defaultValue: {
            identifier: `module:Ns8Xyq6xwpeZP0r53TiQ/kusycEwX0UVTS3gEgmBx/bfuL5KwIT.js:default`,
            moduleId: `Ns8Xyq6xwpeZP0r53TiQ`,
          },
          setModuleId: `E1vFg1A6wcWAGuFi9Hz1`,
          title: `Icon 2`,
          type: N.VectorSetItem,
        },
        kdII0fGO7: {
          defaultValue: `Start with the Customer`,
          displayTextArea: !1,
          title: `Icon`,
          type: N.String,
        },
        onkdII0fGO7Change: { changes: `kdII0fGO7`, type: N.ChangeHandler },
        ia_wRBnep: {
          defaultValue: `We place our customers at the heart of our work, striving to understand their needs and deliver solutions that make a real difference.`,
          displayTextArea: !1,
          title: `Text`,
          type: N.String,
        },
        onia_wRBnepChange: { changes: `ia_wRBnep`, type: N.ChangeHandler },
      }),
      v(
        F,
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
          ...gn,
          ...D(ot),
          ...D(Me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function jn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  I,
  Un = e(() => {
    (f(),
      O(),
      _(),
      r(),
      Ue(),
      Ne(),
      (Mn = [`uL_1a3bfb`, `pasUMb4hu`]),
      (Nn = `framer-7RJ0G`),
      (Pn = { pasUMb4hu: `framer-v-r6m9xt`, uL_1a3bfb: `framer-v-j31xcq` }),
      (Fn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (In = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ln = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Rn = ({ value: e, children: t }) => {
        let r = s(g),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(g.Provider, { value: a, children: t });
      }),
      (zn = { Fill: `uL_1a3bfb`, Fit: `pasUMb4hu` }),
      (Bn = h.create(t)),
      (Vn = ({
        height: e,
        id: t,
        image: n,
        title: r,
        title2: i,
        width: a,
        ...o
      }) => ({
        ...o,
        fInE8STef: r ?? o.fInE8STef ?? `Marcus Chen`,
        hvz8VtdcM: i ?? o.hvz8VtdcM ?? `CEO and co-founder`,
        uW2w7qvgf: n ?? o.uW2w7qvgf,
        variant: zn[o.variant] ?? o.variant ?? `uL_1a3bfb`,
      })),
      (Hn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (I = j(
        d(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = fe(),
            l = me(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: g,
              fInE8STef: _,
              hvz8VtdcM: v,
              uW2w7qvgf: re,
              ...b
            } = Vn(e),
            {
              baseVariant: ie,
              classNames: ae,
              clearLoadingGesture: S,
              gestureHandlers: oe,
              gestureVariant: C,
              isLoading: se,
              setGestureState: ce,
              setVariant: le,
              variants: T,
            } = ne({
              cycleOrder: Mn,
              defaultVariant: `uL_1a3bfb`,
              ref: i,
              variant: g,
              variantClassNames: Pn,
            }),
            E = Hn(e, T),
            D = w(Nn, Pe, Ke),
            O = Ln(v);
          return u(te, {
            id: m ?? a,
            children: u(Bn, {
              animate: T,
              initial: !1,
              children: u(Rn, {
                value: Fn,
                children: c(h.div, {
                  ...b,
                  ...oe,
                  className: w(D, `framer-j31xcq`, f, ae),
                  "data-framer-name": `Fill`,
                  layoutDependency: E,
                  layoutId: `uL_1a3bfb`,
                  ref: i,
                  style: { ...d },
                  ...jn({ pasUMb4hu: { "data-framer-name": `Fit` } }, ie, C),
                  children: [
                    u(xe, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 84.5,
                        intrinsicWidth: 127,
                        loading: x(
                          (l?.y || 0) + (0 + ((l?.height || 48) - 0 - 48) / 2),
                        ),
                        pixelHeight: 169,
                        pixelWidth: 254,
                        sizes: `48px`,
                        ...In(re),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-1oqmajs`,
                      "data-framer-name": `image`,
                      layoutDependency: E,
                      layoutId: `wIyGl3L3l`,
                      style: {
                        borderBottomLeftRadius: 166,
                        borderBottomRightRadius: 166,
                        borderTopLeftRadius: 166,
                        borderTopRightRadius: 166,
                      },
                    }),
                    c(h.div, {
                      className: `framer-1j0beyt`,
                      "data-framer-name": `Content`,
                      layoutDependency: E,
                      layoutId: `JqCMPKr8_`,
                      children: [
                        u(y, {
                          __fromCanvasComponent: !0,
                          children: u(t, {
                            children: u(h.p, {
                              className: `framer-styles-preset-prenqk`,
                              "data-styles-preset": `POYKcChXw`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                              },
                              children: `Marcus Chen`,
                            }),
                          }),
                          className: `framer-1l4rpld`,
                          fonts: [`Inter`],
                          layoutDependency: E,
                          layoutId: `vQe_R_QMp`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        O !== !1 &&
                          u(y, {
                            __fromCanvasComponent: !0,
                            children: u(t, {
                              children: u(h.p, {
                                className: `framer-styles-preset-10qv886`,
                                "data-styles-preset": `dvE5DE7ca`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)))`,
                                },
                                children: `CEO and co-founder`,
                              }),
                            }),
                            className: `framer-g9upvo`,
                            fonts: [`Inter`],
                            layoutDependency: E,
                            layoutId: `MDd2MXViF`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: v,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
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
          `.framer-7RJ0G.framer-tu7fan, .framer-7RJ0G .framer-tu7fan { display: block; }`,
          `.framer-7RJ0G.framer-j31xcq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 267px; }`,
          `.framer-7RJ0G .framer-1oqmajs { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 48px); justify-content: center; overflow: visible; padding: 0px 0px 30px 0px; position: relative; width: 48px; }`,
          `.framer-7RJ0G .framer-1j0beyt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
          `.framer-7RJ0G .framer-1l4rpld, .framer-7RJ0G .framer-g9upvo { flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7RJ0G.framer-v-r6m9xt.framer-j31xcq { width: min-content; }`,
          `.framer-7RJ0G.framer-v-r6m9xt .framer-1j0beyt { flex: none; width: min-content; }`,
          `.framer-7RJ0G.framer-v-r6m9xt .framer-1l4rpld, .framer-7RJ0G.framer-v-r6m9xt .framer-g9upvo { white-space: pre; width: auto; }`,
          ...je,
          ...We,
        ],
        `framer-7RJ0G`,
      )),
      (I.displayName = `person chip`),
      (I.defaultProps = { height: 48, width: 267 }),
      A(I, {
        variant: {
          options: [`uL_1a3bfb`, `pasUMb4hu`],
          optionTitles: [`Fill`, `Fit`],
          title: `Variant`,
          type: N.Enum,
        },
        fInE8STef: {
          defaultValue: `Marcus Chen`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onfInE8STefChange: { changes: `fInE8STef`, type: N.ChangeHandler },
        hvz8VtdcM: {
          defaultValue: `CEO and co-founder`,
          displayTextArea: !1,
          title: `Title 2`,
          type: N.String,
        },
        onhvz8VtdcMChange: { changes: `hvz8VtdcM`, type: N.ChangeHandler },
        uW2w7qvgf: { title: `Image`, type: N.ResponsiveImage },
      }),
      v(
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
          ...D(De),
          ...D(Ge),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  L,
  $n = e(() => {
    (f(),
      O(),
      _(),
      r(),
      mt(),
      Ie(),
      (Wn = S(ht)),
      (Gn = `framer-0Cx5u`),
      (Kn = { b8UL2xKIN: `framer-v-z83g84` }),
      (qn = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Jn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Yn = ({ value: e, children: t }) => {
        let r = s(g),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(g.Provider, { value: a, children: t });
      }),
      (Xn = h.create(t)),
      (Zn = ({
        height: e,
        id: t,
        number: n,
        padding: r,
        suffix: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        LziHZyBf5: i ?? s.LziHZyBf5 ?? `M`,
        Re0HzYvt6: r ?? s.Re0HzYvt6 ?? `36px`,
        S1evmzbVh:
          a ?? s.S1evmzbVh ?? `Users trust segmentUI component library`,
        z2lmmQucD: n ?? s.z2lmmQucD ?? 49,
      })),
      (Qn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (L = j(
        d(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = fe();
          me();
          let {
              style: l,
              className: d,
              layoutId: f,
              variant: m,
              S1evmzbVh: g,
              z2lmmQucD: _,
              LziHZyBf5: v,
              Re0HzYvt6: re,
              ...b
            } = Zn(e),
            {
              baseVariant: ie,
              classNames: ae,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: oe,
              isLoading: C,
              setGestureState: ce,
              setVariant: le,
              variants: T,
            } = ne({
              defaultVariant: `b8UL2xKIN`,
              ref: i,
              variant: m,
              variantClassNames: Kn,
            }),
            E = Qn(e, T),
            D = w(Gn, Fe);
          return u(te, {
            id: f ?? a,
            children: u(Xn, {
              animate: T,
              initial: !1,
              children: u(Yn, {
                value: Jn,
                children: u(h.div, {
                  ...b,
                  ...S,
                  className: w(D, `framer-z83g84`, d, ae),
                  "data-framer-name": `Desktop`,
                  layoutDependency: E,
                  layoutId: `b8UL2xKIN`,
                  ref: i,
                  style: { "--uyo0ed": qn(re), ...l },
                  children: c(h.div, {
                    className: `framer-14a10kh`,
                    layoutDependency: E,
                    layoutId: `MQ37RSdQu`,
                    children: [
                      u(k, {
                        children: u(se, {
                          className: `framer-1qgnel4-container`,
                          isAuthoredByUser: !0,
                          layoutDependency: E,
                          layoutId: `LWPzbpmj0-container`,
                          nodeId: `LWPzbpmj0`,
                          rendersWithMotion: !0,
                          scopeId: `tAU1YPA0t`,
                          children: u(ht, {
                            appearDuration: 1.2,
                            color: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            duration: 0.6,
                            font: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontSize: `28px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `-0.03em`,
                              lineHeight: `1.3em`,
                            },
                            height: `100%`,
                            id: `LWPzbpmj0`,
                            layoutId: `LWPzbpmj0`,
                            prefix: ``,
                            suffix: v,
                            value: _,
                            width: `100%`,
                          }),
                        }),
                      }),
                      u(y, {
                        __fromCanvasComponent: !0,
                        children: u(t, {
                          children: u(h.p, {
                            className: `framer-styles-preset-1fhxhj6`,
                            "data-styles-preset": `O0790qsZT`,
                            dir: `auto`,
                            style: { "--framer-text-alignment": `center` },
                            children: `Users trust segmentUI component library`,
                          }),
                        }),
                        className: `framer-nx31i4`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `OpZuXd7AT`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: g,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0Cx5u.framer-1s6o7zr, .framer-0Cx5u .framer-1s6o7zr { display: block; }`,
          `.framer-0Cx5u.framer-z83g84 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: var(--uyo0ed); position: relative; width: 1248px; }`,
          `.framer-0Cx5u .framer-14a10kh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-0Cx5u .framer-1qgnel4-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-0Cx5u .framer-nx31i4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          ...Oe,
        ],
        `framer-0Cx5u`,
      )),
      (L.displayName = `Count Up Card`),
      (L.defaultProps = { height: 137.5, width: 1248 }),
      A(L, {
        S1evmzbVh: {
          defaultValue: `Users trust segmentUI component library`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onS1evmzbVhChange: { changes: `S1evmzbVh`, type: N.ChangeHandler },
        z2lmmQucD: {
          defaultValue: 49,
          max: 9999,
          min: 0,
          title: `Number`,
          type: N.Number,
        },
        onz2lmmQucDChange: { changes: `z2lmmQucD`, type: N.ChangeHandler },
        LziHZyBf5: {
          defaultValue: `M`,
          displayTextArea: !1,
          title: `Suffix`,
          type: N.String,
        },
        onLziHZyBf5Change: { changes: `LziHZyBf5`, type: N.ChangeHandler },
        Re0HzYvt6: { defaultValue: `36px`, title: `Padding`, type: N.Padding },
      }),
      v(
        L,
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
          ...Wn,
          ...D(Me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr = e(() => {
    (f(),
      O(),
      r(),
      (er = `var(--framer-icon-mask)`),
      (tr = d(function (e, t) {
        return u(`svg`, { ...e, ref: t, children: e.children });
      })),
      (nr = h.create(tr)),
      (rr = d((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? u(nr, { ...a, layoutId: r, ref: t, children: i })
          : u(`svg`, { ...a, ref: t, children: i });
      })),
      (ir = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 13 0 L 0 13 M 13 0 L 3 0 M 13 0 L 13 10" fill="transparent" height="13px" id="DzL2VWb89" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5.5 5.5)" width="13px"/></svg>`),
      (ar = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (or = j(
        d(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = ar(e),
            l = b(`132019778`, ir);
          return u(rr, {
            ...c,
            className: w(`framer-faZej`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: u(`use`, { href: l }),
          });
        }),
        [
          `.framer-faZej { -webkit-mask: ${er}; aspect-ratio: 1; display: block; mask: ${er}; width: 24px; }`,
        ],
        `framer-faZej`,
      )),
      (or.displayName = `Arrow Top Right`),
      A(or, {
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
function cr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var lr,
  ur,
  dr,
  fr,
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
  Tr = e(() => {
    (f(),
      O(),
      _(),
      r(),
      sr(),
      rt(),
      St(),
      Ie(),
      Ne(),
      (lr = S(P)),
      (ur = S(or)),
      (dr = { XNtMSWUk6: { hover: !0 } }),
      (fr = [`XNtMSWUk6`, `hGIUok0Y8`]),
      (pr = `framer-fALCz`),
      (mr = { hGIUok0Y8: `framer-v-11cr0ox`, XNtMSWUk6: `framer-v-1dyixri` }),
      (hr = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (gr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_r = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (vr = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (yr = ({ value: e, children: t }) => {
        let r = s(g),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(g.Provider, { value: a, children: t });
      }),
      (br = { Desktop: `XNtMSWUk6`, Mobile: `hGIUok0Y8` }),
      (xr = h.create(t)),
      (Sr = ({
        category: e,
        height: t,
        id: n,
        link: r,
        location: i,
        padding: a,
        time: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        aR8e7WnAX: e ?? l.aR8e7WnAX ?? `Engineering`,
        azm7Wvabe: s ?? l.azm7Wvabe ?? `Backend Platform Engineer`,
        Be7cpAzgk: i ?? l.Be7cpAzgk ?? `Remote`,
        cj2dmn7f7: o ?? l.cj2dmn7f7 ?? `Full-time`,
        lw1_LnDat: a ?? l.lw1_LnDat ?? `36px`,
        oa5Cu7XDR: r ?? l.oa5Cu7XDR,
        variant: br[l.variant] ?? l.variant ?? `XNtMSWUk6`,
      })),
      (Cr = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (wr = j(
        d(function (e, n) {
          let r = p(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: s } = fe();
          me();
          let {
              style: l,
              className: d,
              layoutId: f,
              variant: m,
              azm7Wvabe: g,
              aR8e7WnAX: _,
              Be7cpAzgk: v,
              cj2dmn7f7: re,
              lw1_LnDat: b,
              oa5Cu7XDR: ie,
              ...ae
            } = Sr(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: oe,
              gestureHandlers: C,
              gestureVariant: ce,
              isLoading: le,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = ne({
              cycleOrder: fr,
              defaultVariant: `XNtMSWUk6`,
              enabledGestures: dr,
              ref: i,
              variant: m,
              variantClassNames: mr,
            }),
            O = Cr(e, D),
            de = w(pr, Tt, Pe, Fe),
            pe = vr(_),
            he = vr(v),
            ge = vr(re);
          return u(te, {
            id: f ?? a,
            children: u(xr, {
              animate: D,
              initial: !1,
              children: u(yr, {
                value: gr,
                ...cr({ hGIUok0Y8: { value: _r } }, x, ce),
                children: u(ue, {
                  href: ie,
                  motionChild: !0,
                  nodeId: `XNtMSWUk6`,
                  scopeId: `YCc2UDGR0`,
                  children: c(h.a, {
                    ...ae,
                    ...C,
                    className: `${w(de, `framer-1dyixri`, d, S)} framer-13twaq8`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: O,
                    layoutId: `XNtMSWUk6`,
                    ref: i,
                    style: { "--xyn81k": hr(b), ...l },
                    ...cr(
                      {
                        "XNtMSWUk6-hover": { "data-framer-name": void 0 },
                        hGIUok0Y8: { "data-framer-name": `Mobile` },
                      },
                      x,
                      ce,
                    ),
                    children: [
                      u(k, {
                        children: u(se, {
                          className: `framer-qlwgki-container`,
                          isAuthoredByUser: !0,
                          layoutDependency: O,
                          layoutId: `XPSfaP53u-container`,
                          nodeId: `XPSfaP53u`,
                          rendersWithMotion: !0,
                          scopeId: `YCc2UDGR0`,
                          children: u(P, {
                            baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                            borderRadius: 16,
                            borderWidth: 1,
                            bottomLeft: 16,
                            bottomRight: 8,
                            cardBackground: `rgba(5, 4, 3, 0.9)`,
                            glowColor: `rgba(255, 255, 255, 0.5)`,
                            height: `100%`,
                            id: `XPSfaP53u`,
                            isMixed: !1,
                            layoutId: `XPSfaP53u`,
                            proximity: 220,
                            smoothing: 0.01,
                            style: { height: `100%`, width: `100%` },
                            topLeft: 16,
                            topRight: 8,
                            width: `100%`,
                            ...cr(
                              {
                                "XNtMSWUk6-hover": { proximity: 500 },
                                hGIUok0Y8: {
                                  cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                },
                              },
                              x,
                              ce,
                            ),
                          }),
                        }),
                      }),
                      c(h.div, {
                        className: `framer-1q3viym`,
                        layoutDependency: O,
                        layoutId: `DeNaf8ODL`,
                        children: [
                          u(y, {
                            __fromCanvasComponent: !0,
                            children: u(t, {
                              children: u(h.h5, {
                                className: `framer-styles-preset-qfhoqo`,
                                "data-styles-preset": `gSwoAzhaJ`,
                                dir: `auto`,
                                children: `Backend Platform Engineer`,
                              }),
                            }),
                            className: `framer-9xo99c`,
                            fonts: [`Inter`],
                            layoutDependency: O,
                            layoutId: `MJjkVPNXo`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: g,
                            variants: {
                              hGIUok0Y8: {
                                "--extracted-r6o4lv": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 255, 255))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...cr(
                              {
                                hGIUok0Y8: {
                                  children: u(t, {
                                    children: u(h.p, {
                                      className: `framer-styles-preset-prenqk`,
                                      "data-styles-preset": `POYKcChXw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 255, 255)))`,
                                      },
                                      children: `Backend Platform Engineer`,
                                    }),
                                  }),
                                },
                              },
                              x,
                              ce,
                            ),
                          }),
                          c(h.div, {
                            className: `framer-7p3f5o`,
                            layoutDependency: O,
                            layoutId: `z76WRP0fh`,
                            children: [
                              pe !== !1 &&
                                u(h.div, {
                                  className: `framer-zip0pw`,
                                  "data-border": !0,
                                  "data-framer-name": `Chip`,
                                  layoutDependency: O,
                                  layoutId: `y5467ZZ1C`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(23, 23, 23, 0.85))`,
                                    borderBottomLeftRadius: 393,
                                    borderBottomRightRadius: 393,
                                    borderTopLeftRadius: 393,
                                    borderTopRightRadius: 393,
                                  },
                                  children: u(y, {
                                    __fromCanvasComponent: !0,
                                    children: u(t, {
                                      children: u(h.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)))`,
                                        },
                                        children: `Update 2.0 is now live`,
                                      }),
                                    }),
                                    className: `framer-1db51of`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `IBDAeFCJc`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                    },
                                    text: _,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              he !== !1 &&
                                u(h.div, {
                                  className: `framer-jr5twd`,
                                  "data-border": !0,
                                  "data-framer-name": `Chip`,
                                  layoutDependency: O,
                                  layoutId: `xMhziNWeK`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(23, 23, 23, 0.85))`,
                                    borderBottomLeftRadius: 393,
                                    borderBottomRightRadius: 393,
                                    borderTopLeftRadius: 393,
                                    borderTopRightRadius: 393,
                                  },
                                  children: u(y, {
                                    __fromCanvasComponent: !0,
                                    children: u(t, {
                                      children: u(h.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)))`,
                                        },
                                        children: `Update 2.0 is now live`,
                                      }),
                                    }),
                                    className: `framer-j2qzan`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `Q4tN_xvMy`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                    },
                                    text: v,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ge !== !1 &&
                                u(h.div, {
                                  className: `framer-7ozi92`,
                                  "data-border": !0,
                                  "data-framer-name": `Chip`,
                                  layoutDependency: O,
                                  layoutId: `qInPmsE5C`,
                                  style: {
                                    "--border-bottom-width": `1px`,
                                    "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                    "--border-left-width": `1px`,
                                    "--border-right-width": `1px`,
                                    "--border-style": `solid`,
                                    "--border-top-width": `1px`,
                                    backgroundColor: `var(--token-feab5ab7-d914-42dd-ad2d-73b5c8596806, rgba(23, 23, 23, 0.85))`,
                                    borderBottomLeftRadius: 393,
                                    borderBottomRightRadius: 393,
                                    borderTopLeftRadius: 393,
                                    borderTopRightRadius: 393,
                                  },
                                  children: u(y, {
                                    __fromCanvasComponent: !0,
                                    children: u(t, {
                                      children: u(h.p, {
                                        className: `framer-styles-preset-1fhxhj6`,
                                        "data-styles-preset": `O0790qsZT`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)))`,
                                        },
                                        children: `Update 2.0 is now live`,
                                      }),
                                    }),
                                    className: `framer-1wcud7i`,
                                    fonts: [`Inter`],
                                    layoutDependency: O,
                                    layoutId: `HuG6hY9bq`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                    },
                                    text: re,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      u(h.div, {
                        className: `framer-bmr3ii`,
                        layoutDependency: O,
                        layoutId: `hmeIWhLLo`,
                        children: u(or, {
                          animated: !0,
                          className: `framer-7q5b45`,
                          layoutDependency: O,
                          layoutId: `t4DlTJBpO`,
                          style: {
                            "--1ww558a": 1,
                            "--4rxgx6": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                            opacity: 0.25,
                          },
                          variants: {
                            "XNtMSWUk6-hover": { opacity: 1 },
                            hGIUok0Y8: { opacity: 1 },
                          },
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-fALCz.framer-13twaq8, .framer-fALCz .framer-13twaq8 { display: block; }`,
          `.framer-fALCz.framer-1dyixri { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: var(--xyn81k); position: relative; text-decoration: none; width: 800px; }`,
          `.framer-fALCz .framer-qlwgki-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-fALCz .framer-1q3viym { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-fALCz .framer-9xo99c { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-fALCz .framer-7p3f5o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-fALCz .framer-zip0pw, .framer-fALCz .framer-jr5twd, .framer-fALCz .framer-7ozi92 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 30px; justify-content: center; overflow: hidden; padding: 4px 16px 4px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-fALCz .framer-1db51of, .framer-fALCz .framer-j2qzan, .framer-fALCz .framer-1wcud7i { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-fALCz .framer-bmr3ii { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 32px; }`,
          `.framer-fALCz .framer-7q5b45 { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-fALCz.framer-v-11cr0ox.framer-1dyixri { cursor: unset; }`,
          `.framer-fALCz.framer-v-11cr0ox .framer-1q3viym { gap: 12px; }`,
          `.framer-fALCz.framer-v-11cr0ox .framer-bmr3ii { height: 24px; width: 24px; }`,
          ...Ct,
          ...je,
          ...Oe,
          `.framer-fALCz[data-border="true"]::after, .framer-fALCz [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-fALCz`,
      )),
      (wr.displayName = `job posting`),
      (wr.defaultProps = { height: 151.5, width: 800 }),
      A(wr, {
        variant: {
          options: [`XNtMSWUk6`, `hGIUok0Y8`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: N.Enum,
        },
        azm7Wvabe: {
          defaultValue: `Backend Platform Engineer`,
          displayTextArea: !1,
          title: `Title`,
          type: N.String,
        },
        onazm7WvabeChange: { changes: `azm7Wvabe`, type: N.ChangeHandler },
        aR8e7WnAX: {
          defaultValue: `Engineering`,
          displayTextArea: !1,
          title: `Category`,
          type: N.String,
        },
        onaR8e7WnAXChange: { changes: `aR8e7WnAX`, type: N.ChangeHandler },
        Be7cpAzgk: {
          defaultValue: `Remote`,
          displayTextArea: !1,
          title: `Location`,
          type: N.String,
        },
        onBe7cpAzgkChange: { changes: `Be7cpAzgk`, type: N.ChangeHandler },
        cj2dmn7f7: {
          defaultValue: `Full-time`,
          displayTextArea: !1,
          title: `Time`,
          type: N.String,
        },
        oncj2dmn7f7Change: { changes: `cj2dmn7f7`, type: N.ChangeHandler },
        lw1_LnDat: { defaultValue: `36px`, title: `Padding`, type: N.Padding },
        oa5Cu7XDR: { title: `Link`, type: N.Link },
      }),
      v(
        wr,
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
          ...lr,
          ...ur,
          ...D(wt),
          ...D(De),
          ...D(Me),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
function Er(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function R(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Dr(e) {
  throw Error(`Unexpected value: ${e}`);
}
function Or(e) {
  return typeof e == `string`;
}
function kr(e) {
  return Number.isFinite(e);
}
function Ar(e) {
  return e === null;
}
function jr(e) {
  if (Ar(e)) return 0;
  switch (e.type) {
    case N.Array:
      return 1;
    case N.Boolean:
      return 2;
    case N.Color:
      return 3;
    case N.Date:
      return 4;
    case N.Enum:
      return 5;
    case N.File:
      return 6;
    case N.ResponsiveImage:
      return 10;
    case N.Link:
      return 7;
    case N.Number:
      return 8;
    case N.Object:
      return 9;
    case N.RichText:
      return 11;
    case N.String:
      return 12;
    case N.VectorSetItem:
      return 13;
    default:
      Dr(e);
  }
}
function Mr(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = z.read(e);
    n.push(t);
  }
  return { type: N.Array, value: n };
}
function Nr(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) z.write(e, n);
}
function Pr(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = z.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Fr(e) {
  return { type: N.Boolean, value: e.readUint8() !== 0 };
}
function Ir(e, t) {
  e.writeUint8(+!!t.value);
}
function Lr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Rr(e) {
  return { type: N.Color, value: e.readString() };
}
function zr(e, t) {
  e.writeString(t.value);
}
function Br(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Vr(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: N.Date, value: n.toISOString() };
}
function Hr(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ur(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Wr(e) {
  return { type: N.Enum, value: e.readString() };
}
function Gr(e, t) {
  e.writeString(t.value);
}
function Kr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qr(e) {
  return { type: N.File, value: e.readString() };
}
function Jr(e, t) {
  e.writeString(t.value);
}
function Yr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Xr(e) {
  return { type: N.Link, value: e.readJson() };
}
function Zr(e, t) {
  e.writeJson(t.value);
}
function Qr(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function $r(e) {
  return { type: N.Number, value: e.readFloat64() };
}
function ei(e, t) {
  e.writeFloat64(t.value);
}
function ti(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ni(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = z.read(e);
  }
  return { type: N.Object, value: n };
}
function ri(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), z.write(e, r));
}
function ii(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = z.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function ai(e) {
  return { type: N.ResponsiveImage, value: e.readJson() };
}
function oi(e, t) {
  e.writeJson(t.value);
}
function si(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ci(e) {
  let t = e.readInt8();
  if (t === 0) return { type: N.RichText, value: e.readUint32() };
  if (t === 1) return { type: N.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function li(e, t) {
  if (kr(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (Or(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function ui(e, t) {
  let n = e.value,
    r = t.value;
  if ((kr(n) && kr(r)) || (Or(n) && Or(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function di(e) {
  return { type: N.String, value: e.readString() };
}
function fi(e, t) {
  e.writeString(t.value);
}
function pi(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function mi(e) {
  return { type: N.VectorSetItem, value: e.readUint32() };
}
function hi(e, t) {
  e.writeUint32(t.value);
}
function gi(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function _i(e) {
  let t = Math.floor(Ri * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function vi(e, t) {
  let n = bi(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Bi(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Vi(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function yi(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function bi(e) {
  R(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var z,
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
  B,
  ji,
  V,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi = e(() => {
    (m(),
      O(),
      (xi = Object.create),
      (Si = Object.defineProperty),
      (Ci = Object.getOwnPropertyDescriptor),
      (wi = Object.getOwnPropertyNames),
      (Ti = Object.getPrototypeOf),
      (Ei = Object.prototype.hasOwnProperty),
      (Di = (e, t, n) =>
        t in e
          ? Si(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (Oi = (e, t) =>
        function () {
          return (
            t || (0, e[wi(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (ki = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of wi(t))
            Ei.call(e, i) ||
              i === n ||
              Si(e, i, {
                get: () => t[i],
                enumerable: !(r = Ci(t, i)) || r.enumerable,
              });
        return e;
      }),
      (Ai = (e, t, n) => (
        (n = e == null ? {} : xi(Ti(e))),
        ki(
          !t && e && e.__esModule
            ? n
            : Si(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (B = (e, t, n) => Di(e, typeof t == `symbol` ? t : t + ``, n)),
      (ji = Ai(
        Oi({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (V = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Mi = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = V.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = V.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = V.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = V.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = V.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = V.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = V.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = V.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = V.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = V.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            B(this, `offset`, 0),
            B(this, `view`),
            B(this, `decoder`, new TextDecoder()),
            (this.view = Er(this.bytes)));
        }
      }),
      i !== void 0 && i.requestIdleCallback,
      (Ni = (e) => 2 ** e - 1),
      (Pi = (e) => -(2 ** (e - 1))),
      (Fi = (e) => 2 ** (e - 1) - 1),
      Pi(8),
      Pi(16),
      Pi(32),
      -(BigInt(2) ** BigInt(63)),
      Ni(8),
      Ni(16),
      Ni(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Fi(8),
      Fi(16),
      Fi(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (Ii = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            R(kr(n), `Invalid chunkId`),
            R(kr(r), `Invalid offset`),
            R(kr(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (R(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Mr(e);
            case 2:
              return Fr(e);
            case 3:
              return Rr(e);
            case 4:
              return Vr(e);
            case 5:
              return Wr(e);
            case 6:
              return qr(e);
            case 7:
              return Xr(e);
            case 8:
              return $r(e);
            case 9:
              return ni(e);
            case 10:
              return ai(e);
            case 11:
              return ci(e);
            case 12:
              return di(e);
            case 13:
              return mi(e);
            default:
              Dr(t);
          }
        }),
          (e.write = function (e, t) {
            let n = jr(t);
            if ((e.writeUint8(n), !Ar(t)))
              switch (t.type) {
                case N.Array:
                  return Nr(e, t);
                case N.Boolean:
                  return Ir(e, t);
                case N.Color:
                  return zr(e, t);
                case N.Date:
                  return Hr(e, t);
                case N.Enum:
                  return Gr(e, t);
                case N.File:
                  return Jr(e, t);
                case N.Link:
                  return Zr(e, t);
                case N.Number:
                  return ei(e, t);
                case N.Object:
                  return ri(e, t);
                case N.ResponsiveImage:
                  return oi(e, t);
                case N.RichText:
                  return li(e, t);
                case N.VectorSetItem:
                  return hi(e, t);
                case N.String:
                  return fi(e, t);
                default:
                  Dr(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = jr(e),
              i = jr(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (Ar(e) || Ar(t)) return 0;
            switch (e.type) {
              case N.Array:
                return (R(t.type === N.Array), Pr(e, t, n));
              case N.Boolean:
                return (R(t.type === N.Boolean), Lr(e, t));
              case N.Color:
                return (R(t.type === N.Color), Br(e, t));
              case N.Date:
                return (R(t.type === N.Date), Ur(e, t));
              case N.Enum:
                return (R(t.type === N.Enum), Kr(e, t));
              case N.File:
                return (R(t.type === N.File), Yr(e, t));
              case N.Link:
                return (R(t.type === N.Link), Qr(e, t));
              case N.Number:
                return (R(t.type === N.Number), ti(e, t));
              case N.Object:
                return (R(t.type === N.Object), ii(e, t, n));
              case N.ResponsiveImage:
                return (R(t.type === N.ResponsiveImage), si(e, t));
              case N.RichText:
                return (R(t.type === N.RichText), ui(e, t));
              case N.VectorSetItem:
                return (R(t.type === N.VectorSetItem), gi(e, t));
              case N.String:
                return (R(t.type === N.String), pi(e, t, n));
              default:
                Dr(e);
            }
          }));
      })((z ||= {})),
      (Li = 3),
      (Ri = 250),
      (zi = [408, 429, 500, 502, 503, 504]),
      (Bi = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!zi.includes(r.status) || ++n > Li) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Li) throw e;
          }
          await _i(n);
        }
      }),
      (Vi = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((R(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = yi(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((R(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = yi(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          B(this, `chunks`, []);
        }
      }),
      (Hi = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = z.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), z.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          B(this, `fields`, new Map());
        }
      }),
      (Ui = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Bi(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Mi(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Hi.read(n),
                  i = n.getOffset() - e,
                  a = new Ii(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            B(this, `itemsPromise`),
            B(
              this,
              `itemLoader`,
              new ji.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = Ii.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await vi(this.url, t)).map((t, n) => {
                    let r = new Mi(t),
                      i = Hi.read(r),
                      a = e[n];
                    return (
                      R(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Wi = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = Ii.fromString(e),
                n = this.chunks[t.chunkId];
              return (R(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = Ii.fromString(e.pointer),
            r = Ii.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return z.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            B(this, `id`),
            B(this, `schema`),
            B(this, `indexes`),
            B(this, `resolveRichText`),
            B(this, `resolveVectorSetItem`),
            B(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new Ui(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Ki(e) {
  return typeof e == `object` && !!e && !l(e) && Yi in e;
}
function qi(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ji(e) {
  let n = new Map();
  return (r) => {
    let i = n.get(r);
    if (i) return i;
    let a = (function n(r) {
      switch (r[0]) {
        case 1: {
          let [, ...e] = r;
          return o(t, void 0, ...e.map(n));
        }
        case 2: {
          let [, e, ...t] = r;
          return o(ue, e, ...t.map(n));
        }
        case 3: {
          let [, t, i, a, o] = r;
          for (let e of a) {
            let t = i[e];
            t && (i[e] = n(t));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Ki(r) && r.preload(), (i[t] = r));
          }
          let s = e[t];
          return (
            qi(s, `Module not found`),
            Ki(s) && s.preload(),
            u(Se, {
              componentIdentifier: t,
              children: (e) => u(Ce, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, t, ...i] = r,
            a = i.map(n);
          return o(e === `a` ? h.a : e, t, ...a);
        }
        case 5: {
          let [, e] = r;
          return e;
        }
      }
    })(JSON.parse(r));
    return (n.set(r, a), a);
  };
}
var H,
  Yi,
  Xi,
  Zi = e(() => {
    (m(),
      f(),
      O(),
      r(),
      i !== void 0 && i.requestIdleCallback,
      (Yi = `preload`),
      (Xi =
        (((H = Xi || {})[(H.Fragment = 1)] = `Fragment`),
        (H[(H.Link = 2)] = `Link`),
        (H[(H.Module = 3)] = `Module`),
        (H[(H.Tag = 4)] = `Tag`),
        (H[(H.Text = 5)] = `Text`),
        H)));
  }),
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa = e(() => {
    (O(),
      Gi(),
      Zi(),
      (Qi = {
        aRfuf9kH9: { isNullable: !0, type: N.String },
        createdAt: { isNullable: !0, type: N.Date },
        Eg8oM5zLp: { isNullable: !0, type: N.String },
        f2zVzxHzj: { isNullable: !0, type: N.String },
        id: { isNullable: !1, type: N.String },
        nextItemId: { isNullable: !0, type: N.String },
        previousItemId: { isNullable: !0, type: N.String },
        rtgh9KyKP: { isNullable: !0, type: N.Enum },
        SBp0CmsPO: { isNullable: !0, type: N.Link },
        updatedAt: { isNullable: !0, type: N.Date },
        zL9SmCj7G: { isNullable: !0, type: N.Enum },
      }),
      ($i = []),
      (ea = (e) => {
        let t = $i[e];
        if (t) return t().then((e) => e.default);
      }),
      (ta = Ji({})),
      new re(),
      (na = {
        collectionByLocaleId: {
          default: new Wi({
            chunks: [
              new URL(
                `./nVabsnQib-chunk-default-0.framercms`,
                new URL(`/test/framer/modules/fpFCiFXkgRLMcyFBeiei/7VVKoSGf7v5GQjYsXxdz/nVabsnQib.js`, document.baseURI).href,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `e5ac95db-7601-40e0-9576-9b1c9aca0f2bdefault`,
            indexes: [],
            resolveRichText: ta,
            resolveVectorSetItem: ea,
            schema: Qi,
          }),
        },
        displayName: `Careers`,
        id: `e5ac95db-7601-40e0-9576-9b1c9aca0f2b`,
      }),
      A(na, {
        f2zVzxHzj: { defaultValue: ``, title: `Title`, type: N.String },
        Eg8oM5zLp: { preventLocalization: !0, title: `Slug`, type: N.String },
        SBp0CmsPO: { title: `Application Link`, type: N.Link },
        aRfuf9kH9: { defaultValue: ``, title: `Location`, type: N.String },
        rtgh9KyKP: {
          defaultValue: `N2VGbYUzG`,
          options: [`N2VGbYUzG`, `hbA7P6zFO`],
          optionTitles: [`Full-Time`, `Part-Time`],
          title: `Employment Type`,
          type: N.Enum,
        },
        zL9SmCj7G: {
          defaultValue: `vWbHLd625`,
          options: [`vWbHLd625`, `Lho1Op1e8`, `jqefMKxrM`, `oFdKyeXpF`],
          optionTitles: [`Engineering`, `Design`, `Marketing`, `Sales`],
          title: `Department`,
          type: N.Enum,
        },
        createdAt: { title: `Created`, type: N.Date },
        updatedAt: { title: `Updated`, type: N.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/nVabsnQib:default`,
          title: `Previous`,
          type: N.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/nVabsnQib:default`,
          title: `Next`,
          type: N.CollectionReference,
        },
      }),
      (ra = (e, t) => {
        switch ((t?.fallback, e)) {
          case `N2VGbYUzG`:
            return `Full-Time`;
          case `hbA7P6zFO`:
            return `Part-Time`;
          default:
            return ``;
        }
      }),
      (ia = (e, t) => {
        switch ((t?.fallback, e)) {
          case `vWbHLd625`:
            return `Engineering`;
          case `Lho1Op1e8`:
            return `Design`;
          case `jqefMKxrM`:
            return `Marketing`;
          case `oFdKyeXpF`:
            return `Sales`;
          default:
            return ``;
        }
      }),
      (aa = { rtgh9KyKP: ra, zL9SmCj7G: ia }));
  });
function sa(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function U(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ca(e) {
  throw Error(`Unexpected value: ${e}`);
}
function la(e, t, n, r) {
  (U(e >= t, e, `outside lower bound for`, r),
    U(e <= n, e, `outside upper bound for`, r));
}
function ua(e) {
  return typeof e == `string`;
}
function da(e) {
  return Number.isFinite(e);
}
function fa(e) {
  return e === null;
}
function pa(e) {
  if (fa(e)) return 0;
  switch (e.type) {
    case N.Array:
      return 1;
    case N.Boolean:
      return 2;
    case N.Color:
      return 3;
    case N.Date:
      return 4;
    case N.Enum:
      return 5;
    case N.File:
      return 6;
    case N.ResponsiveImage:
      return 10;
    case N.Link:
      return 7;
    case N.Number:
      return 8;
    case N.Object:
      return 9;
    case N.RichText:
      return 11;
    case N.String:
      return 12;
    case N.VectorSetItem:
      return 13;
    default:
      ca(e);
  }
}
function ma(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = W.read(e);
    n.push(t);
  }
  return { type: N.Array, value: n };
}
function ha(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) W.write(e, n);
}
function ga(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = W.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function _a(e) {
  return { type: N.Boolean, value: e.readUint8() !== 0 };
}
function va(e, t) {
  e.writeUint8(+!!t.value);
}
function ya(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ba(e) {
  return { type: N.Color, value: e.readString() };
}
function xa(e, t) {
  e.writeString(t.value);
}
function Sa(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ca(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: N.Date, value: n.toISOString() };
}
function wa(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ta(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Ea(e) {
  return { type: N.Enum, value: e.readString() };
}
function Da(e, t) {
  e.writeString(t.value);
}
function Oa(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ka(e) {
  return { type: N.File, value: e.readString() };
}
function Aa(e, t) {
  e.writeString(t.value);
}
function ja(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ma(e) {
  return { type: N.Link, value: e.readJson() };
}
function Na(e, t) {
  e.writeJson(t.value);
}
function Pa(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Fa(e) {
  return { type: N.Number, value: e.readFloat64() };
}
function Ia(e, t) {
  e.writeFloat64(t.value);
}
function La(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ra(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = W.read(e);
  }
  return { type: N.Object, value: n };
}
function za(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), W.write(e, r));
}
function Ba(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = W.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Va(e) {
  return { type: N.ResponsiveImage, value: e.readJson() };
}
function Ha(e, t) {
  e.writeJson(t.value);
}
function Ua(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Wa(e) {
  let t = e.readInt8();
  if (t === 0) return { type: N.RichText, value: e.readUint32() };
  if (t === 1) return { type: N.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ga(e, t) {
  if (da(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (ua(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ka(e, t) {
  let n = e.value,
    r = t.value;
  if ((da(n) && da(r)) || (ua(n) && ua(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function qa(e) {
  return { type: N.String, value: e.readString() };
}
function Ja(e, t) {
  e.writeString(t.value);
}
function Ya(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Xa(e) {
  return { type: N.VectorSetItem, value: e.readUint32() };
}
function Za(e, t) {
  e.writeUint32(t.value);
}
function Qa(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function $a(e) {
  let t = Math.floor(To * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function eo(e, t) {
  let n = no(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Do(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Oo(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function to(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function no(e) {
  U(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to
      ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
      : n.push(e);
  }
  return n;
}
var W,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  G,
  mo,
  K,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  q,
  J,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No = e(() => {
    (m(),
      O(),
      (ro = Object.create),
      (io = Object.defineProperty),
      (ao = Object.getOwnPropertyDescriptor),
      (oo = Object.getOwnPropertyNames),
      (so = Object.getPrototypeOf),
      (co = Object.prototype.hasOwnProperty),
      (lo = (e, t, n) =>
        t in e
          ? io(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (uo = (e, t) =>
        function () {
          return (
            t || (0, e[oo(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (fo = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of oo(t))
            co.call(e, i) ||
              i === n ||
              io(e, i, {
                get: () => t[i],
                enumerable: !(r = ao(t, i)) || r.enumerable,
              });
        return e;
      }),
      (po = (e, t, n) => (
        (n = e == null ? {} : ro(so(e))),
        fo(
          !t && e && e.__esModule
            ? n
            : io(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (G = (e, t, n) => lo(e, typeof t == `symbol` ? t : t + ``, n)),
      (mo = po(
        uo({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`,
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(
                          `maxBatchSize must be a positive number: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(
                          `batchScheduleFn must be a function: ` + t,
                        );
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(
                          function (e) {
                            return t && typeof t[e] != `function`;
                          },
                        );
                        if (n.length !== 0)
                          throw TypeError(
                            `Custom cacheMap missing methods: ` + n.join(`, `),
                          );
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`,
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (
                          t !== null &&
                          !t.hasDispatched &&
                          t.keys.length < e._maxBatchSize
                        )
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (
                                ((t.hasDispatched = !0), t.keys.length === 0)
                              ) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`,
                                  ),
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`,
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e),
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`,
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        }),
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` &&
                typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits)
                for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 &&
                    Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1,
      )),
      (K = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (ho = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = K.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = K.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = K.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = K.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = K.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = K.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = K.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = K.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = K.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = K.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            G(this, `offset`, 0),
            G(this, `view`),
            G(this, `decoder`, new TextDecoder()),
            (this.view = sa(this.bytes)));
        }
      }),
      i !== void 0 && i.requestIdleCallback,
      (go = 1024),
      (_o = 1.5),
      (vo = (e) => 2 ** e - 1),
      (yo = (e) => -(2 ** (e - 1))),
      (bo = (e) => 2 ** (e - 1) - 1),
      (q = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: yo(8),
        Int16: yo(16),
        Int32: yo(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (J = {
        Uint8: vo(8),
        Uint16: vo(16),
        Uint32: vo(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: bo(8),
        Int16: bo(16),
        Int32: bo(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (xo = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * _o) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = sa(n)));
        }
        writeUint8(e) {
          la(e, q.Uint8, J.Uint8, `Uint8`);
          let t = K.Uint8;
          (this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t));
        }
        writeUint16(e) {
          la(e, q.Uint16, J.Uint16, `Uint16`);
          let t = K.Uint16;
          (this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t));
        }
        writeUint32(e) {
          la(e, q.Uint32, J.Uint32, `Uint32`);
          let t = K.Uint32;
          (this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t));
        }
        writeUint64(e) {
          la(e, q.Uint64, J.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          la(e, q.BigUint64, J.BigUint64, `BigUint64`);
          let t = K.BigUint64;
          (this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t));
        }
        writeInt8(e) {
          la(e, q.Int8, J.Int8, `Int8`);
          let t = K.Int8;
          (this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t));
        }
        writeInt16(e) {
          la(e, q.Int16, J.Int16, `Int16`);
          let t = K.Int16;
          (this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t));
        }
        writeInt32(e) {
          la(e, q.Int32, J.Int32, `Int32`);
          let t = K.Int32;
          (this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t));
        }
        writeInt64(e) {
          la(e, q.Int64, J.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          la(e, q.BigInt64, J.BigInt64, `BigInt64`);
          let t = K.BigInt64;
          (this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t));
        }
        writeFloat32(e) {
          let t = K.Float32;
          (this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t));
        }
        writeFloat64(e) {
          let t = K.Float64;
          (this.ensureLength(t),
            this.view.setFloat64(this.offset, e),
            (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t),
            this.bytes.set(e, this.offset),
            (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (G(this, `offset`, 0),
            G(this, `bytes`, new Uint8Array(go)),
            G(this, `view`, sa(this.bytes)),
            G(this, `encoder`, new TextEncoder()),
            G(this, `encodedStrings`, new Map()));
        }
      }),
      (So = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            U(da(n), `Invalid chunkId`),
            U(da(r), `Invalid offset`),
            U(da(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId),
            e.writeUint32(this.offset),
            e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (U(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ma(e);
            case 2:
              return _a(e);
            case 3:
              return ba(e);
            case 4:
              return Ca(e);
            case 5:
              return Ea(e);
            case 6:
              return ka(e);
            case 7:
              return Ma(e);
            case 8:
              return Fa(e);
            case 9:
              return Ra(e);
            case 10:
              return Va(e);
            case 11:
              return Wa(e);
            case 12:
              return qa(e);
            case 13:
              return Xa(e);
            default:
              ca(t);
          }
        }),
          (e.write = function (e, t) {
            let n = pa(t);
            if ((e.writeUint8(n), !fa(t)))
              switch (t.type) {
                case N.Array:
                  return ha(e, t);
                case N.Boolean:
                  return va(e, t);
                case N.Color:
                  return xa(e, t);
                case N.Date:
                  return wa(e, t);
                case N.Enum:
                  return Da(e, t);
                case N.File:
                  return Aa(e, t);
                case N.Link:
                  return Na(e, t);
                case N.Number:
                  return Ia(e, t);
                case N.Object:
                  return za(e, t);
                case N.ResponsiveImage:
                  return Ha(e, t);
                case N.RichText:
                  return Ga(e, t);
                case N.VectorSetItem:
                  return Za(e, t);
                case N.String:
                  return Ja(e, t);
                default:
                  ca(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = pa(e),
              i = pa(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (fa(e) || fa(t)) return 0;
            switch (e.type) {
              case N.Array:
                return (U(t.type === N.Array), ga(e, t, n));
              case N.Boolean:
                return (U(t.type === N.Boolean), ya(e, t));
              case N.Color:
                return (U(t.type === N.Color), Sa(e, t));
              case N.Date:
                return (U(t.type === N.Date), Ta(e, t));
              case N.Enum:
                return (U(t.type === N.Enum), Oa(e, t));
              case N.File:
                return (U(t.type === N.File), ja(e, t));
              case N.Link:
                return (U(t.type === N.Link), Pa(e, t));
              case N.Number:
                return (U(t.type === N.Number), La(e, t));
              case N.Object:
                return (U(t.type === N.Object), Ba(e, t, n));
              case N.ResponsiveImage:
                return (U(t.type === N.ResponsiveImage), Ua(e, t));
              case N.RichText:
                return (U(t.type === N.RichText), Ka(e, t));
              case N.VectorSetItem:
                return (U(t.type === N.VectorSetItem), Qa(e, t));
              case N.String:
                return (U(t.type === N.String), Ya(e, t, n));
              default:
                ca(e);
            }
          }));
      })((W ||= {})),
      (Co = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = W.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new ho(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = W.read(n);
              e.push(t);
            }
            let t = So.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new xo();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) W.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), G(this, `entries`, []));
        }
      }),
      (wo = 3),
      (To = 250),
      (Eo = [408, 429, 500, 502, 503, 504]),
      (Do = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Eo.includes(r.status) || ++n > wo) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > wo) throw e;
          }
          await $a(n);
        }
      }),
      (Oo = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((U(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = to(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((U(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = to(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          G(this, `chunks`, []);
        }
      }),
      (ko = class {
        async loadModel() {
          let [e] = await eo(this.options.url, [this.options.range]);
          return (U(e, `Failed to load model`), Co.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          U(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      ca(t);
                  }
                }),
              [t.entries],
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== N.String || t.value?.type !== N.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== N.String || t.value?.type !== N.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== N.String || t.value?.type !== N.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 &&
                ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > W.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            W.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            G(this, `schema`),
            G(this, `fields`),
            G(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            G(this, `modelPromise`),
            G(this, `model`),
            G(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (U(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation));
        }
      }),
      (Ao = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = W.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), W.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          G(this, `fields`, new Map());
        }
      }),
      (jo = class {
        scanItems() {
          return (
            (this.itemsPromise ??= Do(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new ho(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = Ao.read(n),
                  i = n.getOffset() - e,
                  a = new So(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            G(this, `itemsPromise`),
            G(
              this,
              `itemLoader`,
              new mo.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = So.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await eo(this.url, t)).map((t, n) => {
                    let r = new ho(t),
                      i = Ao.read(r),
                      a = e[n];
                    return (
                      U(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (Mo = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = So.fromString(e),
                n = this.chunks[t.chunkId];
              return (U(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = So.fromString(e.pointer),
            r = So.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return W.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            G(this, `id`),
            G(this, `schema`),
            G(this, `indexes`),
            G(this, `resolveRichText`),
            G(this, `resolveVectorSetItem`),
            G(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new jo(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Po(e) {
  return typeof e == `object` && !!e && !l(e) && Lo in e;
}
function Fo(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Io(e) {
  let n = new Map();
  return (r) => {
    let i = n.get(r);
    if (i) return i;
    let a = (function n(r) {
      switch (r[0]) {
        case 1: {
          let [, ...e] = r;
          return o(t, void 0, ...e.map(n));
        }
        case 2: {
          let [, e, ...t] = r;
          return o(ue, e, ...t.map(n));
        }
        case 3: {
          let [, t, i, a, o] = r;
          for (let e of a) {
            let t = i[e];
            t && (i[e] = n(t));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Po(r) && r.preload(), (i[t] = r));
          }
          let s = e[t];
          return (
            Fo(s, `Module not found`),
            Po(s) && s.preload(),
            u(Se, {
              componentIdentifier: t,
              children: (e) => u(Ce, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, t, ...i] = r,
            a = i.map(n);
          return o(e === `a` ? h.a : e, t, ...a);
        }
        case 5: {
          let [, e] = r;
          return e;
        }
      }
    })(JSON.parse(r));
    return (n.set(r, a), a);
  };
}
var Y,
  Lo,
  Ro,
  zo = e(() => {
    (m(),
      f(),
      O(),
      r(),
      i !== void 0 && i.requestIdleCallback,
      (Lo = `preload`),
      (Ro =
        (((Y = Ro || {})[(Y.Fragment = 1)] = `Fragment`),
        (Y[(Y.Link = 2)] = `Link`),
        (Y[(Y.Module = 3)] = `Module`),
        (Y[(Y.Tag = 4)] = `Tag`),
        (Y[(Y.Text = 5)] = `Text`),
        Y)));
  }),
  X,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = e(() => {
    (O(),
      No(),
      zo(),
      (X = {
        createdAt: { isNullable: !0, type: N.Date },
        id: { isNullable: !1, type: N.String },
        jIoz9sylb: { isNullable: !0, type: N.String },
        JKKbS2efl: { isNullable: !0, type: N.ResponsiveImage },
        nextItemId: { isNullable: !0, type: N.String },
        previousItemId: { isNullable: !0, type: N.String },
        uP2ES9K8l: { isNullable: !0, type: N.String },
        updatedAt: { isNullable: !0, type: N.Date },
        ZQRlYqjam: { isNullable: !0, type: N.String },
      }),
      (Bo = [`id`]),
      (Vo = { type: 1 }),
      (Ho = [`previousItemId`]),
      (Uo = [`nextItemId`]),
      (Wo = [`id`, `ZQRlYqjam`]),
      (Go = [`ZQRlYqjam`, `id`]),
      (Ko = [`jIoz9sylb`]),
      (qo = { type: 0 }),
      (Jo = [`uP2ES9K8l`]),
      (Yo = [`JKKbS2efl`]),
      (Xo = [`ZQRlYqjam`]),
      (Zo = []),
      (Qo = (e) => {
        let t = Zo[e];
        if (t) return t().then((e) => e.default);
      }),
      ($o = Io({})),
      new re(),
      (es = {
        collectionByLocaleId: {
          default: new Mo({
            chunks: [
              new URL(
                `./WKmMLB7ww-chunk-default-0.framercms`,
                new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `6ae63a6a-f784-47b8-ae38-5b34965c6490default`,
            indexes: [
              new ko({
                collation: Vo,
                collectionSchema: X,
                fieldNames: Bo,
                range: { from: 0, to: 529 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: Vo,
                collectionSchema: X,
                fieldNames: Ho,
                range: { from: 529, to: 1057 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: Vo,
                collectionSchema: X,
                fieldNames: Uo,
                range: { from: 1057, to: 1581 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: Vo,
                collectionSchema: X,
                fieldNames: Wo,
                range: { from: 1581, to: 2482 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: Vo,
                collectionSchema: X,
                fieldNames: Go,
                range: { from: 2482, to: 3383 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: qo,
                collectionSchema: X,
                fieldNames: Ko,
                range: { from: 3383, to: 3984 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: qo,
                collectionSchema: X,
                fieldNames: Jo,
                range: { from: 3984, to: 4738 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: qo,
                collectionSchema: X,
                fieldNames: Yo,
                range: { from: 4738, to: 13578 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new ko({
                collation: qo,
                collectionSchema: X,
                fieldNames: Xo,
                range: { from: 13578, to: 14179 },
                url: new URL(
                  `./WKmMLB7ww-indexes-default-0.framercms`,
                  new URL(`/test/framer/modules/fbuLloGCmEtfAiR8J4pX/1qDUqrPXURiftgmh56lp/WKmMLB7ww.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: $o,
            resolveVectorSetItem: Qo,
            schema: X,
          }),
        },
        displayName: `Team Members`,
        id: `6ae63a6a-f784-47b8-ae38-5b34965c6490`,
      }),
      A(es, {
        jIoz9sylb: { defaultValue: ``, title: `Name`, type: N.String },
        uP2ES9K8l: { defaultValue: ``, title: `Role`, type: N.String },
        JKKbS2efl: { title: `Image`, type: N.ResponsiveImage },
        ZQRlYqjam: { preventLocalization: !0, title: `Slug`, type: N.String },
        createdAt: { title: `Created`, type: N.Date },
        updatedAt: { title: `Updated`, type: N.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/WKmMLB7ww:default`,
          title: `Previous`,
          type: N.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/WKmMLB7ww:default`,
          title: `Next`,
          type: N.CollectionReference,
        },
      }));
  }),
  ns,
  rs,
  Z,
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs,
  Ss,
  Q,
  Cs,
  $,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js,
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws;
e(() => {
  (f(),
    O(),
    _(),
    r(),
    Ae(),
    Ft(),
    et(),
    Ut(),
    Zt(),
    on(),
    mn(),
    An(),
    Ve(),
    vt(),
    Un(),
    $n(),
    Tr(),
    rt(),
    $e(),
    oa(),
    ts(),
    Le(),
    yt(),
    qe(),
    Ie(),
    Ne(),
    dt(),
    lt(),
    Qe(),
    ut(),
    Dt(),
    (ns = S(xt)),
    (rs = C(M)),
    (Z = C(y)),
    (is = S(P)),
    (as = S(L)),
    (os = C(h.div)),
    (ss = le(C(h.div))),
    (cs = S(pt)),
    (ls = S(ct)),
    (us = S(ft)),
    (ds = S(tt)),
    (fs = S(I)),
    (ps = S(F)),
    (ms = S(nt)),
    (hs = S(He)),
    (gs = S(wr)),
    (_s = {
      BAk7p3Xj0: `(min-width: 810px) and (max-width: 1279.98px)`,
      OKYYWtIpm: `(max-width: 809.98px)`,
      YyqKdgFnP: `(min-width: 1280px)`,
    }),
    (vs = () => typeof document < `u`),
    (ys = []),
    (bs = `framer-Y3kVU`),
    (xs = {
      BAk7p3Xj0: `framer-v-14e9vlo`,
      OKYYWtIpm: `framer-v-wggn51`,
      YyqKdgFnP: `framer-v-1pe3hid`,
    }),
    (Ss = (e, t, n) => (e && t ? `position` : n)),
    (Q = {
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
    (Cs = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (ws = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (Ts = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (Es = { bounce: 0, delay: 0.4, duration: 1, type: `spring` }),
    (Ds = { bounce: 0, delay: 0.5, duration: 1, type: `spring` }),
    (Os = { bounce: 0, delay: 0.6, duration: 1, type: `spring` }),
    (ks = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (As = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
    (js = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (Ms = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Ns = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (Ps = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Fs = () => ({
      from: { alias: `Y2xrQR4er`, data: es, type: `Collection` },
      select: [
        { collection: `Y2xrQR4er`, name: `jIoz9sylb`, type: `Identifier` },
        { collection: `Y2xrQR4er`, name: `uP2ES9K8l`, type: `Identifier` },
        { collection: `Y2xrQR4er`, name: `JKKbS2efl`, type: `Identifier` },
        { collection: `Y2xrQR4er`, name: `ZQRlYqjam`, type: `Identifier` },
        { collection: `Y2xrQR4er`, name: `id`, type: `Identifier` },
      ],
    })),
    (Is = ({ query: e, pageSize: t, children: n }) => n(we(e))),
    (Ls = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 96,
      y: 0,
    }),
    (Rs = { bounce: 0.2, delay: 0, duration: 1, type: `spring` }),
    (zs = () => ({
      from: { alias: `p1o4w5R7S`, data: na, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `p1o4w5R7S`, name: `f2zVzxHzj`, type: `Identifier` },
        { collection: `p1o4w5R7S`, name: `zL9SmCj7G`, type: `Identifier` },
        { collection: `p1o4w5R7S`, name: `aRfuf9kH9`, type: `Identifier` },
        { collection: `p1o4w5R7S`, name: `rtgh9KyKP`, type: `Identifier` },
        { collection: `p1o4w5R7S`, name: `SBp0CmsPO`, type: `Identifier` },
        { collection: `p1o4w5R7S`, name: `Eg8oM5zLp`, type: `Identifier` },
        { collection: `p1o4w5R7S`, name: `id`, type: `Identifier` },
      ],
    })),
    (Bs = { Desktop: `YyqKdgFnP`, Mobile: `OKYYWtIpm`, Tablet: `BAk7p3Xj0` }),
    (Vs = ({ value: e }) =>
      de()
        ? null
        : u(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Hs = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Bs[r.variant] ?? r.variant ?? `YyqKdgFnP`,
    })),
    (Us = j(
      d(function (e, r) {
        let i = p(null),
          o = r ?? i,
          l = ee(),
          { activeLocale: d, setLocale: f } = fe(),
          m = me(),
          { style: _, className: v, layoutId: ne, variant: re, ...b } = Hs(e);
        Ee(n(() => Et({}, d), [d]));
        let [S, oe] = he(re, _s, !1),
          C = w(bs, bt, Fe, Xe, Pe, Be),
          se = s(pe)?.isLayoutTemplate,
          le = !!s(g)?.transition?.layout,
          D = Ss(se, le),
          O = E(`RS92lrecu`),
          de = p(null),
          ge = E(`kkb614BCi`),
          A = ce(),
          j = E(`jn4LK8Odh`),
          be = p(null),
          Se = () => !vs() || S !== `OKYYWtIpm`,
          N = E(`Ro2LEe0ZJ`),
          Ce = p(null),
          we = E(`Hk4RLrfhK`),
          De = p(null),
          Oe = E(`vIFrrY2Ua`),
          Ae = p(null),
          je = E(`t2VlnlHpb`),
          Me = p(null);
        return (
          ae(),
          _e({}),
          u(pe.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Bs,
              primaryVariantId: `YyqKdgFnP`,
              variantClassNames: xs,
            },
            children: c(te, {
              id: ne ?? l,
              children: [
                u(Vs, {
                  value: `html body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 9, 18)); }`,
                }),
                c(h.div, {
                  ...b,
                  className: w(C, `framer-1pe3hid`, v),
                  ref: o,
                  style: { ..._ },
                  children: [
                    u(h.section, {
                      className: `framer-3t8hyh`,
                      "data-border": !0,
                      "data-framer-name": `Hero`,
                      id: O,
                      layout: D,
                      ref: de,
                      children: c(`div`, {
                        className: `framer-5xofnn`,
                        "data-framer-name": `content`,
                        children: [
                          u(`div`, {
                            className: `framer-fiamjo`,
                            id: ge,
                            ref: A(ge),
                            children: u(`div`, {
                              className: `framer-1ofc613`,
                              children: c(`div`, {
                                className: `framer-1a9svpn`,
                                children: [
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        y:
                                          (m?.y || 0) +
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
                                      OKYYWtIpm: {
                                        y:
                                          (m?.y || 0) +
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
                                    children: u(k, {
                                      height: 30,
                                      y:
                                        (m?.y || 0) +
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
                                      children: u(rs, {
                                        __framer__animate: { transition: Cs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-rns4fb-container`,
                                        nodeId: `jGRfIe2xP`,
                                        rendersWithMotion: !0,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(xt, {
                                          bwtRC2zWt: `About us`,
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
                                          id: `jGRfIe2xP`,
                                          layoutId: `jGRfIe2xP`,
                                          OgEx_2E7P: !1,
                                          pdea6CzDr: ke,
                                          Rtia32FHG: !0,
                                          variant: $(`qfOTriuLV`),
                                          VvHeeXiqh: !1,
                                          width: `100%`,
                                          ZGOQT_PfL: `4px 16px 4px 16px`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(`div`, {
                                    className: `framer-14e31ze`,
                                    children: [
                                      u(Z, {
                                        __framer__animate: { transition: ws },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: u(t, {
                                          children: u(`h1`, {
                                            className: `framer-styles-preset-7hjh4k`,
                                            "data-styles-preset": `bM7WzBkv5`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                            },
                                            children: `We build the AI your team actually trusts`,
                                          }),
                                        }),
                                        className: `framer-hewjas`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      u(Z, {
                                        __framer__animate: { transition: Ts },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: u(t, {
                                          children: u(`p`, {
                                            className: `framer-styles-preset-1fhxhj6`,
                                            "data-styles-preset": `O0790qsZT`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                            },
                                            children: `No black boxes. No hallucinated answers. Just verified intelligence pulled from the tools you already use.`,
                                          }),
                                        }),
                                        className: `framer-bkmqta`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          c(`div`, {
                            className: `framer-xbbn3`,
                            children: [
                              u(k, {
                                children: u(M, {
                                  className: `framer-15elrmp-container`,
                                  isAuthoredByUser: !0,
                                  nodeId: `X8c0kfJVF`,
                                  scopeId: `dpEtnX2Cb`,
                                  children: u(P, {
                                    baseBorderColor: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                    borderRadius: 24,
                                    borderWidth: 1,
                                    bottomLeft: 24,
                                    bottomRight: 24,
                                    cardBackground: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(6, 5, 3, 0.75))`,
                                    glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                    height: `100%`,
                                    id: `X8c0kfJVF`,
                                    isMixed: !1,
                                    layoutId: `X8c0kfJVF`,
                                    proximity: 490,
                                    smoothing: 0.05,
                                    style: { height: `100%`, width: `100%` },
                                    topLeft: 24,
                                    topRight: 24,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              c(os, {
                                __framer__animate: { transition: Es },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-towwo2`,
                                children: [
                                  u(k, {
                                    children: u(M, {
                                      className: `framer-1570r58-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `XLEYNARkw`,
                                      scopeId: `dpEtnX2Cb`,
                                      children: u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          OKYYWtIpm: {
                                            bottomLeft: 8,
                                            topRight: 16,
                                          },
                                        },
                                        children: u(P, {
                                          baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                          borderRadius: 16,
                                          borderWidth: 1,
                                          bottomLeft: 16,
                                          bottomRight: 8,
                                          cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                          glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                          height: `100%`,
                                          id: `XLEYNARkw`,
                                          isMixed: !0,
                                          layoutId: `XLEYNARkw`,
                                          proximity: 490,
                                          smoothing: 0.05,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          topLeft: 16,
                                          topRight: 8,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        width: `max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px) - 16px) / 3, 1px)`,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          295.8 +
                                          0 +
                                          0,
                                      },
                                      OKYYWtIpm: {
                                        width: `max(min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px), 1px)`,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          283.8 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: u(k, {
                                      height: 137,
                                      width: `max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 1080px) - 16px) / 3, 1px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        180 +
                                        311.8 +
                                        0 +
                                        0,
                                      children: u(M, {
                                        className: `framer-1qzjda7-container`,
                                        nodeId: `x4Vf9wPIl`,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(L, {
                                          height: `100%`,
                                          id: `x4Vf9wPIl`,
                                          layoutId: `x4Vf9wPIl`,
                                          LziHZyBf5: `M`,
                                          Re0HzYvt6: `24px`,
                                          S1evmzbVh: `Daily points processed`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          z2lmmQucD: 49,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              c(os, {
                                __framer__animate: { transition: Ds },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-sa2iv`,
                                children: [
                                  u(k, {
                                    children: u(M, {
                                      className: `framer-8eyrvc-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `fdPPB70wS`,
                                      scopeId: `dpEtnX2Cb`,
                                      children: u(P, {
                                        baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                        borderRadius: 8,
                                        borderWidth: 1,
                                        bottomLeft: 16,
                                        bottomRight: 8,
                                        cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                        glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                        height: `100%`,
                                        id: `fdPPB70wS`,
                                        isMixed: !1,
                                        layoutId: `fdPPB70wS`,
                                        proximity: 490,
                                        smoothing: 0.05,
                                        style: {
                                          height: `100%`,
                                          width: `100%`,
                                        },
                                        topLeft: 16,
                                        topRight: 8,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        width: `max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px) - 16px) / 3, 1px)`,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          295.8 +
                                          0 +
                                          0,
                                      },
                                      OKYYWtIpm: {
                                        width: `max(min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px), 1px)`,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          283.8 +
                                          0 +
                                          145 +
                                          0,
                                      },
                                    },
                                    children: u(k, {
                                      height: 137,
                                      width: `max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 1080px) - 16px) / 3, 1px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        180 +
                                        311.8 +
                                        0 +
                                        0,
                                      children: u(M, {
                                        className: `framer-q808nr-container`,
                                        nodeId: `VjCt5xmXK`,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(L, {
                                          height: `100%`,
                                          id: `VjCt5xmXK`,
                                          layoutId: `VjCt5xmXK`,
                                          LziHZyBf5: ``,
                                          Re0HzYvt6: `24px`,
                                          S1evmzbVh: `Founded`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          z2lmmQucD: 2023,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              c(os, {
                                __framer__animate: { transition: Os },
                                __framer__animateOnce: !0,
                                __framer__enter: Q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-8mjdn0`,
                                children: [
                                  u(k, {
                                    children: u(M, {
                                      className: `framer-1kx41wp-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `c_8omIgYX`,
                                      scopeId: `dpEtnX2Cb`,
                                      children: u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          OKYYWtIpm: {
                                            bottomLeft: 16,
                                            topRight: 8,
                                          },
                                        },
                                        children: u(P, {
                                          baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                          borderRadius: 16,
                                          borderWidth: 1,
                                          bottomLeft: 8,
                                          bottomRight: 16,
                                          cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                          glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                          height: `100%`,
                                          id: `c_8omIgYX`,
                                          isMixed: !0,
                                          layoutId: `c_8omIgYX`,
                                          proximity: 490,
                                          smoothing: 0.05,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          topLeft: 8,
                                          topRight: 16,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        width: `max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px) - 16px) / 3, 1px)`,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          295.8 +
                                          0 +
                                          0,
                                      },
                                      OKYYWtIpm: {
                                        width: `max(min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px), 1px)`,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          283.8 +
                                          0 +
                                          290 +
                                          0,
                                      },
                                    },
                                    children: u(k, {
                                      height: 137,
                                      width: `max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 1080px) - 16px) / 3, 1px)`,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        180 +
                                        311.8 +
                                        0 +
                                        0,
                                      children: u(M, {
                                        className: `framer-1tn2kz-container`,
                                        nodeId: `hFKDyrzDH`,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(L, {
                                          height: `100%`,
                                          id: `hFKDyrzDH`,
                                          layoutId: `hFKDyrzDH`,
                                          LziHZyBf5: ``,
                                          Re0HzYvt6: `24px`,
                                          S1evmzbVh: `Team Members`,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          z2lmmQucD: 21,
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
                    u(h.section, {
                      className: `framer-1n5thee`,
                      "data-border": !0,
                      "data-framer-name": `Gallery`,
                      layout: D,
                      children: c(ss, {
                        __framer__animate: { transition: As },
                        __framer__animateOnce: !0,
                        __framer__enter: ks,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: `framer-xg4nas`,
                        "data-border": !0,
                        tickerEffectAlign: `center`,
                        tickerEffectDirectionModifier: `default`,
                        tickerEffectDraggable: !0,
                        tickerEffectEnabled: !0,
                        tickerEffectGap: 0,
                        tickerEffectHoverModifier: 100,
                        tickerEffectOverflow: `clip`,
                        tickerEffectPosition: `relative`,
                        tickerEffectStackDirection: `row`,
                        tickerEffectVelocity: 25,
                        children: [
                          u(ve, {
                            height: `100%`,
                            children: u(T, {
                              breakpoint: S,
                              overrides: {
                                BAk7p3Xj0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1450,
                                    intrinsicWidth: 1925,
                                    loading: x((m?.y || 0) + 0 + 632.8 + 0 + 0),
                                    pixelHeight: 1450,
                                    pixelWidth: 1925,
                                    sizes: `637.2414px`,
                                    src: `/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?width=1925&height=1450`,
                                    srcSet: `/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?width=1925&height=1450 1925w`,
                                  },
                                },
                                OKYYWtIpm: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1450,
                                    intrinsicWidth: 1925,
                                    loading: x((m?.y || 0) + 0 + 894.8 + 0 + 0),
                                    pixelHeight: 1450,
                                    pixelWidth: 1925,
                                    sizes: `305.3448px`,
                                    src: `/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?width=1925&height=1450`,
                                    srcSet: `/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?width=1925&height=1450 1925w`,
                                  },
                                  id: `1h9zz71`,
                                  lightbox: {
                                    backdrop: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                    maxWidth: 800,
                                    padding: 20,
                                    transition: js,
                                    zIndex: 10,
                                  },
                                  lightboxClassName: C,
                                },
                              },
                              children: u(xe, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1450,
                                  intrinsicWidth: 1925,
                                  loading: x((m?.y || 0) + 0 + 748.8 + 0 + 0),
                                  pixelHeight: 1450,
                                  pixelWidth: 1925,
                                  sizes: `743.4483px`,
                                  src: `/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?width=1925&height=1450`,
                                  srcSet: `/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/S8vQUoUkN7UjvQFCosQHQxFrGcc.jpg?width=1925&height=1450 1925w`,
                                },
                                className: `framer-1h9zz71`,
                                "data-border": !0,
                                draggable: `false`,
                                fitImageDimension: `width`,
                              }),
                            }),
                          }),
                          u(ve, {
                            height: `100%`,
                            children: u(T, {
                              breakpoint: S,
                              overrides: {
                                BAk7p3Xj0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1600,
                                    intrinsicWidth: 1600,
                                    loading: x((m?.y || 0) + 0 + 632.8 + 0 + 0),
                                    pixelHeight: 1600,
                                    pixelWidth: 1600,
                                    sizes: `480px`,
                                    src: `/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?width=1600&height=1600`,
                                    srcSet: `/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?scale-down-to=512&width=1600&height=1600 512w,/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?scale-down-to=1024&width=1600&height=1600 1024w,/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?width=1600&height=1600 1600w`,
                                  },
                                },
                                OKYYWtIpm: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1600,
                                    intrinsicWidth: 1600,
                                    loading: x((m?.y || 0) + 0 + 894.8 + 0 + 0),
                                    pixelHeight: 1600,
                                    pixelWidth: 1600,
                                    sizes: `230px`,
                                    src: `/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?width=1600&height=1600`,
                                    srcSet: `/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?scale-down-to=512&width=1600&height=1600 512w,/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?scale-down-to=1024&width=1600&height=1600 1024w,/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?width=1600&height=1600 1600w`,
                                  },
                                  id: `1cnhwna`,
                                  lightbox: {
                                    backdrop: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                    maxWidth: 800,
                                    padding: 20,
                                    transition: js,
                                    zIndex: 10,
                                  },
                                  lightboxClassName: C,
                                },
                              },
                              children: u(xe, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1600,
                                  intrinsicWidth: 1600,
                                  loading: x((m?.y || 0) + 0 + 748.8 + 0 + 0),
                                  pixelHeight: 1600,
                                  pixelWidth: 1600,
                                  sizes: `560px`,
                                  src: `/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?width=1600&height=1600`,
                                  srcSet: `/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?scale-down-to=512&width=1600&height=1600 512w,/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?scale-down-to=1024&width=1600&height=1600 1024w,/test/framer/images/r7rvkQoMo15YzyeFdRLgISmcAjk.jpg?width=1600&height=1600 1600w`,
                                },
                                className: `framer-1cnhwna`,
                                "data-border": !0,
                                draggable: `false`,
                                fitImageDimension: `width`,
                              }),
                            }),
                          }),
                          u(ve, {
                            height: `100%`,
                            children: u(T, {
                              breakpoint: S,
                              overrides: {
                                BAk7p3Xj0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1450,
                                    intrinsicWidth: 1925,
                                    loading: x((m?.y || 0) + 0 + 632.8 + 0 + 0),
                                    pixelHeight: 1450,
                                    pixelWidth: 1925,
                                    sizes: `637.2414px`,
                                    src: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450`,
                                    srcSet: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450 1925w`,
                                  },
                                },
                                OKYYWtIpm: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1450,
                                    intrinsicWidth: 1925,
                                    loading: x((m?.y || 0) + 0 + 894.8 + 0 + 0),
                                    pixelHeight: 1450,
                                    pixelWidth: 1925,
                                    sizes: `305.3448px`,
                                    src: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450`,
                                    srcSet: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450 1925w`,
                                  },
                                  id: `9gcl47`,
                                  lightbox: {
                                    backdrop: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                    maxWidth: 800,
                                    padding: 20,
                                    transition: js,
                                    zIndex: 10,
                                  },
                                  lightboxClassName: C,
                                },
                              },
                              children: u(xe, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1450,
                                  intrinsicWidth: 1925,
                                  loading: x((m?.y || 0) + 0 + 748.8 + 0 + 0),
                                  pixelHeight: 1450,
                                  pixelWidth: 1925,
                                  sizes: `743.4483px`,
                                  src: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450`,
                                  srcSet: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450 1925w`,
                                },
                                className: `framer-9gcl47`,
                                "data-border": !0,
                                draggable: `false`,
                                fitImageDimension: `width`,
                              }),
                            }),
                          }),
                          u(ve, {
                            height: `100%`,
                            children: u(T, {
                              breakpoint: S,
                              overrides: {
                                BAk7p3Xj0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1925,
                                    intrinsicWidth: 1450,
                                    loading: x((m?.y || 0) + 0 + 632.8 + 0 + 0),
                                    pixelHeight: 1925,
                                    pixelWidth: 1450,
                                    sizes: `361.5584px`,
                                    src: `/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?width=1450&height=1925`,
                                    srcSet: `/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?scale-down-to=1024&width=1450&height=1925 771w,/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?width=1450&height=1925 1450w`,
                                  },
                                },
                                OKYYWtIpm: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1925,
                                    intrinsicWidth: 1450,
                                    loading: x((m?.y || 0) + 0 + 894.8 + 0 + 0),
                                    pixelHeight: 1925,
                                    pixelWidth: 1450,
                                    sizes: `173.2468px`,
                                    src: `/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?width=1450&height=1925`,
                                    srcSet: `/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?scale-down-to=1024&width=1450&height=1925 771w,/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?width=1450&height=1925 1450w`,
                                  },
                                  id: `1dq8qnm`,
                                  lightbox: {
                                    backdrop: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                    maxWidth: 800,
                                    padding: 20,
                                    transition: js,
                                    zIndex: 10,
                                  },
                                  lightboxClassName: C,
                                },
                              },
                              children: u(xe, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1925,
                                  intrinsicWidth: 1450,
                                  loading: x((m?.y || 0) + 0 + 748.8 + 0 + 0),
                                  pixelHeight: 1925,
                                  pixelWidth: 1450,
                                  sizes: `421.8182px`,
                                  src: `/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?width=1450&height=1925`,
                                  srcSet: `/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?scale-down-to=1024&width=1450&height=1925 771w,/test/framer/images/BY4VMuN9QsnhfX3U8vOYZJdnbM.jpg?width=1450&height=1925 1450w`,
                                },
                                className: `framer-1dq8qnm`,
                                "data-border": !0,
                                draggable: `false`,
                                fitImageDimension: `width`,
                              }),
                            }),
                          }),
                          u(ve, {
                            height: `100%`,
                            children: u(T, {
                              breakpoint: S,
                              overrides: {
                                BAk7p3Xj0: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1450,
                                    intrinsicWidth: 1925,
                                    loading: x((m?.y || 0) + 0 + 632.8 + 0 + 0),
                                    pixelHeight: 1450,
                                    pixelWidth: 1925,
                                    sizes: `637.2414px`,
                                    src: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450`,
                                    srcSet: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450 1925w`,
                                  },
                                },
                                OKYYWtIpm: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1450,
                                    intrinsicWidth: 1925,
                                    loading: x((m?.y || 0) + 0 + 894.8 + 0 + 0),
                                    pixelHeight: 1450,
                                    pixelWidth: 1925,
                                    sizes: `305.3448px`,
                                    src: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450`,
                                    srcSet: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450 1925w`,
                                  },
                                  id: `1v9o7nx`,
                                  lightbox: {
                                    backdrop: `var(--token-259d8c78-fccd-4e6b-bbb0-32a9dcab750e, rgba(0, 0, 0, 0.85))`,
                                    maxWidth: 800,
                                    padding: 20,
                                    transition: js,
                                    zIndex: 10,
                                  },
                                  lightboxClassName: C,
                                },
                              },
                              children: u(xe, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1450,
                                  intrinsicWidth: 1925,
                                  loading: x((m?.y || 0) + 0 + 748.8 + 0 + 0),
                                  pixelHeight: 1450,
                                  pixelWidth: 1925,
                                  sizes: `743.4483px`,
                                  src: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450`,
                                  srcSet: `/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=512&width=1925&height=1450 512w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?scale-down-to=1024&width=1925&height=1450 1024w,/test/framer/images/ubW3k71AF0VTD1jml4QhfX6jQs.jpg?width=1925&height=1450 1925w`,
                                },
                                className: `framer-1v9o7nx`,
                                "data-border": !0,
                                draggable: `false`,
                                fitImageDimension: `width`,
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    u(h.section, {
                      className: `framer-1khr4yj`,
                      "data-border": !0,
                      "data-framer-name": `Hello`,
                      layout: D,
                      children: c(`div`, {
                        className: `framer-105w9hi`,
                        "data-framer-name": `content`,
                        children: [
                          c(`div`, {
                            className: `framer-hgyku4`,
                            id: j,
                            ref: be,
                            children: [
                              c(`div`, {
                                className: `framer-49meas`,
                                children: [
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          1112.8 +
                                          0 +
                                          120 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                      OKYYWtIpm: {
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          1124.8 +
                                          0 +
                                          80 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: u(k, {
                                      height: 30,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        1308.8 +
                                        0 +
                                        180 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      children: u(rs, {
                                        __framer__animate: { transition: Cs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-sdj0a5-container`,
                                        nodeId: `J70i_RyyC`,
                                        rendersWithMotion: !0,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(xt, {
                                          bwtRC2zWt: `Hello`,
                                          cxgg1etFf: !0,
                                          Dh_X3w3jZ: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgb(213, 224, 232))`,
                                          dMWH0omL8: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          eaYoGaNwq: {
                                            borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                            borderStyle: `solid`,
                                            borderWidth: 1,
                                          },
                                          GYoEH1GVm: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                          h3fww64y5: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          height: `100%`,
                                          id: `J70i_RyyC`,
                                          layoutId: `J70i_RyyC`,
                                          OgEx_2E7P: !1,
                                          pdea6CzDr: ke,
                                          Rtia32FHG: !0,
                                          variant: $(`qfOTriuLV`),
                                          VvHeeXiqh: !1,
                                          width: `100%`,
                                          ZGOQT_PfL: `4px 16px 4px 16px`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  u(Z, {
                                    __framer__animate: { transition: ws },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: u(t, {
                                      children: u(`h2`, {
                                        className: `framer-styles-preset-fahce0`,
                                        "data-styles-preset": `nZtZfLTSW`,
                                        dir: `auto`,
                                        children: `A team of engineers, designers, and operators obsessed with AI adoption`,
                                      }),
                                    }),
                                    className: `framer-1p9nk8f`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-1a18ea4`,
                                children: u(`div`, {
                                  className: `framer-eb0lk`,
                                  children: u(Z, {
                                    __framer__animate: { transition: Ts },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: u(t, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-prenqk`,
                                        "data-styles-preset": `POYKcChXw`,
                                        dir: `auto`,
                                        children: u(ue, {
                                          href: {
                                            hash: `:vIFrrY2Ua`,
                                            webPageId: `dpEtnX2Cb`,
                                          },
                                          motionChild: !0,
                                          nodeId: `HtOTxbuTk`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `dpEtnX2Cb`,
                                          smoothScroll: !0,
                                          children: u(h.a, {
                                            className: `framer-styles-preset-v2iiak`,
                                            "data-styles-preset": `Bh7brll6H`,
                                            children: `See open roles →`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-lmdniv`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-1oqul2u`,
                            "data-framer-name": `lockup`,
                            children: [
                              Se() &&
                                u(k, {
                                  children: u(M, {
                                    className: `framer-1s4v896-container hidden-wggn51`,
                                    isAuthoredByUser: !0,
                                    nodeId: `OZxnRogxf`,
                                    scopeId: `dpEtnX2Cb`,
                                    children: u(P, {
                                      baseBorderColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                      borderRadius: 24,
                                      borderWidth: 1,
                                      bottomLeft: 24,
                                      bottomRight: 24,
                                      cardBackground: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                      glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                      height: `100%`,
                                      id: `OZxnRogxf`,
                                      isMixed: !1,
                                      layoutId: `OZxnRogxf`,
                                      proximity: 490,
                                      smoothing: 0.05,
                                      style: { height: `100%`, width: `100%` },
                                      topLeft: 24,
                                      topRight: 24,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              c(`div`, {
                                className: `framer-c8aqbw`,
                                children: [
                                  c(`div`, {
                                    className: `framer-ghvlhr`,
                                    children: [
                                      u(k, {
                                        children: u(M, {
                                          className: `framer-12gihlm-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `MHk6wIwoy`,
                                          scopeId: `dpEtnX2Cb`,
                                          children: u(T, {
                                            breakpoint: S,
                                            overrides: {
                                              BAk7p3Xj0: {
                                                borderRadius: 8,
                                                isMixed: !1,
                                                topLeft: 24,
                                              },
                                              OKYYWtIpm: {
                                                borderRadius: 8,
                                                isMixed: !1,
                                                topLeft: 24,
                                              },
                                            },
                                            children: u(P, {
                                              baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                              borderRadius: 16,
                                              borderWidth: 1,
                                              bottomLeft: 8,
                                              bottomRight: 8,
                                              cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                              glowColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                              height: `100%`,
                                              id: `MHk6wIwoy`,
                                              isMixed: !0,
                                              layoutId: `MHk6wIwoy`,
                                              proximity: 490,
                                              smoothing: 0.05,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              topLeft: 16,
                                              topRight: 8,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      u(pt, {
                                        animated: !1,
                                        className: `framer-1gfoc0u`,
                                        layoutId: `kHa4zMLQ1`,
                                        z1don5LZx: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-vlxzds`,
                                    children: [
                                      u(k, {
                                        children: u(M, {
                                          className: `framer-txnvh4-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `xE1D0Liot`,
                                          scopeId: `dpEtnX2Cb`,
                                          children: u(T, {
                                            breakpoint: S,
                                            overrides: {
                                              BAk7p3Xj0: {
                                                bottomLeft: 8,
                                                topLeft: 8,
                                                topRight: 24,
                                              },
                                            },
                                            children: u(P, {
                                              baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                              borderRadius: 8,
                                              borderWidth: 1,
                                              bottomLeft: 16,
                                              bottomRight: 8,
                                              cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                              glowColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                              height: `100%`,
                                              id: `xE1D0Liot`,
                                              isMixed: !1,
                                              layoutId: `xE1D0Liot`,
                                              proximity: 490,
                                              smoothing: 0.05,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              topLeft: 16,
                                              topRight: 8,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      u(ct, {
                                        animated: !1,
                                        className: `framer-15uy88o`,
                                        layoutId: `SYMxj8CAl`,
                                        z1don5LZx: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-18pc572`,
                                    children: [
                                      u(k, {
                                        children: u(M, {
                                          className: `framer-1kz3uc3-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `YlxAHVjaw`,
                                          scopeId: `dpEtnX2Cb`,
                                          children: u(P, {
                                            baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                            borderRadius: 16,
                                            borderWidth: 1,
                                            bottomLeft: 16,
                                            bottomRight: 8,
                                            cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                            glowColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                            height: `100%`,
                                            id: `YlxAHVjaw`,
                                            isMixed: !0,
                                            layoutId: `YlxAHVjaw`,
                                            proximity: 490,
                                            smoothing: 0.05,
                                            style: {
                                              height: `100%`,
                                              width: `100%`,
                                            },
                                            topLeft: 8,
                                            topRight: 8,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      u(ft, {
                                        animated: !1,
                                        className: `framer-1qqofl2`,
                                        layoutId: `jrNsi__0G`,
                                        z1don5LZx: !0,
                                      }),
                                    ],
                                  }),
                                  c(`div`, {
                                    className: `framer-qq50jq`,
                                    children: [
                                      u(k, {
                                        children: u(M, {
                                          className: `framer-169jr32-container`,
                                          isAuthoredByUser: !0,
                                          nodeId: `yWf_DWwhP`,
                                          scopeId: `dpEtnX2Cb`,
                                          children: u(T, {
                                            breakpoint: S,
                                            overrides: {
                                              BAk7p3Xj0: {
                                                bottomLeft: 8,
                                                bottomRight: 16,
                                                isMixed: !0,
                                                topLeft: 8,
                                              },
                                              OKYYWtIpm: {
                                                bottomLeft: 8,
                                                bottomRight: 16,
                                                isMixed: !0,
                                                topLeft: 8,
                                              },
                                            },
                                            children: u(P, {
                                              baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                              borderRadius: 8,
                                              borderWidth: 1,
                                              bottomLeft: 16,
                                              bottomRight: 8,
                                              cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                              glowColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                              height: `100%`,
                                              id: `yWf_DWwhP`,
                                              isMixed: !1,
                                              layoutId: `yWf_DWwhP`,
                                              proximity: 490,
                                              smoothing: 0.05,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              topLeft: 16,
                                              topRight: 8,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      u(tt, {
                                        animated: !1,
                                        className: `framer-6k2a9o`,
                                        layoutId: `VBqCypRhB`,
                                        z1don5LZx: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(`div`, {
                                className: `framer-1sylcsz`,
                                children: [
                                  u(k, {
                                    children: u(M, {
                                      className: `framer-96kcxn-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `uioeHv7XH`,
                                      scopeId: `dpEtnX2Cb`,
                                      children: u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          BAk7p3Xj0: {
                                            bottomRight: 8,
                                            topLeft: 16,
                                          },
                                          OKYYWtIpm: {
                                            bottomRight: 8,
                                            topLeft: 24,
                                            topRight: 24,
                                          },
                                        },
                                        children: u(P, {
                                          baseBorderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.05))`,
                                          borderRadius: 16,
                                          borderWidth: 1,
                                          bottomLeft: 8,
                                          bottomRight: 16,
                                          cardBackground: `var(--token-9a0a5818-786e-4389-a1ff-e52b77b8236e, rgba(15, 15, 15, 0.85))`,
                                          glowColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                          height: `100%`,
                                          id: `uioeHv7XH`,
                                          isMixed: !0,
                                          layoutId: `uioeHv7XH`,
                                          proximity: 490,
                                          smoothing: 0.05,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          topLeft: 8,
                                          topRight: 16,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  c(`div`, {
                                    className: `framer-gkayit`,
                                    "data-framer-name": `CTA`,
                                    children: [
                                      u(`div`, {
                                        className: `framer-149fsgy`,
                                        children: u(T, {
                                          breakpoint: S,
                                          overrides: {
                                            BAk7p3Xj0: {
                                              children: c(t, {
                                                children: [
                                                  u(`p`, {
                                                    className: `framer-styles-preset-prenqk`,
                                                    "data-styles-preset": `POYKcChXw`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                    },
                                                    children: `Most AI tools ask you to trust them blindly. Powder was built on the opposite principle: every answer traces back to a source, every action requires context, and nothing fires without your team in the loop.`,
                                                  }),
                                                  u(`p`, {
                                                    className: `framer-styles-preset-prenqk`,
                                                    "data-styles-preset": `POYKcChXw`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                    },
                                                    children: `We started in 2024 after watching enterprise teams drown in tools that created more noise than clarity. The pattern was always the same: scattered knowledge, disconnected systems, and people spending half their day just finding information instead of acting on it.`,
                                                  }),
                                                  u(`p`, {
                                                    className: `framer-styles-preset-prenqk`,
                                                    "data-styles-preset": `POYKcChXw`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                    },
                                                    children: `Powder connects your docs, CRM, helpdesk, and internal tools into a single conversational layer. Ask a question, get a sourced answer, and execute next steps without switching tabs. It is that simple, and that's the point.`,
                                                  }),
                                                ],
                                              }),
                                            },
                                          },
                                          children: u(y, {
                                            __fromCanvasComponent: !0,
                                            children: c(t, {
                                              children: [
                                                u(`p`, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: `Most AI tools ask you to trust them blindly. Powder was built on the opposite principle: every answer traces back to a source, every action requires context, and nothing fires without your team in the loop.`,
                                                }),
                                                u(`p`, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: `We started in 2024 after watching enterprise teams drown in tools that created more noise than clarity. The pattern was always the same: scattered knowledge, disconnected systems, and people spending half their day just finding information instead of acting on it.`,
                                                }),
                                                u(`p`, {
                                                  className: `framer-styles-preset-prenqk`,
                                                  "data-styles-preset": `POYKcChXw`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: `Powder connects your docs, CRM, helpdesk, and internal tools into a single conversational layer. Ask a question, get a sourced answer, and execute next steps without switching tabs. It is that simple, and that's the point.`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-1jpmzz3`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                      u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          BAk7p3Xj0: {
                                            width: void 0,
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              1112.8 +
                                              0 +
                                              120 +
                                              156 +
                                              0 +
                                              0 +
                                              0 +
                                              60,
                                          },
                                          OKYYWtIpm: {
                                            width: `calc(max(min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 720px), 1px) - 56px)`,
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              1124.8 +
                                              0 +
                                              80 +
                                              184 +
                                              0 +
                                              0 +
                                              0 +
                                              48 +
                                              444,
                                          },
                                        },
                                        children: u(k, {
                                          height: 48,
                                          width: `calc(max((min(max(min(${m?.width || `100vw`}, 1600px) - 48px, 1px), 1080px) - 8px) / 2, 1px) - 120px)`,
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            1308.8 +
                                            0 +
                                            180 +
                                            172 +
                                            0 +
                                            0 +
                                            60 +
                                            468,
                                          children: u(M, {
                                            className: `framer-1ru8kxb-container`,
                                            nodeId: `KKdspdX_O`,
                                            scopeId: `dpEtnX2Cb`,
                                            children: u(I, {
                                              fInE8STef: `Marcus Chen`,
                                              height: `100%`,
                                              hvz8VtdcM: `CEO and co-founder`,
                                              id: `KKdspdX_O`,
                                              layoutId: `KKdspdX_O`,
                                              style: { width: `100%` },
                                              uW2w7qvgf: Ms(
                                                {
                                                  pixelHeight: 512,
                                                  pixelWidth: 512,
                                                  src: `/test/framer/images/cbzvJLmsKzjdh3qcNx4E3GVI.png?width=512&height=512`,
                                                },
                                                ``,
                                              ),
                                              variant: $(`pasUMb4hu`),
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
                        ],
                      }),
                    }),
                    u(h.section, {
                      className: `framer-1rkpm90`,
                      "data-border": !0,
                      "data-framer-name": `Team`,
                      layout: D,
                      children: c(`div`, {
                        className: `framer-3kk6di`,
                        "data-framer-name": `content`,
                        children: [
                          u(`div`, {
                            className: `framer-qsojhh`,
                            "data-framer-name": `lockup`,
                            children: c(`div`, {
                              className: `framer-sux409`,
                              id: N,
                              ref: Ce,
                              children: [
                                c(`div`, {
                                  className: `framer-1ajdwsl`,
                                  children: [
                                    u(T, {
                                      breakpoint: S,
                                      overrides: {
                                        BAk7p3Xj0: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            2504.8 +
                                            0 +
                                            0 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            12 +
                                            0 +
                                            0,
                                        },
                                        OKYYWtIpm: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            2320.8 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: u(k, {
                                        height: 30,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          2476.8 +
                                          0 +
                                          0 +
                                          120 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          16 +
                                          0 +
                                          0,
                                        children: u(rs, {
                                          __framer__animate: { transition: Cs },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-nshk2y-container`,
                                          nodeId: `m8CoLK0Oo`,
                                          rendersWithMotion: !0,
                                          scopeId: `dpEtnX2Cb`,
                                          children: u(xt, {
                                            bwtRC2zWt: `Team`,
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
                                            id: `m8CoLK0Oo`,
                                            layoutId: `m8CoLK0Oo`,
                                            OgEx_2E7P: !1,
                                            pdea6CzDr: ke,
                                            Rtia32FHG: !0,
                                            variant: $(`qfOTriuLV`),
                                            VvHeeXiqh: !1,
                                            width: `100%`,
                                            ZGOQT_PfL: `4px 16px 4px 16px`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(Z, {
                                      __framer__animate: { transition: ws },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(t, {
                                        children: u(`h2`, {
                                          className: `framer-styles-preset-fahce0`,
                                          "data-styles-preset": `nZtZfLTSW`,
                                          dir: `auto`,
                                          children: `People who make Powder live and help`,
                                        }),
                                      }),
                                      className: `framer-b67w9o`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(`div`, {
                                  className: `framer-1xef61w`,
                                  children: u(`div`, {
                                    className: `framer-y3hc8n`,
                                    children: u(Z, {
                                      __framer__animate: { transition: Ts },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(t, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-prenqk`,
                                          "data-styles-preset": `POYKcChXw`,
                                          dir: `auto`,
                                          children: `Engineers, designers, and operators building AI that earns trust instead of demanding it.`,
                                        }),
                                      }),
                                      className: `framer-tdsu90`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          u(`div`, { className: `framer-39de6i` }),
                          u(`div`, {
                            className: `framer-1s1g9q`,
                            "data-hide-scrollbars": !0,
                            children: u(ye, {
                              children: u(Is, {
                                query: Fs(),
                                children: (e, t, n) =>
                                  u(a, {
                                    children: e?.map(
                                      (
                                        {
                                          id: e,
                                          jIoz9sylb: t,
                                          JKKbS2efl: n,
                                          uP2ES9K8l: r,
                                          ZQRlYqjam: i,
                                        },
                                        a,
                                      ) => (
                                        (t ??= ``),
                                        (r ??= ``),
                                        (i ??= ``),
                                        u(
                                          te,
                                          {
                                            id: `Y2xrQR4er-${e}`,
                                            children: u(Te.Provider, {
                                              value: { ZQRlYqjam: i },
                                              children: u(T, {
                                                breakpoint: S,
                                                overrides: {
                                                  BAk7p3Xj0: {
                                                    width: `max(max((min(min(${m?.width || `100vw`}, 1600px) - 48px, 720px) - 36px) / 2, 50px), 240px)`,
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      2504.8 +
                                                      0 +
                                                      0 +
                                                      120 +
                                                      217 +
                                                      0 +
                                                      0,
                                                  },
                                                  OKYYWtIpm: {
                                                    width: `max(min(min(${m?.width || `100vw`}, 1600px) - 48px, 720px), 240px)`,
                                                    y:
                                                      (m?.y || 0) +
                                                      0 +
                                                      2320.8 +
                                                      0 +
                                                      0 +
                                                      80 +
                                                      285 +
                                                      36 +
                                                      1440,
                                                  },
                                                },
                                                children: u(k, {
                                                  height: 48,
                                                  width: `max(max((min(min(${m?.width || `100vw`}, 1600px) - 48px, 1080px) - 72px) / 3, 50px), 240px)`,
                                                  y:
                                                    (m?.y || 0) +
                                                    0 +
                                                    2476.8 +
                                                    0 +
                                                    0 +
                                                    120 +
                                                    221 +
                                                    0 +
                                                    0,
                                                  children: u(rs, {
                                                    __framer__animate: {
                                                      transition: Ns(
                                                        As,
                                                        a * 0.025,
                                                      ),
                                                    },
                                                    __framer__animateOnce: !0,
                                                    __framer__enter: Q,
                                                    __framer__styleAppearEffectEnabled:
                                                      !0,
                                                    __framer__threshold: 0,
                                                    __perspectiveFX: !1,
                                                    __targetOpacity: 1,
                                                    className: `framer-1gin65v-container`,
                                                    nodeId: `Il8vSCiCE`,
                                                    rendersWithMotion: !0,
                                                    scopeId: `dpEtnX2Cb`,
                                                    children: u(I, {
                                                      fInE8STef: t,
                                                      height: `100%`,
                                                      hvz8VtdcM: r,
                                                      id: `Il8vSCiCE`,
                                                      layoutId: `Il8vSCiCE`,
                                                      style: { width: `100%` },
                                                      uW2w7qvgf: Ps(n),
                                                      variant: $(`pasUMb4hu`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                          e,
                                        )
                                      ),
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    u(h.section, {
                      className: `framer-kj46wt`,
                      "data-border": !0,
                      "data-framer-name": `Values`,
                      layout: D,
                      children: u(`div`, {
                        className: `framer-jnedfy`,
                        "data-framer-name": `Clip Container`,
                        children: c(`div`, {
                          className: `framer-1kodzv4`,
                          "data-framer-name": `content`,
                          children: [
                            c(`div`, {
                              className: `framer-129h111`,
                              id: we,
                              ref: De,
                              children: [
                                c(`div`, {
                                  className: `framer-ckm3d9`,
                                  children: [
                                    u(T, {
                                      breakpoint: S,
                                      overrides: {
                                        BAk7p3Xj0: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            3969.8 +
                                            0 +
                                            0 +
                                            0 +
                                            120 +
                                            0 +
                                            0 +
                                            12 +
                                            0 +
                                            0,
                                        },
                                        OKYYWtIpm: {
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            3425.8 +
                                            0 +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                        },
                                      },
                                      children: u(k, {
                                        height: 30,
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          3561.8 +
                                          0 +
                                          0 +
                                          0 +
                                          120 +
                                          0 +
                                          0 +
                                          16 +
                                          0 +
                                          0,
                                        children: u(rs, {
                                          __framer__animate: { transition: Cs },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Q,
                                          __framer__styleAppearEffectEnabled:
                                            !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-6x32gs-container`,
                                          nodeId: `jnUpuiOli`,
                                          rendersWithMotion: !0,
                                          scopeId: `dpEtnX2Cb`,
                                          children: u(xt, {
                                            bwtRC2zWt: `Values`,
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
                                            id: `jnUpuiOli`,
                                            layoutId: `jnUpuiOli`,
                                            OgEx_2E7P: !1,
                                            pdea6CzDr: ke,
                                            Rtia32FHG: !0,
                                            variant: $(`qfOTriuLV`),
                                            VvHeeXiqh: !1,
                                            width: `100%`,
                                            ZGOQT_PfL: `4px 16px 4px 16px`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(Z, {
                                      __framer__animate: { transition: ws },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(t, {
                                        children: u(`h2`, {
                                          className: `framer-styles-preset-fahce0`,
                                          "data-styles-preset": `nZtZfLTSW`,
                                          dir: `auto`,
                                          children: `Core principles that charge and drive us`,
                                        }),
                                      }),
                                      className: `framer-1r1s2ia`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(`div`, {
                                  className: `framer-1eqfrus`,
                                  children: u(`div`, {
                                    className: `framer-1lz3ry7`,
                                    children: u(Z, {
                                      __framer__animate: { transition: Ts },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(t, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-prenqk`,
                                          "data-styles-preset": `POYKcChXw`,
                                          dir: `auto`,
                                          children: `Five principles we are carefully holding ourselves to.`,
                                        }),
                                      }),
                                      className: `framer-tdnloo`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-zu38gh`,
                              children: [
                                u(`div`, {
                                  className: `framer-19hilhi`,
                                  children: u(k, {
                                    children: u(rs, {
                                      __framer__animate: { transition: Rs },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Ls,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1q5p6ws-container`,
                                      isAuthoredByUser: !0,
                                      nodeId: `Ir1brm3ZJ`,
                                      rendersWithMotion: !0,
                                      scopeId: `dpEtnX2Cb`,
                                      children: u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          BAk7p3Xj0: {
                                            cardVariant: `Mobile`,
                                            progressWidth: 460,
                                          },
                                          OKYYWtIpm: {
                                            cardVariant: `Mobile`,
                                            fillWidth: !0,
                                            progressWidth: 110,
                                          },
                                        },
                                        children: c(nt, {
                                          bounce: 0,
                                          cardVariant: `Desktop`,
                                          duration: 1,
                                          fillWidth: !1,
                                          gap: 24,
                                          height: `100%`,
                                          id: `Ir1brm3ZJ`,
                                          layoutId: `Ir1brm3ZJ`,
                                          nextButtonName: `ButtonNext`,
                                          overflow: !0,
                                          prevButtonName: `ButtonPrev`,
                                          progressAlignment: `center`,
                                          progressBackgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                                          progressBarColor: `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65))`,
                                          progressOffset: 48,
                                          progressWidth: 880,
                                          style: { width: `100%` },
                                          width: `100%`,
                                          children: [
                                            u(k, {
                                              height: 380,
                                              width: `364px`,
                                              children: u(M, {
                                                className: `framer-cnnpuf-container`,
                                                inComponentSlot: !0,
                                                nodeId: `FItjfJAa6`,
                                                rendersWithMotion: !0,
                                                scopeId: `dpEtnX2Cb`,
                                                children: u(F, {
                                                  height: `100%`,
                                                  ia_wRBnep: `We don't launch features that sound good in a pitch but crumble in production. If we can't demonstrate it works, it doesn't ship.`,
                                                  id: `FItjfJAa6`,
                                                  kdII0fGO7: `Ship with Proof`,
                                                  layoutId: `FItjfJAa6`,
                                                  P7spVVjOg: pn,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  variant: $(`dKYsEg9hd`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(k, {
                                              height: 380,
                                              width: `364px`,
                                              children: u(M, {
                                                className: `framer-1vfskvg-container`,
                                                inComponentSlot: !0,
                                                nodeId: `S0EfhmW0e`,
                                                rendersWithMotion: !0,
                                                scopeId: `dpEtnX2Cb`,
                                                children: u(F, {
                                                  height: `100%`,
                                                  ia_wRBnep: `Understanding the problem is the job. We dig into how teams actually work before building anything for how we think they should.`,
                                                  id: `S0EfhmW0e`,
                                                  kdII0fGO7: `Earn the Context`,
                                                  layoutId: `S0EfhmW0e`,
                                                  P7spVVjOg: Pt,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  variant: $(`dKYsEg9hd`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(k, {
                                              height: 380,
                                              width: `364px`,
                                              children: u(M, {
                                                className: `framer-jba1ev-container`,
                                                inComponentSlot: !0,
                                                nodeId: `TUBX4DeZ2`,
                                                rendersWithMotion: !0,
                                                scopeId: `dpEtnX2Cb`,
                                                children: u(F, {
                                                  height: `100%`,
                                                  ia_wRBnep: `Source attribution isn't a feature, it's a philosophy. We apply the same standard internally: decisions come with reasoning, not just conclusions.`,
                                                  id: `TUBX4DeZ2`,
                                                  kdII0fGO7: `Default to Transparent`,
                                                  layoutId: `TUBX4DeZ2`,
                                                  P7spVVjOg: Ht,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  variant: $(`dKYsEg9hd`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(k, {
                                              height: 380,
                                              width: `364px`,
                                              children: u(M, {
                                                className: `framer-deal1r-container`,
                                                inComponentSlot: !0,
                                                nodeId: `ISwdM5Y0m`,
                                                rendersWithMotion: !0,
                                                scopeId: `dpEtnX2Cb`,
                                                children: u(F, {
                                                  height: `100%`,
                                                  ia_wRBnep: `Titles don't determine responsibility. If you see something broken, it's yours to fix. We'd rather over-step than under-deliver.`,
                                                  id: `ISwdM5Y0m`,
                                                  kdII0fGO7: `Own the Outcome`,
                                                  layoutId: `ISwdM5Y0m`,
                                                  P7spVVjOg: an,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  variant: $(`dKYsEg9hd`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            u(k, {
                                              height: 380,
                                              width: `364px`,
                                              children: u(M, {
                                                className: `framer-1quzf9o-container`,
                                                inComponentSlot: !0,
                                                nodeId: `XCEfkahOi`,
                                                rendersWithMotion: !0,
                                                scopeId: `dpEtnX2Cb`,
                                                children: u(F, {
                                                  height: `100%`,
                                                  ia_wRBnep: `Comfort kills product quality. We actively look for the parts of our work that feel fragile and lean into them first.`,
                                                  id: `XCEfkahOi`,
                                                  kdII0fGO7: `Stay Uncomfortable`,
                                                  layoutId: `XCEfkahOi`,
                                                  P7spVVjOg: Xt,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`,
                                                  },
                                                  variant: $(`dKYsEg9hd`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                c(`div`, {
                                  className: `framer-umjrvu`,
                                  children: [
                                    u(k, {
                                      children: u(M, {
                                        className: `framer-1j79hep-container`,
                                        isAuthoredByUser: !0,
                                        nodeId: `qroObFrfl`,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(P, {
                                          baseBorderColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                          borderRadius: 44,
                                          borderWidth: 1,
                                          bottomLeft: 44,
                                          bottomRight: 44,
                                          cardBackground: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                          glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                          height: `100%`,
                                          id: `qroObFrfl`,
                                          isMixed: !1,
                                          layoutId: `qroObFrfl`,
                                          proximity: 490,
                                          smoothing: 0.05,
                                          style: {
                                            height: `100%`,
                                            width: `100%`,
                                          },
                                          topLeft: 44,
                                          topRight: 44,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    u(`div`, {
                                      className: `framer-zadq42`,
                                      "data-framer-name": `ButtonPrev`,
                                      children: u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          BAk7p3Xj0: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              3969.8 +
                                              0 +
                                              0 +
                                              0 +
                                              120 +
                                              168 +
                                              0 +
                                              224 +
                                              0 +
                                              0,
                                          },
                                          OKYYWtIpm: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              3425.8 +
                                              0 +
                                              0 +
                                              0 +
                                              80 +
                                              280 +
                                              0 +
                                              224 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: u(k, {
                                          height: 48,
                                          width: `48px`,
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            3561.8 +
                                            0 +
                                            0 +
                                            0 +
                                            120 +
                                            188 +
                                            0 +
                                            224 +
                                            0 +
                                            0,
                                          children: u(M, {
                                            className: `framer-i4iovm-container`,
                                            nodeId: `DWUK9sqzU`,
                                            scopeId: `dpEtnX2Cb`,
                                            children: u(He, {
                                              BANE331ww: !1,
                                              height: `100%`,
                                              id: `DWUK9sqzU`,
                                              layoutId: `DWUK9sqzU`,
                                              mYjHZJ6Gn: `▶`,
                                              p8v7WNQPZ: Ze,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              variant: $(`UixaMrEmY`),
                                              width: `100%`,
                                              YkfrxUoaP: !1,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(`div`, {
                                      className: `framer-sxctf7`,
                                      "data-framer-name": `ButtonNext`,
                                      children: u(T, {
                                        breakpoint: S,
                                        overrides: {
                                          BAk7p3Xj0: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              3969.8 +
                                              0 +
                                              0 +
                                              0 +
                                              120 +
                                              168 +
                                              0 +
                                              224 +
                                              0 +
                                              0,
                                          },
                                          OKYYWtIpm: {
                                            y:
                                              (m?.y || 0) +
                                              0 +
                                              3425.8 +
                                              0 +
                                              0 +
                                              0 +
                                              80 +
                                              280 +
                                              0 +
                                              224 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: u(k, {
                                          height: 48,
                                          width: `48px`,
                                          y:
                                            (m?.y || 0) +
                                            0 +
                                            3561.8 +
                                            0 +
                                            0 +
                                            0 +
                                            120 +
                                            188 +
                                            0 +
                                            224 +
                                            0 +
                                            0,
                                          children: u(M, {
                                            className: `framer-1ip7lg4-container`,
                                            nodeId: `bEZT3X9Jx`,
                                            scopeId: `dpEtnX2Cb`,
                                            children: u(He, {
                                              BANE331ww: !1,
                                              height: `100%`,
                                              id: `bEZT3X9Jx`,
                                              layoutId: `bEZT3X9Jx`,
                                              mYjHZJ6Gn: `▶`,
                                              p8v7WNQPZ: ke,
                                              style: {
                                                height: `100%`,
                                                width: `100%`,
                                              },
                                              variant: $(`UixaMrEmY`),
                                              width: `100%`,
                                              YkfrxUoaP: !1,
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
                    u(h.section, {
                      className: `framer-6eye85`,
                      "data-border": !0,
                      "data-framer-name": `Careers`,
                      id: Oe,
                      layout: D,
                      ref: Ae,
                      children: c(`div`, {
                        className: `framer-bdno77`,
                        "data-framer-name": `content`,
                        children: [
                          c(`div`, {
                            className: `framer-egmtvk`,
                            id: je,
                            ref: Me,
                            children: [
                              c(`div`, {
                                className: `framer-162a329`,
                                children: [
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          4649.8 +
                                          0 +
                                          0 +
                                          120 +
                                          0 +
                                          6 +
                                          0 +
                                          0,
                                      },
                                      OKYYWtIpm: {
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          4137.8 +
                                          0 +
                                          0 +
                                          80 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0,
                                      },
                                    },
                                    children: u(k, {
                                      height: 30,
                                      y:
                                        (m?.y || 0) +
                                        0 +
                                        4261.8 +
                                        0 +
                                        0 +
                                        120 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      children: u(rs, {
                                        __framer__animate: { transition: Cs },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Q,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0.5,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-15srlo-container`,
                                        nodeId: `DvaNydxQW`,
                                        rendersWithMotion: !0,
                                        scopeId: `dpEtnX2Cb`,
                                        children: u(xt, {
                                          bwtRC2zWt: `Careers`,
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
                                          id: `DvaNydxQW`,
                                          layoutId: `DvaNydxQW`,
                                          OgEx_2E7P: !1,
                                          pdea6CzDr: ke,
                                          Rtia32FHG: !0,
                                          variant: $(`qfOTriuLV`),
                                          VvHeeXiqh: !1,
                                          width: `100%`,
                                          ZGOQT_PfL: `4px 16px 4px 16px`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  u(T, {
                                    breakpoint: S,
                                    overrides: {
                                      BAk7p3Xj0: {
                                        children: u(t, {
                                          children: u(`h2`, {
                                            className: `framer-styles-preset-fahce0`,
                                            "data-styles-preset": `nZtZfLTSW`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                            },
                                            children: `See our open positions`,
                                          }),
                                        }),
                                      },
                                      OKYYWtIpm: {
                                        children: u(t, {
                                          children: u(`h2`, {
                                            className: `framer-styles-preset-fahce0`,
                                            "data-styles-preset": `nZtZfLTSW`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                            },
                                            children: `See our open positions`,
                                          }),
                                        }),
                                      },
                                    },
                                    children: u(Z, {
                                      __framer__animate: { transition: ws },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: u(t, {
                                        children: u(`h2`, {
                                          className: `framer-styles-preset-fahce0`,
                                          "data-styles-preset": `nZtZfLTSW`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                          },
                                          children: `See our open positions`,
                                        }),
                                      }),
                                      className: `framer-mcopt2`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              u(T, {
                                breakpoint: S,
                                overrides: {
                                  BAk7p3Xj0: {
                                    children: u(t, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-prenqk`,
                                        "data-styles-preset": `POYKcChXw`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                        },
                                        children: [
                                          `Didn't find your role? We're always hungry for a great talent. Drop us a line:`,
                                          u(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                            },
                                            children: ` `,
                                          }),
                                          u(ue, {
                                            href: `mailto:careers@powder.ai`,
                                            motionChild: !0,
                                            nodeId: `ngRygWpg2`,
                                            openInNewTab: !0,
                                            relValues: [],
                                            scopeId: `dpEtnX2Cb`,
                                            smoothScroll: !1,
                                            children: u(h.a, {
                                              className: `framer-styles-preset-v2iiak`,
                                              "data-styles-preset": `Bh7brll6H`,
                                              children: u(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                },
                                                children: u(`strong`, {
                                                  children: `careers@powder.ai`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                  OKYYWtIpm: {
                                    children: u(t, {
                                      children: c(`p`, {
                                        className: `framer-styles-preset-prenqk`,
                                        "data-styles-preset": `POYKcChXw`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                        },
                                        children: [
                                          `Didn't find your role? We're always hungry for a great talent. Drop us a line:`,
                                          u(`span`, {
                                            style: {
                                              "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                            },
                                            children: ` `,
                                          }),
                                          u(ue, {
                                            href: `mailto:careers@powder.ai`,
                                            motionChild: !0,
                                            nodeId: `ngRygWpg2`,
                                            openInNewTab: !0,
                                            relValues: [],
                                            scopeId: `dpEtnX2Cb`,
                                            smoothScroll: !1,
                                            children: u(h.a, {
                                              className: `framer-styles-preset-v2iiak`,
                                              "data-styles-preset": `Bh7brll6H`,
                                              children: u(`span`, {
                                                style: {
                                                  "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                },
                                                children: u(`strong`, {
                                                  children: `careers@powder.ai`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  },
                                },
                                children: u(Z, {
                                  __framer__animate: { transition: Ts },
                                  __framer__animateOnce: !0,
                                  __framer__enter: Q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: u(t, {
                                    children: c(`p`, {
                                      className: `framer-styles-preset-prenqk`,
                                      "data-styles-preset": `POYKcChXw`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                                      },
                                      children: [
                                        `Didn't find your role? We're always hungry for a great talent. Drop us a line:`,
                                        u(`span`, {
                                          style: {
                                            "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                          },
                                          children: ` `,
                                        }),
                                        u(ue, {
                                          href: `mailto:careers@powder.ai`,
                                          motionChild: !0,
                                          nodeId: `ngRygWpg2`,
                                          openInNewTab: !0,
                                          relValues: [],
                                          scopeId: `dpEtnX2Cb`,
                                          smoothScroll: !1,
                                          children: u(h.a, {
                                            className: `framer-styles-preset-v2iiak`,
                                            "data-styles-preset": `Bh7brll6H`,
                                            children: u(`span`, {
                                              style: {
                                                "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                              },
                                              children: u(`strong`, {
                                                children: `careers@powder.ai`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  className: `framer-1ku7lsq`,
                                  fonts: [`Inter`, `Inter-Bold`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          u(`div`, {
                            className: `framer-14dsuxb`,
                            "data-framer-name": `slides`,
                            children: c(`div`, {
                              className: `framer-7phk08`,
                              "data-framer-name": `Engineering`,
                              children: [
                                u(k, {
                                  children: u(M, {
                                    className: `framer-gyg5mg-container`,
                                    isAuthoredByUser: !0,
                                    nodeId: `esCuZoqE7`,
                                    scopeId: `dpEtnX2Cb`,
                                    children: u(P, {
                                      baseBorderColor: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                      borderRadius: 24,
                                      borderWidth: 1,
                                      bottomLeft: 24,
                                      bottomRight: 24,
                                      cardBackground: `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 0, 0))`,
                                      glowColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                                      height: `100%`,
                                      id: `esCuZoqE7`,
                                      isMixed: !1,
                                      layoutId: `esCuZoqE7`,
                                      proximity: 490,
                                      smoothing: 0.05,
                                      style: { height: `100%`, width: `100%` },
                                      topLeft: 24,
                                      topRight: 24,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                u(`div`, {
                                  className: `framer-1mdqc4d`,
                                  children: u(ye, {
                                    children: u(Is, {
                                      query: zs(),
                                      children: (e, t, n) =>
                                        u(a, {
                                          children: e?.map(
                                            (
                                              {
                                                aRfuf9kH9: e,
                                                Eg8oM5zLp: t,
                                                f2zVzxHzj: n,
                                                id: r,
                                                rtgh9KyKP: i,
                                                SBp0CmsPO: a,
                                                zL9SmCj7G: o,
                                              },
                                              s,
                                            ) => (
                                              (n ??= ``),
                                              (e ??= ``),
                                              (a ??= ``),
                                              (t ??= ``),
                                              u(
                                                te,
                                                {
                                                  id: `p1o4w5R7S-${r}`,
                                                  children: u(Te.Provider, {
                                                    value: { Eg8oM5zLp: t },
                                                    children: u(ie, {
                                                      links: [
                                                        {
                                                          href: a,
                                                          implicitPathVariables:
                                                            { Eg8oM5zLp: t },
                                                        },
                                                        {
                                                          href: a,
                                                          implicitPathVariables:
                                                            { Eg8oM5zLp: t },
                                                        },
                                                        {
                                                          href: a,
                                                          implicitPathVariables:
                                                            { Eg8oM5zLp: t },
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        u(T, {
                                                          breakpoint: S,
                                                          overrides: {
                                                            BAk7p3Xj0: {
                                                              width: `min(min(min(${m?.width || `100vw`}, 1600px) - 48px, 720px), 800px)`,
                                                              y:
                                                                (m?.y || 0) +
                                                                0 +
                                                                4649.8 +
                                                                0 +
                                                                0 +
                                                                120 +
                                                                168 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                            OKYYWtIpm: {
                                                              width: `min(min(min(${m?.width || `100vw`}, 1600px) - 48px, 720px), 800px)`,
                                                              y:
                                                                (m?.y || 0) +
                                                                0 +
                                                                4137.8 +
                                                                0 +
                                                                0 +
                                                                80 +
                                                                280 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: u(k, {
                                                            height: 151,
                                                            width: `min(min(min(${m?.width || `100vw`}, 1600px) - 48px, 1080px), 800px)`,
                                                            y:
                                                              (m?.y || 0) +
                                                              0 +
                                                              4261.8 +
                                                              0 +
                                                              0 +
                                                              120 +
                                                              308 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: u(rs, {
                                                              __framer__animate:
                                                                {
                                                                  transition:
                                                                    Ns(
                                                                      Cs,
                                                                      s * 0.1,
                                                                    ),
                                                                },
                                                              __framer__animateOnce:
                                                                !0,
                                                              __framer__enter:
                                                                Q,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0,
                                                              __perspectiveFX:
                                                                !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-7o6d-container`,
                                                              nodeId: `jKlTR4Sas`,
                                                              rendersWithMotion:
                                                                !0,
                                                              scopeId: `dpEtnX2Cb`,
                                                              children: u(T, {
                                                                breakpoint: S,
                                                                overrides: {
                                                                  BAk7p3Xj0: {
                                                                    lw1_LnDat: `28px`,
                                                                    oa5Cu7XDR:
                                                                      t[2],
                                                                  },
                                                                  OKYYWtIpm: {
                                                                    lw1_LnDat: `28px`,
                                                                    oa5Cu7XDR:
                                                                      t[1],
                                                                  },
                                                                },
                                                                children: u(
                                                                  wr,
                                                                  {
                                                                    aR8e7WnAX:
                                                                      aa.zL9SmCj7G?.(
                                                                        o,
                                                                        d,
                                                                      ),
                                                                    azm7Wvabe:
                                                                      n,
                                                                    Be7cpAzgk:
                                                                      e,
                                                                    cj2dmn7f7:
                                                                      aa.rtgh9KyKP?.(
                                                                        i,
                                                                        d,
                                                                      ),
                                                                    height: `100%`,
                                                                    id: `jKlTR4Sas`,
                                                                    layoutId: `jKlTR4Sas`,
                                                                    lw1_LnDat: `36px`,
                                                                    oa5Cu7XDR:
                                                                      t[0],
                                                                    style: {
                                                                      width: `100%`,
                                                                    },
                                                                    variant:
                                                                      $(
                                                                        `XNtMSWUk6`,
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
                                                r,
                                              )
                                            ),
                                          ),
                                        }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Y3kVU.framer-90pgux, .framer-Y3kVU .framer-90pgux { display: block; }`,
        `.framer-Y3kVU.framer-1pe3hid { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-Y3kVU .framer-3t8hyh { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-5xofnn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 180px 0px 120px 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-fiamjo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1ofc613 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-1a9svpn, .framer-Y3kVU .framer-zu38gh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-rns4fb-container, .framer-Y3kVU .framer-sdj0a5-container, .framer-Y3kVU .framer-nshk2y-container, .framer-Y3kVU .framer-6x32gs-container, .framer-Y3kVU .framer-15srlo-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Y3kVU .framer-14e31ze { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-hewjas { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 560px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-bkmqta, .framer-Y3kVU .framer-1ku7lsq { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 420px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-xbbn3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-15elrmp-container, .framer-Y3kVU .framer-1s4v896-container, .framer-Y3kVU .framer-1j79hep-container, .framer-Y3kVU .framer-gyg5mg-container { bottom: -8px; flex: none; left: -8px; position: absolute; right: -8px; top: -8px; z-index: 0; }`,
        `.framer-Y3kVU .framer-towwo2, .framer-Y3kVU .framer-sa2iv, .framer-Y3kVU .framer-8mjdn0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-1570r58-container, .framer-Y3kVU .framer-8eyrvc-container, .framer-Y3kVU .framer-1kx41wp-container, .framer-Y3kVU .framer-12gihlm-container, .framer-Y3kVU .framer-txnvh4-container, .framer-Y3kVU .framer-1kz3uc3-container, .framer-Y3kVU .framer-169jr32-container, .framer-Y3kVU .framer-96kcxn-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-Y3kVU .framer-1qzjda7-container, .framer-Y3kVU .framer-q808nr-container, .framer-Y3kVU .framer-1tn2kz-container, .framer-Y3kVU .framer-1q5p6ws-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-1n5thee { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-xg4nas { --border-bottom-width: 1px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; cursor: grab; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 560px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-1h9zz71, .framer-Y3kVU .framer-1cnhwna, .framer-Y3kVU .framer-9gcl47, .framer-Y3kVU .framer-1dq8qnm, .framer-Y3kVU .framer-1v9o7nx { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; flex: none; gap: 0px; height: 100%; position: relative; width: auto; }`,
        `.framer-Y3kVU .framer-1khr4yj { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-105w9hi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 180px 0px 180px 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-hgyku4, .framer-Y3kVU .framer-129h111 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-49meas { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-1p9nk8f, .framer-Y3kVU .framer-1r1s2ia, .framer-Y3kVU .framer-mcopt2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1a18ea4, .framer-Y3kVU .framer-1xef61w, .framer-Y3kVU .framer-1eqfrus { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-eb0lk { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 4px 32px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-lmdniv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Y3kVU .framer-1oqul2u { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Y3kVU .framer-c8aqbw { align-self: stretch; display: grid; flex: 1 0 0px; gap: 8px 8px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-ghvlhr { align-content: center; align-items: center; align-self: start; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Y3kVU .framer-1gfoc0u, .framer-Y3kVU .framer-15uy88o, .framer-Y3kVU .framer-1qqofl2, .framer-Y3kVU .framer-6k2a9o { --o4jego: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(255, 255, 255, 0.65)); aspect-ratio: 1.8 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 72px; }`,
        `.framer-Y3kVU .framer-vlxzds, .framer-Y3kVU .framer-18pc572, .framer-Y3kVU .framer-qq50jq { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 24px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1sylcsz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-gkayit { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-149fsgy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1jpmzz3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 420px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1ru8kxb-container, .framer-Y3kVU .framer-7o6d-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1rkpm90, .framer-Y3kVU .framer-6eye85 { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-3kk6di { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-qsojhh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Y3kVU .framer-sux409 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-1ajdwsl, .framer-Y3kVU .framer-ckm3d9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-b67w9o { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 431px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-y3hc8n, .framer-Y3kVU .framer-1lz3ry7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 4px 32px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-tdsu90, .framer-Y3kVU .framer-tdnloo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; max-width: 350px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-39de6i { background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, #012647); flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1s1g9q { display: grid; flex: none; gap: 48px 36px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1gin65v-container { align-self: start; flex: none; height: auto; justify-self: start; min-width: 240px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-kj46wt { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 1px 0px 1px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-jnedfy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1kodzv4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 120px 0px 120px 0px; position: relative; width: 1px; }`,
        `.framer-Y3kVU .framer-19hilhi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Y3kVU .framer-cnnpuf-container, .framer-Y3kVU .framer-1vfskvg-container, .framer-Y3kVU .framer-jba1ev-container, .framer-Y3kVU .framer-deal1r-container, .framer-Y3kVU .framer-1quzf9o-container { height: 380px; position: relative; width: 364px; }`,
        `.framer-Y3kVU .framer-umjrvu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-zadq42, .framer-Y3kVU .framer-sxctf7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Y3kVU .framer-i4iovm-container, .framer-Y3kVU .framer-1ip7lg4-container { flex: none; height: 48px; position: relative; width: 48px; }`,
        `.framer-Y3kVU .framer-bdno77 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 120px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-egmtvk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-162a329 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-14dsuxb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-7phk08 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Y3kVU .framer-1mdqc4d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        ..._t,
        ...Oe,
        ...Je,
        ...je,
        ...Re,
        `.framer-Y3kVU[data-border="true"]::after, .framer-Y3kVU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `.framer-Y3kVU[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-Y3kVU [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `.framer-Y3kVU[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-Y3kVU [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `.framer-Y3kVU[data-hide-scrollbars="true"], .framer-Y3kVU [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        `@media (max-width: 809.98px) { .framer-Y3kVU.framer-1pe3hid { width: 377px; } .framer-Y3kVU .framer-5xofnn { gap: 36px; max-width: 720px; padding: 120px 0px 64px 0px; } .framer-Y3kVU .framer-hewjas { max-width: 500px; } .framer-Y3kVU .framer-xbbn3 { flex-direction: column; } .framer-Y3kVU .framer-towwo2, .framer-Y3kVU .framer-sa2iv, .framer-Y3kVU .framer-8mjdn0, .framer-Y3kVU .framer-49meas, .framer-Y3kVU .framer-1a18ea4, .framer-Y3kVU .framer-1ajdwsl, .framer-Y3kVU .framer-1xef61w, .framer-Y3kVU .framer-ckm3d9, .framer-Y3kVU .framer-1eqfrus { flex: none; width: 100%; } .framer-Y3kVU .framer-xg4nas { height: 230px; } .framer-Y3kVU .framer-105w9hi, .framer-Y3kVU .framer-1kodzv4, .framer-Y3kVU .framer-bdno77 { gap: 36px; max-width: 720px; padding: 80px 0px 80px 0px; } .framer-Y3kVU .framer-hgyku4 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; } .framer-Y3kVU .framer-eb0lk, .framer-Y3kVU .framer-1lz3ry7 { justify-content: flex-start; padding: 0px; } .framer-Y3kVU .framer-1oqul2u { flex-direction: column; gap: 4px; } .framer-Y3kVU .framer-c8aqbw { align-self: unset; flex: none; gap: 4px 4px; height: 260px; order: 1; width: 100%; } .framer-Y3kVU .framer-1sylcsz { flex: none; order: 0; width: 100%; } .framer-Y3kVU .framer-gkayit { gap: 36px; padding: 48px 28px 48px 28px; } .framer-Y3kVU .framer-3kk6di { gap: 0px; max-width: 720px; padding: 80px 0px 80px 0px; } .framer-Y3kVU .framer-qsojhh { align-content: flex-start; align-items: flex-start; flex-direction: column; } .framer-Y3kVU .framer-sux409 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 16px; padding: 0px 0px 36px 0px; width: 100%; } .framer-Y3kVU .framer-y3hc8n { justify-content: flex-start; padding: 0px 0px 4px 0px; } .framer-Y3kVU .framer-1s1g9q { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 15%) add; align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px 24px; height: 66vh; justify-content: flex-start; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%) add; overflow: auto; padding: 36px 0px 36px 0px; } .framer-Y3kVU .framer-1gin65v-container { align-self: unset; } .framer-Y3kVU .framer-129h111 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; order: 0; } .framer-Y3kVU .framer-zu38gh { order: 1; } .framer-Y3kVU .framer-egmtvk, .framer-Y3kVU .framer-162a329 { align-content: flex-start; align-items: flex-start; } .framer-Y3kVU .framer-14dsuxb { gap: 48px; }}`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-Y3kVU.framer-1pe3hid { width: 810px; } .framer-Y3kVU .framer-5xofnn { gap: 48px; max-width: 720px; padding: 120px 0px 80px 0px; } .framer-Y3kVU .framer-xg4nas { height: 480px; } .framer-Y3kVU .framer-105w9hi { gap: 48px; max-width: 720px; padding: 120px 0px 120px 0px; } .framer-Y3kVU .framer-eb0lk, .framer-Y3kVU .framer-y3hc8n, .framer-Y3kVU .framer-1lz3ry7 { padding: 0px; } .framer-Y3kVU .framer-1oqul2u { flex-direction: column; } .framer-Y3kVU .framer-1s4v896-container { order: 0; } .framer-Y3kVU .framer-c8aqbw { align-self: unset; flex: none; height: 460px; order: 2; width: 100%; } .framer-Y3kVU .framer-1sylcsz { flex: none; justify-content: center; max-width: 720px; order: 1; width: 100%; } .framer-Y3kVU .framer-gkayit { flex-direction: row; } .framer-Y3kVU .framer-149fsgy, .framer-Y3kVU .framer-1ku7lsq { flex: 1 0 0px; width: 1px; } .framer-Y3kVU .framer-1ru8kxb-container { width: auto; } .framer-Y3kVU .framer-3kk6di { max-width: 720px; } .framer-Y3kVU .framer-1ajdwsl, .framer-Y3kVU .framer-ckm3d9 { flex: 2 0 0px; } .framer-Y3kVU .framer-1s1g9q { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-Y3kVU .framer-1kodzv4, .framer-Y3kVU .framer-bdno77 { gap: 48px; max-width: 720px; } .framer-Y3kVU .framer-egmtvk { flex-direction: row; gap: 36px; } .framer-Y3kVU .framer-162a329 { align-content: flex-start; align-items: flex-start; flex: 2 0 0px; width: 1px; }}`,
      ],
      `framer-Y3kVU`,
    )),
    (Us.displayName = `New Home`),
    (Us.defaultProps = { height: 7148, width: 1280 }),
    v(
      Us,
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
        ...ns,
        ...is,
        ...as,
        ...cs,
        ...ls,
        ...us,
        ...ds,
        ...fs,
        ...ps,
        ...ms,
        ...hs,
        ...gs,
        ...D(gt),
        ...D(Me),
        ...D(Ye),
        ...D(De),
        ...D(ze),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    (Us.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = be.get(Fs(), n),
          i = be.get(zs(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          oe(xt, {}, t),
          oe(L, {}, t),
          oe(I, {}, t),
          oe(F, {}, t),
          oe(He, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => oe(I, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => oe(wr, {}, t)));
          })(),
        ]);
      },
    }),
    (Ws = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        default: {
          type: `reactComponent`,
          name: `FramerdpEtnX2Cb`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `7148`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"RS92lrecu":{"pattern":":RS92lrecu","name":"hero"},"kkb614BCi":{"pattern":":kkb614BCi","name":"scroll"},"jn4LK8Odh":{"pattern":":jn4LK8Odh","name":"4"},"Ro2LEe0ZJ":{"pattern":":Ro2LEe0ZJ","name":"4"},"Hk4RLrfhK":{"pattern":":Hk4RLrfhK","name":"4"},"vIFrrY2Ua":{"pattern":":vIFrrY2Ua","name":"roles"},"t2VlnlHpb":{"pattern":":t2VlnlHpb","name":"4"}}`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"OKYYWtIpm":{"layout":["fixed","auto"]},"BAk7p3Xj0":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1280`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ws as __FramerMetadata__, Us as default, ys as queryParamNames };
//# sourceMappingURL=prP4YwmBUgmpWCBqgphYmVrxCEiImCXUqDmvi2Mr20o.DxPkbbLb.mjs.map
