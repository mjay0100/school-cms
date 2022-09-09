import Route from "./router/Index";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      mirror: true,
    });
    Aos.refresh();
  }, []);
  return <Route />;
}

export default App;
