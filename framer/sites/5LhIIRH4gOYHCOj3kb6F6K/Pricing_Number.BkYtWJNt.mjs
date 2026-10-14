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
import { S as c, Z as l, t as u } from "./motion.DqePFWeo.mjs";
import { X as d, j as f, s as p } from "./framer.CFgihyWK.mjs";
function m(e) {
  let {
      value: t = 49,
      prefix: a = `$`,
      suffix: u = `/mo`,
      duration: d = 0.6,
      appearDuration: f = 1.2,
      font: p = {},
      color: m = `#000`,
      prefixColor: h,
      suffixColor: g,
    } = e,
    _ = h ?? m,
    v = g ?? m,
    [y, b] = o(0),
    x = l(0),
    S = s(0),
    C = s(!0);
  return (
    n(() => {
      x.set(S.current);
      let e = C.current ? f : d;
      C.current = !1;
      let n = c(x, t, {
        duration: e,
        ease: `easeOut`,
        onUpdate: (e) => {
          b(Math.round(e));
        },
      });
      return ((S.current = t), () => n.stop());
    }, [t, d, f]),
    r(`div`, {
      style: { ...p, color: m, whiteSpace: `nowrap` },
      children: [
        i(`span`, { style: { color: _ }, children: a }),
        y,
        i(`span`, { style: { color: v }, children: u }),
      ],
    })
  );
}
var h = e(() => {
  (a(),
    t(),
    d(),
    u(),
    f(m, {
      value: {
        type: p.Number,
        title: `Value`,
        defaultValue: 49,
        min: 0,
        max: 9999,
      },
      prefix: { type: p.String, title: `Prefix`, defaultValue: `$` },
      suffix: { type: p.String, title: `Suffix`, defaultValue: `/mo` },
      duration: {
        type: p.Number,
        title: `Duration (s)`,
        defaultValue: 0.6,
        min: 0.1,
        max: 2,
        step: 0.1,
      },
      appearDuration: {
        type: p.Number,
        title: `Appear Duration (s)`,
        defaultValue: 1.2,
        min: 0.1,
        max: 3,
        step: 0.1,
      },
      font: { type: p.Font, title: `Font`, controls: `extended` },
      color: { type: p.Color, title: `Color`, defaultValue: `#000` },
      prefixColor: {
        type: p.Color,
        title: `Prefix Color`,
        defaultValue: `#000`,
      },
      suffixColor: {
        type: p.Color,
        title: `Suffix Color`,
        defaultValue: `#000`,
      },
    }));
});
export { h as n, m as t };
//# sourceMappingURL=Pricing_Number.BkYtWJNt.mjs.map
