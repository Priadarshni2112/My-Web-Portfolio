import React from 'react'
import frm from '../images/cer/frm.jpg'
import ama from '../images/cer/ama.png'
import mc from '../images/cer/mc.png'
import ini from '../images/cer/ini.png'
import ipp from '../images/cer/ipp.png'
import ja from '../images/cer/ja.png'
import la from '../images/cer/la.png'
import pca from '../images/cer/pca.png'
const Certificate=()=>{
    return (
    <div name="Certificate" className="text-black bg-gradient-to-l from-purple-200 via-sky-100 to-slate-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-800 w-full dark:text-white md:h-screen">
         <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Achievements</p>
                <p className="text-xl py-6">Review some of my certifications.</p>
            </div>
            <div className="flex no-scrollbar overflow-x-scroll object-fill h-[400px] whitespace-nowrap pt-5">
          
         <img
          class="pr-10"
          src={ama}
          alt="no-img"
        />
         <img
          class="pr-10"
          src={mc}
          alt="no-img"
        />
         <img
          class="pr-10"
          src={ini}
          alt="no-img"
        />
         <img
          class="pr-10"
          src={ipp}
          alt="no-img"
        />
         <img
          class="pr-10"
          src={ja}
          alt="no-img"
        />
         <img
          class="pr-10"
          src={la}
          alt="no-img"
        />
         <img
          class="pr-10"
          src={pca}
          alt="no-img"
        />
          <img
          class="pr-10"
          src={frm}
          alt="no-img"
        />
            </div>
         </div>
    </div>
    )
};
export default Certificate;