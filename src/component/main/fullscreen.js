import React, { Component } from 'react'
import styled from 'styled-components'
import fullscreen from 'fullscreen'

const Container = styled.div`
  position: fixed;
  transform: translate(-50%,-50%);
  left: 5vw;
  top: 5vw;
  height: 4vw;
  width: 4vw;
`
const Box = styled.div`
  position: fixed;
  left: ${(props)=>props.left};
  top: ${(props)=>props.top};
  transform: translate${(props)=>props.translate};
  height: ${(props)=>props.height};
  width: ${(props)=>props.width};
  background-color: white;
`

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullScreen : 'off',
    }

    if( window !== undefined && document !== undefined ){
      this.fs = fullscreen(document.getElementsByTagName('body')[0])
    }
    this.screenChange = this.screenChange.bind(this)
  }

  screenChange(){
    if(this.state.fullScreen === 'off'){
      this.fs.request()
      this.setState({fullScreen : 'on'})
    }else if(this.state.fullScreen === 'on'){
      this.fs.release()
      this.setState({fullScreen : 'off'})
    }
  }

  render(){
    return (
      <Container onClick={this.screenChange}>
        <Box
          left='0px'
          top='0px'
          translate='(+0,+0)'
          height='10%'
          width='30%'
        />
        <Box
          left='0px'
          top='0px'
          translate='(+0,+0)'
          height='30%'
          width='10%'
        />
        <Box
          left='100%'
          top='0px'
          translate='(-100%,+0)'
          height='10%'
          width='30%'
        />
        <Box
          left='100%'
          top='0px'
          translate='(-100%,+0)'
          height='30%'
          width='10%'
        />
        <Box
          left='100%'
          top='100%'
          translate='(-100%,-100%)'
          height='30%'
          width='10%'
        />
        <Box
          left='100%'
          top='100%'
          translate='(-100%,-100%)'
          height='10%'
          width='30%'
        /><Box
          left='0px'
          top='100%'
          translate='(+0,-100%)'
          height='30%'
          width='10%'
        />
        <Box
          left='0px'
          top='100%'
          translate='(+0,-100%)'
          height='10%'
          width='30%'
        />
      </Container>
    )
  }
}
