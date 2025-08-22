import PropTypes from "prop-types";
import bookmarksIcon from "../../../assets/images/bookmarkIcon.svg";

const Blog = ({ blog }) => {
  return (
    <div className="blog_card flex flex-col gap-6 p-2 my-4">
      <div className="blog_cover_img flex justify-center items-center w-full h-96 overflow-hidden rounded-lg">
        <img className="w-full h-full object-cover bg-center" src={blog.cover} alt={blog.title} />
      </div>
      <div className="blog_info flex flex-col gap-4">
        <div className="blog_abouts flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex h-16 w-16 border border-transparent rounded-full overflow-hidden">
              <img
                className="w-full h-full rounded-full"
                src={blog.author_img}
                alt={blog.author}
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-2xl font-bold">
                <strong>{blog.author}</strong>
              </span>
              <span>{blog.posted_date}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>
              {blog.reading_time} min read
              <span>
                <img
                  className="inline text-white h-5 w-5"
                  src={bookmarksIcon}
                  alt="Bookmark Icon"
                />
              </span>
            </span>
          </div>
        </div>
        <div className="blog_title text-4xl">{blog.title}</div>
        <div className="blog_tags flex gap-2">
          {blog.hashtags.map((tag, index) => (
            <span key={index} className="py-1 px-2 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
