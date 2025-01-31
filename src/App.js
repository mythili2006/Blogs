import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import IndexPage from "./Pages/IndexPage";
import RegisterPage from "./Pages/RegistrationPages";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import CreatePosts from "./Pages/CreatePosts";  // Ensure CreatePosts is correctly imported
import MyBlog from "./Pages/MyBlog";
import './App.css';
import FirstPage from "./Pages/FirstPage";
import Contact from "./Pages/Contact";
import BlogPost from './Pages/BlogPost';
import Subscription from './Pages/Subscription';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/index" element={<IndexPage />} />
            <Route path='/home' element={<FirstPage />} />
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create" element={<CreatePosts />} />  {/* Adjusted for correct component name */}
            <Route path="/myblogs" element={<MyBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post/:id" element={<BlogPost />} />
            <Route path="/Subscription" element={<Subscription/>}/>
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
};

export default App;
