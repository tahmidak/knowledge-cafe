import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";

/**
 * Blog component displays a single blog post with author, cover image, tags, and actions.
 * @param {Object} props
 * @param {Object} props.blog - Blog data object
 * @param {Function} props.handleAddToBookmark - Function to add/remove bookmark
 * @param {Array} props.bookmarks - List of bookmarked blogs
 * @param {Function} props.readingTimeHandler - Function to handle marking as read
 */

const Blog = ({ blog, handleAddToBookmark, bookmarks, readingTimeHandler }) => {
  const {
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  const isBookmarked = bookmarks.some((item) => item.id === blog.id);

  return (
    <div className="blog_card flex flex-col gap-6 p-2 my-4">
      {/* Blog Cover Image */}
      <div className="blog_cover_img flex justify-center items-center w-full h-96 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover bg-center"
          src={cover}
          alt={title}
        />
      </div>
      <div className="blog_info flex flex-col gap-4">
        {/* Author and Bookmark Section */}
        <div className="blog_abouts flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex h-16 w-16 border border-transparent rounded-full overflow-hidden">
              <img
                className="w-full h-full rounded-full"
                src={author_img}
                alt={author}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-2xl font-bold">
                <strong>{author}</strong>
              </span>
              <span>{posted_date}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>{reading_time} min read</span>
            <button
              onClick={() => handleAddToBookmark(blog)}
              aria-label={
                isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
              }
              title={
                isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
              }
              className="ml-2"
            >
              {isBookmarked ? (
                <IoMdBookmark className="inline text-white h-5 w-5" />
              ) : (
                <CiBookmark className="inline text-white h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        {/* Blog Title */}
        <div className="blog_title text-4xl font-semibold">{title}</div>
        {/* Blog Tags */}
        <div className="blog_tags flex gap-2">
          {hashtags.map((tag, index) => (
            <span key={index} className="py-1 px-2 rounded bg-gray-700 text-sm">
              {tag}
            </span>
          ))}
        </div>
        {/* Mark as Read Button */}
        <button
          className="blog_read_status underline cursor-pointer text-left w-fit text-blue-400 hover:text-blue-600"
          onClick={() => readingTimeHandler(reading_time, blog.id)}
          aria-label="Mark as read"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    author_img: PropTypes.string,
    posted_date: PropTypes.string,
    reading_time: PropTypes.number,
    hashtags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  readingTimeHandler: PropTypes.func.isRequired,
};

export default Blog;
