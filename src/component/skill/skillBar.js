import React,{ Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex;
  margin: 1vw;
`

const Img = styled.div`
  background-image: url('${(props) => props.src}');
  background-size: cover;
  height: 6vw;
  width: 6vw;
  box-shadow: 0 2px 4px #57606f;
  background-color: white;
  border-radius: 1vw;
`

const Detail = styled.div`
  margin-top: 0.3vw;
  margin-left: 2vw;
`
const PercentBar = styled.div`
  width: 20vw;
  height: 1vw;
  border-radius: 0.5vw;
  background-color: #ffffff;
  margin-top: 0.5vw;
  overflow: hidden;
  box-shadow: 0 2px 4px #57606f;
`
const Percent = styled.div`
  width: ${(props)=>(props.isPlay) ? props.percent : '0px'};
  height: 100%;
  border-radius: 0px 0.5vw 0.5vw 0px;
  background-color: #2ed573;
  transition: 1s;
`

const Name = styled.span`
  font-family: 'Ubuntu';
  font-size: 3vw;
  color: #2d3436;
  margin-top: 1vw;
  text-shadow: 0 2px 4px #57606f;
`

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlay: props.isPlay,
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({isPlay: nextProps.isPlay})
  }
  render(){
    return (
      <Container>
        <Img src={this.props.logo}/>
        <Detail>
          <Name>{this.props.name}</Name>
          <PercentBar>
            <Percent percent={this.props.percent} isPlay={this.state.isPlay}/>
          </PercentBar>
        </Detail>
      </Container>
    )
  }
}
