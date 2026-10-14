import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  T as n,
  V as r,
  d as i,
  m as a,
  o,
  s,
  z as c,
} from "./react.CbTQkvGa.mjs";
import { M as l } from "./motion.DqePFWeo.mjs";
import {
  C as u,
  F as d,
  X as f,
  _ as ee,
  j as te,
  r as ne,
  s as p,
  t as re,
} from "./framer.CFgihyWK.mjs";
var ie,
  ae,
  oe,
  se = e(() => {
    (f(),
      d.loadFonts([]),
      (ie = [{ explicitInter: !0, fonts: [] }]),
      (ae = [
        `.framer-MlhFu .framer-styles-preset-5o05jg { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; }`,
      ]),
      (oe = `framer-MlhFu`));
  }),
  m,
  h,
  g,
  ce = e(() => {
    (f(),
      d.loadFonts([]),
      (m = [{ explicitInter: !0, fonts: [] }]),
      (h = [
        `.framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper), .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-color: rgba(153, 153, 153, 0.25); border-style: solid; border-top-left-radius: 8px; border-top-right-radius: 8px; border-width: 1px; overflow: hidden; }`,
        `.framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) th, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table th, .framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) td, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table td { padding: 10px; }`,
        `.framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) th, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table th { background-color: rgba(153, 153, 153, 0.1); }`,
        `.framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) tr + tr td, .framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) tr + tr th, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table tr + tr td, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table tr + tr th { border-top-color: rgba(153, 153, 153, 0.25); border-top-style: solid; border-top-width: 1px; }`,
        `.framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) td + td, .framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) th + th, .framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) td + th, .framer-C8g1g .framer-styles-preset-4szdrk:not(.rich-text-wrapper) th + td, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table td + td, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table th + th, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table td + th, .framer-C8g1g .framer-styles-preset-4szdrk.rich-text-wrapper table th + td { border-left-color: rgba(153, 153, 153, 0.25); border-left-style: solid; border-left-width: 1px; }`,
      ]),
      (g = `framer-C8g1g`));
  });
function _(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function v(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function y(e) {
  throw Error(`Unexpected value: ${e}`);
}
function b(e, t, n, r) {
  (v(e >= t, e, `outside lower bound for`, r),
    v(e <= n, e, `outside upper bound for`, r));
}
function x(e) {
  return typeof e == `string`;
}
function S(e) {
  return Number.isFinite(e);
}
function C(e) {
  return e === null;
}
function w(e) {
  if (C(e)) return 0;
  switch (e.type) {
    case p.Array:
      return 1;
    case p.Boolean:
      return 2;
    case p.Color:
      return 3;
    case p.Date:
      return 4;
    case p.Enum:
      return 5;
    case p.File:
      return 6;
    case p.ResponsiveImage:
      return 10;
    case p.Link:
      return 7;
    case p.Number:
      return 8;
    case p.Object:
      return 9;
    case p.RichText:
      return 11;
    case p.String:
      return 12;
    case p.VectorSetItem:
      return 13;
    default:
      y(e);
  }
}
function le(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = D.read(e);
    n.push(t);
  }
  return { type: p.Array, value: n };
}
function ue(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) D.write(e, n);
}
function de(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = D.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function fe(e) {
  return { type: p.Boolean, value: e.readUint8() !== 0 };
}
function pe(e, t) {
  e.writeUint8(+!!t.value);
}
function me(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function he(e) {
  return { type: p.Color, value: e.readString() };
}
function ge(e, t) {
  e.writeString(t.value);
}
function _e(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ve(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: p.Date, value: n.toISOString() };
}
function ye(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function be(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function xe(e) {
  return { type: p.Enum, value: e.readString() };
}
function Se(e, t) {
  e.writeString(t.value);
}
function Ce(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function we(e) {
  return { type: p.File, value: e.readString() };
}
function Te(e, t) {
  e.writeString(t.value);
}
function Ee(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function De(e) {
  return { type: p.Link, value: e.readJson() };
}
function Oe(e, t) {
  e.writeJson(t.value);
}
function ke(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ae(e) {
  return { type: p.Number, value: e.readFloat64() };
}
function je(e, t) {
  e.writeFloat64(t.value);
}
function Me(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ne(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = D.read(e);
  }
  return { type: p.Object, value: n };
}
function Pe(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n))
    (e.writeString(t), D.write(e, r));
}
function Fe(e, t, n) {
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
      u = D.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ie(e) {
  return { type: p.ResponsiveImage, value: e.readJson() };
}
function Le(e, t) {
  e.writeJson(t.value);
}
function Re(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ze(e) {
  let t = e.readInt8();
  if (t === 0) return { type: p.RichText, value: e.readUint32() };
  if (t === 1) return { type: p.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Be(e, t) {
  if (S(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (x(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ve(e, t) {
  let n = e.value,
    r = t.value;
  if ((S(n) && S(r)) || (x(n) && x(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function He(e) {
  return { type: p.String, value: e.readString() };
}
function Ue(e, t) {
  e.writeString(t.value);
}
function We(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Ge(e) {
  return { type: p.VectorSetItem, value: e.readUint32() };
}
function Ke(e, t) {
  e.writeUint32(t.value);
}
function qe(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Je(e) {
  let t = Math.floor(it * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function T(e, t) {
  let n = Ye(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await G(a);
  if (s.status !== 200)
    throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new ot(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function E(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ye(e) {
  v(e.length > 0, `Must have at least one range`);
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
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  Xe,
  Ze,
  Qe,
  F,
  $e,
  I,
  L,
  et,
  tt,
  R,
  z,
  B,
  V,
  H,
  nt,
  U,
  rt,
  W,
  it,
  at,
  G,
  ot,
  K,
  q,
  st,
  ct,
  lt = e(() => {
    (c(),
      f(),
      (O = Object.create),
      (k = Object.defineProperty),
      (A = Object.getOwnPropertyDescriptor),
      (j = Object.getOwnPropertyNames),
      (M = Object.getPrototypeOf),
      (N = Object.prototype.hasOwnProperty),
      (P = (e, t, n) =>
        t in e
          ? k(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n)),
      (Xe = (e, t) =>
        function () {
          return (
            t || (0, e[j(e)[0]])((t = { exports: {} }).exports, t),
            t.exports
          );
        }),
      (Ze = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of j(t))
            N.call(e, i) ||
              i === n ||
              k(e, i, {
                get: () => t[i],
                enumerable: !(r = A(t, i)) || r.enumerable,
              });
        return e;
      }),
      (Qe = (e, t, n) => (
        (n = e == null ? {} : O(M(e))),
        Ze(
          !t && e && e.__esModule
            ? n
            : k(n, `default`, { value: e, enumerable: !0 }),
          e,
        )
      )),
      (F = (e, t, n) => P(e, typeof t == `symbol` ? t : t + ``, n)),
      ($e = Qe(
        Xe({
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
      (I = {
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
      (L = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = I.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = I.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = I.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = I.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = I.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = I.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = I.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = I.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = I.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = I.Float64;
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
            F(this, `offset`, 0),
            F(this, `view`),
            F(this, `decoder`, new TextDecoder()),
            (this.view = _(this.bytes)));
        }
      }),
      r !== void 0 && r.requestIdleCallback,
      (et = 1024),
      (tt = 1.5),
      (R = (e) => 2 ** e - 1),
      (z = (e) => -(2 ** (e - 1))),
      (B = (e) => 2 ** (e - 1) - 1),
      (V = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: z(8),
        Int16: z(16),
        Int32: z(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (H = {
        Uint8: R(8),
        Uint16: R(16),
        Uint32: R(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: B(8),
        Int16: B(16),
        Int32: B(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      (nt = class {
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
          let n = new Uint8Array(Math.ceil(t * tt) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = _(n)));
        }
        writeUint8(e) {
          b(e, V.Uint8, H.Uint8, `Uint8`);
          let t = I.Uint8;
          (this.ensureLength(t),
            this.view.setUint8(this.offset, e),
            (this.offset += t));
        }
        writeUint16(e) {
          b(e, V.Uint16, H.Uint16, `Uint16`);
          let t = I.Uint16;
          (this.ensureLength(t),
            this.view.setUint16(this.offset, e),
            (this.offset += t));
        }
        writeUint32(e) {
          b(e, V.Uint32, H.Uint32, `Uint32`);
          let t = I.Uint32;
          (this.ensureLength(t),
            this.view.setUint32(this.offset, e),
            (this.offset += t));
        }
        writeUint64(e) {
          b(e, V.Uint64, H.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          b(e, V.BigUint64, H.BigUint64, `BigUint64`);
          let t = I.BigUint64;
          (this.ensureLength(t),
            this.view.setBigUint64(this.offset, e),
            (this.offset += t));
        }
        writeInt8(e) {
          b(e, V.Int8, H.Int8, `Int8`);
          let t = I.Int8;
          (this.ensureLength(t),
            this.view.setInt8(this.offset, e),
            (this.offset += t));
        }
        writeInt16(e) {
          b(e, V.Int16, H.Int16, `Int16`);
          let t = I.Int16;
          (this.ensureLength(t),
            this.view.setInt16(this.offset, e),
            (this.offset += t));
        }
        writeInt32(e) {
          b(e, V.Int32, H.Int32, `Int32`);
          let t = I.Int32;
          (this.ensureLength(t),
            this.view.setInt32(this.offset, e),
            (this.offset += t));
        }
        writeInt64(e) {
          b(e, V.Int64, H.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          b(e, V.BigInt64, H.BigInt64, `BigInt64`);
          let t = I.BigInt64;
          (this.ensureLength(t),
            this.view.setBigInt64(this.offset, e),
            (this.offset += t));
        }
        writeFloat32(e) {
          let t = I.Float32;
          (this.ensureLength(t),
            this.view.setFloat32(this.offset, e),
            (this.offset += t));
        }
        writeFloat64(e) {
          let t = I.Float64;
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
          (F(this, `offset`, 0),
            F(this, `bytes`, new Uint8Array(et)),
            F(this, `view`, _(this.bytes)),
            F(this, `encoder`, new TextEncoder()),
            F(this, `encodedStrings`, new Map()));
        }
      }),
      (U = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            v(S(n), `Invalid chunkId`),
            v(S(r), `Invalid offset`),
            v(S(i), `Invalid length`),
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
                  : (v(this.length === e.length), 0);
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
              return le(e);
            case 2:
              return fe(e);
            case 3:
              return he(e);
            case 4:
              return ve(e);
            case 5:
              return xe(e);
            case 6:
              return we(e);
            case 7:
              return De(e);
            case 8:
              return Ae(e);
            case 9:
              return Ne(e);
            case 10:
              return Ie(e);
            case 11:
              return ze(e);
            case 12:
              return He(e);
            case 13:
              return Ge(e);
            default:
              y(t);
          }
        }),
          (e.write = function (e, t) {
            let n = w(t);
            if ((e.writeUint8(n), !C(t)))
              switch (t.type) {
                case p.Array:
                  return ue(e, t);
                case p.Boolean:
                  return pe(e, t);
                case p.Color:
                  return ge(e, t);
                case p.Date:
                  return ye(e, t);
                case p.Enum:
                  return Se(e, t);
                case p.File:
                  return Te(e, t);
                case p.Link:
                  return Oe(e, t);
                case p.Number:
                  return je(e, t);
                case p.Object:
                  return Pe(e, t);
                case p.ResponsiveImage:
                  return Le(e, t);
                case p.RichText:
                  return Be(e, t);
                case p.VectorSetItem:
                  return Ke(e, t);
                case p.String:
                  return Ue(e, t);
                default:
                  y(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = w(e),
              i = w(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (C(e) || C(t)) return 0;
            switch (e.type) {
              case p.Array:
                return (v(t.type === p.Array), de(e, t, n));
              case p.Boolean:
                return (v(t.type === p.Boolean), me(e, t));
              case p.Color:
                return (v(t.type === p.Color), _e(e, t));
              case p.Date:
                return (v(t.type === p.Date), be(e, t));
              case p.Enum:
                return (v(t.type === p.Enum), Ce(e, t));
              case p.File:
                return (v(t.type === p.File), Ee(e, t));
              case p.Link:
                return (v(t.type === p.Link), ke(e, t));
              case p.Number:
                return (v(t.type === p.Number), Me(e, t));
              case p.Object:
                return (v(t.type === p.Object), Fe(e, t, n));
              case p.ResponsiveImage:
                return (v(t.type === p.ResponsiveImage), Re(e, t));
              case p.RichText:
                return (v(t.type === p.RichText), Ve(e, t));
              case p.VectorSetItem:
                return (v(t.type === p.VectorSetItem), qe(e, t));
              case p.String:
                return (v(t.type === p.String), We(e, t, n));
              default:
                y(e);
            }
          }));
      })((D ||= {})),
      (rt = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = D.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new L(t),
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
              let t = D.read(n);
              e.push(t);
            }
            let t = U.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new nt();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(),
          e.writeUint32(this.entries.length),
          this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) D.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), F(this, `entries`, []));
        }
      }),
      (W = 3),
      (it = 250),
      (at = [408, 429, 500, 502, 503, 504]),
      (G = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!at.includes(r.status) || ++n > W) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > W) throw e;
          }
          await Je(n);
        }
      }),
      (ot = class {
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
            if ((v(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = E(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((v(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = E(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          F(this, `chunks`, []);
        }
      }),
      (K = class {
        async loadModel() {
          let [e] = await T(this.options.url, [this.options.range]);
          return (v(e, `Failed to load model`), rt.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          v(e.length === this.fields.length, `Invalid query length`);
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
                      y(t);
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
            if (e?.type !== p.String || t.value?.type !== p.String) return !1;
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
            if (e?.type !== p.String || t.value?.type !== p.String) return !1;
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
            if (e?.type !== p.String || t.value?.type !== p.String) return !1;
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
            0 > D.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            D.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
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
            F(this, `schema`),
            F(this, `fields`),
            F(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            F(this, `modelPromise`),
            F(this, `model`),
            F(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (v(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t),
            (this.fields = n),
            (this.collation = this.options.collation));
        }
      }),
      (q = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = D.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), D.write(e, n));
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
          F(this, `fields`, new Map());
        }
      }),
      (st = class {
        scanItems() {
          return (
            (this.itemsPromise ??= G(this.url).then(async (e) => {
              if (!e.ok)
                throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new L(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = q.read(n),
                  i = n.getOffset() - e,
                  a = new U(this.id, e, i).toString(),
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
            F(this, `itemsPromise`),
            F(
              this,
              `itemLoader`,
              new $e.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = U.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await T(this.url, t)).map((t, n) => {
                    let r = new L(t),
                      i = q.read(r),
                      a = e[n];
                    return (
                      v(a, `Missing pointer`),
                      { pointer: a, data: i.getData() }
                    );
                  });
                },
                { maxBatchSize: 250 },
              ),
            ));
        }
      }),
      (ct = class {
        async scanItems() {
          return (
            await Promise.all(this.chunks.map(async (e) => e.scanItems()))
          ).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = U.fromString(e),
                n = this.chunks[t.chunkId];
              return (v(n, `Missing chunk`), n.resolveItem(e));
            }),
          );
        }
        compareItems(e, t) {
          let n = U.fromString(e.pointer),
            r = U.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return D.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            F(this, `id`),
            F(this, `schema`),
            F(this, `indexes`),
            F(this, `resolveRichText`),
            F(this, `resolveVectorSetItem`),
            F(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new st(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function ut(e) {
  return typeof e == `object` && !!e && !a(e) && pt in e;
}
function dt(e, ...t) {
  if (!e)
    throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ft(e) {
  let n = new Map();
  return (r) => {
    let a = n.get(r);
    if (a) return a;
    let s = (function n(r) {
      switch (r[0]) {
        case 1: {
          let [, ...e] = r;
          return i(t, void 0, ...e.map(n));
        }
        case 2: {
          let [, e, ...t] = r;
          return i(ee, e, ...t.map(n));
        }
        case 3: {
          let [, t, i, a, s] = r;
          for (let e of a) {
            let t = i[e];
            t && (i[e] = n(t));
          }
          for (let t of s) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (ut(r) && r.preload(), (i[t] = r));
          }
          let c = e[t];
          return (
            dt(c, `Module not found`),
            ut(c) && c.preload(),
            o(ne, {
              componentIdentifier: t,
              children: (e) => o(re, { component: c, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, t, ...a] = r,
            o = a.map(n);
          return i(e === `a` ? l.a : e, t, ...o);
        }
        case 5: {
          let [, e] = r;
          return e;
        }
      }
    })(JSON.parse(r));
    return (n.set(r, s), s);
  };
}
var J,
  pt,
  mt,
  ht = e(() => {
    (c(),
      s(),
      f(),
      n(),
      r !== void 0 && r.requestIdleCallback,
      (pt = `preload`),
      (mt =
        (((J = mt || {})[(J.Fragment = 1)] = `Fragment`),
        (J[(J.Link = 2)] = `Link`),
        (J[(J.Module = 3)] = `Module`),
        (J[(J.Tag = 4)] = `Tag`),
        (J[(J.Text = 5)] = `Text`),
        J)));
  }),
  Y,
  gt,
  X,
  _t,
  vt,
  yt,
  bt,
  xt,
  Z,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  Q,
  $,
  jt = e(() => {
    (f(),
      lt(),
      ht(),
      (Y = {
        Cmke7DFHr: { isNullable: !0, type: p.String },
        createdAt: { isNullable: !0, type: p.Date },
        id: { isNullable: !1, type: p.String },
        iZ73V7_Tv: { isNullable: !0, type: p.ResponsiveImage },
        LGb7V3_yI: { isNullable: !0, type: p.String },
        nextItemId: { isNullable: !0, type: p.String },
        previousItemId: { isNullable: !0, type: p.String },
        qsHFic6_y: { isNullable: !0, type: p.RichText },
        QVS2Ef1U8: { isNullable: !0, type: p.RichText },
        r6mde3mWY: { isNullable: !0, type: p.Date },
        updatedAt: { isNullable: !0, type: p.Date },
        W8hkqWWkT: { isNullable: !0, type: p.RichText },
        ZRAiBA2LZ: { isNullable: !0, type: p.RichText },
      }),
      (gt = [`id`]),
      (X = { type: 1 }),
      (_t = [`previousItemId`]),
      (vt = [`nextItemId`]),
      (yt = [`id`, `LGb7V3_yI`]),
      (bt = [`LGb7V3_yI`, `id`]),
      (xt = [`Cmke7DFHr`]),
      (Z = { type: 0 }),
      (St = [`iZ73V7_Tv`]),
      (Ct = [`LGb7V3_yI`]),
      (wt = [`QVS2Ef1U8`]),
      (Tt = [`r6mde3mWY`]),
      (Et = [`W8hkqWWkT`]),
      (Dt = [`ZRAiBA2LZ`]),
      (Ot = [`qsHFic6_y`]),
      (kt = []),
      (At = (e) => {
        let t = kt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Q = ft({})),
      new u(),
      ($ = {
        collectionByLocaleId: {
          default: new ct({
            chunks: [
              new URL(
                `./MErJyB6Do-chunk-default-0.framercms`,
                new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `223ac46c-9b71-44b4-8738-ec1cd8580e64default`,
            indexes: [
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: gt,
                range: { from: 0, to: 121 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: _t,
                range: { from: 121, to: 241 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: vt,
                range: { from: 241, to: 357 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: yt,
                range: { from: 357, to: 604 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: X,
                collectionSchema: Y,
                fieldNames: bt,
                range: { from: 604, to: 851 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: xt,
                range: { from: 851, to: 1036 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: St,
                range: { from: 1036, to: 3483 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Ct,
                range: { from: 3483, to: 3668 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: wt,
                range: { from: 3668, to: 6331 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Tt,
                range: { from: 6331, to: 6439 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Et,
                range: { from: 6439, to: 8162 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Dt,
                range: { from: 8162, to: 9742 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new K({
                collation: Z,
                collectionSchema: Y,
                fieldNames: Ot,
                range: { from: 9742, to: 11278 },
                url: new URL(
                  `./MErJyB6Do-indexes-default-0.framercms`,
                  new URL(`./framer/modules/GYf88t0UDIisZHQCnLwx/HE9FWk2hfBoJSsUfpyLo/MErJyB6Do.js`, document.baseURI).href,
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Q,
            resolveVectorSetItem: At,
            schema: Y,
          }),
        },
        displayName: `Changelog`,
        id: `223ac46c-9b71-44b4-8738-ec1cd8580e64`,
      }),
      te($, {
        Cmke7DFHr: { defaultValue: ``, title: `Title`, type: p.String },
        iZ73V7_Tv: { title: `Image`, type: p.ResponsiveImage },
        LGb7V3_yI: { preventLocalization: !0, title: `Slug`, type: p.String },
        QVS2Ef1U8: { defaultValue: ``, title: `Content`, type: p.RichText },
        r6mde3mWY: { title: `Date`, type: p.Date },
        W8hkqWWkT: { defaultValue: ``, title: `New`, type: p.RichText },
        ZRAiBA2LZ: { defaultValue: ``, title: `Improved`, type: p.RichText },
        qsHFic6_y: { defaultValue: ``, title: `Fixed`, type: p.RichText },
        createdAt: { title: `Created`, type: p.Date },
        updatedAt: { title: `Updated`, type: p.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/MErJyB6Do:default`,
          title: `Previous`,
          type: p.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/MErJyB6Do:default`,
          title: `Next`,
          type: p.CollectionReference,
        },
      }));
  });
export {
  m as a,
  ae as c,
  h as i,
  ie as l,
  jt as n,
  ce as o,
  g as r,
  oe as s,
  $ as t,
  se as u,
};
//# sourceMappingURL=MErJyB6Do.DrHl1_JM.mjs.map
