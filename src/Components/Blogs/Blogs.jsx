import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "./Blog/Blog.jsx";
import Bookmarks from './../Bookmarks/Bookmarks';


const Blogs = ({ handleAddToBookmark, bookmarks, readingTimeHandler }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch blogs");
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="blogs-section lg:px-4 md:px px-0 py-4 max-w-3xl mx-auto text-white">
      {loading && <div className="text-center text-lg">Loading blogs...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      <div className="space-y-8">
        {!loading && !error && blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            bookmarks={bookmarks}
            readingTimeHandler={readingTimeHandler}
          />
        ))}
      </div>
    </section>
  );
};


Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
  readingTimeHandler: PropTypes.func.isRequired,
};

export default Blogs;
