export declare const propsFrom: (o: any) => {
    [x: number]: unknown[];
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): unknown[];
    push(...items: unknown[][]): number;
    concat(...items: ConcatArray<unknown[]>[]): unknown[][];
    concat(...items: (unknown[] | ConcatArray<unknown[]>)[]): unknown[][];
    join(separator?: string): string;
    reverse(): unknown[][];
    shift(): unknown[];
    slice(start?: number, end?: number): unknown[][];
    sort(compareFn?: (a: unknown[], b: unknown[]) => number): unknown[][];
    splice(start: number, deleteCount?: number): unknown[][];
    splice(start: number, deleteCount: number, ...items: unknown[][]): unknown[][];
    unshift(...items: unknown[][]): number;
    indexOf(searchElement: unknown[], fromIndex?: number): number;
    lastIndexOf(searchElement: unknown[], fromIndex?: number): number;
    every(callbackfn: (value: unknown[], index: number, array: unknown[][]) => unknown, thisArg?: any): boolean;
    some(callbackfn: (value: unknown[], index: number, array: unknown[][]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: unknown[], index: number, array: unknown[][]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: unknown[], index: number, array: unknown[][]) => U, thisArg?: any): U[];
    filter<S extends unknown[]>(callbackfn: (value: unknown[], index: number, array: unknown[][]) => value is S, thisArg?: any): S[];
    filter(callbackfn: (value: unknown[], index: number, array: unknown[][]) => unknown, thisArg?: any): unknown[][];
    reduce(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[]): unknown[];
    reduce(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[], initialValue: unknown[]): unknown[];
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: unknown[], currentIndex: number, array: unknown[][]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[]): unknown[];
    reduceRight(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[], initialValue: unknown[]): unknown[];
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: unknown[], currentIndex: number, array: unknown[][]) => U_2, initialValue: U_2): U_2;
    find<S_1 extends unknown[]>(predicate: (this: void, value: unknown[], index: number, obj: unknown[][]) => value is S_1, thisArg?: any): S_1;
    find(predicate: (value: unknown[], index: number, obj: unknown[][]) => unknown, thisArg?: any): unknown[];
    findIndex(predicate: (value: unknown[], index: number, obj: unknown[][]) => unknown, thisArg?: any): number;
    fill(value: unknown[], start?: number, end?: number): unknown[][];
    copyWithin(target: number, start: number, end?: number): unknown[][];
    [Symbol.iterator](): IterableIterator<unknown[]>;
    entries(): IterableIterator<[number, unknown[]]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<unknown[]>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    includes(searchElement: unknown[], fromIndex?: number): boolean;
};
export declare const eventsFrom: (o: any) => {
    [x: number]: unknown[];
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): unknown[];
    push(...items: unknown[][]): number;
    concat(...items: ConcatArray<unknown[]>[]): unknown[][];
    concat(...items: (unknown[] | ConcatArray<unknown[]>)[]): unknown[][];
    join(separator?: string): string;
    reverse(): unknown[][];
    shift(): unknown[];
    slice(start?: number, end?: number): unknown[][];
    sort(compareFn?: (a: unknown[], b: unknown[]) => number): unknown[][];
    splice(start: number, deleteCount?: number): unknown[][];
    splice(start: number, deleteCount: number, ...items: unknown[][]): unknown[][];
    unshift(...items: unknown[][]): number;
    indexOf(searchElement: unknown[], fromIndex?: number): number;
    lastIndexOf(searchElement: unknown[], fromIndex?: number): number;
    every(callbackfn: (value: unknown[], index: number, array: unknown[][]) => unknown, thisArg?: any): boolean;
    some(callbackfn: (value: unknown[], index: number, array: unknown[][]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: unknown[], index: number, array: unknown[][]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: unknown[], index: number, array: unknown[][]) => U, thisArg?: any): U[];
    filter<S extends unknown[]>(callbackfn: (value: unknown[], index: number, array: unknown[][]) => value is S, thisArg?: any): S[];
    filter(callbackfn: (value: unknown[], index: number, array: unknown[][]) => unknown, thisArg?: any): unknown[][];
    reduce(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[]): unknown[];
    reduce(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[], initialValue: unknown[]): unknown[];
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: unknown[], currentIndex: number, array: unknown[][]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[]): unknown[];
    reduceRight(callbackfn: (previousValue: unknown[], currentValue: unknown[], currentIndex: number, array: unknown[][]) => unknown[], initialValue: unknown[]): unknown[];
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: unknown[], currentIndex: number, array: unknown[][]) => U_2, initialValue: U_2): U_2;
    find<S_1 extends unknown[]>(predicate: (this: void, value: unknown[], index: number, obj: unknown[][]) => value is S_1, thisArg?: any): S_1;
    find(predicate: (value: unknown[], index: number, obj: unknown[][]) => unknown, thisArg?: any): unknown[];
    findIndex(predicate: (value: unknown[], index: number, obj: unknown[][]) => unknown, thisArg?: any): number;
    fill(value: unknown[], start?: number, end?: number): unknown[][];
    copyWithin(target: number, start: number, end?: number): unknown[][];
    [Symbol.iterator](): IterableIterator<unknown[]>;
    entries(): IterableIterator<[number, unknown[]]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<unknown[]>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
    includes(searchElement: unknown[], fromIndex?: number): boolean;
};