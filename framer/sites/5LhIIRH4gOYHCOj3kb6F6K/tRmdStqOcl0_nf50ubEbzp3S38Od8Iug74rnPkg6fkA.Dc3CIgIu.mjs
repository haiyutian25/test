import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  c as a,
  j as o,
  l as s,
  o as c,
  p as l,
  s as u,
  w as d,
  x as f,
} from "./react.CbTQkvGa.mjs";
import { M as p, i as m, o as h, t as g } from "./motion.DqePFWeo.mjs";
import {
  A as _,
  At as v,
  D as y,
  Dt as b,
  F as x,
  G as S,
  H as C,
  I as w,
  It as T,
  Nt as E,
  O as D,
  Ot as ee,
  P as O,
  S as te,
  Tt as k,
  U as A,
  W as j,
  X as M,
  _t as N,
  a as P,
  bt as ne,
  d as F,
  ft as re,
  gt as ie,
  ht as ae,
  i as oe,
  j as I,
  jt as L,
  n as se,
  nt as ce,
  o as le,
  p as ue,
  s as R,
  ut as de,
  w as fe,
  wt as pe,
  x as me,
  xt as he,
  yt as ge,
} from "./framer.CFgihyWK.mjs";
import {
  a as _e,
  c as ve,
  d as ye,
  f as be,
  i as xe,
  l as Se,
  o as Ce,
  r as we,
  s as Te,
  u as Ee,
} from "./shared-lib.t8-xaOwk.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./Bh7brll6H.qtsmKJJV.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./gk3iglzUb.DiXJMYUN.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./nZtZfLTSW.DMk9jra7.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./Q_3jdt9X6.DkyYpPLX.mjs";
import {
  a as Ue,
  c as We,
  d as z,
  i as Ge,
  l as B,
  n as Ke,
  o as qe,
  r as Je,
  s as Ye,
  t as Xe,
  u as Ze,
} from "./Yki2UlU8A.ChUH1oy5.mjs";
import {
  a as Qe,
  i as $e,
  n as et,
  o as tt,
  r as nt,
  t as V,
} from "./m54zGBZ4w.CObtf37r.mjs";
import {
  a as rt,
  c as it,
  i as at,
  l as ot,
  n as st,
  o as ct,
  r as lt,
  s as ut,
  t as dt,
  u as ft,
} from "./MErJyB6Do.DrHl1_JM.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./gSwoAzhaJ.C2ngI3i2.mjs";
import { i as _t, n as vt, r as yt, t as bt } from "./uLTHU2gC4.BdjxAb2y.mjs";
import {
  a as xt,
  c as St,
  i as Ct,
  n as wt,
  o as Tt,
  r as Et,
  s as Dt,
  t as Ot,
} from "./E5yNQbQ3n.DcfWS1YV.mjs";
import kt, {
  t as At,
} from "./P1dh3c6MekfEsTsfpwY6uXzAJ36q-UsBHnEEQiHsTLI.DBFmmCKc.mjs";
function H({ direction: e, style: t }) {
  let n = fe.current() === fe.canvas,
    r = f(null),
    a = f(),
    o = e === `vertical` || e === `both`,
    s = e === `horizontal` || e === `both`;
  return (
    i(() => {
      if (n) return;
      let e = r.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let i = () => {
        let n = e.getBoundingClientRect();
        (s && (t.style.width = `${n.width}px`),
          o && (t.style.height = `${n.height}px`),
          (a.current = requestAnimationFrame(i)));
      };
      return (
        (a.current = requestAnimationFrame(i)),
        () => {
          (a.current && cancelAnimationFrame(a.current),
            t && (s && (t.style.width = ``), o && (t.style.height = ``)));
        }
      );
    }, [e]),
    c(`div`, { ref: r, style: { ...t } })
  );
}
var jt = e(() => {
    (u(),
      M(),
      r(),
      (H.displayName = `Layout Jump Preventer`),
      I(H, {
        direction: {
          type: R.Enum,
          defaultValue: `vertical`,
          options: [`vertical`, `horizontal`, `both`],
          optionTitles: [`Vertical`, `Horizontal`, `Both`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          optionIcons: [
            `direction-vertical`,
            `direction-horizontal`,
            `direction-all`,
          ],
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  U,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  W,
  Lt = e(() => {
    (u(),
      M(),
      r(),
      (U = `var(--framer-icon-mask)`),
      (Mt = l(function (e, t) {
        return c(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Nt = p.create(Mt)),
      (Pt = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? c(Nt, { ...a, layoutId: r, ref: t, children: i })
          : c(`svg`, { ...a, ref: t, children: i });
      })),
      (Ft = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 16 0 L 8 8 L 0 0" fill="transparent" height="8px" id="xJug7rCUu" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(4 8)" width="16px"/></svg>`),
      (It = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (W = L(
        l(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...l
            } = It(e),
            u = b(`2703850162`, Ft);
          return c(Pt, {
            ...l,
            className: O(`framer-1REC3`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: c(`use`, { href: u }),
          });
        }),
        [
          `.framer-1REC3 { -webkit-mask: ${U}; aspect-ratio: 1; display: block; mask: ${U}; width: 24px; }`,
        ],
        `framer-1REC3`,
      )),
      (W.displayName = `Arrow Chevron Down`),
      I(W, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: R.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: R.Number,
        },
      }));
  }),
  Rt,
  zt,
  Bt,
  Vt = e(() => {
    (M(),
      x.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Rt = [
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/test/framer/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/test/framer/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/test/framer/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/test/framer/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/test/framer/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/test/framer/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/test/framer/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `/test/framer/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `/test/framer/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `/test/framer/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `/test/framer/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `/test/framer/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `/test/framer/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `/test/framer/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (zt = [
        `.framer-hNbZh .framer-styles-preset-hnm2wg:not(.rich-text-wrapper), .framer-hNbZh .framer-styles-preset-hnm2wg.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 2.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Bt = `framer-hNbZh`));
  }),
  Ht,
  Ut,
  Wt,
  Gt = e(() => {
    (M(),
      x.loadFonts([`GF;Fragment Mono-regular`]),
      (Ht = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fragment Mono`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ut = [
        `.framer-QORBr .framer-styles-preset-1h7sinm:not(.rich-text-wrapper), .framer-QORBr .framer-styles-preset-1h7sinm.rich-text-wrapper code { --framer-code-font-family: "Fragment Mono", monospace; --framer-code-font-style: normal; --framer-code-font-weight: 400; --framer-code-text-color: var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, #fff3f0); --framer-font-size-scale: 0.8; background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 405px; border-bottom-right-radius: 405px; border-bottom-width: 1px; border-color: var(--token-c6de8ea4-3684-4c2f-917e-fc3d1879d6b0, rgba(250, 230, 225, 0.65)); border-left-width: 1px; border-right-width: 1px; border-style: solid; border-top-left-radius: 405px; border-top-right-radius: 405px; border-top-width: 1px; padding-bottom: 0.4em; padding-left: 0.8em; padding-right: 0.8em; padding-top: 0.4em; }`,
      ]),
      (Wt = `framer-QORBr`));
  });
function Kt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  G,
  rn = e(() => {
    (u(),
      M(),
      g(),
      r(),
      Lt(),
      Ze(),
      De(),
      tt(),
      ft(),
      ct(),
      Vt(),
      je(),
      pt(),
      Gt(),
      Fe(),
      ze(),
      _t(),
      Ge(),
      (qt = C(W)),
      (Jt = [`ljgOLl4FU`, `OaVfJAbTB`]),
      (Yt = `framer-lSapB`),
      (Xt = { ljgOLl4FU: `framer-v-yefld2`, OaVfJAbTB: `framer-v-5mk7gy` }),
      (Zt = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (Qt = ({ value: e, children: t }) => {
        let r = o(h),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: t });
      }),
      ($t = { Closed: `OaVfJAbTB`, Open: `ljgOLl4FU` }),
      (en = p.create(t)),
      (tn = ({
        border: e,
        content: n,
        height: r,
        id: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        EC6qr5fYP:
          n ??
          s.EC6qr5fYP ??
          c(t, { children: c(p.p, { children: `Content` }) }),
        NsL6p_nKE: e ??
          s.NsL6p_nKE ?? {
            borderBottomWidth: 1,
            borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        variant: $t[s.variant] ?? s.variant ?? `ljgOLl4FU`,
        zxo83vP6Y: a ?? s.zxo83vP6Y ?? `New`,
      })),
      (nn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (G = L(
        l(function (e, n) {
          let r = f(null),
            i = n ?? r,
            a = d(),
            { activeLocale: o, setLocale: l } = ne();
          re();
          let {
              style: u,
              className: h,
              layoutId: g,
              variant: _,
              zxo83vP6Y: b,
              EC6qr5fYP: x,
              NsL6p_nKE: S,
              ...C
            } = tn(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = v({
              cycleOrder: Jt,
              defaultVariant: `ljgOLl4FU`,
              ref: i,
              variant: _,
              variantClassNames: Xt,
            }),
            M = nn(e, j),
            { activeVariantCallback: N, delay: P } = de(w),
            F = N(async (...e) => {
              (k({ isPressed: !1 }), A(`OaVfJAbTB`));
            }),
            ie = N(async (...e) => {
              (k({ isPressed: !1 }), A(`ljgOLl4FU`));
            }),
            ae = O(Yt, He, nt, Re, bt, Pe, gt, Bt, Ae, Xe, lt, Wt, ut);
          return c(m, {
            id: g ?? a,
            children: c(en, {
              animate: j,
              initial: !1,
              children: c(Qt, {
                value: Zt,
                children: s(p.div, {
                  ...C,
                  ...D,
                  className: O(ae, `framer-yefld2`, h, T),
                  "data-border": !0,
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `ljgOLl4FU`,
                  onTap: F,
                  ref: i,
                  style: {
                    "--border-bottom-width":
                      (S?.borderBottomWidth ?? S?.borderWidth) + `px`,
                    "--border-color": S?.borderColor,
                    "--border-left-width":
                      (S?.borderLeftWidth ?? S?.borderWidth) + `px`,
                    "--border-right-width":
                      (S?.borderRightWidth ?? S?.borderWidth) + `px`,
                    "--border-style": S?.borderStyle,
                    "--border-top-width":
                      (S?.borderTopWidth ?? S?.borderWidth) + `px`,
                    ...u,
                  },
                  ...Kt(
                    { OaVfJAbTB: { "data-framer-name": `Closed`, onTap: ie } },
                    w,
                    ee,
                  ),
                  children: [
                    s(p.div, {
                      className: `framer-za32l8`,
                      layoutDependency: M,
                      layoutId: `gZmW3JifH`,
                      children: [
                        c(y, {
                          __fromCanvasComponent: !0,
                          children: c(t, {
                            children: c(p.h6, {
                              className: `framer-styles-preset-b70r5p`,
                              "data-styles-preset": `Q_3jdt9X6`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                              },
                              children: `New`,
                            }),
                          }),
                          className: `framer-1bmfzjm`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `uXPHt718D`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        c(W, {
                          animated: !0,
                          className: `framer-18st7q3`,
                          layoutDependency: M,
                          layoutId: `Wsc8WxYFF`,
                          style: {
                            "--1ww558a": 2,
                            "--4rxgx6": `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(213, 224, 232, 0.25))`,
                            rotate: 0,
                          },
                          variants: { OaVfJAbTB: { rotate: -90 } },
                        }),
                      ],
                    }),
                    c(p.div, {
                      className: `framer-t9bn2t`,
                      layoutDependency: M,
                      layoutId: `R4ZX_pQVi`,
                      children: c(oe, {
                        presets: {
                          "module:NEd4VmDdsxM3StIUbddO/pRRgk0dcN3gDaE0WpAE7/YouTube.js:Youtube":
                            z.a0nYGZm23,
                          "module:pVk4QsoHxASnVtUBp6jr/ttReBBOK4JjO79S16uu9/CodeBlock.js:default":
                            z.MoKvqzGZv,
                        },
                        children: c(y, {
                          __fromCanvasComponent: !0,
                          children: x,
                          className: `framer-1mnts8b`,
                          fonts: [`Inter`],
                          layoutDependency: M,
                          layoutId: `P5YV6lpBu`,
                          style: { opacity: 1 },
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-v2iiak`,
                            blockquote: `framer-styles-preset-ndxpvm`,
                            code: `framer-styles-preset-1h7sinm`,
                            h1: `framer-styles-preset-7hjh4k`,
                            h2: `framer-styles-preset-fahce0`,
                            h3: `framer-styles-preset-u3ga62`,
                            h4: `framer-styles-preset-14zqc8e`,
                            h5: `framer-styles-preset-qfhoqo`,
                            h6: `framer-styles-preset-b70r5p`,
                            img: `framer-styles-preset-5o05jg`,
                            p: `framer-styles-preset-hnm2wg`,
                            table: `framer-styles-preset-4szdrk`,
                          },
                          variants: { OaVfJAbTB: { opacity: 0 } },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `.framer-lSapB.framer-zaim0z, .framer-lSapB .framer-zaim0z { display: block; }`,
          `.framer-lSapB.framer-yefld2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 12px 0px; position: relative; width: 615px; }`,
          `.framer-lSapB .framer-za32l8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-lSapB .framer-1bmfzjm, .framer-lSapB .framer-1mnts8b { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-lSapB .framer-18st7q3 { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-lSapB .framer-t9bn2t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-lSapB.framer-v-5mk7gy.framer-yefld2 { gap: 6px; }`,
          `.framer-lSapB.framer-v-5mk7gy .framer-t9bn2t { height: 2px; }`,
          ...Be,
          ...$e,
          ...Ie,
          ...vt,
          ...Me,
          ...mt,
          ...zt,
          ...Oe,
          ...Ke,
          ...at,
          ...Ut,
          ...it,
          `.framer-lSapB[data-border="true"]::after, .framer-lSapB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-lSapB`,
      )),
      (G.displayName = `Changelog Dropdown`),
      (G.defaultProps = { height: 92, width: 615 }),
      I(G, {
        variant: {
          options: [`ljgOLl4FU`, `OaVfJAbTB`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: R.Enum,
        },
        zxo83vP6Y: {
          defaultValue: `New`,
          displayTextArea: !1,
          title: `Title`,
          type: R.String,
        },
        onzxo83vP6YChange: { changes: `zxo83vP6Y`, type: R.ChangeHandler },
        EC6qr5fYP: {
          defaultValue: `<p>Content</p>`,
          title: `Content`,
          type: R.RichText,
        },
        NsL6p_nKE: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: R.Border,
        },
      }),
      _(
        G,
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
          ...qt,
          ...j(Ve),
          ...j(Qe),
          ...j(Le),
          ...j(yt),
          ...j(Ne),
          ...j(ht),
          ...j(Rt),
          ...j(ke),
          ...j(Je),
          ...j(rt),
          ...j(Ht),
          ...j(ot),
          ...(B?.MoKvqzGZv ? A(B?.MoKvqzGZv) : []),
          ...(B?.a0nYGZm23 ? A(B?.a0nYGZm23) : []),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  }),
  an,
  on,
  sn,
  cn,
  ln,
  un,
  K,
  q,
  dn,
  fn,
  pn,
  mn,
  J,
  hn = e(() => {
    (u(),
      M(),
      g(),
      r(),
      jt(),
      rn(),
      (an = C(H)),
      (on = C(G)),
      (sn = `framer-YPkof`),
      (cn = { iMSDHU511: `framer-v-8bmvyz` }),
      (ln = { bounce: 0, delay: 0, duration: 0.6, type: `spring` }),
      (un = (e, t) => `translateX(-50%) ${t}`),
      (K = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (dn = ({ value: e, children: t }) => {
        let r = o(h),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: t });
      }),
      (fn = p.create(t)),
      (pn = ({
        fixed: e,
        height: n,
        id: r,
        improved: i,
        new1: a,
        width: o,
        ...s
      }) => ({
        ...s,
        nBWPxzLoO:
          e ??
          s.nBWPxzLoO ??
          c(t, { children: c(p.p, { children: `Content` }) }),
        TVYQB95sd:
          i ??
          s.TVYQB95sd ??
          c(t, { children: c(p.p, { children: `Content` }) }),
        wprxleW5i:
          a ??
          s.wprxleW5i ??
          c(t, { children: c(p.p, { children: `Content` }) }),
      })),
      (mn = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (J = L(
        l(function (e, t) {
          let n = f(null),
            r = t ?? n,
            i = d(),
            { activeLocale: a, setLocale: o } = ne(),
            l = re(),
            {
              style: u,
              className: h,
              layoutId: g,
              variant: _,
              wprxleW5i: y,
              TVYQB95sd: b,
              nBWPxzLoO: x,
              ...S
            } = pn(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: ee,
              isLoading: te,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = v({
              defaultVariant: `iMSDHU511`,
              ref: r,
              variant: _,
              variantClassNames: cn,
            }),
            M = mn(e, j),
            N = O(sn),
            F = K(y),
            ie = K(b),
            ae = K(x);
          return c(m, {
            id: g ?? i,
            children: c(fn, {
              animate: j,
              initial: !1,
              children: c(dn, {
                value: ln,
                children: s(p.div, {
                  ...S,
                  ...E,
                  className: O(N, `framer-8bmvyz`, h, w),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: M,
                  layoutId: `iMSDHU511`,
                  ref: r,
                  style: { ...u },
                  children: [
                    c(P, {
                      children: c(D, {
                        className: `framer-ofxsj5-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: M,
                        layoutId: `dw6_8MkNY-container`,
                        nodeId: `dw6_8MkNY`,
                        rendersWithMotion: !0,
                        scopeId: `kq3ugO4aB`,
                        transformTemplate: un,
                        children: c(H, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `dw6_8MkNY`,
                          layoutId: `dw6_8MkNY`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    F !== !1 &&
                      c(P, {
                        height: 92,
                        width: l?.width || `100vw`,
                        y:
                          (l?.y || 0) +
                          0 +
                          (((l?.height || 207) - 0 - -24) / 2 + 0 + 0),
                        children: c(D, {
                          className: `framer-1cdvct7-container`,
                          layoutDependency: M,
                          layoutId: `x1QThQlBH-container`,
                          nodeId: `x1QThQlBH`,
                          rendersWithMotion: !0,
                          scopeId: `kq3ugO4aB`,
                          children: c(G, {
                            EC6qr5fYP: y,
                            height: `100%`,
                            id: `x1QThQlBH`,
                            layoutId: `x1QThQlBH`,
                            NsL6p_nKE: {
                              borderBottomWidth: 1,
                              borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            style: { width: `100%` },
                            variant: q(`OaVfJAbTB`),
                            width: `100%`,
                            zxo83vP6Y: `New`,
                          }),
                        }),
                      }),
                    ie !== !1 &&
                      c(P, {
                        height: 92,
                        width: l?.width || `100vw`,
                        y:
                          (l?.y || 0) +
                          0 +
                          (((l?.height || 207) - 0 - -24) / 2 + 0 + 0),
                        children: c(D, {
                          className: `framer-1172wup-container`,
                          layoutDependency: M,
                          layoutId: `yHkM7SEsv-container`,
                          nodeId: `yHkM7SEsv`,
                          rendersWithMotion: !0,
                          scopeId: `kq3ugO4aB`,
                          children: c(G, {
                            EC6qr5fYP: b,
                            height: `100%`,
                            id: `yHkM7SEsv`,
                            layoutId: `yHkM7SEsv`,
                            NsL6p_nKE: {
                              borderBottomWidth: 1,
                              borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            style: { width: `100%` },
                            variant: q(`OaVfJAbTB`),
                            width: `100%`,
                            zxo83vP6Y: `Improved`,
                          }),
                        }),
                      }),
                    ae !== !1 &&
                      c(P, {
                        height: 92,
                        width: l?.width || `100vw`,
                        y:
                          (l?.y || 0) +
                          0 +
                          (((l?.height || 207) - 0 - -24) / 2 + 0 + 0),
                        children: c(D, {
                          className: `framer-cpwhyl-container`,
                          layoutDependency: M,
                          layoutId: `ECacW1s7D-container`,
                          nodeId: `ECacW1s7D`,
                          rendersWithMotion: !0,
                          scopeId: `kq3ugO4aB`,
                          children: c(G, {
                            EC6qr5fYP: x,
                            height: `100%`,
                            id: `ECacW1s7D`,
                            layoutId: `ECacW1s7D`,
                            NsL6p_nKE: {
                              borderBottomWidth: 1,
                              borderColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            style: { width: `100%` },
                            variant: q(`OaVfJAbTB`),
                            width: `100%`,
                            zxo83vP6Y: `Fixed`,
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
          `.framer-YPkof.framer-vureq8, .framer-YPkof .framer-vureq8 { display: block; }`,
          `.framer-YPkof.framer-8bmvyz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-YPkof .framer-ofxsj5-container { -webkit-user-select: none; flex: none; height: auto; left: 50%; pointer-events: none; position: absolute; top: 0px; user-select: none; width: auto; z-index: 1; }`,
          `.framer-YPkof .framer-1cdvct7-container, .framer-YPkof .framer-1172wup-container, .framer-YPkof .framer-cpwhyl-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-YPkof`,
      )),
      (J.displayName = `Changelog Stack`),
      (J.defaultProps = { height: 207, width: 600 }),
      I(J, {
        wprxleW5i: {
          defaultValue: `<p>Content</p>`,
          title: `New`,
          type: R.RichText,
        },
        TVYQB95sd: {
          defaultValue: `<p>Content</p>`,
          title: `Improved`,
          type: R.RichText,
        },
        nBWPxzLoO: {
          defaultValue: `<p>Content</p>`,
          title: `Fixed`,
          type: R.RichText,
        },
      }),
      _(J, [{ explicitInter: !0, fonts: [] }, ...an, ...on], {
        supportsExplicitInterCodegen: !0,
      }),
      (J.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([w(G, {}, t)])),
      }));
  }),
  gn,
  _n,
  Y,
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
  X,
  Z,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Q,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  $,
  Wn;
e(() => {
  (u(),
    M(),
    g(),
    r(),
    be(),
    hn(),
    et(),
    st(),
    Ze(),
    De(),
    tt(),
    St(),
    Ct(),
    je(),
    pt(),
    Fe(),
    Ee(),
    Ce(),
    ze(),
    We(),
    _t(),
    Ge(),
    At(),
    (gn = C(V)),
    (_n = E(le)),
    (Y = E(y)),
    (vn = T(p.div)),
    (yn = E(p.div)),
    (bn = E(ue)),
    (xn = C(J)),
    (Sn = {
      o0oFmVgLU: `(min-width: 810px) and (max-width: 1279.98px)`,
      Q0C9hLf5z: `(max-width: 809.98px)`,
      WAt5mahR5: `(min-width: 1280px)`,
    }),
    (Cn = () => typeof document < `u`),
    (wn = []),
    (Tn = `framer-9NelT`),
    (En = {
      o0oFmVgLU: `framer-v-1q9e2sq`,
      Q0C9hLf5z: `framer-v-avpwm1`,
      WAt5mahR5: `framer-v-1izh47w`,
    }),
    (Dn = (e, t, n) => (e && t ? `position` : n)),
    (X = {
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
    (Z = { bounce: 0, delay: 0, duration: 1, type: `spring` }),
    (On = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (kn = { bounce: 0, delay: 0.1, duration: 1, type: `spring` }),
    (An = {
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
    (jn = {
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
    (Mn = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
    (Nn = {
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
    (Pn = (e, t, n) => {
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
    (Fn = { dateStyle: `medium`, timeZone: `UTC` }),
    (In = (e, t) => Pn(e, Fn, t)),
    (Q = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Ln = { bounce: 0, delay: 0.2, duration: 1, type: `spring` }),
    (Rn = { bounce: 0, delay: 0.3, duration: 1, type: `spring` }),
    (zn = () => ({
      from: { alias: `qGCBU6pPo`, data: dt, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `qGCBU6pPo`, name: `r6mde3mWY`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `Cmke7DFHr`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `iZ73V7_Tv`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `QVS2Ef1U8`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `W8hkqWWkT`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `ZRAiBA2LZ`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `qsHFic6_y`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `LGb7V3_yI`, type: `Identifier` },
        { collection: `qGCBU6pPo`, name: `id`, type: `Identifier` },
      ],
    })),
    (Bn = ({ query: e, pageSize: t, children: n }) => n(pe(e))),
    (Vn = { Desktop: `WAt5mahR5`, Phone: `Q0C9hLf5z`, Tablet: `o0oFmVgLU` }),
    (Hn = ({ value: e }) =>
      N()
        ? null
        : c(`style`, {
            dangerouslySetInnerHTML: { __html: e },
            "data-framer-html-style": ``,
          })),
    (Un = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Vn[r.variant] ?? r.variant ?? `WAt5mahR5`,
    })),
    ($ = L(
      l(function (e, r) {
        let i = f(null),
          l = r ?? i,
          u = d(),
          { activeLocale: g, setLocale: _ } = ne(),
          v = re(),
          { style: y, className: b, layoutId: x, variant: C, ...w } = Un(e);
        he(n(() => kt({}, g), [g]));
        let [T, E] = ie(C, Sn, !1),
          D = O(Tn, nt, Te, Re, bt, Pe, gt, He, we, Ae, Xe, Ot, Ue, xt),
          A = o(F)?.isLayoutTemplate,
          j = !!o(h)?.transition?.layout,
          M = Dn(A, j),
          N = k(`YqfxqiNyH`),
          I = f(null),
          L = k(`VZx6LPrax`),
          ce = ee(),
          le = k(`V9IvRZrVz`),
          ue = f(null),
          R = () => !Cn() || T !== `Q0C9hLf5z`,
          de = ge();
        return (
          ae({}),
          c(F.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Vn,
              primaryVariantId: `WAt5mahR5`,
              variantClassNames: En,
            },
            children: s(m, {
              id: x ?? u,
              children: [
                c(Hn, {
                  value: `html body { background: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(0, 9, 18)); }`,
                }),
                s(p.div, {
                  ...w,
                  className: O(D, `framer-1izh47w`, b),
                  ref: l,
                  style: { ...y },
                  children: [
                    c(p.section, {
                      className: `framer-5pkysk`,
                      "data-border": !0,
                      "data-framer-name": `Hero`,
                      id: N,
                      layout: M,
                      ref: I,
                      children: s(`div`, {
                        className: `framer-1vqed1a`,
                        "data-framer-name": `content`,
                        children: [
                          s(`div`, {
                            className: `framer-zix1x`,
                            id: L,
                            ref: ce(L),
                            children: [
                              c(te, {
                                breakpoint: T,
                                overrides: {
                                  o0oFmVgLU: {
                                    y:
                                      (v?.y || 0) +
                                      160 +
                                      0 +
                                      0 +
                                      120 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  Q0C9hLf5z: {
                                    y:
                                      (v?.y || 0) +
                                      160 +
                                      0 +
                                      0 +
                                      120 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                children: c(P, {
                                  height: 30,
                                  y:
                                    (v?.y || 0) + 160 + 0 + 0 + 180 + 0 + 0 + 0,
                                  children: c(_n, {
                                    __framer__animate: { transition: Z },
                                    __framer__animateOnce: !0,
                                    __framer__enter: X,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-17dvcn0-container`,
                                    nodeId: `bB6yr0KVI`,
                                    rendersWithMotion: !0,
                                    scopeId: `bXKgIgpkp`,
                                    children: c(V, {
                                      bwtRC2zWt: `Changelog`,
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
                                      id: `bB6yr0KVI`,
                                      layoutId: `bB6yr0KVI`,
                                      OgEx_2E7P: !1,
                                      pdea6CzDr: ye,
                                      Rtia32FHG: !0,
                                      variant: On(`qfOTriuLV`),
                                      VvHeeXiqh: !1,
                                      width: `100%`,
                                      ZGOQT_PfL: `4px 16px 4px 16px`,
                                    }),
                                  }),
                                }),
                              }),
                              c(Y, {
                                __framer__animate: { transition: kn },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: c(t, {
                                  children: c(`h1`, {
                                    className: `framer-styles-preset-7hjh4k`,
                                    "data-styles-preset": `bM7WzBkv5`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                    },
                                    children: `Fixes and updates`,
                                  }),
                                }),
                                className: `framer-rg99o7`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(vn, {
                            animate: An,
                            className: `framer-1vod2ly`,
                            "data-framer-appear-id": `1vod2ly`,
                            initial: jn,
                            optimized: !0,
                          }),
                        ],
                      }),
                    }),
                    c(p.section, {
                      className: `framer-2500w9`,
                      "data-border": !0,
                      "data-framer-name": `Changelog`,
                      id: le,
                      layout: M,
                      ref: ue,
                      children: c(`div`, {
                        className: `framer-1ezhjew`,
                        "data-framer-name": `content`,
                        children: c(`div`, {
                          className: `framer-1xgr0ju`,
                          children: c(se, {
                            children: c(Bn, {
                              query: zn(),
                              children: (e, n, r) =>
                                s(a, {
                                  children: [
                                    R() &&
                                      c(yn, {
                                        __framer__animate: { transition: Z },
                                        __framer__animateOnce: !0,
                                        __framer__enter: X,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        className: `framer-zb2nfs hidden-avpwm1`,
                                        children: c(`div`, {
                                          className: `framer-1n3lhrl`,
                                        }),
                                      }),
                                    e?.map(
                                      (
                                        {
                                          Cmke7DFHr: e,
                                          id: n,
                                          iZ73V7_Tv: r,
                                          LGb7V3_yI: i,
                                          qsHFic6_y: a,
                                          QVS2Ef1U8: o,
                                          r6mde3mWY: l,
                                          W8hkqWWkT: u,
                                          ZRAiBA2LZ: d,
                                        },
                                        f,
                                      ) => {
                                        ((e ??= ``),
                                          (o ??= ``),
                                          (u ??= ``),
                                          (d ??= ``),
                                          (a ??= ``),
                                          (i ??= ``));
                                        let p = In(l, de);
                                        return c(
                                          m,
                                          {
                                            id: `qGCBU6pPo-${n}`,
                                            children: c(me.Provider, {
                                              value: { LGb7V3_yI: i },
                                              children: c(`div`, {
                                                className: `framer-12qrpcj`,
                                                children: s(`div`, {
                                                  className: `framer-87wt2y`,
                                                  children: [
                                                    s(`div`, {
                                                      className: `framer-1n7edxt`,
                                                      children: [
                                                        s(`div`, {
                                                          className: `framer-1yw7x75`,
                                                          children: [
                                                            c(`div`, {
                                                              className: `framer-1s9g991`,
                                                            }),
                                                            c(yn, {
                                                              __framer__loop:
                                                                Nn,
                                                              __framer__loopEffectEnabled:
                                                                !0,
                                                              __framer__loopRepeatDelay: 0,
                                                              __framer__loopRepeatType: `mirror`,
                                                              __framer__loopTransition:
                                                                Mn,
                                                              __perspectiveFX:
                                                                !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-1i7asku`,
                                                            }),
                                                          ],
                                                        }),
                                                        c(Y, {
                                                          __framer__animate: {
                                                            transition: Z,
                                                          },
                                                          __framer__animateOnce:
                                                            !0,
                                                          __framer__enter: Nn,
                                                          __framer__styleAppearEffectEnabled:
                                                            !0,
                                                          __framer__threshold: 0.5,
                                                          __fromCanvasComponent:
                                                            !0,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          children: c(t, {
                                                            children: c(`p`, {
                                                              className: `framer-styles-preset-1fhxhj6`,
                                                              "data-styles-preset": `O0790qsZT`,
                                                              dir: `auto`,
                                                              style: {
                                                                "--framer-text-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                                                              },
                                                              children: `Mar 23, 2026`,
                                                            }),
                                                          }),
                                                          className: `framer-1jexgep`,
                                                          "data-framer-name": `Title`,
                                                          fonts: [`Inter`],
                                                          text: c(`time`, {
                                                            dateTime: l,
                                                            children: p,
                                                          }),
                                                          verticalAlignment: `top`,
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      ],
                                                    }),
                                                    s(`div`, {
                                                      className: `framer-ndyu3r`,
                                                      children: [
                                                        s(`div`, {
                                                          className: `framer-1sdj58n`,
                                                          children: [
                                                            s(`div`, {
                                                              className: `framer-lab3s1`,
                                                              children: [
                                                                c(Y, {
                                                                  __framer__animate:
                                                                    {
                                                                      transition:
                                                                        kn,
                                                                    },
                                                                  __framer__animateOnce:
                                                                    !0,
                                                                  __framer__enter:
                                                                    X,
                                                                  __framer__styleAppearEffectEnabled:
                                                                    !0,
                                                                  __framer__threshold: 0,
                                                                  __fromCanvasComponent:
                                                                    !0,
                                                                  __perspectiveFX:
                                                                    !1,
                                                                  __targetOpacity: 1,
                                                                  children: c(
                                                                    t,
                                                                    {
                                                                      children:
                                                                        c(
                                                                          `h2`,
                                                                          {
                                                                            className: `framer-styles-preset-fahce0`,
                                                                            "data-styles-preset": `nZtZfLTSW`,
                                                                            dir: `auto`,
                                                                            children: `Saved answers and collections`,
                                                                          },
                                                                        ),
                                                                    },
                                                                  ),
                                                                  className: `framer-3tdklu`,
                                                                  "data-framer-name": `Title`,
                                                                  fonts: [
                                                                    `Inter`,
                                                                  ],
                                                                  text: e,
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout:
                                                                    !0,
                                                                }),
                                                                c(te, {
                                                                  breakpoint: T,
                                                                  overrides: {
                                                                    o0oFmVgLU: {
                                                                      background:
                                                                        {
                                                                          alt: `Empty state dashboard with quick-action prompts like "Answer a question" and "Write a draft email," conversation sidebar, dark theme with sunset background.`,
                                                                          fit: `fill`,
                                                                          loading:
                                                                            S(
                                                                              (v?.y ||
                                                                                0) +
                                                                                160 +
                                                                                383.8 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                2532 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                78,
                                                                            ),
                                                                          pixelHeight: 890,
                                                                          pixelWidth: 1594,
                                                                          sizes: `max((max(min(min(${v?.width || `100vw`} - 40px, 1600px) - 48px, 720px), 1px) - 24px) / 1.5, 1px)`,
                                                                          ...Q(
                                                                            r,
                                                                          ),
                                                                        },
                                                                    },
                                                                    Q0C9hLf5z: {
                                                                      background:
                                                                        {
                                                                          alt: `Empty state dashboard with quick-action prompts like "Answer a question" and "Write a draft email," conversation sidebar, dark theme with sunset background.`,
                                                                          fit: `fill`,
                                                                          loading:
                                                                            S(
                                                                              (v?.y ||
                                                                                0) +
                                                                                160 +
                                                                                359.8 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                1866 +
                                                                                0 +
                                                                                0 +
                                                                                29 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                78,
                                                                            ),
                                                                          pixelHeight: 890,
                                                                          pixelWidth: 1594,
                                                                          sizes: `max(min(min(${v?.width || `100vw`} - 40px, 1600px) - 48px, 720px), 1px)`,
                                                                          ...Q(
                                                                            r,
                                                                          ),
                                                                        },
                                                                    },
                                                                  },
                                                                  children: c(
                                                                    bn,
                                                                    {
                                                                      __framer__animate:
                                                                        {
                                                                          transition:
                                                                            Ln,
                                                                        },
                                                                      __framer__animateOnce:
                                                                        !0,
                                                                      __framer__enter:
                                                                        X,
                                                                      __framer__styleAppearEffectEnabled:
                                                                        !0,
                                                                      __framer__threshold: 0,
                                                                      __perspectiveFX:
                                                                        !1,
                                                                      __targetOpacity: 1,
                                                                      background:
                                                                        {
                                                                          alt: `Empty state dashboard with quick-action prompts like "Answer a question" and "Write a draft email," conversation sidebar, dark theme with sunset background.`,
                                                                          fit: `fill`,
                                                                          loading:
                                                                            S(
                                                                              (v?.y ||
                                                                                0) +
                                                                                160 +
                                                                                475.8 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                2934 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                0 +
                                                                                78,
                                                                            ),
                                                                          pixelHeight: 890,
                                                                          pixelWidth: 1594,
                                                                          sizes: `max((max(min(min(${v?.width || `100vw`} - 40px, 1600px) - 48px, 1080px), 1px) - 24px) / 1.5, 1px)`,
                                                                          ...Q(
                                                                            r,
                                                                          ),
                                                                        },
                                                                      className: `framer-1p78gjq`,
                                                                      fitImageDimension: `height`,
                                                                    },
                                                                  ),
                                                                }),
                                                              ],
                                                            }),
                                                            c(oe, {
                                                              presets: {
                                                                "module:NEd4VmDdsxM3StIUbddO/pRRgk0dcN3gDaE0WpAE7/YouTube.js:Youtube":
                                                                  z.a0nYGZm23,
                                                                "module:pVk4QsoHxASnVtUBp6jr/ttReBBOK4JjO79S16uu9/CodeBlock.js:default":
                                                                  z.MoKvqzGZv,
                                                              },
                                                              children: c(Y, {
                                                                __framer__animate:
                                                                  {
                                                                    transition:
                                                                      Rn,
                                                                  },
                                                                __framer__animateOnce:
                                                                  !0,
                                                                __framer__enter:
                                                                  X,
                                                                __framer__styleAppearEffectEnabled:
                                                                  !0,
                                                                __framer__threshold: 0,
                                                                __fromCanvasComponent:
                                                                  !0,
                                                                __perspectiveFX:
                                                                  !1,
                                                                __targetOpacity: 1,
                                                                children: o,
                                                                className: `framer-1sap385`,
                                                                "data-framer-name": `Title`,
                                                                fonts: [
                                                                  `Inter`,
                                                                ],
                                                                stylesPresetsClassNames:
                                                                  {
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
                                                                withExternalLayout:
                                                                  !0,
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                        c(te, {
                                                          breakpoint: T,
                                                          overrides: {
                                                            o0oFmVgLU: {
                                                              width: `max((max(min(min(${v?.width || `100vw`} - 40px, 1600px) - 48px, 720px), 1px) - 24px) / 1.5, 1px)`,
                                                              y:
                                                                (v?.y || 0) +
                                                                160 +
                                                                383.8 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                2532 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                557,
                                                            },
                                                            Q0C9hLf5z: {
                                                              width: `max(min(min(${v?.width || `100vw`} - 40px, 1600px) - 48px, 720px), 1px)`,
                                                              y:
                                                                (v?.y || 0) +
                                                                160 +
                                                                359.8 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                1866 +
                                                                0 +
                                                                0 +
                                                                29 +
                                                                0 +
                                                                306,
                                                            },
                                                          },
                                                          children: c(P, {
                                                            height: 207,
                                                            width: `max((max(min(min(${v?.width || `100vw`} - 40px, 1600px) - 48px, 1080px), 1px) - 24px) / 1.5, 1px)`,
                                                            y:
                                                              (v?.y || 0) +
                                                              160 +
                                                              475.8 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              2934 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              691,
                                                            children: c(_n, {
                                                              __framer__animate:
                                                                {
                                                                  transition:
                                                                    Rn,
                                                                },
                                                              __framer__animateOnce:
                                                                !0,
                                                              __framer__enter:
                                                                X,
                                                              __framer__styleAppearEffectEnabled:
                                                                !0,
                                                              __framer__threshold: 0,
                                                              __perspectiveFX:
                                                                !1,
                                                              __targetOpacity: 1,
                                                              className: `framer-5xd9d8-container`,
                                                              nodeId: `k0vt5_Adj`,
                                                              rendersWithMotion:
                                                                !0,
                                                              scopeId: `bXKgIgpkp`,
                                                              children: c(J, {
                                                                height: `100%`,
                                                                id: `k0vt5_Adj`,
                                                                layoutId: `k0vt5_Adj`,
                                                                nBWPxzLoO: a,
                                                                style: {
                                                                  width: `100%`,
                                                                },
                                                                TVYQB95sd: d,
                                                                width: `100%`,
                                                                wprxleW5i: u,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          },
                                          n,
                                        );
                                      },
                                    ),
                                  ],
                                }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-9NelT.framer-55laq8, .framer-9NelT .framer-55laq8 { display: block; }`,
        `.framer-9NelT.framer-1izh47w { align-content: center; align-items: center; background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000912); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1280px; }`,
        `.framer-9NelT .framer-5pkysk { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-1vqed1a { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 180px 0px 80px 0px; position: relative; width: 1px; }`,
        `.framer-9NelT .framer-zix1x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-17dvcn0-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-9NelT .framer-rg99o7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 620px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-1vod2ly { background-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-9NelT .framer-2500w9 { --border-bottom-width: 0px; --border-color: var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1600px; overflow: visible; padding: 0px 24px 0px 24px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-1ezhjew { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1080px; overflow: visible; padding: 0px 0px 180px 0px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-1xgr0ju { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-zb2nfs { background-color: var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25)); bottom: 0px; flex: none; left: 16px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 14px; width: 1px; z-index: 1; }`,
        `.framer-9NelT .framer-1n3lhrl { background: linear-gradient(180deg, rgba(5, 4, 3, 0) 0%, var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(6, 5, 3)) 100%); bottom: 0px; flex: none; height: 280px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; z-index: 1; }`,
        `.framer-9NelT .framer-12qrpcj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-87wt2y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-9NelT .framer-1n7edxt { align-content: center; align-items: center; display: flex; flex: 2 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 0px 0px 0px; position: sticky; top: 84px; width: 1px; z-index: 1; }`,
        `.framer-9NelT .framer-1yw7x75 { border-bottom-left-radius: 565px; border-bottom-right-radius: 565px; border-top-left-radius: 565px; border-top-right-radius: 565px; flex: none; height: 21px; overflow: visible; position: relative; width: 32px; }`,
        `.framer-9NelT .framer-1s9g991 { background-color: var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, #000000); border-bottom-left-radius: 565px; border-bottom-right-radius: 565px; border-top-left-radius: 565px; border-top-right-radius: 565px; flex: none; height: 40px; left: calc(50.00000000000002% - 21px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(47.61904761904764% - 40px / 2); width: 21px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9NelT .framer-1i7asku { background-color: var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8)); border-bottom-left-radius: 565px; border-bottom-right-radius: 565px; border-top-left-radius: 565px; border-top-right-radius: 565px; flex: none; height: 7px; left: calc(50.00000000000002% - 7px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(47.61904761904764% - 7px / 2); width: 7px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9NelT .framer-1jexgep { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9NelT .framer-ndyu3r { align-content: flex-start; align-items: flex-start; display: flex; flex: 4 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 80px 0px; position: relative; width: 1px; }`,
        `.framer-9NelT .framer-1sdj58n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-lab3s1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9NelT .framer-3tdklu, .framer-9NelT .framer-1sap385 { flex: none; height: auto; max-width: 524px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9NelT .framer-1p78gjq { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9NelT .framer-5xd9d8-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...$e,
        ...ve,
        ...Ie,
        ...vt,
        ...Me,
        ...mt,
        ...Be,
        ...xe,
        ...Oe,
        ...Ke,
        ...wt,
        ...qe,
        ...Tt,
        `.framer-9NelT[data-border="true"]::after, .framer-9NelT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (max-width: 809.98px) { .framer-9NelT.framer-1izh47w { width: 390px; } .framer-9NelT .framer-1vqed1a { gap: 36px; max-width: 720px; padding: 120px 0px 36px 0px; } .framer-9NelT .framer-rg99o7 { max-width: 500px; } .framer-9NelT .framer-1ezhjew { max-width: 720px; } .framer-9NelT .framer-87wt2y { flex-direction: column; gap: 8px; } .framer-9NelT .framer-1n7edxt { flex: none; gap: 8px; padding: 0px; width: 100%; } .framer-9NelT .framer-1yw7x75 { width: 8px; } .framer-9NelT .framer-ndyu3r { flex: none; width: 100%; }}`,
        `@media (min-width: 810px) and (max-width: 1279.98px) { .framer-9NelT.framer-1izh47w { width: 810px; } .framer-9NelT .framer-1vqed1a { max-width: 720px; padding: 120px 0px 48px 0px; } .framer-9NelT .framer-1ezhjew { max-width: 720px; padding: 0px 0px 120px 0px; } .framer-9NelT .framer-1n7edxt { padding: 16px 0px 0px 0px; }}`,
      ],
      `framer-9NelT`,
    )),
    ($.displayName = `Changelog`),
    ($.defaultProps = { height: 6625, width: 1280 }),
    _(
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
        ...gn,
        ...xn,
        ...j(Qe),
        ...j(Se),
        ...j(Le),
        ...j(yt),
        ...j(Ne),
        ...j(ht),
        ...j(Ve),
        ...j(_e),
        ...j(ke),
        ...j(Je),
        ...j(Et),
        ...j(Ye),
        ...j(Dt),
        ...(B?.MoKvqzGZv ? A(B?.MoKvqzGZv) : []),
        ...(B?.a0nYGZm23 ? A(B?.a0nYGZm23) : []),
      ],
      { supportsExplicitInterCodegen: !0 },
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = ce.get(zn(), n);
        return Promise.allSettled([
          r.preload(),
          w(V, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => w(J, {}, t)));
          })(),
        ]);
      },
    }),
    (Wn = {
      exports: {
        queryParamNames: {
          type: `variable`,
          annotations: { framerContractVersion: `1` },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerbXKgIgpkp`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"YqfxqiNyH":{"pattern":":YqfxqiNyH","name":"hero"},"VZx6LPrax":{"pattern":":VZx6LPrax","name":"scroll"},"V9IvRZrVz":{"pattern":":V9IvRZrVz","name":"changelog"}}`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1280`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Q0C9hLf5z":{"layout":["fixed","auto"]},"o0oFmVgLU":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `6625`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Wn as __FramerMetadata__, $ as default, wn as queryParamNames };
//# sourceMappingURL=tRmdStqOcl0_nf50ubEbzp3S38Od8Iug74rnPkg6fkA.Dc3CIgIu.mjs.map
