import React, { useState } from 'react'
import { Button } from '../Forms'
import { ArrowLeft, ArrowRight, Pause, Play, SkipNext, SkipPrevious } from '../IconsPlayer'
import { Text, Title } from '../Paragrafy'
import {
  Container,
  WrapperBar,
  ProgressBarTarget,
  ProgressBarForLoad,
  ProgressBar,
  StatusProgressBar,
  StatusTimer,
  DescrictionMusic,
  TimerCurrent,
  TimerFull,
  TitleMusic,
  AuthorMusic,
  Controller
} from './styles'

export default function PlayerControll() {
  const [statePlayer, setStatePlayer] = useState(false)

  return (
    <Container>
      <WrapperBar>
        <StatusProgressBar>
          <StatusTimer>
            <TimerCurrent>01:36</TimerCurrent>
            <TimerFull> 05:45</TimerFull>
          </StatusTimer>
          <DescrictionMusic>
            <TitleMusic>
              <span>She like the wind</span>
            </TitleMusic>
            <AuthorMusic>
              <span>Calum Scott</span>
            </AuthorMusic>
          </DescrictionMusic>
        </StatusProgressBar>
        <ProgressBarTarget>
          <ProgressBarForLoad>
            <ProgressBar fill={50}></ProgressBar>
          </ProgressBarForLoad>
        </ProgressBarTarget>
        <Controller>

          <SkipPrevious />
          {statePlayer ?
            <Play width={50} onClick={() => setStatePlayer(false)} /> :
            <Pause width={50} onClick={() => setStatePlayer(true)} />}
          <SkipNext />

        </Controller>
      </WrapperBar>
    </Container>

  )
}
