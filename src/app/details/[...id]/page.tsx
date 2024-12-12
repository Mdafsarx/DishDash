'use client'
import { Rating } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { CiRepeat } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { ImPower } from "react-icons/im";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import { addFavorite, removeFavorite, clearFavorites } from '../../../store/favoriteSlice';
import { useSelector, useDispatch } from 'react-redux';
import '../../loading.css'


export default function page() {
    const shareUrl: any = 'https://example.com';
    const dispatch = useDispatch();

    const params = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['details-data'],
        queryFn: async () => {
            const res = await axios(`https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=11&random=false&apiKey=14d82ed57ecd4f8cb6a505793be84d2b`)
            const data = await res.data.filter((d: any) => d?.id == params?.id)
            return data[0]
        },
        enabled: !!params
    })

    const handleFavorite = () => {
        const storedDataString = localStorage?.getItem('favoriteData');
        const storedData: any[] = storedDataString ? JSON.parse(storedDataString) : [];
        storedData.push(data);
        localStorage.setItem('favoriteData', JSON.stringify(storedData));
    }

    // if (isLoading) return <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
    //     <div className="cube">
    //         <div className="cube_item cube_x"></div>
    //         <div className="cube_item cube_y"></div>
    //         <div className="cube_item cube_y"></div>
    //         <div className="cube_item cube_x"></div>
    //     </div>
    // </div>


    return (
        <div>
            {/* title */}
            <div className="p-6 bg-[#00A14966] text-center">
                <h1 className="uppercase text-2xl font-black text-white">Planner Details</h1>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* img and details info */}
                <div className="mt-14">

                    <div className="flex gap-x-8">
                        {/* image */}
                        <figure className="w-1/2">
                            <img className="rounded-2xl w-full" src={data?.image} alt="" />
                        </figure>
                        {/* details */}
                        <div className="w-1/2">
                            <h1 title={data?.title} className="text-3xl font-bold">
                                {data?.title?.split(' ').slice(0, 3).join(' ')}...</h1>
                            {/* rating and cuisine name */}
                            <div className="flex items-center justify-between border-b py-[1.15rem]">
                                <p><span className="bg-[#00A149] rounded-full p-2 text-white">{data?.protein} protein</span></p>
                                <Rating name="read-only" value={5} readOnly />
                            </div>
                            <p className="py-[1.15rem] border-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores iste rem, aspernatur nam animi. Deserunt totam dolores in vitae voluptas quibusdam voluptatum cumque, quam facilis. Aperiam hic autem eveniet.
                            </p>
                            <div className="space-y-2 border-b py-[1.15rem]">
                                <p><span className="font-bold">Diet:</span> None</p>
                                <p><span className="font-bold">Calories:</span> {data?.calories}</p>
                                <p><span className="font-bold">carbs:</span> {data?.carbs}</p>
                                <p><span className="font-bold">fat:</span> {data?.fat}</p>
                            </div>
                            <div className="pt-[1.15rem] flex items-center justify-between">
                                <p className="font-bold">Share it:</p>
                                <div className="flex items-center gap-2">
                                    <FacebookShareButton url={shareUrl} >
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={shareUrl} >
                                        <TwitterIcon size={32} round />
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={shareUrl}>
                                        <LinkedinIcon size={32} round />
                                    </LinkedinShareButton>
                                    <RedditShareButton url={shareUrl} >
                                        <RedditIcon size={32} round />
                                    </RedditShareButton>
                                </div>
                            </div>
                            <div className="pt-2">
                                <p className="flex items-center gap-x-2"><GrFavorite className="text-xl" onClick={handleFavorite} /> Add to favorite</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* descriptions */}
                <div className="flex gap-6 my-20">

                    <div className="w-[70%] h-96 space-y-2.5">
                        {/* description */}
                        <div className="space-y-2.5">
                            <h1 className="text-2xl font-">Description</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum numquam ipsum earum iste. Deserunt, illum quasi pariatur, aut temporibus ex dolorum ad, optio et tenetur amet nemo error expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, natus!</p>
                        </div>
                        <div className="space-y-2.5">
                            <h1 className="text-2xl border-b pb-2">Directions</h1>
                            <ol className="list-decimal space-y-2.5 py-1 pl-5">
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                            </ol>
                        </div>

                    </div>

                    <div className="w-[30%] bg-[#00A14966] rounded-2xl p-6 space-y-2.5">
                        <h1 className="text-2xl border-b border-white pb-2">Ingredients</h1>
                        <ul className="list-disc pl-4 space-y-2.5 border-b border-white pb-2">
                            <li>Chicken</li>
                            <li>Chicken</li>
                            <li>Chicken</li>
                            <li>Chicken</li>
                        </ul>
                        <h1 className="text-2xl border-b border-white pb-2">Menu</h1>
                        <div>
                            <p className="flex items-center gap-1.5 py-2"><ImPower className="text-lg text-[#00A149]" />
                                {data?.calories} cal</p>
                            <p className="flex items-center gap-1.5">
                                <CiRepeat className="text-2xl text-[#00A149]" />
                                {data?.carbs} carb</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}