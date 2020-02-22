import { renderHook } from '@testing-library/react-hooks';

import { useViewport } from '../src';

describe('useViewport', () => {
  it('should return window dimensions', () => {
    const { result } = renderHook(() => useViewport());

    expect(result.current.vh).toBe(768);
    expect(result.current.vw).toBe(1024);
  });

  it('should return window dimensions without update on resize', () => {
    const options = {
      updateOnResize: false
    };

    const { result } = renderHook(() => useViewport(options));

    expect(result.current.vh).toBe(768);
    expect(result.current.vw).toBe(1024);
  });
});
