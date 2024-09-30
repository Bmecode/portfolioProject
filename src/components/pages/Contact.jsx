import Heading from "../common/Heading";
import { contact } from "../data/dummydata";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <Heading title="İletişime Geçin" />
          <div className="content flexsb">
            <div className="right">
              <form>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="İsim"
                    data-aos="zoom-in-down"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    data-aos="zoom-in-up"
                  />
                </div>
                <input type="text" placeholder="Konu" data-aos="zoom-in-up" />
                <textarea
                  data-aos="zoom-in-down"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Mesajınız"
                ></textarea>
                <button data-aos="zoom-in-down">Gönder</button>
              </form>
            </div>
            <div className="left" data-aos="zoom-in-down">
              {contact.map((item, i) => (
                <div className="box" key={i}>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
