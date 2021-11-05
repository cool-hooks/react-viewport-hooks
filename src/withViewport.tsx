import React from 'react';

import { useViewport } from './useViewport';

import { Options } from './interfaces/options';
import { Sizes } from './interfaces/sizes';

export function withViewport(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T & Sizes>) => (
    props: Omit<T, keyof ReturnType<typeof useViewport>>
  ) => <WrappedComponent {...props as T} {...useViewport(options)} />;
}
