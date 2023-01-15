export function objectChange(obj) {
  return !!Object.keys(obj ?? {}).length
}
