import styled from "styled-components";
import {Link} from 'react-router-dom'
export const Container = styled.header`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid  var(--bg-component-gray);
  
  flex-wrap: nowrap;
`
export const WrapperUserImage = styled.div`
  height: 40px;
  width: 40px;
  & > img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  } 
`
export const BarRight = styled.div`
  display: flex;
  align-items: center;
`
export const IconItemLink = styled(Link)`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  text-decoration: none;
`
