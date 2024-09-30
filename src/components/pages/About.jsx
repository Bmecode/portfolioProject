import { about } from "../data/dummydata";
import Heading from "../common/Heading";
import { Fragment } from "react";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <Fragment key={i}>
              <div className="left">
                <img src={val.cover} alt="" data-aos="fade-down-right" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="Hakkımda" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className="primaryBtn">Download CV</button>
              </div>
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
