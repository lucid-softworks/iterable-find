/** Returns the first match, or undefined, while consuming only as needed. */
export function find<T>(
  iterable: Iterable<T>,
  predicate: (value: T, index: number) => boolean,
): T | undefined {
  let index = 0;
  for (const value of iterable) {
    if (predicate(value, index)) return value;
    index += 1;
  }
  return undefined;
}
