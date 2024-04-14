import React, { useEffect, useState } from "react";
import "./Portfolio.scss";
import {
  contentPortfolio,
  designPortfolio,
  featuredPortfolio,
  mobilePortfolio,
  portfolioListItems,
  webPortfolio,
} from "../../data";
import PortfolioList from "./PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState(featuredPortfolio);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {portfolioListItems.map((each) => {
          return (
            <PortfolioList
              title={each.title}
              active={selected === each.id}
              setSelected={setSelected}
              id={each.id}
            ></PortfolioList>
          );
        })}
      </ul>
      <div className="container">
        {data.map((obj) => (
          <div key={obj.id} className="item">
            <img src={obj.img} alt="" />
            <h3>{obj.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
