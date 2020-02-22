import { renderHook, act } from '@testing-library/react-hooks';

import { useViewport } from '../src';

describe('useViewport', () => {
  afterEach(() => {
    (global as any).innerWidth = 1024;
    (global as any).innerHeight = 768;

    act(() => {
      (global as any).dispatchEvent(new Event('resize'));
    });
  });

  it('should return window dimensions', () => {
    const { result } = renderHook(() => useViewport());

    (global as any).innerWidth = 500;
    (global as any).innerHeight = 300;

    act(() => {
      (global as any).dispatchEvent(new Event('resize'));
    });

    expect(result.current.vw).toBe(500);
    expect(result.current.vh).toBe(300);
  });

  it('should return window dimensions without update on resize', () => {
    const options = {
      updateOnResize: false
    };

    const { result } = renderHook(() => useViewport(options));

    (global as any).innerWidth = 500;
    (global as any).innerHeight = 300;

    act(() => {
      (global as any).dispatchEvent(new Event('resize'));
    });

    expect(result.current.vw).toBe(1024);
    expect(result.current.vh).toBe(768);
  });
});
