
export const Range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start);
