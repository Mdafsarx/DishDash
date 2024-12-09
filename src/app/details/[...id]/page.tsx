'use client'
import { Rating } from "@mui/material";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from "react-share";

export default function page() {

    const shareUrl: any = 'https://example.com';

    return (
        <div className="min-h-screen max-w-7xl mx-auto">

            <div className="flex gap-x-6">
                {/* image */}
                <figure className="w-1/2">
                    <img className="rounded-2xl" src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1733655960/brooke-lark-nTZOILVZuOg-unsplash_urjjyk.jpg" alt="" />
                </figure>
                {/*  */}
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold">Grilled Chicken and ahmed</h1>
                    {/* rating and cuisine name */}
                    <div className="flex items-center justify-between border-b py-5">
                        <p><span className="bg-[#00A149] rounded-full p-2 text-white">Italian</span></p>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                    <p className="py-5 border-b">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores iste rem, aspernatur nam animi. Deserunt totam dolores in vitae voluptas quibusdam voluptatum cumque, quam facilis. Aperiam hic autem eveniet.
                    </p>
                    <div className="space-y-2 border-b py-4">
                        <p><span className="font-bold">Diet:</span> None</p>
                        <p><span className="font-bold">Calories:</span> 800</p>
                        <p><span className="font-bold">PrepTime:</span> 20</p>
                        <p><span className="font-bold">Steps:</span> 10</p>
                    </div>
                    <div className="py-5 flex items-center justify-between">
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
                </div>
            </div>

        </div>
    )
}
