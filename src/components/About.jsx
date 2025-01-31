import React from 'react'
const About=()=>{
    return(
       <div name="About" className="w-full h-screen text-black bg-gradient-to-l from-purple-200 via-sky-100 to-slate-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-black dark:text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl text-justify mt-20">
                
            I am a Software Engineer working in SHELL, Bangalore. I graduated with bachelor's degree in Computer Science VIT, Vellore. I completed my schooling from Our Own English High School Sharjah, UAE. To begin with, my hobbies are gardening and playing chess. I like to see my balcony green and elegant. Coming to chess, I ensure to play atleast one game every day.

            </p>
            <br/>
            <p className="text-xl text-justify">
            “The Harder you work for something, the greater you’ll feel when you achieve it” - that is what I believe in. 
            I am good public speaker and perfectionist. Giving a brief overview about my technical journey, 
            I started programming with C followed by basic C++ and Python. Currently, I use java for coding problems. 
            My fields of interest are Blockchain and Aritificial Intelligence. I also like Web Development and has done a 
            few projects related to the same. I am more of a Frontend Developer than Backend. 
            Thank you for taking your time. Hope you have a nice day!
            </p>
        </div>
       </div> 
    );
}
export default About;