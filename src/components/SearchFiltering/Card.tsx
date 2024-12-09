import { IoMdTime } from "react-icons/io";
import { MdDone } from "react-icons/md";

export default function Card() {
    return (
        <div className="flex items-center gap-5">

            <img src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1733655960/brooke-lark-nTZOILVZuOg-unsplash_urjjyk.jpg" className="w-44 h-32 object-fill rounded-2xl" alt="" />

            <div className="w-2/3">
                <h1 className="font-bold text-lg mb-1.5">Spaghetti Carbonara</h1>
                <div>
                    {/* cuisine */}
                    <p className="mb-1.5"><span className="font-semibold">Cuisine:</span> American</p>
                    {/* diet */}
                    <p className="mb-1.5"><span className="font-semibold">Diet:</span> None</p>
                    <div className="flex items-center gap-5">
                        <p className="flex items-center gap-1"><IoMdTime className="text-lg text-[#00A149]"/> 30 min</p>
                        <p className="flex items-center gap-1"><MdDone className="text-lg text-[#00A149]"/> 30 min</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
