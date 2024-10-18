import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./component/header/Header";
import "./App.css";
import Blogs from "./component/blog/Blogs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  );
}

export default App;
