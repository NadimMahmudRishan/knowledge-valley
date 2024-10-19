import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";
import { useState } from "react";
const Bookmarks = ({ bookmarks, times }) => {
  return (
    <div className="w-1/3 my-10">
      <div className="bg-[#6047EC1A] rounded-lg p-3">
        <h2 className="text-2xl font-bold text-[#6047EC]">
          Spent time on read : {times} min
        </h2>
      </div>
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
