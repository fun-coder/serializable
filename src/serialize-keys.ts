const serializedKey = Symbol("serializable");

export const getSerializeKeys = constructor => {
  if (!constructor[serializedKey]) {
    constructor[serializedKey] = [];
  }
  return constructor[serializedKey];
};

export const isSerializable = value => {
  if (value == undefined || value == null) return false;
  return !!value.constructor[serializedKey];
};
