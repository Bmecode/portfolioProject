import { useState } from "react";
import { portfolio } from "../data/dummydata";
import { Visibility } from "@mui/icons-material";
import Heading from "../common/Heading";

const Portfolio = () => {
  const allCategory = [
    "all",
    ...new Set(portfolio.map((item) => item.category)),
  ];
  const [list, setList] = useState(portfolio);
  const [category, setCategory] = useState(allCategory);
  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category);
    setList(newItems);
    if (category === "all") {
      setList(portfolio);
    }
  };
  console.log(setCategory);

  return (
    <>
      <article>
        <div className="container">
          <Heading title="Portfolyo" />
          <div className="catButton">
            {category.map((category, i) => (
              <button
                key={i}
                className="primaryBtn"
                onClick={() => filterItems(category)}
                data-aos="zoom-out-down"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="content grid3">
            {list.map((items, i) => (
              <div className="box" key={i} data-aos="fade-up">
                <div className="img">
                  <img src={items.cover} alt="" />
                </div>
                <div className="overlay">
                  <h3>{items.title}</h3>
                  <span>{items.name}</span>
                  <Visibility />
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
