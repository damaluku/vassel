const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};

  ${(props) =>
    props.secondary &&
    css`
      background: green;
      color: white;
      border: red solid 1px;
    `};
`;
