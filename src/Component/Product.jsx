const Product = ({ product }) => {
  const {
    productName,
    brandName,
    productImage,
    description,
    price,
    category,
    ratings,
    createdAt,
    id,
  } = product;
  return (
    <div>
      <div className="card bg-base-100 w-[22rem] h-[40rem] shadow-xl">
        <figure>
          <img className="w-80 h-80"
            src={productImage}
        alt={productName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>{description}</p>
          <p>Price : {price}</p>
          <div className="flex justify-between">
            <p className="font-bold">Category :{category}</p>
            <p className="font-bold">Ratings: {ratings}</p>
          </div>
          <p className="font-bold">Created at :{createdAt}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
