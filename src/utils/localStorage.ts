export const localStorageSetItem = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};

export const localStorageGetItem = (value: string) => {
  return localStorage.getItem(value);
};
