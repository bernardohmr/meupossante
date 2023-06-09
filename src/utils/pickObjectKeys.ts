export function pickObjectKeys<T extends object>(raw: T, keys: string | string[]): T {
    const keysToFilter = typeof keys === "string"
      ? [keys]
      : keys;

    return Object.keys(raw)
      .filter(key => keysToFilter.includes(key))
      .reduce((obj, key) => {
        obj[key] = (raw as any)[key];
        return obj;
      }, {} as any) as T;
  }
