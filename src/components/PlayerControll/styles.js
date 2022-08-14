import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 59px;
  background-color: var(--bg-color);
`
export const WrapperBar = styled.div`

`
export const ProgressBarTarget = styled.div`
  width: 100%;
  height: 17px;
  padding: 7px 0px;
  margin: 15px 0px;
  cursor: pointer;
`
export const ProgressBarForLoad = styled.div`
  height: 100%;
  background-color: var(--bg-component-gray);
`
export const ProgressBar = styled.div`
  width: ${props => (props.fill ? props.fill > 100 ? 100 : props.fill : 0)}%;
  height: 100%;
  background:linear-gradient(45deg, var(--bg-component) 55%, var(--bg-component-light));
`


export const StatusProgressBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items:center ;
  margin-top: 5px;
  padding: 0px 10px;
`
export const StatusTimer = styled.div`
  font-size: .9rem;
  white-space: nowrap;
  margin-right: 30px;
  
`
export const TimerFull = styled.span`
  color: #777;

`
export const TimerCurrent = styled.span`
  &::after{
    content: ' | ';
  }
  color: #777;
`
export const DescrictionMusic = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
`
export const TitleMusic = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  letter-spacing: .09rem;
  flex: 1;
  max-width: 432px;
  overflow-y: hidden;
  /* background:radial-gradient(80% transparent, #333 ) ; */
  & > span{
    margin-left: 400px;
  }
`
export const AuthorMusic = styled.div`
  align-self: flex-end;
  color: #777;
  
`
export const Controller = styled.div`
  display: flex;
  justify-content: center;
`
export const Hero = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin: 20px 0px;
  padding: 5px 10px;
  background: linear-gradient(45deg, var(--bg-component) 55%, var(--bg-component-light));
 `
