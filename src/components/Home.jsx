import React from 'react'
import {MdArrowRight} from 'react-icons/md'
import myimg from '../images/pria.jpeg'
import {Link} from 'react-scroll'
// import {useTypewriter, Cursor} from 'react-simple-typewriter'
const Home=()=>{
    return(
     <div name="Home" className="h-screen w-full bg-gradient-to-l from-purple-200 via-sky-100 to-slate-50 dark:bg-transparent dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
              I'm Priadarshni Muthukumar
            </h2>
            <p className=" text-black dark:text-gray-300 text-justify py-4 max-w-md">
            I am an ambitious and hardworking student, who always perseveres to
            achieves the best results. I believe in sincerity, perfectionism and above all
            Positive Thinking. Coming from a Technical Background, I am well aware
            of the current technologies and is working towards understanding the
            same. I value the job, which would give me the opportunity to apply my
            knowledge and provide me with an environment that stimulates learning.
            </p>
            <div>
                  <Link to="Portfolio" smooth duration={500} className="group text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                    <MdArrowRight size={35} className="ml-1"/>
                    </span>
                  </Link>
            </div>
        </div>
        <div>
            <img src={myimg} alt="my profile" className="rounded-2xl mx-auto w-[400px] h-[480px] md:w-[500px]"/>
        </div>
        </div>
     </div>
    );
}
export default Home;