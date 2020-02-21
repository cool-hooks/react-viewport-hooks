import React from 'react';

import { useViewport } from './useViewport';

import { Options } from './interfaces/options';

export const withViewport = (
  WrappedComponent: React.ComponentType<any>,
  options?: Options
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useViewport(options)} />
);
