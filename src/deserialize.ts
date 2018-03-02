import { getSerializeKeys } from "./serialize-keys";
import { getValue } from "./utils/get-value";
import { isBasicType } from "./utils/basic-parser";

export const deserialize = <T>(target: any) => {
  const constructor = target.constructor;
  return getSerializeKeys(constructor).reduce((map, key) => {
    const jsonKey = Reflect.getMetadata("json:name", constructor.prototype, key);
    const value = getValue(target, key);
    map[jsonKey] = isBasicType(value) ? value : deserialize(value);
    return map;
  }, {});
};