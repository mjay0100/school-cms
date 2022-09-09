import Route from "./router/Index";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      // duration: 1500,
      mirror: true,
    });
    Aos.refresh();
  }, []);
  return <Route />;
}

export default App;
