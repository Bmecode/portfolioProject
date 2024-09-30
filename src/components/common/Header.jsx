import { Menu } from "@mui/icons-material";
import logo from "../data/images/logo.png";
import { navlink } from "../data/dummydata.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <a href="/">
              <img
                src={logo}
                alt=""
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-once="true"
              />
            </a>
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link
                to={links.url}
                key={i}
                data-aos="zoom-in-right"
                data-aos-once="true"
              >
                {links.text}
              </Link>
            ))}
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
