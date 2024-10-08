import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Product from "./Product";
import { useEffect, useState } from "react";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('')

  const [count, setCount] = useState(0);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  const { data: products = [], isPending } = useQuery({
    queryKey: ["products", currentPage, itemsPerPage, filter],
    queryFn: async () => {
      const res = await axiosPublic.get(`/all-products?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`);
      console.log(res.data);
      setCount(res.data.length);

      return res.data;
    },
  });
  console.log(products);

  useEffect(
    () => {
      const getCount = async () => {
        const { data } = await axiosPublic.get(`/products-count`);

        // -count?filter=${filter}&search=${search}`
        setCount(data.count);
      };
      getCount();
    },
    [
      // filter, search
    ]
  );

  console.log(count);

  //  handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          {/* category */}
          <div>
            <select
            onChange={e => {
                setFilter(e.target.value)
                setCurrentPage(1)
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fitness">Fitness</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Home & Office">Home & Office</option>
            </select>
          </div>
          {/* brand name */}
          {/* <div>
            <select
              name="name"
              id="name"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Brand Name</option>
              <option value="Electronics">Electronics</option>
              <option value="Fitness">Fitness</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Home & Office">Home & Office</option>
            </select>
          </div> */}

          {/* price */}
          {/* <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fitness">Fitness</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Home & Office">Home & Office</option>
            </select>
          </div> */}

          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-blue-400 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Product Name"
                aria-label="Enter Product Name"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Price</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
      {/* previous button */}
      <div className="flex justify-center mt-16 mb-12">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
       
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
                currentPage === btnNum ? 'bg-blue-500 text-white' : ''
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            >
          
            {btnNum}
          </button>
        ))}
 {/* next button */}
        <button 
         disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Products;
