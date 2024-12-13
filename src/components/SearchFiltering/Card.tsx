import Link from "next/link";
import { CiRepeat } from "react-icons/ci";
import { ImPower } from "react-icons/im";

type CardProps = { title: string, img: string, protein: string, fat: string, calories: number, carbs: string, id: number };

export default function Card({ title, img, protein, fat, calories, carbs, id }: CardProps) {
    return (
        <Link href={`/details/${id}`} className="flex items-center gap-5">

            <img src={img} className="w-44 h-32 object-fill rounded-2xl" alt="Cover image" />

            <div className="w-2/3">
                <h1 className="font-bold text-lg mb-1.5">{title}</h1>
                <div>
                    {/* cuisine */}
                    <p className="mb-1.5"><span className="font-semibold">protein:</span> {protein}</p>
                    {/* diet */}
                    <p className="mb-1.5"><span className="font-semibold">fat:</span> {fat}</p>
                    <div className="flex items-center gap-5">
                        <p className="flex items-center gap-1"><ImPower className="text-lg text-[#00A149]" />
                            {calories} cal</p>
                        <p className="flex items-center gap-1"><CiRepeat className="text-xl text-[#00A149]" /> {carbs} carb</p>
                    </div>
                </div>
            </div>

        </Link>
    )
}
