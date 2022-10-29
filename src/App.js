import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
// import { useGoogleOneTapLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
import Header from "./components/Header";
import { useRef } from "react";
import Profile from "./components/Profile";
import Home from './components/Home'
import {
  Routes,
  Route
} from "react-router-dom";
import PartnersBlock from "./components/helpers/PartnersBlock";
import LearningBlock from "./components/helpers/LearningBlock";
import AboutBlock from "./components/helpers/AboutBlock";

function App() {
  // googleLogout();
  const pageRefs = useRef({});

  return (
    <>
      <GoogleOAuthProvider clientId="1047839081489-v1v1dubc557qiqq36mhag4neskapnurk.apps.googleusercontent.com">
        <div className="App">
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

          <Header pageRefs={pageRefs} />

        </div>
      </GoogleOAuthProvider>
      <Routes>
        <Route path="/" element={<Home pageRefs={pageRefs} />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
