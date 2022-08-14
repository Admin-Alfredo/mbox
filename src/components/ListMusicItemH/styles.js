import styled from "styled-components";

export const Container = styled.div`
  width: 175px;
  height: 200px;
  display: inline-block;
  /* border: 2px solid red; */
  margin-right: 10px;
  overflow: hidden;
`
export const WrapperImage = styled.div`
  width: 100%;
  height: 75%;
  & > img{
    width: 100%;
    height: 100%;
  }
`
export const Descritions = styled.div`
  padding: 4px 5px;
`
export const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 100;
`
export const TimeTemp = styled.span`
  font-size: .8rem;
  font-weight: 100;
`
export const WrapperListMusicH = styled.div`
  width: 100%;
  overflow-x: scroll;
   margin-bottom: 35px;
  &::-webkit-scrollbar-thumb{
    background-color:red ;
  }
  &::-webkit-scrollbar{
    width: 6px;
  height: 0;
  }
`
export const ListMusicH = styled.div`
  width: 99999px;
  margin-top: 15px;
`