import { getParser } from "./utils/basic-parser";
import { getSerializeKeys, isSerializable } from "./serialize-keys";

const parseWithType = (type, value) => {
  const parser = getParser(type);
  return parser ? parser(value) : serialize(value, type);
};

const parseWithoutType = (value) => {
  return isSerializable(value) ? serialize(value, value.constructor) : value;
};

export const serialize = <T>(json: any, constructor: { new(): T }): T => {
  const instance = new constructor();
  getSerializeKeys(constructor).forEach(key => {
    const jsonKey = Reflect.getMetadata("json:name", constructor.prototype, key);
    const type = Reflect.getMetadata('design:type', constructor.prototype, key);
    const jsonValue = json[jsonKey];
    const value = type ? parseWithType(type, jsonValue) : parseWithoutType(jsonValue);
    Object.defineProperty(instance, key, { value });
  });
  return instance;
};
