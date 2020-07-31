import React, { useState} from "react";
import "./landingPage.css";
import { Tween, Timeline } from "react-gsap";
import { Navbar, Footer } from "../../navigation/navigation";
import ScrollIntoView from "../../../router/scrollintoview/ScrollIntoView";
import Testimonial from "../../../dataservices/testimonial_controller";
import Campaign from "../../../dataservices/campaign_controller";
import Trending from "../../../dataservices/trending_controller";
import axios from "axios";

const LandingPage = () => {
  // GSAP consatants
  const FadeInLeft = ({ children }) => (
    <Tween from={{ x: -40, opacity: 0 }}>{children}</Tween>
  );

  // Subscribe-form constants
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState();
  const [success, setSuccess] = useState();
  const [statusText, setStatusText] = useState();
  const [isValid, setIsValid] = useState(true);

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const clearAlert = () => {
    setTimeout(() => {setSuccess(); setStatusText(); setEmail(""); setValid(); setIsValid(true); }, 5000); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (email === "" || !emailRegex.test(email)) {
      setIsValid(false);
      setValid("Please provide a valid email");
      return;
    }
    setIsValid(true);
    axios
      .post("https://api.fundmylaptop.com/api/users/subscribe", { email })
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
        setStatusText(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setSuccess(false);
        setStatusText(err.response.data.message);
      });
  };

  return (
    <ScrollIntoView>
      <Navbar />
      <div className="landingPage">
        <Timeline>
          <div className="jumbotron jumbotron px-0 px-md-4 mb-0 mb-md-4 landing-top">
            <div className="row mt-lg-5 px-2 px-md-5 mx-auto mt-5">
              <Tween from={{ opacity: 0, y: 30 }} duration={1.5}>
                <div className="header-text d-flex flex-column ">
                  <h1 className="mb-lg-5">Support or Start a Campaign today</h1>
                  <p className="pr-md-5">
                    Fundmylaptop is a platform where fundees can place requests
                    for help to either get funding for the purchase of a new
                    laptop or repair an existing one.
                  </p>
                </div>
              </Tween>
              <Tween from={{ opacity: 0, y: 30 }} duration={1.5}>
                <div className=" col-xl-4 my-5  pt-3 pb-5">
                  {/* here should be form */}
				  <div className="stock-hero">
				  	{/* <img src={FMLHero}/> */}
				  </div>
                </div>
              </Tween>
            </div>
          </div>
        </Timeline>
        <main>
          <Trending />
          <section className="container-fluid bg-white about-us-section my-5">
            <div className="container">
              <FadeInLeft>
                <h3 className="mb-4">About Us</h3>
              </FadeInLeft>
              <div className="  row">
                <FadeInLeft>
                  <div className="col-lg-6">
                    <img
                      className="aboutus-img img-fluid "
                      src="https://placeimg.com/500/500/people1"
                      alt="mm"
                    />
                  </div>
                </FadeInLeft>
                <div
                  className="col-lg-6 pr-4 pl-lg-5 d-flex flex-column justify-content-center">
                  <h3 className=" mb-4 mt-4 mt-md-0 mb-md-5  about-us-title">
                    We are here because of you
                  </h3>
                  <p className="aboutus-text">
                    We are a group of tech experts trying to help the younger
                    generation of tech enthusiast get into tech with the
                    limitation of gadgets and other important stuff limiting the
                    african tech community
                  </p>
                </div>
              </div>
            </div>
          </section>
          <Campaign />
          <Testimonial />
        </main>
        <div className="spacer py-md-5" />
        <Timeline>
          <div className=" container-fluid mx-0 news-letter row">
            <div className="col-md-11 news-letter-text ml-md-5  my-auto my-lg-5 px-0">
                  <h2 className="text-center text-md-left">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="mx-auto mx-md-0">
                    Stay in touch with our regular updates and tech news alert,
                    we only send newsletter weekly and we promise not to spam
                  </p>
            </div>
            <div className="col-md-8 news-letter-form ml-md-5">
              <p
                className={success === false ? "alert-danger" : "" || success === true ? "alert-success" : ""}
                id="sub-alert"
                style={{ textAlign: "center", padding: "10px" }}>
                {statusText}
              </p>
              <p
                className={isValid === false ? "alert-danger" : ""}
                style={{ textAlign: "center", padding: "10px" }}>
                {valid}
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleInput}
                  value={email}
                  isValid={isValid}
                  type="text"
                  id="subscribe-input"
                  className="mb-5 subscribe-input"
                  placeholder="Enter Email"
                />
                <button onClick={clearAlert} className="mb-5 subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Timeline>
      </div>
      <Footer />
    </ScrollIntoView>
  );
};

export default LandingPage;
