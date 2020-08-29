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
  const FunctionalComponent: React.FC<Props> = (props) => {
    return renderResult(props);
  };

  const FunctionalComponentHOC = withViewport<any>()(FunctionalComponent); // TODO

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

  const ClassComponentHOC = withViewport<any>()(ClassComponent); // TODO

  it("should render vw and wh values", () => {
    const { getByTestId } = render(<ClassComponentHOC />);

    expect(getByTestId("vw").innerHTML).toBe("1024");
    expect(getByTestId("vh").innerHTML).toBe("768");
  });
});
