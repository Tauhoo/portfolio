import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: absolute;
  top: 300vh;
  z-index: 999;
`
const Topic = styled.div`
  margin-left: ${(props)=> props.isPlay ? '13vw' : '-60vw'};
  opacity: ${(props)=> props.isPlay ? '1' : '0'};
  margin-top: 30px;
  transition: 0.6s;
`
const Text = styled.div`
  text-align: left;
  font-family: 'Ubuntu';
  font-size: 4rem;
  color: #2d3436;
  text-shadow: 0 2px 4px #57606f;
`

const DetailContainer = styled.div`
  width: 80vw;
  height: 60vh;
  margin-left: ${(props)=> props.isPlay ? '13vw' : '-60vw'};
  opacity: ${(props)=> props.isPlay ? '1' : '0'};
  transition: 0.6s;
`
const Detail = styled.span`
  word-wrap:break-word;
  text-align: center;
  font-family: 'Ubuntu';
  font-size: 2rem;
  color: #2d3436;
  text-shadow: 0 2px 4px #57606f;
`

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      isPlay: props.page === 3
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({isPlay: nextProps.page === 3})
  }

  render(){
    return (
      <Container>
        <Topic isPlay={this.state.isPlay}>
          <Text
          >Contact</Text>
        </Topic>
        <DetailContainer isPlay={this.state.isPlay}>
          <Detail>
            E-mail : tauhoo_ice@hotmail.com
          </Detail>
        </DetailContainer>
      </Container>
    )
  }
}
