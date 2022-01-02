import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Profile extends React.Component{
    constructor(){
        super()
    }



    render()
    {
        return(
            <>
            <div className="main_layout">
            <Header/>
            </div>
            <div className="main_layout">
            <div className="common_page_layout--flex">
            <div>
            <Sidebar/>
            </div>
            <section>
                <div className="common_page_layout">
                <div className="common_page_layout--inner">
                <div className="profile_space">
                <div>
                <div className="common_page_layout--left">
                <img className =" common_page_layout--image" src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg" alt="profile-img"/></div>
                <div class=""><div class=" profile_username">monika</div><div class=" profile_phoneno">8307347557</div></div>
                </div>
                <div>
              
                <label for="profilechoose" class="btn btn-border">Edit profile picture</label>
                </div>
                </div>
                </div>

                </div>
               
            </section>
            </div>
            </div>

            </>
        )
    }
}

export default Profile;
