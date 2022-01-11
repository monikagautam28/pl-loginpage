import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import  PureComponent from './PureComponent';
import  SimpleComponent from './SimpleComponent';

class Profile extends React.Component {
  constructor() {
    super();

    this.state= {
    data:{
      name:0,
      number:9896755889
    }
  }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({data:{name:this.state.data.name+1,number:8307347557}})
    }, 2000);
  }

  render() {
    console.log("*************Main Component***********");
    return (
      <>
      <React.Fragment>
        <PureComponent  value ={this.state.data.name}/>
      </React.Fragment>
      <React.Fragment>
        <SimpleComponent value ={this.state.data.name}/>
      </React.Fragment>
        <div className="main_layout">
          <Header />
        </div>
        <div className="main_layout">
          <div className="common_page_layout--align">
            <div>
              <Sidebar />
            </div>

            <div className="common_page_layout">
              <div className="profile--align">
                <div>
                  <img
                    className="profile--img"
                    src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg"
                    alt="profile-img"
                  />
                </div>
                <div className="align_item">
                  <div class=" profile_userName">monika</div>
                  <div class=" profile_userPhn">8307347557</div>
                </div>
              </div>
              <div>
                <label for="profilechoose" class="btn btn-border">
                  Edit Profile Picture
                </label>
              </div>
            
            </div>
            <div className="">
               aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
