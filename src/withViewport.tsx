import React from 'react';

import { useViewport } from './useViewport';

import { Options } from './interfaces/options';

export const withViewport = (options?: Options) => (
  WrappedComponent: React.ComponentType<any>
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useViewport(options)} />
);
