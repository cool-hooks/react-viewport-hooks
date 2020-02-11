import React from 'react';

import { useViewport } from './useViewport';

export const withViewport = (WrappedComponent: React.ComponentClass) => (
  props: React.ComponentProps<any>
) => <WrappedComponent {...props} {...useViewport()} />;
