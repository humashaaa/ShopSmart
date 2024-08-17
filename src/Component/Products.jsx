import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Product from "./Product";

const Products = () => {
  const axiosPublic = useAxiosPublic();
  const { data: products = [], isPending } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(products);

  return (
    <div>
    <div className="grid grid-cols-4 gap-5 p-3">
        {
            products.map(product=> <Product key={product.id} product={product}></Product>)
        }
    </div>
  </div>
  );
};

export default Products;
