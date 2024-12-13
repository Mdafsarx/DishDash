'use client'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import '../../app/loading.css'

interface Recipe {
    protein: string,
    calories: number,
    carbs: string,
    fat: string,
    title: string,
    image: string,
    id:number
}
interface RecipeSort {
    protein: string,
    calories: string,
    carbs: string,
    fat: string,
}
interface search {
    title: string,
}

export default function SearchFiltering() {
    const [dataShow, setDataShow] = useState(1);
    const [recipeData, setRecipeData] = useState([]);
    const [recipeData2, setRecipeData2] = useState([]);
    const [search, setSearch] = useState('')
    const { isLoading } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const res = await axios(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=11&random=false&apiKey=${process.env.API_KEY}`)
            const data = await res.data.slice(2)
            setRecipeData(data)
            setRecipeData2(data)
        }
    })

    const handleProtein = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const proteinData = recipeData2?.filter((d: Recipe) => d?.protein === e.target.value);
        setRecipeData(proteinData)
    }
    const handleCalories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const caloriesData = recipeData2?.filter((d: Recipe) => d?.calories === parseInt(e.target.value));
        setRecipeData(caloriesData)
    }
    const handleCarbs = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const carbsData = recipeData2?.filter((d: Recipe) => d?.carbs === e.target.value);
        setRecipeData(carbsData)
    }
    const handleFat = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const fatData = recipeData2?.filter((d: Recipe) => d?.fat === e.target.value);
        setRecipeData(fatData)
    }

    const handleSearch = () => {
        const searchedData = recipeData2?.filter((d: search) => d?.title.toLowerCase().includes(search))
        setRecipeData(searchedData)
    }

    // unique value filtered
    const protein: number[] = [...new Set(recipeData2?.map((d: RecipeSort) => parseInt(d.protein)))].sort((a, b) => b - a);
    const calories: number[] = [...new Set(recipeData2?.map((d: RecipeSort) => parseInt(d.calories)))].sort((a, b) => b - a);
    const carbs: number[] = [...new Set(recipeData2?.map((d: RecipeSort) => parseInt(d.carbs)))].sort((a, b) => b - a);
    const fat: number[] = [...new Set(recipeData2?.map((d: RecipeSort) => parseInt(d.fat)))].sort((a, b) => b - a);

    const totalPages = recipeData ? Math.ceil(recipeData.length / 4) : 0;
    const displayedData = recipeData ? recipeData.slice((dataShow - 1) * 4, dataShow * 4) : [];



    return (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-10 xl:px-0">
            {/* title */}
            <div className="text-center mb-10">
                <h1 className="text-xl md:text-3xl font-bold">Discover Delicious Recipes</h1>
                <p className="text-balance">Plan your meals, find recipes, cook with ease, and enjoy healthy living every <br /> day with personalized recommendations and smart meal planning tools.</p>
            </div>

            {/* search filter and card */}
            <div className="flex flex-col xl:flex-row gap-10">
                {/* search and filter */}
                <div className="block md:hidden xl:block xl:w-[25%]">
                    <h3 className="font-bold text-lg mb-4">Filters Option</h3>
                    <div className="space-y-4">
                        <label className="input input-bordered flex items-center gap-2 max-w-full xl:max-w-xs">
                            <input type="text" onChange={(e) => setSearch(e.target.value)} className="grow" placeholder="Recipe name" />
                            <svg onClick={handleSearch}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70 cursor-pointer">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>

                        <select onChange={handleProtein} className="select select-bordered w-full max-w-full xl:max-w-xs">
                            <option disabled selected>Protein</option>
                            {
                                protein?.map((p, i) => <option key={i}>{p}g</option>)
                            }
                        </select>

                        <select onChange={handleCalories} className="select select-bordered w-full max-w-full xl:max-w-xs">
                            <option disabled selected>Calories</option>
                            {
                                calories?.map((c, i) => <option key={i}>{c}</option>)
                            }
                        </select>

                        <select onChange={handleCarbs} className="select select-bordered w-full max-w-full xl:max-w-xs">
                            <option disabled selected>carbs</option>
                            {
                                carbs?.map((c, i) => <option key={i}>{c}g</option>)
                            }
                        </select>

                        <select onChange={handleFat} className="select select-bordered w-full max-w-full xl:max-w-xs">
                            <option disabled selected>fat</option>
                            {
                                fat?.map((f, i) => <option key={i}>{f}g</option>)
                            }
                        </select>
                    </div>
                </div>
                {/* items */}
                <div className="xl:w-[75%]">
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
                            : <div className="grid md:grid-cols-2 gap-x-6 gap-y-11">
                                {
                                    displayedData?.map((recipe: Recipe, i: number) => <Card key={i}
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
            <div className="flex justify-end mt-4 xl:mt-0">
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
