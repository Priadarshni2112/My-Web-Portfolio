import NavBar from './components/NavBar'
import Home from './components/Home'
import Social from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Certificate from './components/Certificate'
import Contact from './components/Contact'
import {BsFillMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import {useState,useEffect} from 'react'
function App() {
  const [theme,setTheme]=useState("dark");
  const [isActive, setIsActive] = useState(true);
  useEffect(()=>{
    if(theme==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);
  const handleThemeSwitch=()=>{
    setTheme(theme==="dark"?"light":"dark");
  };
  return (
    <div class="mainn">
      <div className="flex flex-row justify-between h-20 w-[100%] shadow-2xl fixed bg-white dark:bg-black">
      <div>
      <NavBar/>
      </div>
      <div className="hidden md:flex mr-5 px-4 py-5">
        <button className="cursor-pointer justify-center items-center bg-white dark:bg-black relative hidden md:flex" onClick={handleThemeSwitch}>
        {isActive? <BsFillMoonFill size={30} color="black" className="dark:fill-white" onClick={()=>{
          setIsActive(!isActive)}}/>:
      <BsFillSunFill size={30} color="black" className="dark:fill-white" onClick={()=>{
          setIsActive(!isActive)}} />
           }
    </button>
    </div>
      </div>
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Certificate/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
