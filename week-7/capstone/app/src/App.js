import { BrowserRouter } from "react-router-dom";
import Body from "./container/Body";
import Header from "./container/Header";

import "./App.css";

function App() {
  return (
    <div>
        {/* <video controls>
            <source src="https://youtu.be/axIfvee8tbM?t=44" type="video/mpeg" />
        </video> */}
      {/* <audio controls>
            <source src="https://youtu.be/axIfvee8tbM" type="audio/mpeg" />
        </audio> */}
      <BrowserRouter>
        <>
          <Header />
          <Body />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
