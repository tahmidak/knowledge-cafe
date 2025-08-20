import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5">
      <header>
        <Header></Header>
      </header>
      <main className="flex flex-col md:flex-row gap-3 w-lvw max-w-[90rem]">
        <div className="blogs md:w-2/3">
          <Blogs></Blogs>
        </div>
        <div className="bookmarks md:w-1/3">
          <Bookmarks></Bookmarks>
        </div>
      </main>
    </div>
  );
}

export default App;
