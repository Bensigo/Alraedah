export default function isPerfectCircle(arr) {
  if (!arr.length) {
    return true;
  }
  let currentIndex = 0;
  let visitedCount = 0;
  while (visitedCount < arr.length) {
    if (visitedCount > 0 && currentIndex === 0) return false;
    currentIndex = arr[currentIndex];
    visitedCount += 1;
  }
  return currentIndex === 0;
}
