import { css } from "styled-components";

const selectStyles = (props: any) => css`
  outline: 3px solid ${props.theme.color.bg_lightMint2};
  border: 1px solid ${props.theme.color.bg_mint};
  background-color: ${props.theme.color.bg_lightMint};
`;

const unSelectStyles = (props: any) => css`
  border: 1px solid ${props.theme.color.border_gray};
  background-color: ${props.theme.color.bg_lightGray};
`;

export { selectStyles, unSelectStyles };
