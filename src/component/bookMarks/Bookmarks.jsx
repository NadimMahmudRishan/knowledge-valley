import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">
        Bookmarked Blogs : {bookmarks.length}
      </h2>
      <div className="bg-[#1111110D] rounded-md p-2">
        {bookmarks.map((post) => (
          <Bookmark key={post.id} post={post}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.PropTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
