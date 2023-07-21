import React from 'react'
const Contact =()=>{
    return (
        <div name="Contact" className="w-full h-screen text-black bg-gradient-to-l from-purple-200 via-sky-100 to-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 p-4 dark:text-white">
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                <p className="text-xl py-6">Get in touch with me!</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="www.getform.io" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" 
                    name="name" 
                    placeholder="Enter your name" 
                    className="p-2 bg-transparent border-2 border-black rounded-md text-black dark:text-white dark:border-white focus:outline-none"/>
                 <input type="text" 
                    name="email" 
                    placeholder="Enter your email" 
                    className="p-2 my-4 bg-transparent border-2 border-black rounded-md text-black dark:text-white dark:border-white focus:outline-none"/>
                <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-black border-2 rounded-md text-white dark:border-white focus:outline-none"/>
                <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                </form>
            </div>
          </div>
        </div>
    )
};
export default Contact;