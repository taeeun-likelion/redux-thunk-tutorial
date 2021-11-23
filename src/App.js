import "./App.css";
import { Routes, Route } from "react-router";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} exact={true} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
