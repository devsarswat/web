import React from "react";
import "./index.css";

const Home = () => {
  return (
    <>
      <section id="header" className="bg_img">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>Welcome to My News Top Heading and Weather Info Website</h1>
                <h2 className="my-3">
                  
                  Get the latest news headlines and Stay informed with real-time weather information.
                </h2>
                <h2>
                  Thank you for choosing our website. We hope you find it
                  valuable and informative. Enjoy browsing news headlines and
                  staying updated with the weather forecast. Feel free to reach
                  out to us with any feedback or suggestions. Happy exploring!
                </h2>
                <div className="mt-3">
                  <a href="/" className="btn btn-sm btn-primary">
                    Get start your website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
