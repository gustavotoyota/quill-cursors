export type ThrottledFunction<T extends (...args: any) => any> = (...args: Parameters<T>) => ReturnType<T>;

export function throttle<T extends(...args: any) => any>(func: T, limit: number): ThrottledFunction<T> {
  let inThrottle: boolean;
  let lastResult: ReturnType<T>;

  return function(...funArgs): ReturnType<T> {
    if (!inThrottle) {
      inThrottle = true;

      setTimeout(() => (inThrottle = false), limit);

      // eslint-disable-next-line no-invalid-this
      lastResult = func.apply(this, funArgs);
    }

    return lastResult;
  };
}
