function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num: number = getFirstElement<number>([1, 2, 3]);
console.log(num);

const str: string = getFirstElement<string>(["a", "b", "c"]);
console.log(str);

const bool: boolean = getFirstElement<boolean>([true, false, true]);
console.log(bool);
