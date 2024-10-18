import PropTypes from "prop-types";
const Blog = ({ post }) => {
  const {
    id,
    cover,
    author,
    author_img,
    hashTag,
    posted_date,
    reading_time,
    heading,
  } = post;

  return (
    <div>
      <img className="w-96" src={cover} alt="" />
      <div className="flex justify-between ">
        <div>
          <img className="w-9 h-9 rounded-full" src={author_img} alt="" />
        </div>
        <div>
            <span>{reading_time} min read.</span>
        </div>
      </div>
      <h2 className="text-4xl font-semibold">{heading}</h2>
    </div>
  );
};

Blog.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Blog;
