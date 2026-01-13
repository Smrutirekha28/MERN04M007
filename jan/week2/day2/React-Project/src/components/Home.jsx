import React from 'react'
import {  useNavigate } from 'react-router'
import { RiCupFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { FaIceCream } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillCakeFill } from "react-icons/bs";
import { BsPersonHearts } from "react-icons/bs";
import { GiGlassCelebration } from "react-icons/gi";

function Home() {
    let navigate= useNavigate()
  return (
    // <div className='px-6 py-20 bg-gray-100 border-b border-gray-200'>
    //     <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-10'>
    //         <div className='md:w-1/2 space-y-6'>
    //             <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Welcome to <span className='text-red-600'>Food Bazar</span></h1>
    //             <p>Here you can get your food . search, explore , enjoy........</p>
    //             <button 
    //             onClick={() => navigate("/Foods")}
    //             className='bg-red-600 hover: bg-red-500 text-white px-6 py-3 shadow rounded-lg'>Explore foods</button>
    //         </div>
    //         <div className='md:w-1/2'>
    //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZylLZLdEOnpA7xCFv_tEqFvcThCY70wK7Q&s" alt="" className='rounded-lg shadow-md w-900'/>
    //         </div>
    //     </div>
    // </div>

    <div className=' overflow-x-hidden'>
        <div className='h-165 bg-[url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg")] bg-center bg-no-repeat bg-cover bg-[#f5f5f5] flex justify-center items-center relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/20 mt-17'>
            <div className='max-w-200 mx-auto relative z-10 text-white'>
                <h1 className="font-['Playfair_Display'] text-[4rem] mb-5 text-white leading-[1.2] font-bold">Best food for <span className=" ">your taste</span></h1> 
                <p className="font-['Poppins'] text-[1.2rem] mb-10 leading-[1.6] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">Experience exquisite flavors and create unforgettable memories <span className='block'>in a place that feels like home</span> </p>
                    <div className='flex gap-5 justify-center'>
                        <button className='bg-[#ff6b6b]  inline-block px-5 py-3 text-white font-bold rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-[#ff8e8e] hover:-translate-y-1 ' >Book a table</button>
                        <button className='bg-white border-2 border-[#ff6b6b]  text-[#ff6b6b] inline-block px-5 py-2.5 hover:text-white font-bold rounded-full cursor-pointer transition-all duration-300 ease hover:bg-[#ff8e8e] hover:-translate-y-1 ' onClick={() => navigate("/Foods")}>Explore Menu</button>
                    </div>
            </div>
        </div>

       {/* Menu page */}

        <div className='lg:p-20'>
            <h1 className=' text-[2.5rem] mb-5 text-center text-[#333]'>Browse Our Menu</h1>
            <p className=' text-center mb-12.5 '>In the new era of technology we look into the future with certainty for life</p>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12.5 gap-10 px-10 '>
                <div className=' h-75 bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2   hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <RiCupFill size={50} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Breakfast</h3>
                    <p className='line-clamp-4'>A wholesome breakfast crafted to energize your mornings and uplift your day.</p>
                </div>
                <div className=' h-75 bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <ImSpoonKnife size={40} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Main Dish</h3>
                    <p className='line-clamp-4'>Flavorful main dishes thoughtfully prepared to delight your palate and leave you completely satisfied.</p>
                </div>
                <div className=' h-75  bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <FaGlassMartiniAlt size={40} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Drinks</h3>
                    <p className='line-clamp-4'>Refreshing beverages crafted to uplift your mood, cool your senses, and brighten every single moment.</p>
                </div>
                <div className=' h-75  bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <FaIceCream size={40} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Dessert</h3>
                    <p className='line-clamp-4'>Indulgent desserts made with love to satisfy sweet cravings and create unforgettable finishing moments.</p>
                </div>
                
            </div>
        </div>


        {/* About page */}
        <div className=' md:px-35 p-10 md:py-10 bg-[#f9f9f9] items-center w-full sm:mt-10 max-sm:mt-20 ' >
            <div className=' grid lg:grid-cols-2 gap-12.5 items-center sm:grid-cols-1 '>
                {/* <div className='about-img w-full h-full '> */}
                    <img src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg" alt="" className='w-full h-full object-cover rounded-lg max-sm:w-100'/>
                {/* </div> */}
                <div className=''>
                    <h2 className='text-3xl font-bold mb-8'>We provide healthy food for your family</h2>
                    <p className='mb-7 text-lg'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                    <p className='mb-7.5 text-lg'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff,renowned for their warmth and dedication strives to make euenirit an unforgettable event</p>
                    <button className='bg-[#ff6b6b]  inline-block px-2.5 py-3 text-white font-bold rounded-full cursor-pointer transition-all duration-300 ease-linear hover:bg-[#ff8e8e] hover:-translate-y-1 ' >More About Us</button>
                </div>
            </div>
        </div>



        {/* Service page */}
        <div className='lg:p-20'>
            <h1 className=' text-[2.5rem] mb-5 text-center text-[#333] font-bold'>We also offer unique services for your events</h1>
            <p className=' text-center mb-12.5 text-lg'>“Crafted flavors designed to elevate gatherings and create lasting joyful memories.”</p>
            <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12.5 gap-10 px-10 '>
                <div className=' h-75 bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2   hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <GiForkKnifeSpoon size={50} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Catering</h3>
                    <p className='line-clamp-4'>Professional catering services delivering delicious food and seamless experiences for every event.</p>
                </div>
                <div className=' h-75 bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <BsFillCakeFill size={40} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Birthday Party</h3>
                    <p className='line-clamp-4'>Celebrate birthdays with joyful flavors, delightful dishes, and moments everyone will remember.</p>
                </div>
                <div className=' h-75  bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <BsPersonHearts size={40} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Wedding Party</h3>
                    <p className='line-clamp-4'>Elegant wedding feasts crafted with love to make your special day unforgettable.</p>
                </div>
                <div className=' h-75  bg-[#f8f9fa] px-10 py-7.5 text-center transition-all duration-300 ease cursor-pointer hover:-translate-y-2 hover:drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-2xl'>
                    <GiGlassCelebration size={40} className='w-full mb-5 text-[#ff6b6b]'/>
                    <h3 className='font-bold text-[1.5rem] mb-2 text-[#333]'>Custom Party</h3>
                    <p className='line-clamp-4'>Personalized party menus designed to match your vision, taste, and celebration style.</p>
                </div>
                
            </div>
        </div>



        {/* Blog page */}
        {/* <div>
            <h2 className='section-title'>Our Blog & Articles</h2>
            <div className='blog-grid mb-5 grid grid-cols-3 gap-7.5 mt-12.5'>
                <div className="blog-card bg-[#f8f9fa] p-7.5 rounded-lg min-h-62.5 flex flex-col">
                    <img src="https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg" alt="" />
                    <p className='blog-date'>January 3,2023</p>
                    <h3>How to prepare the perfetct french fries in an air fryer</h3>
                </div>
                <div className="blog-card">
                    <img src="https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg" alt="" />
                    <p className='blog-date'>January 3,2023</p>
                    <h3>How to prepare the perfetct chicken tandoor in an air fryer</h3>
                </div>
                <div className="blog-card">
                    <img src="https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg" alt="" />
                    <p className='blog-date'>January 3,2023</p>
                    <h3>How to prepare the perfetct burger in an air fryer</h3>
                </div>
                <div className="blog-card">
                    <img src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" alt="" />
                    <p className='blog-date'>January 3,2023</p>
                    <h3>How to prepare the perfetct cheese cake in an air fryer</h3>
                </div>
                <div className="blog-card">
                    <img src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg" alt="" />
                    <p className='blog-date'>January 3,2023</p>
                    <h3>How to prepare the perfetct pizza in an air fryer</h3>
                </div>
            </div>
        </div> */}
    </div>
    
  )

}

export default Home