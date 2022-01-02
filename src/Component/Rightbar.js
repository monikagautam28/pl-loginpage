import React from "react";
import Header from "../Component/Header";
import Sidebar from "./Sidebar";
import studywithfreind from "../pages/images/studywithfreind.svg";
import premium from "../pages/images/premium.svg";
class Rightbar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
      <div className="main_layout">
        <Header />
        </div>
      <div className="outer">
        <div className="main_layout">
        
     
          <div className="section">
            <div className="left_sidebar">
              <Sidebar />
            </div>
            <div className="center_section">
            <div className="center_section--background">
  <h2>Good Morning! Monika</h2>
  <h3>Lets get your preparation started</h3>
            </div>
            <div className="center_section--premium">
            <div className="center_section--premium-inner">
            <h2>Want to achieve your dream?</h2>
            <p>PrepLadder brings you a one-stop platform to ace your preparation with proven, effective, and high quality content. So hurry up!</p>
            <button className="premium_button">View plans</button>
</div>
<div>
<img src={premium} className="premium_img"/>
</div>
            </div>
            <div className="center_section--feature">
            <div className="center_section--feature-heading">
Featured
</div>

<img src="https://image.prepladder.com/content/WhNlx0m2pYayEOIrtQza1640265714.jpg" alt="icon" className="feature_img"></img>
<h4 className="feature--heading">Subscribe to 2021 Dream Pack</h4>
            </div>
            <div className="sugessted_question">
            <div className="sugessted_question--heading">
Suggested Question
</div>
            </div>
            <div className="card">
            <div className="plain_card">
            <div className="dashboard_card">
            <img class="mb1 width-40" src="https://image.prepladder.com/content/Lh64LTEkA1hC6nPcos801636529481.png" alt="icon"/>
            <div className="dashboard_card--subheading" >
            Basic of Generic
            </div>
            <div className="dashboard_card--ques">
            21 Ques
            </div>
            </div>
         
            </div>
         
            <div className="plain_card">
            <div className="dashboard_card">
            <img className=" width-40" src="https://image.prepladder.com/content/ABJM9c2PxwCW2DGUSkmh1636529428.png" alt="icon"/>
            <div className="dashboard_card--subheading" >
            CVS Embryology
            </div>
            <div className="dashboard_card--ques">
            27 Ques
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="rightbar_width">
              <div className="rightbar_scrollbar">
                <div className="rightbar">
                  <div className="rightbar_quicklinks">Quick Links</div>
                  <div className="rightbar_block_bottom">
                    <div class=" rightbar_block_bottom-inner ">
                      <img
                        src="https://image.prepladder.com/content/KnYGsvfUE5UvtAAvG2n11636719681.png"
                        alt="icon"
                        className=" rightbar_block_bottom-inner-img "
                      />
                      Custom Module
                    </div>
                    <div class=" rightbar_block_bottom-inner ">
                      {" "}
                      <img
                        src="https://image.prepladder.com/content/dbX95LHH21MVI9uivJCn1636719293.png"
                        alt="icon"
                        className=" rightbar_block_bottom-inner-img "
                      />
                      Bookmarks
                    </div>
                    <div class=" rightbar_block_bottom-inner ">
                      {" "}
                      <img
                        src="https://image.prepladder.com/content/Kxirnn5iFwBl4uzY2E4d1636719258.png"
                        alt="icon"
                        className=" rightbar_block_bottom-inner-img "
                      />
                      Past Year Ques
                    </div>
                  </div>
                  <div className="quizdayouter">
                    <div className="quizdayouter_flex">
                      <div className="quizdayouter_left">
                        <h2>Quiz of the day</h2>
                        <p>Complete with your freinds in today quiz</p>
                        <button className="btn_dash"> Start Quiz</button>
                      </div>
                      <div className="quizdayouter_right">
                        <img src={studywithfreind} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="quizdayouter">
                    <div className="quizdayouter_flex">
                      <div className="quizdayouter_left">
                      <h2 >Learn effectively with your friends!</h2>
                      <p>Send requests to add your friends and study together. View their performance and much more.</p>
                        <button className="btn_dash"> Add Freinds</button>
                      </div>
                      <div className="quizdayouter_right">
                      <img src="https://image.prepladder.com/content/Nx7GXLXf5iuJUE1hNeBa1622535760.png" alt="" className="freind_img"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
         
        </div>
        </div>
      </>
    );
  }
}

export default Rightbar;
