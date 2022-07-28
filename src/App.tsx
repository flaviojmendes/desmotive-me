import { useEffect, useState } from "react";
import "./App.css";
import { quotes } from "./quotes";
import _ from "lodash";
import { TwitterShareButton, TwitterIcon } from "react-share";
import ReactGA from "react-ga4";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(_.sample(quotes) || "");
  });

  ReactGA.initialize("G-JQ5JTL1Q21");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col items-center p-10"
        style={{
          backgroundColor: "black",
          backgroundImage: `url(https://picsum.photos/800/600/?blur)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          onClick={() => setQuote(_.sample(quotes) || "")}
          className="text-5xl f-handwritten text-white t-outline cursor-pointer"
        >
          desmotive.me
        </h1>
        <img src="../public/cursor.png" style={{width:50,marginLeft:300}} alt="" />

        <div className="text-center flex flex-col grow mx-4 md:mx-20 p-2 min-h-[100px]">
          <h1 className="t-quote  m-auto text-white bg-black bg-opacity-50 rounded-md p-10 text-lg md:text-3xl">
            {quote}
          </h1>
          <div className="text-center">
            <TwitterShareButton
              className="m-auto mt-0 w-[220px] flex content-center space-x-2 align-middle"
              title={`${quote} 
              \nvia: `}
              url={"https://desmotive.me"}
            >
              <TwitterIcon size={64} round /><span className="m-auto text-white f-handwritten">Compartilhe</span>
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
