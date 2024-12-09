import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Card from "./Card";

export default function SearchFiltering() {
    return (
        <div className="max-w-7xl mx-auto py-20 space-y-10">
            {/* title */}
            <div className="text-center">
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
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">Items</h3>
                        <div>
                            <button><GrFormPrevious /></button>
                            <button><GrFormNext /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-11">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>

        </div>
    )
}
