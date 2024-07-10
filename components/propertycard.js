// import React from "react";

// const propertycard = () => {
//   const response = await fetch("http://localhost:3000/api/submit");
//   if (!response.ok) {
//     throw new Error("Failed to fetch images");
//   }
//   const data = await response.json();
//   console.log(data);

//   console.log(abc);
//   return (
//     <div>
//       {data.map((item) => (
//         <div
//           key={item.id}
//           className="card2 shadow-md sm:w-[100%] bg-[#F4F4F4] rounded-md"
//         >
//           <div>
//             <img src="./EVQD7oVUwAAro4g.jpg" alt="" className="rounded-t-md" />
//           </div>

//           <div className="flex flex-col gap-2 p-4 py-6">
//             <div className="flex gap-2 items-center">
//               <p className="text-slate-600 font-semibold">PKR</p>
//               <h1 className="md:text-lg text-xl font-bold text-orange-600">
//                 {item.MonthlyRent} / Month
//               </h1>
//             </div>
//             <div className="flex justify-between">
//               <a href="">
//                 <h1 className="md:text-xl text-lg font-bold hover:text-blue-600">
//                   {item.Title}
//                 </h1>
//               </a>
//               <p className="text-sm text-slate-600">16 jun</p>
//             </div>
//             <div className="flex gap-6">
//               <div className="flex gap-2 items-center">
//                 <p>1</p>
//                 <img
//                   src="images__2_-removebg-preview (2).png"
//                   alt=""
//                   className="w-6"
//                 />
//               </div>
//               <div className="flex gap-2 items-center">
//                 <p>1</p>
//                 <img
//                   src="images__3_-removebg-preview (1).png"
//                   alt=""
//                   className="w-6"
//                 />
//               </div>
//               <p>10 Marla</p>
//             </div>
//             <p className="text-sm text-slate-600 flex gap-1 items-center">
//               <svg
//                 className="h-4 w-4 text-red-500"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//               {item.Location}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default propertycard;
