'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from '../../store/loadingSlice';
type CardProps = { title: string, image: string, protein: string, calories: number, id: number };
import '../loading.css'


export default function page() {
  const [favoriteData, setFavoriteData] = useState([])
  const dispatch = useDispatch();
  const loading = useSelector((state: any) => state.loading.loading);

  useEffect(() => {
    const localStorageData = localStorage?.getItem('favoriteData');
    const favoriteData = localStorageData ? JSON.parse(localStorageData) : [];
    setFavoriteData(favoriteData);
    dispatch(setLoading(false))
  }, []);

  const handleSort = (e: any) => {
    if (e.target.value === 'Low to high') {
      setFavoriteData([...favoriteData].sort((a: any, b: any) => a?.calories - b?.calories))
    } else {
      setFavoriteData([...favoriteData].sort((a: any, b: any) => b?.calories - a?.calories))
    }
  }
  const handleDelete = (index: number) => {
    const deletedData = [...favoriteData];
    deletedData.splice(index, 1);
    setFavoriteData(deletedData);
    localStorage.setItem('favoriteData', JSON.stringify(deletedData));
    toast.success('Item deleted successful')
  }

  if (loading) return <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
    <div className="cube">
      <div className="cube_item cube_x"></div>
      <div className="cube_item cube_y"></div>
      <div className="cube_item cube_y"></div>
      <div className="cube_item cube_x"></div>
    </div>
  </div>

  return (
    <div>
      {/* favorite and filter */}
      <div className="p-6 border-y border-[#00A149] flex items-center justify-between px-10">
        <h1 className="uppercase text-2xl font-black">Favorite({favoriteData?.length})</h1>
        <select onChange={handleSort} className="select select-bordered border-2 border-black w-full max-w-40">
          <option disabled selected>Sort by calories</option>
          <option>Low to high</option>
          <option>High to low</option>
        </select>
      </div>
      {
        !favoriteData?.length
          ? <div className="flex flex-col items-center justify-center min-h-[calc(100vh-175px)]">
            <img className="size-40" src="https://res.cloudinary.com/dz1fy2tof/image/upload/v1734016584/empty-folder_scx0zy.png" alt="" />
            <h3 className="text-xl font-bold text-[#D12121]">You don't add anything!</h3>
          </div>
          : <div className="max-w-7xl mx-auto py-10 pb-20">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="border-b border-gray-200">
                    <th>Image</th>
                    <th>Recipe Name</th>
                    <th>Calories</th>
                    <th>protein</th>
                    <th>Details</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* body */}
                <tbody>
                  {
                    favoriteData?.map(({ title, image, protein, calories, id }: CardProps, i) => <tr key={i} className="border-b border-gray-200">
                      {/* img */}
                      <td><img src={image} alt="Cover image" className="h-24 w-28 object-cover rounded-md" /></td>
                      <td>{title?.split(' ').slice(0, 3).join(' ')}</td>
                      <td>{calories}</td>
                      <td>{protein}</td>
                      <th><Link href={`/details/${id}`} className="btn btn-ghost btn-xs cursor-pointer text-[#00A149] hover:bg-[#00A149] hover:text-white">details</Link></th>
                      <td><label><MdDeleteOutline onClick={() => handleDelete(i)} className="text-xl cursor-pointer text-[#D12121]" /></label></td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
      }

    </div>
  )
}
