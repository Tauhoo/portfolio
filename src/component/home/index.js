import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 999;
`
const Portfolio = styled.div`
  transform: translate(-100%,-50%);
  text-align: right;
  font-family: 'Ubuntu';
  font-size: 4vw;
  color: white;
  left: 95vw;
  top: 5vw;
  position: absolute;
  opacity: ${(props)=> props.isPlay ? 1 : 0};
  left: ${(props)=> props.isPlay ? '95vw' : '-100%'};
  transition: 0.8s;
  text-shadow: 0 2px 4px #57606f;
`
const  Clound = styled.img`
  top: ${(props)=>props.top};
  left: ${(props)=>props.left};
  opacity: ${(props)=>props.opacity};
  position: absolute;
  height: calc(30vw*${(props)=>props.scale});
  width: calc(40vw*${(props)=>props.scale});
`
const Topic = styled.div`
  transform: translate(-50%,-50%);
  margin-top: 50vh;
  transition: 0.6s;
  opacity: ${(props)=> props.isPlay ? 1 : 0};
  margin-left: ${(props)=> props.isPlay ? '50vw' : '-100%'};
`
const Name = styled.div`
  text-align: center;
  font-family: 'Ubuntu';
  font-size: 8vw;
  color: white;
  transition: 0.6s;
  text-shadow: 0 2px 4px #57606f;
`
const Career = styled.div`
  text-align: right;
  font-family: 'Ubuntu';
  font-size: 2vw;
  color: white;
  transition: 0.6s;
  text-shadow: 0 2px 4px #57606f;
`

class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlay : this.props.page === 0,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({isPlay: nextProps.page === 0})
  }

  render(){
    return (
      <Container>
        <Portfolio isPlay={this.state.isPlay}>PORTFOLIO</Portfolio>
        <Clound
          src='http://localhost:8888/home/clound.svg'
          top='2vw'
          left='2vw'
          scale='0.8'
          opacity='1'
          />
        <Clound src='http://localhost:8888/home/clound.svg'
          top='20vw'
          left='80vw'
          scale='0.5'
          opacity='0.8'
          />
        <Clound src='http://localhost:8888/home/clound.svg'
          top='30vw'
          left='20vw'
          scale='0.6'
          opacity='0.5'
          />
        <Topic isPlay={this.state.isPlay}>
          <Name>WACIRAWIT</Name>
          <Name>WACHARAK</Name>
          <br/>
          <Career>full-stack developer</Career>
        </Topic>
      </Container>
    )
  }
}

export default index
