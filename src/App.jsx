import './App.css'
import {LoadingScreen} from "./components/LoadingScreen.jsx";
import "./index.css";
import {useState} from "react";
import {Navbar} from "./components/Navbar.jsx";
import {MobileMenu} from "./components/MobileMenu.jsx";
import {Home} from "./components/sections/Home.jsx";
import {About} from "./components/sections/About.jsx";
import {Projects} from "./components/sections/Projects.jsx";
import {Contact} from "./components/sections/Contact.jsx";
import {ProjectDescription} from "./components/sections/ProjectDescription.jsx";
import DisplayVideo from './components/DisplayVideo';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  return (<>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
    {videoOpen && (
      <DisplayVideo videoUrl={videoUrl}
                    onClose={() => {setVideoOpen(false);
                                    setVideoUrl("");}}
      />
                  )
    }

        <div className={`min-h-screen transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } bg-black text-gray-100`}>

            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <Projects />
            <ProjectDescription 
              videoOpen={videoOpen}
              setVideoOpen={setVideoOpen}
              setVideoUrl={setVideoUrl}
            />
            <Contact />
        </div>
      </>
  );
}

export default App
