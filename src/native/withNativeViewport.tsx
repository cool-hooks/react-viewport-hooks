import React from 'react';

import { useNativeViewport } from './useNativeViewport';

import { Options } from '../interfaces/options';

export const withNativeViewport = (
  WrappedComponent: React.ComponentType<any>,
  options?: Options
) => (props: React.ComponentProps<any>) => (
  <WrappedComponent {...props} {...useNativeViewport(options)} />
);
