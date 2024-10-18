import { useEffect, useState } from "react";

const blog = () => {
  const [blogs, setblog] = useState();

  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setblog(data));
  }, []);

  return <div></div>;
};

export default blog;
