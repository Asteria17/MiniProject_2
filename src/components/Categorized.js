import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '.';
import { Carousel } from '../pages/Carousel';
import { Home } from '../pages/Home';

export const Categorized = ({ products }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [id, title, category, price, rating] = data;
  useEffect(() => {
    getCategorized();
  }, []);

  const getCategorized = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    setData(await response.json());
    setFilter(data);

    console.log(data);
  };

  const filterProducts = (category) => {
    const updatedItems = data.filter((item) => item.category === category);
    console.log(updatedItems);
    setFilter(updatedItems);
  };

  return (
    <>
      <div className="container mx-auto flex flex-row pb-5">
        <div className=" mt-12 ml-20 bg-gray-200">
          <div className="basis-1/4 flex-wrap  w-48  text-gray-900 b rounded-lg bg-blue-900 text-white">
            <button
              onClick={() => <Link to="../pages/Home.js" />}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              All
            </button>

            <button
              onClick={() => filterProducts('electronics')}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Electronics
            </button>
            <button
              onClick={() => filterProducts("women's clothing")}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Women's Clothing
            </button>
            <button
              onClick={() => filterProducts("men's clothing")}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Men's Clothing
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Jewelry
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="disable relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Jewelry
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="disable relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Jewelry
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="disable relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Jewelry
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="disable relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Jewelry
            </button>
            <button
              onClick={() => filterProducts('jewelery')}
              type="button"
              className="disable relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-200 hover:text-sky-500 focus:text-sky-500 border-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500 focus:text-white"
            >
              Jewelry
            </button>
          </div>
        </div>
        <div className="basis-3/4">
          <Carousel />
        </div>
      </div>
<div className='grid grid-flow-col gap-1 '>
  
  {/* Side checklist  */}
<div className="container mx-auto bg-gray-300 border border-blue-100 rounded-lg mt-8">
      <div className="List">
      <h3 className="mb-2 font-bold text-gray-900 text-lg">
       Clothe Brands
      </h3>
      <ul className="w-48 text-sm font-medium text-pink-900  rounded-lg bg-gray-300 border-blue-600 text-white-900">
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="vue-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Levis
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="react-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Hanes
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Adidas
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              H&M
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
             Bench
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Nike
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-white-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Cotton ON
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Culture
            </label>
          </div>
          </li>
      </ul>
    </div>
    {/* 2nd checklist  */}
    <div className="List mt-6">
      <h3 className="mb-2 font-bold text-gray-900 text-lg ">
       Gaming
      </h3>
      <ul className="w-48 text-sm font-medium text-pink-900  rounded-lg bg-gray-300 border-blue-600 text-white-900">
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="vue-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="vue-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Laptop
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="react-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="react-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Android
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Play Station
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Computer
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
             XBOX
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              VR
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-white-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Cotton ON
            </label>
          </div>
          </li>
        <li className="w-full border-b border-gray-200 rounded-t-lg border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <label
              htmlFor="angular-checkbox"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 text-gray-300"
            >
              Tablet
            </label>
          </div>
          </li>
      </ul>
    </div>
    </div>
      <section className="container flex flex-wrap max-w-7x1 mx-auto py-7 items-center rounded-lg">
        <div className="flex flex-wrap inline-grid grid-cols-4 gap-2">
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
          {filter.map((product) => (
            <Card
              key={product.id}
              data={product}
            />
          ))}
        </div>
      </section>
    </div>
    </>
  );
};
