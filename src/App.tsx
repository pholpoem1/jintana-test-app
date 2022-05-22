import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
// import News from "./pages/news";
// import Regions from "./pages/regions";
import Catalogues from "./pages/catalogues";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Catalogues /> },
    // { path: "regions", element: <Regions /> },
    // { path: "video", element: <News /> },
    // { path: "tv", element: <News /> },
  ]);
  return <div className="App">{routes}</div>;
}

export default App;
