import Home from "./assets/Component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routhpath } from "./assets/Routes/route.js";
import CreatePost from "./assets/pages/CreatePost";
import Allposts from "./assets/pages/AllPosts.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhpath.home} element={<Home />}></Route>
        <Route path={routhpath.create} element={<CreatePost />}></Route>
        <Route path={routhpath.post} element={<Allposts />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
