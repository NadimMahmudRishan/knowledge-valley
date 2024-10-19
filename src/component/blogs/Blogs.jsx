import { useEffect, useState } from "react";
import Blog from "../blog/blog";
import PropTypes from "prop-types";

const Blogs = ({ addToBookmark, handelTime }) => {
  const [blogs, setblog] = useState([]);

  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setblog(data));
  }, []);

  return (
    <div className="w-2/3">
      <div>
        {blogs.map((post) => (
          <Blog
            key={post.id}
            addToBookmark={addToBookmark}
            handelTime={handelTime}
            post={post}
          ></Blog>
        ))}
      </div>
      <div></div>
    </div>
  );
};

Blogs.PropTypes = {
  addToBookmark: PropTypes.func.isRequired,
  handelTime: PropTypes.func.isRequired,
};

export default Blogs;
