import { getParser } from "./utils/basic-parser";
import { getSerializeKeys } from "./serialize-keys";

export const serialize = <T>(json: any, constructor: { new(): T }): T => {
  const instance = new constructor();
  getSerializeKeys(constructor).forEach(key => {
    const jsonKey = Reflect.getMetadata("json:name", constructor.prototype, key);
    const type = Reflect.getMetadata('design:type', constructor.prototype, key);
    const parser = getParser(type);
    const value = parser ? parser(json[jsonKey]) : serialize(json[jsonKey], type);
    Object.defineProperty(instance, key, { value });
  });
  return instance;
};
