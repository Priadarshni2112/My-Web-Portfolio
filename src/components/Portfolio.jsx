import React from 'react'
import pet from '../images/portimg/petshop.png'
import book from '../images/portimg/book.png'
import pdc from '../images/portimg/pdc.png'
import news from '../images/portimg/news.png'
import prison from '../images/portimg/prison.png'
import quiz from '../images/portimg/quiz.png'
const Portfolio=()=>{
    const arr=[
        {
            id:1,
            src:pet
        },
        {
            id:2,
            src:book
        },
        {
            id:3,
            src:pdc
        },
        {
            id:4,
            src:news
        },
        {
            id:5,
            src:prison
        },
        {
            id:6,
            src:quiz
        },
    ]
    return (
    <div name="Portfolio" className="text-black bg-gradient-to-l from-purple-200 via-sky-100 to-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 w-full dark:text-white md:h-screen">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="text-xl py-6">Check out some of my projects right here.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                arr.map(({id,src})=>(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-110 duration-200">
                    <img src={src} alt=""  classsName="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center h-[50px] hover:bg-gray-500">
                    <button className="px-6 py-3 duration-200">Learn More</button>
                    </div>
                </div>
                ))
            }
            </div>
         </div>
    </div>
    )
};
export default Portfolio;