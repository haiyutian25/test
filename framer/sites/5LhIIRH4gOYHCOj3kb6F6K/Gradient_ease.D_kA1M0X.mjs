import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  R as n,
  T as r,
  V as i,
  o as a,
  s as o,
  v as s,
  z as c,
} from "./react.CbTQkvGa.mjs";
import { M as l, t as u } from "./motion.DqePFWeo.mjs";
import { X as d, j as f, s as p } from "./framer.CFgihyWK.mjs";
var m,
  h,
  g,
  _ = e(() => {
    (c(),
      (m = typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : n),
      (h = {}),
      (function (e) {
        var t = /^\s+/,
          n = /\s+$/,
          r = 0,
          a = e.round,
          o = e.min,
          s = e.max,
          c = e.random;
        function l(e, t) {
          if (((e ||= ``), (t ||= {}), e instanceof l)) return e;
          if (!((this || m) instanceof l)) return new l(e, t);
          var n = u(e);
          (((this || m)._originalInput = e),
            ((this || m)._r = n.r),
            ((this || m)._g = n.g),
            ((this || m)._b = n.b),
            ((this || m)._a = n.a),
            ((this || m)._roundA = a(100 * (this || m)._a) / 100),
            ((this || m)._format = t.format || n.format),
            ((this || m)._gradientType = t.gradientType),
            (this || m)._r < 1 && ((this || m)._r = a((this || m)._r)),
            (this || m)._g < 1 && ((this || m)._g = a((this || m)._g)),
            (this || m)._b < 1 && ((this || m)._b = a((this || m)._b)),
            ((this || m)._ok = n.ok),
            ((this || m)._tc_id = r++));
        }
        ((l.prototype = {
          isDark: function () {
            return this.getBrightness() < 128;
          },
          isLight: function () {
            return !this.isDark();
          },
          isValid: function () {
            return (this || m)._ok;
          },
          getOriginalInput: function () {
            return (this || m)._originalInput;
          },
          getFormat: function () {
            return (this || m)._format;
          },
          getAlpha: function () {
            return (this || m)._a;
          },
          getBrightness: function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
          },
          getLuminance: function () {
            var t = this.toRgb(),
              n = t.r / 255,
              r = t.g / 255,
              i = t.b / 255,
              a = n <= 0.03928 ? n / 12.92 : e.pow((n + 0.055) / 1.055, 2.4),
              o = r <= 0.03928 ? r / 12.92 : e.pow((r + 0.055) / 1.055, 2.4),
              s = i <= 0.03928 ? i / 12.92 : e.pow((i + 0.055) / 1.055, 2.4);
            return 0.2126 * a + 0.7152 * o + 0.0722 * s;
          },
          setAlpha: function (e) {
            return (
              ((this || m)._a = L(e)),
              ((this || m)._roundA = a(100 * (this || m)._a) / 100),
              this || m
            );
          },
          toHsv: function () {
            var e = g((this || m)._r, (this || m)._g, (this || m)._b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: (this || m)._a };
          },
          toHsvString: function () {
            var e = g((this || m)._r, (this || m)._g, (this || m)._b),
              t = a(360 * e.h),
              n = a(100 * e.s),
              r = a(100 * e.v);
            return (this || m)._a == 1
              ? `hsv(` + t + `, ` + n + `%, ` + r + `%)`
              : `hsva(` +
                  t +
                  `, ` +
                  n +
                  `%, ` +
                  r +
                  `%, ` +
                  (this || m)._roundA +
                  `)`;
          },
          toHsl: function () {
            var e = f((this || m)._r, (this || m)._g, (this || m)._b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: (this || m)._a };
          },
          toHslString: function () {
            var e = f((this || m)._r, (this || m)._g, (this || m)._b),
              t = a(360 * e.h),
              n = a(100 * e.s),
              r = a(100 * e.l);
            return (this || m)._a == 1
              ? `hsl(` + t + `, ` + n + `%, ` + r + `%)`
              : `hsla(` +
                  t +
                  `, ` +
                  n +
                  `%, ` +
                  r +
                  `%, ` +
                  (this || m)._roundA +
                  `)`;
          },
          toHex: function (e) {
            return v((this || m)._r, (this || m)._g, (this || m)._b, e);
          },
          toHexString: function (e) {
            return `#` + this.toHex(e);
          },
          toHex8: function (e) {
            return y(
              (this || m)._r,
              (this || m)._g,
              (this || m)._b,
              (this || m)._a,
              e,
            );
          },
          toHex8String: function (e) {
            return `#` + this.toHex8(e);
          },
          toRgb: function () {
            return {
              r: a((this || m)._r),
              g: a((this || m)._g),
              b: a((this || m)._b),
              a: (this || m)._a,
            };
          },
          toRgbString: function () {
            return (this || m)._a == 1
              ? `rgb(` +
                  a((this || m)._r) +
                  `, ` +
                  a((this || m)._g) +
                  `, ` +
                  a((this || m)._b) +
                  `)`
              : `rgba(` +
                  a((this || m)._r) +
                  `, ` +
                  a((this || m)._g) +
                  `, ` +
                  a((this || m)._b) +
                  `, ` +
                  (this || m)._roundA +
                  `)`;
          },
          toPercentageRgb: function () {
            return {
              r: a(100 * R((this || m)._r, 255)) + `%`,
              g: a(100 * R((this || m)._g, 255)) + `%`,
              b: a(100 * R((this || m)._b, 255)) + `%`,
              a: (this || m)._a,
            };
          },
          toPercentageRgbString: function () {
            return (this || m)._a == 1
              ? `rgb(` +
                  a(100 * R((this || m)._r, 255)) +
                  `%, ` +
                  a(100 * R((this || m)._g, 255)) +
                  `%, ` +
                  a(100 * R((this || m)._b, 255)) +
                  `%)`
              : `rgba(` +
                  a(100 * R((this || m)._r, 255)) +
                  `%, ` +
                  a(100 * R((this || m)._g, 255)) +
                  `%, ` +
                  a(100 * R((this || m)._b, 255)) +
                  `%, ` +
                  (this || m)._roundA +
                  `)`;
          },
          toName: function () {
            return (this || m)._a === 0
              ? `transparent`
              : !((this || m)._a < 1) &&
                  (F[v((this || m)._r, (this || m)._g, (this || m)._b, !0)] ||
                    !1);
          },
          toFilter: function (e) {
            var t =
                `#` +
                b(
                  (this || m)._r,
                  (this || m)._g,
                  (this || m)._b,
                  (this || m)._a,
                ),
              n = t,
              r = (this || m)._gradientType ? `GradientType = 1, ` : ``;
            if (e) {
              var i = l(e);
              n = `#` + b(i._r, i._g, i._b, i._a);
            }
            return (
              `progid:DXImageTransform.Microsoft.gradient(` +
              r +
              `startColorstr=` +
              t +
              `,endColorstr=` +
              n +
              `)`
            );
          },
          toString: function (e) {
            var t = !!e;
            e ||= (this || m)._format;
            var n = !1,
              r = (this || m)._a < 1 && (this || m)._a >= 0;
            return !t &&
              r &&
              (e === `hex` ||
                e === `hex6` ||
                e === `hex3` ||
                e === `hex4` ||
                e === `hex8` ||
                e === `name`)
              ? e === `name` && (this || m)._a === 0
                ? this.toName()
                : this.toRgbString()
              : (e === `rgb` && (n = this.toRgbString()),
                e === `prgb` && (n = this.toPercentageRgbString()),
                (e !== `hex` && e !== `hex6`) || (n = this.toHexString()),
                e === `hex3` && (n = this.toHexString(!0)),
                e === `hex4` && (n = this.toHex8String(!0)),
                e === `hex8` && (n = this.toHex8String()),
                e === `name` && (n = this.toName()),
                e === `hsl` && (n = this.toHslString()),
                e === `hsv` && (n = this.toHsvString()),
                n || this.toHexString());
          },
          clone: function () {
            return l(this.toString());
          },
          _applyModification: function (e, t) {
            var n = e.apply(null, [this || m].concat([].slice.call(t)));
            return (
              ((this || m)._r = n._r),
              ((this || m)._g = n._g),
              ((this || m)._b = n._b),
              this.setAlpha(n._a),
              this || m
            );
          },
          lighten: function () {
            return this._applyModification(w, arguments);
          },
          brighten: function () {
            return this._applyModification(T, arguments);
          },
          darken: function () {
            return this._applyModification(E, arguments);
          },
          desaturate: function () {
            return this._applyModification(x, arguments);
          },
          saturate: function () {
            return this._applyModification(S, arguments);
          },
          greyscale: function () {
            return this._applyModification(C, arguments);
          },
          spin: function () {
            return this._applyModification(D, arguments);
          },
          _applyCombination: function (e, t) {
            return e.apply(null, [this || m].concat([].slice.call(t)));
          },
          analogous: function () {
            return this._applyCombination(M, arguments);
          },
          complement: function () {
            return this._applyCombination(O, arguments);
          },
          monochromatic: function () {
            return this._applyCombination(N, arguments);
          },
          splitcomplement: function () {
            return this._applyCombination(j, arguments);
          },
          triad: function () {
            return this._applyCombination(k, arguments);
          },
          tetrad: function () {
            return this._applyCombination(A, arguments);
          },
        }),
          (l.fromRatio = function (e, t) {
            if (typeof e == `object`) {
              var n = {};
              for (var r in e)
                e.hasOwnProperty(r) && (n[r] = r === `a` ? e[r] : W(e[r]));
              e = n;
            }
            return l(e, t);
          }));
        function u(e) {
          var t = { r: 0, g: 0, b: 0 },
            n = 1,
            r = null,
            i = null,
            a = null,
            c = !1,
            l = !1;
          return (
            typeof e == `string` && (e = Y(e)),
            typeof e == `object` &&
              (J(e.r) && J(e.g) && J(e.b)
                ? ((t = d(e.r, e.g, e.b)),
                  (c = !0),
                  (l = String(e.r).substr(-1) === `%` ? `prgb` : `rgb`))
                : J(e.h) && J(e.s) && J(e.v)
                  ? ((r = W(e.s)),
                    (i = W(e.v)),
                    (t = _(e.h, r, i)),
                    (c = !0),
                    (l = `hsv`))
                  : J(e.h) &&
                    J(e.s) &&
                    J(e.l) &&
                    ((r = W(e.s)),
                    (a = W(e.l)),
                    (t = p(e.h, r, a)),
                    (c = !0),
                    (l = `hsl`)),
              e.hasOwnProperty(`a`) && (n = e.a)),
            (n = L(n)),
            {
              ok: c,
              format: e.format || l,
              r: o(255, s(t.r, 0)),
              g: o(255, s(t.g, 0)),
              b: o(255, s(t.b, 0)),
              a: n,
            }
          );
        }
        function d(e, t, n) {
          return { r: 255 * R(e, 255), g: 255 * R(t, 255), b: 255 * R(n, 255) };
        }
        function f(e, t, n) {
          ((e = R(e, 255)), (t = R(t, 255)), (n = R(n, 255)));
          var r = s(e, t, n),
            i = o(e, t, n),
            a,
            c,
            l = (r + i) / 2;
          if (r == i) a = c = 0;
          else {
            var u = r - i;
            switch (((c = l > 0.5 ? u / (2 - r - i) : u / (r + i)), r)) {
              case e:
                a = (t - n) / u + (t < n ? 6 : 0);
                break;
              case t:
                a = (n - e) / u + 2;
                break;
              case n:
                a = (e - t) / u + 4;
                break;
            }
            a /= 6;
          }
          return { h: a, s: c, l };
        }
        function p(e, t, n) {
          var r, i, a;
          ((e = R(e, 360)), (t = R(t, 100)), (n = R(n, 100)));
          function o(e, t, n) {
            return (
              n < 0 && (n += 1),
              n > 1 && --n,
              n < 1 / 6
                ? e + 6 * (t - e) * n
                : n < 1 / 2
                  ? t
                  : n < 2 / 3
                    ? e + (t - e) * (2 / 3 - n) * 6
                    : e
            );
          }
          if (t === 0) r = i = a = n;
          else {
            var s = n < 0.5 ? n * (1 + t) : n + t - n * t,
              c = 2 * n - s;
            ((r = o(c, s, e + 1 / 3)),
              (i = o(c, s, e)),
              (a = o(c, s, e - 1 / 3)));
          }
          return { r: 255 * r, g: 255 * i, b: 255 * a };
        }
        function g(e, t, n) {
          ((e = R(e, 255)), (t = R(t, 255)), (n = R(n, 255)));
          var r = s(e, t, n),
            i = o(e, t, n),
            a,
            c,
            l = r,
            u = r - i;
          if (((c = r === 0 ? 0 : u / r), r == i)) a = 0;
          else {
            switch (r) {
              case e:
                a = (t - n) / u + (t < n ? 6 : 0);
                break;
              case t:
                a = (n - e) / u + 2;
                break;
              case n:
                a = (e - t) / u + 4;
                break;
            }
            a /= 6;
          }
          return { h: a, s: c, v: l };
        }
        function _(t, n, r) {
          ((t = 6 * R(t, 360)), (n = R(n, 100)), (r = R(r, 100)));
          var i = e.floor(t),
            a = t - i,
            o = r * (1 - n),
            s = r * (1 - a * n),
            c = r * (1 - (1 - a) * n),
            l = i % 6,
            u = [r, s, o, o, c, r][l],
            d = [c, r, r, s, o, o][l],
            f = [o, o, c, r, r, s][l];
          return { r: 255 * u, g: 255 * d, b: 255 * f };
        }
        function v(e, t, n, r) {
          var i = [
            U(a(e).toString(16)),
            U(a(t).toString(16)),
            U(a(n).toString(16)),
          ];
          return r &&
            i[0].charAt(0) == i[0].charAt(1) &&
            i[1].charAt(0) == i[1].charAt(1) &&
            i[2].charAt(0) == i[2].charAt(1)
            ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
            : i.join(``);
        }
        function y(e, t, n, r, i) {
          var o = [
            U(a(e).toString(16)),
            U(a(t).toString(16)),
            U(a(n).toString(16)),
            U(G(r)),
          ];
          return i &&
            o[0].charAt(0) == o[0].charAt(1) &&
            o[1].charAt(0) == o[1].charAt(1) &&
            o[2].charAt(0) == o[2].charAt(1) &&
            o[3].charAt(0) == o[3].charAt(1)
            ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
            : o.join(``);
        }
        function b(e, t, n, r) {
          return [
            U(G(r)),
            U(a(e).toString(16)),
            U(a(t).toString(16)),
            U(a(n).toString(16)),
          ].join(``);
        }
        ((l.equals = function (e, t) {
          return !(!e || !t) && l(e).toRgbString() == l(t).toRgbString();
        }),
          (l.random = function () {
            return l.fromRatio({ r: c(), g: c(), b: c() });
          }));
        function x(e, t) {
          t = t === 0 ? 0 : t || 10;
          var n = l(e).toHsl();
          return ((n.s -= t / 100), (n.s = z(n.s)), l(n));
        }
        function S(e, t) {
          t = t === 0 ? 0 : t || 10;
          var n = l(e).toHsl();
          return ((n.s += t / 100), (n.s = z(n.s)), l(n));
        }
        function C(e) {
          return l(e).desaturate(100);
        }
        function w(e, t) {
          t = t === 0 ? 0 : t || 10;
          var n = l(e).toHsl();
          return ((n.l += t / 100), (n.l = z(n.l)), l(n));
        }
        function T(e, t) {
          t = t === 0 ? 0 : t || 10;
          var n = l(e).toRgb();
          return (
            (n.r = s(0, o(255, n.r - a(255 * (-t / 100))))),
            (n.g = s(0, o(255, n.g - a(255 * (-t / 100))))),
            (n.b = s(0, o(255, n.b - a(255 * (-t / 100))))),
            l(n)
          );
        }
        function E(e, t) {
          t = t === 0 ? 0 : t || 10;
          var n = l(e).toHsl();
          return ((n.l -= t / 100), (n.l = z(n.l)), l(n));
        }
        function D(e, t) {
          var n = l(e).toHsl(),
            r = (n.h + t) % 360;
          return ((n.h = r < 0 ? 360 + r : r), l(n));
        }
        function O(e) {
          var t = l(e).toHsl();
          return ((t.h = (t.h + 180) % 360), l(t));
        }
        function k(e) {
          var t = l(e).toHsl(),
            n = t.h;
          return [
            l(e),
            l({ h: (n + 120) % 360, s: t.s, l: t.l }),
            l({ h: (n + 240) % 360, s: t.s, l: t.l }),
          ];
        }
        function A(e) {
          var t = l(e).toHsl(),
            n = t.h;
          return [
            l(e),
            l({ h: (n + 90) % 360, s: t.s, l: t.l }),
            l({ h: (n + 180) % 360, s: t.s, l: t.l }),
            l({ h: (n + 270) % 360, s: t.s, l: t.l }),
          ];
        }
        function j(e) {
          var t = l(e).toHsl(),
            n = t.h;
          return [
            l(e),
            l({ h: (n + 72) % 360, s: t.s, l: t.l }),
            l({ h: (n + 216) % 360, s: t.s, l: t.l }),
          ];
        }
        function M(e, t, n) {
          ((t ||= 6), (n ||= 30));
          var r = l(e).toHsl(),
            i = 360 / n,
            a = [l(e)];
          for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t;)
            ((r.h = (r.h + i) % 360), a.push(l(r)));
          return a;
        }
        function N(e, t) {
          t ||= 6;
          for (
            var n = l(e).toHsv(), r = n.h, i = n.s, a = n.v, o = [], s = 1 / t;
            t--;
          )
            (o.push(l({ h: r, s: i, v: a })), (a = (a + s) % 1));
          return o;
        }
        ((l.mix = function (e, t, n) {
          n = n === 0 ? 0 : n || 50;
          var r = l(e).toRgb(),
            i = l(t).toRgb(),
            a = n / 100;
          return l({
            r: (i.r - r.r) * a + r.r,
            g: (i.g - r.g) * a + r.g,
            b: (i.b - r.b) * a + r.b,
            a: (i.a - r.a) * a + r.a,
          });
        }),
          (l.readability = function (t, n) {
            var r = l(t),
              i = l(n);
            return (
              (e.max(r.getLuminance(), i.getLuminance()) + 0.05) /
              (e.min(r.getLuminance(), i.getLuminance()) + 0.05)
            );
          }),
          (l.isReadable = function (e, t, n) {
            var r = l.readability(e, t),
              i,
              a = !1;
            switch (((i = X(n)), i.level + i.size)) {
              case `AAsmall`:
              case `AAAlarge`:
                a = r >= 4.5;
                break;
              case `AAlarge`:
                a = r >= 3;
                break;
              case `AAAsmall`:
                a = r >= 7;
                break;
            }
            return a;
          }),
          (l.mostReadable = function (e, t, n) {
            var r = null,
              i = 0,
              a,
              o,
              s,
              c;
            ((n ||= {}),
              (o = n.includeFallbackColors),
              (s = n.level),
              (c = n.size));
            for (var u = 0; u < t.length; u++)
              ((a = l.readability(e, t[u])), a > i && ((i = a), (r = l(t[u]))));
            return l.isReadable(e, r, { level: s, size: c }) || !o
              ? r
              : ((n.includeFallbackColors = !1),
                l.mostReadable(e, [`#fff`, `#000`], n));
          }));
        var P = (l.names = {
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
          F = (l.hexNames = I(P));
        function I(e) {
          var t = {};
          for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
          return t;
        }
        function L(e) {
          return (
            (e = parseFloat(e)),
            (isNaN(e) || e < 0 || e > 1) && (e = 1),
            e
          );
        }
        function R(t, n) {
          V(t) && (t = `100%`);
          var r = H(t);
          return (
            (t = o(n, s(0, parseFloat(t)))),
            r && (t = parseInt(t * n, 10) / 100),
            e.abs(t - n) < 1e-6 ? 1 : (t % n) / parseFloat(n)
          );
        }
        function z(e) {
          return o(1, s(0, e));
        }
        function B(e) {
          return parseInt(e, 16);
        }
        function V(e) {
          return (
            typeof e == `string` && e.indexOf(`.`) != -1 && parseFloat(e) === 1
          );
        }
        function H(e) {
          return typeof e == `string` && e.indexOf(`%`) != -1;
        }
        function U(e) {
          return e.length == 1 ? `0` + e : `` + e;
        }
        function W(e) {
          return (e <= 1 && (e = 100 * e + `%`), e);
        }
        function G(t) {
          return e.round(255 * parseFloat(t)).toString(16);
        }
        function K(e) {
          return B(e) / 255;
        }
        var q = (function () {
          var e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
            t =
              `[\\s|\\(]+(` +
              e +
              `)[,|\\s]+(` +
              e +
              `)[,|\\s]+(` +
              e +
              `)\\s*\\)?`,
            n =
              `[\\s|\\(]+(` +
              e +
              `)[,|\\s]+(` +
              e +
              `)[,|\\s]+(` +
              e +
              `)[,|\\s]+(` +
              e +
              `)\\s*\\)?`;
          return {
            CSS_UNIT: new RegExp(e),
            rgb: RegExp(`rgb` + t),
            rgba: RegExp(`rgba` + n),
            hsl: RegExp(`hsl` + t),
            hsla: RegExp(`hsla` + n),
            hsv: RegExp(`hsv` + t),
            hsva: RegExp(`hsva` + n),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          };
        })();
        function J(e) {
          return !!q.CSS_UNIT.exec(e);
        }
        function Y(e) {
          e = e.replace(t, ``).replace(n, ``).toLowerCase();
          var r = !1;
          if (P[e]) ((e = P[e]), (r = !0));
          else if (e == `transparent`)
            return { r: 0, g: 0, b: 0, a: 0, format: `name` };
          var i;
          return (i = q.rgb.exec(e))
            ? { r: i[1], g: i[2], b: i[3] }
            : (i = q.rgba.exec(e))
              ? { r: i[1], g: i[2], b: i[3], a: i[4] }
              : (i = q.hsl.exec(e))
                ? { h: i[1], s: i[2], l: i[3] }
                : (i = q.hsla.exec(e))
                  ? { h: i[1], s: i[2], l: i[3], a: i[4] }
                  : (i = q.hsv.exec(e))
                    ? { h: i[1], s: i[2], v: i[3] }
                    : (i = q.hsva.exec(e))
                      ? { h: i[1], s: i[2], v: i[3], a: i[4] }
                      : (i = q.hex8.exec(e))
                        ? {
                            r: B(i[1]),
                            g: B(i[2]),
                            b: B(i[3]),
                            a: K(i[4]),
                            format: r ? `name` : `hex8`,
                          }
                        : (i = q.hex6.exec(e))
                          ? {
                              r: B(i[1]),
                              g: B(i[2]),
                              b: B(i[3]),
                              format: r ? `name` : `hex`,
                            }
                          : (i = q.hex4.exec(e))
                            ? {
                                r: B(i[1] + `` + i[1]),
                                g: B(i[2] + `` + i[2]),
                                b: B(i[3] + `` + i[3]),
                                a: K(i[4] + `` + i[4]),
                                format: r ? `name` : `hex8`,
                              }
                            : !!(i = q.hex3.exec(e)) && {
                                r: B(i[1] + `` + i[1]),
                                g: B(i[2] + `` + i[2]),
                                b: B(i[3] + `` + i[3]),
                                format: r ? `name` : `hex`,
                              };
        }
        function X(e) {
          var t, n;
          return (
            (e ||= { level: `AA`, size: `small` }),
            (t = (e.level || `AA`).toUpperCase()),
            (n = (e.size || `small`).toLowerCase()),
            t !== `AA` && t !== `AAA` && (t = `AA`),
            n !== `small` && n !== `large` && (n = `small`),
            { level: t, size: n }
          );
        }
        h ? (h = l) : (i.tinycolor = l);
      })(Math),
      (g = h));
  });
function v(e) {
  let { gradientDirection: n, cornerRadius: r, easing: i, startColor: o } = e,
    c = g(o).toRgb(),
    [u, d] = s({ r: 0, g: 0, b: 0, a: 0 });
  t(() => {
    d({ r: c.r, g: c.g, b: c.b, a: 0 });
  }, [c.r, c.g, c.b]);
  function f(e, t, n) {
    return {
      r: Math.round(e.r + (t.r - e.r) * n),
      g: Math.round(e.g + (t.g - e.g) * n),
      b: Math.round(e.b + (t.b - e.b) * n),
      a: e.a + (t.a - e.a) * n,
    };
  }
  let p = `linear-gradient(${n}, ${((e, t = 50) => {
    let n = [];
    for (let r = 0; r < t; r++) {
      let i = r / (t - 1),
        a = e(i),
        o = f(c, u, a),
        s = `rgba(${o.r}, ${o.g}, ${o.b}, ${o.a})`;
      n.push(`${s} ${i * 100}%`);
    }
    return n.join(`, `);
  })(y[i])})`;
  return a(l.div, {
    style: { width: `100%`, height: `100%`, borderRadius: r, background: p },
  });
}
var y,
  b = e(() => {
    (o(),
      r(),
      u(),
      d(),
      _(),
      (y = {
        linear: (e) => e,
        easeIn: (e) => e * e,
        easeInOut: (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
        exponential: (e) => (e === 0 ? 0 : 1024 ** (e - 1)),
      }),
      (v.defaultProps = {
        gradientDirection: `to bottom`,
        cornerRadius: 0,
        easing: `easeInOut`,
        startColor: `#000000`,
      }),
      f(v, {
        gradientDirection: {
          type: p.Enum,
          title: `Direction`,
          options: [`to left`, `to right`, `to top`, `to bottom`],
          optionTitles: [`Left`, `Right`, `Up`, `Down`],
          displaySegmentedControl: !0,
          optionIcons: [
            `direction-left`,
            `direction-right`,
            `direction-up`,
            `direction-down`,
          ],
          defaultValue: `to bottom`,
        },
        cornerRadius: {
          type: p.Number,
          title: `Corner Radius`,
          min: 0,
          max: 100,
          step: 1,
          unit: `px`,
          defaultValue: 0,
        },
        easing: {
          type: p.Enum,
          title: `Easing`,
          options: [`linear`, `easeIn`, `easeInOut`, `exponential`],
          optionTitles: [`Linear`, `Ease In`, `Ease In-Out`, `Exponential`],
          defaultValue: `easeInOut`,
        },
        startColor: { type: p.Color, title: `Start`, defaultValue: `#000000` },
      }));
  });
export { b as n, v as t };
//# sourceMappingURL=Gradient_ease.D_kA1M0X.mjs.map
