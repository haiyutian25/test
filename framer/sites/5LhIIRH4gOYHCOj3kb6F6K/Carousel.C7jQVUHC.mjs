import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  L as n,
  S as r,
  T as i,
  V as a,
  b as o,
  l as s,
  m as c,
  o as l,
  p as u,
  s as d,
  v as f,
  x as p,
  z as m,
} from "./react.CbTQkvGa.mjs";
import { M as h, S as g, Z as _, ot as v, t as y } from "./motion.DqePFWeo.mjs";
import {
  Dt as b,
  P as x,
  X as S,
  j as C,
  jt as w,
  s as T,
} from "./framer.CFgihyWK.mjs";
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N = e(() => {
    (d(),
      S(),
      i(),
      (E = `var(--framer-icon-mask)`),
      (D = u(function (e, t) {
        return l(`svg`, { ...e, ref: t, children: e.children });
      })),
      (O = h.create(D)),
      (k = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(O, { ...a, layoutId: r, ref: t, children: i })
          : l(`svg`, { ...a, ref: t, children: i });
      })),
      (A = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 18 7 L 0 7 M 0 7 L 7 0 M 0 7 L 7 14" fill="transparent" height="14px" id="GQQ_BEHVE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1ww558a, 2)" stroke="var(--4rxgx6, black)" transform="translate(3 5)" width="18px"/></svg>`),
      (j = ({ color: e, height: t, id: n, width: r, width1: i, ...a }) => ({
        ...a,
        CRY1Fpez4: e ?? a.CRY1Fpez4 ?? `rgb(0, 0, 0)`,
        vet7gqNu_: i ?? a.vet7gqNu_ ?? 2,
      })),
      (M = w(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              CRY1Fpez4: o,
              vet7gqNu_: s,
              ...c
            } = j(e),
            u = b(`3950368055`, A);
          return l(k, {
            ...c,
            className: x(`framer-0Vdhp`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1ww558a": s, "--4rxgx6": o, ...n },
            viewBox: `0 0 24 24`,
            children: l(`use`, { href: u }),
          });
        }),
        [
          `.framer-0Vdhp { -webkit-mask: ${E}; aspect-ratio: 1; display: block; mask: ${E}; width: 24px; }`,
        ],
        `framer-0Vdhp`,
      )),
      (M.displayName = `Arrow Left`),
      C(M, {
        CRY1Fpez4: {
          defaultValue: `rgb(0, 0, 0)`,
          hidden: !1,
          title: `Color`,
          type: T.Color,
        },
        vet7gqNu_: {
          defaultValue: 2,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 1,
          title: `Width`,
          type: T.Number,
        },
      }));
  }),
  P,
  F,
  I,
  L,
  R = e(() => {
    (d(),
      S(),
      i(),
      (P = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 169 40" xmlns="http://www.w3.org/2000/svg"><g d="M 10.015 2.5 L 10.015 40 L 0 40 L 0 2.5 Z M 15.023 2.5 L 36.304 2.5 C 43.218 2.5 48.823 8.096 48.823 15 C 48.823 21.904 43.218 27.5 36.304 27.5 L 25.037 27.5 L 25.037 40 L 15.023 40 Z M 25.037 17.5 L 36.304 17.5 C 37.687 17.5 38.808 16.381 38.808 15 C 38.808 13.619 37.687 12.5 36.304 12.5 L 25.037 12.5 Z M 86.378 2.5 L 86.378 21.875 C 86.378 26.362 90.021 30 94.515 30 C 99.009 30 102.652 26.362 102.652 21.875 L 102.652 2.5 L 112.667 2.5 L 112.667 21.875 C 112.667 31.885 104.54 40 94.515 40 C 84.49 40 76.363 31.885 76.363 21.875 L 76.363 2.5 Z M 52.578 20 C 52.578 10.335 60.425 2.5 70.104 2.5 L 72.608 2.5 L 72.608 12.5 L 70.104 12.5 C 65.956 12.5 62.593 15.858 62.593 20 L 62.593 21.25 C 62.593 31.605 54.186 40 43.815 40 L 42.563 40 L 42.563 30 L 43.815 30 C 48.655 30 52.578 26.082 52.578 21.25 Z M 169 3.75 C 169 5.821 167.319 7.5 165.244 7.5 C 163.17 7.5 161.489 5.821 161.489 3.75 C 161.489 1.679 163.17 0 165.244 0 C 167.319 0 169 1.679 169 3.75 Z M 123.42 40 L 128.199 20.018 L 131.752 32.039 C 133.87 39.209 144.041 39.209 146.16 32.039 L 149.712 20.018 L 154.491 40 L 164.787 40 L 157.273 8.58 C 155.486 1.107 144.941 0.831 142.763 8.199 L 138.956 21.083 L 135.148 8.199 C 132.971 0.831 122.425 1.107 120.638 8.579 L 113.124 40 Z" fill="transparent" height="40px" id="jiY0rfpez" width="168.99999841308593px"><path d="M 10.015 0 L 10.015 37.5 L 0 37.5 L 0 0 Z" fill="var(--o4jego, rgb(255, 255, 255))" height="37.5px" id="oCpYsEsI2" transform="translate(0 2.5)" width="10.0148px"/><path d="M 0 0 L 21.282 0 C 28.195 0 33.8 5.596 33.8 12.5 C 33.8 19.404 28.195 25 21.282 25 L 10.015 25 L 10.015 37.5 L 0 37.5 Z M 10.015 15 L 21.282 15 C 22.664 15 23.785 13.881 23.785 12.5 C 23.785 11.119 22.664 10 21.282 10 L 10.015 10 Z" fill="var(--o4jego, rgb(255, 255, 255))" height="37.5px" id="ZPgS8K6IA" transform="translate(15.023 2.5)" width="33.8px"/><path d="M 10.015 0 L 10.015 19.375 C 10.015 23.862 13.658 27.5 18.152 27.5 C 22.646 27.5 26.289 23.862 26.289 19.375 L 26.289 0 L 36.304 0 L 36.304 19.375 C 36.304 29.385 28.177 37.5 18.152 37.5 C 8.127 37.5 0 29.385 0 19.375 L 0 0 Z" fill="var(--o4jego, rgb(255, 255, 255))" height="37.5px" id="bi6k5LbQh" transform="translate(76.363 2.5)" width="36.303700000000006px"/><path d="M 10.015 17.5 C 10.015 7.835 17.861 0 27.541 0 L 30.044 0 L 30.044 10 L 27.541 10 C 23.392 10 20.03 13.358 20.03 17.5 L 20.03 18.75 C 20.03 29.105 11.623 37.5 1.252 37.5 L 0 37.5 L 0 27.5 L 1.252 27.5 C 6.092 27.5 10.015 23.582 10.015 18.75 Z" fill="var(--o4jego, rgb(255, 255, 255))" height="37.5px" id="qGY7gesiH" transform="translate(42.563 2.5)" width="30.044400000000003px"/><path d="M 7.511 3.75 C 7.511 5.821 5.83 7.5 3.755 7.5 C 1.681 7.5 0 5.821 0 3.75 C 0 1.679 1.681 0 3.755 0 C 5.83 0 7.511 1.679 7.511 3.75 Z" fill="var(--o4jego, rgb(255, 255, 255))" height="7.5px" id="Jw2HRvHEa" transform="translate(161.489 0)" width="7.510999999999996px"/><path d="M 10.296 37.179 L 15.075 17.197 L 18.628 29.218 C 20.746 36.388 30.917 36.388 33.036 29.218 L 36.588 17.197 L 41.367 37.179 L 51.663 37.179 L 44.149 5.758 C 42.362 -1.714 31.817 -1.991 29.639 5.378 L 25.832 18.262 L 22.024 5.378 C 19.847 -1.991 9.301 -1.714 7.514 5.758 L 0 37.179 Z" fill="var(--o4jego, rgb(255, 255, 255))" height="37.17858650918973px" id="X2IPpZkcb" transform="translate(113.124 2.821)" width="51.66300000000001px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (F = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? l(h.div, { ...a, layoutId: r, ref: t })
          : l(`div`, { ...a, ref: t });
      })),
      (I = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        z1don5LZx: e ?? i.z1don5LZx ?? `rgb(255, 255, 255)`,
      })),
      (L = w(
        u(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            z1don5LZx: o,
            ...s
          } = I(e);
          return l(F, {
            ...s,
            className: x(`framer-XsZas`, r),
            layoutId: i,
            ref: t,
            style: { "--o4jego": o, ...n },
          });
        }),
        [
          `.framer-XsZas { -webkit-mask: ${P}; aspect-ratio: 4.225; background-color: var(--o4jego); mask: ${P}; width: 169px; }`,
        ],
        `framer-XsZas`,
      )),
      (L.displayName = `Logo 4`),
      C(L, {
        z1don5LZx: {
          defaultValue: `rgb(255, 255, 255)`,
          hidden: !1,
          title: `Fill`,
          type: T.Color,
        },
      }));
  });
function z(e) {
  let {
      children: i = [],
      gap: u = 16,
      overflow: d = !0,
      prevButtonName: m = ``,
      nextButtonName: y = ``,
      duration: b = 0.6,
      bounce: x = 0,
      cardVariant: S = `Desktop`,
      fillWidth: C = !1,
      progressBackgroundColor: w = `rgba(0,0,0,0.1)`,
      progressBarColor: T = `#000000`,
      progressWidth: E = 200,
      progressOffset: D = 24,
      progressAlignment: O = `center`,
    } = e,
    k = p(null),
    A = p(null),
    [j, M] = f(0),
    [N, P] = f({ container: 0, track: 0 }),
    F = _(0),
    I = p(null),
    L = t.count(i),
    R = Math.max(0, N.track - N.container);
  (o(() => {
    let e = () => {
      k.current &&
        A.current &&
        P({ container: k.current.clientWidth, track: A.current.scrollWidth });
    };
    e();
    let t = setTimeout(e, 100);
    return (
      a.addEventListener(`resize`, e),
      () => {
        (a.removeEventListener(`resize`, e), clearTimeout(t));
      }
    );
  }, [i, C, u]),
    o(() => {
      if (!A.current) return;
      let e = Array.from(A.current.children);
      if (!e[j]) return;
      let t = Math.min(e[j].offsetLeft, R);
      I.current = g(F, -t, { type: `spring`, duration: b, bounce: x });
    }, [j, i, b, x, R]));
  let z = (e) => {
    let t = L - 1;
    M(Math.max(0, Math.min(e, t)));
  };
  o(() => {
    if (a === void 0) return;
    let e = () => z(j - 1),
      t = () => z(j + 1),
      n = m ? document.querySelector(`[data-framer-name="${m}"]`) : null,
      r = y ? document.querySelector(`[data-framer-name="${y}"]`) : null;
    return (
      n?.addEventListener(`click`, e),
      r?.addEventListener(`click`, t),
      () => {
        (n?.removeEventListener(`click`, e),
          r?.removeEventListener(`click`, t));
      }
    );
  }, [m, y, j]);
  let B = p(!1),
    V = p(0),
    H = p(0),
    U = p(0),
    W = (e) => {
      ((I.current &&= (I.current.stop(), null)),
        (B.current = !0),
        (V.current = e),
        (H.current = F.get()),
        (U.current = Date.now()));
    },
    G = (e) => {
      if (!B.current) return;
      let t = e - V.current;
      F.set(H.current + t);
    },
    K = () => {
      if (!B.current || !A.current) return;
      B.current = !1;
      let e = Array.from(A.current.children),
        t = F.get(),
        n = t - H.current,
        r = Date.now() - U.current;
      if (Math.abs(n) / Math.max(r, 1) > 0.3 && Math.abs(n) > 10) {
        let t = Math.max(0, Math.min(j + (n > 0 ? -1 : 1), L - 1)),
          r = Math.min(e[t].offsetLeft, R);
        ((I.current = g(F, -r, { type: `spring`, duration: b, bounce: x })),
          M(t));
        return;
      }
      let i = 0,
        a = 1 / 0;
      e.forEach((e, n) => {
        let r = Math.min(e.offsetLeft, R),
          o = Math.abs(-r - t);
        o < a && ((a = o), (i = n));
      });
      let o = Math.min(e[i].offsetLeft, R);
      ((I.current = g(F, -o, { type: `spring`, duration: b, bounce: x })),
        M(i));
    },
    q = L > 0 ? 100 / L : 100,
    J = v(F, (e) =>
      R === 0 ? `0%` : `${Math.min(1, Math.max(0, -e / R)) * (100 - q)}%`,
    ),
    Y = { left: `flex-start`, center: `center`, right: `flex-end` },
    X = w && T;
  return s(`div`, {
    ref: k,
    style: {
      width: `100%`,
      height: `100%`,
      overflow: d ? `visible` : `hidden`,
      position: `relative`,
    },
    children: [
      l(h.div, {
        ref: A,
        style: {
          display: `flex`,
          gap: u,
          height: `100%`,
          x: F,
          cursor: `grab`,
        },
        onMouseDown: (e) => W(e.clientX),
        onMouseMove: (e) => G(e.clientX),
        onMouseUp: K,
        onMouseLeave: K,
        onTouchStart: (e) => W(e.touches[0].clientX),
        onTouchMove: (e) => G(e.touches[0].clientX),
        onTouchEnd: K,
        children: t.map(i, (e, t) => {
          if (!c(e)) return e;
          let i = e,
            a = i.props?.children,
            o = a?.props?.children;
          if (!o || !c(o)) {
            let r = C
              ? n(i, {
                  ...i.props,
                  width: `100%`,
                  style: { ...i.props?.style, width: `100%` },
                })
              : e;
            return l(
              `div`,
              {
                style: { flexShrink: 0, ...(C && { width: `100%` }) },
                children: r,
              },
              t,
            );
          }
          let s = o,
            u = s.type?.propertyControls?.variant,
            d = s.props?.variant;
          if (S === `Mobile` && u) {
            let { options: e, optionTitles: t } = u,
              n = t?.indexOf(`Mobile`);
            n !== -1 && e?.[n] && (d = e[n]);
          }
          let f = r.createElement(s.type, {
              ...s.props,
              variant: d,
              ...(C && {
                width: `100%`,
                style: { ...s.props?.style, width: `100%` },
              }),
            }),
            p = r.cloneElement(a, {
              ...a.props,
              ...(C && { style: { ...a.props?.style, width: `100%` } }),
              children: f,
            }),
            m = r.cloneElement(i, {
              ...i.props,
              ...(C && {
                width: `100%`,
                style: { ...i.props?.style, width: `100%` },
              }),
              children: p,
            });
          return l(
            `div`,
            {
              style: { flexShrink: 0, ...(C && { width: `100%` }) },
              children: m,
            },
            t,
          );
        }),
      }),
      X &&
        l(`div`, {
          style: {
            position: `absolute`,
            top: `100%`,
            left: 0,
            right: 0,
            transform: `translateY(${D}px)`,
            display: `flex`,
            justifyContent: Y[O],
            alignItems: `center`,
          },
          children: l(`div`, {
            style: {
              position: `relative`,
              width: E,
              height: 1,
              borderRadius: 1,
              backgroundColor: w,
              overflow: `hidden`,
            },
            children: l(h.div, {
              style: {
                position: `absolute`,
                top: 0,
                left: J,
                width: `${q}%`,
                height: `100%`,
                borderRadius: 2,
                backgroundColor: T,
              },
            }),
          }),
        }),
    ],
  });
}
var B = e(() => {
  (m(),
    d(),
    i(),
    S(),
    y(),
    C(z, {
      children: {
        type: T.Array,
        title: `Cards`,
        control: { type: T.ComponentInstance },
      },
      gap: { type: T.Number, title: `Gap`, defaultValue: 16, min: 0, max: 100 },
      overflow: {
        type: T.Boolean,
        title: `Overflow`,
        defaultValue: !0,
        enabledTitle: `Visible`,
        disabledTitle: `Hidden`,
      },
      cardVariant: {
        type: T.Enum,
        title: `Card Variant`,
        options: [`Desktop`, `Mobile`],
        optionTitles: [`Desktop`, `Mobile`],
        defaultValue: `Desktop`,
        displaySegmentedControl: !0,
      },
      fillWidth: {
        type: T.Boolean,
        title: `Card Width`,
        defaultValue: !1,
        enabledTitle: `Fill`,
        disabledTitle: `Fixed`,
      },
      prevButtonName: {
        type: T.String,
        title: `Prev Button`,
        defaultValue: ``,
        placeholder: `prevBtn`,
      },
      nextButtonName: {
        type: T.String,
        title: `Next Button`,
        defaultValue: ``,
        placeholder: `nextBtn`,
      },
      duration: {
        type: T.Number,
        title: `Duration (s)`,
        defaultValue: 0.6,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      bounce: {
        type: T.Number,
        title: `Bounce`,
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
      },
      progressBackgroundColor: {
        type: T.Color,
        title: `Progress BG`,
        defaultValue: `rgba(0,0,0,0.1)`,
      },
      progressBarColor: {
        type: T.Color,
        title: `Progress Bar`,
        defaultValue: `#000000`,
      },
      progressWidth: {
        type: T.Number,
        title: `Progress Width`,
        defaultValue: 200,
        min: 50,
        max: 1e3,
        step: 10,
      },
      progressOffset: {
        type: T.Number,
        title: `Progress Offset`,
        defaultValue: 24,
        min: 0,
        max: 100,
      },
      progressAlignment: {
        type: T.Enum,
        title: `Progress Align`,
        options: [`left`, `center`, `right`],
        optionTitles: [`Left`, `Center`, `Right`],
        defaultValue: `center`,
        displaySegmentedControl: !0,
      },
    }));
});
export { M as a, R as i, B as n, N as o, L as r, z as t };
//# sourceMappingURL=Carousel.C7jQVUHC.mjs.map
