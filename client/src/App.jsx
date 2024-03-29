import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import Dashbord from "./pages/Dashbord";
import SignIn from "./pages/SingIn";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
