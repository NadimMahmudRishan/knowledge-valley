import Header from "./component/header/Header";
import "./App.css";
import Blogs from "./component/blogs/Blogs";
import Bookmarks from "./component/bookMarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks,setBookmark]=useState([]);
  const addToBookmark = post => {
    const newBookmarked = [...bookmarks, post];
    setBookmark(newBookmarked);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className="md:flex mx-5 gap-8">
          <Blogs addToBookmark={addToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
