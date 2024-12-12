'use client'

export default function page() {

  return (
    <div>
      {/* favorite and filter */}
      <div className="p-6 border-y border-[#00A149] flex items-center justify-between px-10">
        <h1 className="uppercase text-2xl font-black">Favorite(1)</h1>
        <select className="select select-bordered w-full max-w-40">
          <option disabled selected>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>

      <div className="max-w-7xl mx-auto py-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Recipe Name</th>
                <th>Calories</th>
                <th>Cuisine</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* img */}
                <td>
                  <div className="avatar">
                    <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="" />
                  </div>
                </td>
                <td>Salad with Grilled Chicken</td>
                <td>300</td>
                <td>American</td>
                <th><button className="btn btn-ghost btn-xs">details</button></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
