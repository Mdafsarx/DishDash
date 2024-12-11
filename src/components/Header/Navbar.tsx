'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiMeal } from "react-icons/gi";


export default function Navbar() {
  const navLink = usePathname()
  return (
    <div className={`flex justify-between items-center h-20 max-w-[95%] mx-auto ${navLink !== '/' && 'border-'}`}>
      {/* name and link */}
      <div className="flex items-center gap-9">

        <div>
          {/* dropdown for small device */}
          <div className="dropdown hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          {/* brand logo and name */}
          <Link href={'/'} className="uppercase font-extrabold text-xl flex items-center">
            <GiMeal className="text-[#00A149] text-3xl" />DishDash
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ul className="flex items-center gap-x-5 *:">
            <Link href={'/'} className={navLink === '/' ? 'bg-[#00A149] text-white font-bold rounded-md p-2 py-1' : 'font-bold'}>Home</Link>
            <Link href={'/planner'} className={navLink === '/planner' ? 'bg-[#00A149] text-white font-bold rounded-md p-2 py-1' : 'font-bold'}>Planner</Link>
            <Link href={'/favorites'} className={navLink === '/favorites' ? 'bg-[#00A149] text-white font-bold rounded-md p-2 py-1' : 'font-bold'}>Favorites</Link>
            <Link href={'/contact-us'} className={navLink === '/contact-us' ? 'bg-[#00A149] text-white font-bold rounded-md p-2 py-1' : 'font-bold'}>Contact-us</Link>
          </ul>
        </div>

      </div>
      {/* login and profile */}
      <div>
        <button className="btn bg-[#D12121] text-white">Login</button>
      </div>
    </div>
  )
}
