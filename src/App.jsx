import "./App.css";
import Header from './Components/Header/Header.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';


function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-1.5">  
    <Header></Header>

    <Blogs></Blogs>
    </div>
  );
}

export default App;
