import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
// import { useGoogleOneTapLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
import MyCustomButton from "./components/MyCustomButton";
import { useGoogleLogin } from "@react-oauth/google";
import Header from "./components/Header";
import HeroCard from "./components/HeroCard";
import { useRef } from "react";
import AboutBlock from "./components/AboutBlock";
import BigBlueButton from "./components/BigBlueButton";
import LearningBlock from "./components/LearningBlock";
import CodeWindow from "./components/CodeWindow";
import BigCard from "./components/BigCard";
import PartnersBlock from "./components/PartnersBlock";
import Profile from "./profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useHistory,
} from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/solid";

function App() {
  // googleLogout();
  const pageRefs = useRef({});

  return (
    <GoogleOAuthProvider clientId="1047839081489-v1v1dubc557qiqq36mhag4neskapnurk.apps.googleusercontent.com">
      <div className="App">
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

        {/*<GoogleLogin*/}
        {/*    onSuccess={credentialResponse => {*/}
        {/*        console.log(credentialResponse);*/}
        {/*    }}*/}
        {/*    onError={() => {*/}
        {/*        console.log('Login Failed');*/}
        {/*    }}*/}
        {/*/>*/}

        {/* <MyCustomButton /> */}
        <Header pageRefs={pageRefs} />
        <main className="grid grid-cols-1 px-6 md:grid-cols-3">
          <HeroCard img="solider-1.webp" title="Help Ukraine" />
          <HeroCard
            img="solider-1.webp"
            title="Take Challenges"
            //onClick={() => router.push("challenges")}
          />
          <HeroCard img="solider-1.webp" title="Get Job Offers" />
        </main>
        <AboutBlock pageRefs={pageRefs} />
        <LearningBlock pageRefs={pageRefs} />
        <PartnersBlock pageRefs={pageRefs} />
        <img src="sponsors-1.png" />
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
