import React from 'react';

import { useViewport } from './useViewport';

import type { Options } from './types/Options';
import type { Sizes } from './types/Sizes';

export function withViewport(options?: Options) {
  return <T,>(WrappedComponent: React.ComponentType<T>) =>
    (
      props: Omit<T, keyof ReturnType<typeof useViewport>>
      // & Partial<ReturnType<typeof useViewport>>
      // TODO use custom function instead of hook
    ) =>
      <WrappedComponent {...(props as T)} {...useViewport(options)} />;
}
