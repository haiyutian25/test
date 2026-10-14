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
import { M as d, i as ee, o as te, t as ne } from "./motion.DqePFWeo.mjs";
import {
  A as f,
  At as re,
  D as ie,
  Dt as p,
  H as ae,
  P as m,
  W as oe,
  X as h,
  bt as se,
  ft as ce,
  j as g,
  jt as _,
  s as v,
} from "./framer.CFgihyWK.mjs";
import { c as le, l as ue, s as de, u as fe } from "./shared-lib.t8-xaOwk.mjs";
var y,
  pe,
  b,
  x,
  S,
  me,
  C,
  he = e(() => {
    (c(),
      h(),
      r(),
      (y = `var(--framer-icon-mask)`),
      (pe = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (b = d.create(pe)),
      (x = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(b, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (S = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 18 8.026 L 9.845 16.289 C 7.593 18.57 3.941 18.57 1.689 16.289 C -0.563 14.007 -0.563 10.308 1.689 8.026 L 8.485 1.141 C 9.987 -0.38 12.421 -0.38 13.922 1.141 C 15.424 2.662 15.424 5.128 13.922 6.649 L 7.126 13.535 C 6.375 14.295 5.158 14.295 4.408 13.535 C 3.657 12.774 3.657 11.541 4.408 10.78 L 11.204 3.895" fill="transparent" height="17.9999975px" id="dVhoi7kmK" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 3)" width="18.0000025px"/></svg>`),
      (me = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (C = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = me(e),
            u = p(`1642451957`, S);
          return o(x, {
            ...l,
            className: m(`framer-QMXzX`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-QMXzX { -webkit-mask: ${y}; aspect-ratio: 1; display: block; mask: ${y}; width: 24px; }`,
        ],
        `framer-QMXzX`,
      )),
      (C.displayName = `Attachment Clip Hook`),
      g(C, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  w,
  ge,
  T,
  E,
  D,
  O,
  k,
  _e = e(() => {
    (c(),
      h(),
      r(),
      (w = `var(--framer-icon-mask)`),
      (ge = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (T = d.create(ge)),
      (E = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(T, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (D = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14 0 M 0 5 L 14 5 M 0 10 L 14 10" fill="transparent" height="10px" id="RKPdZ0RaD" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5 7)" width="14px"/></svg>`),
      (O = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (k = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = O(e),
            u = p(`3326530955`, D);
          return o(E, {
            ...l,
            className: m(`framer-wg63I`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-wg63I { -webkit-mask: ${w}; aspect-ratio: 1; display: block; mask: ${w}; width: 24px; }`,
        ],
        `framer-wg63I`,
      )),
      (k.displayName = `Menu Hambuger`),
      g(k, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  ve = e(() => {
    (c(),
      h(),
      r(),
      (A = `var(--framer-icon-mask)`),
      (j = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (M = d.create(j)),
      (N = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(M, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (P = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7 0 L 7 18 M 7 0 L 0 7 M 7 0 L 14 7" fill="transparent" height="18px" id="CvTA6chCL" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5 3)" width="14px"/></svg>`),
      (F = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (I = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = F(e),
            u = p(`3222760347`, P);
          return o(N, {
            ...l,
            className: m(`framer-5U4Eu`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-5U4Eu { -webkit-mask: ${A}; aspect-ratio: 1; display: block; mask: ${A}; width: 24px; }`,
        ],
        `framer-5U4Eu`,
      )),
      (I.displayName = `Arrow Up`),
      g(I, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  L,
  R,
  z,
  B,
  ye,
  be,
  V,
  xe = e(() => {
    (c(),
      h(),
      r(),
      (L = `var(--framer-icon-mask)`),
      (R = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (z = d.create(R)),
      (B = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(z, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (ye = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 12 L 20 20 M 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 C 10.866 0 14 3.134 14 7 Z" fill="transparent" height="20px" id="LgkkLgy81" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (be = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (V = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = be(e),
            u = p(`5093950`, ye);
          return o(B, {
            ...l,
            className: m(`framer-J9p6H`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-J9p6H { -webkit-mask: ${L}; aspect-ratio: 1; display: block; mask: ${L}; width: 24px; }`,
        ],
        `framer-J9p6H`,
      )),
      (V.displayName = `Search 2`),
      g(V, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  H,
  Se,
  Ce,
  we,
  Te,
  Ee,
  U,
  De = e(() => {
    (c(),
      h(),
      r(),
      (H = `var(--framer-icon-mask)`),
      (Se = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ce = d.create(Se)),
      (we = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(Ce, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Te = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 7 15 C 3.134 15 0 11.866 0 8 M 7 15 C 10.866 15 14 11.866 14 8 M 7 15 L 7 19 M 10 20 L 4 20 M 7 11 C 5.343 11 4 9.523 4 7.7 L 4 3.3 C 4 1.477 5.343 0 7 0 C 8.657 0 10 1.477 10 3.3 L 10 7.7 C 10 9.523 8.657 11 7 11 Z" fill="transparent" height="20px" id="niUXnO0UI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(5 2)" width="14px"/></svg>`),
      (Ee = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (U = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = Ee(e),
            u = p(`2603613459`, Te);
          return o(we, {
            ...l,
            className: m(`framer-7sCAW`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-7sCAW { -webkit-mask: ${H}; aspect-ratio: 1; display: block; mask: ${H}; width: 24px; }`,
        ],
        `framer-7sCAW`,
      )),
      (U.displayName = `Microphone Music Talk`),
      g(U, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  W,
  Oe,
  ke,
  Ae,
  je,
  Me,
  G,
  Ne = e(() => {
    (c(),
      h(),
      r(),
      (W = `var(--framer-icon-mask)`),
      (Oe = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (ke = d.create(Oe)),
      (Ae = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(ke, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (je = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 9 L 2 0 L 9.5 0 L 8 6 L 12 6 L 3 18 L 4.5 9 Z" fill="transparent" height="18px" id="M_Xnkji58" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(6 3)" width="12px"/></svg>`),
      (Me = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (G = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = Me(e),
            u = p(`990337168`, je);
          return o(Ae, {
            ...l,
            className: m(`framer-ZgMBw`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-ZgMBw { -webkit-mask: ${W}; aspect-ratio: 1; display: block; mask: ${W}; width: 24px; }`,
        ],
        `framer-ZgMBw`,
      )),
      (G.displayName = `Lightning Energy`),
      g(G, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  K,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  q,
  ze = e(() => {
    (c(),
      h(),
      r(),
      (K = `var(--framer-icon-mask)`),
      (Pe = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Fe = d.create(Pe)),
      (Ie = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(Fe, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Le = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 0 L 6 15 M 12 10 L 12 15 M 0 6 L 0 15" fill="transparent" height="15px" id="Yt95tXVJM" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(6 5)" width="12px"/></svg>`),
      (Re = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (q = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = Re(e),
            u = p(`1774977954`, Le);
          return o(Ie, {
            ...l,
            className: m(`framer-4YUMK`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-4YUMK { -webkit-mask: ${K}; aspect-ratio: 1; display: block; mask: ${K}; width: 24px; }`,
        ],
        `framer-4YUMK`,
      )),
      (q.displayName = `Bar Chart`),
      g(q, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  J,
  Be,
  Ve,
  Y,
  He = e(() => {
    (c(),
      h(),
      r(),
      (J = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><path d="M 3.515 37.456 C -1.172 32.77 -1.172 25.172 3.515 20.485 L 20.485 3.515 C 25.172 -1.172 32.77 -1.172 37.456 3.515 L 54.426 20.485 C 59.113 25.172 59.113 32.77 54.426 37.456 L 37.456 54.426 C 32.77 59.113 25.172 59.113 20.485 54.426 Z M 39.184 31.456 C 41.856 31.456 43.195 28.224 41.305 26.335 L 31.577 16.607 C 30.406 15.435 28.506 15.435 27.335 16.607 L 17.607 26.335 C 15.717 28.224 17.055 31.456 19.728 31.456 Z" fill-opacity="1" fill="var(--o4jego, rgb(255, 255, 255))" height="57.94112549695428px" id="m9W6AbFXa" transform="translate(7.029 7.029)" width="57.94112549695428px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Be = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(d.div, { ...a, layoutId: r, ref: t })
          : o(`div`, { ...a, ref: t });
      })),
      (Ve = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        z1don5LZx: e ?? i.z1don5LZx ?? `rgb(255, 255, 255)`,
      })),
      (Y = _(
        s(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            z1don5LZx: s,
            ...c
          } = Ve(e);
          return o(Be, {
            ...c,
            className: m(`framer-9PHTl`, r),
            layoutId: i,
            ref: t,
            style: { "--o4jego": s, ...n },
          });
        }),
        [
          `.framer-9PHTl { -webkit-mask: ${J}; aspect-ratio: 1; background-color: var(--o4jego); mask: ${J}; width: 72px; }`,
        ],
        `framer-9PHTl`,
      )),
      (Y.displayName = `Logo 1`),
      g(Y, {
        z1don5LZx: {
          defaultValue: `rgb(255, 255, 255)`,
          hidden: !1,
          title: `Fill`,
          type: v.Color,
        },
      }));
  }),
  X,
  Ue,
  We,
  Ge,
  Ke,
  Z,
  Q,
  qe = e(() => {
    (c(),
      h(),
      r(),
      (X = `var(--framer-icon-mask)`),
      (Ue = s(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (We = d.create(Ue)),
      (Ge = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(We, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (Ke = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 6 9 L 10 5 M 10 5 L 14 9 M 10 5 L 10 15 M 10 20 C 4.477 20 0 15.523 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 Z" fill="transparent" height="20px" id="l82CGFvEH" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(2 2)" width="20px"/></svg>`),
      (Z = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (Q = _(
        s(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: s,
              vet7gqNu_: c,
              ...l
            } = Z(e),
            u = p(`1404426788`, Ke);
          return o(Ge, {
            ...l,
            className: m(`framer-ZBRwp`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": c, "--4rxgx6": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: u }),
          });
        }),
        [
          `.framer-ZBRwp { -webkit-mask: ${X}; aspect-ratio: 1; display: block; mask: ${X}; width: 24px; }`,
        ],
        `framer-ZBRwp`,
      )),
      (Q.displayName = `Arrow Up Circle`),
      g(Q, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: v.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: v.Number,
        },
      }));
  }),
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  $,
  nt = e(() => {
    (c(),
      h(),
      ne(),
      r(),
      qe(),
      fe(),
      (Je = ae(Q)),
      (Ye = `framer-ars7u`),
      (Xe = { PbuqS95LQ: `framer-v-1bpy85q` }),
      (Ze = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Qe = ({ value: e, children: t }) => {
        let r = i(te),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(te.Provider, { value: s, children: t });
      }),
      ($e = d.create(t)),
      (et = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        logK7JHUX:
          n ??
          i.logK7JHUX ??
          `Summarize our product in simple terms for new users`,
      })),
      (tt = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      ($ = _(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            s = l(),
            { activeLocale: c, setLocale: te } = se();
          ce();
          let {
              style: ne,
              className: f,
              layoutId: p,
              variant: ae,
              logK7JHUX: oe,
              ...h
            } = et(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: le,
              gestureVariant: ue,
              isLoading: fe,
              setGestureState: y,
              setVariant: pe,
              variants: b,
            } = re({
              defaultVariant: `PbuqS95LQ`,
              ref: i,
              variant: ae,
              variantClassNames: Xe,
            }),
            x = tt(e, b),
            S = m(Ye, de);
          return o(ee, {
            id: p ?? s,
            children: o($e, {
              animate: b,
              initial: !1,
              children: o(Qe, {
                value: Ze,
                children: a(d.div, {
                  ...h,
                  ...le,
                  className: m(S, `framer-1bpy85q`, f, _),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: x,
                  layoutId: `PbuqS95LQ`,
                  ref: i,
                  style: { ...ne },
                  children: [
                    o(ie, {
                      __fromCanvasComponent: !0,
                      children: o(t, {
                        children: o(d.p, {
                          className: `framer-styles-preset-1fhxhj6`,
                          "data-styles-preset": `O0790qsZT`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgb(171, 164, 161)))`,
                          },
                          children: `Summarize our product in simple terms for new users`,
                        }),
                      }),
                      className: `framer-lf5bq8`,
                      fonts: [`Inter`],
                      layoutDependency: x,
                      layoutId: `IArt1ky8v`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgb(171, 164, 161))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: oe,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    o(Q, {
                      animated: !0,
                      className: `framer-t4gl0t`,
                      layoutDependency: x,
                      layoutId: `XvPFidPd2`,
                      style: {
                        "--1ww558a": 1,
                        "--4rxgx6": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(250, 230, 225))`,
                        rotate: 90,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-ars7u.framer-bz18oe, .framer-ars7u .framer-bz18oe { display: block; }`,
          `.framer-ars7u.framer-1bpy85q { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 562px; }`,
          `.framer-ars7u .framer-lf5bq8 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-ars7u .framer-t4gl0t { flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 21px; }`,
          ...le,
        ],
        `framer-ars7u`,
      )),
      ($.displayName = `hint line`),
      ($.defaultProps = { height: 21, width: 562 }),
      g($, {
        logK7JHUX: {
          defaultValue: `Summarize our product in simple terms for new users`,
          displayTextArea: !1,
          title: `Text`,
          type: v.String,
        },
        onlogK7JHUXChange: { changes: `logK7JHUX`, type: v.ChangeHandler },
      }),
      f(
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
          ...Je,
          ...oe(ue),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export {
  C as _,
  q as a,
  Ne as c,
  V as d,
  xe as f,
  _e as g,
  k as h,
  He as i,
  U as l,
  ve as m,
  nt as n,
  ze as o,
  I as p,
  Y as r,
  G as s,
  $ as t,
  De as u,
  he as v,
};
//# sourceMappingURL=sphFUGhj9.BWeZJkL5.mjs.map
