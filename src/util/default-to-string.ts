export function defaultToString(item: unknown): string {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  } else if (typeof item === 'object' || item instanceof Object) {
    return 'OBJECT';
  }
  return item.toString();
}
