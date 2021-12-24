import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withViewport } from '../src';

interface Sizes {
  readonly vw: number;
  readonly vh: number;
}

const checkResult = ({ vw, vh }: Sizes) => {
  expect(vw).toBe(1024);
  expect(vh).toBe(768);

  return null;
};

describe('withViewport usage with functional component', () => {
  const FunctionalComponent = (props: Sizes) => {
    return checkResult(props);
  };

  const FunctionalComponentHOC = withViewport()(FunctionalComponent);

  it('should render vw and wh values', () => {
    render(<FunctionalComponentHOC />);
  });
});

describe('withViewport usage with class component', () => {
  class ClassComponent extends Component<Sizes> {
    render() {
      return checkResult(this.props);
    }
  }

  const ClassComponentHOC = withViewport({
    defaultVw: 320,
    defaultVh: 560,
  })(ClassComponent);

  it('should render vw and wh values', () => {
    render(<ClassComponentHOC />);
  });
});
