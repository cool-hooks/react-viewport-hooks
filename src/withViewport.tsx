import React from 'react';

import { useViewport } from './useViewport';

import { Options } from './interfaces/options';

export function withViewport<T>(options?: Options) {
  return (WrappedComponent: React.ComponentType<T>) => {
    return (props: T) => (
      <WrappedComponent {...props} {...useViewport(options)} />
    );
  };
}
