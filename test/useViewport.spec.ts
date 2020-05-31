import { renderHook, act } from '@testing-library/react-hooks';

import { useViewport } from '../src';

declare global {
  namespace NodeJS {
    interface Global {
      innerWidth: number;
      innerHeight: number;
      dispatchEvent: (event: Event) => void;
    }
  }
}

describe('useViewport', () => {
  afterEach(() => {
    global.innerWidth = 1024;
    global.innerHeight = 768;

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });
  });

  it('should return window dimensions', () => {
    const { result } = renderHook(() => useViewport());

    global.innerWidth = 500;
    global.innerHeight = 300;

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.vw).toBe(500);
    expect(result.current.vh).toBe(300);
  });

  it('should return window dimensions without update on resize', () => {
    const options = {
      updateOnResize: false,
    };

    const { result } = renderHook(() => useViewport(options));

    global.innerWidth = 500;
    global.innerHeight = 300;

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.vw).toBe(1024);
    expect(result.current.vh).toBe(768);
  });

  it('should return window dimensions', () => {
    const options = {
      defaultVH: 400,
      defaultVW: 200,
    };

    const { result } = renderHook(() => useViewport(options));

    // global.innerWidth = 500;
    // global.innerHeight = 300;

    act(() => {
      global.dispatchEvent(new Event('resize'));
    });

    expect(result.current.vw).toBe(500);
    expect(result.current.vh).toBe(300);
  });
});
