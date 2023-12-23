import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/post-list-store";
import { ToastContainer,toast } from "react-toastify";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const onHandleTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} onHandleTab={onHandleTab} />
        <div className="content">
          <Header />
          <div >
          {selectedTab === "Home" ? <PostList/> : <CreatePost />}
          </div>
          <Footer />
        </div>
      </div>
      <ToastContainer/>
    </PostListProvider>
  );
}

export default App;
