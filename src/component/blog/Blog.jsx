import PropTypes from "prop-types";
import { PiBookmarkSimple } from "react-icons/pi";

const Blog = ({ post, addToBookmark, handelTime }) => {
  const {
    cover,
    author,
    author_img,
    hashTag,
    posted_date,
    reading_time,
    heading,
  } = post;

  return (
    <div className="my-10 flex flex-col gap-3">
      <img className="size-full rounded-md mb-4" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div className="w-14 h-14 overflow-hidden rounded-full">
            <img src={author_img} alt={`${author} .png`} />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-[#11111199] text-[16px] font-semibold">
              {posted_date}
            </p>
          </div>
        </div>
        <div className=" flex gap-2">
          <span className="text-[#11111199] text-xl font-medium">
            {reading_time} min read
          </span>
          <button onClick={() => addToBookmark(post)} className="text-xl">
            <PiBookmarkSimple />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold">{heading}</h2>
      <div>
        {" "}
        {hashTag.map((hash) => (
          <span key={hash[0]} className="text-[#11111199] text-xl font-medium">
            #{hash}{" "}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => handelTime(reading_time)}
          className="deccorarion-none underline text-[#6047EC] font-semibold text-xl"
        >
          Mard as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  post: PropTypes.object.isRequired,
  addToBookmark: PropTypes.func.isRequired,
  handelTime: PropTypes.func.isRequired,
};

export default Blog;
