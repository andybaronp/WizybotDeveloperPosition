export function getRandomArray<T>(array: T[], size: number): T[] {
  const randomArray: T[] = [];
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    randomArray.push(array[randomIndex]);
  }
  return randomArray;
}

export function getRandomPrice() {
  return (Math.random() * 90 + 10).toFixed(2);
}
