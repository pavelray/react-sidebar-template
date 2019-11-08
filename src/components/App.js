import React from 'react';
import Toolbar from './Layout/Toolbar/Toolbar';
import SideBar from './Layout/Sidebar/Sidebar';
import Backdrop from './Layout/Backdrop/Backdrop';

class App extends React.Component{
  
  state ={
    sideBarOpen : false
  }
  
  sidebarToggleClickHandler = ()=>{
    this.setState((prevState)=>{
      return {sideBarOpen: !prevState.sideBarOpen}
    });
  }

  backdropClickHandler =()=>{
    this.setState({sideBarOpen:false})
  }

  render(){
    let backdrop;

    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <SideBar show={this.state.sideBarOpen} />
        <div className="spacer"></div>
        <Toolbar sidebarToggleClickHandler={this.sidebarToggleClickHandler} />
        {backdrop}
      </div>
    )
  }
     
}

export default App;