
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import LoginAccount from "./components/LoginAccount";
import Profile from "./components/Profile";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import PostForm from "./components/PostForm";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/posts" element={<PostList />} />
          <Route path="/login" element={<LoginAccount />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/postform" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
