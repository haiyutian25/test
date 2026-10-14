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
  At as g,
  D as ee,
  H as _,
  P as v,
  W as y,
  X as b,
  _ as x,
  bt as S,
  ft as C,
  h as w,
  j as T,
  jt as E,
  s as D,
  ut as O,
} from "./framer.CFgihyWK.mjs";
import {
  c as k,
  d as A,
  f as j,
  l as M,
  s as N,
  u as P,
} from "./shared-lib.t8-xaOwk.mjs";
var F,
  I,
  L,
  R,
  z = e(() => {
    (c(),
      b(),
      r(),
      (F = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 321 299" xmlns="http://www.w3.org/2000/svg"><path d="M 145.059 66.87 C 151.922 54.983 169.078 54.983 175.941 66.87 L 229.999 160.5 L 229.999 160.5 L 284.056 254.13 C 290.919 266.017 282.34 280.875 268.615 280.875 L 160.5 280.875 L 160.5 280.875 L 52.385 280.875 C 38.66 280.875 30.081 266.017 36.944 254.13 L 91.001 160.5 L 91.001 160.5 Z" fill="var(--13luugp, var(--token-030445e0-66b1-4cf5-86f5-06201f409f19, rgb(46, 46, 46)))" height="321px" id="tjssY2pLn" transform="translate(0 -11) rotate(90 160.5 160.5)" width="321px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (I = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(d.div, { ...a, layoutId: r, ref: t })
          : o(`div`, { ...a, ref: t });
      })),
      (L = ({
        fill: e,
        fillAlpha: t,
        height: n,
        id: r,
        light: i,
        shade: a,
        stroke: o,
        width: s,
        width1: c,
        widthThin: l,
        ...u
      }) => ({
        ...u,
        EFhby2hk_: c ?? u.EFhby2hk_ ?? 1,
        K7oj2kVaq:
          a ??
          u.K7oj2kVaq ??
          `var(--token-3890c723-b81b-4cd9-8ee4-78ba3e4a048f, rgb(28, 28, 28))`,
        LAKsbpsl8:
          i ??
          u.LAKsbpsl8 ??
          `var(--token-fa5efa90-02ea-4140-be93-9c156158d5ba, rgb(66, 66, 66))`,
        lX45NarS3: l ?? u.lX45NarS3 ?? 0.25,
        mqJaex1RZ: t ?? u.mqJaex1RZ ?? 1,
        x6V5wP5W2:
          o ??
          u.x6V5wP5W2 ??
          `var(--token-33ef294f-bf95-4931-af4a-e98d2138d080, rgb(233, 224, 209))`,
        xX0AAXJ94:
          e ??
          u.xX0AAXJ94 ??
          `var(--token-030445e0-66b1-4cf5-86f5-06201f409f19, rgb(46, 46, 46))`,
      })),
      (R = E(
        s(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            x6V5wP5W2: s,
            LAKsbpsl8: c,
            xX0AAXJ94: l,
            K7oj2kVaq: u,
            mqJaex1RZ: d,
            EFhby2hk_: f,
            lX45NarS3: p,
            ...m
          } = L(e);
          return o(I, {
            ...m,
            className: v(`framer-hfWLb`, r),
            layoutId: i,
            ref: t,
            style: { "--13luugp": l, ...n },
          });
        }),
        [
          `.framer-hfWLb { -webkit-mask: ${F}; aspect-ratio: 1.0735785953177257; background-color: var(--13luugp); mask: ${F}; width: 321px; }`,
        ],
        `framer-hfWLb`,
      )),
      (R.displayName = `Vector`),
      T(R, {
        x6V5wP5W2: {
          defaultValue: `var(--token-33ef294f-bf95-4931-af4a-e98d2138d080, rgb(233, 224, 209)) /* {"name":"Stroke"} */`,
          hidden: !0,
          title: `Stroke`,
          type: D.Color,
        },
        LAKsbpsl8: {
          defaultValue: `var(--token-fa5efa90-02ea-4140-be93-9c156158d5ba, rgb(66, 66, 66)) /* {"name":"Light"} */`,
          hidden: !0,
          title: `Light`,
          type: D.Color,
        },
        xX0AAXJ94: {
          defaultValue: `var(--token-030445e0-66b1-4cf5-86f5-06201f409f19, rgb(46, 46, 46)) /* {"name":"Fill"} */`,
          hidden: !1,
          title: `Fill`,
          type: D.Color,
        },
        K7oj2kVaq: {
          defaultValue: `var(--token-3890c723-b81b-4cd9-8ee4-78ba3e4a048f, rgb(28, 28, 28)) /* {"name":"Shade"} */`,
          hidden: !0,
          title: `Shade`,
          type: D.Color,
        },
        mqJaex1RZ: {
          defaultValue: 1,
          hidden: !0,
          max: 1,
          min: 0,
          step: 0.01,
          title: `Fill Alpha`,
          type: D.Number,
        },
        EFhby2hk_: {
          defaultValue: 1,
          hidden: !0,
          min: 0,
          title: `Width`,
          type: D.Number,
        },
        lX45NarS3: {
          defaultValue: 0.25,
          hidden: !0,
          min: 0,
          title: `Width Thin`,
          type: D.Number,
        },
      }));
  });
function B(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (c(),
      b(),
      m(),
      r(),
      j(),
      P(),
      z(),
      (V = _(R)),
      (H = {
        cNdVluHs7: { hover: !0 },
        dVzNLmjkO: { hover: !0 },
        hi6aRZbT7: { hover: !0 },
        LxHqL1VPe: { hover: !0 },
        UixaMrEmY: { hover: !0 },
        woqNk0Qel: { hover: !0 },
      }),
      (U = [
        `LxHqL1VPe`,
        `UixaMrEmY`,
        `woqNk0Qel`,
        `cNdVluHs7`,
        `hi6aRZbT7`,
        `dVzNLmjkO`,
      ]),
      (W = `framer-FkYLp`),
      (G = {
        cNdVluHs7: `framer-v-ycy7bl`,
        dVzNLmjkO: `framer-v-1rdmsgg`,
        hi6aRZbT7: `framer-v-1sbbds4`,
        LxHqL1VPe: `framer-v-efr9v5`,
        UixaMrEmY: `framer-v-h8s8pe`,
        woqNk0Qel: `framer-v-1vqtwt6`,
      }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (J = {
        "L Icon": `UixaMrEmY`,
        "L Play": `dVzNLmjkO`,
        "L Primary": `LxHqL1VPe`,
        "M Icon": `hi6aRZbT7`,
        "M Primary": `woqNk0Qel`,
        "M Secondary": `cNdVluHs7`,
      }),
      (Y = d.create(t)),
      (X = ({
        click: e,
        height: t,
        icon: n,
        id: r,
        link: i,
        newTab: a,
        smoothScroll: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        AMCchnpNw: e ?? l.AMCchnpNw,
        BANE331ww: o ?? l.BANE331ww,
        FWKDMXbN2: i ?? l.FWKDMXbN2,
        mYjHZJ6Gn: s ?? l.mYjHZJ6Gn ?? `View case studies`,
        p8v7WNQPZ: n ?? l.p8v7WNQPZ ?? A,
        variant: J[l.variant] ?? l.variant ?? `LxHqL1VPe`,
        YkfrxUoaP: a ?? l.YkfrxUoaP,
      })),
      (Z = (e, t) =>
        e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`)),
      (Q = E(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            s = l(),
            { activeLocale: c, setLocale: p } = S();
          C();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              mYjHZJ6Gn: b,
              FWKDMXbN2: T,
              YkfrxUoaP: E,
              BANE331ww: D,
              p8v7WNQPZ: k,
              AMCchnpNw: A,
              ...j
            } = X(e),
            {
              baseVariant: M,
              classNames: P,
              clearLoadingGesture: F,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: z,
              setGestureState: V,
              setVariant: J,
              variants: Q,
            } = g({
              cycleOrder: U,
              defaultVariant: `LxHqL1VPe`,
              enabledGestures: H,
              ref: i,
              variant: y,
              variantClassNames: G,
            }),
            $ = Z(e, Q),
            { activeVariantCallback: te, delay: ne } = O(M),
            re = te(async (...e) => {
              if ((V({ isPressed: !1 }), A && (await A(...e)) === !1))
                return !1;
            }),
            ie = v(W, N),
            ae = () =>
              !!(
                [`UixaMrEmY-hover`, `hi6aRZbT7-hover`].includes(L) ||
                [`UixaMrEmY`, `hi6aRZbT7`].includes(M)
              ),
            oe = () =>
              !(
                [
                  `UixaMrEmY-hover`,
                  `hi6aRZbT7-hover`,
                  `dVzNLmjkO-hover`,
                ].includes(L) ||
                [`UixaMrEmY`, `hi6aRZbT7`, `dVzNLmjkO`].includes(M)
              ),
            se = () => L === `dVzNLmjkO-hover` || M === `dVzNLmjkO`;
          return o(f, {
            id: _ ?? s,
            children: o(Y, {
              animate: Q,
              initial: !1,
              children: o(q, {
                value: K,
                children: o(x, {
                  href: T,
                  motionChild: !0,
                  nodeId: `LxHqL1VPe`,
                  openInNewTab: E,
                  scopeId: `LgNu28hAv`,
                  smoothScroll: D,
                  children: a(d.a, {
                    ...j,
                    ...I,
                    className: `${v(ie, `framer-efr9v5`, h, P)} framer-ces3t`,
                    "data-border": !0,
                    "data-framer-name": `L Primary`,
                    "data-highlight": !0,
                    layoutDependency: $,
                    layoutId: `LxHqL1VPe`,
                    onTap: re,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `none`,
                      backgroundColor: `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                      borderBottomLeftRadius: 768,
                      borderBottomRightRadius: 768,
                      borderTopLeftRadius: 768,
                      borderTopRightRadius: 768,
                      WebkitBackdropFilter: `none`,
                      ...m,
                    },
                    variants: {
                      "cNdVluHs7-hover": {
                        backgroundColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                      },
                      "dVzNLmjkO-hover": {
                        backgroundColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                      },
                      "hi6aRZbT7-hover": {
                        backgroundColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                      },
                      "LxHqL1VPe-hover": {
                        backdropFilter: `none`,
                        backgroundColor: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                        WebkitBackdropFilter: `none`,
                      },
                      "UixaMrEmY-hover": {
                        backdropFilter: `none`,
                        backgroundColor: `var(--token-e3ce13ec-ba16-45a8-a084-ab9af1d723e8, rgba(255, 255, 255, 0.25))`,
                        WebkitBackdropFilter: `none`,
                      },
                      "woqNk0Qel-hover": {
                        backdropFilter: `none`,
                        backgroundColor: `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                        WebkitBackdropFilter: `none`,
                      },
                      cNdVluHs7: {
                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        backdropFilter: `blur(5px)`,
                        backgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        WebkitBackdropFilter: `blur(5px)`,
                      },
                      dVzNLmjkO: {
                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        backdropFilter: `none`,
                        backgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        WebkitBackdropFilter: `none`,
                      },
                      hi6aRZbT7: {
                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        backdropFilter: `none`,
                        backgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        WebkitBackdropFilter: `none`,
                      },
                      UixaMrEmY: {
                        "--border-color": `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                        backgroundColor: `var(--token-aecd04de-bd30-4743-90e2-2b56d3d58e1b, rgba(255, 255, 255, 0.1))`,
                      },
                    },
                    ...B(
                      {
                        cNdVluHs7: { "data-framer-name": `M Secondary` },
                        dVzNLmjkO: { "data-framer-name": `L Play` },
                        hi6aRZbT7: { "data-framer-name": `M Icon` },
                        UixaMrEmY: { "data-framer-name": `L Icon` },
                        woqNk0Qel: { "data-framer-name": `M Primary` },
                      },
                      M,
                      L,
                    ),
                    children: [
                      ae() &&
                        o(w, {
                          animated: !0,
                          className: `framer-12ejusb`,
                          Component: k,
                          layoutDependency: $,
                          layoutId: `FH6FENxPC`,
                          style: {
                            "--1ww558a": 1,
                            "--4rxgx6": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                          },
                          variants: {
                            hi6aRZbT7: {
                              "--4rxgx6": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            },
                            UixaMrEmY: {
                              "--4rxgx6": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            },
                          },
                        }),
                      oe() &&
                        o(ee, {
                          __fromCanvasComponent: !0,
                          children: o(t, {
                            children: o(d.p, {
                              className: `framer-styles-preset-1fhxhj6`,
                              "data-styles-preset": `O0790qsZT`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(1, 16, 29)))`,
                              },
                              children: `View case studies`,
                            }),
                          }),
                          className: `framer-ynqlit`,
                          fonts: [`Inter`],
                          layoutDependency: $,
                          layoutId: `hauSRxW21`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-ef8ecd6d-5204-4f29-b3b7-2d4dc011513a, rgb(1, 16, 29))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          variants: {
                            cNdVluHs7: {
                              "--extracted-r6o4lv": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...B(
                            {
                              cNdVluHs7: {
                                children: o(t, {
                                  children: o(d.p, {
                                    className: `framer-styles-preset-1fhxhj6`,
                                    "data-styles-preset": `O0790qsZT`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240)))`,
                                    },
                                    children: `View case studies`,
                                  }),
                                }),
                              },
                            },
                            M,
                            L,
                          ),
                        }),
                      se() &&
                        o(d.div, {
                          className: `framer-k9e6il`,
                          "data-framer-name": `play icon`,
                          layoutDependency: $,
                          layoutId: `d9saUCwnq`,
                          children: o(R, {
                            animated: !0,
                            className: `framer-1pwr5a1`,
                            layoutDependency: $,
                            layoutId: `S9xC21bYy`,
                            style: {
                              "--121jcuf": 1,
                              "--13luugp": `var(--token-792af9ed-53d8-45b2-94fd-014e7edc8f44, rgba(255, 255, 255, 0.8))`,
                              "--1htvxt1": 0.25,
                              "--1pwspqr": `var(--token-3890c723-b81b-4cd9-8ee4-78ba3e4a048f, rgb(28, 28, 28))`,
                              "--1r53vy": `var(--token-fa5efa90-02ea-4140-be93-9c156158d5ba, rgb(66, 66, 66))`,
                              "--em6an1": `var(--token-33ef294f-bf95-4931-af4a-e98d2138d080, rgb(233, 224, 209))`,
                              "--himqj5": 1,
                            },
                            variants: {
                              "dVzNLmjkO-hover": {
                                "--13luugp": `var(--token-090acfc6-f7ee-4bf4-9b69-0b15cf2cb187, rgb(255, 243, 240))`,
                              },
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
          `.framer-FkYLp.framer-ces3t, .framer-FkYLp .framer-ces3t { display: block; }`,
          `.framer-FkYLp.framer-efr9v5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 36px 0px 36px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FkYLp .framer-12ejusb { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 20px; }`,
          `.framer-FkYLp .framer-ynqlit { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-FkYLp .framer-k9e6il { flex: none; height: 19px; overflow: visible; position: relative; width: 18px; }`,
          `.framer-FkYLp .framer-1pwr5a1 { flex: none; height: var(--framer-aspect-ratio-supported, 18px); left: 2px; position: absolute; top: 0px; width: 18px; }`,
          `.framer-FkYLp.framer-v-h8s8pe.framer-efr9v5, .framer-FkYLp.framer-v-1rdmsgg.framer-efr9v5 { padding: 0px; width: 48px; }`,
          `.framer-FkYLp.framer-v-1vqtwt6.framer-efr9v5, .framer-FkYLp.framer-v-ycy7bl.framer-efr9v5 { height: 36px; padding: 0px 24px 0px 24px; }`,
          `.framer-FkYLp.framer-v-1sbbds4.framer-efr9v5 { height: 36px; padding: 0px; width: 36px; }`,
          `.framer-FkYLp.framer-v-1sbbds4 .framer-12ejusb { height: var(--framer-aspect-ratio-supported, 20px); width: 16px; }`,
          `.framer-FkYLp.framer-v-1rdmsgg .framer-k9e6il { height: 18px; }`,
          ...k,
          `.framer-FkYLp[data-border="true"]::after, .framer-FkYLp [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-FkYLp`,
      )),
      (Q.displayName = `Button`),
      (Q.defaultProps = { height: 48, width: 206 }),
      T(Q, {
        variant: {
          options: [
            `LxHqL1VPe`,
            `UixaMrEmY`,
            `woqNk0Qel`,
            `cNdVluHs7`,
            `hi6aRZbT7`,
            `dVzNLmjkO`,
          ],
          optionTitles: [
            `L Primary`,
            `L Icon`,
            `M Primary`,
            `M Secondary`,
            `M Icon`,
            `L Play`,
          ],
          title: `Variant`,
          type: D.Enum,
        },
        mYjHZJ6Gn: {
          defaultValue: `View case studies`,
          displayTextArea: !1,
          title: `Title`,
          type: D.String,
        },
        onmYjHZJ6GnChange: { changes: `mYjHZJ6Gn`, type: D.ChangeHandler },
        FWKDMXbN2: { title: `Link`, type: D.Link },
        YkfrxUoaP: { defaultValue: !1, title: `New Tab`, type: D.Boolean },
        onYkfrxUoaPChange: { changes: `YkfrxUoaP`, type: D.ChangeHandler },
        BANE331ww: {
          defaultValue: !1,
          title: `Smooth Scroll`,
          type: D.Boolean,
        },
        onBANE331wwChange: { changes: `BANE331ww`, type: D.ChangeHandler },
        p8v7WNQPZ: {
          defaultValue: {
            identifier: `module:2WQzq084DzoFmwmk0fUI/sBT0012yPWvPR8ixbuvU/xWxFPmdWu.js:default`,
            moduleId: `2WQzq084DzoFmwmk0fUI`,
          },
          setModuleId: `E1vFg1A6wcWAGuFi9Hz1`,
          title: `Icon`,
          type: D.VectorSetItem,
        },
        AMCchnpNw: { title: `Click`, type: D.EventHandler },
      }),
      h(
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
          ...V,
          ...y(M),
        ],
        { supportsExplicitInterCodegen: !0 },
      ));
  });
export { $ as n, Q as t };
//# sourceMappingURL=LgNu28hAv.T-w2QUq1.mjs.map
