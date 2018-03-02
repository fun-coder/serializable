export const getSerializeKeys = (() => {
  const map = new Map<string, string[]>();
  return constructor => {
    if (!map.get(constructor)) {
      map.set(constructor, []);
    }
    return map.get(constructor);
  }
})();