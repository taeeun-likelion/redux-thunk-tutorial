import "./App.css";
import { Route } from "react-router";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
    </BrowserRouter>
  );
}

export default App;
