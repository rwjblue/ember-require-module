/* globals self */

export default function requireModule(module) {
  let rjs = self.requirejs;

  if (
    (rjs.has && rjs.has(module)) ||
    (!rjs.has && (rjs.entries[module] || rjs.entries[`${module}/index`]))
  ) {
    return self.require(module).default;
  }
}
