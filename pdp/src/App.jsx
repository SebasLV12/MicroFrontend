import React, {Suspense, useState} from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header=React.lazy(()=>import("home/Header"));

import Footer from "home/Footer";
import PDPContent from "./PDPContent";

const App = () => {
  const [showHeader,setShowHeader]=useState(false);

  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {showHeader && <Suspense fallback={<div>Loading</div>}>
      
    <Header/>
    </Suspense>}
    <button className="text-3xl p-5" onClick={()=>setShowHeader(true)}>Ver cabecera</button>
    
    <div className="my-10">
      <PDPContent/>
    </div>
    <Footer/>
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
