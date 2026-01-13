// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'

// function Food() {
//     let {id} = useParams();
//     let [detail,setDetail] = useState({})
//     async function fetchFoodDetailsById() {
//         try{
//             let res= await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//             setDetail(res?.data?.meals[0])
//             console.log(res?.data?.meals[0]);   
//         }catch(error){
//             console.log("something went wrong");
//         }
//     }

//     if(!detail)
//         return(
//             <div className='flex justify-center items-center h-screen text-xl'>This item details are not available</div>
//         );

//     useEffect(()=>{
//         fetchFoodDetailsById()
//     },[id])
//     function hasObject(obj){
//         return obj && Object.keys(obj).length>0
//     }
//   return (
//     <div>
//         {/* {
//             hasObject(detail)?(
//                 // <div>
//                 //     <img src={detail?.strMealThumb || detail.strCategoryThumb} alt="" />
//                 //     <p>Category :{detail?.strCategory || detail?.strCategoryDescription}</p>
//                 //     <p>Instruction : {detail?.strInstructions}</p>
//                 //     <iframe src={detail?.strSource}></iframe>
//                 // </div>
//             <div className=' md:px-35 p-2 md:py-10 bg-[#f9f9f9] items-center w-full sm:mt-15 max-sm:mt-20 ' >
//                 <div className=' grid lg:grid-cols-2 gap-12.5 items-center sm:grid-cols-1 '>
//                         <img src={detail?.strMealThumb || detail.strCategoryThumb}alt="" className='w-full h-100 object-cover rounded-lg max-sm:w-100'/>
//                     <div className=''>
//                         <p className='text-lg '><span className='text-xl font-bold'>Category: </span>{detail?.strCategory || detail?.strCategoryDescription}</p>
//                         <p className='text-lg line-clamp-3'><span className='text-xl font-bold'>Instruction: </span>{detail?.strInstructions}</p>
//                         <p className='text-lg'><span className="text-xl font-bold">Ingredients: </span>
//                                 {Object.keys(detail || {})
//                                     .filter(
//                                     (key) =>
//                                         key.startsWith("strIngredient") && detail[key]?.trim()
//                                     )
//                                     .map((key) => detail[key])
//                                     .join(", ")}
//                         </p>
//                         <p className='text-lg'><span className='text-xl font-bold'>Types: </span>{detail?.strMeal}</p>
//                         <p><span className="text-xl font-bold">Measurement: </span>
//                                 {Object.keys(detail || {})
//                                     .filter(
//                                     (key) =>
//                                         key.startsWith("strMeasure") && detail[key]?.trim()
//                                     )
//                                     .map((key) => detail[key])
//                                     .join(", ")}
//                         </p>
//                         <iframe src={detail?.strSource || detail?.strYoutube} >Video:</iframe>
//                     </div>
//                 </div>
//             </div>
//             ):(
//                 <p className='mt-20'>Not Found</p>
//             )
//         } */}

//         <p className='mt-20'>hii</p>

//     </div>
//   )
// }

// export default Food








import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Food() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        fetchFoodDetailsById();
    }, [id]);

    async function fetchFoodDetailsById() {
        try {
            const res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            setDetail(res?.data?.meals?.[0]);
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    if (!detail)
        return (
            <div className="flex justify-center items-center h-screen text-xl">
                This Item details are not available ...
            </div>
        );


    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = detail[`strIngredient${i}`];
        const measure = detail[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            {/* <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {detail.strMeal}
            </h1>

            <p className="text-gray-600 mb-6">
                <span className="font-semibold">Category:</span> {detail.strCategory} |
                <span className="font-semibold ml-2">Area:</span> {detail.strArea}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                    <img
                        src={detail.strMealThumb}
                        alt={detail.strMeal}
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Ingredients
                    </h2>

                    <ul className="space-y-2">
                        {ingredients.map((item, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 px-4 py-2 rounded-md text-gray-700"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Instructions
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {detail.strInstructions}
                </p>
            </div>

            <div className="mt-8 flex flex-col gap-4">

                {detail.strSource && (
                    <a
                        href={detail.strSource}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block w-fit bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        View Full Recipe
                    </a>
                )}

                {detail.strYoutube && (
                    <div className="mt-6">
                        <iframe
                            className="w-full rounded-xl shadow-lg"
                            height="420"
                            src={detail.strYoutube.replace("watch?v=", "embed/")}
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div> */}

            hii
        </div>
    );
}

export default Food;