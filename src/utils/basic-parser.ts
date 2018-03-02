const parseBoolean = value => {
  if (typeof value === 'string') return value.trim() !== 'false';
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value != 0;
  return !!value;
};

const parseMap = new Map();

parseMap.set(String, value => value.toString());
parseMap.set(Number, Number);
parseMap.set(Boolean, parseBoolean);
parseMap.set(undefined, value => value);
parseMap.set(null, value => value);

export const isBasicType = value => parseMap.has(value.constructor);

export const getParser = constructor => parseMap.get(constructor);
