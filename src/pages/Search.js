// import React, { useEffect, useState } from 'react';
// import { Card } from '../components/Card';

// export const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     searchProducts();
//   }, [searchTerm]);

//   const searchProducts = async () => {
//     try {
//       const response = await fetch(`https://fakestoreapi.com/products?title=${searchTerm}`);
//       if (response.ok) {
//         const products = await response.json();
//         setData(products);
//       } else {
//         throw new Error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     searchProducts();
//   };

//   return (
//     <div className="container mx-auto">
//       <form onSubmit={handleSearch}>
//         <label htmlFor="default-search" className="sr-only">
//           Search
//         </label>
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           </div>
//           <input
//             type="search"
//             id="default-search"
//             className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Search Products, Category..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
//           >
//             Search
//           </button>
//         </div>
//       </form>
//       <div className="grid grid-cols-4 gap-4">
//         {data.map((product) => (
//           <Card key={product.id} data={product} />
//         ))}
//       </div>
//     </div>
//   );
// };
