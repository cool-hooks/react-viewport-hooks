import React from 'react';

import { useViewport } from './useViewport';

import { Options } from './interfaces/options';

export function withViewport(options?: Options) {
  // TODO fix types
  return <T,>(
    WrappedComponent: React.ComponentType<
      T & {
        readonly vw: number;
        readonly vh: number;
      }
    >
  ) => (props: T) => <WrappedComponent {...props} {...useViewport(options)} />;
}
