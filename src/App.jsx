import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./component/header/Header";
import "./App.css";
import Blogs from "./component/blogs/Blogs";
import Bookmarks from "./component/bookMarks/Bookmarks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <div className="flex">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
