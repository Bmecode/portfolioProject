import { FormatQuote } from "@mui/icons-material";
import { testimonials } from "../data/dummydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="testimonials hero">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((val, i) => (
              <div className="box" key={i}>
                <i data-aos="zoom-out-up">
                  <FormatQuote />
                </i>
                <p data-aos="zoom-out-down">{val.text}</p>
                <div className="img">
                  <img src={val.image} alt="" data-aos="zoom-out-up" />
                </div>
                <h3 data-aos="zoom-out-left">{val.name}</h3>
                <label data-aos="zoom-out">{val.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
