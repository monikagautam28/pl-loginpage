import React from "react";
import Header from "../Component/Header";
import Sidebar from "./Sidebar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "react-slick/lib/slider";
class Rightbar extends React.Component {
  constructor() {
    super();

    this.state = {
      dataTitles: [],
      dataValues: [],
      auth:""
    };
  }

  dashboradData() {
    let url = "https://web.prepladder.com/v2/dashboard/getDashboard";
    let {auth}= this.state;
    console.log(this.state.auth);
    let data = {
      apiKey: "prpldr_1629744345:6123ecd96c1bd:1175647",
appName: "prepladder",
courseID: 21,
email: "paras.negi@prepladder.com",
platform: "web",
token: "&h5385495597/I8580185765}C2556631501",
version: 69
      // apiKey: auth.apiKey,
      // appName: auth.appName,
      // courseID: auth.courseID,
      // email: auth.email,
      // platform: "web",
      // token: auth.AUTH_TOKEN,
      // version: 69,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        if (resp.status == true) {
          this.setState({
            dataTitles: resp.dashboardTitle,
            dataValues: resp.dashboardValues,
          });
        }
      });
    });
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem('login'));
    //console.log(data)
    this.setState({auth:data},()=>{
    this.dashboradData();

    });

  }

  render() {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      swipeToSlide: true
      //  nextArrow: true,
      // prevArrow:true
    };

    return (
      <>
        <div className="header_sticky">
          <Header />
        </div>
        <div className="main_layout">
          <div className="left_sidebar ">
            <Sidebar />
          </div>
          <div className="center_section ">
            <div className="center_section--width">
              <div className="center_section--background">
                <h2>Good Morning! Monika</h2>
                <h3>Lets get your preparation started</h3>
              </div>
            </div>
            
            <div>
              <Slider {...settings}>
                {this.state.dataTitles &&
                  this.state.dataTitles.map((item) => {
                   // console.log(item);
                    if (item.tableCell === "featuredCell") {
                      return (
                        this.state.dataValues &&
                        this.state.dataValues.map((e) => {
                          if (item.id === e.titleID) {
                            return (
                              <div>
                                <h2 className="featured_heading">
                                  {item.name}
                                </h2>

                                <img
                                  src={e.icon}
                                  className="featuredCell_img"
                                ></img>
                                <p className="featured_para">{e.saleText}</p>
                              </div>
                            );
                          }
                        })
                      );
                    }
                  })}
              </Slider>
            </div>

         
            {this.state.dataTitles &&
                  this.state.dataTitles.map((e) => {
                    if (e.tableCell == "qodCell") {
                      return (
                        this.state.dataValues &&
                        this.state.dataValues.map((it) => {
                          if (e.id == it.titleID) {
                      
                          
                           return (
                             <div className="question_of_the_day">
                             <div className="question_of_the_day-prep">
                             <div className="question_of_the_day-main">
                             <div className="question_of_the_day-module-top">
                             <div className="qod-head">
                             <div className="qod-head-container">
                             <div className="qod-head-container-pattern">
                          <strong>Question of the day</strong>
                     


                          </div>

                          </div>

                          </div>
                         
                

                          </div>
             
                          </div>
                    

                          <div className="qod-container-inner">
                <h2>ajxbh</h2>
                          </div>
                          </div>

                             </div>
                           )
                          }
                        })
                      )
                    }
                  })
            }

         

            <div className="outer_suggestion-box">
              <h2>Suggested Questions</h2>
              <div className="suggested_question">
                {this.state.dataTitles &&
                  this.state.dataTitles.map((e) => {
                    if (e.tableCell == "mcqCell") {
                      return (
                        this.state.dataValues &&
                        this.state.dataValues.map((it) => {
                          if (e.id == it.titleID) {
                            return (
                              <div className="suggested_question--card">
                                <img src={it.icon}></img>
                                <div className="suggested_question--card-heading">
                                  {it.name}
                                </div>
                                <div className="suggested_question--card-count">
                                  {it.saleText}
                                </div>
                              </div>
                            );
                          }
                        })
                      );
                    }
                  })}
              </div>
            </div>
            
            {this.state.dataTitles &&
                  this.state.dataTitles.map((e) => {
                    if (e.tableCell == "progressStreakCell") {
                      return (
                        this.state.dataValues &&
                        this.state.dataValues.map((it) => {
                          if (e.id == it.titleID) {
                            it.name.split('.::.')
                            return (
            <div className="outer_progress-box">
              <h2>Stats Overview</h2>
              <div className="progress_outer">
         
                <div className="progress_streak">
                  <div className="progress_streak-left">
                  
                    <div class="statsList-content">
                      <ul>
                        <li>
                          <div class="statsList-value">{it.name.split('.::.')[0]}</div>
                          <div class="statsList-title">{it.name.split('.::.')[1]}</div>
                        </li>
                        <li>
                          <div class="statsList-value">{it.name.split('.::.')[2]}</div>
                          <div class="statsList-title">{it.name.split('.::.')[3]}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="k">
                    <div class="stats-progressbar">
                      <div class="stats-progressbar_percent">
                        <svg
                          viewBox="0 0 100 100"
                          data-test-id="CircularProgressbar"
                        >
                          <path
                            d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                            stroke-width="9"
                            fill-opacity="0"
                            stroke="rgb(238, 238, 238)"
                            stroke-dasharray="330px, 330px"
                            stroke-dashoffset="100"
                          ></path>
                          <path
                            d=" M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
                            stroke-width="9"
                            fill-opacity="0"
                            stroke="#2D81F7"
                            stroke-dasharray="330px, 330px"
                            stroke-dashoffset="330"
                          ></path>
                        </svg>
                        <div class="num">
                          <strong>{it.icon.split('.::.')[0]}</strong>
                          <br /> {it.icon.split('.::.')[2]}
                        </div>
                      </div>
                      <div class="statsList-progressBar-title">
                      {it.icon.split('.::.')[3]}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="streaksSec mt-24">
                <ul class="flex p-l">
                  <li>
                    <h3> {it.saleText.split('.::.')[0]}</h3>
                    <div class="streaksSec-value color-blue">{it.saleText.split('.::.')[1]}</div>
                  </li>
                  <li>
                    <h3>{it.saleText.split('.::.')[2]}</h3>
                    <div class="streaksSec-value color-yellow">{it.saleText.split('.::.')[3]}</div>
                  </li>
                </ul>
              </div>
            </div>
              </div>
              );
                          }
                        })
                      );
                    }
                  })}
           
            
            

            <div className="latest_blog">
              <div className="latest_blog-heading">Latest Blogs</div>

              <Slider {...setting}>
                {this.state.dataTitles &&
                  this.state.dataTitles.map((e) => {
                    if (e.tableCell == "eventCell") {
                      return (
                        this.state.dataValues &&
                        this.state.dataValues.map((it) => {
                          if (e.id == it.titleID) {
                            return (
                              <div className="latest_blog-slider">
                                <div className="latest_blog-slider--card">
                                  <img
                                    src={it.icon}
                                    className="latest_blog-img"
                                  ></img>
                                </div>
                              </div>
                            );
                          }
                        })
                      );
                    }
                  })}
              </Slider>
            </div>
          </div>

          <div className="rightbar_outer">
            <div className="rightbar">
              <div>
                <h2 className="quicklinks_heading">Quick links</h2>
              </div>

              {this.state.dataTitles &&
                this.state.dataTitles.map((e) => {
                  if (e.tableCell == "topCell") {
                    return this.state.dataValues.map((item) => {
                      if (e.id === item.titleID) {
                        return (
                          <div className="itembar_box">
                            <div class=" itembar_box-inner ">
                              <img
                                src={item.icon}
                                alt="icon"
                                className="itembar_box-inner--img"
                              />
                              {item.name}
                            </div>
                          </div>
                        );
                      }
                    });
                  }
                })}
            </div>
            <div className="quizday_outer">
              {this.state.dataTitles.map((e) => {
                if (e.tableCell == "quizCell") {
                  return this.state.dataValues.map((item) => {
                    if (e.id === item.titleID) {
                      return (
                             <div className="quizday_outer--inner">
                          <div className="quizday_outer--inner-left">
                            <h2>{item.name}</h2>
                            <p>{item.saleText}</p>
                            <button>Start quiz</button>
                          </div>
                          <div className="quizday_outer--inner-right">
                            <img src={item.icon}></img>
                          </div>
                        </div>
                      );
                    }
                  });
                }
              })}
            </div>
            <div className="quizday_outer">
              {this.state.dataTitles.map((e) => {
                if (e.tableCell == "shareCell") {
                  return this.state.dataValues.map((item) => {
                    if (e.id === item.titleID) {
                      return (
                        <div className="quizday_outer--inner">
                          <div className="quizday_outer--inner-left">
                            <h2>{item.name}</h2>
                            <p>{item.saleText}</p>
                            <button>Start quiz</button>
                          </div>
                          <div className="quizday_outer--inner-right">
                            <img src={item.icon}></img>
                          </div>
                        </div>
                      );
                    }
                  });
                }
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Rightbar;
