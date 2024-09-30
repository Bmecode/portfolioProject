import { red } from "@mui/material/colors";
import { social } from "../data/dummydata";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        {social.map((item, i) => (
          <i key={i} data-aos="zoom-in-left">
            <a href="#">{item.icon}</a>
          </i>
        ))}
        <p data-aos="zoom-in-right"> Burak Mert ©{currentYear}</p>
        <a
          href="https://themeforest.net/item/alamin-one-page-portfolio/22499585"
          target="_blank"
        >
          Buy This Theme - <span className="span">Link</span>
        </a>
      </footer>
    </>
  );
};
