'use client'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";

export default function SearchFiltering() {

    const [dataShow, setDataShow] = useState(1)
    const { data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=${11}&random=false&apiKey=46bc28792550487884eecde5a936bb95`)
            const data = await res.data.slice(1)
            return data
        }
    })

    const totalPages = data ? Math.ceil(data.length / 4) : 0;
    const displayedData =
        data
            ? data.slice((dataShow - 1) * 4, dataShow * 4)
            : [];

    return (
        <div className="max-w-7xl mx-auto py-20">
            {/* title */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Discover Delicious Recipes</h1>
                <p>Plan your meals, find recipes, cook with ease, and enjoy healthy living every <br /> day with personalized recommendations and smart meal planning tools.</p>
            </div>

            {/* search filter and card */}
            <div className="flex gap-10">
                {/* search and filter */}
                <div className="w-[25%] h-96 ">
                    <h3 className="font-bold text-lg mb-4">Filters Option</h3>
                    <div className="space-y-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
                <div className="w-[75%] h-96">
                    <h3 className="font-bold text-lg mb-4">Items</h3>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-11">
                        {
                            displayedData?.map((recipe: any, i: number) => <Card key={i}
                                title={recipe.title?.split(' ').slice(0, 3).join(' ')}
                                img={recipe.image} protein={recipe.protein} fat={recipe.fat}
                                calories={recipe.calories} carbs={recipe.carbs} id={recipe.id}
                            />)
                        }
                    </div>
                </div>

            </div>

            {/* pagination */}
            <div className="flex justify-end">
                <div className="space-x-4">
                    <button
                        onClick={() => {
                            if (dataShow > 1) setDataShow((prev) => prev - 1);
                        }} className={`${dataShow === 1 ? 'bg-[#00A14966] cursor-none' : 'bg-[#00A14933]'}  border-[#00A149] border-2 rounded-full p-2`}>
                        <GrFormPrevious className="text-xl text-[#00A149]" /></button>
                    <button onClick={() => {
                        if (dataShow < totalPages) setDataShow((prev) => prev + 1);
                    }} className={`${dataShow === totalPages ? 'bg-[#00A14966] cursor-none' : 'bg-[#00A14933]'}  border-[#00A149] border-2 rounded-full p-2`} ><GrFormNext className="text-xl text-[#00A149]" /></button>
                </div>
            </div>
        </div>
    )
}
