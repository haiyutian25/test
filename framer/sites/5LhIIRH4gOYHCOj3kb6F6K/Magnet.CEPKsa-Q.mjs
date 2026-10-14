import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  T as t,
  V as n,
  b as r,
  o as i,
  s as a,
  v as o,
  x as s,
  z as c,
} from "./react.CbTQkvGa.mjs";
import { X as l, j as u, s as d, w as f } from "./framer.CFgihyWK.mjs";
function p(e) {
  let {
      strength: t = 0.35,
      radius: a = 200,
      speed: c = 0.5,
      bounce: l = 0.5,
      scaleOnHover: u = !1,
      scaleAmount: d = 1.05,
      tilt3D: p = !1,
      maxTilt: m = 10,
      perspective: h = 800,
    } = e,
    [g, _] = o(null),
    v = s({
      strength: t,
      radius: a,
      speed: c,
      bounce: l,
      scaleOnHover: u,
      scaleAmount: d,
      tilt3D: p,
      maxTilt: m,
      perspective: h,
    });
  return (
    (v.current = {
      strength: t,
      radius: a,
      speed: c,
      bounce: l,
      scaleOnHover: u,
      scaleAmount: d,
      tilt3D: p,
      maxTilt: m,
      perspective: h,
    }),
    r(() => {
      if (!g || n === void 0 || f.current() === f.canvas) return;
      let e = g.parentElement;
      if ((e?.className?.includes(`-container`) && (e = e.parentElement), !e))
        return;
      let t = 0,
        r = 0,
        i = 0,
        a = 0,
        o = 0,
        s = 1,
        c = 0,
        l = 0,
        u = 0,
        d = 0,
        p = 0,
        m = 0,
        h = 1,
        _ = 0,
        y = 0,
        b,
        x = !1,
        S = (t) => {
          if (!x) return;
          let {
              strength: n,
              radius: r,
              scaleOnHover: i,
              scaleAmount: a,
              tilt3D: o,
              maxTilt: s,
            } = v.current,
            c = e.getBoundingClientRect(),
            l = c.left + c.width / 2,
            u = c.top + c.height / 2,
            d = t.clientX - l,
            f = t.clientY - u,
            g = Math.sqrt(d * d + f * f);
          if (g < r)
            if (
              ((p = d * n),
              (m = f * n),
              (h = i ? 1 + (a - 1) * (1 - g / r) : 1),
              o)
            ) {
              let e = Math.max(-1, Math.min(1, d / (c.width / 2 || 1))),
                t = Math.max(-1, Math.min(1, f / (c.height / 2 || 1))),
                n = 1 - g / r;
              ((_ = -t * s * n), (y = e * s * n));
            } else ((_ = 0), (y = 0));
          else ((p = 0), (m = 0), (h = 1), (_ = 0), (y = 0));
        },
        C = () => {
          let { speed: n, bounce: f, tilt3D: g, perspective: x } = v.current,
            S = 0.003 + n * n * 0.15,
            w = 0.82 + f * 0.14;
          ((t += (p - i) * S),
            (r += (m - a) * S),
            (t *= w),
            (r *= w),
            (i += t),
            (a += r),
            (o += (h - s) * S),
            (o *= w),
            (s += o),
            (c += (_ - u) * S),
            (l += (y - d) * S),
            (c *= w),
            (l *= w),
            (u += c),
            (d += l),
            g
              ? (e.style.transform = `perspective(${x.toFixed(0)}px) translate(${i.toFixed(2)}px, ${a.toFixed(2)}px) scale(${s.toFixed(4)}) rotateX(${u.toFixed(2)}deg) rotateY(${d.toFixed(2)}deg)`)
              : (e.style.transform = `translate(${i.toFixed(2)}px, ${a.toFixed(2)}px) scale(${s.toFixed(4)})`),
            (b = requestAnimationFrame(C)));
        },
        w = new IntersectionObserver(([f]) => {
          f.isIntersecting && !x
            ? ((x = !0),
              (e.style.willChange = `transform`),
              n.addEventListener(`mousemove`, S),
              (b = requestAnimationFrame(C)))
            : !f.isIntersecting &&
              x &&
              ((x = !1),
              n.removeEventListener(`mousemove`, S),
              cancelAnimationFrame(b),
              (p = 0),
              (m = 0),
              (h = 1),
              (i = 0),
              (a = 0),
              (t = 0),
              (r = 0),
              (s = 1),
              (o = 0),
              (_ = 0),
              (y = 0),
              (u = 0),
              (d = 0),
              (c = 0),
              (l = 0),
              (e.style.transform = ``),
              (e.style.willChange = ``));
        });
      return (
        w.observe(e),
        () => {
          (w.disconnect(),
            n.removeEventListener(`mousemove`, S),
            cancelAnimationFrame(b),
            (e.style.transform = ``),
            (e.style.willChange = ``));
        }
      );
    }, [g]),
    f.current() === f.canvas
      ? i(`div`, { style: { width: `100%`, height: `100%` } })
      : i(`div`, { ref: _, style: { display: `none` } })
  );
}
var m = e(() => {
  (c(),
    a(),
    l(),
    t(),
    u(p, {
      strength: {
        type: d.Number,
        title: `Strength`,
        defaultValue: 0.35,
        min: 0.05,
        max: 1,
        step: 0.05,
        description: `How far the element moves toward the cursor.`,
      },
      radius: {
        type: d.Number,
        title: `Radius`,
        defaultValue: 200,
        min: 50,
        max: 1600,
        step: 10,
        unit: `px`,
        description: `Distance at which the magnetic pull activates.`,
      },
      speed: {
        type: d.Number,
        title: `Speed`,
        defaultValue: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        description: `How quickly the element follows the cursor.`,
      },
      bounce: {
        type: d.Number,
        title: `Bounce`,
        defaultValue: 0.5,
        min: 0,
        max: 1,
        step: 0.05,
        description: `How much the element overshoots when snapping back.`,
      },
      scaleOnHover: {
        type: d.Boolean,
        title: `Scale on Hover`,
        defaultValue: !1,
        enabledTitle: `Yes`,
        disabledTitle: `No`,
      },
      scaleAmount: {
        type: d.Number,
        title: `Scale Amount`,
        defaultValue: 1.05,
        min: 1,
        max: 1.3,
        step: 0.01,
        hidden: (e) => !e.scaleOnHover,
      },
      tilt3D: {
        type: d.Boolean,
        title: `3D Tilt`,
        defaultValue: !1,
        enabledTitle: `On`,
        disabledTitle: `Off`,
      },
      maxTilt: {
        type: d.Number,
        title: `Max Tilt`,
        defaultValue: 10,
        min: 1,
        max: 30,
        step: 1,
        unit: `deg`,
        hidden: (e) => !e.tilt3D,
      },
      perspective: {
        type: d.Number,
        title: `Perspective`,
        defaultValue: 800,
        min: 200,
        max: 2e3,
        step: 50,
        unit: `px`,
        hidden: (e) => !e.tilt3D,
      },
    }));
});
export { m as n, p as t };
//# sourceMappingURL=Magnet.CEPKsa-Q.mjs.map
