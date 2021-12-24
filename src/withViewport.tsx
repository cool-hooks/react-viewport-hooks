import React from 'react';

import { useViewport } from './useViewport';

import type { Options } from './types';

export function withViewport(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T>) =>
    (props: Omit<T, keyof ReturnType<typeof useViewport>>) =>
      <WrappedComponent {...(props as T)} {...useViewport(options)} />;
}
