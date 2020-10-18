import React, { Component } from "react";
import { render } from "@testing-library/react";

import { withViewport } from "../src";

interface Props {
  readonly vw: number;
  readonly vh: number;
}

const renderResult = ({ vw, vh }: Props) => (
  <>
    <p data-testid="vw">{vw}</p>
    <p data-testid="vh">{vh}</p>
  </>
);

describe("withViewport usage with functional component", () => {
  const FunctionalComponent = (props: Props) => {
    return renderResult(props);
  };

  const FunctionalComponentHOC = withViewport()(FunctionalComponent);

  it("should render vw and wh values", () => {
    const { getByTestId } = render(<FunctionalComponentHOC />);

    expect(getByTestId("vw").innerHTML).toBe("1024");
    expect(getByTestId("vh").innerHTML).toBe("768");
  });
});

describe("withViewport usage with class component", () => {
  class ClassComponent extends Component<Props> {
    render() {
      return renderResult(this.props);
    }
  }

  const ClassComponentHOC = withViewport()(ClassComponent);

  it("should render vw and wh values", () => {
    const { getByTestId } = render(<ClassComponentHOC />);

    expect(getByTestId("vw").innerHTML).toBe("1024");
    expect(getByTestId("vh").innerHTML).toBe("768");
  });
});
