const Bookmark = ({ post }) => {
const {heading} = post;
  return (
    <div>
      <h3 className="bg-white rounded-md p-2 font-semibold text-lg m-3">{heading}</h3>
    </div>
  );
};

export default Bookmark;
