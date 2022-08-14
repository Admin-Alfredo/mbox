import {Link} from "react-router-dom"
import styled from "styled-components";
// import { Button, ButtonLink } from "../Forms";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
`
export const WrapperListMusicV = styled.div`
  display: flex;
  flex-direction: column;

`
export const WrapperImage = styled.div`
  width: 175px;
  height: 100px;
  margin-right: 25px;
  & > img{
    width: 100%;
    height: 100%;
  }
`


export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Controls = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const Descritions = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonFav = styled.button`
  background-color: #000;
  color: var(--color-title-font);
  padding: 8px 10px;
`
export const TitleMusic = styled.span`
  font-size: 1.2rem;
  font-weight:400;

`
export const AuthorMussic = styled.span`
  font-size: 1.2rem;
  font-weight:400;
  font-size: 1rem;
  color:var(--color-paragrafy-font);
  margin: 5px 0px;
`
