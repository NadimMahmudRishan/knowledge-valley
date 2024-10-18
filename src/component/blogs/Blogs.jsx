import { useEffect, useState } from "react";
import Blog from "../blog/blog";

const Blogs = () => {
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setblog(data));
  }, []);

  return (
    <div className="w-2/3">
      <div>
        <h2>Total Blogs : {blogs.length}</h2>
        {blogs.map((post) => (
          <Blog key={post.id} post={post}></Blog>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Blogs;
