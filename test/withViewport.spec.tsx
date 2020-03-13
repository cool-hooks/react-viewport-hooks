import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { withViewport } from '../src';

interface Props {
  vw: number;
  vh: number;
}

describe('withViewport usage with functional component', () => {
  const FunctionalComponent = ({ vw, vh }: Props) => {
    return (
      <>
        <p>{vw}</p>
        <p>{vh}</p>
      </>
    );
  };

  const FunctionalComponentHOC = withViewport(FunctionalComponent);

  it('should render vw and wh values', () => {
    const { container } = render(<FunctionalComponentHOC />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        1024
      </p>
    `);

    expect(container.lastChild).toMatchInlineSnapshot(`
      <p>
        768
      </p>
    `);
  });
});

describe('withViewport usage with class component', () => {
  class ClassComponent extends Component<Props> {
    render() {
      const { vw, vh } = this.props;

      return (
        <>
          <p>{vw}</p>
          <p>{vh}</p>
        </>
      );
    }
  }

  const ClassComponentHOC = withViewport(ClassComponent);

  it('should render vw and wh values', () => {
    const { container } = render(<ClassComponentHOC />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p>
        1024
      </p>
    `);

    expect(container.lastChild).toMatchInlineSnapshot(`
      <p>
        768
      </p>
    `);
  });
});
