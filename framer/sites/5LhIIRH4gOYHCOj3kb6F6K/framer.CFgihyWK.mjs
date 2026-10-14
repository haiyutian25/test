import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  D as r,
  E as i,
  F as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  S as d,
  T as f,
  V as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as ee,
  z as te,
} from "./react.CbTQkvGa.mjs";
import {
  $ as N,
  A as P,
  B as ne,
  C as re,
  D as ie,
  E as F,
  F as ae,
  G as oe,
  H as se,
  I as ce,
  J as le,
  K as ue,
  L as I,
  M as L,
  N as R,
  O as de,
  P as fe,
  Q as z,
  R as pe,
  S as B,
  T as me,
  U as he,
  V as ge,
  W as _e,
  X as ve,
  Y as ye,
  Z as be,
  _ as xe,
  a as Se,
  at as Ce,
  b as we,
  c as Te,
  ct as Ee,
  d as De,
  et as Oe,
  f as ke,
  g as Ae,
  h as je,
  i as Me,
  it as Ne,
  j as Pe,
  k as Fe,
  l as Ie,
  m as Le,
  n as Re,
  nt as ze,
  o as Be,
  ot as Ve,
  p as He,
  q as Ue,
  r as We,
  rt as Ge,
  s as Ke,
  st as qe,
  tt as Je,
  u as Ye,
  v as Xe,
  w as Ze,
  x as Qe,
  y as $e,
  z as et,
} from "./motion.DqePFWeo.mjs";
function tt(e) {
  return typeof e == `function`;
}
function nt(e) {
  return typeof e == `boolean`;
}
function V(e) {
  return typeof e == `string`;
}
function rt(e) {
  return Number.isFinite(e);
}
function it(e) {
  return Array.isArray(e);
}
function H(e) {
  return typeof e == `object` && !!e && !it(e);
}
function at(e) {
  for (let t in e) return !1;
  return !0;
}
function ot(e) {
  return e === void 0;
}
function st(e) {
  return e === null;
}
function ct(e) {
  return e == null;
}
function lt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ut(e) {
  return H(e) && tt(e.return);
}
function dt(e) {
  return H(e) && tt(e.then);
}
function ft(e) {
  return e instanceof Promise;
}
function pt(e) {
  return `url('${mt(e)}')`;
}
function mt(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ht(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function gt(e, t, n) {
  if (q_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (q_.set(e, t), t))
    .catch((t) => {
      throw (
        q_.delete(e),
        console.warn(`Failed to preload lazy module from ${n}`, t),
        t
      );
    });
  (r.catch(z_), q_.set(e, r));
}
function _t(e, t) {
  B_ && (J_.set(e, t), Y_.has(e) && gt(e, t, `registered loader ${e}`));
}
function vt() {
  if (!B_) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(X_),
      i = r ? e.slice(X_.length) : e;
    if (!i) continue;
    Y_.add(i);
    let a = J_.get(i);
    a ? gt(i, a, `registered loader ${i}`) : r && gt(i, () => import(n), n);
  }
}
function yt(e) {
  return typeof e == `object` && !!e && !T(e) && Q_ in e;
}
function bt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function xt(e, t = `default`, n) {
  n && _t(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !q_.has(n)) return;
      let e = q_.get(n);
      ft(e) ? s(() => e) : (i = bt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = bt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (h(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Z_ !== void 0 && Z_.add(n), !i)) throw s(e);
      return E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function St(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ct(e) {
  return e === null || !(ev in e) ? !1 : typeof e.equals == `function`;
}
function wt(e, t) {
  return e === t || (e !== e && t !== t);
}
function Tt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!wt(e[r], t[r])) return !1;
  return !0;
}
function Et(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Mt(e[r], t[r], !0)) return !1;
  return !0;
}
function Dt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!wt(r, t.get(n))) return !1;
  return !0;
}
function Ot(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Mt(r, t.get(n), !0)) return !1;
  return !0;
}
function kt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function At(e, t) {
  let n = $_(e);
  if (n.length !== $_(t).length) return !1;
  for (let r of n)
    if (
      !St(t, r) ||
      (!(r === `_owner` && St(e, `$$typeof`) && e.$$typeof) && !wt(e[r], t[r]))
    )
      return !1;
  return !0;
}
function jt(e, t) {
  let n = $_(e);
  if (n.length !== $_(t).length) return !1;
  for (let r of n)
    if (
      !St(t, r) ||
      (!(r === `_owner` && St(e, `$$typeof`) && e.$$typeof) &&
        !Mt(e[r], t[r], !0))
    )
      return !1;
  return !0;
}
function Mt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? Et(e, t) : Tt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Ot(e, t) : Dt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return kt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? Ct(e) && Ct(t)
        ? e.equals(t)
        : n
          ? jt(e, t)
          : At(e, t)
      : !1;
}
function Nt(e, t, n = !0) {
  try {
    return Mt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(
          `Warning: isEqual does not handle circular references.`,
          e.name,
          e.message,
        ),
        !1
      );
    throw e;
  }
}
function Pt(e) {
  return d.useCallback((t) => e[t], [e]);
}
function Ft({ api: e, children: t }) {
  return E(tv.Provider, { value: e, children: t });
}
function It() {
  return d.useContext(tv);
}
function Lt({ routes: e, children: t }) {
  let n = Pt(e),
    r = s(() => ({ getRoute: n }), [n]);
  return E(tv.Provider, { value: r, children: t });
}
function Rt() {
  let e = It(),
    t = S(nv),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return s(() => {
    if (!(!n || !a))
      return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function zt() {
  let e = Rt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Bt(e) {
  let t = Rt(),
    n = d.useRef(t);
  Nt(n.current, t) || !t || ((n.current = t), e(t));
}
function Vt(e) {
  let t = It();
  if (e) return t.getRoute?.(e);
}
function Ht(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Ut(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) &&
        performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++)
    document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Wt(e, t) {
  let n = Rt(),
    r = Vt(t) ?? n;
  return d.useMemo(() => (r ? Ht(r, e) : e), [e, r]);
}
function Gt() {
  return Rt()?.pathVariables;
}
function U(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Kt(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t),
      );
}
function qt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === _v
  );
}
function Jt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Yt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` `
        ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}`
        : ``;
  }
}
function Xt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Yt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Zt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
  );
}
function Qt(e) {
  return vv.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function $t(e) {
  return !(!Number.isInteger(e) || e < 0 || e > hv);
}
function en(e) {
  return !(!Number.isInteger(e) || e < 0 || e > mv);
}
function tn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return $t(+e);
}
function nn(e) {
  for (var t = e.length - 1; t >= 0 && !tn(e[t]); t--);
  return t + 1;
}
function rn(e) {
  let t = Object.keys(e);
  return ((t.length = nn(t)), t);
}
function an(e) {
  return new Uint8Array(e).toBase64();
}
function on(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function sn(e) {
  return Buffer.from(e).toString(`base64`);
}
function cn(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function ln(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function un(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function dn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function fn(e, t, n) {
  return pn(JSON.parse(e), t, n);
}
function pn(e, t, n) {
  let r = dn(Ev, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === sv) return r.fromPrimitive(void 0);
    if (e === lv) return r.fromPrimitive(NaN);
    if (e === uv) return r.fromPrimitive(1 / 0);
    if (e === dv) return r.fromPrimitive(-1 / 0);
    if (e === fv) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if (
            (typeof t != `number` && (t = i.push(c[1]) - 1),
            Object.hasOwn(a, t))
          )
            return (a[e] = l(a[t]));
          if (((o ??= new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2)
              r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`)
              throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              if (c[e] === `__proto__`)
                throw Error(
                  "Cannot parse an object with a `__proto__` property",
                );
              r.set(l, c[e], s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`)
              throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(Sv(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === pv) {
        let t = c[1];
        if (!en(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!$t(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== cv && r.set(t, e, s(n));
        }
      }
    else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`)
          throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function mn(e, t, n) {
  let r = hn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function hn(e, t, n, r) {
  let i = dn(Tv, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n)
    for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return sv;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return lv;
      if (f === 1 / 0) return uv;
      if (f === -1 / 0) return dv;
      if (f === 0 && 1 / f < 0) return fv;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new gv(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`)
      throw new gv(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = gn(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new gv(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t,
        );
      m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      });
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Xt(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Xt(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Xt(r)},"${a}"]` : `["RegExp",${Xt(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += cv;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + pv + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`),
                    (m += `,` + t + `,` + u(i.get(n, t))),
                    c.pop());
                }
                break;
              } else ((e = !0), (m += cv));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? gn(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength &&
              (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength &&
              (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${xv(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Xt(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`)
            throw new gv(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new gv(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new gv(
                  `Cannot stringify objects with __proto__ keys`,
                  c,
                  n,
                  t,
                );
              (c.push(Qt(r)), (m += `,${Xt(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new gv(
                  `Cannot stringify objects with __proto__ keys`,
                  c,
                  n,
                  t,
                );
              (r && (m += `,`),
                (r = !0),
                c.push(Qt(a)),
                (m += `${Xt(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function gn(e) {
  let t = typeof e;
  return t === `string`
    ? Xt(e)
    : e === void 0
      ? sv.toString()
      : e === 0 && 1 / e < 0
        ? fv.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function _n(e, t, n = `lazy`) {
  switch ((Dv.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, {
            detail: { trackingId: e, href: n },
          }),
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }),
        );
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(
        new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }),
      );
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, {
            detail: { trackingId: e },
          }),
        );
      break;
    }
  }
}
function vn(e) {
  return V(e) && (e === `` || kv.test(e));
}
function yn() {
  return { [Av.QueryCache]: new Map(), [Av.CollectionUtilsCache]: new Map() };
}
function bn() {
  if (!B_) return;
  if (jv !== void 0) return jv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      jv = fn(e.text) ?? yn();
    } catch (e) {
      ((jv = yn()),
        console.warn(
          `Failed to parse handover data. Falling back to network.`,
          e,
        ));
    }
    return (
      U_(() => {
        (e?.remove(), (e = null));
      }),
      jv
    );
  }
}
function xn(e, t) {
  if (
    (console.warn(
      ht(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`,
      ),
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    _n(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Sn(e, t) {
  let n = bn();
  return n ? n[e].has(t) : !1;
}
function Cn(e, t) {
  let n = bn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function wn(e) {
  return e?.id ?? iv;
}
function Tn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function En(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Fv.has(n)) return Fv.get(n);
    let r = new Lv(n, t);
    return (Fv.set(n, r), r);
  };
}
function Dn({ children: e, collectionUtils: t }) {
  let n = s(() => ({ get: En(t) }), [t]);
  return E(Iv.Provider, { value: n, children: e });
}
function On() {
  return S(Iv);
}
function kn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function An() {
  return t === void 0 ? void 0 : t;
}
function jn() {
  let e = An();
  return e ? Rv.test(e.platform) : !1;
}
function Mn() {
  let e = An();
  return e
    ? zv.test(e.platform)
      ? !0
      : Bv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Nn() {
  return jn() || Mn();
}
function Pn() {
  let e = An();
  return e ? Vv.test(e.userAgent) : !1;
}
function Fn() {
  let e = An();
  return e ? Hv.test(e.userAgent) && Uv.test(e.vendor) && !Pn() : !1;
}
function In() {
  let e = An();
  return e ? Wv.test(e.userAgent) && Gv.test(e.vendor) : !1;
}
function Ln() {
  let e = An();
  return e ? Kv.test(e.userAgent) : !1;
}
function Rn() {
  return typeof document == `object`;
}
function zn() {
  let e = An();
  if (!e) return -1;
  let t = qv.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Bn() {
  let e = An();
  return e ? Jv.test(e.userAgent) : !1;
}
function Vn() {
  return !1;
}
function Hn() {
  let e = An();
  return e && Yv.test(e.userAgent)
    ? `tablet`
    : e && Xv.test(e.userAgent)
      ? `phone`
      : `desktop`;
}
function Un() {
  return Hn() === `desktop`;
}
function Wn(e) {
  return Nn() ? e.metaKey : e.ctrlKey;
}
function Gn() {}
async function Kn() {}
function qn(e) {
  return typeof e == `function` ? e() : e;
}
function Jn(e, t) {
  return ey[e] > ey[t];
}
function Yn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Xn(e, t) {
  let n = e?.priority,
    r = Yn();
  return n === `background`
    ? (t?.() ?? kn(1))
    : r?.yield
      ? r.yield(e).catch(Gn)
      : r?.postTask
        ? r.postTask(Gn, e).catch(Gn)
        : t
          ? t()
          : n === `user-blocking`
            ? ty
            : kn(0);
}
function Zn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Rn() &&
      (document.addEventListener(`visibilitychange`, s),
      p.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, ny),
        e(() => {
          Xn(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Rn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Xn(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0),
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Zv : Qv),
        s = Rn() && document.hidden ? $v : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o =
      e.continueAfter === `paint` &&
      (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Rn() && !t ? (n ? void 0 : ty) : n ? m(i, r) : d(i);
  }
  return h;
}
function Qn(e, t = !1) {
  let n = ``;
  if (p !== void 0)
    if (t) n = p.location.search;
    else {
      let e = p.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? p.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? $n(n, e) : e;
}
function $n(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== ay && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function er(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(oy)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u)
          throw Error(
            `Failed to replace path variables: unexpected regex match group`,
          );
        let d = a[u];
        if (!d || !V(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = ft(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ft(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ft(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      }),
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function tr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function nr({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await er(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = tr(u.path, t.slug)),
    o && u.path && (u.path = Qn(u.path, !0)),
    u
  );
}
async function rr({
  activeLocale: e,
  collectionUtils: t,
  currentRoute: n,
  pathVariables: r,
}) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(oy)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (V(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function ir({
  activeLocale: e,
  collectionUtils: t,
  currentRoute: n,
  pathVariables: r,
}) {
  if (!e || e.id === iv) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await rr({
    activeLocale: e,
    collectionUtils: t,
    currentRoute: n,
    pathVariables: r,
  });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function ar({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await ir({
        activeLocale: e,
        collectionUtils: n,
        currentRoute: a,
        pathVariables: i,
      })) ?? a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await nr({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Nt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function or() {
  return d.useContext(ly);
}
function sr() {
  return or().activeLocale?.code ?? `en-US`;
}
function cr() {
  return d.useContext(uy);
}
function lr() {
  let e = On(),
    { getRoute: t } = It(),
    { activeLocale: n, locales: r } = or();
  return C(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return dr(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o,
      );
    },
    [t, e, n, r],
  );
}
function ur(e, t = !0) {
  let n = lr();
  h(() => {
    if (!(!t || !dy)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function dr(e, t, n = {}) {
  if (!dy || !e) return;
  let {
      priority: r = `background`,
      yieldBeforePreload: i = !0,
      shouldLoadRouteData: a = !0,
    } = n,
    o = e.page;
  if (!o || !yt(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await iy({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await fr(n, e, t, r));
    } catch {}
  }
}
async function fr(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await ar({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === iv),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function pr(e, t) {
  return e.replace(oy, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function mr() {
  if (fy) return;
  fy = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (p.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((p.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e),
          _n(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function hr({ children: e, value: t }) {
  return E(py.Provider, { value: t, children: e });
}
function gr() {
  return d.useContext(py);
}
function _r(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function vr(e) {
  let t = my,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < hy;) ((n = e.next(t)), r.push(n.value), (t += my));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - my }
  );
}
function yr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function br(e) {
  let { innerWidth: t, innerHeight: n } = p,
    [r, i] = yr(e.x),
    [a, o] = yr(e.y);
  return {
    x: i === `px` ? r : (r / 100) * t,
    y: o === `px` ? a : (a / 100) * n,
  };
}
function xr(e) {
  let [t, n] = yr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Sr(e) {
  let { x: t, y: n } = br(e);
  return Math.hypot(
    Math.max(t, p.innerWidth - t),
    Math.max(n, p.innerHeight - n),
  );
}
function Cr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function wr(e) {
  return e ? vy[e] : void 0;
}
function Tr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`),
      (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Er(t)) {
    let { easing: e, duration: n } = vr(
      et({ keyframes: [0, 1], ...Dr(t), restDelta: 0.001, restSpeed: 1e-4 }),
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = wr(n?.mask?.type),
    o = Cr(n, `start`, e, a),
    s = Cr({ ...yy, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Er(e) {
  return e.type === `spring`;
}
function Dr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Or({ exit: e = xy, enter: t }) {
  let n = document.createElement(`style`);
  n.id = by;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Tr(`exit`, e)),
    (r += Tr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function kr() {
  U_(() => {
    F.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(by);
      e && document.head.removeChild(e);
    });
  });
}
function Ar() {
  return !!document.startViewTransition;
}
function jr(e) {
  return new Promise((t) => {
    F.render(() => {
      (performance.mark(`framer-vt-style`), Or(e), t());
    });
  });
}
async function Mr(e, t, n) {
  if (!Ar()) {
    e();
    return;
  }
  if ((await jr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted &&
        (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Sy),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), kr());
      })
      .catch(Sy),
    r
  );
}
function Nr() {
  let e = gr(),
    t = M(void 0);
  return (
    h(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = _r(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Mr(
            async () => {
              (i(), await e);
            },
            o,
            a,
          );
        }
        i();
      },
      [e],
    )
  );
}
function Pr(e, t) {
  U_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Fr(e, t) {
  U_(() => {
    let n = document.querySelector(
      `link[rel='canonical'][data-framer-generated-canonical]`,
    );
    if (
      !e ||
      document.querySelector(
        `link[rel='canonical']:not([data-framer-generated-canonical])`,
      )
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function Ir(e) {
  U_(() => {
    let t = Array.from(
      document.querySelectorAll(
        `link[rel='alternate'][hreflang][data-framer-generated-hreflang]`,
      ),
    );
    if (
      document.querySelector(
        `link[rel='canonical']:not([data-framer-generated-canonical])`,
      )
    ) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Lr(e, t, n, i = r) {
  i(() => {
    let t = async (e) => (await iy({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Rr(e) {
  let t = M(new Set());
  return (
    Lr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` },
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s ||
                (performance.mark(o),
                performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e],
    )
  );
}
function zr(e) {
  return H(e) && `routeId` in e;
}
function Br(e = p.history.state) {
  return zr(e) ? e : void 0;
}
function Vr(e) {
  return e?.entryId;
}
function Hr(e) {
  Ty = e;
}
function Ur() {
  return Ty;
}
function Wr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Gr(e, t) {
  return Kr(e, Vr(e) ?? Vr(t));
}
function Kr(e, t = Wr()) {
  return { ...e, entryId: t };
}
function qr(e, t) {
  (performance.mark(`framer-history-replace`),
    Hr(Gr(e, Br())),
    t && Pr(t, p.location.href));
  let n =
    !t || t === p.location.href
      ? p.History.prototype.replaceState.bind(p.history)
      : p.history.replaceState.bind(p.history);
  try {
    n(Ty, ``, t);
  } catch {}
}
function Jr(e) {
  (performance.mark(`framer-history-replace`),
    Hr(Kr(e)),
    History.prototype.replaceState.call(p.history, Ty, ``, void 0));
}
function Yr(e, t) {
  (performance.mark(`framer-history-push`),
    Hr(Kr(e)),
    Pr(t, p.location.href),
    mr());
  try {
    p.history.pushState(Ty, ``, t);
  } catch {}
}
function Xr({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: i,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  r(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let r = p.location.hash ? p.location.hash.slice(1) : void 0;
    qr({
      ...Br(),
      routeId: t,
      hash: r,
      pathVariables: n,
      localeId: i,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Zr(e, t, n) {
  let r = Nr(),
    i = Rr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = M(void 0),
    l = C(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    u = C(
      async ({ state: e }) => {
        if (!zr(e)) return;
        let o = i({ popstate: !0 }),
          c = Ut();
        (o.promise.finally(c), Vr(Ur()) !== (Vr(e) ?? Vr(Br())) && a(), Hr(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: f,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = V(d) ? d : p.location.hash ? p.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                u,
                V(m) ? m : void 0,
                _,
                p.location.pathname + p.location.search + p.location.hash,
                H(f) ? f : void 0,
                h,
                g,
                !0,
                o,
                !1,
              ),
              !0);
          },
          b = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || l();
          }),
          await o.promise,
          b && l(),
          await p.navigation?.transition?.finished.catch(z_),
          wy(),
          Pr(p.location.href));
      },
      [t, i, a, l, n, r, s],
    ),
    d = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        zr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s],
    );
  h(
    () => (
      p.addEventListener(`popstate`, u),
      Ey && p.navigation.addEventListener(`navigate`, d),
      () => {
        (p.removeEventListener(`popstate`, u),
          Ey && p.navigation.removeEventListener(`navigate`, d));
      }
    ),
    [u, d],
  );
}
async function Qr(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + tr(pr(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type ===
    `opaqueredirect`
    ? ((p.location.href = p.location.origin + i), !0)
    : !1;
}
function $r() {
  let e = On();
  return C((t) => ei({ ...t, collectionUtils: e }), [e]);
}
async function ei({ sitePrefix: e, ...t }) {
  let n = await nr(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!V(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        n.isMissingInLocale &&
        (await Qr(t.route, n.pathVariables, t.nextLocale, e))
      )
        return;
    } catch {}
    return n;
  }
}
function ti(e) {
  let t = M(Promise.resolve()),
    n = M(),
    r = C(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({
            handler: () => t.current,
            scroll: e ? `manual` : `after-transition`,
          }));
      },
      [e],
    );
  return C(
    (e, i, a) => {
      if (!Ey) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        p.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0),
            p.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r],
  );
}
function ni(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function ri(e) {
  return ni(e.trim().toLowerCase().replace(Dy, `-`));
}
function ii({ children: e, value: t }) {
  return E(ky.Provider, { value: t, children: e });
}
function ai() {
  return S(ky);
}
function oi(e, t) {
  let n = A(() => ({ inputs: t, result: e() }))[0],
    r = M(!0),
    i = M(n),
    a =
      r.current || (t && i.current.inputs && Nt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    h(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function si(e, t) {
  return oi(() => e, t);
}
function ci() {
  return p.location.search;
}
function li() {
  return ``;
}
function ui(e) {
  return (
    jy.add(e),
    p.addEventListener(`popstate`, e),
    () => {
      (jy.delete(e), p.removeEventListener(`popstate`, e));
    }
  );
}
function di() {
  for (let e of jy) e();
}
function fi({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let r = ai() === `preview`,
    [i, a] = A(``),
    o = M(t);
  Ay(() => {
    o.current = t;
  }, [t]);
  let s = l(ui, ci, li),
    c = ee(s),
    d = t !== ee(t),
    f = r ? i : d ? s : c,
    m = C(
      async (e) => {
        if (r) {
          u(() => {
            a((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let i = n(),
          s = t;
        if ((await iy({ continueAfter: `paint` }), i || n() || o.current !== s))
          return;
        let c = Br();
        if (!c) return;
        let l = new URL(p.location.href),
          d = e(l.searchParams).toString();
        l.search = d;
        let f = c.queryParamBackAnchorSearch,
          m = p.location.search.slice(1),
          h = f === void 0 && d !== m,
          g = f !== void 0 && d === f,
          _ = {
            ...c,
            queryParamBackAnchorSearch: g ? void 0 : (f ?? (h ? m : void 0)),
          },
          v = l.toString();
        (h || g ? Yr(_, v) : qr(_, v), di());
      },
      [n, r, t],
    ),
    h = oi(
      () => ({
        urlSearchParams: new URLSearchParams(f),
        replaceSearchParams: m,
      }),
      [f, m],
    );
  return E(My.Provider, { value: h, children: e });
}
function pi({ parameterName: e }) {
  let t = M(e),
    { urlSearchParams: n, replaceSearchParams: r } = S(My);
  return [
    s(() => n.getAll(t.current), [n]),
    C(
      async (e) => {
        it(e) &&
          (await r((n) => {
            let r = t.current,
              i = new URLSearchParams(),
              a = !1;
            for (let [t, o] of n.entries()) {
              if (t !== r) {
                i.append(t, o);
                continue;
              }
              if (!a) {
                a = !0;
                for (let t of e) V(t) && i.append(r, t);
              }
            }
            if (!a) for (let t of e) V(t) && i.append(r, t);
            return i;
          }));
      },
      [r],
    ),
  ];
}
function mi({ initialValue: e, parameterName: t, optional: n }) {
  let r = M(n ? void 0 : V(e) ? e : ``),
    [i, a] = pi({ parameterName: t });
  return [
    s(() => (i.length === 0 ? r.current : (i[0] ?? ``)), [i]),
    C(
      async (e) => {
        if (e === r.current) return a(rv);
        if (V(e)) return a([e]);
      },
      [a],
    ),
  ];
}
function hi({
  collectionId: e,
  initialValue: t,
  parameterName: n,
  optional: r,
}) {
  let i = On(),
    a = or().activeLocale ?? void 0,
    o = M(r ? void 0 : t),
    [c, l] = mi({ initialValue: void 0, parameterName: n, optional: !0 });
  return [
    s(
      () => (V(c) ? _i(gi(i, e).getRecordIdBySlug(c, a)) : o.current),
      [i, e, a, c],
    ),
    C(
      async (t) => {
        if (ot(t)) return l(void 0);
        let n = await gi(i, e).getSlugByRecordId(t, a);
        V(n) && (await l(n));
      },
      [i, e, a, l],
    ),
  ];
}
function gi(e, t) {
  let n = e?.get(t);
  return (
    U(n, () => `CollectionUtilsCache not found for collectionId: ${t}`),
    n
  );
}
function _i(e) {
  if (ft(e)) throw e;
  return e;
}
function vi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = yi(e),
    [r, i] = yi(t),
    a = bi(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function yi(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function bi(e, t) {
  if (e === t || ((e = `/` + xi(e)), (t = `/` + xi(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Fy(e, 1 + s);
    if (n !== Fy(t, 1 + s)) break;
    n === Py && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Fy(t, 1 + s) === Py) return Ly(t, 1 + s + 1);
      if (s === 0) return Ly(t, 1 + s);
    } else r > a && (Fy(e, 1 + s) === Py ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Fy(e, s) === Py) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Ly(t, 1 + o)}`;
}
function xi(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Fy(e, o);
    else if (By(a)) break;
    else a = Py;
    if (By(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Fy(t, t.length - 1) !== Ny ||
            Fy(t, t.length - 2) !== Ny
          ) {
            if (t.length > 2) {
              let e = Iy(t, zy);
              (e === -1
                ? ((t = ``), (n = 0))
                : ((t = Ly(t, 0, e)), (n = t.length - 1 - Iy(t, zy))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Ry && ((t += t.length > 0 ? `${zy}..` : `..`), (n = 2));
        } else
          (t.length > 0
            ? (t += `${zy}${Ly(e, r + 1, o)}`)
            : (t = Ly(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Ny && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Si(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || p.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Ci(e, t) {
  let n = e.replace(oy, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function wi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Ci(i, r);
  }
  if (e.includes(`:`)) return Ci(e, r);
  let i = t.elements?.[e];
  return i ? Ci(i, r) : e;
}
function Ti(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  },
) {
  let m;
  if ((i && e && (m = wi(i, e, o)), l)) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h),
    r && (h = h.replace(oy, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(oy, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v =
      !_ &&
      a !== void 0 &&
      t !== void 0 &&
      e?.path !== void 0 &&
      t === e.path &&
      h !== g;
  if (s)
    if (Vy.has(h) && p !== void 0) {
      let e = Si(u);
      g = vi(p.location.pathname, e + g);
    } else g = vi(h, g);
  else g = tr(g, f);
  let y = _ || v;
  return ((c || y) && (g = Qn(g, y)), m && (g = `${g}#${m}`), g);
}
function Ei() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Hy] = 1), e);
}
function Di() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Hy] = 1), e);
}
function Oi(e) {
  return e instanceof HTMLInputElement &&
    (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function ki(e) {
  return Hy in e && e[Hy] === 1;
}
function Ai(e) {
  return Uy in e.nativeEvent && e.nativeEvent[Uy] === 1;
}
function ji(e) {
  let t = M(!1),
    n = M(null),
    r = l(W_, K_, Wy);
  return (
    h(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = Oi(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(Di()));
        return;
      }
      if (a === `checked`) {
        let e = Di();
        ((e[Uy] = 1), i.dispatchEvent(e), i.dispatchEvent(Di()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(Ei());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = Ei();
      ((c[Uy] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(Ei()));
        }));
    }, [r]),
    n
  );
}
function Mi() {
  if (!Gy) return;
  ((qy = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Gy.forEach((n) => t.addEventListener(n, Ky, e));
}
function Ni() {
  return (
    h(() => {
      if (!qy || !Gy) return;
      let e = { capture: !0 },
        t = document.body;
      (Gy.forEach((n) => t.removeEventListener(n, Ky, e)),
        (Gy = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Pi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Fi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Ii() {
  ((pb = new fb()), pb.render.markStart());
}
function Li() {
  (c(() => {
    pb?.useInsertionEffects.markRouterStart();
  }, []),
    r(() => {
      pb?.useLayoutEffects.markRouterStart();
    }, []),
    h(() => {
      pb?.useEffects.markRouterStart();
    }, []));
}
function Ri() {
  (c(() => {
    (pb?.render.markEnd(), pb?.useInsertionEffects.markStart());
  }, []),
    r(() => {
      if (
        (pb?.useLayoutEffects.markStart(),
        document.visibilityState !== `visible`)
      ) {
        mb = !0;
        return;
      }
      F.read(() => {
        (pb?.browserRendering.requestAnimationFrame.markStart(),
          pb?.unattributedHydrationOverhead.measure());
      });
    }, []),
    h(() => {
      (pb?.useEffects.markStart(),
        pb?.browserRendering.hasStarted ||
          (pb?.mutationEffects.measure(), pb?.useEffects.markAreSynchronous()));
    }, []));
}
function zi() {
  (c(() => {
    pb?.useInsertionEffects.markEnd();
  }, []),
    r(() => {
      (pb?.useLayoutEffects.markEnd(),
        !(mb || document.visibilityState !== `visible`) &&
          F.read(() => {
            (pb?.browserRendering.requestAnimationFrame.markEnd(),
              iy().then(() => {
                pb?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    h(() => {
      pb?.useEffects.markEnd();
    }, []));
}
function Bi() {
  return (Ri(), null);
}
function Vi() {
  return (zi(), null);
}
function Hi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return d.isValidElement(e) ? d.cloneElement(e, n) : E(e, { ...n });
}
function Ui() {
  return vb;
}
function Wi(e) {
  if (yb?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      U(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: qi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          U(t, `localizedPath must be defined`);
          let i = qi(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    yb = {
      pathRoutes: t,
      pathRoutesLocalized: n,
      paths: r,
      pathsLocalized: i,
      lastRoutes: a,
    };
  }
  return {
    pathRoutes: yb.pathRoutes,
    paths: yb.paths,
    pathRoutesLocalized: yb.pathRoutesLocalized,
    pathsLocalized: yb.pathsLocalized,
  };
}
function Gi(e, t, n = !0, r = Ui()) {
  return Ki(e, t, r, n);
}
function Ki(e, t, n, r = !0) {
  let {
      pathRoutes: i,
      paths: a,
      pathRoutesLocalized: o,
      pathsLocalized: s,
    } = Wi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Ji(t, n.path);
      if (e.isMatch)
        return {
          routeId: n.routeId,
          localeId: l,
          pathVariables: e.pathVariables,
        };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ji(t, d.path);
    if (e.isMatch)
      return {
        routeId: d.routeId,
        localeId: l,
        pathVariables: e.pathVariables,
      };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ji(t, n);
        if (e.isMatch)
          return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ji(t, e);
    if (r.isMatch)
      return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function qi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ji(e, t) {
  let n = [],
    r = Yi(t).replace(oy, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Yi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Xi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Zi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 &&
        e.slice(0, t).trim().toLowerCase() === `desc` &&
        (a = Xi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Qi(e, t) {
  let n = e.toLowerCase(),
    r = Zi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function $i(e) {
  if (
    p === void 0 ||
    typeof performance > `u` ||
    !(`PerformanceServerTiming` in p)
  )
    return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function ea() {
  let e = $i(`abtests`);
  return new URLSearchParams(e?.description);
}
function ta(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function na(e, t) {
  for (let [n, r] of t) ta(e, n, r);
}
function ra(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function ia(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = {
    ...a,
    includedLocales: r?.includedLocales,
    elements: o,
    abTestingVariantId: t,
  };
}
function aa(e, t) {
  if (p === void 0) return t;
  let n = t;
  if (t) {
    ia(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (na(e, ea()), ra(e), n);
}
function oa(e) {
  (h(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document
            .querySelector(`meta[name="viewport"]`)
            ?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function sa(e, ...t) {
  bb.has(e) || (bb.add(e), console.warn(e, ...t));
}
function ca(e, t, n) {
  sa(
    `Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`,
  );
}
function la(e) {
  return (
    typeof e == `object` &&
    !!e &&
    Cb in e &&
    e[Cb] instanceof Function &&
    wb in e &&
    e[wb] instanceof Function
  );
}
function ua(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Sb(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function da(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function fa(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function pa(e) {
  return Math.round(e * 2) / 2;
}
function ma(e, t) {
  return { x: e, y: t };
}
function ha(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function ga(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function _a(e) {
  let t = va(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function va(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function ya(e, t, n) {
  return (
    (Ob.rgb_r = e / 255),
    (Ob.rgb_g = t / 255),
    (Ob.rgb_b = n / 255),
    Ob.rgbToHsluv(),
    { h: Ob.hsluv_h, s: Ob.hsluv_s, l: Ob.hsluv_l }
  );
}
function ba(e, t, n, r = 1) {
  return (
    (Ob.hsluv_h = e),
    (Ob.hsluv_s = t),
    (Ob.hsluv_l = n),
    Ob.hsluvToRgb(),
    { r: Ob.rgb_r * 255, g: Ob.rgb_g * 255, b: Ob.rgb_b * 255, a: r }
  );
}
function xa(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Sa(e, t, n) {
  return {
    r: ga(e) ? ka(e, 255) * 255 : 0,
    g: ga(t) ? ka(t, 255) * 255 : 0,
    b: ga(n) ? ka(n, 255) * 255 : 0,
  };
}
function Ca(e, t, n, r) {
  let i = [
    Ma(Math.round(e).toString(16)),
    Ma(Math.round(t).toString(16)),
    Ma(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function wa(e, t, n) {
  let r,
    i,
    a = ka(e, 255),
    o = ka(t, 255),
    s = ka(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Ta(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Ea(e, t, n) {
  let r, i, a;
  if (
    ((e = ka(e, 360)), (t = ka(t * 100, 100)), (n = ka(n * 100, 100)), t === 0)
  )
    r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = Ta(s, o, e + 1 / 3)), (i = Ta(s, o, e)), (a = Ta(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Da(e, t, n) {
  ((e = ka(e, 255)), (t = ka(t, 255)), (n = ka(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Oa(e, t, n) {
  ((e = ka(e, 360) * 6), (t = ka(t * 100, 100)), (n = ka(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function ka(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Aa(e) && (e = `100%`);
    let t = ja(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))),
      t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Aa(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ja(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Ma(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function Na(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Eb[t];
  if ((n && (t = n), t === `transparent`))
    return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = kb.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = kb.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = kb.hsl.exec(t))
        ? {
            h: parseInt(r[1] ?? ``),
            s: _a(r[2] ?? ``),
            l: _a(r[3] ?? ``),
            a: 1,
            format: `hsl`,
          }
        : (r = kb.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: _a(r[2] ?? ``),
              l: _a(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = kb.hsv.exec(t))
            ? {
                h: parseInt(r[1] ?? ``),
                s: _a(r[2] ?? ``),
                v: _a(r[3] ?? ``),
                a: 1,
                format: `hsv`,
              }
            : (r = kb.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: _a(r[2] ?? ``),
                  v: _a(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = kb.hex8.exec(t))
                ? {
                    r: Pa(r[1] ?? ``),
                    g: Pa(r[2] ?? ``),
                    b: Pa(r[3] ?? ``),
                    a: Fa(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = kb.hex6.exec(t))
                  ? {
                      r: Pa(r[1] ?? ``),
                      g: Pa(r[2] ?? ``),
                      b: Pa(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = kb.hex4.exec(t))
                    ? {
                        r: Pa(`${r[1]}${r[1]}`),
                        g: Pa(`${r[2]}${r[2]}`),
                        b: Pa(`${r[3]}${r[3]}`),
                        a: Fa(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = kb.hex3.exec(t))
                      ? {
                          r: Pa(`${r[1]}${r[1]}`),
                          g: Pa(`${r[2]}${r[2]}`),
                          b: Pa(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Pa(e) {
  return parseInt(e, 16);
}
function Fa(e) {
  return Pa(e) / 255;
}
function Ia(e) {
  let t = Ab.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return {
    r: parseFloat(n),
    g: parseFloat(r),
    b: parseFloat(i),
    a: a ? parseFloat(a) : 1,
  };
}
function La(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045
    ? e / 12.92
    : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ra({ r: e, g: t, b: n, a: r }) {
  return { r: La(e), g: La(t), b: La(n), a: r };
}
function za(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308
    ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055)
    : e * 12.92;
}
function Ba({ r: e, g: t, b: n, a: r }) {
  return { r: za(e), g: za(t), b: za(n), a: r };
}
function Va({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ha(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ua({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ha(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Wa(e) {
  return Pb(Nb(e));
}
function Ga(e) {
  return Mb(jb(e));
}
function Ka(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ya({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = qa(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) &&
            e.hasOwnProperty(`g`) &&
            e.hasOwnProperty(`b`)
              ? Ya(e)
              : Xa(e)),
    i
  );
}
function qa(e) {
  let t = Na(e);
  if (t) return t.format === `hsl` ? Xa(t) : t.format === `hsv` ? Ja(t) : Ya(t);
}
function Ja(e) {
  let t = Oa(e.h, e.s, e.v);
  return {
    ...wa(t.r, t.g, t.b),
    ...t,
    format: `rgb`,
    a: e.a === void 0 ? 1 : Za(e.a),
  };
}
function Ya(e) {
  let t = Sa(e.r, e.g, e.b);
  return {
    ...wa(t.r, t.g, t.b),
    ...t,
    format: `rgb`,
    a: e.a === void 0 ? 1 : Za(e.a),
  };
}
function Xa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = ga(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = ga(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = va(e.s)),
    (r = ga(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = va(e.l)),
    (i = Ea(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Za(e) {
  return (
    (e = parseFloat(e)),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
  );
}
function Qa() {
  return Dv.location.origin === `https://screenshot.framer.invalid`;
}
function $a({ children: e }) {
  if (S(Jb).top) return E(g, { children: e });
  let t = M({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = M({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    r = M(new Set()).current,
    i = M({
      getLayoutId: C(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (
          !a &&
          !r.has(c) &&
          (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c)
        )
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0),
              (t.current.byLayoutId[c] = c),
              (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            U(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return (
                (n.current[o][e] = u),
                (n.current.byLastId[c] = u),
                r.add(u),
                u
              );
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return (
            (n.current[o][e] = t),
            (n.current.byLastId[i] = t),
            r.add(t),
            t
          );
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = eo(
            p,
            (t.current.count[o][p] ?? -1) + 1,
            r,
          );
        if (
          ((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)
        ) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 &&
                (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: C(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: {
            ...t.current.byPossibleId,
            ...n.current.byPossibleId,
          },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return E(Jb.Provider, { value: i, children: e });
}
function eo(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function to({ enabled: e = !0, ...t }) {
  let n = S(Jb),
    r = s(() => ({ ...n, enabled: e }), [e]);
  return E(Jb.Provider, { ...t, value: r });
}
function no(e) {
  let t = M(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ro(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${io(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: Xb,
    children: [
      E(`div`, { className: `text`, style: Qb, children: r }),
      i && E(`div`, { className: `text`, style: $b, children: i }),
    ],
  });
}
function io(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function ao() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function oo() {
  let [e] = A(() => ao());
  return e;
}
function so(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function co(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of dx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function lo(e, t) {
  try {
    let n = new URL(e);
    return (
      t
        ? n.searchParams.set(`scale-down-to`, `${t}`)
        : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function uo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < fx) continue;
    let n = lo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${lo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function fo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of ux) {
    let n = lo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function po(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``))
    return { src: n, srcSet: void 0 };
  if (e) {
    let r = fo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return {
      src: i?.src,
      srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `),
    };
  } else return { src: n, srcSet: uo(n, t, co(t.pixelWidth, t.pixelHeight)) };
}
function mo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: pt(sx.imagePlaceholderSvg),
  };
}
function ho(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function go(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function _o(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...lx,
    objectPosition: go(e.positionX, e.positionY),
    objectFit: ho(e.fit),
  };
}
function vo(e) {
  let t = d.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n],
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n],
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function yo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = sx.useImageSource(e, t, n),
    s = _o(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = vo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : po(e.nodeFixedSize, e, o);
  return E(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function bo({ image: e, containerSize: t, nodeId: n }) {
  let r = d.useRef(null),
    i = sx.useImageElement(e, t, n),
    a = _o(e);
  return (
    d.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    E(`div`, { ref: r, style: { display: `contents`, ...lx } })
  );
}
function xo({ nodeId: e, image: t, containerSize: n }) {
  let r = d.useRef(null),
    i = sx.useImageSource(t, n, e);
  return (
    d.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = _o(t);
      sx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    E(`div`, { ref: r, style: { display: `contents`, ...lx } })
  );
}
function So({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (V(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = rt(t.backgroundSize) ? t.backgroundSize : 1,
        n = {
          width: Math.round(e * t.pixelWidth),
          height: Math.round(e * t.pixelHeight),
        },
        o = pa(e * (t.pixelWidth / 2)),
        s = sx.useImageSource(t, n);
      ((r = {
        ...px,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: go(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? sx.canRenderOptimizedCanvasImage(sx.useImageSource(t))
            ? E(xo, { image: t, ...n })
            : E(bo, { image: t, ...n })
          : E(yo, {
              image: t,
              avoidAsyncDecoding: J.current() === J.export,
              ...n,
            });
  let o = a ? px : (r ?? { ...px, ...mo() });
  return i
    ? E(L.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : E(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function Co(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0),
        (s = r.bottom || 0),
        (c = r.left || 0),
        (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function wo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...lx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), E(L.div, { style: n }))
    : (Co(e, n, !1),
      E(L.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function To(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Eo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !hx.isImageObject(t)) return;
  let r = null;
  if (((r = V(n) ? { alt: ``, src: n } : Sb.get(t, null)), hx.isImageObject(r)))
    return To(r, e);
}
function Do(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Oo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function ko(e) {
  return e != null && typeof e != `boolean` && !Do(e);
}
function W(e) {
  return Number.isFinite(e);
}
function Ao(e) {
  return (Math.PI / 180) * e;
}
function jo(e) {
  return ot(e) ? !1 : e === 2 || e === 5;
}
function Mo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function No(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return Po(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function Po(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      Kt(e, `unknown constraint key`);
  }
}
function Fo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(No(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(No(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Io(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(No(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(No(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Lo(e, t, n, r, i) {
  let a = Io(W(e) ? e : bx, n, r, i),
    o = Fo(W(t) ? t : xx, n, r, i);
  return (
    W(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (W(n.left) && W(n.right)
        ? (o = a / n.aspectRatio)
        : (W(n.top) && W(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Ro(e, t) {
  return !W(e) || !W(t) ? null : e + t;
}
function zo(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Bo(e) {
  return !e._constraints || zo(e) ? !1 : e._constraints.enabled;
}
function Vo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    W(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    W(n) && W(r) ? { width: n, height: r } : null
  );
}
function Ho(e) {
  let t = Vo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return W(n) && W(r) ? { x: n, y: r, ...t } : null;
}
function Uo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Bo(e) || r) return Ho(e);
  let i = Wo(e),
    a = Go(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return yx.toRect(i, o, null, n, null);
}
function Wo(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: a,
      _constraints: o,
      size: s,
    } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = vx.quickfix({
      left: W(t),
      right: W(n),
      top: W(r),
      bottom: W(i),
      widthType: Mo(c),
      heightType: Mo(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`)
      ? ((h = 3), (p = e))
      : c === `auto`
        ? (h = 2)
        : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) &&
      ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) &&
      ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Go(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ko() {
  return d.useContext(Sx).parentSize;
}
function qo(e) {
  return typeof e == `object`;
}
function Jo(e) {
  return qo(e) ? e.width : e;
}
function Yo(e) {
  return qo(e) ? e.height : e;
}
function Xo(e, t) {
  return E(Cx, { parentSize: t, children: e });
}
function Zo(e) {
  return Uo(e, Ko(), !0);
}
function Qo({ width: e, height: t }) {
  return (
    e === `auto` || e === `min-content` || t === `auto` || t === `min-content`
  );
}
function $o(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth)
      return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function es(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? L[e] : L.div;
}
function ts(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function ns(e, t, n = Tx) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Ex) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(
            `not injecting CSS: the document is missing a <head> element`,
          );
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Ex = e.sheet;
        else {
          console.warn(
            `not injecting CSS: injected <style> element does not have a sheet`,
            e,
          );
          return;
        }
      }
      t = Ex;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function rs() {
  return Qa() ? J.preview : J.current();
}
function is(e) {
  return typeof e == `number`
    ? e
    : e.startsWith(`--`)
      ? Z.variable(e)
      : e === ``
        ? `""`
        : e;
}
function as(e) {
  return e !== Jx && e !== Yx;
}
function os(e) {
  for (let t in e) if (as(t) && e?.[t] === !0) return !0;
  return !1;
}
function ss(e, t, n, r, i) {
  let a = d.useRef(null),
    o = d.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t],
    ),
    s = d.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !os(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n],
    ),
    c = d.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (os(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t],
    );
  return d.useMemo(
    () => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }),
    [o, s, c, i],
  );
}
function cs(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return ls(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return us(r);
    case `lower-roman`:
    case `upper-roman`:
      return fs(r);
    default:
      return ls(r);
  }
}
function ls(e) {
  return String(e).length;
}
function us(e) {
  let t = 1;
  for (; ds(t) < e;) t++;
  return t;
}
function ds(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function fs(e) {
  let t = 0;
  for (let n of rS) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function ps(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function ms(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function hs() {
  return J.current() === J.preview ? _S.value : gS.value;
}
function gs(e) {
  return Ax(e, hs, `framer-lib-combinedCSSRules`);
}
function _s(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function vs(e, t) {
  let n = {};
  return (
    J.current() === J.canvas &&
      _s(n, vS ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function ys(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function bs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = d.Children.map(t, (e) =>
        d.isValidElement(e) ? d.cloneElement(e, { _forwardedOverrides: n }) : e,
      )),
    { props: e, children: t }
  );
}
function xs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Ss(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: a,
      __fromCodeComponentNode: o = !1,
      drag: c,
    } = e,
    { getLayoutId: l, enabled: u } = S(Jb);
  return s(() => {
    if (!u) return e.layoutId;
    let s = t || e.layoutId;
    if (!s && (c || !i || o)) return;
    let d = s || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function Cs() {
  let [e, t] = d.useState(0);
  return d.useCallback(() => t((e) => e + 1), []);
}
function ws(e) {
  let t = Cs();
  h(() => {
    let n = e?.current;
    if (n)
      return (
        xS?.observeElementWithCallback(e.current, t),
        () => {
          xS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Ts(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(SS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Es)
    .map(Ds);
}
function Es(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Ds(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== `contents`
  )
    return e;
  let t = [...e.children].find(Es);
  return t ? Ds(t) : e;
}
function Os(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = S(yS),
    l = J.current() === J.canvas;
  Ay(() => {
    !l ||
      c ||
      s ||
      (t.current &&
        i &&
        a &&
        o &&
        sx.queueMeasureRequest(ys(i), t.current, n(t.current)));
  });
}
function ks(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && sx.queueMeasureRequest(ys(t.id), t, Ts(t));
}
function As(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  TS && t && (e.translateZ = CS);
}
function js(e) {
  ((e.willChange = `transform`), Ms(e, !0));
}
function Ms(e, t) {
  let n = J.current() === J.canvas;
  if (!TS || !n) return;
  let r = (V(e.transform) && e.transform) || ``;
  t
    ? r.includes(wS) || (e.transform = r + wS)
    : (e.transform = r.replace(wS, ``));
}
function Ns(e, t, n, r = !0) {
  if (!e) return;
  let i = ex(e.style),
    a = n || i[t],
    o = () => {
      Ps(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Ps(e) {
  return V(e) || rt(e) || st(e);
}
function Fs(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Is(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Fs(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Ls(e, t) {
  let n = [e, t];
  return kS.test(e) ? e : Is(1e3, AS, n, () => OS.multiplyAlpha(e, t));
}
function Rs(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Ls(e.value, t) }))
  );
}
function zs(e, t) {
  let n = 0;
  return (
    Rs(e, t).forEach((e) => {
      n ^= DS(e.value) ^ e.position;
    }),
    n
  );
}
function Bs(e) {
  return e && jS.every((t) => t in e);
}
function Vs(e) {
  return e && MS.every((t) => t in e);
}
function Hs({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Lb(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = Sb.get(e, null)),
      typeof e == `string` || Lb(e)
        ? (n.background = e)
        : PS.isLinearGradient(e)
          ? (n.background = PS.toCSS(e))
          : IS.isRadialGradient(e)
            ? (n.background = IS.toCSS(e))
            : q.isColorObject(e) &&
              (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Us(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Ws(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Gs(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    P(n)
      ? (t.cornerShape = se(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    e._border?.borderWidth || G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    Hs(e, t),
    t
  );
}
function Ks(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof ex(e)[t] == `function` &&
        t.startsWith(`on`) &&
        !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function qs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (RS.has(t)) return `pointer`;
}
function Js(e) {
  return Ys(e) ? !0 : e.style ? !!Ys(e.style) : !1;
}
function Ys(e) {
  return zS in e && (e[zS] === `scroll` || e[zS] === `auto`);
}
function Xs(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = I(e.minWidth),
    h = I(e.minHeight),
    g = I(e.maxWidth),
    _ = I(e.maxHeight);
  return {
    top: I(n),
    left: I(t),
    bottom: I(r),
    right: I(i),
    width: I(a),
    height: I(o),
    size: I(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Zs(e) {
  let t = S(yS),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Xs(e),
    s = Zo(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor =
      e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !Ks(e) && !e.__fromCanvasComponent && !Js(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let f = d.Children.count(e.children) > 0 &&
      d.Children.toArray(e.children).every(
        (e) => typeof e == `string` || typeof e == `number`,
      ) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Gs(e);
  (a === void 0 &&
    !i &&
    (Us(p) || (c.width = BS.width), Ws(p) || (c.height = BS.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (Bo(o) &&
    s &&
    !Qo(e) &&
    (m = {
      left: s.x,
      top: s.y,
      width: s.width,
      height: s.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(c, f, r, p, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    ES.applyWillChange(e, c, !0));
  let h = c;
  c.transform || (h = { x: 0, y: 0, ...c });
  let g = ao();
  return (
    e.positionSticky
      ? (!g || sx.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = sx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function Qs(e) {
  let t = {};
  for (let n in e)
    (Pe(n) || nx(n)) && !VS.has(n)
      ? (t[n] = ex(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof ex(e)[n] != `boolean` &&
          !e.transition &&
          (t.transition = ex(e)[n]));
  return t;
}
function $s(e) {
  return `data-framer-name` in e;
}
function ec(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function tc(e) {
  return E(L.div, { layoutId: WS, style: qS, children: e.children });
}
function nc(e, t) {
  tt(e) ? e(t) : rc(e) && (e.current = t);
}
function rc(e) {
  return H(e) && `current` in e;
}
function ic() {
  let e = no(() => new Set()),
    t = no(() => new Map());
  return no(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function ac(e) {
  let t = M(null),
    n = ic();
  return no(() => (rc(e) ? n(e) : tt(e) ? n(t, e) : n(t)));
}
function oc(e, t, n) {
  let r = M(),
    i = M();
  (oi(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}],
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1),
      e.unobserve(r.current),
      e.observe(t),
      (r.current = t)));
}
function sc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new JS({ root: r?.current, rootMargin: a, threshold: o })),
      e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function cc(e, t, n) {
  let r = no(() => `${n.rootMargin}`),
    i = S(YS),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  oc(
    e,
    (e) => {
      if (a && e !== null) return sc(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c],
  );
}
function lc(e, t, n) {
  let r = d.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: a,
      threshold: o,
      rootMargin: s = `0px 0px 0px 0px`,
    } = n;
  XS(
    e,
    d.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = dc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t],
    ),
    { threshold: ZS, rootMargin: s, enabled: i ?? !0 },
  );
}
function uc(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Dv.innerHeight);
}
function dc(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r,
) {
  return e.height === 0 ? n : n && uc(t, e) >= r;
}
function fc() {
  return new Map();
}
function pc() {
  return no(fc);
}
function mc(e, t = []) {
  let { register: n, deregister: r } = S(nC);
  h(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function hc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function gc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (W(t.originX) && (r.originX = t.originX),
      W(t.originY) && (r.originY = t.originY),
      W(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (W(n.originX) && (r.originX = n.originX),
      W(n.originY) && (r.originY = n.originY),
      W(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function _c(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function vc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return cC.PushLeft;
    case `left`:
      return cC.PushRight;
    case `bottom`:
      return cC.PushUp;
    case `top`:
      return cC.PushDown;
  }
}
function yc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return cC.OverlayLeft;
    case `left`:
      return cC.OverlayRight;
    case `bottom`:
      return cC.OverlayUp;
    case `top`:
      return cC.OverlayDown;
  }
}
function bc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return cC.FlipLeft;
    case `left`:
      return cC.FlipRight;
    case `bottom`:
      return cC.FlipUp;
    case `top`:
      return cC.FlipDown;
  }
}
function xc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return Cc(e, t.transition, t.component);
    case `removeOverlay`:
      return wc(e);
    case `add`:
      return Tc(e, t.key, t.transition, t.component);
    case `remove`:
      return Oc(e);
    case `update`:
      return Sc(e, t.key, t.component);
    case `back`:
      return Ec(e);
    case `forward`:
      return Dc(e);
    default:
      return;
  }
}
function Sc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function Cc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function wc(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Tc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Nc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = jc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = kc(e, t, c),
    p = Mc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Ec(e) {
  let t = { ...e.containers },
    n = Oc(e);
  if (n) return ((n.containers = t), n);
}
function Dc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Tc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Oc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (U(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Ac(e, r, n),
    u = Mc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function kc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    ((r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Ac(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] =
          u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1),
        (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function jc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Mc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Pc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Nc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Pc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Fc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Fc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Fc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Fc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Fc(e, t, n) {
  let r = {},
    i = {};
  return (
    uC.forEach((e) => {
      ((r[e] = aC[e]), (i[e] = { ...n, from: aC[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${ex(aC)[a]}%` : ex(aC)[a];
        ((ex(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Ic(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Lc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Rc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : mC;
}
function zc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Bc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Vc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Hc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Uc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Wc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Gc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return mC;
}
function Kc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function qc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Jc(e) {
  return d.Children.map(e.component, (t) => {
    if (!ko(t) || !Oo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? H(t.props.style) : !0;
    return (
      i &&
        (`width` in t.props && (n.width = `100%`),
        o && (n.style.width = `100%`)),
      a &&
        (`height` in t.props && (n.height = `100%`),
        o && (n.style.height = `100%`)),
      d.cloneElement(t, n)
    );
  });
}
function Yc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Xc(e, t) {
  let n = Ge(),
    r = le();
  return E(pC, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Zc(e) {
  return H(e) || tt(e);
}
function Qc(e) {
  return !!e && _C in e && e[_C] === !0;
}
function $c(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return nt(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return ot(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return rt(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = H(e.defaultValue) ? e.defaultValue : {};
        return (H(e.controls) && el(t, e.controls), t);
      }
      case `array`:
        return it(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function el(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!ot(i) || Qc(r)) continue;
    let a = $c(r);
    ot(a) || (e[n] = a);
  }
}
function tl(e) {
  if (H(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function nl(e, t) {
  Zc(e) && el(tl(e), t);
}
function rl(e, t) {
  Object.assign(e, { [vC]: t });
}
function il(e, t, n) {
  (Object.assign(e, { propertyControls: t }),
    nl(e, t),
    n !== void 0 && rl(e, n));
}
function al(e) {
  return e.propertyControls;
}
function ol(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`,
    );
    t.push(...n);
  }
  return t;
}
function sl(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`)
    .join(`, `);
  n && (t.textShadow = n);
}
function cl(e, t) {
  let n = [];
  (W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...ol(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function ll(e, t) {
  W(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function ul(e, t) {
  (ll(e, t), cl(e, t));
}
function dl(e, t) {
  let n,
    r = (...r) => {
      (Dv.clearTimeout(n), (n = Dv.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      Dv.clearTimeout(n);
    }),
    r
  );
}
function fl(...e) {
  return e.filter(Boolean).join(` `);
}
function pl(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = ml(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function ml(e) {
  if (e.startsWith(OC)) return e.substr(kC);
}
function hl(e, t, n) {
  let r = i.map(e, (e) => (T(e) ? o(e, t) : e));
  return n ? r : E(g, { children: r });
}
function gl(e) {
  let t = no(() => _l(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function _l(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = vl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = vl(t)));
    },
    r = !1;
  function a(a, s) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`,
      );
    return (
      (r = !0),
      i.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      i.map(a, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = tt(s) ? s(e.props) : s;
          return o(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return E(g, { children: a(e, t) });
  };
  return (
    (s.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function vl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (nc(n, e), nc(t, e));
  };
}
function yl(e, t, n, r, i, a, o, s) {
  let c = d.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !d.isValidElement(l))
    return (
      console.warn(
        `PropertyOverrides: expected exactly one React element for a child`,
        t,
      ),
      o(t, n)
    );
  let u = [],
    f = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Cl(l.props, n)) {
      f.push(t);
      continue;
    }
    let r = Sl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = Sl([i, ...f], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = E(
        jC.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c,
      ),
      f = xl(e, a, r);
    (f.length
      ? (U(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = E(
          `div`,
          {
            className: `${MC} ${f.join(` `)}`,
            suppressHydrationWarning: !0,
            children: d,
          },
          c,
        )))
      : U(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    U(
      !s || m.length === 1,
      `Must render exactly one branch when activeVariantId is given`,
    ),
    s ? m : [...m, E(`div`, { className: NC }, `property-overrides-separator`)]
  );
}
function bl(e) {
  return e.split(`-`)[2];
}
function xl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${bl(a)}`);
  }
  return r;
}
function Sl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Cl(e, t) {
  for (let n of Object.keys(t)) if (!Nt(e[n], t[n], !0)) return !0;
  return !1;
}
function wl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Tl(e) {
  return d.forwardRef(({ optimized: t, ...n }, r) => {
    let i = d.useContext(AC),
      a = d.useContext(jC)?.variants,
      o = n[VC];
    o && !Rn() && zC.setAll(o, a, t ? n : null, i);
    let s = UC(n);
    return E(e, { ref: r, ...n, ...s });
  });
}
function El(e) {
  return V(e) || Array.isArray(e);
}
function Dl(e) {
  return e in KC;
}
function Ol(e, t) {
  let n = no(() => ({ values: GC(t ? e : void 0) }));
  return (
    d.useEffect(() => {
      if (!t)
        for (let e of WC) {
          let t = KC[e];
          ot(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function kl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o,
) {
  let c = ze(),
    l = no(GC),
    d = M(!1),
    f = XC(),
    p = M(null),
    m = C(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? KC : i,
        o = t ? i : KC;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          WC.map((t) => {
            if (!(c && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? KC[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && B(l[t], i, r);
                })
              );
          }),
        )),
        p.current
      );
    }, [i, r, n, c]),
    [g, _] = A(!1),
    v = M(!1),
    y = C(async () => {
      !e || !v.current || (await m(), await f(t ?? 0), y());
    }, [m, f, e, t]),
    b = C(() => {
      v.current || ((v.current = !0), u(() => _(!0)), y());
    }, [y]),
    x = C((e = !0) => {
      (WC.forEach((e) => {
        l[e].stop();
      }),
        WC.forEach((e) => {
          l[e].set(KC[e]);
        }),
        (d.current = !1),
        e && ((v.current = !1), u(() => _(!1))));
    }, []),
    S = e && i,
    w = C(() => {
      document.hidden ? x(!1) : v.current && ((v.current = !1), b());
    }, [b, x]);
  (h(() => {
    if (S)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [S, w]),
    h(() => {
      (S && a) || (S ? b() : x());
    }, [b, x, a, S]),
    h(() => () => x(), [x]));
  let T = M(!1),
    E = C(async () => {
      p.current && (await p.current, !T.current && x());
    }, [x]);
  XS(
    o,
    C(
      (e) => {
        e.isIntersecting ? ((T.current = !0), b()) : ((T.current = !1), E());
      },
      [b, E],
    ),
    { enabled: S && a },
  );
  let D = g || !a;
  return s(() => ({ values: l, style: S && D ? qC : JC }), [S, D]);
}
function Al(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function jl(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: a = !1,
      parallaxTransformEnabled: o,
    } = e,
    s = d.useRef(null),
    c = ze(),
    l = d.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Al(e, s.current, r, i, a)),
      [r, i, a],
    ),
    { scrollY: u } = Ne(),
    f = Ve(u, l),
    p = be(a && s.current === null ? `hidden` : n),
    m = be(0),
    h = S(YS);
  return (
    oc(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = sc(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            F.update(() => {
              (f.set(l(u.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o],
    ),
    Bt(() => {
      o && f.set(0);
    }),
    { values: { y: c || !o ? m : f }, style: o ? { ...qC, visibility: p } : JC }
  );
}
function Ml(e) {
  return typeof e == `object` && !!e;
}
function Nl(e) {
  if (Ml(e)) return e?.transition;
}
function Pl(e, t, n, r, i, a) {
  let o = Nl(e);
  return Promise.all(
    WC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Ml(e) ? (e?.[s] ?? KC[s]) : KC[s];
          if ((P(u) && (u = u.get()), !rt(u))) return c();
          let d = qe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (V(i) && !l?.hasAnimated && Dv.MotionHandoffAnimation) {
            let e = Dv.MotionHandoffAnimation(i, s, F);
            e && (f = e);
          }
          a
            ? l.set(u)
            : B(l, u, {
                ...o,
                velocity: 0,
                startTime: f,
                onComplete: () => c(),
              });
        }),
    ),
  );
}
function Fl(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: a,
  },
  o,
  c,
  l,
  u,
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = Oe(),
    g = M({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = no(() => {
      let e = d ?? l;
      if (!H(e)) return { values: GC() };
      let t = {};
      for (let n in e) {
        let r = H(e) ? e[n] : void 0;
        rt(r) && (t[n] = r);
      }
      return { values: GC(t) };
    });
  oc(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = qe.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!Dl(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, rt(t) ? t : KC[e]);
        }
      }
    },
    [f],
  );
  let v = ze();
  oc(o, (e) => {
    if (!c) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            Pl(f, _, v, o, u).then(() =>
              Object.assign(g.current, { running: !1 }),
            ))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              Pl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Nt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      Pl(f, _, v, o, u, !n).then(() =>
        Object.assign(g.current, { running: !1 }),
      ));
  });
  let y = c && f;
  return s(() => ({ values: _.values, style: y ? qC : JC }), [y]);
}
function Il(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;)
    ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Ll(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = Il(o.current, document.documentElement) - $C - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(
        Math.max(c, 0),
        u === void 0 ? d : Math.min(d, Math.max(u - 1, 0)),
      ),
      n?.(a));
  }
  return i;
}
function Rl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function zl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = zt();
  d.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return pe((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0)
        return;
      let u = Rl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < ew) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Bl(e, t, n) {
  let r = Ll(e, t),
    i = [...nw],
    a = r[0];
  if (!rt(a)) return rw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!rt(e)) return rw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Vl(e) {
  return {
    x: e?.x ?? KC.x,
    y: e?.y ?? KC.y,
    scale: e?.scale ?? KC.scale,
    opacity: e?.opacity ?? KC.opacity,
    transformPerspective: e?.transformPerspective ?? KC.transformPerspective,
    rotate: e?.rotate ?? KC.rotate,
    rotateX: e?.rotateX ?? KC.rotateX,
    rotateY: e?.rotateY ?? KC.rotateY,
    skewX: e?.skewX ?? KC.skewX,
    skewY: e?.skewY ?? KC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Hl({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: a,
  ...o
}) {
  return d.useMemo(
    () => ({
      initial: r ?? Vl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Vl({ opacity: t }),
      exit: i ?? Vl(),
    }),
    [a, o, r, i, e, t, n],
  );
}
function Ul(e, t) {
  let n = ze(),
    r = Hl(e),
    i = e.styleAppearEffectEnabled,
    a = Ol(i ? r.initial : r.animate, i),
    o = d.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = zt(),
    l = d.useRef(),
    u = d.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = qe.get(t.current);
      l.current = Promise.all(
        WC.map((e) => {
          s && a.values[e].set(r.initial[e] ?? KC[e]);
          let t = o[e] ?? KC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (rt(t) && a.values[e].set(t), r());
              else {
                let n = {
                  restDelta: e === `scale` ? 0.001 : void 0,
                  ...c,
                  onComplete: () => r(),
                };
                typeof t == `number` && B(a.values[e], t, n);
              }
            })
          );
        }),
      );
    }, []),
    f = e.animateOnce && o.current.lastAppearState === !0;
  lc(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled:
        !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !f,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    },
  );
  let p = e.targets && i && !e.scrollDirection;
  return (
    d.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return pe((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Bl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit,
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = ge(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = ex(r)[l];
        d && u(d);
      });
    }, [c, p]),
    zl(e.scrollDirection, (e) => void u(e ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    Bt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of WC) a.values[e].set(r.initial?.[e] ?? KC[e]);
    }),
    s(() => ({ values: a.values, style: i ? qC : JC }), [i])
  );
}
function Wl(e, t) {
  let n = d.useRef({});
  d.useEffect(() => {
    if (t !== void 0)
      for (let r of $_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = re({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), F.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Gl(e, t) {
  let n = ow();
  return {
    inputRange: Ll(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of WC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Kl(e) {
  let t = ow();
  for (let { target: n } of e) for (let e of WC) t[e]?.push(n[e]);
  return t;
}
function ql(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o,
) {
  let s = ze(),
    c = Ol(aw(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    f = zt();
  return (
    r(() => {
      if (!(l || !u))
        return pe((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = Gl(
            n,
            a * t.containerLength,
          );
          if (r.length !== 0)
            for (let e of WC)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(ge(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    oc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = Kl(n);
        return pe(
          (e, { y: t }) => {
            for (let e of WC)
              (s && e !== `opacity`) ||
                (sw.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(ge(t.progress, sw, r[e])));
          },
          e === `onInView`
            ? { target: t ?? void 0, offset: [`start end`, `end end`] }
            : void 0,
        );
      },
      [f, s, e, u, n, l],
    ),
    Wl(c.values, i),
    Bt(() => {
      if (l) return;
      let e = aw(n, s);
      for (let t of WC) c.values[t].set(e?.[t] ?? KC[t]);
    }),
    d.useMemo(() => ({ values: c.values, style: t ? qC : JC }), [t])
  );
}
function Jl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Yl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (
      n === `__targetOpacity` ||
      n === `__perspectiveFX` ||
      n === `__smartComponentFX`
    )
      continue;
    let r = ml(n);
    if (r) {
      for (let i of lw)
        if (cw[i]?.has(r)) {
          t[i][r] = ex(e)[n];
          break;
        }
    } else t.forwardedProps[n] = ex(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Jl(
      `parallaxTransformEnabled`,
      `speed`,
      t.parallax,
    )),
    (t.styleAppear.styleAppearEffectEnabled = Jl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear,
    )),
    t
  );
}
function Xl(e) {
  return H(e) && fw in e;
}
function Zl(e, t) {
  if (!e || !H(e)) return t;
  for (let n in e) {
    let r = e[n];
    !P(r) || !Dl(n) || (rt(r.get()) && t[n].push(r));
  }
}
function Ql(e) {
  return V(e) || Array.isArray(e);
}
function $l({ presets: e, children: t }) {
  let n = M(e);
  return (
    Nt(e, n.current, !1) || (n.current = e),
    E(mw.Provider, { value: n.current, children: t })
  );
}
function eu({ componentIdentifier: e, children: t }) {
  return t(S(mw)[e] ?? {});
}
function tu() {
  return d.useContext(hw);
}
function nu(e) {
  return (
    e instanceof Error &&
    (e.message.includes(
      `A component suspended while responding to synchronous input.`,
    ) ||
      e.message.includes(`Minified React error #426`))
  );
}
function ru() {
  if (p === void 0 || xw)
    return E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: {
        __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`,
      },
    });
  throw Cw;
}
function iu({ children: e }) {
  return S(Tw) ? E(g, { children: e }) : E(b, { fallback: ww, children: e });
}
function au() {
  return E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: {
      __html: `<!-- Code boundary fallback rendered -->`,
    },
  });
}
function ou(e, t) {
  if (!B_ || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  _n(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function su(...e) {
  console.error(...e);
}
function cu() {
  return J.current() !== J.canvas;
}
function lu({ getErrorMessage: e, fallback: t, children: n }) {
  return cu()
    ? E(uu, {
        fallback: t,
        children: E(Dw, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function uu({ children: e, fallback: t = Ew }) {
  return p === void 0
    ? E(b, { fallback: t, children: e })
    : E(iu, { children: e });
}
function du() {
  return d.useContext(kw);
}
function fu() {
  let e = du();
  return d.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function pu({ children: e, scopeId: t, nodeId: n }) {
  let r = du(),
    i = d.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r],
    );
  return E(kw.Provider, { value: i, children: e });
}
function mu(e, t) {
  return `${Aw}${e}:${t}`;
}
function hu(e, t) {
  return _u(`component`, e, t);
}
function gu(e, t) {
  return _u(`override`, e, t);
}
function _u(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${mu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function vu(e, t, n, r, i, a) {
  let o = bu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function yu(e, t, n, r) {
  return bu(e, t, n, r);
}
function bu(e, t, n, r) {
  return !!(ot(n) || (n === 1 && r && e === t));
}
function xu(e, t, n, r, i, a) {
  let o = du();
  if (ot(t) || ot(n)) return E(Ow, { children: e });
  let { disableCustomCode: s } = yw();
  return s && r
    ? E(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (vu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = E(lu, {
          getErrorMessage: hu.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = E(pu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Su() {
  if (Nw !== void 0 || p === void 0) return;
  let e = Dv.matchMedia(`(any-hover: hover)`);
  ((Nw = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== Nw) {
        Nw = t;
        for (let e of Pw) e();
      }
    }));
}
function Cu() {
  return (Su(), wu());
}
function wu() {
  return Nw ?? !1;
}
function Tu(e) {
  return (
    Pw.add(e),
    Su(),
    () => {
      Pw.delete(e);
    }
  );
}
function Eu(e = !1) {
  let [t, n] = A(e);
  return (
    Ay(function () {
      function e(e = !0) {
        let t = wu();
        e ? u(() => n(t)) : n(t);
      }
      let t = Tu(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function Du(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Ou(e) {
  return !(!e || e.placement || e.alignment);
}
function ku(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      Kt(e);
  }
}
function Au(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${ku(t)}, -100%`;
    case `right`:
      return `0%, ${ku(t)}`;
    case `bottom`:
      return `${ku(t)}, 0%`;
    case `left`:
      return `-100%, ${ku(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function ju(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Vw)) {
      let e = n.getAttribute(Vw);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Mu(e) {
  let { registerCursors: t } = S(Fw),
    n = no(() => e),
    i = j();
  r(() => t(n, i), [t, i]);
}
function Nu(e) {
  return !!(e && typeof e == `object` && Uw in e);
}
function Pu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Fu() {
  return J.current() === J.canvas;
}
function Iu(e) {
  return (
    e !== void 0 &&
    !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`))
  );
}
function Lu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Ru(e, t, n, r) {
  if (V(e)) {
    let i = Iu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Gi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function zu(e) {
  return V(e) && e.startsWith(`data:${Xw}`);
}
function Bu(e) {
  if (zu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Xw.length),
        r = t.searchParams,
        i = r.has(Kw) ? r.get(Kw) : void 0,
        a,
        o = r.get(qw),
        s = r.get(Jw),
        c = r.get(Yw);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        {
          target: n === `none` ? null : n,
          element: i === `none` ? void 0 : i,
          collectionItem: a,
        }
      );
    } catch {
      return;
    }
}
function Vu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Bu(e);
    if (!n?.target) return !1;
    ((r = n.target),
      (i = n.element ?? void 0),
      (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Hu(e) {
  if (!zu(e)) return e;
  let t = Bu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Uu(i) };
}
function Uu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Wu({ children: e }) {
  return E(Zw.Provider, { value: void 0, children: e });
}
function Gu(e, t, n, r, a, o) {
  let c = S(Zw),
    l = fu(),
    u = s(
      () => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }),
      [t, n, l],
    ),
    d = It(),
    f = Rt(),
    { locales: p } = or(),
    m = s(() => {
      let e = Nu(r) ? r : Hu(r);
      if (e) return Ru(e, d, f, p);
    }, [f, r, d, p]),
    h = !!(!Fu() && c?.nodeId && u.nodeId),
    g = C(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Wn(e))) {
            Ju(a.href, ``, `_blank`);
            return;
          }
          m ? a.navigate?.() : Ju(a.href, a.rel, a.target);
        }
      },
      [a, m],
    ),
    v = C(
      (e) => {
        a.href &&
          (e.preventDefault(), e.stopPropagation(), Ju(a.href, ``, `_blank`));
      },
      [a],
    ),
    y = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : Ju(a.href, a.rel, a.target));
      },
      [a, m],
    );
  oc(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h],
  );
  let b = e;
  return (
    h &&
      (i.forEach(e, (e) => {
        qu(e) &&
          (U(
            Ku(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
          ),
          U(
            Ku(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
          ),
          Gw.collectNestedLink(c, u));
      }),
      (b = i.map(e, (e) => {
        if (!qu(e)) return e;
        let t = Yu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && Yu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return _(t, { ...i, ref: a }, n);
      }))),
    E(Zw.Provider, { value: u, children: b })
  );
}
function Ku(e) {
  return !ot(e?.nodeId);
}
function qu(e) {
  return T(e) && (Yu(e.type) !== e.type || Yu(e.props.as) !== e.props.as);
}
function Ju(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Yu(e) {
  return e === `a` ? `span` : Fe(e) && he(e) === `a` ? L.span : e;
}
function Xu(e) {
  e &&
    F.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      F.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(Qw, r)),
          i && t.forEach((e) => e.style.setProperty($w, i)));
      });
    });
}
function Zu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${Qw});
    background-color: var(${$w}, highlight);
}`,
  ];
}
function Qu({ triggerId: e, children: t }) {
  return (
    d.useLayoutEffect(() => {
      e && Xu(e);
    }, [e]),
    t
  );
}
function $u({ component: e, props: t }) {
  let n = S(AC),
    r = _(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return E(FC, { overrides: o, breakpoint: i, children: r });
}
function ed(e) {
  aT = e;
}
function td() {
  return aT;
}
function nd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : nd(e.parentElement, t)
      : null;
}
function rd({ children: e }) {
  return E(iu, { children: e });
}
function id(e) {
  return D(function (t, n) {
    return E(rd, { children: E(e, { ...t, ref: n }) });
  });
}
function ad(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return sd(e, t, o, s, a, c, l, i, r);
}
function od(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Iu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      U(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      U(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Gi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function sd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = Ti(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function cd() {
  let e = S(sT),
    t = Rt()?.pathVariables;
  return e || t;
}
function ld(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(oT))
      if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function ud() {
  return !!$i(`ss-only-routes`);
}
function dd(e) {
  if (p === void 0) return;
  let t = p.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function fd(e) {
  return Qi(`rewrite`, e)?.description === `external`;
}
function pd() {
  if (!yw().checkServerSideRouter) return !1;
  if (dT === void 0) {
    let e = ud();
    ((fT = !e && In() && zn() < 16.4), (dT = e || fT));
  }
  return dT;
}
function md(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: fd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === td() ? `client` : `server` };
}
async function hd(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (fT &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((fT = !1),
      Qi(`ss-only-routes`, t.headers.get(`server-timing`)) || (dT = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return md(t, e);
}
function gd(e, t) {
  cT.has(e) && cT.set(e, t);
}
async function _d(e) {
  await kn(lT);
  try {
    gd(e, await hd(e));
  } catch {
    cT.delete(e);
  }
}
async function vd(e) {
  try {
    let t = await hd(e);
    return (gd(e, t), t);
  } catch {
    return (_d(e), { decision: `server` });
  }
}
function yd(e) {
  if (!pd()) return;
  let t = dd(e);
  if (!t || t.origin !== p.location.origin) return;
  let n = t.href;
  cT.has(n) || cT.set(n, vd(n));
}
function bd(e) {
  let t = dd(e);
  if (!t) return;
  let n = cT.get(t.href);
  return n && !ft(n) ? n : void 0;
}
async function xd(e) {
  let t = dd(e);
  if (!t) return;
  let n = cT.get(t.href);
  if (n) return ft(n) ? Promise.race([n, kn(uT).then(() => void 0)]) : n;
}
function Sd() {
  let e = t.connection || t.mozConnection || t.webkitConnection || {},
    n = t.deviceMemory && t.deviceMemory > hT,
    r,
    i,
    a;
  function o() {
    ((r = e.effectiveType || ``),
      (i = e.saveData || r.includes(`2g`)),
      (a = r === `3g` || n ? gT : _T));
  }
  (e.addEventListener?.(`change`, o), o());
  let s = new IntersectionObserver(u, { threshold: mT }),
    c = 0;
  async function l(e, t) {
    if (i) return;
    yd(e.navigationUrl);
    let { id: n, preload: r } = e,
      a = bT.get(n);
    if (!a?.size || yT.has(n)) return;
    (++c, yT.add(n));
    let o = r()?.catch(() => {});
    (s.unobserve(t), vT.delete(t));
    for (let e of a) (s.unobserve(e), vT.delete(e));
    (a.clear(), bT.delete(n), await o, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = vT.get(e);
      if (!n || yT.has(n.id)) {
        (s.unobserve(e), vT.delete(e));
        continue;
      }
      let r = n.id,
        i = bT.get(r),
        o = bT.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= a) continue;
        (i ? i.add(e) : bT.set(r, new Set([e])), setTimeout(l, pT, n, e));
      } else (i && i.delete(e), o <= 1 && bT.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!yT.has(n))
      return (
        vT.set(e, { id: n, preload: t, navigationUrl: r }),
        s.observe(e),
        () => {
          (vT.delete(e), s.unobserve(e));
        }
      );
  };
}
function Cd(e, t) {
  let n = Iu(e),
    r = {
      href: e === `` || Lu(e, n) ? e : `https://${e}`,
      target: wd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams &&
      ((r.href = Qn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function wd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Td(e, t) {
  console.warn(
    ht(
      `Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`,
    ),
  );
}
function Ed(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Td(
        void 0,
        `Couldn't find collection utils for collection id: "${e.collectionId}"`,
      );
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ft(i) ? i.catch(Td) : i;
  } catch (e) {
    Td(e);
  }
}
async function Dd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      U(a, `unresolvedSlug should be defined`);
      let o = Ed(a, r, n),
        s = ft(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function Od(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Ed(o, r, n);
      ft(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function kd() {
  let e = On();
  return C((t, n, r, i = []) => Od(t, n, r, e, i), [e]);
}
function Ad({
  nodeId: e,
  clickTrackingId: t,
  router: n,
  href: r,
  activeLocale: i,
}) {
  let a = On();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Nu(r) ? r : Hu(r);
      if (!Nu(c))
        return _n(
          `published_site_click`,
          {
            ...s,
            href: o ? jd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`,
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (V(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ft(n) ? await n : n) ?? null;
        }
      }
      return _n(
        `published_site_click`,
        {
          ...s,
          href: o ? jd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`,
      );
    },
    [e, t, n, r, i, a],
  );
}
function jd(e) {
  try {
    let t = new URL(e, Dv.document.baseURI);
    return t.origin === Dv.location.origin
      ? t.pathname + t.search + t.hash
      : t.href;
  } catch {
    return e;
  }
}
function Md(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Nd(e, t, n) {
  return async (r) => {
    let i = Wn(r),
      a = nd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await iy({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function Pd(e, t, n) {
  return async (r) => {
    let i = await Fd(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    Id(t ?? e, r, i.redirectUrl);
  };
}
async function Fd(e) {
  return !e || !pd()
    ? { decision: `client` }
    : bd(e) || (yd(e), (await xd(e)) ?? { decision: `server` });
}
async function Id(e, t, n) {
  (await iy({
    priority: `user-blocking`,
    ensureContinueBeforeUnload: !0,
    continueAfter: `paint`,
  }),
    t?.(),
    p.location.assign(Ld(e, n)));
}
function Ld(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, p.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function Rd(e) {
  let t = Si(e);
  if (t && p.location.pathname === t) {
    let e = new URL(p.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return p.location.href;
}
function zd(e, t, n) {
  if (t || p === void 0) return;
  let r = Rd(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (
    i.origin === a.origin &&
    !(i.pathname === a.pathname && i.search === a.search)
  )
    return i.href;
}
function Bd(e, t, n, r, i, a, o, s) {
  if (!n) return Cd(e, r);
  let c = od(t, e, s, o);
  if (!c) return Cd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Cd(e, r);
  let m = Ti(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !V_,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = wd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = zd(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = Pd(m, _, (e) =>
      Md(
        t,
        l,
        () =>
          i(l, v, {
            priority: `user-blocking`,
            yieldBeforePreload: !1,
            shouldLoadRouteData: !g,
          }),
        d,
        f,
        r.smoothScroll,
        e,
      ),
    );
  return {
    href: m,
    target: h,
    onClick: Nd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && ld(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, {
        priority: `background`,
        yieldBeforePreload: !0,
        shouldLoadRouteData: !g,
      }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function Vd(e, t, n) {
  let r = Hd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (tt(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (tt(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Hd(e, t) {
  let n = H(e) ? e : void 0,
    r = n && !at(n),
    i = t && !at(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Ud(e, t, n) {
  if (!(t && Mn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Wd } : { ...i, onTap: r }) : e;
}
function Wd(e) {
  let t = nd(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Gd(e, t, n, r, i, a) {
  let o = Nu(e) ? e : Hu(e);
  if (!Nu(o)) return V(e) ? Cd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (ft(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return Ti(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function Kd() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t +=
          `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
            Math.floor(Math.random() * 62),
          );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function qd() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(
        new Blob([`(`, Kd(), `)()`], { type: `application/javascript` }),
      ),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success
          ? e({ secret: t.data.secret, hash: t.data.hash })
          : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({
        salt: CT,
        difficulty: wT,
        tokenLength: TT,
        maxTime: ET,
      }));
  });
}
function Jd(e) {
  let t = new Set();
  for (let n of e.elements)
    !Yd(n) || n.disabled || !n.name || n.name.startsWith(DT) || t.add(n.name);
  return Array.from(t);
}
function Yd(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function Xd(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function Zd(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [
        `utm_source`,
        `utm_medium`,
        `utm_campaign`,
        `utm_term`,
        `utm_content`,
        `gclid`,
      ].forEach((n) => {
        typeof t[n] == `string` && e.append(n, t[n]);
      });
    }
  } catch {}
}
function Qd() {
  let e = d.useContext(BT),
    t = d.useMemo(
      () =>
        kT.map((e) => ({
          inputRef: d.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      [],
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: d.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${DT}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: d.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [jT.name]: e.originalName,
                [jT.value]: o,
                [jT.setAttribute]: e.methodsUsed.setAttribute,
                [jT.valueProperty]: e.methodsUsed.valueProperty,
                [jT.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [jT.inputChangeTimeSinceModuleLoad]:
                  e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [jT.wasFilledBeforeHydration]:
                  e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${DT}_${MT.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${DT}_${MT.fieldCount}`, r.toString()),
          n.append(`${DT}_${MT.fieldFilledCount}`, i.toString()),
          n.append(`${DT}_${MT.hpVersion}`, OT),
          n.append(`${DT}_${MT.siteId}`, e || ``),
          n.append(`${DT}_${MT.timeToSubmissionSinceModuleLoad}`, NT()));
      },
      [t, e],
    ),
  };
}
function $d({ states: e }) {
  return E(g, {
    children: e.map((e) => E(PT, { inputStateRef: e }, `hp_${e.originalName}`)),
  });
}
function ef({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          tf(e, t, n);
        })
      : tf(e.pageviewEventData.current, t, n));
}
function tf(e, t, n) {
  return _n(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`,
  );
}
function nf({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? zT : RT;
    case `incomplete`:
      return e === `error` ? zT : LT;
    case `submit`:
      return FT;
    case `success`:
      return IT;
    case `error`:
      return zT;
    default:
      Kt(t);
  }
}
function rf({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function af(e) {
  e.preventDefault();
}
function of(e, t) {
  let n = Lu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t &&
      t.current &&
      (t.current.appendChild(r), r.click(), r.remove()));
}
function sf(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (sf(t)) return !0;
  return !1;
}
async function cf(e, t, n, r) {
  let i = await qd();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = {
      "Framer-Site-Id": r,
      "Framer-POW": i.secret,
      "Framer-Form-Fields": Xd(n, t),
    },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw lf(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function lf(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    H(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function uf({ EditorBar: e, fast: t = !1 }) {
  let n = S(BT),
    r = l(W_, t ? WT : GT, K_),
    i = yw(),
    a = s(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : E(UT, {
        children: E(b, { children: E(e, { framerSiteId: n, features: a }) }),
      });
}
function df({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = M(),
    i = M(),
    a = M(t),
    o = M(null);
  ((a.current = t),
    h(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = A(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current
          ? pf(
              a.current,
              a.current.currentRouteId,
              a.current.currentPathVariables,
            )
          : ``,
      resolveRoute: (e) =>
        a.current ? pf(a.current, e.webPageId, e.pathVariables) : ``,
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && ff(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return E(KT.Provider, { value: s, children: n });
}
async function ff(e, t) {
  if (!vn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    _n(
      `published_site_trigger_invoke`,
      { ...n, ...t, trackingId: t.trackingId || null },
      `lazy`,
    );
}
function pf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? pr(r.path, n) : r.path) : ``;
}
function mf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function hf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((qT = e.timeZone), (JT = e.locale));
}
function gf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Yr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Br()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t,
  );
}
function _f(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = Br();
  Yr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i,
  );
}
function vf(e, t, n, r) {
  let i = Br();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Yr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      Ti(t, n),
    ));
}
function yf() {
  return zn() >= 17 ? QT : ZT;
}
function bf(e = Ef) {
  let t = (e) => {
    e.persisted && kf();
  };
  In() && (p.addEventListener(`pageshow`, t), (XT = Date.now() - yf()));
  let n = xf(),
    r = Df(e);
  return function () {
    (p.removeEventListener(`pageshow`, t), n(), r());
  };
}
function xf() {
  let e = p.history.scrollRestoration;
  return (
    (p.history.scrollRestoration = `manual`),
    function () {
      p.history.scrollRestoration = e;
    }
  );
}
function Sf(e) {
  return H(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Cf() {
  return { x: p.scrollX, y: p.scrollY };
}
function wf() {
  let e = Br();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Sf(t)) return t;
}
function Tf(e) {
  let t = Br();
  t && (qr({ ...t, scrollPosition: e }), In() && (XT = Date.now()));
}
function Ef(e, t = !1) {
  let n = wf();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (In() && !t) {
      let e = yf();
      if (Date.now() - XT < e) return;
    }
    Tf(e);
  }
}
function Df(e) {
  let t = () => {
      e(Cf());
    },
    n = () => {
      e(Cf(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r),
    p.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r),
      p.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in p)) {
    let e = Of(t);
    return function () {
      (i(), e());
    };
  }
  return (
    p.addEventListener(`scrollend`, t),
    function () {
      (i(), p.removeEventListener(`scrollend`, t));
    }
  );
}
function Of(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Vr(Br()) !== t) && e());
    },
    a = () => {
      let e = Vr(Br());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = In() ? yf() : 100;
      t = p.setTimeout(i, a);
    };
  return (
    p.addEventListener(`scroll`, a),
    function () {
      (p.removeEventListener(`scroll`, a), r());
    }
  );
}
function kf() {
  let e = wf();
  return e ? (p.scrollTo(e.x, e.y), !0) : !1;
}
function Af(e, t) {
  let n = t
    ? { behavior: `smooth`, block: `start`, inline: `nearest` }
    : void 0;
  e.scrollIntoView(n);
}
function jf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Af(n, t), !0);
}
function Mf(e, t, n) {
  n !== `preserve-scroll-position` &&
    F.render(
      () => {
        (n === `restore-scroll-position` && kf()) ||
          jf(e, t) ||
          p.scrollTo(0, 0);
      },
      !1,
      !0,
    );
}
function Nf(e, t) {
  F.read(() => {
    p.scrollY !== 0 ||
      p.scrollX !== 0 ||
      F.render(
        () => {
          kf() || jf(e, t);
        },
        !1,
        !0,
      );
  });
}
function Pf(e) {
  let t = yw().scrollRestoration,
    n = M(void 0),
    i = M(!1),
    a = !!(t && !e),
    o = C(
      (e) => {
        ((n.current = e), a && (i.current = !0));
      },
      [a],
    ),
    s = C((e, t = !1) => {
      i.current || Ef(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => n.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let r = n.current;
      !r ||
        r.routeId !== e ||
        r.remountKey !== t ||
        ((n.current = void 0),
        (i.current = !1),
        Mf(r.hash, r.shouldSmoothScroll, r.behavior));
    }, []);
  return (
    r(() => {
      if (a) return bf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function Ff({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: i, usesCustomScrollRestoration: a } = n;
  return (
    r(() => {
      i(e, t);
    }),
    h(() => {
      a && Nf(p.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function If() {
  let [e, t] = d.useState(0);
  return [e, d.useCallback(() => t((e) => e + 1), [])];
}
function Lf({ children: e, loadSnippetsModule: t }) {
  return E(lE.Provider, { value: t, children: e });
}
function Rf() {
  return d.useContext(lE);
}
function zf(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Bf(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (U(
        t.parentNode,
        `Can't use 'beforebegin' with a referenceNode at the top level`,
      ),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (U(
        t.parentNode,
        `Can't use 'afterend' with a referenceNode at the top level`,
      ),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      Kt(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Vf(a.createContextualFragment(e), r, i));
}
async function Vf(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Hf(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Vf(r, e, null)));
  }
}
function Hf(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Uf(r, t, n);
}
function Uf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Wf(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = aE), (n = oE));
      break;
    case `bodyEnd`:
      ((t = sE), (n = cE));
      break;
    case `headStart`:
      ((t = tE), (n = nE));
      break;
    case `headEnd`:
      ((t = rE), (n = iE));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Gf(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = zf(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Kf(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Wf(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Gf(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((qf(t, o), s)) {
      await Bf(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = zf(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Yf(e.id, n, r, i);
    d
      ? await Bf(u, d, `afterend`)
      : await Bf(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function qf(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Jf(n) && n.remove(), (n = e));
  }
}
function Jf(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Yf(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Gf(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Xf() {
  let e = Rf();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById($T)?.dataset[eE] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Kf(t, n, r);
      }
    },
    [e],
  );
}
function Zf(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Qf({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === iv),
    { path: d } = await nr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = Zf(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await nr({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let c = Zf(o, e);
    (l.push({ href: c, hrefLang: n.code }), n.id === iv && (f = c));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (Fr(c, p.location.href), Ir(l));
    }
  );
}
function $f({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = On(),
    l = Xf();
  h(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && ou(e);
        }),
        d)
      : ((e.id === t.id
          ? Kn()
          : nr({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === iv),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Qf({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && ou(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function ep(e) {
  if (!e) return z_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function tp(e) {
  let t = ti(e),
    n = M(void 0),
    r = C(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Ut(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(z_);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = p.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || wy();
      },
      [r, t],
    ),
    cancelPendingNavigation: r,
  };
}
function np({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: i,
  notFoundPage: o,
  collectionUtils: c,
  routes: l,
  initialLocaleId: d,
  initialCollectionItemId: f,
  initialContentLocaleIdOverride: m,
  locales: g = rv,
  initialCanonicalPathVariables: _,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (Li(),
    Xr({
      disabled: t,
      routeId: i,
      initialPathVariables: n,
      initialLocaleId: d,
      initialContentLocaleId: m,
      initialCanonicalPathVariables: _,
    }));
  let T = Nr(),
    [D, O] = If(),
    k = Rr(`framer-route-change`),
    A = s(
      () => (!yw().synchronousNavigationOnDesktop || !Un() ? u : (e) => e()),
      [],
    ),
    j = M(!0),
    ee = M(),
    te = M(0),
    N = M(i),
    P = M(n),
    ne = M(),
    re = M(d),
    ie = Pf(t),
    { isNavigationCommitPending: F, usesCustomScrollRestoration: ae } = ie,
    { startNavigation: oe, cancelPendingNavigation: se } = tp(ae),
    ce = On(),
    le = ie.scheduleScroll,
    ue = re.current,
    I = N.current,
    L = P.current,
    R = l[I],
    de = R?.path;
  if (!R) throw Error(`Router cannot find route for ${I}`);
  let fe = s(() => g.find(({ id: e }) => e === iv), [g]),
    z = s(
      () => g.find(({ id: e }) => (ue ? e === ue : e === iv)) ?? null,
      [ue, g],
    ),
    {
      contentLocale: pe,
      currentCanonicalPathVariables: B,
      pageExistsInCurrentLocale: me,
      setRouteContentState: he,
    } = ip({
      activeLocale: z,
      currentRoute: R,
      initialCanonicalPathVariables: _,
      initialContentLocaleIdOverride: m,
      locales: g,
      routes: l,
    }),
    ge = z?.textDirection ?? `ltr`,
    _e = S ? ge : `ltr`;
  r(() => {
    S && document.documentElement.setAttribute(`dir`, ge);
  }, [ge, S]);
  let ve = $r(),
    ye = s(
      () => ({
        activeLocale: z,
        contentLocale: pe,
        locales: g,
        setLocale: async (e) => {
          let n = ++te.current,
            r = k({ localized: !0 });
          if (
            (await iy({ priority: `user-blocking`, continueAfter: `paint` }),
            n !== te.current)
          ) {
            r.ignore?.();
            return;
          }
          let i;
          V(e) ? (i = e) : H(e) && (i = e.id);
          let a = g.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = N.current,
            s = l[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = Si(x);
          try {
            let e = await ve({
              currentLocale: z,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: fe,
              pathVariables: P.current,
              preserveQueryParams: v,
              sitePrefix: c,
            });
            if (!e || n !== te.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await ar({
                activeLocale: a,
                defaultLocale: fe,
                collectionUtilsCache: ce,
                locales: g,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (n !== te.current) {
              r.ignore?.();
              return;
            }
            ((j.current = !1),
              (re.current = a.id),
              (ee.current = i),
              (P.current = e.pathVariables),
              he(l, u));
            let d =
              s.path && e.pathVariables ? pr(s.path, e.pathVariables) : s.path;
            (le({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              oe(
                () => {
                  T(o, o, () => A(O));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        gf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1,
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [z, fe, pe, t, O, g, v, he, l, le, oe, T, k, A, ve, ce, x],
    ),
    be = C(
      (e, t, n, r, i, a, o, s, c, u, d) => {
        j.current = !1;
        let f = N.current,
          p = l[e],
          m = Ht(p, n),
          h = p?.path && i ? pr(p.path, i) : p?.path;
        if (
          ((N.current = e),
          (re.current = t),
          (P.current = i),
          (ne.current = void 0),
          he(a, o),
          (ee.current = r),
          le({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: s
              ? ae
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (se(), A(O));
          return;
        }
        oe(
          (t) => {
            T(f, e, () => A(O), t);
          },
          c,
          d,
          !0,
        );
      },
      [O, he, l, ae, le, oe, T, A, se],
    );
  (Zr(ie, N, be),
    h(() => {
      if (t) return;
      let e = () => {
        let e = Br(),
          t = p.location.hash === `` ? void 0 : p.location.hash.slice(1);
        (e && Ht(l[e.routeId], e.hash) === t) ||
          Jr({
            ...(e ||
              (Ur() ?? {
                routeId: N.current,
                pathVariables: P.current,
                localeId: re.current,
              })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (
        p.addEventListener(`hashchange`, e),
        () => p.removeEventListener(`hashchange`, e)
      );
    }, [t, l]));
  let xe = C(
      async (e, n, r, i, a) => {
        let o = l[e],
          s = yt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          u = k({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = ep(a);
        if (
          (iy({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await iy({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(oy)) {
            let t = n[1];
            if (t === void 0)
              throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Ht(o, n),
          p = P.current,
          m = re.current;
        if (
          ne.current === void 0 &&
          mf(
            { routeId: N.current, pathVariables: p },
            { routeId: e, pathVariables: r },
          )
        ) {
          let a = F();
          if (a) {
            let t = o?.path && r ? pr(o.path, r) : o?.path;
            le({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else se();
          (u.ignore?.(), !a && ae && Mf(f, i, `scroll-to-hash-or-top`));
          let s = l[e];
          (!t &&
            s &&
            vf(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              d,
            ),
            !a && !ae && Mf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = l[N.current],
          _ =
            Si(x) +
            Ti(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: g.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          y = {};
        ne.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await ar({
          activeLocale: z,
          defaultLocale: fe,
          collectionUtilsCache: ce,
          locales: g,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ne.current === y &&
          be(
            e,
            m,
            n,
            _,
            r,
            b,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    _f(e, o, {
                      historyPath: _,
                      currentRoutePath: h?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                },
          );
      },
      [se, l, g, be, t, v, x, k, ae, F, le, ce, fe, z],
    ),
    Se = Pt(l),
    Ce = ee.current,
    we = YT(R, I, Ce, L, z, f),
    Te = j.current;
  $f({
    activeLocale: z,
    contentLocale: pe,
    currentPathVariables: L,
    currentRoute: R,
    currentRouteId: I,
    isInitialNavigation: Te,
    locales: g,
    siteCanonicalURL: x,
  });
  let Ee = s(
      () => ({
        navigate: xe,
        getRoute: Se,
        currentRouteId: I,
        currentPathVariables: L,
        currentCanonicalPathVariables: B,
        routes: l,
        collectionUtils: c,
        preserveQueryParams: v,
        pageviewEventData: we,
        siteCanonicalURL: x,
        isInitialNavigation: Te,
      }),
      [xe, Se, I, L, B, l, c, v, x, we, Te],
    ),
    De = de && L ? pr(de, L) : de,
    Oe = `${ue}${De}`,
    ke = no(() => ({ ...e, display: `contents` }));
  return E(Ft, {
    api: Ee,
    children: E(ly.Provider, {
      value: ye,
      children: E(uy.Provider, {
        value: _e,
        children: E(zw, {
          children: E(fi, {
            routerRenderKey: D,
            isNavigationCommitPending: ie.isNavigationCommitPending,
            children: w(df, {
              currentRoutePath: De,
              routerAPI: Ee,
              children: [
                b && E(uf, { EditorBar: b, fast: !0 }),
                E(Sw, {
                  children: w(iu, {
                    children: [
                      E(hb.Start, {}),
                      E(Ff, {
                        currentRouteId: I,
                        remountKey: Oe,
                        scrollRestoration: ie,
                      }),
                      E(_b, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: D,
                        children: E(rp, {
                          LayoutTemplate: y,
                          webPageId: R?.abTestingVariantId ?? I,
                          style: e,
                          children: (t) =>
                            E(
                              a,
                              {
                                children: me
                                  ? Hi(R.page, t ? ke : e)
                                  : o && Hi(o, e),
                              },
                              Oe,
                            ),
                        }),
                      }),
                      b && E(uf, { EditorBar: b }),
                      E(Ni, {}),
                      E(hb.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function rp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function ip({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = M(n),
    c = M(r),
    l = c.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = s(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (l ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && Vy.has(e.path))
              ?.canonicalLocaleIdByLocaleId?.[e.id]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, l, u, a]),
    f = C((e, t) => {
      ((c.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function ap(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function op(e) {
  return typeof e == `object` && !!e;
}
function sp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!op(r)) return;
    r = r[e];
  }
  return r;
}
function cp(e) {
  return `${e.credentials}:${e.url}`;
}
function lp(e) {
  return V(e) && !Number.isNaN(Number(e));
}
function up(e, t) {
  switch (e) {
    case `string`:
      return V(t) || rt(t);
    case `color`:
      return V(t);
    case `boolean`:
      return nt(t);
    case `number`:
      return rt(t) || lp(t);
    case `link`:
    case `image`:
      return V(t) && Lu(t, !1);
    default:
      return !1;
  }
}
function dp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = sp(e.data, t.resultKeyPath);
  if (ot(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!up(t.resultOutputType, n))
    throw Error(
      `Resolved value '${n}' is not valid for type '${t.resultOutputType}'`,
    );
  return n;
}
function fp(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, dE);
  return Date.now() >= e + n;
}
function pp({ client: e, children: t }) {
  return E(_E.Provider, { value: e, children: t });
}
function mp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: f,
    isReducedMotion: p = !1,
    skipAnimations: m = !1,
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: D,
    initialContentLocaleIdOverride: O,
  } = e;
  return (
    d.useEffect(() => {
      n || Gb.start();
    }, []),
    n
      ? E(ii, {
          value: r ?? `preview`,
          children: E(Se, {
            reducedMotion: m ? `always` : p ? `user` : `never`,
            skipAnimations: m,
            children: E(Dn, {
              collectionUtils: l,
              children: E(pp, {
                client: u,
                children: E(gE, {
                  children: E(BT.Provider, {
                    value: a,
                    children: E(Lf, {
                      loadSnippetsModule: T,
                      children: E(np, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: g,
                        initialCollectionItemId: D,
                        initialContentLocaleIdOverride: O,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: f,
                        locales: _,
                        defaultPageStyle: b ?? {
                          minHeight: `100vh`,
                          width: `auto`,
                        },
                        preserveQueryParams: v,
                        EditorBar: y,
                        disableHistory: x,
                        LayoutTemplate: S,
                        siteCanonicalURL: C,
                        adaptLayoutToTextDirection: w,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : E(h ? DC : d.Fragment, {
          children: E(Lt, {
            routes: c,
            children: E(hC, {
              children: d.isValidElement(t)
                ? t
                : d.createElement(t, { key: i }),
            }),
          }),
        })
  );
}
function hp(e, t) {
  let n = It(),
    { activeLocale: r } = or(),
    i = kd();
  return oi(() => {
    let t = [],
      a = (e) => {
        if (e)
          return V(e) || Nu(e)
            ? Gd(e, n, void 0, void 0, r, o)
            : Gd(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function gp(e) {
  return {
    trace(...t) {
      return sx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return sx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return sx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return sx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return sx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return sx.getLogger(e) !== void 0;
    },
  };
}
function _p() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function vp() {
  return yE.priority;
}
function yp(e) {
  let t = yE;
  return (
    (yE = e),
    {
      [_p()]() {
        yE = t;
      },
    }
  );
}
function bp(e = yE.priority, t = yE.canYield) {
  if (!(!t || e === void 0)) return iy({ batch: !0, priority: qn(e) });
}
function xp(e) {
  var t = [];
  try {
    we(t, yp({ priority: yE.priority, canYield: !1 }));
    let n = e.next();
    return (U(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    ke(t, n, r);
  }
}
async function Sp(e, t, n = yE.priority, r = yE.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (we(o, yp(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      ke(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = bp(n, r);
      (o && (await o), we(l, yp(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      ke(l, u, d);
    }
  }
  return a.value;
}
function Cp(e, t = yE.priority, n = yE.canYield) {
  var r = [];
  try {
    we(r, yp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Sp(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    ke(r, i, a);
  }
}
function* wp(e, t = yE.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (ut(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Sp(r, e, t).then((e) => {
              n[a] = e;
            }),
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Tp(e, t = yE.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = bp(t);
    r && (yield r);
    let o = e[a];
    if (ut(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Sp(o, e, t).then((e) => {
              n[a] = e;
            }),
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Ep(e) {
  return kp(e) || Mp(e);
}
function Dp(e) {
  return it(e) && e.every(H);
}
function Op(e) {
  return H(e) && tt(e.read) && tt(e.preload);
}
function kp(e) {
  return Dp(e) || Op(e);
}
function Ap(e) {
  return H(e) && H(e.schema);
}
function jp(e) {
  return H(e) && H(e.collectionByLocaleId);
}
function Mp(e) {
  return Ap(e) || jp(e);
}
function Np(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = cm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Pp(e, t) {
  switch (e?.type) {
    case `array`:
      return {
        type: `array`,
        value: e.value.map((e) => bE.cast(e, t.definition)),
      };
  }
  return null;
}
function Fp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ip(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Lp(e) {
  return Ip(e)?.value ?? !1;
}
function Rp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function zp(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Bp(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Vp(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return lt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Hp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Up(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Wp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Gp(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Kp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function qp(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:`
          ? { type: `link`, value: e.value }
          : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Jp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Yp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Xp(e) {
  return Yp(e)?.value ?? null;
}
function Zp(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = cm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Qp(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = bE.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function $p(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function em(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function tm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function nm(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function rm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function im(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function am(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function om(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function sm(e) {
  return om(e)?.value ?? null;
}
function cm(e, t, n) {
  if (st(e) || st(t)) return (U(e === t), 0);
  switch (e.type) {
    case `array`:
      return (U(e.type === t.type), Np(e, t, n));
    case `boolean`:
      return (U(e.type === t.type), Fp(e, t));
    case `color`:
      return (U(e.type === t.type), Rp(e, t));
    case `date`:
      return (U(e.type === t.type), Bp(e, t));
    case `enum`:
      return (U(e.type === t.type), Hp(e, t));
    case `file`:
      return (U(e.type === t.type), Wp(e, t));
    case `link`:
      return (U(e.type === t.type), Kp(e, t));
    case `number`:
      return (U(e.type === t.type), Jp(e, t));
    case `object`:
      return (U(e.type === t.type), Zp(e, t, n));
    case `responsiveimage`:
      return (U(e.type === t.type), $p(e, t));
    case `richtext`:
      return (U(e.type === t.type), tm(e, t));
    case `vectorsetitem`:
      return (U(e.type === t.type), rm(e, t));
    case `string`:
      return (U(e.type === t.type), am(e, t, n));
    default:
      Kt(e);
  }
}
async function lm(e, t) {
  return Op(e) ? (await e.preload(t), e.read(t)) : e;
}
function um(e) {
  return e.includes(TE);
}
function dm(e) {
  if (!Mp(e) || !e.id) return;
  let t = CE.get(e.id);
  if (!t) return (CE.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function fm(e) {
  let t = dm(e);
  if (t) return t;
  let n = wE.get(e);
  if (n) return n;
  let r = `${TE}${Math.random().toString(16).slice(2)}`;
  return (wE.set(e, r), r);
}
function pm(e, t) {
  if (kp(e)) {
    let n = fm(e) + (t?.id ?? iv),
      r = EE.get(n);
    if (r) return r;
    let i = new SE(e, t);
    return (EE.set(n, i), i);
  }
  if (Ap(e)) return e;
  if (jp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Kt(e, `Unsupported collection type`);
}
function mm(e) {
  return e;
}
function hm(e) {
  return tt(e.getHash);
}
function K(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (H(r) && hm(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return mm(`${n})`);
}
function gm(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function _m(e) {
  if (e !== void 0) return qn(e);
}
function vm(e, t) {
  return { collectionId: fm(e), pointer: t };
}
function ym(e) {
  return H(e) && V(e.collectionId);
}
function bm(e, t) {
  return { collectionId: fm(e), pointer: t };
}
function xm(e) {
  return H(e) && V(e.collectionId);
}
function Sm(e, t) {
  let n = new Map();
  function r(e) {
    if (H(e))
      if (e.type === `Collection` && Ep(e.data)) {
        let r = pm(e.data, t),
          i = fm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (it(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Cm(e) {
  return e;
}
function wm(e) {
  return e;
}
function Tm(e) {
  return e;
}
function Em() {
  return 25;
}
function Dm() {
  return 12500;
}
function Om(e) {
  return Array(e).fill({ type: `All` });
}
function km(e) {
  return e;
}
function Am(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new ND(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function jm(e) {
  let t = new Set();
  if (!e) return t;
  Am(
    e.type === `array`,
    () => `ScalarIntersection expects an array, got: ${e.type}`,
  );
  for (let n of e.value)
    n &&
      (Am(
        n.type === `string`,
        () =>
          `ScalarIntersection expects an array of strings, got an array with: ${n.type}`,
      ),
      t.add(n.value));
  return t;
}
function Mm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Mm(n, t);
      return;
    case `object`:
      for (let n in e.value) Mm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Nm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Pm(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Fm(e) {
  return `${e.functionName}(${e.arguments.map((e) => Bm(e)).join(`, `)})`;
}
function Im(e) {
  let t = `CASE`;
  e.value && (t += ` ${Bm(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Bm(n.when)} THEN ${Bm(n.then)}`;
  return (e.else && (t += ` ELSE ${Bm(e.else)}`), (t += ` END`), t);
}
function Lm(e) {
  let t = Bm(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Rm(e) {
  let t = Bm(e.left),
    n = Bm(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function zm(e) {
  return `CAST(${Bm(e.value)} as ${e.dataType})`;
}
function Bm(e) {
  switch (e.type) {
    case `Identifier`:
      return Nm(e);
    case `LiteralValue`:
      return Pm(e);
    case `FunctionCall`:
      return Fm(e);
    case `Case`:
      return Im(e);
    case `UnaryOperation`:
      return Lm(e);
    case `BinaryOperation`:
      return Rm(e);
    case `TypeCast`:
      return zm(e);
    case `Select`:
      return `${Gm(e)}`;
    default:
      Kt(e);
  }
}
function Vm(e) {
  return Ap(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Hm(e) {
  let t = `${Um(e.left)} LEFT JOIN ${Um(e.right)}`;
  return (e.constraint && (t += ` ON ${Bm(e.constraint)}`), t);
}
function Um(e) {
  switch (e.type) {
    case `Collection`:
      return Vm(e);
    case `LeftJoin`:
      return Hm(e);
    default:
      Kt(e);
  }
}
function Wm(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Gm(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Bm(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Um(e.from)}`),
    e.where && (t += ` WHERE ${Bm(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Bm(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Bm(e.limit)}`),
    e.offset && (t += ` OFFSET ${Bm(e.offset)}`),
    Wm(t)
  );
}
function Km(e) {
  return H(e) && e.type === `Collection`;
}
function qm(e, t) {
  return Km(t) && Ep(t.data) ? fm(t.data) : t;
}
function Jm(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, qm) + n;
}
function Ym(e) {
  let { activeLocale: t } = or();
  return XD.get(e, t).use();
}
function Xm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(ot(e) || H(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({
        type: `BinaryOperation`,
        operator: `and`,
        left: e,
        right: t,
      }));
}
function Zm(e) {
  let t = M(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    si((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Qm(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function $m() {
  return new Set();
}
function eh(e) {
  let t = no($m),
    n = no($m);
  return (
    mc(() => () => Qm(n, t)),
    h(() => () => Qm(n, t), []),
    h(() => {
      Qm(n, t);
    }, [e]),
    M({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function th(e, t, n) {
  return d.useCallback(
    (r) =>
      !n || !e
        ? {}
        : t
          ? Object.assign({}, n[e]?.[r], n[t]?.[r])
          : n[e]?.[r] || {},
    [e, t, n],
  );
}
function nh(e) {
  for (let [t, n] of Object.entries(e)) if (Dv.matchMedia(n).matches) return t;
}
function rh(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e)
    r && Dv.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function ih(e, t, n = !0) {
  let r = S(fC),
    i = oo(),
    a = Qa(),
    o = Rn() && (!i || a),
    s = M(o ? (nh(t) ?? e) : e),
    c = M(n && r ? e : s.current),
    l = Cs(),
    d = ye(),
    f = C(
      (e) => {
        if (e !== s.current || e !== c.current) {
          let t = function () {
            ((s.current = c.current = e),
              u(() => {
                l();
              }));
          };
          i
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, l, i],
    );
  return (
    Ay(() => {
      if (i) {
        if (a) {
          f(nh(t) ?? e);
          return;
        }
        f(e);
      }
    }, [e, a, i, t, f]),
    Ay(() => {
      !n || r !== !0 || f(s.current);
    }, []),
    h(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = Dv.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (ah(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => oh(e, t));
    }, [a, t, f, o]),
    [s.current, c.current]
  );
}
function ah(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function oh(e, t) {
  e.removeEventListener
    ? e.removeEventListener(`change`, t)
    : e.removeListener(t);
}
function sh(e) {
  setTimeout(e, 1);
}
function ch(e) {
  let t = new Set(),
    n = rh(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (lh(n.previousSibling) && t.add(n.previousSibling),
          n.parentNode?.removeChild(n));
  (H_ ? Dv.requestIdleCallback : sh)(() => {
    document.querySelector(ZD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (lh(e.previousSibling) && t.add(e.previousSibling),
      e.parentNode?.removeChild(e));
  for (let e of t)
    uh(e.nextSibling) &&
      (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function lh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function uh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function dh() {
  let e = Rt(),
    { activeLocale: t } = or(),
    n = s(
      () =>
        Ti(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id],
    );
  return d.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = QD.get(t);
      if (r) return r;
      let i = y();
      return (QD.set(t, i), i);
    },
    [n],
  );
}
function fh(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function ph(e, t) {
  if (ao()) return;
  let n = d.useRef(!0),
    r = d.useRef(t);
  (mc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = fh(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    d.useEffect(() => {
      if (n.current) {
        let t = fh(r.current, e);
        t && t();
      }
    }, [e]));
}
function mh(e, t) {
  e !== !1 &&
    F.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function hh({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = d.useState(!1),
    i = d.useCallback(
      async (t) => {
        (await iy({ priority: `user-blocking`, continueAfter: `paint` }),
          u(() => r(t)),
          mh(e, t));
      },
      [e],
    );
  return (
    d.useEffect(
      () => () => {
        iy({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          mh(e, !1);
        });
      },
      [e],
    ),
    d.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (
        Dv.addEventListener(`keydown`, e),
        () => Dv.removeEventListener(`keydown`, e)
      );
    }, [t, i]),
    [n, i]
  );
}
function gh(e) {
  return H(e) && $D in e && e.page !== void 0;
}
function _h(e, t) {
  return `${e}-${t}`;
}
function vh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (U(r !== void 0, `nextVariant should be defined`), r);
}
function yh(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function bh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function xh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Sh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Ch() {
  let e = M(),
    t = M(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    h(
      () => () => {
        n();
      },
      [n],
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n],
    )
  );
}
function wh() {
  let e = M(),
    t = M(!1),
    n = M(),
    r = S(YS);
  return (
    h(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      [],
    ),
    C(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = sc(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r],
    )
  );
}
function Th(e) {
  let t = Ch(),
    n = wh();
  return C(
    (r, i = !1) => {
      if (V_) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e],
  );
}
async function Eh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (nO = () => {
        (e(), (t = void 0));
      }));
  });
}
function Dh(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (tO = Eh()));
}
function Oh() {
  (performance.mark(`click-received-listener`),
    (tO = void 0),
    nO?.(),
    (nO = void 0));
}
function kh(e = !1) {
  h(() => {
    e &&
      (document.addEventListener(`pointerup`, Dh, !0),
      document.__proto__.addEventListener.call(document, `click`, Oh, !0));
  }, [e]);
}
function Ah({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let l = Cs(),
    d = Fu(),
    f = no(() => new Set(i));
  kh(yw().yieldOnTap);
  let p = Th(c),
    m = M({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Sh(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Sh(e, a, f),
        s = bh(i?.[o], t, n, !1, r);
      return [o, s ? _h(o, s) : void 0];
    }, []),
    g = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = yw().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          tO &&
          (performance.mark(`wait-for-tap-start`),
          await tO,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await iy({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        if (d || g || f || _) {
          u(l);
          return;
        }
        p(() => u(l), i);
      },
      [h, l, p],
    ),
    _ = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && yw().disableHoverOnMobile && !Cu() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let {
          baseVariant: a,
          gestureVariant: o,
          defaultVariant: s,
        } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d],
    ),
    v = C(
      (e, t = !1) => {
        let {
            defaultVariant: n,
            cycleOrder: r,
            baseVariant: i,
            gestureVariant: a,
          } = m.current,
          o = e === eO ? vh(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g],
    ),
    y = C(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => u(l), !0));
    }, [l, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    k = th(m.current.baseVariant, m.current.gestureVariant, a);
  return s(() => {
    let e = [];
    b !== S && e.push(b);
    let t = w?.[b]?.loading,
      n = !D && !d && !!t && !O[b],
      r = n ? _h(b, `loading`) : x;
    r && e.push(r);
    let i = w?.[b],
      a = {
        onMouseEnter: () => _({ isHovered: !0 }),
        onMouseLeave: () => _({ isHovered: !1 }),
      };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: yh(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: fl(xh(b, o), bh(i, T, E, n, D)),
      }
    );
  }, [b, x, T, E, O, k, v, S, w, _, y, o]);
}
function jh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!cu()) return r(e);
  let a = Mh(e, r),
    o = !1;
  function s(r, s) {
    let c = du(),
      { disableCustomCode: l } = yw();
    if (l) return E(e, { ...r, ref: s });
    if (yu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? E(Oy.Provider, {
            value: n,
            children: E(lu, {
              getErrorMessage: gu.bind(null, t, n),
              fallback: E(e, { ...r, ref: s }),
              children: E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (su(a.error), su(gu(t, n)), ou(a.error), !0)),
          E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return E(Oy.Provider, {
        value: n,
        children: E(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return d.forwardRef(s);
}
function Mh(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Nh(e, t) {
  return t ? Ee(0, 2, e) : e;
}
function Ph() {
  return new Promise((e) => {
    F.postRender(() => e());
  });
}
function Fh(e) {
  let t = [];
  return (
    i.forEach(e, (e) => {
      T(e) && e.type === a ? t.push(...Fh(e.props.children)) : e && t.push(e);
    }),
    t
  );
}
function Ih(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function Lh(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = Ih(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Ee(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function Rh(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = Ih(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Ee(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function zh() {
  let e = S(iO);
  return ($h(!!e, `useTicker must be used within a Ticker component`), e);
}
function Bh() {
  let e = S(aO);
  return ($h(!!e, `useTickerItem must be used within a TickerItem`), e);
}
function Vh(e, t) {
  return (t?.offsetWidth ?? p.innerWidth) - (e.offsetLeft + e.offsetWidth);
}
function Hh(e, t) {
  return e === `y` ? cO : t === `ltr` ? sO : lO;
}
function Uh({
  children: e,
  offset: t,
  axis: n,
  listSize: r = 0,
  numItems: i = 0,
  itemIndex: a,
  cloneIndex: o,
  bounds: s,
  alignItems: c,
  reproject: l = !0,
  size: u = `auto`,
  safeMargin: d,
}) {
  let { start: f, end: p } = s,
    { visibleLength: m, direction: h, inset: g } = zh(),
    { sign: _ } = Hh(n, h),
    v = Ve(() => {
      if (!l) return 0;
      let e = t.get();
      if ((!f && !p) || !r) return 0;
      if (e * _ + s.end <= -g - d) return r * _;
      if (d > 0) {
        let t = m - d - g;
        if (e * _ + s.start >= t) return -r * _;
      }
      return 0;
    }),
    y = Ve(() => {
      let e = t.get(),
        n = v.get();
      return (!f && !p) || !r ? 0 : e * _ + f + n * _;
    }),
    b =
      o === void 0
        ? { "aria-hidden": !1, "aria-posinset": a + 1, "aria-setsize": i }
        : { "aria-hidden": !0 },
    x = u === `fill`,
    S = c === `stretch` ? `100%` : `fit-content`,
    C = {
      className: o === void 0 ? `ticker-item` : `clone-item`,
      style: {
        flexGrow: 0,
        flexShrink: 0,
        position: `relative`,
        flexBasis: u === `fill` ? `100%` : void 0,
        display: x ? `grid` : void 0,
        gridTemplateColumns: x ? `1fr` : void 0,
        gridTemplateRows: x ? `1fr` : void 0,
        minWidth: x ? 0 : void 0,
        minHeight: x ? 0 : void 0,
        height: n === `x` ? S : void 0,
        width: n === `y` ? S : void 0,
        x: n === `x` ? v : 0,
        y: n === `y` ? v : 0,
      },
      ...b,
    };
  return E(aO.Provider, {
    value: {
      start: f,
      end: p,
      offset: y,
      projection: v,
      itemIndex: a,
      cloneIndex: o,
      props: C,
    },
    children: u === `manual` ? e : E(Wh, { children: e }),
  });
}
function Wh({ children: e }) {
  let { props: t } = Bh();
  return E(L.li, { ...t, children: e });
}
function Gh(e, t, n, r, i) {
  let a = M(!1);
  h(() => {
    let o = e.current;
    if (!o) return;
    let s = !1,
      c = new AbortController(),
      l = { signal: c.signal },
      u = { ...l, capture: !0 },
      d = t === `x` ? `scrollLeft` : `scrollTop`,
      f = t === `x` ? `offsetLeft` : `offsetTop`,
      m = t === `x` ? `ArrowLeft` : `ArrowUp`,
      h = t === `x` ? `ArrowRight` : `ArrowDown`,
      g = [],
      _ = 0,
      v = () => {
        let e = g[_];
        e &&
          (e.focus({ preventScroll: !0 }),
          n.set(-e[f]),
          (o[d] = 0),
          F.render(() => {
            o[d] = 0;
          }));
      },
      y = (e) => {
        if (e.key === `Tab`) {
          (e.preventDefault(), S());
          let t = Array.from(
            document.querySelectorAll(
              `a, button, input, textarea, select, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]`,
            ),
          ).filter(qh);
          t.sort(Kh);
          let n = t[e.shiftKey ? 0 : t.length - 1],
            r = e.shiftKey ? t.length - 1 : 0;
          if (o.contains(n)) {
            t[r].focus();
            return;
          } else {
            let n = t.indexOf(g[_]),
              r = e.shiftKey ? -1 : 1;
            for (let e = n; e < t.length && e >= 0; e += r) {
              let n = t[e];
              if (!o.contains(n)) {
                n.focus();
                return;
              }
            }
          }
          return;
        } else e.key === m ? _-- : e.key === h && _++;
        ((_ = Ee(0, g.length, _)), v());
      },
      b = () => {
        a.current ||
          ((g = Array.from(
            o.querySelectorAll(
              `.ticker-item a, .ticker-item button, .ticker-item input, .ticker-item textarea, .ticker-item select, .ticker-item [tabindex]:not([tabindex="-1"]), .ticker-item [contenteditable="true"]`,
            ),
          ).filter(qh)),
          (_ = 0),
          g.length &&
            (i(!0),
            (a.current = !0),
            v(),
            p.addEventListener(`focus`, x, u),
            p.addEventListener(`blur`, x, u),
            o.addEventListener(`keydown`, y, l)));
      },
      x = (e) => {
        (!e.target ||
          !(e.target instanceof HTMLElement) ||
          !o.contains(e.target)) &&
          S();
      },
      S = () => {
        a.current &&
          ((a.current = !1),
          i(!1),
          r.set(n.get()),
          p.removeEventListener(`focus`, x),
          p.removeEventListener(`blur`, x),
          o.removeEventListener(`keydown`, y));
      },
      C = (e) => {
        let { target: t } = e;
        qh(t) && (a.current || b());
      },
      w = () => {
        s ||
          ((s = !0),
          o.addEventListener(`focus`, C, u),
          p.addEventListener(`pointermove`, T, l));
      },
      T = () => {
        s &&
          ((s = !1),
          o.removeEventListener(`focus`, C, !0),
          p.removeEventListener(`pointermove`, T, l));
      };
    return (
      p.addEventListener(`keydown`, w, l),
      o.addEventListener(
        `pointerdown`,
        (e) => {
          let t = e.target.closest(`[aria-hidden="true"]`);
          t && t.removeAttribute(`aria-hidden`);
        },
        l,
      ),
      o.addEventListener(
        `scroll`,
        () => {
          ((o.scrollLeft = 0), (o.scrollTop = 0));
        },
        l,
      ),
      () => {
        (c.abort(), S());
      }
    );
  }, []);
}
function Kh(e, t) {
  return e.tabIndex >= 1 && t.tabIndex >= 1
    ? e.tabIndex - t.tabIndex
    : e.tabIndex >= 1 && t.tabIndex <= 0
      ? -1
      : +(t.tabIndex >= 1 && e.tabIndex <= 0);
}
function qh(e) {
  return e instanceof HTMLElement;
}
function Jh(e) {
  return e.end - e.start;
}
function Yh(e) {
  return e[e.length - 1].end - e[0].start;
}
function Xh(e, t, n) {
  let r = Yh(t),
    i = Math.max(...t.map(Jh)),
    a = 0,
    o = 0;
  for (; o < e;) ((o = (r + n) * (a + 1) - i), a++);
  return Math.max(a - 1, 0);
}
function Zh(
  {
    items: e,
    velocity: t = 50,
    hoverFactor: n = 1,
    gap: r = 10,
    axis: i = `x`,
    align: a = `center`,
    offset: o,
    isStatic: c = !1,
    itemSize: l = `auto`,
    overflow: u = !1,
    loop: d = !0,
    children: f,
    as: m = `div`,
    snap: h,
    safeMargin: g = 0,
    fade: _ = 0,
    fadeTransition: v,
    pageTransition: y,
    ...b
  },
  x,
) {
  let S = M(null),
    w = ue(x, S),
    T = M(null),
    [D, O] = A({
      direction: `ltr`,
      visibleLength: 0,
      inset: 0,
      totalItemLength: 0,
      containerLength: 0,
      itemPositions: [],
      isMeasured: !1,
      maxInset: null,
    }),
    k = uO[a] || a,
    { sign: j } = Hh(i, D.direction);
  if (c) {
    let t = be(0);
    return E(iO.Provider, {
      value: { ...D, gap: r, clampOffset: fe, offset: t, renderedOffset: t },
      children: E(Qh, {
        containerProps: b,
        containerRef: w,
        children: f,
        gap: r,
        axis: i,
        alignItems: k,
        offset: t,
        renderedOffset: t,
        items: e,
        itemSize: l,
        state: D,
        overflow: u,
        safeMargin: g,
        isStatic: !0,
        as: m,
        fade: _,
        sign: j,
      }),
    });
  }
  let [ee, te] = A(!1),
    P = be(1),
    ne = be(0);
  o ??= ne;
  let re = Ve(() =>
      D.direction === `rtl` && i === `x`
        ? Ee(D.totalItemLength + r + D.inset, D.inset, o.get())
        : Ee(-D.totalItemLength - r - D.inset, -D.inset, o.get()),
    ),
    ie = be(0),
    F = ee ? ie : d ? re : o,
    ae = Ue(S, { margin: `100px` }),
    se = N(),
    le = ae && se,
    I = Je(),
    L = () => {
      if (!S.current || !T.current) return;
      let e = p.getComputedStyle(S.current).direction,
        {
          measureItem: t,
          lengthProp: n,
          viewportLengthProp: r,
          getCumulativeInset: a,
        } = Hh(i, e),
        o = i === `x` ? `paddingLeft` : `paddingTop`,
        s = i === `x` ? `paddingRight` : `paddingBottom`,
        c = S.current,
        l = T.current.querySelectorAll(`.ticker-item`);
      if (!l.length) return;
      let f = !1,
        m = [];
      for (let e = 0; e < l.length; e++) {
        let n = t(l[e], c);
        m.push(n);
        let r = D.itemPositions[e];
        (!r || n.start !== r.start || n.end !== r.end) && (f = !0);
      }
      let h = Math.min(c[n], p[r]),
        _ = u ? p[r] : h;
      g > 0 && (_ += g * 2);
      let v = Yh(m),
        y = p.getComputedStyle(c),
        b = parseInt(y[o] ?? 0),
        x = parseInt(y[s] ?? 0),
        C = u ? a(l[0]) : b,
        w = d === !1 ? Math.max(0, v - h + b + x) : null;
      (_ !== D.visibleLength ||
        v !== D.totalItemLength ||
        C !== D.inset ||
        D.itemPositions.length !== m.length ||
        f) &&
        O({
          direction: e,
          visibleLength: _,
          itemPositions: m,
          totalItemLength: v,
          inset: C,
          containerLength: h,
          maxInset: w,
          isMeasured: !0,
        });
    };
  ve(() => {
    if (!le || !S.current) return;
    L();
    let e = u ? ce(L) : void 0,
      t = ce(S.current, L);
    return () => {
      (e?.(), t());
    };
  }, [e, le, u]);
  let R = D.totalItemLength > 0;
  oe(
    R && le && o === ne && !I
      ? (e, n) => {
          let r = (n / 1e3) * (t * j * P.get());
          o.set(o.get() - r);
        }
      : fe,
  );
  let de = s(
      () =>
        !R || !D.visibleLength ? 0 : Xh(D.visibleLength, D.itemPositions, r),
      [R, D],
    ),
    z = D.totalItemLength === 0 ? 0 : (D.totalItemLength + r) * (de + 1),
    pe = [];
  if (d)
    for (let t = 0; t < de; t++) {
      let n = [];
      e.forEach((a, o) => {
        let s = D.itemPositions[o],
          c = (D.totalItemLength + r) * (t + 1),
          u = s ? { start: s.start + c, end: s.end + c } : fO;
        n.push(
          E(
            Uh,
            {
              offset: F,
              axis: i,
              listSize: z,
              itemIndex: o,
              cloneIndex: o,
              bounds: u,
              alignItems: k,
              size: l,
              safeMargin: g,
              numItems: e.length,
              children: a,
            },
            `clone-${t}-${o}`,
          ),
        );
      });
      let a = `ticker-group-${t}`;
      pe.push(E(Me, { id: a, children: n }, a));
    }
  Gh(S, i, ie, o, te);
  let he = C(
    (e) => (D.maxInset === null ? e : me(-D.maxInset, 0, e)),
    [D.maxInset],
  );
  return E(iO.Provider, {
    value: { ...D, gap: r, clampOffset: he, offset: o, renderedOffset: F },
    children: E(Qh, {
      containerProps: b,
      children: f,
      containerRef: w,
      listRef: T,
      gap: r,
      axis: i,
      alignItems: k,
      isMeasured: R,
      isInView: le,
      offset: o,
      renderedOffset: F,
      items: e,
      itemSize: l,
      clonedItems: pe,
      clampOffset: he,
      snap: h,
      safeMargin: g,
      onPointerEnter: () => {
        B(P, n);
      },
      onPointerLeave: () => {
        B(P, 1);
      },
      totalListSize: z,
      state: D,
      overflow: u,
      loop: d,
      as: m,
      fade: _,
      sign: j,
      fadeTransition: v,
      pageTransition: y,
    }),
  });
}
function Qh({
  children: e,
  containerProps: t,
  containerRef: n,
  listRef: r,
  gap: i,
  axis: a,
  alignItems: o,
  isMeasured: c,
  isInView: l,
  isStatic: u,
  items: d,
  offset: f,
  clonedItems: p,
  clampOffset: m,
  renderedOffset: h,
  onPointerEnter: _,
  onPointerLeave: v,
  totalListSize: y,
  itemSize: b,
  overflow: x,
  state: S,
  safeMargin: C,
  snap: T,
  loop: D,
  as: O,
  fade: k,
  sign: A,
  fadeTransition: j = hO,
  pageTransition: ee,
}) {
  let te = s(() => L.create(O), [O]),
    N = {},
    { maxInset: P } = S;
  P !== null &&
    (N =
      a === `x`
        ? A > 0
          ? { left: P * -1, right: 0 }
          : { right: P, left: 0 }
        : { top: P * -1, bottom: 0 });
  let {
      drag: ne,
      _dragX: re,
      _dragY: ie,
      dragMomentum: ae = !1,
      onDragEnd: oe,
      onPointerDown: se,
      ...ce
    } = t,
    le = a === `x` ? re : ie,
    ue = M(null),
    I = () => {
      ue.current &&= (ue.current.stop(), null);
    };
  !oe &&
    ne &&
    le &&
    ((se = () => {
      (le.jump(f.get()), I());
    }),
    (oe = (e, { velocity: t }) => {
      let n = f.get();
      (I(),
        F.postRender(() => {
          let e = n + t[a] * (T ? 0.3 : 0.8);
          if (T)
            if (t[a] < 0) e = -Lh(-n, S.itemPositions, i, -e);
            else if (t[a] > 0)
              e = -Rh(-n, S.itemPositions, i, -e, S.containerLength);
            else {
              let t = -Lh(-n, S.itemPositions, i, -n),
                r = -Rh(-n, S.itemPositions, i, -n, S.containerLength);
              e = Math.abs(n - t) < Math.abs(n - r) ? t : r;
            }
          let r = D
            ? {}
            : A > 0
              ? { max: 0, min: N[a === `x` ? `left` : `top`] }
              : { min: 0, max: N.right };
          ue.current = B(
            le,
            m(e * A) * A,
            T
              ? ee
              : {
                  type: `inertia`,
                  velocity: t[a],
                  modifyTarget: () => e,
                  bounceDamping: 40,
                  bounceStiffness: 400,
                  ...r,
                },
          );
        }));
    }));
  let R = be(+!D),
    de = be(0),
    fe = Hh(a, S.direction),
    pe = typeof k == `number` ? `px` : ``,
    me = Ve(
      () =>
        `linear-gradient(to ${fe.direction}, rgba(0,0,0,${R.get()}) 0px, black ${k}${pe}, black calc(100% - ${k}${pe}), rgba(0,0,0,${de.get()}) 100%)`,
    ),
    he = k ? { maskImage: me, WebkitMaskImage: me } : {},
    ge = M({ start: !0, end: !1 });
  return (
    z(h, `change`, (e) => {
      if (P === null) return;
      let t = P * -1;
      ((e *= A),
        e < 0
          ? ge.current.start && (B(R, 0, j), (ge.current.start = !1))
          : ge.current.start || (B(R, 1, j), (ge.current.start = !0)),
        e > t
          ? ge.current.end && (B(de, 0, j), (ge.current.end = !1))
          : ge.current.end || (B(de, 1, j), (ge.current.end = !0)));
    }),
    w(g, {
      children: [
        E(te, {
          ...ce,
          ref: n,
          style: {
            overflowX: !x && a === `x` ? `clip` : void 0,
            overflowY: !x && a === `y` ? `clip` : void 0,
            ...pO,
            ...t.style,
            ...he,
          },
          onPointerEnter: _,
          onPointerLeave: v,
          drag: ne,
          _dragX: re,
          _dragY: ie,
          dragConstraints: N,
          dragMomentum: ae,
          onPointerDown: se,
          onDragEnd: oe,
          children: w(L.ul, {
            ref: r,
            style: {
              ...mO,
              flexDirection: a === `x` ? `row` : `column`,
              gap: `${i}px`,
              x: a === `x` ? h : 0,
              y: a === `y` ? h : 0,
              opacity: c || u ? 1 : 0,
              alignItems: o,
              willChange: c && l ? `transform` : void 0,
              width: `100%`,
              height: `100%`,
              maxHeight: `100%`,
              maxWidth: `100%`,
            },
            children: [
              d.map((e, t) =>
                E(
                  Uh,
                  {
                    axis: a,
                    offset: h,
                    listSize: y,
                    itemIndex: t,
                    bounds: S.itemPositions[t] ?? fO,
                    alignItems: o,
                    size: b,
                    reproject: D,
                    safeMargin: C,
                    numItems: d.length,
                    children: e,
                  },
                  `original-` + t,
                ),
              ),
              p || null,
            ],
          }),
        }),
        ` `,
        e,
      ],
    })
  );
}
function $h(e, t) {
  if (!e) throw Error(t);
}
function eg(e) {
  return -Math.sign(e);
}
function tg(
  e,
  {
    axis: t = `y`,
    onWheel: n,
    onSwipe: r,
    swipeThreshold: i = 100,
    swipeTimeout: a = 150,
    jitterThreshold: o = 2,
    lineHeight: s = 16,
  },
) {
  let c = `IDLE`,
    l = 0,
    u = 0,
    d = 0,
    f = !1,
    p = 0,
    m = !1,
    h = null,
    g = (e) => {
      let g = t === `x` && !e.shiftKey ? e.deltaX : e.deltaY,
        _ = t === `x` && !e.shiftKey ? e.deltaY : e.deltaX;
      if (Math.abs(g) < Math.abs(_)) return;
      (n || r) && e.preventDefault();
      let v = -(e.deltaMode === WheelEvent.DOM_DELTA_LINE ? g * s : g);
      if (v === 0) return;
      (h && clearTimeout(h),
        (h = setTimeout(() => {
          ((c = `IDLE`), (m = !1), (l = 0));
        }, a)),
        c === `IDLE` && (c = `WHEELING`));
      let y = eg(v);
      function b(e, t) {
        ((c = `SWIPING`),
          (m = !0),
          (u = eg(t)),
          (f = !1),
          (p = 0),
          (d = Math.abs(e)),
          r?.(u),
          (l = (Math.abs(t) % i) * u));
      }
      switch (c) {
        case `WHEELING`: {
          let e = l + v;
          r && !m && Math.abs(e) >= i ? b(v, e) : ((l = e), n?.(v));
          break;
        }
        case `SWIPING`: {
          let e = Math.abs(v),
            t = y !== u,
            a = !1;
          if (d > 0) {
            let t = e - d;
            (t < 0 && (f = !0),
              f && t > o ? (p++, p > 2 && (a = !0)) : (p = 0));
          }
          if (t || a) {
            m = !1;
            let e = v;
            r && !m && Math.abs(e) >= i
              ? b(v, e)
              : ((c = `WHEELING`), (l = e), n?.(v));
            break;
          }
          d = e;
          break;
        }
      }
    };
  return (
    e.addEventListener(`wheel`, g, { passive: !1 }),
    () => {
      (h && clearTimeout(h), e.removeEventListener(`wheel`, g));
    }
  );
}
function ng() {
  let e = S(gO);
  return (fg(!!e, `useCarousel must be used within a Carousel component`), e);
}
function rg(e, t, n) {
  let r = Math.floor(e / n),
    i = r * n,
    a = 0;
  for (let n = 0; n < t.length; n++) {
    let { end: r } = t[n];
    if (((a = n), r + i > e)) break;
  }
  return a + r * t.length;
}
function ig(e, t, n, r, i) {
  if (t.length === 0) return 0;
  let a = t[t.length - 1].end + n,
    o = r ?? e - (i ?? 0),
    s = rg(e, t, a),
    c = e,
    l = !1;
  for (; !l;) {
    let { start: r, end: u } = t[Ee(0, t.length, s)],
      d = u - r,
      f = r + Math.floor(s / t.length) * a;
    o <= f + n || f >= e
      ? ((c = f), s--)
      : o <= f
        ? ((c = f), (l = !0))
        : (((i && d > i) || (c === e && o >= f)) && (c = f), (l = !0));
  }
  return c;
}
function ag(e, t, n, r) {
  return ig(e, n, r, e - t, t);
}
function og(e, t, n, r) {
  if (t.length === 0) return 0;
  let i = t[t.length - 1].end + n,
    a = r ?? e + (t[0]?.end ?? 0),
    o = rg(e, t, i) + 1,
    s = 0,
    c = !1;
  for (; !c;) {
    let { start: e, end: n } = t[Ee(0, t.length, o)],
      r = Math.floor(o / t.length) * i;
    ((s = e + r), n + r > a ? (c = !0) : o++);
  }
  return s;
}
function sg(e, t, n, r) {
  return og(e, n, r, e + t);
}
function cg(e, t, n, r = !0) {
  let i = { insets: [], visibleLength: t };
  if (e.length === 0) return i;
  let a = [e[0].start];
  for (let r = 1; r < e.length; r++) {
    let { start: i, end: o } = e[r];
    if (a[a.length - 1] + t < o)
      if (n !== null)
        if (i <= n) a.push(i);
        else {
          a.push(n);
          break;
        }
      else a.push(i);
  }
  if (r && n !== null && a.length > 1) {
    let r = a[a.length - 1],
      i = [];
    for (let e = 0; e < a.length - 1; e++) i.push(a[e + 1] - a[e]);
    let o = i.reduce((e, t) => e + t, 0) / i.length;
    if (n - r < o * 0.5) {
      let r = cg(e, t * 0.75, n, !1);
      if (r.insets.length === a.length) return r;
    }
  }
  return { insets: a, visibleLength: t };
}
function lg(e, t, n, r) {
  let i = -e,
    a = r === null ? Math.floor(i / n) : 0,
    o = a * n;
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e] + o,
      s = Ee(0, t.length, e - 1),
      c = (e === 0 ? a - 1 : a) * n,
      l = t[s] + c,
      u = (r - l) / 2,
      d = Ee(0, t.length, e + 1),
      f = (e === t.length - 1 ? a + 1 : a) * n,
      p = t[d] + f;
    if (i < p - (p - r) / 2 && i >= l + u) return e;
  }
  return 0;
}
function ug({
  children: e,
  offset: t,
  targetOffset: n,
  tugOffset: r,
  loop: i = !0,
  transition: a,
  tickerRef: o,
  axis: s = `x`,
  snap: c = `page`,
  page: l,
  wheelSwipeThreshold: u,
}) {
  let d = M(!0),
    {
      clampOffset: f,
      totalItemLength: p,
      itemPositions: m,
      containerLength: g,
      gap: _,
      maxInset: v,
      direction: y,
      isMeasured: b,
    } = zh(),
    x = p + _,
    S = cg(m, g, v),
    C = S.insets.length,
    { sign: w } = Hh(s, y),
    T = M(void 0),
    D = M(!1);
  h(() => {
    if (l === void 0 || !b || C === 0) return;
    let e = me(0, C - 1, l),
      r = -S.insets[e] * w;
    D.current
      ? T.current !== l && ((T.current = l), n.jump(r), t.jump(r))
      : ((D.current = !0), (T.current = l), n.jump(r), t.jump(r));
  }, [b, C, l, w, n, t, S.insets]);
  let O = (e) => ({
      current: lg(e * w, S.insets, x, v),
      isNextActive: i ? !0 : e * -w < v,
      isPrevActive: i ? !0 : e * -w > 0,
    }),
    [k, j] = A(() => O(n.get()));
  h(() => {
    ee();
  }, [g, p]);
  let ee = () => {
    let e = O(n.get());
    (e.current !== k.current ||
      e.isNextActive !== k.isNextActive ||
      e.isPrevActive !== k.isPrevActive) &&
      j(e);
  };
  z(n, `change`, (e) => {
    (t.set(e), ee());
  });
  let te = M(null),
    N = () => {
      te.current &&= (te.current.stop(), null);
    };
  h(() => {
    t.attach((e, n) => {
      (N(),
        d.current
          ? n(e)
          : (te.current = new We({
              keyframes: [t.get(), e],
              velocity: me(-2e3, 2e3, t.getVelocity()),
              ...a,
              onUpdate: n,
              onComplete: () => {
                te.current = null;
              },
            })),
        (d.current = !0));
    }, N);
  }, []);
  let P = (e) => {
      let t = f(e);
      (n.stop(), (d.current = !1), n.set(t * w));
    },
    ne = (e, t) => {
      let i = -e(-n.get() * w, S.visibleLength, m, _),
        a = f(i);
      a * w === n.get() ? B(r, 0, { velocity: t * w * 400, ...vO }) : P(a);
    },
    re = () => ne(sg, -1),
    ie = () => ne(ag, 1),
    F = (e) => {
      let t = (i ? Math.floor((-n.get() * w) / x) : 0) * -x;
      P(-S.insets[e] + t);
    },
    ae = M({ nextPage: re, prevPage: ie, clampOffset: f });
  return (
    h(() => {
      ae.current = { nextPage: re, prevPage: ie, clampOffset: f };
    }, [re, ie, f]),
    h(() => {
      let e = o.current;
      if (e)
        return tg(e, {
          axis: s,
          swipeThreshold: u,
          onSwipe: c
            ? (e) => {
                let { nextPage: t, prevPage: n } = ae.current;
                e * w === 1 ? t() : n();
              }
            : void 0,
          onWheel: (e) => {
            let { clampOffset: r } = ae.current,
              i = t.get() + e,
              a = w > 0 ? r(i) : me(0, v, i);
            n.jump(v ? a : i);
          },
        });
    }, [s, c, t, w]),
    E(gO.Provider, {
      value: {
        currentPage: k.current,
        isNextActive: k.isNextActive,
        isPrevActive: k.isPrevActive,
        totalPages: C,
        nextPage: re,
        prevPage: ie,
        gotoPage: F,
        offset: t,
        targetOffset: n,
      },
      children: e,
    })
  );
}
function dg({
  children: e,
  loop: t = !0,
  transition: n = _O,
  axis: r = `x`,
  snap: i = `page`,
  page: a,
  wheelSwipeThreshold: o,
  ...s
}) {
  let c = M(null),
    l = be(0),
    u = be(0),
    d = be(0);
  return E(dO, {
    role: `region`,
    "aria-roledescription": `carousel`,
    offset: Ve(() => d.get() + u.get()),
    loop: t,
    ref: c,
    axis: r,
    drag: r,
    _dragX: r === `x` && l,
    _dragY: r === `y` && l,
    snap: i,
    pageTransition: n,
    ...s,
    children: E(ug, {
      tickerRef: c,
      loop: t,
      offset: u,
      tugOffset: d,
      targetOffset: l,
      transition: n,
      snap: i,
      axis: r,
      page: a,
      wheelSwipeThreshold: o,
      children: e,
    }),
  });
}
function fg(e, t) {
  if (!e) throw Error(t);
}
function pg({ intervalSeconds: e }) {
  let { nextPage: t, currentPage: n, isNextActive: r } = ng(),
    i = be(0);
  return (
    h(() => {
      if (!r) return;
      let n = B(i, [0, 1], { duration: e, ease: `linear`, onComplete: t });
      return () => n.stop();
    }, [e, i, n, r, t]),
    null
  );
}
function mg(e, t) {
  if (typeof e == `number` && Number.isFinite(e)) return e;
  if (!V(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0],
    a = t === `x` ? i : r;
  if (!a) return;
  let o = parseInt(a);
  return Number.isNaN(o) ? void 0 : o;
}
function hg(e, t) {
  if (W(e)) return e;
  if (!V(e)) return;
  let n = e.split(` `),
    r = n[0],
    i = n[1] ?? n[0];
  if (t === `x` && i) return gg(parseInt(i));
  if (t === `y` && r) return gg(parseInt(r));
}
function gg(e) {
  return Number.isNaN(e) ? void 0 : e;
}
function _g(e) {
  let {
    carouselEffectEnabled: t,
    carouselEffectAlign: n,
    carouselEffectAutoPlay: r,
    carouselEffectControls: i,
    carouselEffectGap: a,
    carouselEffectInterval: o,
    carouselEffectLoop: s,
    carouselEffectOverflow: c,
    carouselEffectSnap: l,
    carouselEffectStackDirection: u,
    carouselEffectXOverflow: d,
    carouselEffectYOverflow: f,
    tickerEffectEnabled: p,
    tickerEffectAlign: m,
    tickerEffectDirectionModifier: h,
    tickerEffectDraggable: g,
    tickerEffectGap: _,
    tickerEffectHoverModifier: v,
    tickerEffectIsDataRepeater: y,
    tickerEffectOverflow: b,
    tickerEffectPosition: x,
    tickerEffectStackDirection: S,
    tickerEffectVelocity: C,
    tickerEffectXOverflow: w,
    tickerEffectYOverflow: T,
    ...E
  } = e;
  return {
    carouselEffectProps: {
      carouselEffectAlign: n,
      carouselEffectAutoPlay: r,
      carouselEffectControls: i,
      carouselEffectGap: a,
      carouselEffectInterval: o,
      carouselEffectLoop: s,
      carouselEffectOverflow: c,
      carouselEffectSnap: l,
      carouselEffectStackDirection: u,
      carouselEffectXOverflow: d,
      carouselEffectYOverflow: f,
    },
    tickerEffectProps: {
      tickerEffectAlign: m,
      tickerEffectDirectionModifier: h,
      tickerEffectDraggable: g,
      tickerEffectGap: _,
      tickerEffectHoverModifier: v,
      tickerEffectIsDataRepeater: y,
      tickerEffectOverflow: b,
      tickerEffectPosition: x,
      tickerEffectStackDirection: S,
      tickerEffectVelocity: C,
      tickerEffectXOverflow: w,
      tickerEffectYOverflow: T,
    },
    domProps: E,
  };
}
function vg(e) {
  let t = e.__FramerMetadata__.exports.default.annotations?.framerVariables;
  if (t)
    try {
      return JSON.parse(t);
    } catch {
      return;
    }
}
function yg(e, t) {
  return (n) => {
    let r = {},
      i = vg(t);
    for (let e in n) ex(r)[i?.[e] ?? e] = n[e];
    return E(e, { ...r });
  };
}
function bg(e, t, n) {
  let r = [],
    i = Ll(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!rt(e)) return kO;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return rt(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : {
          inputRange: [0, Math.max(a - 1, 0), ...i],
          outputRange: [-1, -1, ...r],
        }
    : kO;
}
function xg(e, t, n, r = jO) {
  let [i, a] = d.useState(e),
    [o, s] = d.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      d.useCallback(
        (e) => {
          Ai(e) ||
            (t && a(r(e)),
            n &&
              d.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t],
      ),
    ]
  );
}
function Sg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Cg() {
  return E(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: E(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function wg(e, t) {
  h(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (
      p.addEventListener(`keyup`, n),
      () => p.removeEventListener(`keyup`, n)
    );
  }, [e, t]);
}
function Tg(e, t, n, r) {
  let i = p.innerHeight - r,
    a = Math.min(p.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Eg(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new p.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Dg() {
  return (
    document.getElementById(nT) ?? document.getElementById(tT) ?? document.body
  );
}
function Og(e, t) {
  return rt(e) ? e : (t ?? 0);
}
function kg(e) {
  return Og(e?.paddingTop, e?.padding) + Og(e?.paddingBottom, e?.padding);
}
function Ag(e) {
  return Og(e?.paddingLeft, e?.padding) + Og(e?.paddingRight, e?.padding);
}
function jg(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Ag(e)}px)`,
      srcSet: po(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Mg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in UO)) continue;
    let n = UO[t],
      r = e[t];
    if (!(!rt(n) || !rt(r)) && n !== r) return !0;
  }
  return !1;
}
function Ng(e) {
  let t = qe.get(e.current);
  if (!t) return !1;
  if (Mg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Mg(e.latestValues)) return !0;
  return !1;
}
function Pg(e) {
  return D(function (
    { lightbox: t, lightboxClassName: n, onClick: r, ...i },
    o,
  ) {
    let c = S(Be),
      l = S(CO),
      d = !!l,
      f = M(null),
      p = o ?? f,
      m = M(),
      _ = s(() => jg(t, i.background), [t, i.background]),
      [v, y] = A(!1),
      [b, T] = A(),
      D = C(() => {
        if (t) {
          if (v) {
            u(() => {
              y(!0);
            });
            return;
          }
          F.read(() => {
            if (!p.current) return;
            let e = getComputedStyle(p.current),
              n =
                p.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(p.current, `::after`)
                  : void 0,
              r = p.current.offsetWidth ?? 1,
              i = p.current.offsetHeight ?? 1,
              a = Ng(p) || d ? { duration: 0 } : t.transition;
            u(() => {
              (T({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                y(!0),
                l?.stop());
            });
          });
        }
      }, [t, v, p, l?.stop, d]),
      O = b?.aspectRatio ?? 1,
      k = Zm(() => {
        if (!t || !_?.src) return;
        let e = m.current?.[_.src];
        if (e) return e;
        let n = Tg(O, t.maxWidth, Ag(t), kg(t)),
          r = Eg(_, { width: n, height: n * O });
        return ((m.current = { [_.src]: r }), r);
      }),
      ee = C(
        async (e) => {
          (r?.(e), !(v || !t || !_) && (await k(), D()));
        },
        [r, D, v, _, t, k],
      ),
      te = C((e) => {
        (e?.stopPropagation(),
          u(() => {
            y(!1);
          }));
      }, []);
    (wg(v, te),
      h(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            k();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = p.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, k),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, k));
          }
        );
      }, [k, p, t]));
    let N = j(),
      P = b?.transition ?? i.transition ?? c.transition,
      ne = b?.borderRadius,
      re = b?.imageRendering,
      ie = b?.filter,
      ae = b?.borderTop,
      oe = b?.borderRight,
      se = b?.borderBottom,
      ce = b?.borderLeft,
      le = b?.borderStyle,
      ue = b?.borderColor,
      I = !!(ae || oe || se || ce || le || ue),
      R = I
        ? {
            "--border-top-width": ae,
            "--border-right-width": oe,
            "--border-bottom-width": se,
            "--border-left-width": ce,
            "--border-style": le,
            "--border-color": ue,
          }
        : void 0,
      de = { [Vw]: i.id },
      fe = Og(t?.paddingTop, t?.padding),
      z = Og(t?.paddingBottom, t?.padding),
      pe = Og(t?.paddingLeft, t?.padding),
      B = Og(t?.paddingRight, t?.padding),
      me = b?.borderRadius
        ? { ...i.style, borderRadius: b.borderRadius }
        : i.style,
      he = v
        ? i.layoutDependency
          ? `${i.layoutDependency}-open`
          : `open`
        : i.layoutDependency,
      ge = d && v ? void 0 : (i.layoutId ?? (t ? N : void 0));
    return w(g, {
      children: [
        E(e, {
          ...i,
          style: me,
          onClick: ee,
          layoutId: ge,
          ref: p,
          layoutDependency: he,
          transition: P,
        }),
        E(Re, {
          onExitComplete: () => {
            u(() => {
              (T(void 0), l?.start());
            });
          },
          children:
            v &&
            t &&
            _ &&
            E(
              a,
              {
                children: x(
                  w(g, {
                    children: [
                      E(L.div, {
                        ...de,
                        className: n,
                        onClick: te,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: P,
                        initial: WO,
                        animate: GO,
                        exit: WO,
                      }),
                      E(L.div, {
                        ...de,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${fe}px ${B}px ${z}px ${pe}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: O,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: E(L.div, {
                            layoutId: ge,
                            transition: P,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": I,
                            style: {
                              aspectRatio: O,
                              borderRadius: ne,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: re,
                              filter: ie,
                              ...R,
                            },
                            children: E(So, {
                              image: _,
                              alt: _.alt,
                              draggable: i.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Dg(),
                ),
              },
              `backdrop`,
            ),
        }),
      ],
    });
  });
}
function Fg(e, t) {
  return JO && !t
    ? Document.parseHTMLUnsafe(e)
    : ((qO ??= new DOMParser()), qO.parseFromString(e, t ?? `text/html`));
}
function Ig(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Lg(e, t, n, r) {
  return e.replace(YO, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Bu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!gh(f) || !gh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ht(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Hu(u);
    if (!_ || V(_)) return e;
    ld(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(oT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = vi(m, v)), i + o + `"${Ig(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Rg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function zg(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Bg(e, t, n) {
  let r = M([]);
  Rg(r.current, e) ||
    ((r.current = e),
    sx.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && ks(n.current));
    }));
}
function Vg() {
  return { current: null };
}
async function Hg(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Ug(e) {
  return e in $O;
}
function Wg(e, t) {
  let n = {};
  for (let r in e) {
    if (!Ug(r)) continue;
    let i = e[r],
      a = $O[r];
    ot(i) || ot(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Gg(e, t = `character`, n, r, i) {
  if (r) {
    let t = Vg();
    return (n.add(t), E(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r;
        return w(
          a,
          {
            children: [
              E(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(ek)?.map((e, t) => {
                  let r = Vg();
                  return (
                    n.add(r),
                    E(`span`, { ref: r, style: i, children: e }, e + t)
                  );
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o,
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = Vg();
        return (
          n.add(s),
          w(
            a,
            {
              children: [
                E(`span`, { ref: s, style: i, children: e }),
                o ? null : ` `,
              ],
            },
            e + t + o,
          )
        );
      });
    }
    default:
      return e;
  }
}
function Kg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      Kt(t);
  }
}
function qg(e) {
  let t = [];
  return (
    rt(e.x) && t.push(`translateX(${e.x}px)`),
    rt(e.y) && t.push(`translateY(${e.y}px)`),
    rt(e.scale) && t.push(`scale(${e.scale})`),
    rt(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    rt(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    rt(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    rt(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    rt(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Jg(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : qg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : qg(n.effect),
              };
      }
    default:
      Kt(i);
  }
}
function Yg(e, t, n) {
  let r = no(() => new Set()),
    i = ao(),
    a = n || !i,
    o = ze(),
    c = M({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  h(() => {
    if (!a || n) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            s = { current: void 0 };
          return (
            Zg(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              s,
            ),
            () => s.current?.()
          );
        }
        default:
          Kt(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? ie(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? ie(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        Kt(l);
    }
  }, [a, r, n, t, u, d, l]);
  let f = !!e,
    p = e ? Kg(e) : void 0;
  return s(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = c.current,
          s = Jg(a, n || Xg(e, t, i), c.current.effect, o);
        return {
          text: (e) => Gg(e, p, r, o, s),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Vg();
            return (r.add(t), { ref: t, style: { ...e, ...s } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Zg(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            Kt(t);
        }
      },
    }),
    [a, f, r, n, p],
  );
}
function Xg(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t &&
      !n?.repeat &&
      (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Zg(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Wg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Qg(n, u);
      if (
        e === null ||
        (B(e, l, {
          ...r,
          restDelta: 0.001,
          delay: ne(r?.delay ?? 0, { startDelay: i }),
        }).then(() => s?.()),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        B(e, n, {
          ...r,
          restDelta: 0.001,
          delay: ne(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Hg(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (F.read(() => {
          ((e = $g(n)),
            e.length !== 0 &&
              F.update(() => {
                let t = e.map((e, t) =>
                  B(e, l, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + t * (r?.delay ?? 0),
                  }),
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          B(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      Kt(e);
  }
}
async function Qg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Hg(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function $g(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r
      ? n.push(i.current)
      : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function e_(e) {
  let t = {};
  for (let n in e) (Pe(n) || nx(n)) && (t[n] = e[n]);
  return t;
}
function t_(e) {
  return e.type === a;
}
function n_(e) {
  return e.type === `br`;
}
function r_(e, t, n, r, a = {}, s, c = t_(e) ? -1 : 0) {
  let l = i.toArray(e.props.children);
  ot(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!T(e) || !n_(e)) && (u = !1), T(e)))
      return r_(e, t, n, r, a, s, c + 1);
    let i = ot(n) ? e : n;
    return V(i) && s ? s.text(i) : i;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (V(e.type) || Fe(e.type)) {
    let n = he(e.type) || e.type,
      o = d || n,
      p = V(o) ? t?.[o] : void 0;
    ((f.className = fl(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m =
        n === `h1` ||
        n === `h2` ||
        n === `h3` ||
        n === `h4` ||
        n === `h5` ||
        n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = i_(l, a);
      f.id = e;
      let t = fl(`framer-text`, h),
        n = E(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: r }), (l = [n]));
    }
    o === `ol` &&
      (f.style = {
        ...f.style,
        [nS]: o_(f.start ?? 1, i.count(f.children), f.style?.[tS] ?? ``),
      });
  }
  return o(e, f, ...l);
}
function i_(e, t) {
  let n = ri(e.map(a_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function a_(e) {
  return V(e) || rt(e)
    ? e.toString()
    : T(e)
      ? a_(e.props.children)
      : Array.isArray(e)
        ? e.map(a_).join(``)
        : ``;
}
function o_(e, t, n) {
  return cs(Number(e) || 1, t, n);
}
function s_(e, t) {
  return (h(() => fk.subscribeToTemplate(e), [e]), fk.template(e, t));
}
function c_(e) {
  try {
    let t = Fg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function l_(e, t) {
  d_(e, u_(t));
}
function u_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function d_(e, t) {
  (f_(e, t),
    Array.from(e.children).forEach((e) => {
      d_(e, t);
    }));
}
function f_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if (
      (n === `id` && e.setAttribute(n, `${t}_${r}`),
      n === `href` || n === `xlink:href`)
    ) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function p_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (pk[t[2]] || 1));
}
function m_(e) {
  let t = p_(e.getAttribute(`width`)),
    n = p_(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function h_({ height: e, width: t, children: n }) {
  let r = g_();
  if (!r || !n) return n;
  let { props: i } = r;
  return E(L.li, {
    ...i,
    style: {
      ...i.style,
      width: t ?? `fit-content`,
      height: e ?? `fit-content`,
    },
    children: n,
  });
}
function g_() {
  try {
    return Bh();
  } catch {
    return;
  }
}
function __(e) {
  return e > mk ? `lazy` : void 0;
}
function v_(e, t, n) {
  let r = S_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function y_(e) {
  return e ? (e.fonts ?? Ui()) : Ui();
}
function b_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : S_(e);
}
function x_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : S_(e);
}
function S_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    C_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(w_) })
      : t.fonts.push(w_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function C_(e) {
  return gk in e;
}
function w_(e) {
  let t = T_(e) || E_(e) ? e : D_(e);
  return E_(t) ? t : O_(t);
}
function T_(e) {
  return `source` in e;
}
function E_(e) {
  return `cssFamilyName` in e;
}
function D_(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(
            `/test/framer/third-party-assets/fontshare/`,
          )
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function O_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${hk}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function k_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function A_(e, t) {
  let n = iy({ batch: !0, priority: t.priority, signal: t.signal });
  return n ? n.then(e) : e();
}
async function j_(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = iy({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e }),
        ),
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function M_(e) {
  return e.loader;
}
function N_(e, t, n) {
  let r = M_(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  q,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  J,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  Y,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  X,
  Bx,
  Vx,
  Hx,
  Ux,
  Z,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  Q,
  PE,
  FE,
  IE,
  LE,
  RE,
  $,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k = e(() => {
    (te(),
      de(),
      f(),
      O(),
      m(),
      (P_ = He({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create &&
            ((i.prototype = Object.create(null)),
            new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`)
              throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0
              ? (e._events = new i())
              : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events))
              n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols
              ? e.concat(Object.getOwnPropertySymbols(t))
              : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++)
                o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch (
                  (c.once && this.removeListener(e, c.fn, void 0, !0), l)
                ) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++)
                  u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch (
                    (c[d].once && this.removeListener(e, c[d].fn, void 0, !0),
                    l)
                  ) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u)
                        for (p = 1, u = Array(l - 1); p < l; p++)
                          u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn)
                o.fn === t &&
                  (!i || o.once) &&
                  (!n || o.context === n) &&
                  s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t ||
                    (i && !o[c].once) ||
                    (n && o[c].context !== n)) &&
                    l.push(o[c]);
                l.length
                  ? (this._events[a] = l.length === 1 ? l[0] : l)
                  : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (F_ = He({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e,
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (I_ = He({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
          e,
          t,
        ) {
          t.exports = F_();
        },
      })),
      (L_ = He({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
          e,
          t,
        ) {
          var n = I_(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = {
              $$typeof: !0,
              render: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
            },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (R_ = He({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
          e,
          t,
        ) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t),
                        e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` ||
                        document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= p),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (m(e) && /Apple/.test(p.navigator.vendor)
                    ? ((e =
                        /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                          p.navigator.userAgent,
                        )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function m(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !f(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t =
                        (v != -1 && y != -1) ||
                        (v != -1 && b != -1) ||
                        (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              p.navigator.userAgent,
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 &&
                                  11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var m = new r(s),
                      g = new r(s),
                      _ = new r(s),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      f(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((p.FontFaceObserver = s),
                  (p.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (z_ = () => {}),
      (B_ = p !== void 0),
      (V_ =
        B_ &&
        (t.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
            t.userAgent,
          ))),
      (H_ = B_ && typeof p.requestIdleCallback == `function`),
      (U_ = H_ ? p.requestIdleCallback : setTimeout),
      (W_ = () => z_),
      (G_ = () => !0),
      (K_ = () => !1),
      (q_ = new Map()),
      (J_ = new Map()),
      (Y_ = new Set()),
      (X_ = `:`),
      (Z_ = B_ ? void 0 : new Set()),
      (Q_ = `preload`),
      ($_ = Object.keys),
      (ev = `equals`),
      (tv = d.createContext({})),
      (nv = d.createContext({})),
      (rv = []),
      (iv = `default`),
      (av = {
        Pending: `pending`,
        Fulfilled: `fulfilled`,
        Rejected: `rejected`,
      }),
      (ov = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && _t(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = av.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === av.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === av.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== av.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Z_ !== void 0 && Z_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = av.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = av.Rejected), (this.reason = e));
            },
            n;
          try {
            n =
              this.cacheHash && q_.has(this.cacheHash)
                ? q_.get(this.cacheHash)
                : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ft(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === av.Fulfilled) return this.value;
          throw this.promiseState === av.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (sv = -1),
      (cv = -2),
      (lv = -3),
      (uv = -4),
      (dv = -5),
      (fv = -6),
      (pv = -7),
      (mv = 2 ** 32 - 1),
      (hv = mv - 1),
      (gv = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (_v = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (vv = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (yv = typeof Uint8Array.fromBase64 == `function`),
      (bv = typeof process == `object` && process.versions?.node !== void 0),
      (xv = yv ? an : bv ? sn : ln),
      (Sv = yv ? on : bv ? cn : un),
      (Cv = Object.freeze({ kind: `not-plain` })),
      (wv = Object.freeze({ kind: `symbol-keys` })),
      (Tv = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Jt(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => ({
          buffer: e.buffer,
          byteOffset: e.byteOffset,
          byteLength: e.byteLength,
          length: e.length,
          bufferByteLength: e.buffer.byteLength,
        }),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => rn(e),
        shapeOf: (e) =>
          qt(e)
            ? Zt(e).length > 0
              ? wv
              : {
                  kind:
                    Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : Cv,
        get: (e, t) => e[t],
      })),
      (Ev = Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[hv] = void 0), delete t[hv], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => new Set(),
        createMap: () => new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (Dv = B_
        ? p
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: {
              hash: ``,
              hostname: ``,
              href: ``,
              origin: ``,
              pathname: ``,
              search: ``,
            },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (Ov = 2),
      (kv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Av = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Mv = class {
        payload = yn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return mn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (Nv = B_ ? void 0 : new Mv()),
      (Pv = Av.CollectionUtilsCache),
      (Fv = new WeakMap()),
      (Iv = k(void 0)),
      (Lv = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new ov(async () => {
              try {
                let t = await e();
                return (U(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ht(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = wn(n),
            i = Tn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Nv !== void 0) {
              if (ft(e)) return e.then((e) => (Nv.set(Pv, i, e), e));
              Nv.set(Pv, i, e);
            }
            return e;
          }
          if (Sn(Pv, i)) {
            let e = Cn(Pv, i);
            return (this.cacheMap.set(i, new ov(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ft(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(ht(`Failed to call CollectionUtils method.`, e)),
              (s = void 0));
          }
          if (s === void 0) {
            (Nv !== void 0 && Nv.set(Pv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new ov(async () => {
            try {
              let e = ft(s) ? await s : s;
              return (Nv !== void 0 && Nv.set(Pv, i, e), e);
            } catch (e) {
              console.error(ht(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (Rv = /Mac/u),
      (zv = /iPhone|iPod|iPad/iu),
      (Bv = /MacIntel/iu),
      (Vv = /Edg\//u),
      (Hv = /Chrome/u),
      (Uv = /Google Inc/u),
      (Wv = /Safari/u),
      (Gv = /Apple Computer/u),
      (Kv = /Firefox\/\d+\.\d+$/u),
      (qv = /Version\/([\d.]+)/u),
      (Jv = /FramerX/u),
      (Yv = /tablet|iPad|Nexus 9/iu),
      (Xv = /mobi/iu),
      (Zv = 1e3 / 60),
      (Qv = 1e3 / 25),
      ($v = 500),
      (ey = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (ty = Promise.resolve()),
      (ny = 100),
      (ry = (e) => {
        F.read(e, !1, !0);
      }),
      (iy = Zn(ry)),
      (ay = `framer_variant`),
      (oy = RegExp(`:([a-z]\\w*)`, `gi`)),
      (sy = async () => {}),
      (cy = {
        contentLocale: null,
        activeLocale: null,
        locales: [],
        setLocale: sy,
      }),
      (ly = (() => {
        let e = d.createContext(cy);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (uy = (() => {
        let e = d.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (dy = !V_),
      (fy = !1),
      (py = d.createContext({ global: void 0, routes: {} })),
      (my = 10),
      (hy = 1e4),
      (gy = (e) => `--view-transition-${e}`),
      (_y = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` &&
              e.angularDirection === `clockwise` &&
              t === `start`) ||
              (n === `exit` &&
                e.angularDirection === `counter-clockwise` &&
                t === `end`) ||
              (n === `enter` &&
                e.angularDirection === `counter-clockwise` &&
                t === `start`) ||
              (n === `enter` &&
                e.angularDirection === `clockwise` &&
                t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${gy(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${gy(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${gy(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (vy = {
        circle: {
          makeKeyframe: (e, t) =>
            `${gy(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${gy(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Sr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${gy(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: _y,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${xr(e.x)} ${xr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = yr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) ||
                (t === `end` && n === `enter`)) &&
                (i = e.width),
              `${gy(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${gy(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${gy(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +(
              (t === `start` && n === `exit`) ||
              (t === `end` && n === `enter`)
            );
            return `${gy(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${gy(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${gy(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (yy = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (by = `view-transition-styles`),
      (xy = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Sy = () => {}),
      (wy = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (Cy ||
            ((Cy = document.createElement(`div`)),
            Cy.setAttribute(`aria-live`, `assertive`),
            Cy.setAttribute(`aria-atomic`, `true`),
            (Cy.style.position = `absolute`),
            (Cy.style.transform = `scale(0)`),
            document.body.append(Cy)),
            setTimeout(() => {
              Cy.textContent = e;
            }, 60));
        }
      }),
      (Ey =
        B_ &&
        typeof p.navigation?.back == `function` &&
        !(() => {
          if (t === void 0) return !1;
          let e = t.userAgent,
            n = e.indexOf(`Chrome/`),
            r = +e.slice(n + 7, e.indexOf(`.`, n));
          return r > 101 && r < 128;
        })() &&
        !In()),
      (Dy = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Oy = d.createContext(null)),
      (ky = (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Ay = typeof document < `u` ? r : h),
      (jy = new Set()),
      (My = (() => {
        let e = k({
          urlSearchParams: new URLSearchParams(),
          replaceSearchParams: async () => {},
        });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ny = 46),
      (Py = 47),
      (Fy = (e, t) => e.charCodeAt(t)),
      (Iy = (e, t) => e.lastIndexOf(t)),
      (Ly = (e, t, n) => e.slice(t, n)),
      (Ry = !1),
      (zy = `/`),
      (By = (e) => e === Py),
      (Vy = new Set([`/404.html`, `/404`, `/404/`])),
      (Hy = `__f_replay`),
      (Uy = `__f_replay_ignore`),
      (Wy = () => B_),
      (Gy =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`,
        )),
      (Ky = (e) => {
        e.target?.closest?.(`#main`) &&
          (ki(e) ||
            (e.stopPropagation(),
            performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (qy = !1),
      (ub = [Pi]),
      (lb = [Pi]),
      (cb = [Pi]),
      (sb = [Pi]),
      (ob = [Pi]),
      (ab = [Pi]),
      (ib = [Pi]),
      (rb = [Pi]),
      (nb = [Pi]),
      (tb = [Pi]),
      (eb = [Pi]),
      ($y = [Pi]),
      (Qy = [Pi]),
      (Zy = [Pi]),
      (Xy = [Pi]),
      (Yy = [Pi]),
      (Jy = [Pi]),
      (fb = class {
        constructor() {
          (Xe(db, 5, this),
            xe(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            xe(this, `mutationEffects`, {
              measure: () => this.measureMutationEffects(),
            }),
            xe(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            xe(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            xe(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            xe(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: {
                markEnd: () => this.markLayoutStylePaintEnd(),
              },
            }),
            xe(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Fi(
              `framer-hydration-render`,
              `framer-hydration-start`,
              `framer-hydration-render-end`,
            ));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Fi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`,
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Fi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`,
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Fi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]
                ?.name ??
                performance.getEntriesByName(
                  `framer-hydration-effects-start`,
                )[0]?.name,
              `framer-hydration-effects-end`,
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Fi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`,
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Fi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`,
            ),
            Fi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`,
            ));
        }
        measureMutationEffects() {
          Fi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`,
          );
        }
        measureUnattributedHydrationOverhead() {
          Fi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]
              ?.name ??
              performance.getEntriesByName(
                `framer-hydration-layout-effects-end`,
              )[0]?.name,
            `framer-hydration-browser-render-start`,
          );
        }
      }),
      (db = Ae(null)),
      Le(db, 1, `markRenderStart`, ub, fb),
      Le(db, 1, `markRenderEnd`, lb, fb),
      Le(db, 1, `markUseInsertionEffectsStart`, cb, fb),
      Le(db, 1, `markUseInsertionEffectRouterStart`, sb, fb),
      Le(db, 1, `markUseInsertionEffectsEnd`, ob, fb),
      Le(db, 1, `markUseLayoutEffectsStart`, ab, fb),
      Le(db, 1, `markRouterUseLayoutEffectStart`, ib, fb),
      Le(db, 1, `markUseLayoutEffectsEnd`, rb, fb),
      Le(db, 1, `markUseEffectsStart`, nb, fb),
      Le(db, 1, `markUseEffectsRouterStart`, tb, fb),
      Le(db, 1, `markUseEffectsAreSynchronous`, eb, fb),
      Le(db, 1, `markUseEffectsEnd`, $y, fb),
      Le(db, 1, `markRafStart`, Qy, fb),
      Le(db, 1, `markRafEnd`, Zy, fb),
      Le(db, 1, `markLayoutStylePaintEnd`, Xy, fb),
      Le(db, 1, `measureMutationEffects`, Yy, fb),
      Le(db, 1, `measureUnattributedHydrationOverhead`, Jy, fb),
      je(db, fb),
      (mb = !1),
      (hb = { Start: Bi, End: Vi }),
      (gb = class extends Error {}),
      (_b = class extends v {
        constructor(e) {
          (super(e),
            (this.state = {
              error: void 0,
              routerRenderKey: e.routerRenderKey,
            }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof gb)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Hi(e, t);
        }
      }),
      (vb = Object.freeze([])),
      (bb = new Set()),
      (xb = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function`
                ? r(e, t)
                : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Sb = (() => {
        function e(e) {
          return (
            ca(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`,
            ),
            la(e) ? e : new Tb(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : la(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              la(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (Cb = `onUpdate`),
      (wb = `finishTransaction`),
      (Tb = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new xb();
        static interpolationFor(e, t) {
          if (la(e)) return ua(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (la(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) =>
            e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), {
              x: 0,
              y: 0,
            })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({
            x: fa(e.x, t.x),
            y: fa(e.y, t.y),
          })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) =>
            (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) =>
            (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (
                n < 180 && (t -= i * 360),
                n > 180 && (t += i * 360),
                (e = t),
                t
              );
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ma ||= {})),
      (Eb = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (Db = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon
            ? (t / e.refY) * e.kappa
            : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8
            ? (e.refY * t) / e.kappa
            : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(
            e,
            Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))),
          );
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z,
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z,
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z,
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x =
            0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y =
              0.21263900587151 * t +
              0.71516867876775 * n +
              0.072192315360733 * r),
            (this.xyz_z =
              0.019330818715591 * t +
              0.11919477979462 * n +
              0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) /
              (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v,
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999)
            ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100),
              (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999)
            ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100),
              (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(),
            this.lchToLuv(),
            this.luvToXyz(),
            this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(),
            this.lchToLuv(),
            this.luvToXyz(),
            this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (Db.hexChars = `0123456789abcdef`),
      (Db.refY = 1),
      (Db.refU = 0.19783000664283),
      (Db.refV = 0.46831999493879),
      (Db.kappa = 903.2962962),
      (Db.epsilon = 0.0088564516),
      (Db.m_r0 = 3.240969941904521),
      (Db.m_r1 = -1.537383177570093),
      (Db.m_r2 = -0.498610760293),
      (Db.m_g0 = -0.96924363628087),
      (Db.m_g1 = 1.87596750150772),
      (Db.m_g2 = 0.041555057407175),
      (Db.m_b0 = 0.055630079696993),
      (Db.m_b1 = -0.20397695888897),
      (Db.m_b2 = 1.056971514242878),
      (Ob = new Db()),
      (kb = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (Ab =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (jb = (e) => {
        let { r: t, g: n, b: r, a: i } = Ra(e);
        return {
          x:
            0.486570948648216 * t +
            0.265667693169093 * n +
            0.1982172852343625 * r,
          y:
            0.2289745640697487 * t +
            0.6917385218365062 * n +
            0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Mb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ba({
          r:
            e * 3.2409699419045226 -
            t * 1.537383177570094 -
            0.4986107602930034 * n,
          g:
            e * -0.9692436362808796 +
            t * 1.8759675015077204 +
            0.0415550574071756 * n,
          b:
            e * 0.0556300796969936 -
            t * 0.2039769588889765 +
            1.0569715142428784 * n,
          a: r,
        })),
      (Nb = (e) => {
        let { r: t, g: n, b: r, a: i } = Ra(e);
        return {
          x:
            0.4123907992659593 * t +
            0.357584339383878 * n +
            0.1804807884018343 * r,
          y:
            0.2126390058715102 * t +
            0.715168678767756 * n +
            0.0721923153607337 * r,
          z:
            0.0193308187155918 * t +
            0.119194779794626 * n +
            0.9505321522496607 * r,
          a: i,
        };
      }),
      (Pb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ba({
          r:
            e * 2.4934969119414263 -
            t * 0.9313836179191242 -
            0.402710784450717 * n,
          g:
            e * -0.8294889695615749 +
            t * 1.7626640603183465 +
            0.0236246858419436 * n,
          b:
            e * 0.0358458302437845 -
            t * 0.0761723892680418 +
            0.9568845240076871 * n,
          a: r,
        })),
      (Fb = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return Va(this);
        }
        rgb() {
          return Ga(this);
        }
        hsl() {
          return wa(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1
                ? `rgb(${a}, ${o}, ${s})`
                : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Ua(t));
            case `srgb`:
              return new e(Wa(Ua(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Wa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            }),
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Ia(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!V(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Ib = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Ib.get(n);
            return (
              r ||
              ((r = t(n)),
              r === void 0 ? { ...e(`black`), isValid: !1 } : (Ib.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Ka(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue:
                typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) =>
            typeof t == `string` ? e.isColorString(t) : e.isColorObject(t)),
          (e.isColorString = (e) => typeof e == `string` && Na(e) !== !1),
          (e.isColorObject = (e) =>
            H(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => Ca(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Fb.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...ya(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Da(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Da(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = Ca(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Eb)) if (Eb[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(
                0,
                Math.min(255, r.r - Math.round(255 * -(n / 100))),
              )),
              (r.g = Math.max(
                0,
                Math.min(255, r.g - Math.round(255 * -(n / 100))),
              )),
              (r.b = Math.max(
                0,
                Math.min(255, r.b - Math.round(255 * -(n / 100))),
              )),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.l += n / 100),
              (r.l = Math.min(1, Math.max(0, r.l))),
              e(r)
            );
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.l -= n / 100),
              (r.l = Math.min(1, Math.max(0, r.l))),
              e(r)
            );
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.s += n / 100),
              (r.s = Math.min(1, Math.max(0, r.s))),
              e(r)
            );
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return (
              (r.s -= n / 100),
              (r.s = Math.min(1, Math.max(0, r.s))),
              e(r)
            );
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) =>
            e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`",
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(
                `Both arguments for Color.interpolate must be Color objects`,
              );
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: ha(i, [0, 1], [t.r, r.r], a),
                g: ha(i, [0, 1], [t.g, r.g], a),
                b: ha(i, [0, 1], [t.b, r.b], a),
                a: ha(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: ha(i, [0, 1], [u, u + f], a),
                s: ha(i, [0, 1], [c.s, l.s], a),
                l: ha(i, [0, 1], [c.l, l.l], a),
                a: ha(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ba(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => wa(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` ||
                t === `fill` ||
                t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045
            ? e / 12.92
            : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Lb = (e) => e instanceof Te),
      (Rb = P_().EventEmitter),
      (zb = class {
        _emitter = new Rb();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames())
            e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames())
              if (t === this._emitter.listeners(e)) return;
          }
          n === !0
            ? this._emitter.once(e, t, i)
            : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e
            ? this._emitter.removeListener(e, t)
            : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames())
              e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Bb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Vb = Dv.requestAnimationFrame || Bb),
      (Hb = (e) => Vb(e)),
      (Ub = 1 / 60),
      (Wb = class extends zb {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Ub = e;
        }
        static get TimeStep() {
          return Ub;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Hb(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Ub;
        }
        tick = () => {
          this._started &&
            (Hb(this.tick),
            this.emit(`update`, this._frame, Ub),
            this.emit(`render`, this._frame, Ub),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Gb = new Wb()),
      (Kb = { target: Qa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Kb.target,
        hasRestrictions: () => {
          let e = Kb.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (qb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0))
            return `0px`;
          let i = t;
          return (
            n &&
              r &&
              ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Qe({
        borderTopWidth: qb(`y`),
        borderLeftWidth: qb(`x`),
        borderRightWidth: qb(`x`),
        borderBottomWidth: qb(`y`),
      }),
      (Jb = d.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Yb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Xb = {
        ...Yb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Zb = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Qb = { ...Zb, fontWeight: 500 }),
      ($b = {
        ...Zb,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (ex = (e) => e),
      (tx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (nx = so(
        (e) =>
          tx.test(e) ||
          (e.charCodeAt(0) === 111 &&
            e.charCodeAt(1) === 110 &&
            e.charCodeAt(2) < 91),
      )),
      (rx = (e) => () => {
        sa(e);
      }),
      (ix = () => () => {}),
      (ax = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = sx.useImageSource(e, t, n);
          return s(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (ox = !1),
      (sx = new Proxy(ax, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? ix()
              : rx(
                  ox
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`,
                );
        },
      })),
      (cx = {
        isSelectorLoaded(e) {
          return sx.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return sx.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return sx.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return sx.fontStore.loadMissingFonts(e, t);
        },
      }),
      (lx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (ux = [1, 2, 2.2]),
      (dx = [512, 1024, 2048, 4096]),
      (fx = 512),
      (px = {
        position: `absolute`,
        ...lx,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }),
      (mx = `src`),
      (hx = {
        isImageObject: function (e) {
          return !e || typeof e == `string`
            ? !1
            : typeof e == `object` && mx in e;
        },
      }),
      (gx = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ao(ma.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e(
              { x: t.a.x + i, y: t.a.y - a },
              { x: t.b.x + i, y: t.b.y - a },
            );
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ma(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return {
              x: i * t.b.x + (1 - i) * t.a.x,
              y: i * t.b.y + (1 - i) * t.a.y,
            };
          }),
          (e.distance = (e) => ma.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x &&
                e.y === t.y &&
                e.width === t.width &&
                e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({
          x: e.x * t,
          y: e.y * t,
          width: e.width * t,
          height: e.height * t,
        }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return {
            x: e.x - t,
            y: e.y - t,
            width: e.width + n,
            height: e.height + n,
          };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return {
            x: t,
            y: n,
            width: Math.max(r - t, 0),
            height: Math.max(i - n, 0),
          };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return {
            x: t,
            y: n,
            width: Math.max(r - t, 1),
            height: Math.max(i - n, 1),
          };
        },
        round: (e, t = 0) => ({
          x: da(e.x, t),
          y: da(e.y, t),
          width: da(e.width, t),
          height: da(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return {
            x: t,
            y: n,
            width: Math.max(r - t, 0),
            height: Math.max(i - n, 0),
          };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return {
            x: a,
            y: o,
            width: ma.distance(t, n),
            height: ma.distance(t, i),
          };
        },
        merge: (...e) => {
          let t = {
              x: Math.min(...e.map(Y.minX)),
              y: Math.min(...e.map(Y.minY)),
            },
            n = {
              x: Math.max(...e.map(Y.maxX)),
              y: Math.max(...e.map(Y.maxY)),
            };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({
              x: e.x + e.width,
              y: e.y + e.height,
            }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(
            t.x >= Y.maxX(e) ||
            Y.maxX(t) <= e.x ||
            t.y >= Y.maxY(e) ||
            Y.maxY(t) <= e.y
          ),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) =>
          t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x
              ? (n = e.x - t.x)
              : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y
              ? (r = e.y - t.y)
              : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            ma.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t)
            if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [gx(t, n), gx(n, r), gx(r, i), gx(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  Kt(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              Kt(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  Kt(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              Kt(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = gx(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && gx.intersection(n, t, !0)) {
              let n = _x[e];
              return (
                U(n, () => `Invalid edge name: ${JSON.stringify(_x)}`),
                { edge: t, name: n }
              );
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          U(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            U(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (_x = [`top`, `right`, `bottom`, `left`]),
      (vx = {
        quickfix: (e) => (
          (jo(e.widthType) || jo(e.heightType)) && (e.aspectRatio = null),
          W(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || jo(e.widthType) || W(e.maxWidth)) &&
              (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || jo(e.heightType) || W(e.maxHeight)) &&
              (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (yx = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = vx.quickfix({
              left: W(t) || la(t),
              right: W(n) || la(n),
              top: W(r) || la(r),
              bottom: W(i) || la(i),
              widthType: Mo(a),
              heightType: Mo(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Sb.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Sb.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Sb.getNumber(t) : null,
              right: d.right ? Sb.getNumber(n) : null,
              top: d.top ? Sb.getNumber(r) : null,
              bottom: d.bottom ? Sb.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Sb.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Sb.getNumber(t?.sizing.height) : null,
            c = Ro(e.left, e.right);
          if (o && W(c)) i = o - c;
          else if (n && jo(e.widthType)) i = n.width;
          else if (W(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r
                  ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                    e.width
                  : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                Kt(e.widthType);
            }
          let l = Ro(e.top, e.bottom);
          if (s && W(l)) a = s - l;
          else if (n && jo(e.heightType)) a = n.height;
          else if (W(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height /
                      r.freeSpaceUnitDivisor.height) *
                    e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                Kt(e.heightType);
            }
          return Lo(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = yx.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Sb.getNumber(l.width) : null,
            d = l ? Sb.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (bx = 200),
      (xx = 200),
      (Sx = d.createContext({ parentSize: 0 })),
      (Cx = (e) => {
        let t = Ko(),
          { parentSize: n, children: r } = e,
          i = d.useMemo(() => ({ parentSize: n }), [Jo(n), Yo(n)]);
        return t === 1
          ? r
            ? E(g, { children: r })
            : null
          : E(Sx.Provider, { value: i, children: r });
      }),
      (wx = d.createContext(void 0)),
      (Tx = new Set()),
      (Dx = `style[data-framer-css-ssr-minified]`),
      (Ox = (() => {
        if (!Rn()) return new Set();
        let e = document
          .querySelector(Dx)
          ?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (kx = `data-framer-css-ssr`),
      (Ax = (e, t, n) =>
        d.forwardRef((r, i) => {
          let { sheet: a, cache: o } = d.useContext(wx) ?? {},
            s = n;
          if (!Rn()) {
            tt(t) && (t = t(rs(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Mx.add(e, s);
          }
          return (
            c(() => {
              (s && Ox.has(s)) ||
                (tt(t)
                  ? t(rs(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && ns(e, a, o));
            }, []),
            E(e, { ...r, ref: i })
          );
        })),
      (jx = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Mx = new jx()),
      (Nx = `--framer-will-change-override`),
      (Px = `--framer-will-change-effect-override`),
      (Fx = `--framer-will-change-filter-override`),
      (Ix = `--overflow-clip-fallback`),
      (Lx = `--one-if-corner-shape-supported`),
      (Rx = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (zx = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(zx || {})),
      (X = zx),
      (Bx = `framer-form-input`),
      (Vx = `framer-form-input-wrapper`),
      (Hx = `framer-form-input-empty`),
      (Ux = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (U(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${is(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            U(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Wx = [
        Z(`.${Bx}`, {
          padding: Z.variable(X.Padding),
          background: `transparent`,
          fontFamily: Z.variable(X.FontFamily),
          fontWeight: Z.variable(X.FontWeight),
          fontSize: Z.variable(X.FontSize),
          fontStyle: Z.variable(X.FontStyle),
          color: Z.variable(X.FontColor),
          fontFeatureSettings: Z.variable(X.FontOpenType),
          fontVariationSettings: Z.variable(X.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(X.WrapperHeight, `100%`),
          letterSpacing: Z.variable(X.FontLetterSpacing),
          textAlign: Z.variable(X.FontTextAlignment),
          lineHeight: Z.variable(X.FontLineHeight),
        }),
        Z(`.${Bx}:focus-visible`, { outline: `none` }),
      ]),
      (Gx = [Z(`.${Vx}`, { overflow: `hidden` })]),
      (Kx = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
      (qx = [
        `.${Vx}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Jx = `customError`),
      (Yx = `valid`),
      (Xx = 10),
      (Zx = 8),
      (Qx = 16),
      ($x = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${Qx}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${Qx}px`,
        backgroundColor: Z.variable(X.IconColor),
      }),
      (eS = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${Qx}px`,
        boxSizing: `content-box`,
        padding: Z.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...$x,
      }),
      (tS = `--list-style-type`),
      (nS = `--max-list-digits`),
      (rS = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (iS = {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
      }),
      (aS = { display: `inline-block` }),
      (oS = { display: `block` }),
      (sS = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${iS.display};
            flex-direction: ${iS.flexDirection};
            justify-content: ${iS.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ps([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ps([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${ps([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${aS.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ps([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${ps([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ps([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ps([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${ps([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${ps([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${ps([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${ps([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${ps([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${ps([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ps([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${ps([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ps([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ps([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${ps([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ps([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ps([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ps([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ps([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${oS.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${nS}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${ms(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (cS = `--text-truncation-display-inline-for-safari-16`),
      (lS = `--text-truncation-display-none-for-safari-16`),
      (uS = `--text-truncation-line-break-for-safari-16`),
      (dS = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (fS = `(background: -webkit-named-image(i))`),
      (pS = `(contain-intrinsic-size: inherit)`),
      (mS = [
        `@supports ${fS} and (not ${pS}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${dS.join(`, `)} { display: var(${cS}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${dS.map((e) => `${e}::after`).join(`, `)} { content: var(${uS}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${lS}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${cS}, ${aS.display}) }
    }`,
      ]),
      (hS = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Nx}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Nx}: transform; } }`,
                ]
              : [`body { ${Nx}: none; ${Px}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Fx}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Fx}: filter; } }`,
                ]
              : [`body { ${Fx}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Ix}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Lx}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...sS,
          ...Rx,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...mS,
          f,
        ];
      }),
      (gS = ts(() => hS(!1))),
      (_S = ts(() => hS(!0))),
      (vS = Fn()),
      (yS = d.createContext(!1)),
      (bS = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(
            this.updateResizedElements.bind(this),
          );
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (xS = Rn() ? new bS() : void 0),
      (SS = `data-framer-size-compatibility-wrapper`),
      (CS = `0.000001px`),
      (wS = ` translateZ(${CS})`),
      (TS = Bn() || In() || Vn()),
      (ES = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? As(t) : js(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Nt(this.props, e);
          }
          componentDidUpdate(e) {
            ex(this.props).clip &&
              ex(this.props).radius === 0 &&
              ex(e).radius !== 0 &&
              Ns(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (DS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++)
          ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (OS = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = Na(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(xa(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(xa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(xa(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(xa(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => xa(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) =>
          q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (kS = /var\(.+\)/u),
      (AS = new Map()),
      (jS = [`stops`]),
      (MS = [`start`, `end`]),
      (NS = [`angle`, `alpha`]),
      (PS = {
        isLinearGradient: (e) =>
          H(e) && NS.every((t) => t in e) && (Vs(e) || Bs(e)),
        hash: (e) => e.angle ^ zs(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Rs(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (FS = [
        `widthFactor`,
        `heightFactor`,
        `centerAnchorX`,
        `centerAnchorY`,
        `alpha`,
      ]),
      (IS = {
        isRadialGradient: (e) =>
          H(e) && FS.every((t) => t in e) && (Vs(e) || Bs(e)),
        hash: (e) =>
          e.centerAnchorX ^
          e.centerAnchorY ^
          e.widthFactor ^
          e.heightFactor ^
          zs(e, e.alpha),
        toCSS: (e, t) => {
          let {
              alpha: n,
              widthFactor: r,
              heightFactor: i,
              centerAnchorX: a,
              centerAnchorY: o,
            } = e,
            s = Rs(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i =
                  e.position === 1 && r?.position === 1
                    ? e.position - 1e-4
                    : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (LS = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (RS = new Set([...LS, ...LS.map((e) => `${e}Capture`)])),
      (zS = `overflow`),
      (BS = { x: 0, y: 0, width: 200, height: 200 }),
      (VS = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (HS = D(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = bs(e),
          l = Qs(s),
          u = Ss(e),
          d = qs(e),
          f = M(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id":
              ex(e)[`data-framer-offset-parent-id`],
          };
        !$s(e) && n && (ex(m)[`data-framer-name`] = n);
        let [h, _] = Zs(s),
          v = Xs(s),
          y = Qo(v),
          b = r && !(_ && !y && Bo(v)) ? r : void 0;
        (b ? (l.transformTemplate ||= xs(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, vs(b, s.style)),
          Os(e, p));
        let x = Eo(e),
          C = ec(s, v, _, S(yS)),
          T = Xo(
            w(g, {
              children: [
                x
                  ? E(So, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && ys(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                E(wo, { ...a, border: i, layoutId: u }),
              ],
            }),
            C,
          ),
          D = es(e.as),
          O = $o(x);
        return (
          e.fitImageDimension &&
            O &&
            ((h[e.fitImageDimension] = `auto`),
            (h.aspectRatio = O.width / O.height)),
          w(D, { ...m, ...l, layoutId: u, style: h, ref: p, children: [T, o] })
        );
      })),
      (US = gs(
        D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? E(HS, { ...e, ref: t }) : null;
        }),
      )),
      (WS = `__LAYOUT_TREE_ROOT`),
      (GS = d.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (KS = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow)
            return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === WS && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&=
            (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return E(GS.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (qS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (JS = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e,
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e),
            this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e),
            this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (YS = k(new Map())),
      (XS = typeof IntersectionObserver > `u` ? z_ : cc),
      (ZS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (QS = d.createContext(null)),
      ($S = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(
              this,
              !!this.props.animatesLayout,
            );
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l
              ? o.schedulePromoteTree(this, a, !!i)
              : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === WS && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth
              ? this.rootProjectionNode
              : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return E(Ye.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (eC = (e) => {
        let t = d.useContext(GS);
        return E($S, { ...e, sharedLayoutContext: t });
      }),
      (tC = d.createContext(!0)),
      (nC = k({ register: () => {}, deregister: () => {} })),
      (rC = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = pc(),
          i = M({
            register: C(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r],
            ),
            deregister: C(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r],
            ),
          }).current;
        return (
          h(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, tt(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r],
          ),
          E(nC.Provider, { value: i, children: n })
        );
      }),
      (iC = d.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: g,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: v,
        index: y,
        areMagicMotionLayersPresent: b,
        id: x,
        isInitial: C,
      }) {
        let T = _e(),
          D = S(Ie),
          { persistLayoutIdCache: O } = S(Jb),
          k = M({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: gc({}, m, a),
          }),
          A = M(null),
          j = D !== null && !D.isPresent;
        (t && k.current.wasCurrent === void 0 && O(),
          h(() => {
            if (e || !T) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!j && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = gc(k.current.origins, m, a),
              l = k.current.wasReset;
            (o || s
              ? (T.stop(), T.start({ zIndex: y, ...c, ...a }), (l = !1))
              : l === !1 &&
                (T.stop(), T.set({ zIndex: y, ...aC, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let ee = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          te = p ? { type: !1 } : f || d,
          N = { ..._ };
        ((N.left === void 0 || N.right === void 0) && (N.width = `auto`),
          (N.top === void 0 || N.bottom === void 0) && (N.height = `auto`));
        let P = (_c(a) || _c(m)) && (e || t || n) ? 1200 : void 0,
          ne = { ...aC, ...k.current.origins },
          re = e
            ? {
                initial: { ...ne, ...m },
                animate: { ...ne, ...a, transition: ee },
                exit: { ...ne, ...g, transition: d },
              }
            : { animate: T, exit: { ...ne, ...g, transition: te } },
          ie = !(j || b === !1),
          F = !!t && ie,
          ae = t && C;
        return w(US, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && v) ? y : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: P,
          },
          children: [
            e &&
              E(US, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            E(US, {
              ...N,
              ...re,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: {
                pointerEvents: void 0,
                opacity: ae || e || (t && v) ? 1 : 0,
              },
              "data-is-present": ie ? void 0 : !1,
              ref: A,
              children: E(QS.Provider, {
                value: A,
                children: E(tC.Provider, {
                  value: F,
                  children: E(rC, {
                    isCurrent: F,
                    isOverlayed: r,
                    children: E(eC, {
                      isLead: t,
                      animatesLayout: !!v,
                      transition: ee,
                      isExiting: !ie,
                      isOverlayed: r,
                      id: x,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, hc)),
      (aC = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (oC = class {
        warning = () => {
          sa(
            `The Navigator API is only available inside of Framer: https://www.framer.com/`,
          );
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (sC = k(new oC())),
      (cC = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: {
          backfaceVisible: !1,
          exit: { rotateY: -180 },
          enter: { rotateY: 180 },
        },
        FlipRight: {
          backfaceVisible: !1,
          exit: { rotateY: 180 },
          enter: { rotateY: -180 },
        },
        FlipUp: {
          backfaceVisible: !1,
          exit: { rotateX: 180 },
          enter: { rotateX: -180 },
        },
        FlipDown: {
          backfaceVisible: !1,
          exit: { rotateX: -180 },
          enter: { rotateX: 180 },
        },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (lC = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (uC = $_(aC)),
      (dC = d.createContext(void 0)),
      (fC = d.createContext(void 0)),
      (pC = (() => {
        class e extends v {
          #e = null;
          state = lC();
          static defaultProps = { enabled: !0 };
          static contextType = dC;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !ko(t) || !Oo(t)) return;
            let n = { ...cC.Instant },
              r = {
                type: `add`,
                key:
                  t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = xc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!ko(t) || !Oo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, cC.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let {
              current: t,
              previous: n,
              currentOverlay: r,
              previousOverlay: i,
            } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event
              ? this.#e === globalThis.event.timeStamp
              : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = xc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null),
              !e || !ko(e) || !Oo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({
                type: `addOverlay`,
                transition: r,
                component: e,
              });
            let i =
              e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, cC.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, cC.Fade, t);
          }
          push(e, t) {
            this.#i(e, vc(t), t);
          }
          modal(e, t) {
            this.#i(e, cC.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, yc(t), t);
          }
          flip(e, t) {
            this.#i(e, bc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, cC.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = Ic(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              U(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              U(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m =
                  l?.transition?.withMagicMotion ||
                  (d && !!this.state.previousTransition);
              a.push(
                E(
                  iC,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Kc(o, e),
                    transitionProps: u,
                    animation: Gc(o, e),
                    backfaceVisible: Uc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: E(tc, {
                      children: Jc({ component: n, transition: l?.transition }),
                    }),
                  },
                  t,
                ),
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              E(
                iC,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Hc(n, t),
                  transitionProps: Wc(n, t),
                  instant: Kc(n, t, !0),
                  animation: Gc(n, t),
                  exitProps: e.transition.enter,
                  visible: qc(n, t),
                  backdropColor: Bc(e.transition),
                  backfaceVisible: Vc(n, t),
                  onTapBackdrop: Yc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Jc({
                    component: e.component,
                    transition: e.transition,
                  }),
                },
                e.key,
              ),
            );
            return E(US, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: E(sC.Provider, {
                value: this,
                children: w(fC.Provider, {
                  value: i,
                  children: [
                    E(iC, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Lc(n),
                      animation: Rc(n),
                      backfaceVisible: zc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: E($a, {
                        children: E(KS, {
                          children: E(Re, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    E(Re, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (mC = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (hC = gs(d.forwardRef(Xc))),
      $e(L_(), 1),
      (gC = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.Dimension = `dimension`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(gC || {})),
      (_C = `optional`),
      (vC = `outputControls`),
      $e(L_(), 1),
      $e(L_(), 1),
      (yC = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (bC = Symbol(`private`)),
      (xC = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [bC]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new xb(),
                reset() {
                  for (let t in i)
                    if (yC(i, t)) {
                      let n = yC(e, t) ? ex(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, CC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[bC].reset()),
          (e.addObserver = (e, t) => e[bC].observers.add(t)),
          e
        );
      })()),
      (SC = class {
        set = (e, t, n, r) => {
          if (t === bC) return !1;
          let i = e[bC],
            a,
            o;
          if (
            (la(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Sb(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = ex(e)[t];
          if (l !== void 0) {
            la(l)
              ? ((c = l.get() !== o), l.set(o))
              : ((c = l !== o), (ex(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === bC) return ex(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[bC].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(bC);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== bC) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (CC = new SC()),
      (wC = (() => {
        function e(t = {}) {
          let n = xC(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => xC.resetObject(e));
          }),
          (e.addObserver = (e, t) => xC.addObserver(e, t)),
          e
        );
      })()),
      (TC = { update: 0 }),
      (EC = d.createContext({ update: NaN })),
      (DC = class extends v {
        observers = [];
        state = TC;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded ||
            ((this.taskAdded = !0), Gb.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), wC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            wC._stores.forEach((e) => {
              let t = wC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            E(EC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      $e(L_(), 1),
      (OC = `__framer__`),
      (kC = OC.length),
      (AC = d.createContext(void 0)),
      (jC = d.createContext(void 0)),
      (MC = `ssr-variant`),
      (NC = `ssr-variant-group-separator`),
      (PC = d.forwardRef(function (e, t) {
        let n = gl(t),
          r = d.useContext(jC),
          i = d.useSyncExternalStore(W_, K_, G_),
          a = no(() => (i ? (Rn() ? 1 : 2) : 0)),
          o = d.useContext(AC);
        return oi(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(
                `PropertyOverrides is missing GeneratedComponentContext`,
              ),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, wl(t, c, i));
            case 1:
              return yl(i, s, c, u, l, d, n, t);
            case 2:
              return yl(i, s, c, u, l, d, hl, void 0);
            default:
              Kt(a);
          }
        }, [o, r, n, e]);
      })),
      (FC = Ax(PC, `.${MC} { display: contents }`, `PropertyOverrides`)),
      (IC = `default`),
      (LC = new Set([IC])),
      (RC = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (U(
                typeof n == `string`,
                `transformTemplate must be a string, received: ${n}`,
              ),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (U(
                typeof n == `object`,
                `${t} must be a valid object, received: ${n}`,
              ),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = IC, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return IC;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = bl(r)) : IC;
        }
        setAll(e, t = LC, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = tt(n.transformTemplate)
              ? n.transformTemplate?.({}, BC)
              : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: H(a) ? a : void 0,
              animate: H(o) ? o : void 0,
              transformTemplate: V(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (zC = new RC()),
      (BC = `__Appear_Animation_Transform__`),
      (VC = `data-framer-appear-id`),
      (HC = `data-framer-appear-animation`),
      (UC = (e) => {
        if (ao())
          return {
            animate: El(e.animate) ? e.animate : void 0,
            initial: El(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (WC = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (GC = (e) => ({
        x: R(e?.x ?? 0),
        y: R(e?.y ?? 0),
        opacity: R(e?.opacity ?? 1),
        scale: R(e?.scale ?? 1),
        rotate: R(e?.rotate ?? 0),
        rotateX: R(e?.rotateX ?? 0),
        rotateY: R(e?.rotateY ?? 0),
        skewX: R(e?.skewX ?? 0),
        skewY: R(e?.skewY ?? 0),
        transformPerspective: R(e?.transformPerspective ?? 0),
      })),
      (KC = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (qC = { willChange: `transform` }),
      Object.freeze(qC),
      (JC = {}),
      Object.freeze(JC),
      (YC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (XC = () => {
        let e = M();
        return (
          h(
            () => () => {
              clearTimeout(e.current);
            },
            [],
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (ZC = new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (QC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      ($C = 1),
      (ew = 4),
      (tw = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (nw = [`animate`, `animate`]),
      (rw = { inputRange: [], outputRange: [] }),
      (iw = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (aw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (ow = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (sw = [0, 1]),
      (cw = {
        parallax: ZC,
        styleAppear: tw,
        styleTransform: iw,
        loop: YC,
        presence: QC,
      }),
      (lw = $_(cw)),
      (uw = (e) => e.reduce((e, t) => (e += t), 0)),
      (dw = (e) => e.reduce((e, t) => (e *= t), 1)),
      (fw = `current`),
      (pw = (e) =>
        d.forwardRef((t, n) => {
          if (t.__withFX)
            return E(e, {
              ...t,
              animate: void 0,
              initial: void 0,
              exit: void 0,
              ref: n,
            });
          let r = UC(t);
          if (r) return E(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: f,
              inSmartComponent: p = !1,
            } = Yl(t),
            m = ac(n),
            { values: h, style: g } = Fl(s, m, p, t.style, t[ae]),
            { values: _, style: v } = jl(i, m, t.style?.visibility),
            { values: y, style: b } = ql(o, m),
            { values: x, style: S } = Ul(a, m),
            { values: C, style: w } = kl(c, m),
            T = d.useMemo(() => {
              let e = new Te(u ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [
                  y.transformPerspective,
                  x.transformPerspective,
                ],
              };
            }, [u, y, _, x, C, h]);
          Zl(t.style, T);
          let D = Ve(T.scale, dw),
            O = Ve(T.opacity, dw),
            k = Ve(T.x, uw),
            A = Ve(T.y, uw),
            j = Ve(T.rotate, uw),
            M = Ve(T.rotateX, uw),
            ee = Ve(T.rotateY, uw),
            te = Ve(T.skewX, uw),
            N = Ve(T.skewY, uw),
            P = Ve(T.transformPerspective, uw),
            { drag: ne, dragConstraints: re } = l;
          ws(ne && Xl(re) ? re : void 0);
          let ie = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: ee,
            skewX: te,
            skewY: N,
          };
          ot(f) && (ie.transformPerspective = P);
          let F = Ql(t.animate) ? t.animate : void 0,
            oe = Ql(t.initial) ? t.initial : void 0,
            se = Ql(t.exit) ? t.exit : void 0,
            ce =
              p && !s.presenceInitial
                ? { initial: oe, animate: F, exit: se }
                : {};
          return E(e, {
            ...l,
            ...ce,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...ie, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (mw = k({})),
      (hw = d.createContext({})),
      (gw = d.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a,
      ) {
        let o = d.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = gl(a);
        return E(hw.Provider, { value: o, children: s(r, i) });
      })),
      (_w = (e) =>
        d.forwardRef((t, n) =>
          E(e, {
            layoutId: Ss(t),
            ...t,
            layoutIdKey: void 0,
            duplicatedFrom: void 0,
            ref: n,
          }),
        )),
      (vw = {}),
      (yw = () => vw),
      (bw = (e) => {
        vw = e;
      }),
      (xw = !1),
      (Sw = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!nu(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ht(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`,
              ),
          );
          let r =
            e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          _n(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!nu(e)) throw e;
          return ((xw = !0), this.props.children);
        }
      }),
      (Cw = p === void 0 ? null : new Promise(() => {})),
      (ww = E(ru, {})),
      (Tw = k(!1)),
      (Tw.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Ew = E(au, {})),
      (Dw = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (su(this.props.getErrorMessage(), t?.componentStack), ou(e, t));
        }
        render() {
          let { children: e, fallback: t = Ew } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Ow = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n,
          ),
            this.setState({ hasError: !0 }),
            ou(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (kw = d.createContext(void 0)),
      (Aw = `code-crash:`),
      (jw = _w(
        d.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l,
        ) {
          let u = no(() => (t ? `${t}-container` : void 0)),
            f = es(n),
            p = xu(
              d.Children.map(e, (e) =>
                d.isValidElement(e) ? d.cloneElement(e, { layoutId: t }) : e,
              ),
              r,
              i,
              a,
              o,
              s,
            );
          return E(f, {
            layoutId: u,
            ...c,
            ref: l,
            children: E(yS.Provider, {
              value: !0,
              children: E(Oy.Provider, {
                value: i ?? null,
                children: E(to, {
                  enabled: !1,
                  children: E(Me, {
                    id: t ?? ``,
                    inherit: c.layout ? !0 : `id`,
                    children: p,
                  }),
                }),
              }),
            }),
          });
        }),
      )),
      (Mw = d.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = xu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = es(f);
          return E(Oy.Provider, {
            value: a ?? null,
            children: E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return E(Oy.Provider, {
            value: a ?? null,
            children: E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (Pw = new Set()),
      (Fw = k({
        onRegisterCursors: () => () => {},
        registerCursors: () => {},
      })),
      (Iw = `framer-cursor-none`),
      (Lw = `framer-pointer-events-none`),
      (Rw = n(function ({ children: e }) {
        let t = no(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Du(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ze();
        return w(Fw.Provider, { value: t, children: [e, !n && E(Hw, {})] });
      })),
      (zw = Ax(
        Rw,
        [
          `.${Iw}, .${Iw} * { cursor: none !important; }`,
          `.${Lw}, .${Lw} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`,
      )),
      (Bw = {
        position: `fixed`,
        top: 0,
        left: 0,
        zIndex: 13,
        pointerEvents: `none`,
      }),
      (Vw = `data-framer-portal-id`),
      (Hw = n(function () {
        let { onRegisterCursors: e } = S(Fw),
          t = Eu(!1),
          n = be(0),
          i = be(0),
          a = be(0),
          o = M(null),
          s = M({ cursors: {}, cursorHash: void 0 }),
          c = Cs();
        (h(() => {
          if (!t) return;
          let e = 0,
            r = 0;
          function l() {
            (n.set(e), i.set(r), B(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (at(s.current.cursors)) return;
            let t = ju(e, r);
            t !== s.current.cursorHash &&
              ((s.current.cursorHash = t), F.update(() => c()));
          };
          function d(t) {
            if (t.pointerType === `touch`) {
              Ze(u);
              return;
            }
            (F.read(u, !0), (e = t.clientX), (r = t.clientY), F.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            F.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            Dv.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            F.read(u, !0),
            () => {
              (Dv.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                Ze(u));
            }
          );
        }, [a, n, i, c, t]),
          h(() => {
            if (!t) return;
            function e() {
              B(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              Dv.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e),
                  Dv.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          r(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = at(e) ? null : ju(n.get(), i.get())),
                c());
            }
            let r = e(t);
            return () => {
              (r(), document.body.classList.toggle(Iw, !1));
            };
          }, [n, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          f = Ou(d);
        r(() => {
          t && document.body.classList.toggle(Iw, f);
        }, [f, t]);
        let p = d?.component,
          m = d?.transition ?? { duration: 0 },
          g = m.duration === void 0 ? m : { ...m, duration: m.duration * 1e3 },
          _ = Ce(n, g),
          v = Ce(i, g),
          y = Ve(() => _.get() + (d?.offset?.x ?? 0)),
          x = Ve(() => v.get() + (d?.offset?.y ?? 0)),
          w = d?.alignment,
          T = d?.placement,
          D = C((e, t) => `translate(${Au(T, w)}) ${t}`, [w, T]);
        return !t || !d || !p
          ? null
          : E(b, {
              children: E(p, {
                transformTemplate: D,
                style: { ...Bw, x: y, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: Lw,
              }),
            });
      })),
      (Uw = `webPageId`),
      (Ww = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            U(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (U(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((B_ && !Vn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Pu(e), e),
            this.collectedLinks.set(Pu(t), t));
          let n = this.nestingInfo.get(Pu(e)) ?? new Set();
          (n.add(Pu(t)), this.nestingInfo.set(Pu(e), n));
        }
      }),
      (Gw = new Ww()),
      (Kw = `element`),
      (qw = `collection`),
      (Jw = `collectionItemId`),
      (Yw = `pathVariables`),
      (Xw = `framer/page-link,`),
      (Zw = k(void 0)),
      (Qw = `--text-selection-color`),
      ($w = `--text-selection-background-color`),
      (eT = Ax(Qu, (e, t) => Zu(t?.triggerId), `InjectSelectionStyle`)),
      (tT = `overlay`),
      (nT = `template-overlay`),
      (rT = d.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? E(e, { ...t, ref: n }) : null;
      })),
      (iT = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((p.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ht(V_ ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t =
            e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          _n(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (V_ && document.getElementById(`main`)?.innerHTML) || ``;
          return E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ht()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (oT = /:([a-z]\w*)/gi),
      (sT = k(void 0)),
      (cT = new Map()),
      (lT = 500),
      (uT = 500),
      (fT = !1),
      (pT = 500),
      (mT = 0.9),
      (hT = 1.7),
      (gT = 4),
      (_T = 1 / 0),
      (vT = new WeakMap()),
      (yT = new Set()),
      (bT = new Map()),
      (xT = !dy || typeof IntersectionObserver > `u` ? null : Sd()),
      (ST = id(
        D(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f,
        ) {
          let p = It(),
            m = Rt(),
            h = cd(),
            { activeLocale: g, locales: _ } = or(),
            v = kd(),
            y = lr(),
            b = Fu(),
            x = Ad({
              nodeId: c,
              clickTrackingId: i,
              router: p,
              href: t,
              activeLocale: g,
            }),
            S = s(() => {
              if (!t) return {};
              let e = Nu(t) ? t : Hu(t);
              if (!e) return {};
              if (V(e))
                return Bd(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h,
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (ft(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = ad(p, m, e, g, c, h),
                S = wd(n, !0),
                C = S === `_blank`,
                w = zd(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = Pd(u, w, (e) =>
                  Md(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e,
                  ),
                );
              return {
                href: u,
                target: S,
                onClick: Nd(u, x, E),
                "data-framer-page-link-current": (m && ld(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            C = ac(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          oc(
            C,
            (e) => {
              if (!(e === null || !D || !E || !A || b))
                return xT?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b],
          );
          let M = !!w;
          return Gu(
            gl(f).cloneAsArray(e, (e) => Vd(e, { ...d, ...Ud(j, u, M) }, C)),
            l,
            c,
            t,
            S,
            C,
          );
        }),
      )),
      (CT = `framer`),
      (wT = 3),
      (TT = 30),
      (ET = 1e4),
      (DT = `__framer`),
      (OT = `3`),
      (kT = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (AT = Date.now()),
      (jT = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (MT = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (NT = () => ((Date.now() - AT) / 1e3).toFixed(2)),
      (PT = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          d.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          d.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` &&
                ((r.setAttribute = !0),
                (r.inputChangeTimeSinceModuleLoad = NT())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(
              HTMLInputElement.prototype,
              `value`,
            );
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = NT()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted),
                (r.inputChangeTimeSinceModuleLoad = NT()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          E(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (FT = { state: `pending` }),
      (IT = { state: `success` }),
      (LT = { state: `incomplete` }),
      (RT = { state: `complete` }),
      (zT = { state: `error` }),
      (BT = d.createContext(void 0)),
      (VT = d.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        l,
      ) {
        let f = d.useRef(null),
          p = l ?? f,
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = Qd(),
          _ = It(),
          v = Rt(),
          y = cd(),
          b = On(),
          [x, C] = d.useReducer(nf, LT),
          { activeLocale: T, locales: D } = or(),
          O = S(BT),
          k = d.useRef({ onSuccess: r, onError: i, onLoading: a });
        k.current = { onSuccess: r, onError: i, onLoading: a };
        let A = d.useRef(!1);
        async function j(e) {
          if (V(e)) {
            let t = od(_, e, y, D);
            if (!t) {
              of(e, p);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          U(
            Nu(e),
            () =>
              `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`,
          );
          let t = await Dd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, T, b),
            {
              routeId: n,
              elementId: r,
              pathVariables: i,
            } = ad(_, v, e, T, t, y);
          _.navigate?.(n, r, i);
        }
        let M = async (t) => {
            if ((t.preventDefault(), !e || !O || A.current)) return;
            ((A.current = !0), h());
            let r = new FormData(t.currentTarget),
              i = Jd(t.currentTarget);
            (await iy({ priority: `user-visible`, continueAfter: `paint` }),
              g(r),
              u(() => C({ type: `submit` })),
              Zd(r, Dv.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (k.current.onLoading?.(),
                ef({
                  router: _,
                  nodeId: s,
                  submitTrackingId: o,
                  activeLocale: T,
                }),
                await cf(e, r, i, O),
                u(() => C({ type: `success` })),
                k.current.onSuccess?.(),
                n && (await j(n)));
            } catch (e) {
              (u(() => C({ type: `error` })),
                k.current.onError?.(),
                console.error(e));
            }
            A.current = !1;
          },
          ee = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` &&
                n.checkValidity() &&
                (e.preventDefault(), M(e)));
          },
          te = async (e) => {
            let t = e.currentTarget;
            (await iy({ priority: `background`, continueAfter: `paint` }),
              u(() => C({ type: sf(t) ? `incomplete` : `complete` })));
          },
          N = d.useMemo(() => t(x), [t, x]);
        return w(L.form, {
          ...c,
          onSubmit: rf(x) ? M : af,
          onKeyDown: ee,
          onChange: te,
          ref: p,
          children: [N, E($d, { states: m })],
        });
      })),
      (HT = `__framer_force_showing_editorbar_since`),
      (UT = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (WT = () => {
        try {
          return !!localStorage[HT];
        } catch {
          return !1;
        }
      }),
      (GT = () => !WT()),
      (KT = (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (qT = null),
      (JT = null),
      U_(hf),
      (YT = (e, t, n, r, i, a) => {
        let o = S(BT),
          s = M(),
          c = On(),
          l = M(!0);
        return (
          h(() => {
            function u() {
              (!qT || !JT) && hf();
              let s = n ? new URL(n, Dv.location.href) : Dv.location,
                u = {
                  version: Ov,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: qT,
                  locale: JT,
                },
                d = l.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && c?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && V(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (ft(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...u, collectionItemId: t };
                  })()
                : u;
            }
            (async () => {
              let e = (s.current = u()),
                t = e instanceof Promise ? await e : e;
              ((s.current = t),
                l.current
                  ? (l.current = !1)
                  : _n(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (s.current = u()),
                  t = e instanceof Promise ? await e : e;
                ((s.current = t), _n(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              p.addEventListener(`pageshow`, d),
              () => {
                p.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, c, a]),
          s
        );
      }),
      (XT = 0),
      (ZT = 500),
      (QT = 200),
      ($T = `main`),
      (eE = `framerGeneratedPage`),
      (tE = `<!-- Start of headStart -->`),
      (nE = `<!-- End of headStart -->`),
      (rE = `<!-- Start of headEnd -->`),
      (iE = `<!-- End of headEnd -->`),
      (aE = `<!-- Start of bodyStart -->`),
      (oE = `<!-- End of bodyStart -->`),
      (sE = `<!-- Start of bodyEnd -->`),
      (cE = `<!-- End of bodyEnd -->`),
      (lE = d.createContext(void 0)),
      (uE = { status: `loading`, data: void 0 }),
      (dE = 5e3),
      (fE = () => {}),
      (pE = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = cp(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = cp(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Dv.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3)
                throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              fp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = dl(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && fp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Rn() || !Lu(e.url, !1)) return;
          let t = cp(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`)
            throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = dp(n, e);
          return (
            e.resultOutputType === `image` && V(i) && (await ap(i).catch(fE)),
            i
          );
        }
        async fetchWithCache(e) {
          if (!Rn()) return;
          let t = cp(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && fp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, uE);
          let a = (async () => {
            try {
              let n = await fetch(e.url, {
                method: `GET`,
                credentials: e.credentials,
              });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, {
                status: `error`,
                error: e,
                data: void 0,
              });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Lu(r, !1)) return fE;
          let a = cp(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (mE = k(void 0)),
      (hE = k(!0)),
      (gE = ({ children: e, client: t }) => {
        let [n] = A(() => t ?? new pE()),
          [r, i] = A(!0);
        return (
          h(
            () => (
              n.hydrateCache(),
              u(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n],
          ),
          E(hE.Provider, {
            value: r,
            children: E(mE.Provider, { value: n, children: e }),
          })
        );
      }),
      (_E = (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Ke.WillChange = De),
      (vE = id(
        D(function ({ links: e, children: t, ...n }, r) {
          return gl(r)(t(hp((t) => e.map(t), [e])), n);
        }),
      )),
      (yE = { priority: void 0, canYield: !0 }),
      (bE = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Pp(e, t);
            case `boolean`:
              return Ip(e);
            case `color`:
              return zp(e);
            case `date`:
              return Vp(e);
            case `enum`:
              return Up(e);
            case `file`:
              return Gp(e);
            case `link`:
              return qp(e);
            case `number`:
              return Yp(e);
            case `object`:
              return Qp(e, t);
            case `responsiveimage`:
              return em(e);
            case `richtext`:
              return nm(e);
            case `string`:
              return om(e);
            case `vectorsetitem`:
              return im(e);
            case `unknown`:
              return e;
            default:
              Kt(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return nt(e)
            ? { type: `boolean`, value: e }
            : lt(e)
              ? { type: `date`, value: e.toISOString() }
              : rt(e)
                ? { type: `number`, value: e }
                : V(e)
                  ? { type: `string`, value: e }
                  : it(e)
                    ? { type: `array`, value: e.map(bE.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && cm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && cm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && cm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && cm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && cm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => bE.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array`
            ? e.value.findIndex((e) => bE.equal(e, t, n))
            : -1;
        },
        contains(e, t, n) {
          let r = sm(e),
            i = sm(t);
          return st(r) || st(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.includes(i));
        },
        startsWith(e, t, n) {
          let r = sm(e),
            i = sm(t);
          return st(r) || st(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = sm(e),
            i = sm(t);
          return st(r) || st(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
              r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(bE.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return V(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              Kt(e);
          }
        },
      }),
      (xE = { type: `unknown`, isNullable: !0 }),
      (SE = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = al(e);
          U(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (U(n !== `array`, `Array properties are not supported`),
              U(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (ct(i)) continue;
            let a = this.schema[t];
            if (!ot(a)) {
              if (
                (U(a.type !== `unknown`, `Invalid definition type`),
                a.type === `richtext`)
              ) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await lm(this.collection, this.locale))[t]?.[n];
          return ov.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await lm(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = bp(e);
            i && (await i);
            let a = t[r];
            U(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await lm(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = bp(t);
            e && (await e);
            let a = n[Number(i)];
            (U(a, `Can't find collection item`),
              r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (CE = new Map()),
      (wE = new WeakMap()),
      (TE = `$r_`),
      (EE = new Map()),
      (DE = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Sm(e, t)), (this.priority = gm(n)));
        }
        *resolveArrayValue(e) {
          return yield* Tp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* wp(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          U(ym(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          U(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return dt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          U(xm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (U(n, `Can't find collection for vector set item pointer`),
            U(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return dt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (OE = `index`),
      (kE = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), K(this.name, ...e));
        }
      }),
      (AE = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new ME();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (jE = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (ME = class extends kE {
        name = `Indexes`;
      }),
      (NE = class {
        constructor(e, t, n, r) {
          ((this.id = e),
            (this.name = t),
            (this.definition = n),
            (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          U(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return {
                type: `array`,
                value: e.value.map((e) => this.wrapPointers(e)),
              };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                U(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: vm(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                U(
                  this.collection,
                  `Vector set item field must have a collection`,
                ),
                {
                  type: `vectorsetitem`,
                  value: bm(this.collection.data, e.value),
                }
              );
          }
          return e;
        }
      }),
      (Q = class extends kE {
        name = `Fields`;
      }),
      (PE = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (FE = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return (
            this === e ||
            (this.length === e.length && this.getHash() === e.getHash())
          );
        }
        providedByFields(e) {
          for (let { field: t } of this.fields)
            if (!e.has(t) && t.name !== OE) return !1;
          return !0;
        }
      }),
      (IE = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return (
            this.ordering.length === 0 || e.canProvideOrdering(this.ordering)
          );
        }
        canProvideResolvedFields(e) {
          return (
            this.resolvedFields.size === 0 ||
            e.canProvideResolvedFields(this.resolvedFields)
          );
        }
      }),
      (LE = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (U(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (U(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e)
            ? !0
            : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new FE();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new IE(
            this.getRequiredOrdering(),
            this.getRequiredResolvedFields(),
          );
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          U(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (U(e, `Field must exist`), e.field);
        }
      }),
      (RE = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = Em(),
            i = Dm(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (zE = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (BE = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (VE = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (HE = class extends VE {
        group;
        getGroup() {
          return (U(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (U(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return xp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Sp(this.evaluate(void 0), void 0, e);
        }
      }),
      (UE = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (WE = class e extends HE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return K(
            `RelationalProject`,
            this.inputGroup.id,
            ...this.projections,
            this.passthrough,
          );
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections)
            (t.merge(e.input.referencedFields), t.delete(e.field));
          return new IE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map(
              (e) => new UE(e.input.getOptimized(), e.field),
            );
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Tp(
              n.tuples.map((t) =>
                Tp(
                  this.projections.map((n) =>
                    wp({ field: n.field, value: n.input.evaluate(e, t) }),
                  ),
                ),
              ),
            );
          return n.map(t, (e, t) => {
            let n = new zE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            U(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (GE = { type: 0 }),
      (KE = class extends VE {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return xp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Sp(this.evaluate(void 0, void 0));
        }
      }),
      (qE = { type: 0 }),
      (JE = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (YE = class e extends KE {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return K(
            `ScalarCase`,
            this.input,
            ...this.conditions,
            this.otherwise,
          );
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions)
            (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map(
              (e) => new JE(e.when.getOptimized(), e.then.getOptimized()),
            ),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* wp({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Tp(
              this.conditions.map((n) =>
                wp({
                  when: n.when.evaluate(e, t),
                  then: n.then.evaluate(e, t),
                }),
              ),
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r)
              if (bE.equal(n, e, qE)) return t;
          } else for (let { when: e, then: t } of r) if (Lp(e)) return t;
          return i;
        }
      }),
      (XE = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new LE();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new FE();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (ot(t)) continue;
                a.add(t.field);
                let r = new PE(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new NE(Tm(this.fieldId++), void 0, t.definition, void 0),
                  a = new UE(t, r);
                i.push(a);
                let s = new PE(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (ot(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              U(n.alias, `Subqueries should have an alias`);
              let r = Tm(this.fieldId++),
                a = n.alias,
                s = new NE(r, a, t.definition, void 0),
                c = new UE(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              Kt(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = pm(t.data, this.locale),
            i = t.alias,
            a = new AE(Cm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new NE(Tm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }),
              a.addNamedField(e, r));
          }
          {
            let e = new NE(
              Tm(this.fieldId++),
              OE,
              { type: `number`, isNullable: !1 },
              a,
            );
            n.addField({ field: e, name: OE, collectionName: i });
            let t = new FE(),
              r = new PE(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new FE(),
              o = new jE(wm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new FE(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              Kt(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(
                `Subqueries are only supported inside subquery function calls`,
              );
            default:
              Kt(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)),
                  e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(xE, null);
        }
        buildLiteralValue(e) {
          let t = bE.parse(e.value);
          return this.normalizer.newScalarConstant(xE, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (U(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(
                  n.type === `Select`,
                  `Subqueries require a select expression`,
                ),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(
                  n.type === `Select`,
                  `Subqueries require a select expression`,
                ),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              Kt(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new ZE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new ZE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) =>
                new JE(
                  this.buildExpression(e, t.when),
                  this.buildExpression(e, t.then),
                ),
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              Kt(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              Kt(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, {
                type: `boolean`,
                isNullable: !0,
              });
            case `DATE`:
              return this.normalizer.newScalarCast(n, {
                type: `date`,
                isNullable: !0,
              });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, {
                type: `number`,
                isNullable: !0,
              });
            case `STRING`:
              return this.normalizer.newScalarCast(n, {
                type: `string`,
                isNullable: !0,
              });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (ZE = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (QE = class e extends HE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (
            t.merge(this.predicate.referencedFields),
            new IE(e.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Tp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Lp(n[t] ?? null));
        }
      }),
      ($E = class e extends HE {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * RE : 50 * RE);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, vp()),
            i = vp(),
            a = [];
          for (let n of r) {
            let r = bp(i);
            r && (yield r);
            let o = new zE();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new BE(n, a);
        }
      }),
      (eD = class e extends HE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return K(
            `RelationalIntersection`,
            this.leftGroup.id,
            this.rightGroup.id,
          );
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new IE(new FE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* wp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (tD = class e extends HE {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return K(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * RE);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(vp()),
            r = vp(),
            i = [];
          for (let a of n) {
            let n = bp(r);
            n && (yield n);
            let o = new zE();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new BE(t, i);
        }
      }),
      (nD = class e extends HE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new IE(new FE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* wp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (rD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Lp(n) && Lp(r) };
        }
      }),
      (iD = class extends KE {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (aD = { type: 0 }),
      (oD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* wp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.contains(n, r, aD) };
        }
      }),
      (sD = { type: 0 }),
      (cD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* wp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.endsWith(n, r, sD) };
        }
      }),
      (lD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.equal(n, r, GE) };
        }
      }),
      (uD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.greaterThan(n, r, GE) };
        }
      }),
      (dD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.greaterThanOrEqual(n, r, GE) };
        }
      }),
      (fD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.lessThan(n, r, GE) };
        }
      }),
      (pD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.lessThanOrEqual(n, r, GE) };
        }
      }),
      (mD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !bE.equal(n, r, GE) };
        }
      }),
      (hD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Lp(n) || Lp(r) };
        }
      }),
      (gD = { type: 0 }),
      (_D = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* wp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.startsWith(n, r, gD) };
        }
      }),
      (vD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof QE) {
            if (e.predicate instanceof rD) {
              let n = new eD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right),
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof hD) {
              let n = new nD(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right),
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof tD)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new $E(n, Om(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof QE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof tD)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof lD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iD &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof mD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iD &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `NotEquals`,
                      value: e.predicate.right.value,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof fD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `LessThan`,
                      value: e.predicate.right.value,
                      inclusive: !1,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof pD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iD &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `LessThan`,
                      value: e.predicate.right.value,
                      inclusive: !0,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof uD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `GreaterThan`,
                      value: e.predicate.right.value,
                      inclusive: !1,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof iD &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `GreaterThan`,
                      value: e.predicate.right.value,
                      inclusive: !0,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof oD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof iD &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `Contains`,
                      value: e.predicate.target.value,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof _D &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof iD &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `StartsWith`,
                      value: e.predicate.target.value,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof cD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof iD &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Om(r.lookupNodes.length);
                    n[0] = {
                      type: `EndsWith`,
                      value: e.predicate.target.value,
                    };
                    let i = new $E(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (yD = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new bD();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          U(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (bD = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e),
            $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (xD = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (SD = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new yD(km(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new xD(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            U(
              i.isCompatible(t.relational),
              `Group has inconsistent relational props`,
            ),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (CD = class e extends HE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return K(
            `RelationalLeftJoin`,
            this.leftGroup.id,
            this.rightGroup.id,
            this.constraint,
          );
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new IE(new FE(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new BE(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new zE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* wp({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof lD) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields,
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields,
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e,
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields,
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields,
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e,
              );
          }
          let r = new BE(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new zE();
              (n.merge(i),
                n.merge(a),
                Lp(yield* this.constraint.evaluate(e, n)) &&
                  (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (wD = class e extends HE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (
            t.merge(this.limit.referencedFields),
            new IE(this.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* wp({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Xp(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (TD = class e extends HE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (
            t.merge(this.offset.referencedFields),
            new IE(this.ordering, t)
          );
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* wp({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Xp(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (ED = class e extends KE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return K(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) ot(n.collection) || e.add(n);
          return new IE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        *evaluate(e, t) {
          let n = new zE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (DD = class e extends KE {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            U(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return bE.cast(n, this.definition);
        }
      }),
      (OD = class e extends KE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = {
              type: `array`,
              isNullable: !1,
              definition: t.definition,
            }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return K(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (
            ot(this.field.collection) || e.add(this.field),
            new IE(this.ordering, e)
          );
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields,
          );
        }
        *evaluate(e, t) {
          let n = new zE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) =>
                e.getValue(this.field),
              ),
            }
          );
        }
      }),
      (kD = { type: 0 }),
      (AD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: bE.in(n, r, kD) };
        }
      }),
      (jD = { type: 1 }),
      (MD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* wp({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: bE.indexOf(n, r, jD) };
        }
      }),
      (ND = class extends Error {}),
      (PD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return K(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = jm(n),
            a = jm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (FD = class e extends KE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: bE.length(n) };
        }
      }),
      (ID = class e extends KE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return {
            type: `boolean`,
            value: !Lp(yield* this.input.evaluate(e, t)),
          };
        }
      }),
      (LD = { type: 0 }),
      (RD = class e extends KE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* wp({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !bE.in(n, r, LD) };
        }
      }),
      (zD = class extends KE {
        constructor(e, t) {
          U(e.name !== OE, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (U(e, `Context must exist`), e.getValue(this.field))
            : (U(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (BD = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new tD(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new $E(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new CD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (
            t instanceof iD &&
            t.value?.type === `boolean` &&
            t.value.value === !0
          )
            return e;
          if (
            e instanceof CD &&
            t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)
          ) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new QE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new WE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof WE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new wD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new TD(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof iD) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new zD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new iD(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof ID)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, {
                  type: `boolean`,
                  isNullable: !0,
                });
          if (e instanceof lD) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof mD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof fD)
            return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof pD)
            return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof uD)
            return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof dD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof rD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof hD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new ID(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (
            t instanceof iD &&
            t.value?.type === `boolean` &&
            t.value.value === !0
          )
            return e;
          if (
            (e instanceof iD &&
              e.value?.type === `boolean` &&
              e.value.value === !0) ||
            (t instanceof iD &&
              t.value?.type === `boolean` &&
              t.value.value === !1)
          )
            return t;
          if (
            e instanceof iD &&
            e.value?.type === `boolean` &&
            e.value.value === !1
          )
            return e;
          let n = new rD(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (
            t instanceof iD &&
            t.value?.type === `boolean` &&
            t.value.value === !0
          )
            return t;
          if (
            (e instanceof iD &&
              e.value?.type === `boolean` &&
              e.value.value === !0) ||
            (t instanceof iD &&
              t.value?.type === `boolean` &&
              t.value.value === !1)
          )
            return e;
          if (
            e instanceof iD &&
            e.value?.type === `boolean` &&
            e.value.value === !1
          )
            return t;
          let n = new hD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof zD;
          if (t instanceof zD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new lD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof zD;
          if (t instanceof zD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new mD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof zD;
          if (t instanceof zD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new fD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof zD;
          if (t instanceof zD && !n)
            return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new pD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof zD;
          if (t instanceof zD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new uD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof zD;
          if (t instanceof zD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)),
            (t = this.removeUnknown(t, e.definition)));
          let r = new dD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` &&
            (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new AD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` &&
            (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new RD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new JE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new YE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new oD(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new _D(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new cD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new FD(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new MD(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new ED(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new OD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new PD(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new DD(e, t);
          return this.finishScalar(n);
        }
      }),
      (VD = class extends HE {}),
      (HD = class e extends VD {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new IE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * RE).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          U(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            U(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples)
            for (let t of this.fields) Mm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                U(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            }),
          );
          return t.map(t.fields, (e) => {
            let t = new zE();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (U(s, `Item not found`), U(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (UD = { type: 0 }),
      (WD = class e extends VD {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== OE && (ot(e.collection) || t.add(e));
          return new IE(new FE(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === OE) {
                let r = n.collection;
                U(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                U(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                U(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!bE.equal(a, o, UD)) {
                if (st(a) || bE.lessThan(a, o, UD)) return i ? -1 : 1;
                if (st(o) || bE.greaterThan(a, o, UD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (GD = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new SD();
        normalizer = new BD(this.memo);
        explorer = new vD(this.normalizer);
        optimize(e) {
          let t = new XE(this.normalizer, this.query, this.locale).build(),
            n = bp(e);
          return n
            ? n.then(() => this.optimizeBuiltQuery(t))
            : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (
            this.optimizeGroup(t, n),
            [t.getOptimized(n), e.getNamedFields()]
          );
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (U(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new HD(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new WD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (KD = gp(`query-engine`)),
      (qD = class {
        async evalQuery(e, t, n, r) {
          KD.enabled &&
            KD.debug(`Query:
${Gm(e)}`);
          let i = new DE(e, t, r),
            a = new GD(e, t, i),
            o = bp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = ft(s) ? await s : s,
            u = bp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = bp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(wp(a, r)));
          }
          let h = Cp(Tp(m, r), r);
          return n ? [ft(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new DE(t, n, r);
          return Cp(
            Tp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return wp(t);
              }),
            ),
            void 0,
            !1,
          );
        }
      }),
      (JD = Av.QueryCache),
      (YD = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = Nv === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = Jm(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = _m(n) ?? `user-visible`,
              o = _m(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Jn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              Nv !== void 0 &&
                this.serializedCache !== void 0 &&
                !um(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && Nv.set(JD, r, e);
            }
            return i.value;
          }
          let a = new ov(() => {
            let i = um(r),
              a = i ? void 0 : Cn(JD, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                xn(e, r);
              }
            return Nv !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(
                    ([e, t]) => (
                      this.serializedCache?.set(r, t),
                      Nv.set(JD, r, t),
                      e
                    ),
                  )
              : this.queryEngine.query(e, t, n);
          });
          return (
            this.cache.set(r, { value: a, priority: n }),
            this.prune(),
            a
          );
        }
      }),
      (XD = new YD(new qD())),
      (ZD = `style[data-framer-breakpoint-css]`),
      (QD = new Map()),
      ($D = `page`),
      (eO = Symbol(`cycle`)),
      (rO = (e) =>
        D((t, n) => {
          let {
              strokeEffectLength: r,
              strokeEffectGap: i,
              strokeEffectOffset: a,
              strokeEffectLoop: o,
              strokeEffectTotalLength: s,
              strokeEffectLoopType: c,
              pathLengthTransition: l,
              ...u
            } = t,
            d = ao(),
            f = be(0),
            { length: p, gap: m } = no(() => ({ length: s * r, gap: s * i }));
          h(() => {
            if (d) return;
            let e = new AbortController();
            async function t() {
              let t = 0;
              for (; !e.signal.aborted;) {
                let e = o && c === `mirror`,
                  n = Nh(t, e),
                  r = Nh(t + 1, e);
                if ((await Promise.all([B(f, [n, r], l), Ph()]), !o)) break;
                (o && c === `repeat`) || t++;
              }
            }
            return (
              t(),
              () => {
                e.abort();
              }
            );
          }, []);
          let g = Ve(f, (e) => a * s + (s - Math.max(e, 0.001) * s)),
            _ = d
              ? void 0
              : { strokeDasharray: `${p} ${m}`, strokeDashoffset: g };
          return E(e, { ...u, ..._, ref: n });
        })),
      (iO = (() => {
        let e = k(null);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (aO = (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerItemContext`), e);
      })()),
      (oO = (e, t, n, r, i) => ({
        sign: 1,
        direction: i,
        lengthProp: t,
        viewportLengthProp: n,
        paddingStartProp: r,
        measureItem: (n) => ({ start: n[e], end: n[e] + n[t] }),
        getCumulativeInset: (t) => {
          let n = 0,
            r = t;
          for (; r;) ((n += r[e]), (r = r.offsetParent));
          return n;
        },
      })),
      (sO = oO(
        `offsetLeft`,
        `offsetWidth`,
        `innerWidth`,
        `paddingLeft`,
        `right`,
      )),
      (cO = oO(
        `offsetTop`,
        `offsetHeight`,
        `innerHeight`,
        `paddingTop`,
        `bottom`,
      )),
      (lO = {
        ...sO,
        sign: -1,
        direction: `left`,
        paddingStartProp: `paddingRight`,
        measureItem: (e, t) => {
          let n = e.offsetWidth,
            r = Vh(e, t);
          return { start: r, end: r + n };
        },
        getCumulativeInset: (e) => {
          let t = 0,
            n = e;
          for (; n;) ((t += Vh(n, n.offsetParent)), (n = n.offsetParent));
          return t;
        },
      }),
      (uO = { start: `flex-start`, end: `flex-end` }),
      (dO = D(Zh)),
      (fO = { start: 0, end: 0 }),
      (pO = { display: `flex`, position: `relative` }),
      (mO = {
        display: `flex`,
        position: `relative`,
        willChange: `transform`,
        listStyleType: `none`,
        padding: 0,
        margin: 0,
        justifyContent: `flex-start`,
      }),
      (hO = { duration: 0.2, ease: `linear` }),
      (gO = (() => {
        let e = k(null);
        return ((e.displayName = `CarouselContext`), e);
      })()),
      (_O = { type: `spring`, stiffness: 200, damping: 40 }),
      (vO = { type: `spring`, stiffness: 80, damping: 10 }),
      (yO = { height: `100%`, width: `100%` }),
      (bO = D(function (e, t) {
        let {
            children: n,
            carouselEffectStackDirection: r,
            carouselEffectAlign: i,
            carouselEffectGap: a,
            carouselEffectXOverflow: o,
            carouselEffectYOverflow: c,
            carouselEffectOverflow: l,
            carouselEffectLoop: u,
            carouselEffectAutoPlay: d,
            carouselEffectInterval: f,
            carouselEffectSnap: p,
            carouselEffectControls: m,
            as: h,
            ...g
          } = e,
          _ = oo(),
          v = r?.startsWith(`column`) ? `y` : `x`,
          y =
            (v === `x` ? (o ?? l ?? `visible`) : (c ?? l ?? `visible`)) ===
            `visible`,
          b = mg(a, v),
          x = p === !0 ? `page` : p,
          S = Fh(n);
        return E(
          s(() => L.create(h), [h]),
          {
            ...g,
            ref: t,
            children: w(dg, {
              axis: v,
              align: i ?? `center`,
              gap: b,
              isStatic: _,
              itemSize: `manual`,
              overflow: y,
              loop: u,
              snap: x,
              items: S,
              style: yO,
              children: [d && E(pg, { intervalSeconds: f ?? 1.5 }), m],
            }),
          },
        );
      })),
      (xO = D(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? L.div,
          m = oo(),
          h = (d === `paused` ? 0 : (i ?? 100)) * s;
        return E(dO, {
          ref: t,
          as: p,
          ...f,
          gap: l,
          axis: o,
          align: a ?? `center`,
          isStatic: m,
          velocity: h,
          hoverFactor: c,
          itemSize: `manual`,
          overflow: u,
        });
      })),
      (SO = D(function (e, t) {
        let {
            children: n,
            as: r,
            tickerEffectVelocity: i,
            tickerEffectAlign: a,
            axis: o,
            directionModifier: s,
            hoverModifier: c,
            gap: l,
            overflow: u,
            playState: d,
            ...f
          } = e,
          p = r ?? L.div,
          m = cr() === `rtl` && o === `x` ? -1 : 1,
          g = (d === `paused` ? 0 : (i ?? 100)) * s * m,
          _ = be(0),
          v = M(0),
          y = M(!1),
          b = M(!1),
          x = M(!1),
          S = (e) => {
            x.current &&
              e.target &&
              e.target !== e.currentTarget &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (
          oe((e, t) => {
            let n = Math.abs(_.getVelocity()),
              r = b.current ? g * c : g;
            if (
              performance.now() > v.current &&
              (!y.current || n < Math.abs(r))
            ) {
              let e = (t / 1e3) * r,
                n = _.get() - e;
              ((y.current &&= (_.stop(), !1)), _.set(n));
            }
          }),
          h(() => {
            d === `paused` && _.stop();
          }, [d, _]),
          E(dO, {
            ref: t,
            as: p,
            ...f,
            gap: l,
            axis: o,
            align: a ?? `center`,
            itemSize: `manual`,
            overflow: u,
            _dragX: o === `x` ? _ : void 0,
            _dragY: o === `y` ? _ : void 0,
            offset: _,
            drag: o,
            dragMomentum: !0,
            onClickCapture: S,
            onDragStart: () => {
              x.current = !0;
            },
            onDragEnd: () => {
              ((v.current = performance.now()),
                (y.current = !0),
                setTimeout(() => {
                  x.current = !1;
                }, 5));
            },
            onMouseEnter: () => {
              b.current = !0;
            },
            onMouseLeave: () => {
              b.current = !1;
            },
          })
        );
      })),
      (CO = (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (wO = ({ onPlayStateChange: e, children: t }) => {
        let n = s(
          () => ({
            start: () => u(() => e(`running`)),
            stop: () => u(() => e(`paused`)),
          }),
          [e],
        );
        return E(CO.Provider, { value: n, children: t });
      }),
      (TO = D(function (e, t) {
        let {
            children: n,
            tickerEffectDraggable: r,
            tickerEffectStackDirection: i,
            tickerEffectXOverflow: a,
            tickerEffectYOverflow: o,
            tickerEffectOverflow: s,
            tickerEffectGap: c,
            tickerEffectDirectionModifier: l,
            tickerEffectHoverModifier: u,
            tickerEffectPosition: d,
            tickerEffectIsDataRepeater: f,
            style: p,
            ...m
          } = e,
          h = oo(),
          [g, _] = A(`running`),
          v = i?.startsWith(`column`) ? `y` : `x`,
          y = l === `reverse` ? -1 : 1,
          b = W(u) ? u / 100 : 1,
          x =
            (v === `x` ? (a ?? s ?? `visible`) : (o ?? s ?? `visible`)) ===
            `visible`,
          S = hg(c, v),
          C = Fh(n),
          w = {
            ...p,
            "--ticker-cms-total-children": f ? C.length : void 0,
            position: d,
          };
        return h || !r
          ? E(wO, {
              onPlayStateChange: _,
              children: E(xO, {
                ...m,
                style: w,
                ref: t,
                axis: v,
                gap: S,
                overflow: x,
                directionModifier: y,
                hoverModifier: b,
                items: C,
                playState: g,
              }),
            })
          : E(wO, {
              onPlayStateChange: _,
              children: E(SO, {
                ...m,
                style: w,
                ref: t,
                axis: v,
                gap: S,
                overflow: x,
                directionModifier: y,
                hoverModifier: b,
                items: C,
                playState: g,
              }),
            });
      })),
      (EO = (e) => (t) => {
        let {
          carouselEffectProps: n,
          tickerEffectProps: r,
          domProps: i,
        } = _g(t);
        return t.carouselEffectEnabled
          ? E(bO, { ...n, ...i, as: e })
          : t.tickerEffectEnabled
            ? E(TO, { ...r, ...i, as: e })
            : E(e, { ...i });
      }),
      (DO = (e) =>
        d.forwardRef((t, n) => {
          let {
              flowEffectEnabled: r,
              flowEffectTransition: i,
              isNestedFlowEffect: a,
              transition: o,
              ...c
            } = t,
            l = s(() => (i ? { default: o, layout: i } : o), [o, i]);
          if (!r) return E(e, { ...c, ref: n, transition: o });
          let u = E(e, { ...c, ref: n });
          return (
            i && (u = E(Se, { transition: l, children: u })),
            a || (u = E(Me, { children: u })),
            u
          );
        })),
      (OO = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (kO = { inputRange: [], outputRange: [] }),
      (AO = (e) =>
        d.forwardRef((t, n) => {
          if (J.current() === J.canvas) return E(e, { ...t, ref: n });
          let [r, i] = pl(t, OO),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: f,
              scrollDirection: p,
            } = r,
            [m, h] = d.useState(o),
            g = d.useRef(!1),
            _ = ac(n);
          lc(
            _,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  d.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } },
          );
          let v = zt(),
            y = d.useRef(v);
          return (
            d.useEffect(() => {
              if (p || !u) return;
              y.current !== v &&
                ((y.current = v), d.startTransition(() => h(o)));
              let e = {},
                t;
              return pe((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = bg(
                  u,
                  (c ?? 0) * r.containerLength,
                  f,
                );
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(ge(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  d.startTransition(() => {
                    h(l);
                  }));
              });
            }, [v, s, c, u, t.variant, p, f]),
            zl(p, (e) => d.startTransition(() => h(e)), {
              enabled: l,
              repeat: !s,
            }),
            Bt(() => {
              if (!l) return;
              let e =
                !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              d.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? E(e, { ...i, variant: m ?? t.variant, ref: _ })
              : E(e, { ...i })
          );
        })),
      $e(R_(), 1),
      (jO = (e) => e.target.value),
      (MO = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (NO = D(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: l,
            placeholder: d,
            required: f,
            step: p,
            style: m,
            type: h,
            maxLength: g,
            value: _,
            defaultValue: v,
            autofillEnabled: y,
            onChange: b,
            onBlur: x,
            onInvalid: S,
            onFocus: T,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = Sg(_ ?? v, h),
          [j, M, ee] = xg(A ?? ``, !0, b),
          te = ji(A),
          N = C(() => {
            (M(``), O && u(() => O()));
          }, [O, M]),
          P = ss(D, S, ee, x, T),
          ne = C(
            (e) => {
              e.target === e.currentTarget && te.current?.focus();
            },
            [te],
          );
        if (h === `hidden`)
          return E(L.input, { type: `hidden`, name: s, defaultValue: v });
        let re = y === !1 ? MO : void 0,
          ie = !!j,
          F = !!O && ie,
          ae = fl(PO, Vx, o, h === `text` && FO, h === `textarea` && IO);
        return w(L.div, {
          ref: t,
          onClick: ne,
          style: m,
          className: ae,
          ...k,
          children: [
            h === `textarea`
              ? E(L.textarea, {
                  ref: te,
                  ...re,
                  ...P,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Bx,
                  value: j,
                  maxLength: g,
                })
              : E(L.input, {
                  ref: te,
                  ...re,
                  ...P,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: h,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: fl(Bx, !ie && Hx),
                  value: j,
                  min: l,
                  max: c,
                  step: p,
                  maxLength: g,
                }),
            F &&
              E(`button`, {
                type: `button`,
                className: LO,
                onClick: N,
                "aria-label": `Clear`,
                children: E(Cg, {}),
              }),
          ],
        });
      })),
      (PO = `framer-form-text-input`),
      (FO = `framer-form-text-input-type`),
      (IO = `framer-form-textarea-input-type`),
      (LO = `framer-form-text-input-clear`),
      (RO = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (zO = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (BO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (VO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (HO = Ax(
        NO,
        [
          ...Wx,
          ...qx,
          ...Gx,
          Z(`.${Vx}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(
              `--framer-input-border-radius-top-left`,
            ),
            borderTopRightRadius: Z.variable(
              `--framer-input-border-radius-top-right`,
            ),
            borderBottomRightRadius: Z.variable(
              `--framer-input-border-radius-bottom-right`,
            ),
            borderBottomLeftRadius: Z.variable(
              `--framer-input-border-radius-bottom-left`,
            ),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${PO} .${Bx}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${PO}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${PO} .${Bx}`, {
            flex: 1,
            minWidth: 0,
            width: `auto`,
            padding: 0,
          }),
          Z(`.${PO}.${IO}`, { padding: 0 }),
          Z(`.${PO}.${IO} textarea.${Bx}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${PO} .${Bx}[type="date"], .${PO} .${Bx}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${PO} .${Bx}::-webkit-date-and-time-value`, {
            textAlign: `start`,
          }),
          Z(`.${PO} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${PO} textarea::-webkit-resizer`, {
            background: `no-repeat ${pt(RO)}`,
          }),
          Z(`.${PO}:dir(rtl) textarea::-webkit-resizer`, {
            background: `no-repeat ${pt(zO)}`,
          }),
          Z(`.${PO} textarea::-webkit-scrollbar`, {
            cursor: `pointer`,
            background: `transparent`,
          }),
          Z(`.${PO} textarea::-webkit-scrollbar-thumb:window-inactive`, {
            opacity: 0,
          }),
          Z(`.${PO} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${PO} .${Bx}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${PO} .${Bx}.${Hx}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(
              `--framer-input-placeholder-color`,
            ),
            overflow: `visible`,
          }),
          Z(`.${PO}.${FO}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${Qx}px`,
            height: `${Qx}px`,
            marginRight: `${Zx}px`,
            ...$x,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(
            `.${PO} .${Bx}[type="date"]::before, .${PO} .${Bx}[type="time"]::before`,
            {
              ...eS,
              paddingLeft: `${Xx}px`,
              maskPosition: `${Xx}px center`,
              backgroundPosition: `${Xx}px center`,
            },
          ),
          Z(`.${PO} .${Bx}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, pt(BO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${PO} .${Bx}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, pt(VO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${PO} .${Bx}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${Qx}px`,
            height: `100%`,
          }),
          Z(`.${PO}:focus-within, .${PO}.${Ux}`, {
            boxShadow: Z.variable(
              `--framer-input-focused-box-shadow`,
              `--framer-input-box-shadow`,
            ),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`,
            ),
          }),
          Z(`.${PO}:focus-within::after, .${PO}.${Ux}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`,
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`,
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, Kx),
          }),
          Z(`.${LO}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${Qx}px`,
            height: `${Qx}px`,
            marginLeft: `${Zx}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${LO}:hover, .${LO}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`,
      )),
      (UO = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (WO = { opacity: 0 }),
      (GO = { opacity: 1 }),
      (KO = Pg(
        d.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...l
            } = e,
            f = { ...c },
            p = s(() => $o(n), [n]),
            [m, h] = A();
          d.useEffect(() => {
            if (!n?.src || !o || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                u(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, p]);
          let g = p ?? m;
          return (
            o && g && ((f[o] = `auto`), (f.aspectRatio = g.width / g.height)),
            n && delete f.background,
            w(es(e.as), {
              ...l,
              style: f,
              ref: t,
              draggable: a,
              children: [n && E(So, { image: n, alt: i, draggable: a }), r],
            })
          );
        }),
      )),
      (JO =
        !Ln() &&
        typeof Document < `u` &&
        typeof Document.parseHTMLUnsafe == `function`),
      (YO =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (XO = `{{ text-placeholder }}`),
      (ZO = `rich-text-wrapper`),
      (QO = gs(
        D(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: g,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: D = J.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: ee,
              positionStickyLeft: te,
              __htmlStructure: N,
              __fromCanvasComponent: P = !1,
              _forwardedOverrideId: ne,
              _forwardedOverrides: re,
              _usesDOMRect: ie,
              children: F,
              ...ae
            } = e,
            oe = Ko(),
            se = Ss(e),
            ce = M(null),
            le = t ?? ce,
            { navigate: ue, getRoute: I } = It(),
            R = Rt();
          (ur(e.preload ?? []), Os(e, le));
          let de = S(yS),
            fe = Fu(),
            z = o,
            pe = ne ?? n;
          if (pe && re) {
            let e = re[pe];
            typeof e == `string` && (z = e);
          }
          let B = ``;
          if (z) {
            let e = Ig(z);
            B = N ? N.replace(XO, e) : `<p>${e}</p>`;
          } else if (i) B = i;
          else if (c) {
            let e = Ig(c);
            B = N ? N.replace(XO, e) : `<p>${e}</p>`;
          } else a && (B = a);
          let me = cd(),
            he = s(() => (fe || !I || !R ? B : Lg(B, I, R, me)), [B, I, R, me]);
          if (
            (h(() => {
              let e = le.current;
              if (e === null) return;
              function t(e) {
                let t = nd(e.target, le.current);
                Wn(e) ||
                  !ue ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Vu(ue, t, me) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ue, me]),
            Bg(l, P, le),
            !b)
          )
            return null;
          let ge = T && D() === J.canvas,
            _e = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: zg(w),
              opacity: ge ? 0 : x,
              flexShrink: 0,
            },
            ve = J.hasRestrictions(),
            ye = Uo(e, oe || 0, !1),
            be = ie && (u === `auto` || d === `auto`),
            xe = !!e.transformTemplate || !ye || !ve || P || be,
            Se = xe ? (e.transformTemplate ?? xs(_)) : void 0;
          if (!O) {
            if (ye && ve && !be) {
              let e = Sb.getNumber(C).toFixed(4);
              ((_e.transform = `translate(${ye.x}px, ${ye.y}px) rotate(${e}deg)`),
                (_e.width = ye.width),
                (_e.minWidth = ye.width),
                (_e.height = ye.height));
            } else
              ((_e.left = f),
                (_e.right = p),
                (_e.top = m),
                (_e.bottom = g),
                (_e.width = u),
                (_e.height = d),
                (_e.rotate = C));
            k
              ? (!fe || de) &&
                ((_e.position = `sticky`),
                (_e.willChange = `transform`),
                (_e.top = A),
                (_e.right = j),
                (_e.bottom = ee),
                (_e.left = te))
              : fe &&
                (e.positionFixed || e.positionAbsolute) &&
                (_e.position = `absolute`);
          }
          return (
            ul(e, _e),
            sl(e, _e),
            Object.assign(_e, e.style),
            E(L.div, {
              id: n,
              ref: le,
              ...ae,
              ...vs(xe ? _ : void 0, e.style),
              style: _e,
              layoutId: se,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: fl(v, y, ZO),
              transformTemplate: Se,
              dangerouslySetInnerHTML: { __html: he },
            })
          );
        }),
      )),
      ($O = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (ek = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`,
      )),
      (tk = D(function (e, t) {
        return E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (nk = L.create(tk)),
      (rk = D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return E(nk, {
          ...r,
          ref: i,
          viewBox: t,
          children: E(L.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (ik = []),
      (ak = `RichTextContainer`),
      (ok = D(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = J.current,
            fonts: p = ik,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: v,
            positionSticky: y,
            positionStickyBottom: b,
            positionStickyLeft: x,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: D = 0,
            style: O,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: j,
            top: ee,
            verticalAlignment: te = `top`,
            visible: N = !0,
            width: P,
            withExternalLayout: ne = !1,
            viewBox: re,
            viewBoxScale: ie = 1,
            effect: F,
            ...ae
          } = e,
          oe = Ko(),
          se = f(),
          ce = se === J.canvas,
          le = ce || se === J.export,
          ue = S(yS),
          I = Ss(e),
          L = M(null),
          R = t ?? L;
        (Os(e, R), Bg(p, n, R));
        let de = Yg(F, R),
          fe = s(() => {
            if (d) return r_(d, A, j, o, void 0, de.getTokenizer());
          }, [d, A, j, o, de]);
        if (!N) return null;
        let z = { opacity: h && ce ? 0 : v },
          pe = zg(te);
        pe !== iS.justifyContent && (z.justifyContent = pe);
        let B = {},
          me = J.hasRestrictions(),
          he = Uo(e, oe || 0, !1),
          ge = a && (P === `auto` || m === `auto`),
          _e = !!e.transformTemplate || !he || !me || n || ge,
          ve = _e ? (e.transformTemplate ?? xs(u)) : void 0;
        (ne ||
          (he && me && !ge
            ? ((B.x = he.x + (rt(O?.x) ? O.x : 0)),
              (B.y = he.y + (rt(O?.y) ? O.y : 0)),
              (B.left = 0),
              (B.top = 0),
              (z.rotate = Sb.getNumber(D)),
              (z.width = he.width),
              (z.minWidth = he.width),
              (z.height = he.height))
            : ((z.left = g),
              (z.right = T),
              (z.top = ee),
              (z.bottom = l),
              (z.width = P),
              (z.height = m),
              (z.rotate = D)),
          y
            ? (!le || ue) &&
              ((z.position = `sticky`),
              (z.willChange = `transform`),
              (z.top = w),
              (z.right = C),
              (z.bottom = b),
              (z.left = x))
            : ce &&
              (e.positionFixed || e.positionAbsolute) &&
              (z.position = `absolute`)),
          ul(e, z),
          sl(e, z),
          Object.assign(z, k, O, B),
          I && (ae.layout = `preserve-aspect`));
        let ye = es(e.as),
          be = ae[`data-framer-name`] ?? _,
          xe = ce ? e_(ex(ae)) : ae,
          Se = vs(_e ? u : void 0, O);
        return V(e.viewBox)
          ? e.as === void 0
            ? E(rk, {
                ...xe,
                ...Se,
                ref: R,
                style: z,
                layoutId: I,
                viewBox: re,
                viewBoxScale: ie,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": ak,
                children: fe,
              })
            : E(ye, {
                ...xe,
                ...Se,
                ref: R,
                style: z,
                layoutId: I,
                transformTemplate: ve,
                "data-framer-name": be,
                "data-framer-component-type": ak,
                children: E(rk, {
                  viewBox: re,
                  viewBoxScale: ie,
                  style: { width: `100%`, height: `100%` },
                  children: fe,
                }),
              })
          : E(ye, {
              ...xe,
              ...Se,
              ref: R,
              style: z,
              layoutId: I,
              transformTemplate: ve,
              "data-framer-name": be,
              "data-framer-component-type": ak,
              children: fe,
            });
      })),
      (sk = gs(
        D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (V(a)) {
            !r.stylesPresetsClassName &&
              H(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(
                r.stylesPresetsClassNames,
              ).join(` `));
            let e = { [V(t) ? `html` : `htmlFromDesign`]: a };
            return E(QO, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && V(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 ||
            t === void 0 ||
            n === void 0 ||
            i === void 0 ||
            a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`,
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return E(ok, { ...r, ref: i, children: T(a) ? a : void 0 });
        }),
      )),
      (ck = Rn()),
      (lk = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (uk = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (dk = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(DS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = c_(e);
            (s &&
              (t && l_(s, n),
              (s.id = n),
              (o = m_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t &&
            (--t.count,
            !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t &&
            (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          ck && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = uk),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          ck && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new lk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i,
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !ck) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        ck && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${uk}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(
                r.includes(`id="${n}"`)
                  ? r
                  : r.replace(/^<svg/u, `<svg id="${n}"`),
              );
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (fk = new dk()),
      (pk = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (mk = 1e3),
      (hk = `Variable`),
      (gk = `explicitInter`),
      (Te.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = R(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Ii as $,
  v_ as A,
  Ah as At,
  BC as B,
  AO as Bt,
  qD as C,
  hh as Ct,
  sk as D,
  s_ as Dt,
  vE as E,
  It as Et,
  cx as F,
  yg as Ft,
  __ as G,
  y_ as H,
  N_ as I,
  Tl as It,
  Gi as J,
  Xm as K,
  HC as L,
  k_ as Lt,
  _S as M,
  jh as Mt,
  Mx as N,
  pw as Nt,
  Mw as O,
  dh as Ot,
  fl as P,
  DO as Pt,
  Z_ as Q,
  zC as R,
  EO as Rt,
  FC as S,
  ph as St,
  Wu as T,
  Wt as Tt,
  x_ as U,
  kx as V,
  iy as Vt,
  b_ as W,
  _k as X,
  vt as Y,
  xt as Z,
  ST as _,
  Fu as _t,
  gw as a,
  A_ as at,
  mp as b,
  or as bt,
  ro as c,
  fk as ct,
  AC as d,
  hi as dt,
  Gw as et,
  iT as f,
  tu as ft,
  ov as g,
  ih as gt,
  rT as h,
  Mu as ht,
  $l as i,
  j_ as it,
  il as j,
  Ax as jt,
  h_ as k,
  mi as kt,
  VT as l,
  Mi as lt,
  eT as m,
  Rt as mt,
  rd as n,
  XD as nt,
  jw as o,
  ed as ot,
  KO as p,
  Gt as pt,
  Nv as q,
  eu as r,
  ch as rt,
  gC as s,
  bw as st,
  $u as t,
  aa as tt,
  HO as u,
  eh as ut,
  gb as v,
  oo as vt,
  J as w,
  Ym as wt,
  sT as x,
  oa as xt,
  hr as y,
  sr as yt,
  VC as z,
  rO as zt,
};
//# sourceMappingURL=framer.CFgihyWK.mjs.map
