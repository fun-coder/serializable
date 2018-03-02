import { serialize } from "./serialize";
import { deserialize } from "./deserialize";
import { getSerializeKeys } from "./serialize-keys";

export const json = (propName?: string): PropertyDecorator => {
  return (prototype: Object, name: string) => {
    Reflect.defineMetadata("json:name", propName || name, prototype, name);
    getSerializeKeys(prototype.constructor).push(name);
  }
};

export const serializable = <T extends { new(...args: any[]): {} }>(constructor: T) => {
  Object.defineProperty(constructor, 'serialize', {
    value: value => serialize(value, constructor)
  });
  Object.defineProperty(constructor.prototype, 'deserialize', {
    value: function () {
      return deserialize(this);
    }
  });
};