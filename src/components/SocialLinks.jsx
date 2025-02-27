import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from'react-icons/bs'
const SocialLinks=()=>{
    const links=[
        {
            id:1,
            child:(
                <>
                 LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/priadarshni-muthukumar-311995247/',
            style:'rounded-tr-md'
        
        },
        {
            id:2,
            child:(
                <>
                 GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Priadarshni2112',
        
        },
        {
            id:3,
            child:(
                <>
                 Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:mpria2002@gmail.com',
        },
        {
            id:4,
            child:(
                <>
                 Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: 'https://drive.google.com/file/d/1HSeD9cLXzGeuckC6so32FMTjrNa28eGl/view?usp=sharing',
            style:'rounded-br-md'
        
        }
    ]
    return(
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

        {links.map(({id,child,href,style})=>(
            // eslint-disable-next-line
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " +style}>
          <a href={href} className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer">
              {child}
              </a>
      </li>
        ))}
            

        </ul>
        </div>
    );
}
export default SocialLinks;