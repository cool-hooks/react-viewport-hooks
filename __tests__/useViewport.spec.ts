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

const resize = () => {
  act(() => {
    global.dispatchEvent(new Event('resize'));
  });
};

describe('useViewport', () => {
  afterEach(() => {
    global.innerWidth = 1024;
    global.innerHeight = 768;

    resize();
  });

  it.each([
    [{}, 500, 300],
    [{ updateOnResize: false }, 1024, 768],
  ])(
    'should return $resultVw and $resultVh as new viewport values',
    (options, resultVw, resultVh) => {
      const { result } = renderHook(() => useViewport(options));

      global.innerWidth = 500;
      global.innerHeight = 300;

      resize();

      expect(result.current.vw).toBe(resultVw);
      expect(result.current.vh).toBe(resultVh);
    }
  );
});
