import Pages from "./components/pages/Pages";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
