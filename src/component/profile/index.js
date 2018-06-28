import React, { Component } from 'react'
import styled from 'styled-components'


const Container = styled.div`
  position: absolute;
  top: 100vh;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 999;
`

const Topic = styled.div`
  margin-top: 30px;
  margin-left: ${(props)=>props.isPlay ? '13vw' : '-55vw'};
  opacity:  ${(props)=>props.isPlay ? '1' : '0'};
  transition: 0.6s;
  text-shadow: 0 2px 4px #57606f;
`
const Name = styled.span`
  text-align: left;
  font-family: 'Ubuntu';
  font-size: 4rem;
  color: #2d3436;
`

const DetailContainer = styled.div`
  width: 50vw;
  height: 60vh;
  margin-top: 10px;
  margin-left: ${(props)=>props.isPlay ? '13vw' : '-55vw'};
  opacity:  ${(props)=>props.isPlay ? '1' : '0'};
  transition: 0.6s;
  @media (max-width: 600px) {
    width: 80vw;
  }
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
      isPlay: props.page === 1,
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({isPlay: nextProps.page === 1})
  }

  render(){
    return (
      <Container>
        <Topic isPlay={this.state.isPlay}>
          <Name>Profile</Name>
        </Topic>
        <DetailContainer isPlay={this.state.isPlay}>
          <Detail>
            Hello, I'm wachirawit wacharak. I'm
            just a inexperienced stack developer
            from thailand. I love to make the
            beautiful website and hope that I
            will have chance to make a big cool
            website in some day.
          </Detail>
        </DetailContainer>
      </Container>
    )
  }
}
