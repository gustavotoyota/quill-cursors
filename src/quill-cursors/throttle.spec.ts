import {throttle} from './throttle';

describe('throttle() ', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('throttles a function', () => {
    const callMethod = jest.fn();
    const throttled = throttle(() => callMethod(), 100);
    const t = setInterval(() => throttled(), 50);

    jest.advanceTimersByTime(500);

    expect(callMethod).toHaveBeenCalledTimes(4);

    clearInterval(t);
  });
});
