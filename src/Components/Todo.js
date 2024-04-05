import Button from "@atlaskit/button";
import React from "react";
import styled from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const Buttonstyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  .check-icon {
    display: none;
  }

  &:hover {
    .check-icon {
      display: inline-block;
      background-color: blue;
    }
  }
`;

export default function Todo({ todo }) {
  return (
    <Buttonstyled
      shouldFitContainer
      iconAfter={
        <span className="check-icon">
          <CheckIcon primaryColor="green" />
        </span>
      }
    >
      {todo.name}
    </Buttonstyled>
  );
}
