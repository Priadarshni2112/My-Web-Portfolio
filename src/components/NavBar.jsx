import React,{ useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavBar =()=>{
    const [Nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:"Home"
        },
        {
            id:2,
            link:"About"
        },
        {
            id:3,
            link:"Portfolio"
        },
        {
            id:4,
            link:"Experience"
        },
        {
            id:5,
            link:"Contact"
        }
    ]
    return(
        <div className="flex justify-between items-center w-11/12 h-20 bg-white text-black dark:text-white px-4 dark:bg-black fixed">
            <div>
            <p className="font-signature text-5xl ml-2 font-bold">PD</p>
           </div>
           <ul className=" hidden md:flex">
            {links.map((pk) => 
               <li key={pk.id} className="px-4 cursor-pointer text-black dark:text-gray-300 text-lg hover:scale-125 duration-300">
                <Link to={pk.link} smooth duration={500}>{pk.link}</Link>
               </li>
            )
            }
           </ul>
           <div onClick={()=>setNav(!Nav)} className="cursor-pointer p4-4 z-10 text-black dark:text-gray-300 md:hidden">
            {Nav ? <FaTimes size={30} />: <FaBars size={30}/> }
           </div>
           {Nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-indigo-200 text-black dark:bg-gradient-to-b from-black to-gray-800 dark:text-gray-300">
                {links.map((pk) => 
               <li key={pk.id} className="px-4 py-4 cursor-pointer text-black dark:text-gray-300 text-xl hover:scale-125 duration-300">
                <Link onClick={()=>setNav(!Nav)} to={pk.link} smooth duration={500}>{pk.link}</Link>
               </li>
            )
            }
            </ul>
           )}
        </div>
    )
}
export default NavBar