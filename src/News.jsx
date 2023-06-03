import React, { useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Newsitems from "./Newsitems";

const News = () => {
  const [data, setData] = useState([]);

  const getNews = (props) => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=6a3efe4b74b3a53b7bef40f9b1888517"
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
        <button className="btn btn-primary" onClick={getNews}>
          Fetch News
        </button>
          <h2>News Feed Top Headlines</h2>
          <div className="row">
            {data.map((val, index) => (
              <div className="col-md-3" key={index}>
                <Newsitems title={val.title} imageurl={val.image} url={val.url}/>
              </div>
            ))}
          </div>
      
    </>
  );
};

export default News;
