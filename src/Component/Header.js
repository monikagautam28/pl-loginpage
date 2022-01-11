import React from "react";
import Headerleftlogo from "../pages/images/dashlogo.svg";
import Downarrow from "../pages/images/downarrowicon.svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      logout: true
    }
  }
  signout() {
    localStorage.removeItem('login')
    
  }
  componentDidMount(){
    if(!localStorage.getItem('login')){
      console.log(this.props)
    }
  }
  render() {
    return (
      <>
        <div className="dashboard_header ">
     
        <div className="dashboard_header-container main_layout">
          <div className="dashboard_header-left">
            <div className="dashboard_header-left-1">
              <img src={Headerleftlogo} className="header_logo" />
            </div>
            <div className="dashboard_header-left-2">
              <span>
                Medical PG <img src={Downarrow}  className="downarrow"/>
              </span>
            </div>
          </div>
          <div onClick={() => this.signout()}>
          <img src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg" alt="img_tag" class=" appheader"/>
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
