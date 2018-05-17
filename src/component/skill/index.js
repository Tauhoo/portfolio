import React, { Component } from 'react'
import styled from 'styled-components'
import SkillBar from './skillBar.js'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  top: 200vh;
  z-index: 999;
`
const Topic = styled.div`
  transform: translate(-50%,-50%);
  margin-left: ${(props)=>props.isPlay ? '25vw' : '-50vw'};
  margin-top: 15vh;
  transition: 0.6s;
`
const Text = styled.div`
  text-align: center;
  font-family: 'Ubuntu';
  font-size: 8vw;
  color: #2d3436;
  text-shadow: 0 2px 4px #57606f;
`
const SkillContainer = styled.div`
  margin-left: 18vw;
  transition: 0.6s;
  width:  60vw;
`

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlay: props.page === 2,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({isPlay: nextProps.page === 2})
  }

  render(){
    return (
      <Container>
        <Topic isPlay={this.state.isPlay}>
          <Text>Skill</Text>
        </Topic>
        <SkillContainer isPlay={this.state.isPlay}>
          <SkillBar
            name='Javascript'
            percent='70%'
            isPlay={this.state.isPlay}
            logo='http://localhost:8888/skill/javascript.png'
          />
          <SkillBar
            name='CSS'
            percent='60%'
            isPlay={this.state.isPlay}
            logo='http://localhost:8888/skill/css.png'
          />
          <SkillBar
            name='React'
            percent='50%'
            isPlay={this.state.isPlay}
            logo='http://localhost:8888/skill/react.png'
          />
          <SkillBar
            name='Node.js'
            percent='60%'
            isPlay={this.state.isPlay}
            logo='http://localhost:8888/skill/nodejs.png'
          />
          <SkillBar
            name='Javascript'
            percent='60%'
            isPlay={this.state.isPlay}
            logo='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'
          />
          <SkillBar
            name='Javascript'
            percent='60%'
            isPlay={this.state.isPlay}
            logo='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png'
          />
        </SkillContainer>
      </Container>
    )
  }
}
