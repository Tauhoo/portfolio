import React, { Component } from 'react';
import styled from 'styled-components'
import Home from './component/home/index'
import Profile from './component/profile/index'
import Skill from './component/skill/index'
import Contact from './component/contact/index'
import Main from './component/main/main'
import Background from './component/background'

const Body = styled.div`
  position: absolute;
  top: ${(props)=>`calc(-${props.page}*100vh)`};
  left: 0px;
  overflow: hidden;
  transition: 1.1s;
`

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isChanging: false,
      page: 0,
    }
    this.handleWheel = this.handleWheel.bind(this)
  }

  handleWheel(e){
    var delta = e.deltaY;
    if(this.state.isChanging)return;
    if(delta < 0){
      if(this.state.page <= 0)return
      this.setState({page: this.state.page-1, isChanging: true})
      console.log('up');
      setTimeout(()=>{
        this.setState({isChanging: false})
      },1000)
    }else{
      if(this.state.page >= 3)return;
      this.setState({page: this.state.page+1, isChanging: true})
      console.log('down ');
      setTimeout(()=>{
        this.setState({isChanging: false})
      },1000)
    }
  }

  render() {
    return (
        <Body className="App" onWheel={this.handleWheel} page={this.state.page}>
          <Main page={this.state.page}/>
          <Home page={this.state.page}/>
          <Profile page={this.state.page}/>
          <Skill page={this.state.page}/>
          <Contact page={this.state.page}/>
          <Background page={this.state.page}/>
        </Body>
    );
  }
}

export default App
