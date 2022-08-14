import {Link} from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--bg-component);
  color: var(--color-paragrafy-font);
  cursor: pointer;
  padding: 7px 10px;
  margin-right: 15px;
  border-radius: 4px;
`
export const ButtonLink = styled(Link)`
  background-color: var(--bg-component);
  color: var(--color-paragrafy-font);
  cursor: pointer;
  padding: 7px 10px;
  margin-right: 15px;
  border-radius: 4px;
`