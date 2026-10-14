import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { C as t, K as n, X as r } from "./framer.CFgihyWK.mjs";
import { n as i, t as a } from "./shared-lib.t8-xaOwk.mjs";
import { i as o, t as s } from "./SVtyO51O3.CKWhAbI4.mjs";
function c(e, t) {
  let n = e?.Kbo7saXJt,
    r = e?.ouCb5EaSp;
  return {
    breakpoints: [
      { hash: `tehq9z`, mediaQuery: `(min-width: 1280px)` },
      {
        hash: `131c3x5`,
        mediaQuery: `(min-width: 810px) and (max-width: 1279.98px)`,
      },
      { hash: `9njzmj`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { fcyKHIcrs: `4`, irEBHMYq0: `scroll` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-SJaUU`,
    socialImage: f(r),
    title: `Powder — ${n === void 0 ? `{{Kbo7saXJt}}` : d(n)}`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    a = {
      from: { alias: `o2yXfHY3m`, data: s, type: `Collection` },
      select: [
        { collection: `o2yXfHY3m`, name: `Kbo7saXJt`, type: `Identifier` },
        { collection: `o2yXfHY3m`, name: `ouCb5EaSp`, type: `Identifier` },
      ],
      where: n(e, `o2yXfHY3m`),
    },
    o = await i.query(a, r);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `o2yXfHY3m`, data: s, type: `Collection` },
      select: [
        { collection: `o2yXfHY3m`, name: `Kbo7saXJt`, type: `Identifier` },
        { collection: `o2yXfHY3m`, name: `ouCb5EaSp`, type: `Identifier` },
      ],
    };
  for (let t of e)
    i.select.push({ collection: `o2yXfHY3m`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: c(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var d,
  f,
  p,
  m,
  h = e(() => {
    (r(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (p = 1),
      (m = {
        exports: {
          default: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          metadataVersion: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          fetchMetadata: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          fetchAllMetadata: {
            type: `function`,
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
h();
export {
  m as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  p as metadataVersion,
  h as t,
};
//# sourceMappingURL=cU1xZKdwUORkR_pybuERjbHUg1VJ3Vcv5be2tD3gXIY.BsWNSN9G.mjs.map
