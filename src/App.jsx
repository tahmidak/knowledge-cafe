
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";
import ReadingTime from "./Components/ReadingTIme/ReadingTime";


/**
 * Main App component for Knowledge Cafe
 * Handles global state for bookmarks and reading time
 */

function App() {
  // State for bookmarked blogs
  const [bookmarks, setBookmarks] = useState([]);
  // State for total reading time
  const [totalReadingTime, setTotalReadingTime] = useState(0);

  /**
   * Add or remove a blog from bookmarks
   * @param {Object} blog - Blog object to add or remove
   */

  const handleAddToBookmark = (blog) => {
    setBookmarks((prev) =>
      prev.some((item) => item.id === blog.id)
        ? prev.filter((item) => item.id !== blog.id)
        : [...prev, blog]
    );
  };

  /**
   * Handle marking a blog as read
   * Adds reading time and removes blog from bookmarks
   * @param {number} time - Reading time to add
   * @param {string|number} blogId - Blog ID to remove from bookmarks
   */

  const readingTimeHandler = (time = 0, blogId) => {
    setTotalReadingTime((prev) => prev + time);
    setBookmarks((prev) => prev.filter((item) => item.id !== blogId));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-1.5 w-full min-w-[300px]">
      {/* Header Section */}
      <header className="w-full flex justify-center">
        <Header />
      </header>
      {/* Main Content Section */}
      <main className="flex flex-col md:flex-row gap-3 w-full max-w-screen-xl lg:px-4 md:px px-0">
        <div className="blogs md:w-2/3">
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            bookmarks={bookmarks}
            readingTimeHandler={readingTimeHandler}
          />
        </div>
        <div className="bookmarks md:w-1/3">
          <ReadingTime totalReadingTime={totalReadingTime} />
          <Bookmarks bookmarks={bookmarks} />
        </div>
      </main>
    </div>
  );
}

export default App;
