import React, { Component } from 'react'
import styled from 'styled-components'
import FullScreen from './fullscreen'
const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
`
const Dot = styled.div`
  margin-top: 10vh;
  transform: translateY(-50%);
  ${(props)=>{
    if(props.isPlay)return `height: 2vw;  width: 2vw; margin-left: 0px;`
    return `height: 1vw;  width: 1vw; margin-left: 0.5vw;`
  }}
  background-color: #ffffff;
  border-radius: 50%;
  transition: 0.6s;
`

const Dots = styled.div`
  transform: translate(-50%,-50%);
  top: 50vh;
  left: 5vw;
  position: fixed;
  padding-bottom: 10vh;
`
const Scroll = styled.div`
  transform: translate(-50%,-59%) rotate(90deg);
  text-align: right;
  font-family: 'Ubuntu';
  font-size: 3vh;
  color: white;
  left: 95vw;
  top: 85vh;
  position: fixed;
  opacity: ${(props)=> props.isPlay ? 1 : 0};
  top: ${(props)=> props.isPlay ? '85vh' : '120%'};
  transition: 0.6s;
  text-shadow: 0 2px 4px #57606f;
`

const Line =  styled.div`
  width: 0.5vh;
  height: 50vh;
  background-color: white;
  top: 70vh;
  left: 95vw;
  position: fixed;
  transform: translate(-50%,-100%);
  opacity: ${(props)=> props.isPlay ? 1 : 0};
  top: ${(props)=> props.isPlay ? '70vh' : '100%'};
  transition: 0.6s;
`

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlay : this.props.page === 0,
      page: this.props.page,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      isPlay: nextProps.page === 0,
      page: nextProps.page,
    })
  }

  render(){
    return (
      <Container>
        <FullScreen isPlay = {this.state.isPlay} />
        <Dots isPlay = {this.state.isPlay}>
          <Dot isPlay={this.state.page === 0} top='20vh'/>
          <Dot isPlay={this.state.page === 1} top='30vh'/>
          <Dot isPlay={this.state.page === 2} top='40vh'/>
          <Dot isPlay={this.state.page === 3} top='50vh'/>
        </Dots>
        <Scroll isPlay = {this.state.isPlay}>SCROLLDOWN</Scroll>
        <Line isPlay = {this.state.isPlay}/>
      </Container>
    )
  }
}
