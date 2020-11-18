import React from 'react';

import { useViewport } from './useViewport';

import { Options } from './interfaces/options';
import { Sizes } from './interfaces/sizes';

export function withViewport(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T & Sizes>) => (
    props: T
  ) => <WrappedComponent {...props} {...useViewport(options)} />;
}
