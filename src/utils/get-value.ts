export const getValue = (target, prop) => {
  const descriptor = Object.getOwnPropertyDescriptor(target, prop);
  if (descriptor.value !== undefined) {
    return descriptor.value;
  } else if (descriptor.get) {
    return descriptor.get();
  }
};