import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  T as t,
  b as n,
  l as r,
  o as i,
  s as a,
  v as o,
  x as s,
} from "./react.CbTQkvGa.mjs";
import { X as c, j as l, s as u } from "./framer.CFgihyWK.mjs";
function d(e) {
  let t = e.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
  if (t) return [+t[1], +t[2], +t[3], t[4] == null ? 1 : +t[4]];
  let n = e.replace(`#`, ``),
    r =
      n.length === 3
        ? n
            .split(``)
            .map((e) => e + e)
            .join(``)
        : n;
  return [
    parseInt(r.slice(0, 2), 16),
    parseInt(r.slice(2, 4), 16),
    parseInt(r.slice(4, 6), 16),
    1,
  ];
}
function f(e) {
  let {
      cardBackground: t = `#1a1a2e`,
      baseBorderColor: a = `rgba(255,255,255,0.1)`,
      borderWidth: c = 2,
      glowColor: l = `#7c3aed`,
      proximity: u = 150,
      smoothing: f = 0.12,
      borderRadius: p = 16,
      isMixed: m = !1,
      topLeft: h = 16,
      topRight: g = 16,
      bottomRight: _ = 16,
      bottomLeft: v = 16,
      style: y,
    } = e,
    [b, x] = o(null),
    S = s({ targetRgba: d(l), proximity: u, smoothing: f, borderWidth: c });
  S.current = { targetRgba: d(l), proximity: u, smoothing: f, borderWidth: c };
  let C = m ? [h, g, _, v] : [p, p, p, p],
    w = C.map((e) => Math.max(0, e - c)),
    T = C.map((e) => `${e}px`).join(` `),
    E = w.map((e) => `${e}px`).join(` `);
  return (
    n(() => {
      if (!b) return;
      let e = b.querySelector(`[data-glow]`);
      if (!e) return;
      let t = null,
        n = 0,
        r = 0,
        i = 0,
        a = 0,
        o = 0,
        s = 0,
        c = !1,
        l = S.current.targetRgba,
        u = l[0],
        d = l[1],
        f = l[2],
        p = l[3],
        m = S.current.proximity,
        h = () => {
          let { targetRgba: c, proximity: l, smoothing: g } = S.current;
          ((i += (n - i) * g),
            (a += (r - a) * g),
            (s += (o - s) * g),
            (u += (c[0] - u) * g),
            (d += (c[1] - d) * g),
            (f += (c[2] - f) * g),
            (p += (c[3] - p) * g),
            (m += (l - m) * g));
          let _ = `rgba(${Math.round(u)},${Math.round(d)},${Math.round(f)},${p.toFixed(3)})`;
          ((e.style.background = `radial-gradient(${m * 1.5}px circle at ${i}px ${a}px, ${_}, transparent)`),
            (e.style.opacity = String(s)),
            (t = requestAnimationFrame(h)));
        },
        g = (e) => {
          let { borderWidth: t, proximity: i } = S.current,
            a = b.getBoundingClientRect();
          ((n = e.clientX - a.left), (r = e.clientY - a.top));
          let s = n >= 0 && n <= a.width && r >= 0 && r <= a.height,
            c;
          if (s)
            ((c = Math.min(n, r, a.width - n, a.height - r)),
              (o = Math.min(1, 1 - Math.max(0, (c - t) / i))));
          else {
            let e = Math.max(0, Math.min(n, a.width)),
              t = Math.max(0, Math.min(r, a.height));
            ((c = Math.sqrt((n - e) ** 2 + (r - t) ** 2)),
              (o = Math.max(0, 1 - c / i)));
          }
        },
        _ = () => {
          t ??=
            ((e.style.willChange = `opacity, background`),
            document.addEventListener(`mousemove`, g),
            requestAnimationFrame(h));
        },
        v = () => {
          (t != null && (cancelAnimationFrame(t), (t = null)),
            document.removeEventListener(`mousemove`, g),
            (e.style.willChange = `auto`));
        },
        y = new IntersectionObserver(
          ([e]) => {
            ((c = e.isIntersecting), c ? _() : v());
          },
          { threshold: 0 },
        );
      return (
        y.observe(b),
        () => {
          (y.disconnect(), v());
        }
      );
    }, [b]),
    r(`div`, {
      ref: x,
      style: {
        ...y,
        position: `relative`,
        borderRadius: T,
        overflow: `hidden`,
        background: a,
      },
      children: [
        i(`div`, {
          "data-glow": !0,
          style: {
            position: `absolute`,
            inset: 0,
            opacity: 0,
            pointerEvents: `none`,
          },
        }),
        i(`div`, {
          style: {
            position: `absolute`,
            inset: c,
            borderRadius: E,
            background: t,
            pointerEvents: `none`,
          },
        }),
      ],
    })
  );
}
var p = e(() => {
  (a(),
    c(),
    t(),
    l(f, {
      cardBackground: {
        type: u.Color,
        title: `Card Background`,
        defaultValue: `#1a1a2e`,
      },
      baseBorderColor: {
        type: u.Color,
        title: `Base Border`,
        defaultValue: `rgba(255,255,255,0.1)`,
      },
      borderRadius: {
        type: u.FusedNumber,
        title: `Radius`,
        defaultValue: 16,
        toggleKey: `isMixed`,
        toggleTitles: [`All`, `Individual`],
        valueKeys: [`topLeft`, `topRight`, `bottomRight`, `bottomLeft`],
        valueLabels: [`TL`, `TR`, `BR`, `BL`],
        min: 0,
      },
      borderWidth: {
        type: u.Number,
        title: `Border Width`,
        defaultValue: 2,
        min: 1,
        max: 20,
        step: 1,
      },
      glowColor: {
        type: u.Color,
        title: `Glow Color`,
        defaultValue: `#7c3aed`,
      },
      proximity: {
        type: u.Number,
        title: `Proximity`,
        defaultValue: 150,
        min: 50,
        max: 500,
        step: 10,
      },
      smoothing: {
        type: u.Number,
        title: `Smoothing`,
        defaultValue: 0.12,
        min: 0.01,
        max: 1,
        step: 0.01,
      },
    }));
});
export { p as n, f as t };
//# sourceMappingURL=Border_Glow_Card.hHoZa0OP.mjs.map
