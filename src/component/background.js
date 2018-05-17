import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 400vh;
  width: 100vw;
  background: white;
  overflow: hidden;
  top: 0px;
`

const IceBerge = styled.img`
  position: absolute;
  transform: translateX(-100%);
  top: 90vh;
  left: 100vw;
  height: 300vh;
`
const Top = styled.div`
  position: absolute;
  background-color: #74b9ff;
  height: 200vh;
  width: 100vw;
`
const Bottom = styled.div`
  top: 200vh;
  position: absolute;
  background: linear-gradient(to bottom, #40739e, #192a56);
  height: 200vh;
  width: 100vw;
  opacity: 0.5;
`
const BottomFilter = styled.div`
  top: 200vh;
  position: absolute;
  background: linear-gradient(to bottom, #40739e, #192a56);
  height: 200vh;
  width: 100vw;
  opacity: 0.5;
`
export default class extends Component {
  render(){
    return (
      <Container>
        <Top/>
        <Bottom/>
        <IceBerge src='http://localhost:8888/main/iceberge.svg'/>
        <BottomFilter/>
      </Container>
    )
  }
}
