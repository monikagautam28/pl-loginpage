import React from "react";
import logoimg from "./images/preplogo.svg";

import facebook from "./images/facebook.svg";
import youtube from "./images/telegram.svg";
import instagram from "./images/instagram.svg";
import twitter from "./images/twitter.svg";
import googleplay from "./images/googleplay.svg";

//import Slider from "react-slick";

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
        console.warn("resp", resp);
      });
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
                        <div className="login_mobile-no">
                          <div className="login_mobile-no-left">
                            <h5>+91</h5>
                          </div>
                          <div className="login_mobile-no-right">
                            <input
                              type="text"
                              value={this.state.phone}
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
