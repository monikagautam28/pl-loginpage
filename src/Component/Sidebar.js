import React from "react";
import Header from "../Component/Header";
import home from "../pages/images/home.svg";
import youtube from "../pages/images/youtubes.svg";
import qbank from "../pages/images/qbank.svg";
import test from "../pages/images/tests.svg";
import statistic from "../pages/images/statistics.svg";
import bookmark from "../pages/images/bookmark.svg"; 
import askdoubt from "../pages/images/askdoubt.svg"; 
class Sidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div>
          <div>
         
          </div>

          <div className="sidenavbar">
            <div className="sidenavbar_bottom">
              <div>
                <nav>
                  <div className="sidenavbar_list">
                    <ul>
                      <li>
                        <a href="/" className="navlink color">
                          <img src={home} className="nav_img" /> Home
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidenavbar_list">
                    <h4 class="heading">Study Module</h4>
                    <ul>
                      <li>
                        <a href="/" className="navlink">
                          <img src={youtube} className="nav_img" /> Videos
                        </a>
                      </li>
                      <li>
                        <a href="/" className="navlink">
                          <img src={qbank} className="nav_img" /> QBanks
                        </a>
                      </li>
                      <li>
                        <a href="/" className="navlink">
                          <img src={test} className="nav_img" /> Tests
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidenavbar_list">
                    <h4 class="heading">Me</h4>
                    <ul>
                      <li>
                        <a href="/" className="navlink">
                          <img src={statistic} className="nav_img" /> Statistics
                        </a>
                      </li>
                      <li>
                        <a href="/" className="navlink">
                          <img src={bookmark} className="nav_img" /> Bookmarks
                        </a>
                      </li>
                      <li>
                        <a href="/" className="navlink">
                          <img src={askdoubt} className="nav_img" /> Ask Doubts
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
