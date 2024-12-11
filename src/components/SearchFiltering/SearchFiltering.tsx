'use client'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import '../../app/loading.css'

export default function SearchFiltering() {

    const [dataShow, setDataShow] = useState(1);
    const [recipeData, setRecipeData] = useState([])
    const [recipeData2, setRecipeData2] = useState([])
    const { isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=11&random=false&apiKey=7b7a3a45ef204c2daac66d2a00f13f2d`)
            const data = await res.data.slice(1)
            setRecipeData(data)
            setRecipeData2(data)
        }
    })


    const handleProtein = (e: any) => {
        const proteinData = recipeData2?.filter((d: any) => d?.protein === e.target.value);
        setRecipeData(proteinData)
    }
    const handleCalories = (e: any) => {
        const caloriesData = recipeData2?.filter((d: any) => d?.calories === parseInt(e.target.value));
        setRecipeData(caloriesData)
    }
    const handleCarbs = (e: any) => {
        const carbsData = recipeData2?.filter((d: any) => d?.carbs === e.target.value);
        setRecipeData(carbsData)
    }
    const handleFat = (e: any) => {
        const fatData = recipeData2?.filter((d: any) => d?.fat === e.target.value);
        setRecipeData(fatData)
    }

    // unique value filtered
    const protein: any[] = [...new Set(recipeData2?.map((d: any) => parseInt(d.protein)))].sort((a: any, b: any) => b - a);
    const calories: any[] = [...new Set(recipeData2?.map((d: any) => parseInt(d.calories)))].sort((a: any, b: any) => b - a);
    const carbs: any[] = [...new Set(recipeData2?.map((d: any) => parseInt(d.carbs)))].sort((a: any, b: any) => b - a);
    const fat: any[] = [...new Set(recipeData2?.map((d: any) => parseInt(d.fat)))].sort((a: any, b: any) => b - a);

    const totalPages = recipeData ? Math.ceil(recipeData.length / 4) : 0;
    const displayedData = recipeData ? recipeData.slice((dataShow - 1) * 4, dataShow * 4) : [];



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
                            <input type="text" className="grow" placeholder="Recipe name" />
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

                        <select onChange={handleProtein} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Protein</option>
                            {
                                protein?.map((p, i) => <option key={i}>{p}g</option>)
                            }
                        </select>

                        <select onChange={handleCalories} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Calories</option>
                            {
                                calories?.map((c, i) => <option key={i}>{c}</option>)
                            }
                        </select>

                        <select onChange={handleCarbs} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>carbs</option>
                            {
                                carbs?.map((c, i) => <option key={i}>{c}g</option>)
                            }
                        </select>

                        <select onChange={handleFat} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>fat</option>
                            {
                                fat?.map((f, i) => <option key={i}>{f}g</option>)
                            }
                        </select>
                    </div>
                </div>
                {/* items */}
                <div className="w-[75%] h-96">
                    <h3 className="font-bold text-lg mb-4">Items</h3>
                    {
                        isLoading
                            ? <div className="flex items-center justify-center h-[73%]">
                                <div className="cube">
                                    <div className="cube_item cube_x"></div>
                                    <div className="cube_item cube_y"></div>
                                    <div className="cube_item cube_y"></div>
                                    <div className="cube_item cube_x"></div>
                                </div>
                            </div>
                            : <div className="grid grid-cols-2 gap-x-6 gap-y-11">
                                {
                                    displayedData?.map((recipe: any, i: number) => <Card key={i}
                                        title={recipe.title?.split(' ').slice(0, 3).join(' ')}
                                        img={recipe.image} protein={recipe.protein} fat={recipe.fat}
                                        calories={recipe.calories} carbs={recipe.carbs} id={recipe.id}
                                    />)
                                }
                            </div>
                    }
                </div>
            </div>

            {/* pagination */}
            <div className="flex justify-end">
                <div className="space-x-4">
                    <button
                        onClick={() => {
                            if (dataShow > 1) setDataShow((prev) => prev - 1);
                        }} className={`${dataShow === 1 ? 'bg-[#D1212166] cursor-none' : 'bg-[#D1212133]'}  border-[#D12121] border-2 rounded-full p-2`}>
                        <GrFormPrevious className="text-xl text-[#D12121]" /></button>
                    <button onClick={() => {
                        if (dataShow < totalPages) setDataShow((prev) => prev + 1);
                    }} className={`${dataShow === totalPages ? 'bg-[#D1212166] cursor-none' : 'bg-[#D1212133]'}  border-[#D12121] border-2 rounded-full p-2`} ><GrFormNext className="text-xl text-[#D12121]" /></button>
                </div>
            </div>
        </div>
    )
}
