import React from "react";
import logoimg from "./images/preplogo.svg";

import facebook from "./images/facebook.svg";
import youtube from "./images/telegram.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import googleplay from "./images/googleplay.svg";

import Slider from "react-slick";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      platform: "android",
      appName: "prepladder",
      version: "70",
      send_otp_on_whatsapp: "0",
      country_code: "+91",
      otp: "",
      session_id: "",
    };
  }

  submit() {
    let url = "https://web.prepladder.com/v2/sendOtp";
    let data = this.state;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp)
        if (resp.message == "OTP sent successfully") {
          sessionStorage.setItem('session_id', true)
          this.setState({ session_id: resp.data.session_id });
        }
      });
    });
  }
  verifyotp(mysessionid) {
    let url = "https://web.prepladder.com/v2/verifyOtp";
    let data = {
      appName: "prepladder",
      platform: "android",
      version: "70",
      otp: this.state.otp,
      session_id: mysessionid,
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
        console.log(resp)
        if (resp.status == true) {         
          localStorage.setItem('login', JSON.stringify(resp.data[0]))
         window.location.href = "/rightbar";
          sessionStorage.removeItem('session_id')
        }
      });
    });
  }
  componentDidMount() {
    if(localStorage.getItem('login')){
      window.location.href = "/rightbar";
    }
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let check_id;
    if(sessionStorage.getItem('session_id')){
      check_id = sessionStorage.getItem('session_id')
    }
    return (
      <>
        <div className="container">
          <div className="header">
            <div className="header-left">
              <img src={logoimg} className="header_logo" />
            </div>
            <div className="header-right">
              <div className="header-right_follow">
                <span>Follow us on</span>
              </div>
              <ul className="header-right_list">
                <li>
                  <a>
                    {" "}
                    <img src={facebook} />
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <img src={youtube} />
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <img src={instagram} />
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <img src={twitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="login_main-container">
            <div className="login_main-container-left">
              <Slider {...settings}>
                <div>
                  <img
                    className="slider_image"
                    width="375"
                    height="409"
                    src="https://image.prepladder.com/content/Login-feature-1.svg"
                    alt="carousel"
                  />
                </div>
              </Slider>
            </div>
            <div className="login_right">
              <div className="login_right-outer">
                <form>
                  <div>
                    <div className="login_section">
                      <h4>Let’s get started</h4>
                      <div className="login_section-para">
                        <p>
                          Enter your mobile number to Sign up/Sign in to your
                          PrepLadder account
                        </p>
                      </div>
                      <div>
                      {
                        !check_id ?  <>
                        <div className="login_mobile-no">
                          <div className="login_mobile-no-left">
                            <h5>+91</h5>
                          </div>
                          <div className="login_mobile-no-right">
                            <input
                              type="text"
                              maxLength="10"
                              value={this.state.phone.replace(/[^0-9.]/g, "")}
                              name="phone"
                              onChange={(data) => {
                                this.setState({ phone: data.target.value });
                              }}
                              placeholder="Enter phone number"
                            ></input>
                          </div>
                        </div>
                        <div className="login_button">
                          <button
                            type="button"
                            onClick={() => {
                              this.submit();
                            }}
                          >
                            Continue
                          </button>
                        </div>
                       </> : <>
                        <div className="login_mobile-no">
                          
                          <div className="login_mobile-no-right">
                            <input
                              type="text"
                              maxLength="6"
                              value={this.state.otp.replace(/[^0-9.]/g, "")}
                              name="otp"
                              onChange={(data) => {
                                this.setState({ otp: data.target.value });
                              }}
                              placeholder="Enter otp for verification"
                            ></input>
                          </div>
                        </div>
                        <div className="login_button"> 
                        <div className="margin_top">
                          <button
                            type="button"
                            onClick={() => {
                              this.verifyotp(this.state.session_id);
                            }}
                          >
                            verify otp
                          </button>
                        </div>
                        </div>
                        </>
                      }
                     
                    
                        <div className="login_form-para">
                          <p>
                            By signing up, you agree to{" "}
                            <span>Terms & Conditions</span> and{" "}
                            <span>Privacy Policy</span> of PrepLadder
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="login_footer">
            <div className="login_footer-left">
              <h4>Experience exclusive content on the app</h4>
            </div>
            <div className="login_footer-right">
              <img src={googleplay} className="login_footer-right-img" />
              <img
                src="https://image.prepladder.com/content/J43trce1ZMqvIfqRe2zA1638965764.svg"
                className="login_footer-right-img"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
