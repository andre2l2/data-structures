export function defaultEquals<T>(a: T, b: T): boolean {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.toLowerCase() === b.toLowerCase();
    }
    return a === b;
}
